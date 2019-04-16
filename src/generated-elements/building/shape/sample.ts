import {Shape} from './shape'
import {BlockType} from './block';
import {vec3} from "gl-matrix";

export class Sample extends Shape{

  constructor(options: {pos: vec3, footprint: vec3, rotation: vec3}) {
    super(options);
    this.symbol = 'S';
    this.terminal = true;
  }

  getBlocks() {
    let numBlocks = 5;
    return [
      {
        blockType: BlockType.CUBE,
        footprint: vec3.fromValues(this.footprint[0]/numBlocks, this.footprint[1]/numBlocks, this.footprint[2]/numBlocks),
        pos: vec3.fromValues(this.pos[0] + 0 * this.footprint[0]/numBlocks, this.pos[1], this.pos[2]),
        adjustScale1: 1,
        adjustScale2: 1,
        rotation: this.rotation,
        scaleFromCenter: true
      },
      {
        blockType: BlockType.PYRAMID,
        footprint: vec3.fromValues(this.footprint[0]/numBlocks, this.footprint[1]/numBlocks, this.footprint[2]/numBlocks),
        pos: vec3.fromValues(this.pos[0] + 1.1 * this.footprint[0]/numBlocks, this.pos[1], this.pos[2]),
        adjustScale1: 0,
        adjustScale2: 1,
        rotation: this.rotation,
        scaleFromCenter: true
      },
      {
        blockType: BlockType.TENT,
        footprint: vec3.fromValues(this.footprint[0]/numBlocks, this.footprint[1]/numBlocks, this.footprint[2]/numBlocks),
        pos: vec3.fromValues(this.pos[0] + 2.2 * this.footprint[0]/numBlocks, this.pos[1], this.pos[2]),
        adjustScale1: 0.0,
        adjustScale2: 1,
        rotation: this.rotation,
        scaleFromCenter: true
      },
      {
        blockType: BlockType.TRI_TUBE,
        footprint: vec3.fromValues(this.footprint[0]/numBlocks, this.footprint[1]/numBlocks, this.footprint[2]/numBlocks),
        pos: vec3.fromValues(this.pos[0] + 3.3 * this.footprint[0]/numBlocks, this.pos[1], this.pos[2]),
        adjustScale1: 1,
        adjustScale2: 1,
        rotation: this.rotation,
        scaleFromCenter: true
      },
      {
        blockType: BlockType.QUARTER_PYRAMID,
        footprint: vec3.fromValues(this.footprint[0]/numBlocks, this.footprint[1]/numBlocks, this.footprint[2]/numBlocks),
        pos: vec3.fromValues(this.pos[0] + 4.4 * this.footprint[0]/numBlocks, this.pos[1], this.pos[2]),
        adjustScale1: 0,
        adjustScale2: 1,
        rotation: this.rotation,
        scaleFromCenter: true
      }
    ];
  }

  runReplacement() {
    return [this];
  }
}