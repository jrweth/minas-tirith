import {vec2, vec4, mat4} from 'gl-matrix';
import Drawable from './Drawable';
import {gl} from '../../globals';
import Texture from "../../texture/texture";

var activeProgram: WebGLProgram = null;

export class Shader {
  shader: WebGLShader;

  constructor(type: number, source: string) {
    this.shader = gl.createShader(type);
    gl.shaderSource(this.shader, source);
    gl.compileShader(this.shader);

    if (!gl.getShaderParameter(this.shader, gl.COMPILE_STATUS)) {
      throw gl.getShaderInfoLog(this.shader);
    }
  }
};

class ShaderProgram {
  prog: WebGLProgram;

  attrPos: number;
  attrNor: number;
  attrInfo: number;
  attrCol: number;
  attrTranslate: number;
  attrBlockInfo: number;
  attrRotate: number;
  attrScale: number;
  attrAdjustment: number;

  unifModel: WebGLUniformLocation;
  unifModelInvTr: WebGLUniformLocation;
  unifViewProj: WebGLUniformLocation;
  unifDisplayOptions: WebGLUniformLocation;
  unifCityInfo: WebGLUniformLocation;
  unifPlanePos: WebGLUniformLocation;
  unifPavementSampler: WebGLUniformLocation;

  constructor(shaders: Array<Shader>) {
    this.prog = gl.createProgram();

    for (let shader of shaders) {
      gl.attachShader(this.prog, shader.shader);
    }
    gl.linkProgram(this.prog);
    if (!gl.getProgramParameter(this.prog, gl.LINK_STATUS)) {
      throw gl.getProgramInfoLog(this.prog);
    }

    this.attrPos        = gl.getAttribLocation(this.prog, "vs_Pos");
    this.attrNor        = gl.getAttribLocation(this.prog, "vs_Nor");
    this.attrCol        = gl.getAttribLocation(this.prog, "vs_Col");
    this.attrInfo       = gl.getAttribLocation(this.prog, "vs_Info");
    this.attrTranslate  = gl.getAttribLocation(this.prog, "vs_Translate");
    this.attrBlockInfo  = gl.getAttribLocation(this.prog, "vs_BlockInfo");
    this.attrRotate     = gl.getAttribLocation(this.prog, "vs_Rotate");
    this.attrScale      = gl.getAttribLocation(this.prog, "vs_Scale");
    this.attrAdjustment = gl.getAttribLocation(this.prog, "vs_Adjustment");

    this.unifModel      = gl.getUniformLocation(this.prog, "u_Model");
    this.unifModelInvTr = gl.getUniformLocation(this.prog, "u_ModelInvTr");
    this.unifViewProj   = gl.getUniformLocation(this.prog, "u_ViewProj");
    this.unifPlanePos   = gl.getUniformLocation(this.prog, "u_PlanePos");
    this.unifDisplayOptions = gl.getUniformLocation(this.prog, "u_DisplayOptions");
    this.unifCityInfo = gl.getUniformLocation(this.prog, "u_CityInfo");
    this.unifPavementSampler = gl.getUniformLocation(this.prog, "u_PavementSampler");

  }

  use() {
    if (activeProgram !== this.prog) {
      gl.useProgram(this.prog);
      activeProgram = this.prog;
    }
  }


  // Bind the given Texture to the given texture unit
  bindTexToUnit(handleName: WebGLUniformLocation, tex: Texture, unit: number) {
    this.use();
    gl.activeTexture(gl.TEXTURE0 + unit);
    tex.bindTex();
    gl.uniform1i(handleName, unit);
  }

  setPavementTexture() {
    this.use();
    const texture = gl.createTexture();

    gl.bindTexture(gl.TEXTURE_2D, texture);
    gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, 1, 1, 0, gl.RGBA, gl.UNSIGNED_BYTE,
      new Uint8Array([122, 255, 122, 255]))
    ;
    //gl.generateMipmap(gl.TEXTURE_2D);
    // Tell WebGL we want to affect texture unit 0
    gl.activeTexture(gl.TEXTURE0);

    // Bind the texture to texture unit 0
    gl.bindTexture(gl.TEXTURE_2D, texture);

    // Tell the shader we bound the texture to texture unit 0
    gl.uniform1i(this.unifPavementSampler, 0);


  }

  setModelMatrix(model: mat4) {
    this.use();
    if (this.unifModel !== -1) {
      gl.uniformMatrix4fv(this.unifModel, false, model);
    }

    if (this.unifModelInvTr !== -1) {
      let modelinvtr: mat4 = mat4.create();
      mat4.transpose(modelinvtr, model);
      mat4.invert(modelinvtr, modelinvtr);
      gl.uniformMatrix4fv(this.unifModelInvTr, false, modelinvtr);
    }
  }

  setViewProjMatrix(vp: mat4) {
    this.use();
    if (this.unifViewProj !== -1) {
      gl.uniformMatrix4fv(this.unifViewProj, false, vp);
    }
  }

  setPlanePos(pos: vec2) {
    this.use();
    if (this.unifPlanePos !== -1) {
      gl.uniform2fv(this.unifPlanePos, pos);
    }
  }

  setDisplayOptions(options: vec4) {
    this.use();
    if(this.unifDisplayOptions !== -1) {
      gl.uniform4fv(this.unifDisplayOptions, options);
    }
  }

  setCityInfo(options: {cityHeight: number; cityRadius: number}) {
    this.use();
    if(this.unifCityInfo !== -1) {
      gl.uniform4fv(this.unifCityInfo, vec4.fromValues(options.cityRadius, options.cityHeight, 0,0));
    }

  }

  draw(d: Drawable) {
    this.use();

    this.setPavementTexture();
    if (this.attrPos != -1 && d.bindPos()) {
      gl.enableVertexAttribArray(this.attrPos);
      gl.vertexAttribPointer(this.attrPos, 4, gl.FLOAT, false, 0, 0);
      gl.vertexAttribDivisor(this.attrPos, 0);
    }

    if (this.attrNor != -1 && d.bindNor()) {
      gl.enableVertexAttribArray(this.attrNor);
      gl.vertexAttribPointer(this.attrNor, 4, gl.FLOAT, false, 0, 0);
      gl.vertexAttribDivisor(this.attrNor, 0);
    }

    if (this.attrInfo != -1 && d.bindInfo()) {
      gl.enableVertexAttribArray(this.attrInfo);
      gl.vertexAttribPointer(this.attrInfo, 4, gl.FLOAT, false, 0, 0);
      gl.vertexAttribDivisor(this.attrInfo, 0);
    }

    if (this.attrCol != -1 && d.bindCol()) {
      gl.enableVertexAttribArray(this.attrCol);
      gl.vertexAttribPointer(this.attrCol, 4, gl.FLOAT, false, 0, 0);
      gl.vertexAttribDivisor(this.attrCol, 1);
    }

    if (this.attrTranslate != -1 && d.bindTranslate()) {
      gl.enableVertexAttribArray(this.attrTranslate);
      gl.vertexAttribPointer(this.attrTranslate, 4, gl.FLOAT, false, 0, 0);
      gl.vertexAttribDivisor(this.attrTranslate, 1);
    }

    if (this.attrBlockInfo != -1 && d.bindBlockInfo()) {
      gl.enableVertexAttribArray(this.attrBlockInfo);
      gl.vertexAttribPointer(this.attrBlockInfo, 4, gl.FLOAT, false, 0, 0);
      gl.vertexAttribDivisor(this.attrBlockInfo, 1);
    }

    if (this.attrRotate != -1 && d.bindRotate()) {
      gl.enableVertexAttribArray(this.attrRotate);
      gl.vertexAttribPointer(this.attrRotate, 4, gl.FLOAT, false, 0, 0);
      gl.vertexAttribDivisor(this.attrRotate, 1);
    }

    if (this.attrScale != -1 && d.bindScale()) {
      gl.enableVertexAttribArray(this.attrScale);
      gl.vertexAttribPointer(this.attrScale, 4, gl.FLOAT, false, 0, 0);
      gl.vertexAttribDivisor(this.attrScale, 1);
    }

    if (this.attrAdjustment != -1 && d.bindAdjustment()) {
      gl.enableVertexAttribArray(this.attrAdjustment);
      gl.vertexAttribPointer(this.attrAdjustment, 4, gl.FLOAT, false, 0, 0);
      gl.vertexAttribDivisor(this.attrAdjustment, 1);
    }

    d.bindIdx();
    gl.drawElementsInstanced(d.drawMode(), d.elemCount(), gl.UNSIGNED_INT, 0, d.numInstances);

    if (this.attrPos != -1) gl.disableVertexAttribArray(this.attrPos);
    if (this.attrNor != -1) gl.disableVertexAttribArray(this.attrNor);
    if (this.attrCol != -1) gl.disableVertexAttribArray(this.attrCol);
    if (this.attrTranslate != -1) gl.disableVertexAttribArray(this.attrTranslate);
    if (this.attrInfo != -1) gl.disableVertexAttribArray(this.attrInfo);
    if (this.attrBlockInfo != -1) gl.disableVertexAttribArray(this.attrBlockInfo);
    if (this.attrRotate != -1) gl.disableVertexAttribArray(this.attrRotate);
    if (this.attrScale != -1) gl.disableVertexAttribArray(this.attrScale);
    if (this.attrAdjustment != -1) gl.disableVertexAttribArray(this.attrAdjustment);
  }
};

export default ShaderProgram;
