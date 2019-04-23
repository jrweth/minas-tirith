import {Shape} from './shape'
import {Block, BlockType} from './block';
import {vec3} from "gl-matrix";
import {TextureType} from "../../../texture/texture-type";
import {Axis} from "../../../geometry/Axis";
import {StandardRoof} from "./standardRoof";
import {TurretRoof} from "./turret-roof";

export class Turret extends Shape{


  width: number;
  radius: number;
  sweep: number;
  numSegments: number;
  corners: boolean;


  constructor(options: {
    pos: vec3,
    footprint: vec3,
    rotation: vec3,
    sweep?: number,
    numSegments?: number,
    corners?: boolean
  }) {
    super(options);
    this.width = Math.min(this.footprint[0], this.footprint[2]);
    this.footprint[0] = this.width;
    this.footprint[2] = this.width;
    this.radius =  0;
    this.sweep = options.sweep ? options.sweep :  Math.PI;
    this.numSegments = options.numSegments ? options.numSegments: 20;
    this.corners = options.corners ? options.corners: false;
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
          this.pos[0] + (this.radius * Math.cos(angle)),
          this.pos[1],
          this.pos[2] + (this.radius * Math.sin(angle))
        ),
        footprint: vec3.fromValues(
          this.width,
          this.footprint[1],
          blockZ
        ),
        blockType: BlockType.WEDGE,
        adjustScale1: scaleBottom,
        adjustScale2: 1, //this.width * Math.sin(segmentAngle), //1 + (this.width + this.radius) / this.radius,
        adjustScale3: 1, //this.width * Math.sin(segmentAngle), //1 + (this.width + this.radius) / this.radius,
        adjustScale4: 1, //this.width * Math.sin(segmentAngle), / /1 + (this.width + this.radius) / this.radius,
        rotation: vec3.fromValues(0 , angle, 0),
        scaleFromCenter: true,
        textureType: TextureType.BUILDING
      });
    }
    return blocks;
  }

  runReplacement() {
    return this.addRoof();
  }

  addRoof(): Shape[] {
    let height =  Math.min(this.footprint[Axis.X], this.footprint[Axis.Z]);
    let posY = this.pos[1] + 0.5 * this.footprint[1] + 0.5 * height;
    let roof = new TurretRoof({
      pos: vec3.fromValues(this.pos[0], posY, this.pos[2]),
      footprint: vec3.fromValues(this.footprint[0]*1.2, height, this.footprint[0]*1.2),
      rotation: this.rotation,
      numSegments: this.numSegments
    });
    this.terminal = true;
    return [this, roof];

  }
}