import {vec2, vec3} from "gl-matrix";
import {Block} from "./block";
import Random from "../../../noise/random";
import {Axis} from "../../../geometry/Axis";

export class NumOptions {
  value?: number;
  percentage?: number;
  seed?: number;

  static getValue(options: NumOptions, maxValue?: number, minValue?: number) {
    if(options.value) return options.value;
    if(options.percentage) return maxValue * options.percentage;

    if(!minValue) minValue = 0;
    let rand = Random.random1to1(1, vec2.fromValues(options.seed, 4.2343 ));
    return minValue + (maxValue - minValue) * rand;
  }
}


export abstract class Shape {
  pos: vec3;
  footprint: vec3;
  rotation: vec3;
  symbol: string;
  terminal: boolean;
  children: number[] = [];

  protected constructor(options: {
    pos: vec3,
    footprint: vec3,
    rotation: vec3
  }) {
    this.pos= options.pos;
    this.footprint = options.footprint;
    this.rotation = options.rotation;
  }

  abstract runReplacement(seed: number): Shape[];

  abstract getBlocks(): Block[];


  getSplitFootprints(options: {axis: Axis, offset: number, footprint1: vec3, footprint2: vec3}): void {

    options.footprint1 = vec3.fromValues(this.footprint[0], this.footprint[1], this.footprint[2]);
    options.footprint2 = vec3.fromValues(this.footprint[0], this.footprint[1], this.footprint[2]);

    options.footprint1[options.axis] = options.offset;
    options.footprint2[options.axis] = this.footprint[options.axis] - options.offset;

  }

  getSplitPositions(params: {axis: Axis, offset: number, position1: vec3, position2: vec3}) {
    params.position1 = vec3.fromValues(this.pos[0], this.pos[1], this.pos[2]);
    params.position2 = vec3.fromValues(this.pos[0], this.pos[1], this.pos[2]);

    params.position1[params.axis] = this.pos[params.axis] - this.footprint[params.axis]/2 + 0.5* params.offset;
    params.position2[params.axis] = this.pos[params.axis] + 0.5 * params.offset;
  }

  splitShape(numDivisions: number, axis: Axis, position: vec3, footprint: vec3, rotation: vec3): {pos: vec3, footprint: vec3}[] {
    let shapeInfo: {pos: vec3, footprint: vec3}[] = [];
    for(let i = 0; i < numDivisions; i++) {
      let pos: vec3 = vec3.create();
      vec3.copy(pos, position);
      let distance = -footprint[axis] / 2 + (i + 0.5) * (footprint[axis] / numDivisions);
      switch(axis) {
        case Axis.Y:
          pos[axis] = pos[axis] + distance;
          break;
        case Axis.X:
          pos[0] = pos[0] + Math.cos(this.rotation[1]) * distance;
          pos[2] = pos[2] + Math.sin(this.rotation[1]) * distance;
          break;
        case Axis.Z:
          pos[0] = pos[0] + Math.sin(this.rotation[1]) * distance;
          pos[2] = pos[2] + Math.cos(this.rotation[1]) * distance;
          break;
      }


      let foot: vec3 = vec3.create();
      vec3.copy(foot, footprint);
      foot[axis] = footprint[axis] / numDivisions;
      shapeInfo.push({pos: pos, footprint: foot});
    }
    return shapeInfo;
  }


  /**
   * Shrink shape from the center inward
   * @param axis
   * @param options
   */
  shrink(axis: Axis, shrinkBy: NumOptions): void {
    let shrinkage = NumOptions.getValue(shrinkBy, this.footprint[axis]);

    this.footprint[axis] -= shrinkage;

  }

  shrinkX(shrinkBy: NumOptions): void {
    this.shrink(0, shrinkBy);
  }

  shrinkZ(shrinkBy: NumOptions): void {
    this.shrink(2, shrinkBy);
  }

  shrinkBoth(shrinkBy: NumOptions): void {
    this.shrinkX(shrinkBy);
    this.shrinkZ(shrinkBy);
  }

  reduce(axis: Axis, reduceBy: NumOptions): void {

  }
}