import {Shape} from "../building/shape/shape";
import {Block} from "../building/shape/block";
import {Wall} from "../building/shape/wall";
import {vec3} from "gl-matrix";
import {City} from "./city";
import {getDefaultSettings} from "http2";


export class LevelOptions {
  levelHeight?: number;
  wallHeight?: number;
  wallWidth?: number;
  levelWidth?: number;
  entranceGate?: number;
  exitGate?: number;
  levelRadius?: number;
}


/**
 * Initialize all the values to their default based upon levelnum
 * @param levelNum
 */
export function getDefaultLevelOptions(levelNum: number): LevelOptions {
  return {
    wallHeight : 10,
    levelHeight : levelNum * 5,
    levelWidth : 10,
    wallWidth : 5,
    levelRadius : (7 - levelNum) * (10 + 5)
  };
}

export class CityLevel {
  levelNum: number;
  city: City;
  levelHeight: number;
  wallHeight: number;
  wallWidth: number;
  levelWidth: number;
  entranceGate: number;
  exitGate: number;
  levelRadius: number;
  shapes: Shape[];

  constructor(levelNum: number, city: City, options: LevelOptions)  {
    this.levelNum = levelNum;
    this.city = city;
    let defaultOptions = getDefaultLevelOptions(levelNum);
    options = {
      ...defaultOptions,
      ...options,
    };

    if(options.wallHeight)   this.wallHeight   = options.wallHeight;
    if(options.wallWidth)    this.wallWidth    = options.wallWidth;
    if(options.levelWidth)   this.levelWidth   = options.levelWidth;
    if(options.entranceGate) this.entranceGate = options.entranceGate;
    if(options.exitGate)     this.exitGate     = options.exitGate;
    if(options.levelHeight)  this.levelHeight  = options.levelHeight;
    if(options.levelRadius)  this.levelRadius  = options.levelRadius;
    this.initGates(this.levelNum);
    this.initShapes();
  }


  /**
   * Initialize the gates based upon the level number
   * @param levelNum
   */
  initGates(levelNum: number) {
    //set the positions of the gates for each level
    let centerGatePos = Math.PI / 2;
    let rightGatePos = Math.PI / 10;
    let leftGatePos = Math.PI - Math.PI/10;
    if(levelNum == 0) {
      this.entranceGate = centerGatePos;
      this.exitGate = rightGatePos;
    }
    else if(levelNum % 2 == 1) {
      this.entranceGate = rightGatePos;
      this.exitGate = leftGatePos;
    }
    else {
      this.entranceGate = leftGatePos;
      this.exitGate = rightGatePos;
    }
  }

  initShapes() {
    //initialize the wall
    this.shapes = [];
    this.shapes.push(new Wall({
      pos: vec3.fromValues(this.city.pos[0], this.levelHeight, this.city.pos[2]),
      footprint: vec3.fromValues(this.levelRadius, this.wallHeight, this.wallWidth),
      rotation: vec3.fromValues(0,0,0),
      sweep: Math.PI
    }));
  }

  getBlocks(): Block[] {
    let blocks: Block[] = [];
    console.log(this.shapes);
    for(let i = 0; i < this.shapes.length; i++) {
      blocks = blocks.concat(this.shapes[i].getBlocks());
    }
    console.log(blocks);
    return blocks;
  }
};