import {Shape} from './shape'
import {BlockType} from './block';
import {vec3} from "gl-matrix";
import {TerrainType} from "../../terrain";
import {TextureType} from "../../../texture/texture-type";

export class StandardRoof extends Shape{

  blockType: BlockType;

  constructor(options: {pos: vec3, footprint: vec3, rotation: vec3, blockType: BlockType}) {
    super(options);
    this.symbol = 'T';
    this.terminal = true;
    this.blockType = options.blockType;
  }

  getBlocks() {
    return [{
      blockType: this.blockType,
      footprint: this.footprint,
      pos: this.pos,
      adjustScale1: 0,
      adjustScale2: 1,
      rotation: this.rotation,
      scaleFromCenter: true,
      textureType: TextureType.ROOF
    }];
  }

  runReplacement() {
    return [this];
  }
}