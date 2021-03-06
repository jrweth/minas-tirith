import {NumOptions, Shape} from './shape'
import {Block, BlockType} from './block';
import {vec2, vec3} from "gl-matrix";
import Random from "../../../noise/random";
import {Axis} from "../../../geometry/Axis"
import {StandardRoof} from "./standardRoof";
import {TextureType} from "../../../texture/texture-type";
import {Turret} from "./turret";
import {StandardBlock} from "./standardBlock";
import {Box} from "./box";


enum MerlonPlacement {
  'NONE' = 0,
  'FILL' = 1,
  'HALF_GAP' = 2,
  'DOUBLE_GAP' = 3
}

export class Battlement extends Box{

  textureType: TextureType;
  numMerlons: number;
  scaleInner: number;
  xSide1: MerlonPlacement = MerlonPlacement.FILL;
  xSide2: MerlonPlacement = MerlonPlacement.FILL;
  zSide1: MerlonPlacement = MerlonPlacement.DOUBLE_GAP;
  zSide2: MerlonPlacement = MerlonPlacement.DOUBLE_GAP;

  constructor(options: {
    pos: vec3,
    footprint: vec3,
    rotation: vec3,
    textureType?: TextureType,
    numMerlons?: number,
    xSide1?: MerlonPlacement,
    xSide2?: MerlonPlacement,
    zSide1?: MerlonPlacement,
    zSide2?: MerlonPlacement
  }) {
    super(options);
    this.symbol = 'B';
    this.terminal = false;
    this.textureType = (typeof options.textureType == 'undefined') ? TextureType.BUILDING : options.textureType;
    this.numMerlons = (typeof options.numMerlons == 'undefined') ? 4: options.numMerlons;
    if(typeof options.xSide1 !== 'undefined') this.xSide1 = options.xSide1;
    if(typeof options.xSide2 !== 'undefined') this.xSide2 = options.xSide2;
    if(typeof options.zSide1 !== 'undefined') this.zSide1 = options.zSide1;
    if(typeof options.zSide2 !== 'undefined') this.zSide2 = options.zSide2;
    this.scaleInner = 1;
  }

  getBlocks(): Block[] {
    let blocks: Block[] = [{
      blockType: BlockType.CUBE,
      footprint: this.footprint,
      pos: this.pos,
      adjustScale1: 1,
      adjustScale2: 1,
      rotation: this.rotation,
      scaleFromCenter: true,
      textureType: this.textureType
    }];

    blocks = blocks.concat(this.getMerlons());
    return blocks;

  }

  runReplacement(seed: number): Shape[] {
    return [this];
  }

  getMerlons(): Block[] {
    let blocks: Block[] = [];
    let size = Math.min(this.footprint[2], this.footprint[0]) / (this.numMerlons * 2);
    let y = this.pos[1] +  this.footprint[1] * 0.5 + size * 0.5;

    let pos: vec3[] = [];

    let z1=  this.footprint[2] * 0.5 - size * 0.5;
    let z2= -this.footprint[2] * 0.5 + size * 0.5;
    pos = pos.concat(this.getXMerlonsPos(size, y, z1, this.xSide1));
    pos = pos.concat(this.getXMerlonsPos(size, y, z2, this.xSide2));

    let x1= this.footprint[0] * 0.5 - size * 0.5;
    let x2=  -this.footprint[0] * 0.5 + size * 0.5;
    pos = pos.concat(this.getZMerlonsPos(size, x1, y, this.zSide1));
    pos = pos.concat(this.getZMerlonsPos(size, x2, y, this.zSide2));

    for(let i = 0; i < pos.length; i++) {
      blocks.push({
        pos: pos[i],
        footprint: vec3.fromValues(size, size, size),
        rotation: this.rotation,
        blockType: BlockType.CUBE,
        adjustScale1: this.scaleInner,
        adjustScale2: 1, //this.width * Math.sin(segmentAngle), //1 + (this.width + this.radius) / this.radius,
        adjustScale3: 1, //this.width * Math.sin(segmentAngle), //1 + (this.width + this.radius) / this.radius,
        adjustScale4: 1, //this.width * Math.sin(segmentAngle), //1 + (this.width + this.radius) / this.radius,
        scaleFromCenter: true,
        textureType: this.textureType
      });

    }

    return blocks;
  }

  getXMerlonsPos(size: number, y: number, z: number, merlonPlacement: MerlonPlacement): vec3[] {
    let pos: vec3[] = [];
    if(merlonPlacement == MerlonPlacement.NONE) return pos;

    //get the number of merlons
    let numMerlons = Math.floor(this.footprint[0] / (size * 2));

    let startX = -this.footprint[0] * 0.5 + size * 0.5;
    let endX = this.footprint[0] * 0.5 - size * 0.5;
    if(merlonPlacement == MerlonPlacement.HALF_GAP) {
      startX = startX + size * 0.5;
      endX = endX - size * 0.5;
    }
    else if(merlonPlacement == MerlonPlacement.DOUBLE_GAP) {
      numMerlons = numMerlons - 2;
      startX = startX + size * 2.5;
      endX = endX - size * 2.5;

    }
    let incX = (endX - startX) / (numMerlons - 1);
    for(let x = startX; x <= endX; x = x + incX) {
      let rotPos = vec2.fromValues(x,z);
      vec2.rotate(rotPos,rotPos,vec2.fromValues(0,0),this.rotation[1]);
      pos.push(vec3.fromValues(this.pos[0] + rotPos[0], y, this.pos[2] + rotPos[1]));
    }


    return pos;

  }


  getZMerlonsPos(size: number, x: number, y: number, merlonPlacement: MerlonPlacement): vec3[] {
    let pos: vec3[] = [];
    if(merlonPlacement == MerlonPlacement.NONE) return pos;

    //get the number of merlons
    let numMerlons = Math.floor(this.footprint[2] / (size * 2));

    let startZ =  -this.footprint[2] * 0.5 + size * 0.5;
    let endZ = this.footprint[2] * 0.5 - size * 0.5;
    if(merlonPlacement == MerlonPlacement.HALF_GAP) {
      startZ = startZ + size * 0.5;
      endZ = endZ - size * 0.5;
    }
    else if(merlonPlacement == MerlonPlacement.DOUBLE_GAP) {
      numMerlons = numMerlons - 2;
      startZ = startZ + size * 2.0;
      endZ = endZ - size * 2.0;

    }
    let incZ = (endZ - startZ) / (numMerlons - 1);
    for(let z = startZ; z <= endZ; z = z + incZ) {
      let rotPos = vec2.fromValues(x,z);
      vec2.rotate(rotPos,rotPos,vec2.fromValues(0,0),this.rotation[1]);
      pos.push(vec3.fromValues(this.pos[0] + rotPos[0], y, this.pos[2] + rotPos[1]));
    }


    return pos;

  }

}

