import {Shape} from '../building/shape/shape'
import {Block, BlockType} from '../building/shape/block';
import {vec3} from "gl-matrix";
import {TextureType} from "../../texture/texture-type";
import {CityLevel, GatePosition} from "./city-level";

export class Road extends Shape{

  center: vec3;
  radius: number;
  width: number;
  height: number;
  sweep: number;
  numSegments: number;
  cityLevel: CityLevel;
  segmentAngle: number;
  blockZ: number;


  constructor(options: {
    pos: vec3,
    footprint: vec3,
    rotation: vec3,
    cityLevel: CityLevel,
    sweep?: number,
    numSegments?: number
  }) {
    super(options);
    this.center = options.pos;
    this.width = options.footprint[2];
    this.height = options.footprint[1];
    this.radius = options.footprint[0];
    this.sweep = options.sweep ? options.sweep :  Math.PI;
    this.numSegments = options.numSegments ? options.numSegments: 20;
    this.terminal = true;
    this.cityLevel = options.cityLevel;
  }

  getBlocks(): Block[] {
    this.segmentAngle = this.sweep / (this.numSegments - 1);
    this.blockZ = 2 * (this.radius + this.width/2) * Math.tan(this.segmentAngle / 2);
    let blockZ2 = 2 * (this.radius - this.width/2) * Math.tan(this.segmentAngle / 2);
    let scaleBottom =   blockZ2 / this.blockZ;
    let blocks: Block[] = [];
    let gateIndex = this.cityLevel.getGateWallBlockIndex();
    for(let i = 0; i < this.numSegments; i++) {
      let angle = this.rotation[1] + this.segmentAngle * i;
      blocks.push({
        pos: this.getBlockPosition(angle),
        footprint: vec3.fromValues(
          this.width,
          1,
          this.blockZ
        ),
        blockType: BlockType.WEDGE,
        adjustScale1: scaleBottom,
        adjustScale2: this.getLeftScale(angle),
        adjustScale3: this.getRightScale(angle),
        rotation: vec3.fromValues(0 , angle, 0),
        scaleFromCenter: true,
        textureType: TextureType.LEVEL_GROUND
      });
    }
    return blocks;
  }
  getBlockElevation(rotation: number): number {
    let j = this.cityLevel.gridLength * rotation / this.sweep;
    return this.cityLevel.getHeightFromGridPos(0, j) - 0.5;
  }

  getBlockPosition(angle: number): vec3 {
    let x = this.center[0] + (this.radius * Math.cos(angle));
    let z = this.center[2] + (this.radius * Math.sin(angle));
    let y = Math.min(this.getBlockElevation(angle), this.getBlockElevation(angle + this.segmentAngle));
    return vec3.fromValues(x,y,z);
  }

  getRightScale(rotation: number) {
    let el1 = this.getBlockElevation(rotation);
    let el2 = this.getBlockElevation(rotation + this.segmentAngle);
    if(this.cityLevel.levelNum == 0) {
      console.log(rotation + '-' + el1 + '-' + el2);
    }
    if(el1 >= el2) return 1;

    let scale = 1 + (el2 - el1);
    return scale;
  }

  getLeftScale(rotation: number) {
    let el1 = this.getBlockElevation(rotation);
    let el2 = this.getBlockElevation(rotation + this.segmentAngle);
    if(el2 >= el1) return 1;

    let scale = 1 + (el1 - el2);
    return scale;
  }


  runReplacement() {
    return [this];
  }
}