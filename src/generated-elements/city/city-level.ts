import {Shape} from "../building/shape/shape";
import {Block} from "../building/shape/block";
import {Wall} from "../building/shape/wall";
import {vec3} from "gl-matrix";
import {City} from "./city";
import {getDefaultSettings} from "http2";


export class LevelOptions {
  wallHeight?: number;
  wallWidth?: number;
  levelWidth?: number;
  entranceGate?: number;
  exitGate?: number;
}


/**
 * Initialize all the values to their default based upon levelnum
 * @param levelNum
 */
export function getDefaultLevelOptions(levelNum: number): LevelOptions {
  let wallHeight = 10;
  if(levelNum == 1) wallHeight = 12;
  return {
    wallHeight : wallHeight,
    levelWidth : 10,
    wallWidth : 5
  };
}

export class CityLevel {
  city: City;
  levelNum: number;
  wallHeight: number;
  wallWidth: number;
  levelWidth: number;
  entranceGate: number;
  exitGate: number;
  shapes: Shape[];

  constructor(levelNum: number, city: City, options: LevelOptions)  {
    this.levelNum = levelNum;
    this.city = city;
    let defaultOptions = getDefaultLevelOptions(levelNum);
    options = {
      ...defaultOptions,
      ...options,
    };

    if (this.levelNum == 0) console.log(options);


    this.wallHeight   = options.wallHeight;
    this.wallWidth    = options.wallWidth;
    this.levelWidth   = options.levelWidth;
    if(options.entranceGate) this.entranceGate = options.entranceGate;
    if(options.exitGate)     this.exitGate     = options.exitGate;
    this.initGates(this.levelNum);
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

  getLevelHeight(): number {
    let height: number = this.city.pos[1];
    //only adjust levels 2 and higher based on height of first interior wall
    for(let i = 1; i < this.levelNum; i++) {
      height += this.city.levels[i].wallHeight / 2;
    }
    return height;
  }

  getLevelRadius(): number {
    let radius: number = this.wallWidth + this.levelWidth;
    for(let i = this.levelNum + 1; i < 7; i++) {
      radius += this.city.levels[i].levelWidth + this.city.levels[i].wallWidth;
    }
    return radius;
  }

  initShapes() {
    //initialize the wall
    this.shapes = [];
    let levelHeight = this.getLevelHeight();
    let levelRadius = this.getLevelRadius();
    this.shapes.push(new Wall({
      pos: vec3.fromValues(this.city.pos[0], levelHeight, this.city.pos[2]),
      footprint: vec3.fromValues(levelRadius, this.wallHeight, this.wallWidth),
      rotation: vec3.fromValues(0,0,0),
      sweep: Math.PI
    }));
  }

  getBlocks(): Block[] {
    if(!this.shapes) this.initShapes();
    let blocks: Block[] = [];
    for(let i = 0; i < this.shapes.length; i++) {
      blocks = blocks.concat(this.shapes[i].getBlocks());
    }
    return blocks;
  }

  setWallHeight(height: number) {
    this.wallHeight = height;
    //initialize shapes for all levels here and above
    for(let i = this.levelNum; i < this.city.levels.length; i++) {
      this.city.levels[i].initShapes()
    }
  }

  setWallWidth(width: number) {
    this.wallWidth = width;
    //initialize shapes for all levels here and below
    for(let i = this.levelNum; i >= 0; i--) {
      this.city.levels[i].initShapes()
    }
  }


  setLevelWidth(width: number) {
    this.levelWidth = width;
    //initialize shapes for all levels here and below
    for(let i = this.levelNum; i >= 0; i--) {
      this.city.levels[i].initShapes()
    }
  }

};