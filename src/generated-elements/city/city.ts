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
      this.levels.push(new CityLevel(i, this, {}));
    }
  }

  initBuildings(): void {
    for (let i = 0; i < this.levels.length; i++) {
      this.levels[i].initGrid();
      this.levels[i].initRoads();
      this.levels[i].initBuildings();
    }
  }

  //make an adjustment to a level and subsequent adjustments to other levels
  adjustLevel(levelIndex: number, propertyName: string, value: number) {
    let level: CityLevel = this.levels[levelIndex];
    switch(propertyName) {
      case 'wallHeight':
        level.setWallHeight(value);
        break;
      case 'wallWidth':
        console.log('setting wall width');
        level.setWallWidth(value);
        break;
      case 'levelWidth':
        level.setLevelWidth(value);
        break;
      case 'gridWidth':
        level.setGridWidth(value);
        break;
      case 'elevationRise':
        level.setElevationRise(value);
        break
    }
  }

  getBlocks(): Block[] {
    let blocks: Block[] = [];
    for(let i = 0; i < this.levels.length; i++) {
      blocks = blocks.concat(this.levels[i].getBlocks());
    }
    return blocks;
  }



}