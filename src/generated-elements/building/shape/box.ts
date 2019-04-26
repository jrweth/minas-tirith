import {NumOptions, Shape} from './shape'
import {BlockType} from './block';
import {vec3} from "gl-matrix";
import Random from "../../../noise/random";
import {Axis} from "../../../geometry/Axis"
import {StandardRoof} from "./standardRoof";
import {TextureType} from "../../../texture/texture-type";
import {Turret} from "./turret";
import {StandardBlock} from "./standardBlock";

export class Box extends Shape{

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

  runReplacement(seed: number): Shape[] {
    let type = Random.randomInt(13, seed);
    switch(type) {
      case 0: return this.splitX({percentage: 0.5});
      case 1: return this.splitY({percentage: 0.5});
      case 2: return this.splitZ({percentage: 0.5});
      case 3: return this.addRoof(BlockType.SLANT);
      case 4: return this.addRoof(BlockType.TENT);
      case 5: return this.addRoof(BlockType.PYRAMID);
      case 6: this.shrinkX({percentage: 0.20}); return [this];
      case 7: return this.taperBoth({percentage: 0.25});
      case 8: return this.taperX({percentage: 0.25})
      case 9: return this.taperZ({percentage: 0.25})
      case 10: this.terminal = true; return [this];
      default:
        return this.toTurret();

    }
  }

  addRoof(blockType: BlockType) {
    let height =  Math.min(this.footprint[Axis.X], this.footprint[Axis.Z]);
    let posY = this.pos[1] + 0.5 * this.footprint[1] + 0.5 * height;
    let roof = new StandardRoof({
      blockType: blockType,
      pos: vec3.fromValues(this.pos[0], posY, this.pos[2]),
      footprint: vec3.fromValues(this.footprint[0], height, this.footprint[2]),
      rotation: this.rotation
    });
    this.terminal = true;
    return [this, roof];

  }


  taperBoth(shrinkBy: NumOptions): Shape[] {
    let newBoxes: Shape[] = this.splitY({percentage: .5});
    if(newBoxes.length > 1) {
      newBoxes[1].shrinkBoth(shrinkBy);
    }
    return newBoxes;
  }

  taperX(shrinkBy: NumOptions): Shape[] {
    let newBoxes: Shape[] = this.splitY({percentage: .5});
    if(newBoxes.length > 1) {
      newBoxes[1].shrinkX(shrinkBy);
    }
    return newBoxes;
  }

  taperZ(shrinkBy: NumOptions): Shape[] {
    let newBoxes: Shape[] = this.splitY({percentage: .5});
    if(newBoxes.length > 1) {
      newBoxes[1].shrinkZ(shrinkBy);
    }
    return newBoxes;
  }

  toTurret(): Shape[] {

    let newShapes7= this.splitShape(8,Axis.Y, this.pos, this.footprint, this.rotation);


    //create a base 1/4 the size of the current box
    let base = new Box({
      pos: newShapes7[0].pos,
      footprint: newShapes7[0].footprint,
      rotation: this.rotation
    });
    base.terminal = true;

    let rot: vec3 = vec3.create();
    vec3.copy(rot, this.rotation);
    if(this.footprint[0] < this.footprint[2]) {
      newShapes7[1].footprint[0] = this.footprint[2];
      newShapes7[1].footprint[2] = this.footprint[0];
      rot[1] += Math.PI / 2;
    }
    let transition = new StandardBlock({
      pos: newShapes7[1].pos,
      footprint: newShapes7[1].footprint,
      rotation: rot,
      blockType: BlockType.TENT,
      adjustScale1: 0.5,
      adjustScale2: 1,
      textureType: TextureType.BUILDING
    });


    let turret = new Turret({
      pos: newShapes7[4].pos,
      footprint: vec3.fromValues(this.footprint[0], this.footprint[1]*5/7, this.footprint[2]),
      rotation: this.rotation
    });

    return [base, transition, turret];
  }


  splitX(splitAt: NumOptions): Shape[] { return this.split(Axis.X, splitAt); }
  splitY(splitAt: NumOptions): Shape[] { return this.split(Axis.Y, splitAt); }
  splitZ(splitAt: NumOptions): Shape[] { return this.split(Axis.Z, splitAt); }



  split(axis: Axis, splitAt: NumOptions) {
    //too small to spit vertically
    if(this.footprint[axis] < 0.4){
      return[this];
    }

    let offset = NumOptions.getValue(splitAt, this.footprint[axis] * 0.7, this.footprint[axis]* 0.3);

    let newPos = vec3.fromValues(this.pos[0], this.pos[1], this.pos[2]);
    newPos[axis] = this.pos[axis] + 0.5 * offset;

    let newFootprint = vec3.fromValues(this.footprint[0], this.footprint[1], this.footprint[2]);
    newFootprint[axis] = this.footprint[axis] - offset;

    let newBox = new Box({
      pos: newPos,
      footprint: newFootprint,
      rotation: this.rotation
    });

    this.pos[axis] = this.pos[axis] - this.footprint[axis]/2 + 0.5* offset;
    this.footprint[axis] = offset;

    //no more changes if we are supporting something on top
    if(axis == 1) this.terminal = true;


    return[this, newBox];
  }
}

