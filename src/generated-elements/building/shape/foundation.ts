import {Shape} from './shape'
import {BlockType} from './block';
import {vec3} from "gl-matrix";
import Random from "../../../noise/random";
import {Axis} from "../../../geometry/Axis"
import {TextureType} from "../../../texture/texture-type";
import {Box} from "./box";

export class Foundation extends Shape{

  constructor(options: {pos: vec3, footprint: vec3, rotation: vec3}) {
    super(options);
    this.symbol = 'B';
    this.terminal = false;
  }

  getBlocks() {
    return [{
      blockType: BlockType.CUBE,
      footprint: this.footprint,
      pos: this.pos,
      adjustScale1: 1,
      adjustScale2: 1,
      rotation: this.rotation,
      scaleFromCenter: true,
      textureType: TextureType.BUILDING
    }];
  }

  getBase() {
    //move the foundation underground one block
    let pos: vec3 = vec3.create();
    let rot: vec3 = vec3.create();
    let footprint: vec3 = vec3.create();
    vec3.copy(pos, this.pos);
    vec3.copy(rot, this.rotation);
    vec3.copy(footprint, this.footprint);
    pos[1] = this.pos[1] - this.footprint[1]/2 - 0.5;
    footprint[1] = 1;

    let foundation = new Box({
      pos: pos,
      footprint: footprint,
      rotation: rot,
      textureType: TextureType.FOUNDATION
    });

    foundation.terminal = true;

    return foundation;
  }

  runReplacement(seed: number): Shape[] {



    //get the ratio of x,z dimension
    let ratio = Math.min(this.footprint[0], this.footprint[2])  / Math.max(this.footprint[0], this.footprint[2]);


    //really skinny buildings
    if(ratio < 0.33) {
      let shapes = this.getSkinnyBuildingShapes(seed);
      return shapes;
    }


    else if(ratio < 0.66) {
      let shapes = this.getRectangularBuildingShapes(seed);
    }

    else {
      let type = Random.randomInt(12, seed);
      return [new Box({
        pos: this.pos,
        rotation: this.rotation,
        footprint: this.footprint
      })];
    }


    return [
      new Box({
        pos: this.pos,
        rotation: this.rotation,
        footprint: this.footprint
      }),
      this.getBase()
    ];
  }

  getSkinnyBuildingShapes(seed: number): Shape[] {
    let axis = Axis.X;
    if(this.footprint[2] > this.footprint[0]) {
      axis = Axis.Z;
    }

    let newShapes = this.splitShape(3,axis, this.pos, this.footprint, this.rotation);


    let adjustHeight = this.footprint[1] * 0.3;
    let type = Random.randomInt(3, seed);
    switch (type) {
      case 0: //raise up the selected
      case 1:
      case 2:
        newShapes[type].footprint[1] = newShapes[type].footprint[1] + adjustHeight;
        newShapes[type].pos[1] = newShapes[type].pos[1] + adjustHeight /2;
        break;
      case 3:
        newShapes[1].footprint[1] = newShapes[1].footprint[1] - adjustHeight;
        newShapes[1].pos[1] = newShapes[1].pos[1] - adjustHeight /2;
        break;

    }


    return [
      new Box({
        pos: newShapes[0].pos,
        rotation: this.rotation,
        footprint: newShapes[0].footprint
      }),
      new Box({
        pos: newShapes[1].pos,
        rotation: this.rotation,
        footprint: newShapes[1].footprint
      }),
      new Box({
        pos: newShapes[2].pos,
        rotation: this.rotation,
        footprint: newShapes[2].footprint
      }),
      this.getBase()
    ];

  }


  getRectangularBuildingShapes(seed: number): Shape[] {
    let shapes: Shape[] = [];

    return shapes;
  }



}

