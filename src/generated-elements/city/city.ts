import {vec3} from "gl-matrix";
import Random from "../../noise/random";
import {Wall} from "../building/shape/wall";
import {Block} from "../building/shape/block";
import {Shape} from "../building/shape/shape";
import {CityLevel} from "./city-level";
import {Building} from "../building/building";



export class City {
  pos: vec3; //position in terrain
  seed: number; //seed for random generation
  levels: CityLevel[];  //the levels of the city
  sweep: number = Math.PI;
  showBuildings: boolean = true;
  showRoads: boolean = false;
  showWalls: boolean = true;
  showSampleBuildings: boolean = false;
  sampleBuildings: Building[] = [];
  towerSeed: number;
  palaceSeed: number;


  constructor(options: {
    pos: vec3,
    seed: number,
    towerSeed: number,
    palaceSeed: number
  }) {
    this.pos = options.pos;
    this.seed = options.seed;
    this.towerSeed = options.towerSeed;
    this.palaceSeed = options.palaceSeed;
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
      case 'buildingFootprintTarget':
        level.setBuildingFootprintTarget(value);
        break
    }
  }

  getBlocks(): Block[] {
    if(this.showSampleBuildings) return this.getSampleBlocks();
    let blocks: Block[] = [];
    for(let i = 0; i < this.levels.length; i++) {
      blocks = blocks.concat(this.levels[i].getBlocks());
    }
    return blocks;
  }

  getSampleBlocks(): Block[] {
    let blocks: Block[] = [];
    this.getSampleBuildings();
    for(let i = 0; i < this.sampleBuildings.length; i++) {
      blocks = blocks.concat(this.sampleBuildings[i].getBlocks());
    }
    return blocks;
  }

  getSampleBuildings(): Building[] {
    if(this.sampleBuildings.length > 0) return this.sampleBuildings;


    let footprints: vec3[] = [
      vec3.fromValues( 1, 1, 4),
      vec3.fromValues( 8, 3, 2),
      vec3.fromValues( 3, 7, 6),
      vec3.fromValues( 4, 4, 5),
      vec3.fromValues( 5, 8, 8),
      vec3.fromValues( 6, 6, 3),
      vec3.fromValues( 7, 7, 5),
      vec3.fromValues( 8, 8, 8),
      vec3.fromValues( 9, 9, 2),
      vec3.fromValues( 10, 10, 7),
      vec3.fromValues( 11, 11, 11),
    ];

    let xPos = 200;
    for(let i = 0; i < footprints.length; i++) {
      let foot = footprints[i];
      xPos = xPos + foot[0]/2;
      let pos: vec3 = vec3.fromValues(xPos, foot[1] / 2, 210);
      let seed: number = Math.pow(1.232, i);

      let b =new Building({
        pos: pos,
        footprint: foot,
        rotation: vec3.fromValues(0,i * Math.PI/10,0),
        seed: seed
      });
      b.runReplacements();
      this.sampleBuildings.push(b);
      xPos = xPos + foot[0]/2+ 3;


    }

    return this.sampleBuildings;
  }

  initPalace(): void {
    this.levels[this.levels.length -1].initPalace();
  }



  getHeight(): number {
    let topLevel = this.levels[this.levels.length -1];
    return topLevel.getLevelHeight();
  }

  getRadius(): number {
    let topLevel = this.levels[0];
    return topLevel.getLevelRadius();
  }


}