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


float random1( vec2 p , vec2 seed) {
  return fract(sin(dot(p + seed, vec2(127.1, 311.7))) * 43758.5453);
}

float random1( vec3 p , vec3 seed) {
  return fract(sin(dot(p + seed, vec3(987.654, 123.456, 531.975))) * 85734.3545);
}

vec2 random2( vec2 p , vec2 seed) {
  return fract(sin(vec2(dot(p + seed, vec2(311.7, 127.1)), dot(p + seed, vec2(269.5, 183.3)))) * 85734.3545);
}


void main()
{
  fs_Pos = vs_Pos.xyz;
  fs_Col = vs_Col;
  fs_Nor = vs_Nor;
  fs_Info = vs_Info;
  vec4 modelposition = vec4(vs_Pos.x, vs_Pos.y, vs_Pos.z, 1.0);


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
