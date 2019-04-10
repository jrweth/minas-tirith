#version 300 es


uniform mat4 u_Model;
uniform mat4 u_ModelInvTr;
uniform mat4 u_ViewProj;
uniform vec2 u_PlanePos; // Our location in the virtual world displayed by the plane

in vec4 vs_Pos;
in vec4 vs_Nor;
in vec4 vs_Col;
in vec4 vs_Rotate;
in vec4 vs_Translate;
in vec4 vs_BlockInfo;

out vec3 fs_Pos;   //position on unit cube (0 or 1)
out vec4 fs_Nor;
out vec4 fs_Col;   //scale
out vec4 fs_Translate;

const float CUBE = 1.0;
const float PYRAMID = 2.0;
const float TENT = 3.0;
const float TRI_TUBE = 4.0;
const float QUARTER_PYRAMID = 5.0;
const float SLANT = 6.0;
const float WEDGE = 7.0;

float scaleBottom;  //contained in vs_BlockInfo[2]
float scaleTop; //contained in vs_BlockInfo[3]
float scaleX;  //contained in vs_Col[0];
float scaleY; //contained in vs_Col[1];
float scaleZ; //contained in vs_Col[2];
bool scaleFromCenter; //boolean indicating if scaling should be done from the center - contained in vs_Col[3]

float random1( vec2 p , vec2 seed) {
  return fract(sin(dot(p + seed, vec2(127.1, 311.7))) * 43758.5453);
}

float random1( vec3 p , vec3 seed) {
  return fract(sin(dot(p + seed, vec3(987.654, 123.456, 531.975))) * 85734.3545);
}

vec2 random2( vec2 p , vec2 seed) {
  return fract(sin(vec2(dot(p + seed, vec2(311.7, 127.1)), dot(p + seed, vec2(269.5, 183.3)))) * 85734.3545);
}


float getVertexNum() {
   if(vs_BlockInfo.x < 10.0 ) {
       return vs_Pos.x + vs_Pos.z * 2.0 + vs_Pos.y * 4.0;
   }

   return 0.0;
}

vec3 getCubeVertexPosition() {
    float vertexNum = getVertexNum();
    //scale bottom toward middle
    if(vertexNum < 4.0) {
        return mix(vec3(0.5, 0.0, 0.5), vs_Pos.xyz, vs_BlockInfo[2]);
    }
    //scale top toward middle
    else {
        return mix(vec3(0.5, 1.0, 0.5), vs_Pos.xyz, vs_BlockInfo[3]);
    }
}

vec3 getSlantVertexPosition() {
    float vertexNum = getVertexNum();
    //scale bottom toward middle
    if(vertexNum == 0.0 || vertexNum == 2.0 || vertexNum == 4.0 || vertexNum == 6.0) {
        return vs_Pos.xyz;
    }
    //scale top toward middle
    else if(vertexNum == 1.0 || vertexNum == 3.0) {
        return mix(vec3(0.0, 0.0, vs_Pos.z), vs_Pos.xyz, vs_BlockInfo[2]);
    }
    else {
        return mix(vec3(0.0, 1.0, vs_Pos.z), vs_Pos.xyz, vs_BlockInfo[3]);
    }
}

vec3 getTentVertexPosition() {
    float vertexNum = getVertexNum();
    //scale bottom toward middle
    if(vertexNum < 4.0) {
        return mix(vec3(0.5, 0.0, 0.5), vs_Pos.xyz, vs_BlockInfo[2]);
    }
    //scale top toward middle
    else {
        return mix(vec3(0.5, vs_Pos[1], vs_Pos[2]), vs_Pos.xyz, vs_BlockInfo[3]);
    }
}

vec3 getTriTubeVertexPosition() {
    float vertexNum = getVertexNum();
    //scale bottom toward middle
    if(vertexNum < 3.0) {
        return mix(vec3(0.0, 0.0, 0.0), vs_Pos.xyz, vs_BlockInfo[2]);
    }
    else if(vertexNum == 3.0) {
        return mix(vec3(0.0, 0.0, 0.0), vec3(0.5, 0.0, 0.5), vs_BlockInfo[2]);
    }
    else if(vertexNum < 7.0) {
        return mix(vec3(0.0, 1.0, 0.0), vs_Pos.xyz, vs_BlockInfo[3]);
    }
    else { //vertex num = 7
        return mix(vec3(0.0, 1.0, 0.0), vec3(0.5, 1.0, 0.5), vs_BlockInfo[3]);
    }
}

vec3 getQuarterPyramidVertexPosition() {
    float vertexNum = getVertexNum();
    //scale bottom toward middle
    if(vertexNum < 4.0) {
        return mix(vec3(0.0, 0.0, 0.0), vs_Pos.xyz, vs_BlockInfo[2]);
    }
    else if(vertexNum < 7.0) {
        return mix(vec3(0.0, 1.0, 0.0), vs_Pos.xyz, vs_BlockInfo[3]);
    }
    else {
        return mix(vec3(0.0, 1.0, 0.0), vec3(0.5, 1.0, 0.5), vs_BlockInfo[3]);
    }
}

vec3 getWedgeVertexPosition() {
    float vertexNum = getVertexNum();
    if(vertexNum == 0.0 || vertexNum == 4.0 || vertexNum == 2.0 || vertexNum == 6.0) {
        return mix(vec3(vs_Pos.xy, 0.5), vs_Pos.xyz, scaleBottom);
    }
    else {
        vec3 adjPos = vs_Pos.xyz - vec3(0.5, 0.5, 0.5);

        return mix(vec3(0.5, vs_Pos.yz), vs_Pos.xyz, scaleTop);
    }
}


mat3 rotationMatrix(int axis, float angle) {
    float c = cos(angle);
    float s = sin(angle);
    mat3 rot;
    if(axis == 0) {
        rot = mat3(
        1.0, 0.0, 0.0,
        0.0, c,   -s,
        0.0, s,   c);
    }

    if(axis == 1) {
        rot = mat3(
        c,   0.0, s,
        0.0, 1.0, 0.0,
        -s,  0.0, c
        );
    }
    if(axis == 2) {
        rot =mat3(
        c,  -s,   0.0,
        s,   c,   0.0,
        0.0, 0.0, 1.0
        );
    }

    return rot;
}

vec3 rotate(vec3 pos) {
    mat3 rot;
    if(vs_Rotate.x > 0.0) {
        mat3 rot = rotationMatrix(0, vs_Rotate.x);
        pos = rot * pos;
    }
    if(vs_Rotate.y > 0.0) {
        mat3 rot = rotationMatrix(1, vs_Rotate.y);
        pos = rot * pos;
    }
    return pos;
}

vec3 getVertexPosition() {
    vec3 shapePos;
    if(vs_BlockInfo[0] == CUBE
      || vs_BlockInfo[0] == PYRAMID
    ) {
        shapePos = getCubeVertexPosition();
    }
    else if (vs_BlockInfo[0] == TENT) shapePos = getTentVertexPosition();
    else if (vs_BlockInfo[0] == TRI_TUBE) shapePos = getTriTubeVertexPosition();
    else if (vs_BlockInfo[0] == QUARTER_PYRAMID) shapePos = getQuarterPyramidVertexPosition();
    else if (vs_BlockInfo[0] == SLANT) shapePos = getSlantVertexPosition();
    else if (vs_BlockInfo[0] == WEDGE) shapePos = getWedgeVertexPosition();
    else shapePos = vs_Pos.xyz;

    if(scaleFromCenter) {
        shapePos = shapePos - vec3(0.5, 0.5, 0.5);
    }
    shapePos.x = shapePos.x * scaleX;
    shapePos.y = shapePos.y * scaleY;
    shapePos.z = shapePos.z * scaleZ;
    shapePos = rotate(shapePos);
    return shapePos;
}


void main()
{
    fs_Pos = vs_Pos.xyz;
    fs_Translate = vs_Translate;
    scaleBottom = vs_BlockInfo[2];
    scaleTop = vs_BlockInfo[3];
    scaleX = vs_Col[0];
    scaleY = vs_Col[1];
    scaleZ = vs_Col[2];
    scaleFromCenter = (vs_Col[3] == 1.0);

    vec4 modelposition = vec4(getVertexPosition(), 1.0);


    modelposition.xyz += vs_Translate.xyz;

    modelposition = u_Model * modelposition;
    gl_Position = u_ViewProj * modelposition;
}

///redblobgames.com/maps/mapgen4