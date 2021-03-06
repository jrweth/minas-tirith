#version 300 es
precision highp float;

uniform vec2 u_PlanePos; // Our location in the virtual world displayed by the plane
uniform vec4 u_DisplayOptions; //
uniform sampler2D u_PavementSampler;
uniform sampler2D u_WhiteStoneSampler;

in vec3 fs_Pos;
in vec4 fs_Nor;
in vec4 fs_Col;
in vec4 fs_Translate;
in vec4 fs_BlockInfo;
in vec4 fs_Scale;
flat in int fs_Face;

//in float fs_Sine;

out vec4 out_Col; // This is the final output color that you will see on your
                  // screen for the pixel that is currently being processed.

float MAP_THEME = 1.0;
float DAZZLE_THEME = 2.0;
float TEXTURED_THEME = 3.0;

float TEXTURE_WALL     = 0.0;
float TEXTURE_ROAD     = 1.0;
float TEXTURE_ROOF     = 2.0;
float TEXTURE_BUILDING = 3.0;
float TEXTURE_LEVEL_GROUND = 4.0;
float TEXTURE_TURRET = 5.0;
float TEXTURE_FOUNDATION = 6.0;

vec3 sunPosition = vec3(12000.0, 10000.0, 8000.0);

const float CUBE = 1.0;
const float PYRAMID = 2.0;
const float TENT = 3.0;
const float TRI_TUBE = 4.0;
const float QUARTER_PYRAMID = 5.0;
const float SLANT = 6.0;
const float WEDGE = 7.0;

const int FACE_BACK = 0;
const int FACE_FRONT = 1;
const int FACE_LEFT = 2;
const int FACE_RIGHT = 3;
const int FACE_BOTTOM = 4;
const int FACE_TOP = 5;


vec3 fs_LightVector;

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

vec3 getMapThemeColor() {
    vec3 buildingColor = vec3(0.0, 0.0, 0.0);
    if(fs_Pos.x > 0.999999) {
        buildingColor = vec3(0.8, 0.8, 0.8);
    }
    else if(fs_Pos.z < 0.0001) {
        buildingColor = vec3(0.3, 0.3, 0.3);
    }
    else if(fs_Pos.z > 0.999999) {
        buildingColor = vec3(0.6, 0.6, 0.6);
    }
    else if(fs_Pos.y > 0.99999) {
        buildingColor = vec3(0.9, 0.9, 0.9);

    }


    if(fs_BlockInfo[1] == TEXTURE_ROAD) {
        buildingColor = vec3(0.9, 0.4, 0.4);
    }

    if(fs_BlockInfo[1] == TEXTURE_LEVEL_GROUND) {
        buildingColor = texture(u_PavementSampler, fs_Pos.xz * 3.0).xyz;
        //buildingColor = mySample.xyz;
    }


    return buildingColor;
}

vec3 getDazzleThemeColor() {
    vec3 color = vec3(1.0, 1.0, 1.0);

    //highlight the edges
    float lum = 500.0 * (
        max(pow(fs_Pos.x -0.5, 4.0) * pow(fs_Pos.z - 0.5, 4.0),
        max(pow(fs_Pos.x -0.5, 4.0) * pow(fs_Pos.y - 0.5, 4.0),
        pow(fs_Pos.z -0.5, 4.0) * pow(fs_Pos.y - 0.5, 4.0)))
    );
    //lum = smoothstep(0.9999, 1.0, lum);
    color = (1.0-lum) * color;

    return color;
}

vec3 getRoofColor() {
    return vec3(0.0, 0.0, 0.5);
}

/**
* Divid the geometry into segments based on scale and send back where this point falls in its segment
**/
vec2 getBuildingFloorWallPosition() {
    vec2 floorSegmentPos = vec2(0.0, 0.0);

    //handle the case for top and bottom faces
    if(fs_Face == FACE_BOTTOM || fs_Face == FACE_TOP) {
        return vec2(0.0, 0.0);
    }
    float numFloors = ceil(fs_Scale.y);
    floorSegmentPos.y = fs_Pos.y * numFloors - floor(fs_Pos.y * numFloors);


    //handle front and back faces
    if(fs_Face == FACE_FRONT || fs_Face == FACE_BACK) { float numSegments = ceil(fs_Scale.x);
        floorSegmentPos.x = fs_Pos.x * numSegments - floor(fs_Pos.x * numSegments);
        return floorSegmentPos;
    }

    //handle front and back faces
    float numSegments = ceil(fs_Scale.z);
    floorSegmentPos.x = fs_Pos.z * numSegments - floor(fs_Pos.z * numSegments);
    return floorSegmentPos;
}

bool posInWindow(vec2 pos) {
    //make sure this piece isn't too skinny
    if(fs_Scale.y < 0.5 && fs_Scale.z > 1.5) return false;
    if(fs_Scale.y < 0.5 && fs_Scale.x > 1.5) return false;
    return (true
        && pos.y > 0.33
        && pos.x * 4.0 - 1.5 > smoothstep(0.0, 1.0, pos.y * 2.0 - 1.0)
        && pos.x * 4.0 - 1.5 < smoothstep(0.0, 1.0, 1.0 -  pos.y * 2.0  + 1.0)
    );
}


vec3 getBuildingCubeColor() {
    vec2 wallPos = getBuildingFloorWallPosition();
    if(posInWindow(wallPos) ) {
        return vec3(0.0);
    }
    float fbm = fbm2to1(vec2(fs_Pos.x + fs_Pos.y/2.0, fs_Pos.z + fs_Pos.y/2.0)*500.0, vec2(3.43, 43.23));
    return vec3((fbm + 1.0) / 2.0);
}


float calcPlasterOffset(float x, float z) {
    return fbm2to1(vec2(x,z), vec2(3.34, 4343.2)) - 0.5;
}

vec4 calcPlasterNormal(float x, float z) {
    //get the four surrounding points
    float sampleDistance = 0.001;
    vec3 x1 = vec3(x, calcPlasterOffset(x, z + sampleDistance), z + sampleDistance);
    vec3 x2 = vec3(x, calcPlasterOffset(x, z - sampleDistance), z - sampleDistance);

    vec3 z1 = vec3(x + sampleDistance, calcPlasterOffset(x + sampleDistance, z), z);
    vec3 z2 = vec3(x - sampleDistance, calcPlasterOffset(x - sampleDistance, z), z);

    return vec4(normalize(cross(x1-x2, z1-z2)), 1.0);

}

vec3 getOrthogonal(vec3 nor) {

    int imin = 0;
    for(int i = 0; i < 3; ++i) {
        if(abs(nor[i]) < abs(nor[imin])) imin = i;
    }
    vec3 orth = vec3(0.0, 0.0, 0.0);
    float dt = nor[imin];
    orth[imin] = 1.0;
    for(int i = 0; i < 3; i++) {
        orth[i] = dt*nor[i];
    }
    return orth;

}

mat4 getNormalTransform(vec3 nor) {
    mat4 mat;
    mat[0][0] = nor[0];
    mat[0][1] = nor[1];
    mat[0][2] = nor[2];
    mat[0][3] = 0.0;

    vec3 orth = getOrthogonal(nor);
    mat[1][0] = orth[0];
    mat[1][1] = orth[1];
    mat[1][2] = orth[2];
    mat[1][3] = 0.0;

    vec3 orth2 = cross(nor, orth);
    mat[2][0] = orth2[0];
    mat[2][1] = orth2[1];
    mat[2][2] = orth2[2];
    mat[2][3] = 0.0;

    mat[3][0] = 0.0;
    mat[3][1] = 0.0;
    mat[3][2] = 0.0;
    mat[3][3] = 1.0;

    return mat;
}

vec3 getPlasterNormal() {

    //get the general normal for material
    vec2 wallPos = getBuildingFloorWallPosition();

    //add a ledge
    if(wallPos.y > 0.95) {
        return mix(fs_Nor.xyz, vec3(0.0, 1.0, 0.0), (wallPos.y - 0.95) * 20.0);
    }
    else if(wallPos.y > 0.90) {
        return mix(vec3(0.0, -1.0, 0.0), fs_Nor.xyz, (1.0 - wallPos.y) * 20.0);
    }

    return fs_Nor.xyz;
}


vec3 getTexturedNormal() {
    if (
        fs_BlockInfo[1] == TEXTURE_BUILDING
        || fs_BlockInfo[1] == TEXTURE_TURRET
    ) {
        return  getPlasterNormal();
    }
    return fs_Nor.xyz;
}

vec3 getBuildingColor() {
    if(fs_BlockInfo[0] == CUBE || fs_BlockInfo[0] == WEDGE) return getBuildingCubeColor();

    return vec3(0.5, 0.5, 0.5);
}

vec3 getTexturedThemeColor() {
    vec3 color = vec3(1.0, 1.0, 1.0);

    //highlight the edges
    float lum = 500.0 * (
    max(pow(fs_Pos.x -0.5, 4.0) * pow(fs_Pos.z - 0.5, 4.0),
    max(pow(fs_Pos.x -0.5, 4.0) * pow(fs_Pos.y - 0.5, 4.0),
    pow(fs_Pos.z -0.5, 4.0) * pow(fs_Pos.y - 0.5, 4.0)))
    );
    //lum = smoothstep(0.9999, 1.0, lum);
    color = (1.0-lum) * color;

    if(fs_BlockInfo[1] == TEXTURE_ROAD) {
        color = vec3(0.9, 0.4, 0.4);
    }

    if(fs_BlockInfo[1] == TEXTURE_LEVEL_GROUND) {
        color = texture(u_PavementSampler, fs_Pos.xz * 3.0).xyz;
        //buildingColor = mySample.xyz;
    }

    if(fs_BlockInfo[1] == TEXTURE_WALL) {
        vec2 uv = vec2(0.0,0.0);
        if(fs_Face == 0 || fs_Face == 1) uv = fs_Pos.xy; //gate opening
        if(fs_Face == 2 || fs_Face == 3) uv = fs_Pos.zy; //sides
        if(fs_Face == 4 || fs_Face == 5) uv = fs_Pos.zx; //tops
        color = texture(u_WhiteStoneSampler, uv).xyz;
        //buildingColor = vec3(0.9, 0.9, 0.9);
    }
    if(fs_BlockInfo[1] == TEXTURE_ROOF) {
        color = getRoofColor();
    }
    if(fs_BlockInfo[1] == TEXTURE_BUILDING
       || fs_BlockInfo[1] == TEXTURE_TURRET
       || fs_BlockInfo[1] == TEXTURE_FOUNDATION) {
        color = getBuildingColor();
    }
    return color;
}

vec3 getDazzleThemeBackground() {
    return vec3(0.0, 0.0, 0.0);
}
vec3 getMapThemeBackground() {
    return vec3(164.0 / 255.0, 233.0 / 255.0, 1.0);
}
vec3 getTexturedThemeBackground() {
    return vec3(0.0, 0.0, 0.0);
}


void adjustColorForLights(inout vec3 color, vec3 normal, vec3 point) {
    vec3 direction;
    vec3 lightColor;
    vec3 sunDirection = normalize(sunPosition - point);
    vec3 sunColor = vec3(1.5, 1.25, 1.0);
    vec3 skyColor = vec3(0.08,0.10,0.14);
    vec3 indirectColor = vec3(0.04, 0.028, 0.020);
    vec3 fireFlyColor = vec3(0.698, 0.956, 0.145);
    float hour = 15.0;
    float night = 0.0;
    float dawn = 0.0;
    float sunset = 0.1;



    //get the soft shadow and subsurface amounts
    //float shadow = sunShadow(point, 3.0, sdfIndex);
    float sunIntensity;


    if(dot(normal, sunDirection) >= 0.0) {
        sunIntensity = clamp(dot(normal, sunDirection), 0.0, 1.0);// * shadow;
    }
    else {
        sunIntensity = 0.0;
    }


    //make sun brighter at noon
    sunIntensity = sunIntensity * clamp(sunPosition.y/80.0, 0.0, 1.0);

    float skyIntensity = clamp(0.5 + 0.5*normal.y, 0.0, 1.0);

    //decrease skyintesity at night
    if(hour > 17.0) {
        skyIntensity = clamp(pow((1.0 - (hour - 17.0)/7.0), 4.0), 0.1, 1.0)  * skyIntensity;
    }
    if(hour < 6.0) {
        skyIntensity = clamp(pow((1.0 - (6.0-hour)/6.0), 4.0), 0.1, 1.0)  * skyIntensity;
    }

    vec3 indirectDirection = normalize(sunDirection * vec3(-1.0, 0.0, -1.0));
    //vec3 indirectDirection = normalize(vec3(0.2, 0.0, 1.0));
    float indirectIntensity = clamp(dot(normal, indirectDirection), 0.0, 1.0);

    //tone down indirect at night
    //indirectIntensity = indirectIntensity * (1.0 - night);

    //make sun redder at sunrise/sunset
    sunColor.r = max(sunColor.r * 3.0 * (dawn*0.8 + sunset), sunColor.r);
    if(hour < 5.0) {
        sunIntensity = 0.0;
    }



    vec3 intensity = sunIntensity*sunColor
    + skyIntensity * skyColor
    + indirectIntensity * indirectColor;


    color = color * intensity;

}

void main()
{
    vec3 buildingColor = vec3(0,0,0);
    vec3 backgroundColor = vec3(0,0,0);

    if(u_DisplayOptions[2] == MAP_THEME) {
        buildingColor = getMapThemeColor();
        backgroundColor = getMapThemeBackground();
    }
    else if(u_DisplayOptions[2] == DAZZLE_THEME) {
        buildingColor = getDazzleThemeColor();
        backgroundColor = getDazzleThemeBackground();
    }
    else if(u_DisplayOptions[2] == TEXTURED_THEME) {
        buildingColor = getTexturedThemeColor();
        backgroundColor = getTexturedThemeBackground();
        adjustColorForLights(buildingColor, getTexturedNormal(), fs_Pos.xyz);
    }



    float t = clamp(smoothstep(40.0, 50.0, length(fs_Translate.xz)), 0.0, 1.0); // Distance fog
    out_Col = vec4(mix(buildingColor, backgroundColor, t), 1.0);
}
