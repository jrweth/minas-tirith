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

export enum GatePosition {
  'RIGHT' = 0,
  'CENTER' = 1,
  'LEFT' = 2
}

/**
 * Initialize all the values to their default based upon levelnum
 * @param levelNum
 */
export function getDefaultLevelOptions(levelNum: number): LevelOptions {
  return {
    wallHeight : 20,
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
  entranceGate: GatePosition;
  exitGate: GatePosition;
  wall: Wall;
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
    if(levelNum == 0) {
      this.entranceGate = GatePosition.CENTER;
      this.exitGate = GatePosition.RIGHT;
    }
    else if(levelNum % 2 == 1) {
      this.entranceGate = GatePosition.RIGHT;
      this.exitGate = GatePosition.LEFT;
    }
    else {
      this.entranceGate = GatePosition.LEFT;
      this.exitGate = GatePosition.RIGHT;
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
    let numSegments = this.getNumWallSegments();

    this.wall = new Wall({
        pos: vec3.fromValues(this.city.pos[0], levelHeight, this.city.pos[2]),
        footprint: vec3.fromValues(levelRadius, this.getWallHeight(), this.wallWidth),
        rotation: vec3.fromValues(0, 0,0),
        sweep: Math.PI,
        numSegments: numSegments
    });

  }

  /**
   * Get the number of wall segments for each wall
   */
  getNumWallSegments(): number {
    let levelRadius = this.getLevelRadius();
    return Math.max(10, Math.floor(levelRadius / 3))
  }

  /**
   * get the index of the wall segment that should be a gate
   */
  getGateWallBlockIndex() {
    let numWallSegments = this.getNumWallSegments();
    if(this.entranceGate == GatePosition.CENTER) {
      return Math.floor(numWallSegments / 2);
    }
    else if(this.entranceGate == GatePosition.RIGHT) {
      return Math.floor(numWallSegments * 0.9);
    }
    else if(this.entranceGate == GatePosition.LEFT) {
      return Math.floor(numWallSegments * 0.1);
    }
  }

  getBlocks(): Block[] {
    if(!this.shapes) this.initShapes();
    let blocks: Block[] = [];
    let wallBlocks = this.wall.getBlocks();
    let gateIndex = this.getGateWallBlockIndex();
    for(let i = 0; i < wallBlocks.length; i++) {
      if(i !== gateIndex) {
        blocks.push(wallBlocks[i]);
      }
    }
    // for(let i = 0; i < this.shapes.length; i++) {
    //   blocks = blocks.concat(this.shapes[i].getBlocks());
    // }
    return blocks;
  }

  getWallHeight(): number {
    if(this.levelNum == 0) {
      return this.wallHeight;
    }
    return this.city.levels[this.levelNum - 1].wallHeight / 2 + this.wallHeight;
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