import {NumOptions, Shape} from './shape'
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
    pos[1] = this.pos[1] - 1;
    footprint[1] = 1;
    footprint[2] = 20;

    let foundation = new Foundation({
      pos: pos,
      footprint: footprint,
      rotation: rot
    });

    foundation.terminal = true;

    return foundation;
  }

  runReplacement(seed: number): Shape[] {


    let type = Random.randomInt(12, seed);

    //get the ratio of x,z dimension
    let ratio = Math.min(this.footprint[0], this.footprint[1])  / Math.max(this.footprint[0], this.footprint[1]);


    //really skinny buildings
    if(ratio < 20202) {
      let shapes = this.getSkinnyBuildingShapes();
      console.log(shapes);
      //split into three sections
    }


    else if(ratio < 0.75) {

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

  getSkinnyBuildingShapes(): Shape[] {
    console.log('got here');
    let axis = Axis.X;
    if(this.footprint[2] > this.footprint[1]) {
      axis = Axis.Z;
    }
    let f1: vec3 = vec3.create();
    let f2: vec3 = vec3.create();
    let p1: vec3 = vec3.create();
    let p2: vec3 = vec3.create();

    this.getSplitFootprints(axis, this.footprint[axis], f1, f2);
    this.getSplitPositions(axis, this.footprint[axis], p1, p2);
    console.log(p1);

    return [
      new Box({
        pos: p1,
        rotation: this.rotation,
        footprint: f1
      }),
      new Box({
        pos: p2,
        rotation: this.rotation,
        footprint: f2
      }),
      this.getBase()
    ];

  }



}

