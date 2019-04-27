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
  gridSectionsPerLevel = 10;
  numLevels = 6;
  level: number;
  city: City;
  gridSize:vec2 = vec2.fromValues(500,500);
  info: Float32Array;

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
    this.generateInfo();
    //this.generateCol();

    this.count = this.indices.length;
    gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, this.bufIdx);
    gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, this.indices, gl.STATIC_DRAW);

    gl.bindBuffer(gl.ARRAY_BUFFER, this.bufNor);
    gl.bufferData(gl.ARRAY_BUFFER, this.normals, gl.STATIC_DRAW);

    gl.bindBuffer(gl.ARRAY_BUFFER, this.bufPos);
    gl.bufferData(gl.ARRAY_BUFFER, this.positions, gl.STATIC_DRAW);

    gl.bindBuffer(gl.ARRAY_BUFFER, this.bufInfo);
    gl.bufferData(gl.ARRAY_BUFFER, this.info, gl.STATIC_DRAW);


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

    let indicies: number[] = [];
    let positions: number[] = [];
    let info: number[] = [];
    let normals: number[] = [];
    for (let widthLevel = this.level; widthLevel >= 1; widthLevel--) {
        this.initGridSection(this.level, widthLevel, indicies, positions, info, normals);
    }


    this.positions = new Float32Array(positions);
    this.info      = new Float32Array(info);
    this.normals   = new Float32Array(normals);
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

  initGridSection(levelHeight: number, levelWidth: number, indicies: number[], positions: number[], info: number[], normals: number[]) {
    let heightLevel = this.city.levels[levelHeight];
    let innerRadius = this.city.levels[levelWidth].getInnerRadius();
    let outerRadius = this.city.levels[levelWidth].getOuterRadius();
    let startElevation = heightLevel.getLevelHeight();
    let endElevation = heightLevel.getNextLevelHeight();

    if(levelHeight == 6) {
      if(levelWidth == 5) innerRadius = 0;
      endElevation = heightLevel.getWallTopElevation()+ 0.1;
    }



    //get the start, end and increments for the z coordinate
    let startZ = this.city.pos[2] + this.getSpurRadiusZIntersection(innerRadius);
    let endZ   = this.city.pos[2] + this.getSpurRadiusZIntersection(outerRadius);
    let incZ   = (endZ - startZ) / (this.gridSectionsPerLevel);

    //get the start end and increments for the y coordinate
    let startY = startElevation;
    let endY   = endElevation;
    let incY   = (endY - startY) / (this.gridSectionsPerLevel);

    //get the x offset
    let lev7radius = this.city.levels[this.city.levels.length - 1].getOuterRadius();
    let lev2radius = this.city.levels[1].getOuterRadius();
    let spurDeltaZ = lev2radius;
    let spurDeltaX = lev7radius;
    let startOffsetX = spurDeltaX * (spurDeltaZ - innerRadius) / spurDeltaZ;
    let endOffsetX   = spurDeltaX * (spurDeltaZ - outerRadius) / spurDeltaZ;
    let incOffsetX   =  (startOffsetX - endOffsetX) / (this.gridSectionsPerLevel);



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
        if (i < this.gridSectionsPerLevel && j < this.gridSectionsPerLevel && !this.checkForTunnel(i, j, levelHeight,levelWidth)) {
          //triangles for first
          indicies.push(posIndex, posIndex + 2, posIndex + this.gridSectionsPerLevel*2 + 2);
          indicies.push(posIndex + 2, posIndex + this.gridSectionsPerLevel * 2 + 2, posIndex + this.gridSectionsPerLevel * 2 + 4);


          indicies.push(posIndex + 1, posIndex + 3, posIndex + this.gridSectionsPerLevel*2 + 3);
          indicies.push(posIndex + 3, posIndex + this.gridSectionsPerLevel * 2 + 3, posIndex + this.gridSectionsPerLevel * 2 + 5);
        }


        //if this is the top then make roof of triangles
        if(this.level == 6 && i < this.gridSectionsPerLevel && j == this.gridSectionsPerLevel) {
          indicies.push(posIndex, posIndex + 1, posIndex + this.gridSectionsPerLevel*2 + 2);
          indicies.push(posIndex + 1, posIndex + this.gridSectionsPerLevel*2 + 2, posIndex + this.gridSectionsPerLevel * 2 + 3);
        }

        //add normals
        if(j == this.gridSectionsPerLevel && j == this.gridSectionsPerLevel) {
          normals.push(-1, 0, 0 ,1);
          normals.push(1,0, 0 ,1);
        }
        else {
          normals.push(-1,0, 0 ,0);
          normals.push(1,0, 0 ,0);
        }

        //add info
        info.push(0,0,0,0);
        info.push(1,1,1,1);

      }
    }
  }

  checkForTunnel(i: number, j: number, levelHeight: number, levelWidth: number): boolean {
    if(levelHeight != levelWidth) return false;

    if(i > this.gridSectionsPerLevel * 0.4) return false;



    return true;
  }


};

export default SpurGeometry;
