import {vec3} from "gl-matrix";
import {TextureType} from "../../../texture/texture-type";

export enum BlockType  {
  'CUBE' = 1, //standard cube
  'PYRAMID' = 2, //a pyramid
  'TENT' = 3, //tent
  'TRI_TUBE' = 4,
  'QUARTER_PYRAMID' = 5,
  'SLANT' = 6,
  'WEDGE' = 7,
  'QUARTER_ROUND' = 10//standard quarter round
};


export class Block {
  blockType: BlockType;
  pos: vec3;
  footprint: vec3;
  adjustScale1?: number;
  adjustScale2?: number;
  adjustScale3?: number;
  adjustScale4?: number;
  rotation: vec3;
  scaleFromCenter: boolean;
  textureType?: TextureType;
}