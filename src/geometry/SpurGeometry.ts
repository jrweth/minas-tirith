import {vec2, vec3, vec4} from 'gl-matrix';
import Drawable from '../rendering/gl/Drawable';
import {gl} from '../globals';
import Noise from "../noise/noise";
import {Terrain} from "../generated-elements/terrain";
import {City} from "../generated-elements/city/city";

class SpurGeometry extends Drawable {
  seed: vec2 = vec2.fromValues(342.3423, 984.843);
  indices: Uint32Array;
  positions: Float32Array;
  normals: Float32Array;
  gridSectionsPerLevel = 2;
  numLevels = 6;
  level: number;
  city: City;
  gridSize:vec2 = vec2.fromValues(500,500);

  constructor(city: City, level: number) {
    super(); // Call the constructor of the super class. This is required.
    this.city = city;
    this.numLevels = 5;
    this.level = level;
  }

  create() {

    this.initGrid();

    this.generateIdx();
    this.generatePos();
    this.generateNor();
    //this.generateInfo();
    //this.generateCol();

    this.count = this.indices.length;
    gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, this.bufIdx);
    gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, this.indices, gl.STATIC_DRAW);

    gl.bindBuffer(gl.ARRAY_BUFFER, this.bufNor);
    gl.bufferData(gl.ARRAY_BUFFER, this.normals, gl.STATIC_DRAW);

    gl.bindBuffer(gl.ARRAY_BUFFER, this.bufPos);
    gl.bufferData(gl.ARRAY_BUFFER, this.positions, gl.STATIC_DRAW);

    // gl.bindBuffer(gl.ARRAY_BUFFER, this.bufInfo);
    // gl.bufferData(gl.ARRAY_BUFFER, this.info, gl.STATIC_DRAW);


    // gl.bindBuffer(gl.ARRAY_BUFFER, this.bufCol);
    // gl.bufferData(gl.ARRAY_BUFFER, this.colors, gl.STATIC_DRAW);
  }

  //get the number of points
  getNumPoints(): number {
    let numPoints: number = 0;
    for(let level = this.numLevels; level >= 1; level--) {
      numPoints += (level * this.gridSectionsPerLevel + 1) * (this.gridSectionsPerLevel + 1);
    }
    return numPoints * 2; //two sides of spur
  }


  toTerrainPos(pos: number) {
    return (pos - 250) / 5;
  }

  initGrid() {
    let numPoints: number = this.getNumPoints();

    this.normals   = new Float32Array(numPoints * 4);
    //
    // this.positions[0] = 0;
    // this.positions[1] = 0;
    // this.positions[2] = 0;
    // this.positions[3] = 0;
    //
    // this.positions[4] = 50;
    // this.positions[5] = 0;
    // this.positions[6] = 0;
    // this.positions[7] = 0;
    //
    // this.positions[8] = 50;
    // this.positions[9] = 50;
    // this.positions[10] = 0;
    // this.positions[11] = 0;
    //
    // indicies.push(0,1,2);


    let indicies: number[] = [];
    let positions: number[] = [];
    for (let widthLevel = this.level; widthLevel >= 1; widthLevel--) {
        this.initGridSection(this.level, widthLevel, indicies, positions)
    }

    //this.initGridSection(1, 1, indicies, positions);
    // this.initGridSection(2, 1, indicies, positions);
    // this.initGridSection(2, 2, indicies, positions);
    // this.initGridSection(3, 1, indicies, positions);
    // this.initGridSection(3, 2, indicies, positions);
    // this.initGridSection(3, 3, indicies, positions);
    // this.initGridSection(4, 1, indicies, positions);
    // this.initGridSection(4, 2, indicies, positions);
    // this.initGridSection(4, 3, indicies, positions);
    // this.initGridSection(4, 4, indicies, positions);
    // this.initGridSection(5, 1, indicies, positions);
    // this.initGridSection(5, 2, indicies, positions);
    // this.initGridSection(5, 3, indicies, positions);
    //this.initGridSection(5, 4, indicies, positions);
    //this.initGridSection(5, 5, indicies, positions);
    //indicies = [0,1,3];


    this.positions = new Float32Array(positions);
    this.indices   = new Uint32Array(indicies); // NxN squares, each square is two triangles, each triangle is three indices

  }

  /**
   * This is just an approximation
   * @param radius
   */
  getSpurRadiusZIntersection(radius: number): number {
    let lev7radius = this.city.levels[this.city.levels.length - 1].getOuterRadius();
    let lev2radius = this.city.levels[1].getOuterRadius();
    let spurDeltaZ = lev2radius;
    let spurDeltaX = lev7radius;
    let deltaX = spurDeltaX * (spurDeltaZ - radius) / spurDeltaZ;
    let angle = Math.atan(deltaX / radius);
    let z = radius - Math.sin(angle/3.1415) * radius;
    return z;
  }

  initGridSection(levelHeight: number, levelWidth: number, indicies: number[], positions: number[]) {
    let innerRadius = this.city.levels[levelWidth].getInnerRadius();
    let outerRadius = this.city.levels[levelWidth].getOuterRadius();
    let startElevation = this.city.levels[levelHeight].getLevelHeight() + this.city.levels[levelHeight].elevationRise / 2;
    let endElevation = this.city.levels[levelHeight].getNextLevelHeight() + this.city.levels[levelHeight].getNextLevelElevationRise();
    // let cityLevel = this.city.levels[levelHeight];
    // let levelElevation = cityLevel.getLevelHeight();
    // let innerRadius = cityLevel.getInnerRadius();
    // let outerRadius = cityLevel.getOuterRadius();
    // let startElevation = levelElevation + cityLevel.elevationRise / 2;
    // let endElevation = cityLevel.getNextLevelHeight() + cityLevel.getNextLevelElevationRise();

    if(levelHeight == 5) {
      innerRadius = 0;
      endElevation = this.city.levels[levelHeight + 1].getWallTopElevation();
    }



    //get the start, end and increments for the z coordinate
    let startZ = this.city.pos[2] + this.getSpurRadiusZIntersection(innerRadius);
    let endZ   = this.city.pos[2] + this.getSpurRadiusZIntersection(outerRadius);
    let incZ   = (endZ - startZ) / (this.gridSectionsPerLevel);

    //get the start end and increments for the y coordinate
    let startY = startElevation;
    let endY   = endElevation;
    let incY   = (endY - startY) / (this.gridSectionsPerLevel);

    let lev7radius = this.city.levels[this.city.levels.length - 1].getOuterRadius();
    let lev2radius = this.city.levels[1].getOuterRadius();
    let spurDeltaZ = lev2radius;
    let spurDeltaX = lev7radius;
    let startOffsetX = spurDeltaX * (spurDeltaZ - innerRadius) / spurDeltaZ;
    let endOffsetX   = spurDeltaX * (spurDeltaZ - outerRadius) / spurDeltaZ;
    let incOffsetX   =  (startOffsetX - endOffsetX) / (this.gridSectionsPerLevel);

    // console.log('start: ' + startOffsetX);
    // console.log('end ' + endOffsetX);
    // console.log('inc ' + incOffsetX);
    // console.log('spurDeltaZ: ' + spurDeltaZ);
    // console.log('innder radius: ' + innerRadius);
    // console.log('outer radius: ' + outerRadius);


    for (let i = 0; i <= this.gridSectionsPerLevel; ++i) {
      for (let j = 0; j <= this.gridSectionsPerLevel; j++) {

        let posIndex = positions.length / 4;

        positions.push(this.toTerrainPos(this.city.pos[0] + startOffsetX - i * incOffsetX));
        positions.push((startY + j * incY)/5);
        positions.push(this.toTerrainPos(startZ + i * incZ));
        positions.push(0);

        positions.push(this.toTerrainPos(this.city.pos[0] - startOffsetX + i * incOffsetX));
        positions.push((startY + j * incY)/5);
        positions.push(this.toTerrainPos(startZ + i * incZ));
        positions.push(0);

        //make the triangles
        if (i < this.gridSectionsPerLevel && j < this.gridSectionsPerLevel) {
          //triangles for first
          indicies.push(posIndex, posIndex + 2, posIndex + this.gridSectionsPerLevel*2 + 2);
          indicies.push(posIndex + 2, posIndex + this.gridSectionsPerLevel * 2 + 2, posIndex + this.gridSectionsPerLevel * 2 + 4);


          indicies.push(posIndex + 1, posIndex + 3, posIndex + this.gridSectionsPerLevel*2 + 3);
          indicies.push(posIndex + 3, posIndex + this.gridSectionsPerLevel * 2 + 3, posIndex + this.gridSectionsPerLevel * 2 + 5);
        }
      }
    }
  }
};

export default SpurGeometry;
