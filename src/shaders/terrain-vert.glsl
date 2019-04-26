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

const int WATER = 0;
const int LAND = 1;
const int COAST = 2;
const int MOUNTAIN = 3;
const int SPUR = 4;

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
    yNew = cityHeight + vs_Pos.y * maxElevation;
  }
  //ramp up from mountain height at back of fortress
  else if (z < baseZ) {
    float scale = (baseZ - z) / baseToMaxWidth;
    //ramp up to ultimate height
    yNew = mix(baseMtHeight, cityHeight + vs_Pos.y * maxElevation, scale);
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
  fs_Pos = vs_Pos.xyz;
  fs_Col = vs_Col;
  fs_Nor = vs_Nor;
  fs_Info = vs_Info;
  vec4 modelposition = vec4(vs_Pos.x, vs_Pos.y, vs_Pos.z, 1.0);

  //this must be our spur stuff
  if(vs_Pos.y > 1.0) {
    //adjust the x position
    //float adjustment = fbm2to1(vs_Pos.yz, vec2(3.34, 4343.2));
    modelposition.x = vs_Pos.x + calcSpurXOffset(vs_Pos.y, vs_Pos.z);
    modelposition.z = vs_Pos.z - calcSpurZOffset(vs_Pos.x, vs_Pos.y);
  }

  if(vs_Pos.y <= 1.0) {

    //water
    if (vs_Pos.y < 0.4) {
      modelposition.y = -0.5;
      fs_Pos.y = 0.4;
    }
    //sand
    else if (vs_Pos.y < 0.5) {
      modelposition.y = vs_Pos.y - 0.5;
    }
    //land
    else {
      modelposition.y = -0.001;
    }

    modelposition.y = calcMountainHeight(modelposition.x, modelposition.y, modelposition.z);



    float cityRadius = u_CityInfo[0];
    float cityHeight = u_CityInfo[1];
    float maxElevation = 15.0;
    float baseMtHeight =  cityHeight;
    float baseZ = -10.0;
    float baseToMaxWidth = u_CityInfo[1];
    //wall behind city
    if (abs(vs_Pos.x) < cityRadius) {
      baseMtHeight= cityHeight * (1.0 - abs(vs_Pos.x)/cityRadius);
    }
    //wall moving out fromthe city
    else {
      baseMtHeight = cityHeight * min(1.0, (abs(vs_Pos.x) - cityRadius)/cityRadius);
    }


    //standard mountaints 10 clicks back from back of fortress
    if (vs_Pos.z < baseZ - baseToMaxWidth) {
      modelposition.y = cityHeight + vs_Pos.y * maxElevation;
    }
    //ramp up from mountain height at back of fortress
    else if (vs_Pos.z < baseZ) {
      float scale = (baseZ - vs_Pos.z) / baseToMaxWidth;
      //ramp up to ultimate height
      modelposition.y = mix(baseMtHeight, cityHeight + vs_Pos.y * maxElevation, scale);
    }
    //mountain start radiates out from fortress
    else if (abs(vs_Pos.x) >= cityRadius) {
      float mtStart = (abs(vs_Pos.x) - cityRadius) * 0.5;
      float distToBase = vs_Pos.z - baseZ;
      if (vs_Pos.z < mtStart) {
        float scale = (mtStart - vs_Pos.z) / (mtStart - baseZ);
        if (scale < 0.5) scale = smoothstep(0.0, 1.0, scale);
        //modelposition.y = baseMtHeight + (baseZ - vs_Pos.z) * 0.1  *  vs_Pos.y*(maxElevation - baseMtHeight);
        modelposition.y = vs_Pos.y * scale + baseMtHeight * scale;
      }
    }
  }

  modelposition = u_Model * modelposition;
  gl_Position = u_ViewProj * modelposition;
}
