#version 300 es


uniform mat4 u_Model;
uniform mat4 u_ModelInvTr;
uniform mat4 u_ViewProj;
uniform vec2 u_PlanePos; // Our location in the virtual world displayed by the plane
uniform vec4 u_CityInfo; //[0] = city radius [1] = cityHeight

in vec4 vs_Pos;
in vec4 vs_Nor;
in vec4 vs_Col;
in vec4 vs_Info;

out vec3 fs_Pos;
out vec4 fs_Nor;
out vec4 fs_Col;
out vec4 fs_Info;
out vec4 fs_RealPos;
out vec4 fs_LandNormal;

const float WATER = 0.0;
const float LAND = 1.0;
const float COAST = 2.0;
const float MOUNTAIN = 3.0;
const float SPUR = 4.0;

vec4 vs_Pos2;

float random1( vec2 p , vec2 seed) {
  return fract(sin(dot(p + seed, vec2(127.1, 311.7))) * 43758.5453);
}

float random1( vec3 p , vec3 seed) {
  return fract(sin(dot(p + seed, vec3(987.654, 123.456, 531.975))) * 85734.3545);
}

vec2 random2( vec2 p , vec2 seed) {
  return fract(sin(vec2(dot(p + seed, vec2(311.7, 127.1)), dot(p + seed, vec2(269.5, 183.3)))) * 85734.3545);
}


float interpNoiseRandom2to1(vec2 p, vec2 seed) {
  float fractX = fract(p.x);
  float x1 = floor(p.x);
  float x2 = x1 + 1.0;

  float fractY = fract(p.y);
  float y1 = floor(p.y);
  float y2 = y1 + 1.0;

  float v1 = random1(vec2(x1, y1), seed);
  float v2 = random1(vec2(x2, y1), seed);
  float v3 = random1(vec2(x1, y2), seed);
  float v4 = random1(vec2(x2, y2), seed);

  float i1 = mix(v1, v2, fractX);
  float i2 = mix(v3, v4, fractX);

  //    return smoothstep(i1, i2, fractY);
  return mix(i1, i2, fractY);

}

float fbm2to1(vec2 p, vec2 seed) {
  float total  = 0.0;
  float persistence = 0.5;
  float octaves = 8.0;

  for(float i = 0.0; i < octaves; i++) {
    float freq = pow(2.0, i);
    float amp = pow(persistence, i+1.0);
    total = total + interpNoiseRandom2to1(p * freq, seed) * amp;
  }
  return total;
}




float calcMountainHeight(float x, float y, float z) {
  float cityRadius = u_CityInfo[0];
  float cityHeight = u_CityInfo[1];
  float maxElevation = 15.0;
  float baseMtHeight =  cityHeight;
  float baseZ = -10.0;
  float baseToMaxWidth = u_CityInfo[1];
  float yNew = 0.0;
  //wall behind city
  if (abs(x) < cityRadius) {
    baseMtHeight= cityHeight * (1.0 - abs(x)/cityRadius);
  }
  //wall moving out fromthe city
  else {
    baseMtHeight = cityHeight * min(1.0, (abs(x) - cityRadius)/cityRadius);
  }


  //standard mountaints 10 clicks back from back of fortress
  if (z < baseZ - baseToMaxWidth) {
    yNew = cityHeight + vs_Pos2.y * maxElevation;
    fs_Col.r = MOUNTAIN;
  }
  //ramp up from mountain height at back of fortress
  else if (z <= baseZ) {
    float scale = (baseZ - z) / baseToMaxWidth;
    //ramp up to ultimate height
    yNew = mix(baseMtHeight, cityHeight + vs_Pos2.y * maxElevation, scale);
    fs_Col.r = MOUNTAIN;
  }
  //mountain start radiates out from fortress
  else if (abs(x) >= cityRadius) {
    float mtStart = (abs(x) - cityRadius) * 0.5;
    float distToBase = z - baseZ;
    if (z < mtStart) {
      float scale = (mtStart - z) / (mtStart - baseZ);
      if (scale < 0.5) scale = smoothstep(0.0, 1.0, scale);
      //modelposition.y = baseMtHeight + (baseZ - z) * 0.1  *  vs_Pos.y*(maxElevation - baseMtHeight);
      yNew = vs_Pos.y * scale + baseMtHeight * scale;
      fs_Col.r = MOUNTAIN;
    }
  }
  return yNew;

}

/**
Calculate the normal for each vertex by getting the height of the four
surrounding vertex and calculate the slope between them
*/
vec4 calcMountainNormal(float x, float y, float z) {

  //get the four surrounding points
  float sampleDistance = 0.1;
  vec3 x1 = vec3(x, calcMountainHeight(x, y, z + sampleDistance), z + sampleDistance);
  vec3 x2 = vec3(x, calcMountainHeight(x, y, z - sampleDistance), z - sampleDistance);

  vec3 z1 = vec3(x + sampleDistance, calcMountainHeight(x + sampleDistance, y, z), z);
  vec3 z2 = vec3(x - sampleDistance, calcMountainHeight(x - sampleDistance, y, z), z);

  return vec4(normalize(cross(x1-x2, z1-z2)), 1.0);

}

float calcSpurXOffset(float y, float z) {
  return fbm2to1(vec2(y,z), vec2(3.34, 4343.2)) - 0.5;
}

float calcSpurZOffset(float x, float y) {
  return fbm2to1(vec2(x,y), vec2(3.1, 43.2)) * 0.3;
}


void main()
{
  vs_Pos2 = vs_Pos;
  fs_Col = vs_Col;
  if(vs_Pos.y == 0.0) {
    vs_Pos2.y = fbm2to1(vec2(vs_Pos2.x/10.0, vs_Pos2.z/10.0), vec2(3.43, 4.43));
    fs_Col.r = LAND;
  }
  fs_Pos = vs_Pos2.xyz;
  fs_Nor = vs_Nor;
  fs_Info = vs_Info;
  vec4 modelposition = vec4(vs_Pos2.x, vs_Pos2.y, vs_Pos2.z, 1.0);

  //this must be our spur stuff
  if(vs_Pos2.y > 1.0) {
      fs_Col.r = SPUR;
    //adjust the x position
    //float adjustment = fbm2to1(vs_Pos2.yz, vec2(3.34, 4343.2));
    modelposition.x = vs_Pos2.x + calcSpurXOffset(vs_Pos2.y, vs_Pos2.z);
    //modelposition.z = vs_Pos2.z - calcSpurZOffset(vs_Pos2.x, vs_Pos2.y);
  }

  if(vs_Pos2.y <= 1.0) {
    modelposition.y = calcMountainHeight(modelposition.x, modelposition.y, modelposition.z);
  }

  fs_LandNormal = calcMountainNormal(modelposition.x, modelposition.y, modelposition.z);
  fs_RealPos = modelposition.xyzw;

  modelposition = u_Model * modelposition;
  gl_Position = u_ViewProj * modelposition;
}
