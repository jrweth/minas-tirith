import {Shape} from './shape'
import {BlockType} from './block';
import {vec3} from "gl-matrix";

export class StandardBlock extends Shape{
  blockType: BlockType;
  adjustScale1: number;
  adjustScale2: number;
  adjustScale3: number;
  adjustScale4: number;


  constructor(options: {
    pos: vec3,
    footprint: vec3,
    rotation: vec3,
    blockType: BlockType,
    adjustScale1?: number,
    adjustScale2?: number,
    adjustScale3?: number,
    adjustScale4?: number
  }) {
    super(options);
    this.blockType = options.blockType;
    this.symbol = 'S';
    this.terminal = true;
    this.adjustScale1 = (typeof options.adjustScale1 == 'undefined') ? 1 : options.adjustScale1;
    this.adjustScale2 = (typeof options.adjustScale2 == 'undefined') ? 1 : options.adjustScale2;
    this.adjustScale3 = (typeof options.adjustScale3 == 'undefined') ? 1 : options.adjustScale3;
    this.adjustScale4 = (typeof options.adjustScale4 == 'undefined') ? 1 : options.adjustScale4;

  }

  getBlocks() {
    return [
      {
        blockType: this.blockType,
        footprint: this.footprint,
        pos: this.pos,
        adjustScale1: this.adjustScale1,
        adjustScale2: this.adjustScale2,
        rotation: this.rotation,
        scaleFromCenter: true
      },
    ];
  }

  runReplacement() {
    return [this];
  }
}