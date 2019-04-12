import {vec3} from "gl-matrix";
import Random from "../../noise/random";
import {Wall} from "../building/shape/wall";
import {Block} from "../building/shape/block";
import {Shape} from "../building/shape/shape";
import {CityLevel} from "./city-level";



export class City {
  pos: vec3; //position in terrain
  seed: number; //seed for random generation
  levels: CityLevel[];  //the levels of the city
  sweep: number = Math.PI;


  constructor(options: {
    pos: vec3,
    seed: number
  }) {
    this.pos = options.pos;
    this.seed = options.seed;
    this.levels = [];
    for(let i = 0; i < 7; i++) {
      this.levels.push(new CityLevel({levelNum: i}))
    }
  }

  getBlocks(): Block[] {
    let blocks: Block[] = [];
    for(let i = 0; i < this.levels.length; i++) {
      blocks = blocks.concat(this.levels[i].getBlocks());
    }
    console.log(blocks);
    return blocks;
  }



}