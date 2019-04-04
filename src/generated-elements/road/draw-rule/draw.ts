import {BaseDrawRule} from "./base-draw-rule";
import {DrawRule} from "./draw-rule";
import {RoadType, Turtle} from "../turtle";
import {LSystem, Segment} from "../lsystem";
import {vec2} from "gl-matrix";
import Prando from "prando";

export class Draw extends BaseDrawRule implements DrawRule {
  lsystem: LSystem;
  prando:  any;

  constructor(options: {lsystem: LSystem, seed: number}) {
    super(options);
    this.lsystem = options.lsystem;
    this.prando = new Prando(options.seed);
  }

  draw(turtle: Turtle, turtleStack: Turtle[], segments: Segment[] ) {
    if(turtle.branchEnded) {
      return turtle;
    }

    //create the standard segment
    let distance: vec2 = vec2.fromValues(
      Math.cos(turtle.dir) * turtle.segmentLength,
      Math.sin(turtle.dir) * turtle.segmentLength
    );
    let endPoint = vec2.create();
    vec2.add(endPoint, turtle.pos, distance);

    //try to add the segment
    let result = this.lsystem.addSegment(
      turtle.lastIntersectionId,
      endPoint,
      turtle.dir,
      turtle.roadType
    );
    //if successful move our turtle
    if(result.added) {
      turtle.pos = this.lsystem.intersections[result.segment.endIntersectionId].pos;
      turtle.dir = result.segment.rotation;
      turtle.lastIntersectionId = result.segment.endIntersectionId;

      if(result.intersected && turtle.roadType == RoadType.STREET) {
        turtle.branchEnded = true;
      }
    }
    else {
      turtle.branchEnded = true;
    }
    if(turtle.roadType == RoadType.STREET && result.intersected) {
      turtle.branchEnded = true;
    }

    return turtle;
  }
}