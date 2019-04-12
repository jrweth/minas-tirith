import {Shape} from "../building/shape/shape";
import {Block} from "../building/shape/block";
import {Wall} from "../building/shape/wall";
import {vec3} from "gl-matrix";


export class CityLevel {
  levelNum: number;
  levelHeight: number;
  wallHeight: number;
  wallWidth: number;
  levelWidth: number;
  entranceGate: number;
  exitGate: number;
  levelRadius: number;
  shapes: Shape[];

  constructor(options: {
    levelNum: number,
    wallHeight?: number,
    wallWidth?: number,
    levelWidth?: number,
    entranceGate?: number,
    exitGate?: number,
    levelRadius?: number
    levelHeight?: number,
  }) {
    this.levelNum = options.levelNum;
    this.init(this.levelNum);
    if(options.wallHeight)   this.wallHeight   = options.wallHeight;
    if(options.wallWidth)    this.wallWidth    = options.wallWidth;
    if(options.levelWidth)   this.levelWidth   = options.levelWidth;
    if(options.entranceGate) this.entranceGate = options.entranceGate;
    if(options.exitGate)     this.exitGate     = options.exitGate;
    if(options.levelHeight)  this.levelHeight  = options.levelHeight;
    this.initGates(this.levelNum);
    this.initShapes();
  }

  /**
   * Initialize all the values to their default based upon levelnum
   * @param levelNum
   */
  init(levelNum: number) {
    this.wallHeight = 10;
    this.levelHeight = levelNum * 5;
    this.levelWidth = 10;
    this.wallWidth = 5;
    this.levelRadius = (7 - levelNum) * (this.levelWidth + this.wallWidth);
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
      pos: vec3.fromValues(250, this.levelHeight, 250),
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