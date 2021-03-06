import {vec3} from "gl-matrix";
import {Shape} from "./shape/shape";
import {Block, BlockType} from "./shape/block";
import Random from "../../noise/random";
import {StandardRoof} from "./shape/standardRoof";
import {Box} from "./shape/box";
import {Foundation} from "./shape/foundation";


export class Building {
  pos: vec3;
  footprint: vec3;
  rotation: vec3;
  shapes: Shape[];
  seed: number;
  maxReplacements = 20;


  constructor(options: {
    pos: vec3,
    footprint: vec3,
    rotation: vec3,
    seed: number,
    maxReplacements?: number
  }) {
    this.pos = options.pos;
    this.footprint = options.footprint;
    this.rotation = options.rotation;
    this.seed = options.seed;
    this.shapes = [
      new Foundation({
        footprint: this.footprint,
        pos: this.pos,
        rotation: this.rotation,
      })
    ];
    if(typeof options.maxReplacements !== 'undefined') this.maxReplacements = options.maxReplacements;
    //this.runReplacement();
  }

  getBlocks(): Block[] {
    let blocks: Block[] = [];
    for(let i = 0; i < this.shapes.length; i++) {
      blocks = blocks.concat(this.shapes[i].getBlocks());
    }
    return blocks;
  }

  allShapesTerminal(): boolean {
    for(let i = 0; i < this.shapes.length; i++) {
      if(!this.shapes[i].terminal) return false;
    }
    return true;
  }

  runReplacements() {
    let count: number = 0;
    while(!this.allShapesTerminal() && count < this.maxReplacements) {
      count++;
      this.runReplacement();

    }
  }

  runReplacement() {
    this.seed += 1.23;
    //get non terminal shapes
    let nonTerminal: number[] = [];
    for(let i = 0; i < this.shapes.length; i++) {
      if(!this.shapes[i].terminal) nonTerminal.push(i);
    }

    //pick a random shape to replace
    let replaceIndex = nonTerminal[Random.randomInt(nonTerminal.length - 1, this.seed)];

    if(this.shapes[replaceIndex]) {
      let newShapes = this.shapes[replaceIndex].runReplacement(this.seed);
      this.shapes[replaceIndex] = newShapes[0];
      for(let i = 1; i < newShapes.length; i++) {
        this.shapes.push(newShapes[i]);
      }
    }

  }





}