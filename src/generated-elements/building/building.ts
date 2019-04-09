import {vec3} from "gl-matrix";
import {Shape} from "./shape/shape";
import {Block, BlockType} from "./shape/block";
import Random from "../../noise/random";
import {Wall} from "./shape/wall";
import {StandardRoof} from "./shape/standardRoof";


export class Building {
  pos: vec3;
  footprint: vec3;
  rotation: vec3;
  shapes: Shape[];
  seed: number;


  constructor(options: {
    pos: vec3,
    footprint: vec3,
    rotation: vec3,
    seed: number
  }) {
    this.pos = options.pos;
    this.footprint = options.footprint;
    this.rotation = options.rotation;
    this.seed = options.seed;
    this.shapes = [
      new Wall({
        footprint: this.footprint,
        pos: this.pos,
        rotation: this.rotation
      }),
      new StandardRoof({
        footprint: vec3.fromValues(3, 30, 3),
        pos: this.pos,
        rotation: this.rotation,
        blockType: BlockType.CUBE
      })
    ];
    this.runReplacements();
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
    while(!this.allShapesTerminal() && count < 20) {
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

    let newShapes = this.shapes[replaceIndex].runReplacement(this.seed);
    this.shapes[replaceIndex] = newShapes[0];
    for(let i = 1; i < newShapes.length; i++) {
      this.shapes.push(newShapes[i]);
    }

  }





}