import {Shape} from './shape'
import {Block, BlockType} from './block';
import {vec3} from "gl-matrix";
import {TextureType} from "../../../texture/texture-type";

export class Wall extends Shape{

  center: vec3;
  radius: number;
  width: number;
  height: number;
  sweep: number;
  numSegments: number;


  constructor(options: {
    pos: vec3,
    footprint: vec3,
    rotation: vec3,
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
  }

  getBlocks(): Block[] {
    let segmentAngle = this.sweep / (this.numSegments - 1);
    let blockZ = 2 * (this.radius + this.width/2) * Math.tan(segmentAngle / 2);
    let blockZ2 = 2 * (this.radius - this.width/2) * Math.tan(segmentAngle / 2);
    let scaleBottom =   blockZ2 / blockZ;
    let blocks: Block[] = [];
    for(let i = 0; i < this.numSegments; i++) {
      let angle = this.rotation[1] + segmentAngle * i;
      blocks.push({
        pos: vec3.fromValues(
          this.center[0] + (this.radius * Math.cos(angle)),
          this.center[1] + this.footprint[1] / 2,
          this.center[2] + (this.radius * Math.sin(angle))
        ),
        footprint: vec3.fromValues(
          this.width,
          this.height,
          blockZ
        ),
        blockType: BlockType.WEDGE,
        adjustScale2: scaleBottom,
        adjustScale1: 1, //this.width * Math.sin(segmentAngle), //1 + (this.width + this.radius) / this.radius,
        rotation: vec3.fromValues(0 , angle, 0),
        scaleFromCenter: true,
        textureType: TextureType.WALL
      });
    }
    return blocks;
  }

  runReplacement() {
    return [this];
  }
}