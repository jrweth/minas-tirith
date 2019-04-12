import {Shape} from "../building/shape/shape";
import {Block, BlockType} from "../building/shape/block";
import {Wall} from "../building/shape/wall";
import {vec3} from "gl-matrix";
import {City} from "./city";
import {getDefaultSettings} from "http2";
import {start} from "repl";


export class LevelOptions {
  wallHeight?: number;
  wallWidth?: number;
  levelWidth?: number;
  entranceGate?: number;
  exitGate?: number;
  gridWidth?: number;
}

export enum GatePosition {
  'RIGHT' = 0,
  'CENTER' = 1,
  'LEFT' = 2
}

export enum GridType {
  'OPEN'= 0,
  'ROAD'= 1,
  'BUILDING'= 2,
  'RAMP'= 3,
  'TUNNEL'= 4
}

export class GridInfo {
  i: number;
  j: number;
  level: CityLevel;
  gridType: GridType;
  buildingIndex: number;
  pos: vec3;
  rotation: vec3;
}

/**
 * Initialize all the values to their default based upon levelnum
 * @param levelNum
 */
export function getDefaultLevelOptions(levelNum: number): LevelOptions {
  return {
    wallHeight : 8,
    levelWidth : 4,
    wallWidth : 2,
    gridWidth: 4
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
  gridWidth: number;
  gridLength: number;
  gridInfo: GridInfo[][];


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
    this.gridWidth    = options.gridWidth;
    if(options.entranceGate) this.entranceGate = options.entranceGate;
    if(options.exitGate)     this.exitGate     = options.exitGate;
    this.initGates(this.levelNum);
  }


  rescaleLevel() {
    this.updateGridPositions();
    this.initShapes();
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
    return Math.max(10, Math.floor(levelRadius / 2))
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

  /**
   * Get the actual blocks to be rendered
   */
  getBlocks(): Block[] {
    if(!this.wall) this.initShapes();
    let blocks: Block[] = [];
    let wallBlocks = this.wall.getBlocks();
    let gateIndex = this.getGateWallBlockIndex();
    for(let i = 0; i < wallBlocks.length; i++) {
      if(i !== gateIndex) {
        blocks.push(wallBlocks[i]);
      }
    }

    blocks = blocks.concat(this.getRoadBlocks());

    return blocks;
  }


  getRoadBlocks(): Block[] {
    let blocks: Block[] = [];
    let gridSize = this.levelWidth / this.gridWidth;
    let footprint: vec3 = vec3.fromValues(gridSize, 1, gridSize);
    for(let i = 0; i < this.gridWidth; i++) {
      for(let j = 0; j < this.gridLength; j++) {
        if(this.gridInfo[i][j].gridType == GridType.ROAD) {
          blocks.push({
            blockType: BlockType.CUBE,
            pos: this.gridInfo[i][j].pos,
            footprint: footprint,
            adjustScaleTop: 1,
            adjustScaleBottom: 1,
            rotation: this.gridInfo[i][j].rotation,
            scaleFromCenter: false
          })
        }
      }
    }
    return blocks;
  }

  getGridLength(): number {
    let radius = this.getLevelRadius();
    let gridLength = radius * this.city.sweep * this.levelWidth  / this.gridWidth;
    return Math.floor(gridLength);
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
      this.city.levels[i].rescaleLevel();
    }
  }


  setWallWidth(width: number) {
    this.wallWidth = width;
    //initialize shapes for all levels here and below
    for(let i = this.levelNum; i >= 0; i--) {
      this.city.levels[i].rescaleLevel();
    }
  }


  setLevelWidth(width: number) {
    this.levelWidth = width;
    //initialize shapes for all levels here and below
    for(let i = this.levelNum; i >= 0; i--) {
      this.city.levels[i].rescaleLevel();
    }
  }

  getPosFromGridPos(i:number, j:number): vec3 {
    let radius = this.getLevelRadius() - this.wallWidth/2  - this.levelWidth + (i * this.levelWidth / this.gridWidth);
    let angle = this.getRotFromGridPos(i,j);
    let x = this.city.pos[0] + Math.cos(angle[1]) * radius;
    let y = this.getLevelHeight();
    let z = this.city.pos[2] + Math.sin(angle[1]) * radius;
    return vec3.fromValues(x,y,z);
  }

  getRotFromGridPos(i:number, j: number): vec3 {
    return vec3.fromValues(0,this.city.sweep * j / this.gridLength, 0);
  }



  initGrid() {
    this.gridLength = this.getGridLength();
    //initialize the grid
    this.gridInfo = [];
    for(let i = 0; i < this.gridWidth; i++) {
      this.gridInfo.push([]);
      for(let j= 0; j < this.gridLength; j++) {
        this.gridInfo[i].push({
          i: i,
          j: j,
          level: this,
          gridType: GridType.OPEN,
          buildingIndex: null,
          pos: this.getPosFromGridPos(i, j),
          rotation: this.getRotFromGridPos(i,j)
        });
      }
    }
  }

  updateGridPositions() {
    for(let i =0; i < this.gridWidth; i++) {
      for(let j =0; j < this.gridLength; j++) {
        this.gridInfo[i][j].pos = this.getPosFromGridPos(i,j);
      }
    }
  }


  /**
   * Initialize all of the roads
   */
  initRoads() {
    this.initBoulevard();
    this.initGateEntranceRoads();
    this.initGateExitRoads();
  }

  /**
   * Get the width of the Boulevard down each level
   */
  getBoulevardWidth() {
    return Math.ceil(this.levelWidth / 6);
  }

  //get the start index of the boulevard
  getBoulevardStartIndex() {
    let roadWidth = this.getBoulevardWidth();
    return Math.floor((this.levelWidth  - roadWidth/2) / 2);
  }

  /**
   * Initialize the central boulevard
   */
  initBoulevard() {
    //add a central boulevard down the middle of the level
    let roadWidth = this.getBoulevardWidth();
    let startRoadGridPos = this.getBoulevardStartIndex();
    for(let i = startRoadGridPos; i < startRoadGridPos + roadWidth; i++) {
      for(let j = 0; j < this.gridLength; j++) {
        this.gridInfo[i][j].gridType = GridType.ROAD;
      }
    }
  }

  initGateEntranceRoads() {
    let gateSegmentIndex = this.getGateWallBlockIndex();
    let entranceAngleWidth = this.city.sweep * 0.9 / (this.getNumWallSegments());
    let entranceAngle = this.city.sweep * (gateSegmentIndex) /this.getNumWallSegments();

    //adjust
    entranceAngle += entranceAngleWidth * (1 + gateSegmentIndex) / this.getNumWallSegments();
    for(let i = this.getBoulevardStartIndex() + this.getBoulevardWidth(); i < this.gridWidth; i++) {
      for(let j = 0; j <  this.gridLength; j++)  {
        if(Math.abs(this.gridInfo[i][j].rotation[1] - entranceAngle) < entranceAngleWidth) {
          this.gridInfo[i][j].gridType = GridType.ROAD;
        }
      }
    }
  }

  initGateExitRoads() {
    //no exit road
    if(this.levelNum == this.city.levels.length - 1) return;

    let nextLevel =  this.city.levels[this.levelNum + 1];
    let gateSegmentIndex = nextLevel.getGateWallBlockIndex();
    let entranceAngleWidth = this.city.sweep * 0.9 / (nextLevel.getNumWallSegments());
    let entranceAngle = this.city.sweep * (gateSegmentIndex) /nextLevel.getNumWallSegments();

    //adjust
    entranceAngle += entranceAngleWidth * (1 + gateSegmentIndex) / nextLevel.getNumWallSegments();
    for(let i = 0; i < this.getBoulevardStartIndex(); i++) {
      for(let j = 0; j <  this.gridLength; j++)  {
        if(Math.abs(this.gridInfo[i][j].rotation[1] - entranceAngle) < entranceAngleWidth) {
          this.gridInfo[i][j].gridType = GridType.ROAD;
        }
      }
    }
  }

};