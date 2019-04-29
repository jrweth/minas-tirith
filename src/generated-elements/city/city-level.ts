import {Block, BlockType} from "../building/shape/block";
import {Wall} from "../building/shape/wall";
import {vec2, vec3} from "gl-matrix";
import {City} from "./city";
import Random from "../../noise/random";
import {Building} from "../building/building";
import {TextureType} from "../../texture/texture-type";
import {Road} from "./road";
import {Shape} from "../building/shape/shape";
import {Battlement} from "../building/shape/battlement";


export class LevelOptions {
  wallHeight?: number;
  wallWidth?: number;
  levelWidth?: number;
  elevationRise?: number;
  entranceGate?: number;
  exitGate?: number;
  gridWidth?: number;
  seed?: number;
  buildingFootprintTarget?: number;
}

export enum GatePosition {
  'RIGHT' = 0,
  'CENTER' = 1,
  'LEFT' = 2
}

export enum GridType {
  'OPEN'= 0,
  'ROAD'= 1,
  'BUILDING'= 2,
  'RAMP'= 3,
  'TUNNEL'= 4
}

export class GridInfo {
  i: number;
  j: number;
  level: CityLevel;
  gridType: GridType;
  buildingIndex: number;
  pos: vec3;
  rotation: vec3;
}

/**
 * Initialize all the values to their default based upon levelnum
 * @param levelNum
 */
export function getDefaultLevelOptions(levelNum: number): LevelOptions {
  return {
    wallHeight : 1,
    elevationRise: 9,
    levelWidth : (levelNum == 6) ? 16 : 5,
    wallWidth : 3,
    gridWidth: 6,
    seed: 1.34 * levelNum,
    buildingFootprintTarget: Math.pow(levelNum + 1.3, 1.7)
  };
}

export class CityLevel {
  city: City;
  levelNum: number;
  wallHeight: number;
  wallWidth: number;
  levelWidth: number;  //width of the streets
  elevationRise: number;
  seed: vec2;
  entranceGate: GatePosition;
  exitGate: GatePosition;
  wall: Wall;
  road: Road;
  gridWidth: number;
  gridLength: number;
  gridInfo: GridInfo[][];
  boulevardStartIndex: number;
  boulevardWidth: number;
  inSpokes: number[];
  outSpokes: number[];
  buildingFootprintTarget: number;
  buildings: Building[];



  constructor(levelNum: number, city: City, options: LevelOptions)  {
    this.levelNum = levelNum;
    this.city = city;
    let defaultOptions = getDefaultLevelOptions(levelNum);
    options = {
      ...defaultOptions,
      ...options,
    };

    this.wallHeight   = options.wallHeight;
    this.wallWidth    = options.wallWidth;
    this.levelWidth   = options.levelWidth;
    this.elevationRise= options.elevationRise;
    this.gridWidth    = options.gridWidth;
    this.seed         = vec2.fromValues(this.levelNum, options.seed);
    this.buildingFootprintTarget = options.buildingFootprintTarget;
    if(options.entranceGate) this.entranceGate = options.entranceGate;
    if(options.exitGate)     this.exitGate     = options.exitGate;
    this.initGates(this.levelNum);
  }


  rescaleLevel() {
    this.updateGridPositions();
    this.initWall();
    this.initDetails()
  }


  getLevelHeight(): number {
    let height: number = this.city.pos[1];
    //only adjust levels 2 and higher based on height of first interior wall
    for(let i = 0; i < this.levelNum; i++) {
      height += this.city.levels[i].elevationRise;
    }
    return height;
  }

  getNextLevelHeight(): number {
    let nextLevelHeight = this.getLevelHeight();
    if(this.levelNum < this.city.levels.length -1) {
      nextLevelHeight = this.city.levels[this.levelNum + 1].getLevelHeight();
    }
    else {
      nextLevelHeight += this.elevationRise;
    }
    return nextLevelHeight;
  }

  getNextLevelElevationRise(): number {
    if(this.levelNum < this.city.levels.length -1) {
      return this.city.levels[this.levelNum + 1].elevationRise;
    }
    return this.wallHeight;
  }
  getInnerRadius(): number {
    let radius = 0;
    for(let i = this.levelNum + 1; i < 7; i++) {
      radius += this.city.levels[i].levelWidth + this.city.levels[i].wallWidth;
    }
    return radius;
  }

  getOuterRadius(): number {
    return this.wallWidth + this.levelWidth + this.getInnerRadius();
  }

  getLevelRadius(): number {
    let radius: number = this.wallWidth + this.levelWidth;
    for(let i = this.levelNum + 1; i < 7; i++) {
      radius += this.city.levels[i].levelWidth + this.city.levels[i].wallWidth;
    }
    return radius;
  }


  /**
   * Get the actual blocks to be rendered
   */
  getBlocks(): Block[] {
    if(!this.wall) this.initWall();
    let blocks: Block[] = [];

    blocks = blocks.concat(this.road.getBlocks());

    if(this.city.showWalls) blocks = blocks.concat(this.getWallBlocks());
    if(this.city.showRoads) blocks = blocks.concat(this.getStreetBlocks());
    if(this.city.showBuildings) blocks = blocks.concat(this.getBuildingBlocks());

    return blocks;
  }



  getGridLength(): number {
    let radius = this.getInnerRadius();
    let gridLength = radius * this.city.sweep * this.gridWidth  / this.levelWidth;
    return Math.floor(gridLength);
  }


  setLevelWidth(width: number) {
    this.levelWidth = width;
    //initialize shapes for all levels here and below
    for(let i = this.levelNum; i >= 0; i--) {
      this.city.levels[i].rescaleLevel();
    }
  }

  setElevationRise(rise: number) {
    this.elevationRise = rise;
    //initialize shapes for all levels here and below
    for(let i = this.levelNum; i < this.city.levels.length; i++) {
      this.city.levels[i].rescaleLevel();
    }
  }

  setBuildingFootprintTarget(footprint: number) {
    this.buildingFootprintTarget = footprint;
    this.rescaleLevel();
  }

  initDetails() {
    this.initGrid();
    this.initRoads();
    this.initBuildings();
  }



  /******************************************************************************************************/
  /******************************************GRID *******************************************************/
  /******************************************************************************************************/

  updateGridPositions() {
    for(let i =0; i < this.gridWidth; i++) {
      for(let j =0; j < this.gridLength; j++) {
        try {
          this.gridInfo[i][j].pos = this.getPosFromGridPos(i,j);
        }
        catch(e) {
          console.log(e);
          console.log('i: ' + i + ' j: ' + j);
          console.log(this);
        }
      }
    }
  }

  initGrid() {
    this.gridLength = this.getGridLength();
    //initialize the grid
    this.gridInfo = [];
    for(let i = 0; i < this.gridWidth; i++) {
      this.gridInfo.push([]);
      for(let j= 0; j < this.gridLength; j++) {
        this.gridInfo[i].push({
          i: i,
          j: j,
          level: this,
          gridType: GridType.OPEN,
          buildingIndex: null,
          pos: this.getPosFromGridPos(i, j),
          rotation: this.getRotFromGridPos(i,j)
        });
      }
    }
    //console.log(this.gridInfo);

  }

  setGridWidth(width: number) {
    this.gridWidth = width;
    this.initGrid();
    //initialize shapes for all levels here and below
    this.rescaleLevel();
  }

  getPosFromGridPos(i:number, j:number): vec3 {
    let radius = this.getInnerRadius() + (i + 0.5) * (this.levelWidth / this.gridWidth);
    let angle = this.getRotFromGridPos(i,j);
    let x = this.city.pos[0] + Math.cos(angle[1]) * radius;
    let y = this.getHeightFromGridPos(i, j);
    let z = this.city.pos[2] + Math.sin(angle[1]) * radius;
    return vec3.fromValues(x,y,z);
  }

  getHeightFromGridPos(i: number, j: number): number {
    let height = this.getLevelHeight();
    let nextLevelHeight = this.getLevelHeight();
    if(this.levelNum < this.city.levels.length -1) {
      nextLevelHeight = this.city.levels[this.levelNum + 1].getLevelHeight();
    }
    else {
      nextLevelHeight = height + this.elevationRise;
    }
    let elevationRise = nextLevelHeight - height;

    let percentElevated = 0;
    let percentSweep = j / this.gridLength;
    switch (this.entranceGate) {
      case GatePosition.LEFT:
        if(percentSweep < 0.15) {
          percentElevated = 0;
        }
        else if(percentSweep > 0.85) {
          percentElevated = 1;
        }
        else {
          percentElevated = (percentSweep - 0.15) / 0.7;
        }
        break;
      case GatePosition.RIGHT:
        if(percentSweep < 0.15) {
          percentElevated = 1;
        }
        else if(percentSweep > 0.85) {
          percentElevated = 0;
        }
        else {
          percentElevated = (0.85 - percentSweep) / 0.7;
        }
        break;
      case GatePosition.CENTER:
        if(percentSweep < .55) {
          percentElevated = 0;
        }
        else if (percentSweep > .85) {
          percentElevated = 1;
        }
        else {
          percentElevated = (percentSweep - 0.55) / 0.3;
        }
        break;
    }

    return height + elevationRise * percentElevated;
  }

  getRotFromGridPos(i:number, j: number): vec3 {
    return vec3.fromValues(0,this.city.sweep * j / this.gridLength, 0);
  }


  /******************************************************************************************************/
  /******************************************WALLS*******************************************************/
  /******************************************************************************************************/

  getTotalWallHeight(): number {
    if(this.levelNum == 0) {
      return this.wallHeight + this.elevationRise;
    }
    return this.elevationRise + this.wallHeight + this.city.levels[this.levelNum - 1].elevationRise;
  }

  getWallBase(): number {
    let wallBase = this.getLevelHeight();
    if(this.levelNum > 0) {
      wallBase -= this.city.levels[this.levelNum - 1].elevationRise;
    }
    return wallBase;
  }

  setWallHeight(height: number) {
    this.wallHeight = height;
    //initialize shapes for all levels here and above
    for(let i = this.levelNum; i < this.city.levels.length; i++) {
      this.city.levels[i].rescaleLevel();
    }
  }


  setWallWidth(width: number) {
    this.wallWidth = width;
    //initialize shapes for all levels here and below
    for(let i = this.levelNum; i >= 0; i--) {
      this.city.levels[i].rescaleLevel();
    }
  }

  getWallTopElevation() {
    return this.getWallBase() + this.getTotalWallHeight();
  }


  initWall() {
    //initialize the wall

    let levelRadius = this.getOuterRadius() - this.wallWidth/2;
    let numSegments = this.getNumWallSegments();

    this.wall = new Wall({
      pos: vec3.fromValues(this.city.pos[0], this.getWallBase(), this.city.pos[2]),
      footprint: vec3.fromValues(levelRadius, this.getTotalWallHeight(), this.wallWidth),
      rotation: vec3.fromValues(0, 0,0),
      sweep: Math.PI,
      numSegments: numSegments
    });
  }


  /**
   * Get the number of wall segments for each wall
   */
  getNumWallSegments(): number {
    let levelRadius = this.getLevelRadius();
    return Math.max(10, Math.floor(levelRadius / 2))
  }

  /**
   * get the index of the wall segment that should be a gate
   */
  getGateWallBlockIndex() {
    let numWallSegments = this.getNumWallSegments();
    if(this.entranceGate == GatePosition.CENTER) {
      return Math.floor(numWallSegments / 2);
    }
    else if(this.entranceGate == GatePosition.RIGHT) {
      return Math.floor(numWallSegments * 0.9);
    }
    else if(this.entranceGate == GatePosition.LEFT) {
      return Math.floor(numWallSegments * 0.1);
    }
  }

  /**
   * Initialize the gates based upon the level number
   * @param levelNum
   */
  initGates(levelNum: number) {
    //set the positions of the gates for each level
    if(levelNum == 0) {
      this.entranceGate = GatePosition.CENTER;
      this.exitGate = GatePosition.RIGHT;
    }
    else if(levelNum == 5) {
      this.entranceGate = GatePosition.RIGHT;
      this.exitGate = GatePosition.CENTER;
    }
    else if(levelNum == 6) {
      this.entranceGate = GatePosition.CENTER;
      this.exitGate = GatePosition.CENTER;
    }
    else if(levelNum % 2 == 1) {
      this.entranceGate = GatePosition.RIGHT;
      this.exitGate = GatePosition.LEFT;
    }
    else {
      this.entranceGate = GatePosition.LEFT;
      this.exitGate = GatePosition.RIGHT;
    }
  }

  getSpurBlocks() {
    let blocks: Block[] = [];
    if(this.levelNum == 6) {
      let posX = this.city.pos[0] + 1.5 + this.getOuterRadius() / 2.0;
      let posX2 = this.city.pos[0] - 1.5 - this.getOuterRadius() / 2.0;
      let posY = this.getWallTopElevation() + 1;
      let posZ = this.city.pos[2] - 5.0 + this.city.levels[1].getOuterRadius() / 2.0;
      let rot = Math.atan((this.getOuterRadius()) / this.city.levels[1].getOuterRadius());
      let length = Math.sqrt(this.getOuterRadius() * this.getOuterRadius() + this.city.levels[1].getOuterRadius()*this.city.levels[1].getOuterRadius())
      length = length -5.0;

      let battlement1 = new Battlement({
        pos: vec3.fromValues(posX, posY, posZ),
        footprint: vec3.fromValues(3, 2, length),
        rotation: vec3.fromValues(0, rot,0)
      });
      let battlement2 = new Battlement({
        pos: vec3.fromValues(posX2, posY, posZ),
        footprint: vec3.fromValues(3, 2, length),
        rotation: vec3.fromValues(0, Math.PI * 2 -rot,0)
      });
      blocks = battlement1.getBlocks();
      blocks = blocks.concat(battlement2.getBlocks());

    }
    return blocks;
  }

  getWallBlocks() {
    let blocks = [];
    let wallBlocks = this.wall.getBlocks();
    let gateIndex = this.getGateWallBlockIndex();
    for(let i = 0; i < wallBlocks.length; i++) {
      if(i !== gateIndex) {
        blocks.push(wallBlocks[i]);
      }
    }
    blocks = blocks.concat(this.getSpurBlocks());
    return blocks;
  }


  /******************************************************************************************************/
  /******************************************ROADS*******************************************************/
  /******************************************************************************************************/

  /**
   * Initialize all of the roads
   */
  initRoads() {
    this.initBoulevard();
    this.initGateEntranceRoads();
    this.initGateExitRoads();
    this.initTunnelRoads();
    this.initSpokeRoads();

    let roadBase = this.getLevelHeight();
    if(this.levelNum > 0) {
      roadBase -= this.city.levels[this.levelNum - 1].elevationRise;
    }
    let roadRadius = (this.getOuterRadius() + this.getInnerRadius()) / 2.01;
    let numSegments = this.getNumWallSegments();

    this.road = new Road({
      pos: vec3.fromValues(this.city.pos[0], roadBase, this.city.pos[2]),
      footprint: vec3.fromValues(roadRadius, 0.1, this.levelWidth + this.wallWidth ),
      rotation: vec3.fromValues(0, 0,0),
      sweep: Math.PI,
      numSegments: numSegments,
      cityLevel: this
    });

  }

  /**
   * Get the width of the Boulevard down each level
   */
  getBoulevardWidth() {
    return Math.ceil(this.gridWidth / 6);
  }

  //get the start index of the boulevard
  getBoulevardStartIndex() {
    let roadWidth = this.getBoulevardWidth();
    if(this.levelNum > 2) return this.gridWidth - roadWidth;
    return Math.floor((this.gridWidth  - roadWidth/2) / 2);
  }

  /**
   * Initialize the central boulevard
   */
  initBoulevard() {
    //add a central boulevard down the middle of the level
    this.boulevardWidth = this.getBoulevardWidth();
    this.boulevardStartIndex = this.getBoulevardStartIndex();
    for(let i = this.boulevardStartIndex; i < this.boulevardStartIndex + this.boulevardWidth; i++) {
      for(let j = 0; j < this.gridLength; j++) {
        this.gridInfo[i][j].gridType = GridType.ROAD;
      }
    }
  }

  /**
   * Set the GridInfo type to road for grid sections in front of level entrance gates
   */
  initGateEntranceRoads() {
    let gateSegmentIndex = this.getGateWallBlockIndex();
    let entranceAngleWidth = this.city.sweep * 0.9 / (this.getNumWallSegments());
    let entranceAngle = this.city.sweep * (gateSegmentIndex) /this.getNumWallSegments();

    //adjust
    entranceAngle += entranceAngleWidth * (1 + gateSegmentIndex) / this.getNumWallSegments();
    for(let i = this.getBoulevardStartIndex() + this.getBoulevardWidth(); i < this.gridWidth; i++) {
      for(let j = 0; j <  this.gridLength; j++)  {
        if(Math.abs(this.gridInfo[i][j].rotation[1] - entranceAngle) < entranceAngleWidth) {
          this.gridInfo[i][j].gridType = GridType.ROAD;
        }
      }
    }
  }

  /**
   * Set the GridInfo to road for grid sections in front of exit gates
   */
  initGateExitRoads() {
    //no exit road
    if(this.levelNum == this.city.levels.length - 1) return;

    let nextLevel =  this.city.levels[this.levelNum + 1];
    let gateSegmentIndex = nextLevel.getGateWallBlockIndex();
    let entranceAngleWidth = this.city.sweep * 0.9 / (nextLevel.getNumWallSegments());
    let entranceAngle = this.city.sweep * (gateSegmentIndex) /nextLevel.getNumWallSegments();

    //adjust
    entranceAngle += entranceAngleWidth * (1 + gateSegmentIndex) / nextLevel.getNumWallSegments();
    for(let i = 0; i < this.getBoulevardStartIndex(); i++) {
      for(let j = 0; j <  this.gridLength; j++)  {
        if(Math.abs(this.gridInfo[i][j].rotation[1] - entranceAngle) < entranceAngleWidth) {
          this.gridInfo[i][j].gridType = GridType.ROAD;
        }
      }
    }
  }

  gridPosUnderSpur(i: number, j: number) : boolean {
    let pos: vec3 = this.getPosFromGridPos(i, j);
    //use z = mx + b formula
    let b = this.city.levels[1].getOuterRadius();
    let m = b / this.city.levels[6].getOuterRadius();
    let z = pos[2] - this.city.pos[2];
    let x = -Math.abs(pos[0] - this.city.pos[0])*0.95;
    return z < m * x + b;
  }

  initTunnelRoads() {
    for(let i = 0; i < this.getBoulevardStartIndex(); i++) {
      for(let j = 0; j <  this.gridLength; j++)  {
        if(this.gridPosUnderSpur(i, j)) {
          this.gridInfo[i][j].gridType = GridType.ROAD;
        }
      }
    }

  }

  /**
   * initialize all the spoke roads
   */
  initSpokeRoads() {
    let spokeProbability = Math.max(0.1, 0.25 / (this.levelNum + 1));
    this.outSpokes = [-1];
    for(let j = 0; j < this.gridLength; j ++) {
      let rand = Random.random2to1(vec2.fromValues(j, 2.2), this.seed);
      if (rand < spokeProbability) {
        for (let i = this.boulevardStartIndex + this.boulevardWidth; i < this.gridWidth; i++) {
          this.gridInfo[i][j].gridType = GridType.ROAD;
        }
        this.outSpokes.push(j);
        j += 2;
      }
    }

    this.inSpokes = [-1];
    for(let j = 0; j < this.gridLength; j ++) {
      let rand = Random.random2to1(vec2.fromValues(j, 34.343), this.seed);
      if(rand < spokeProbability) {
        for(let i = 0; i < this.boulevardStartIndex; i++) {
          this.gridInfo[i][j].gridType = GridType.ROAD;
        }
        this.inSpokes.push(j);
        j += 2;
      }
    }
  }



  getStreetBlocks(): Block[] {
    let blocks: Block[] = [];
    let gridSize = this.levelWidth / this.gridWidth;
    let footprint: vec3 = vec3.fromValues(gridSize, 1, gridSize);
    for(let i = 0; i < this.gridWidth; i++) {
      for(let j = 0; j < this.gridLength; j++) {
        if(this.gridInfo[i][j].gridType == GridType.ROAD) {
          let pos = this.gridInfo[i][j].pos;
          blocks.push({
            blockType: BlockType.CUBE,
            pos: vec3.fromValues(pos[0], pos[1] + 0.35, pos[2]),
            footprint: footprint,
            adjustScale1: 1,
            adjustScale2: 1,
            rotation: this.gridInfo[i][j].rotation,
            scaleFromCenter: true,
            textureType: TextureType.ROAD
          })
        }
      }
    }
    return blocks;
  }

  /******************************************************************************************************/
  /******************************************BUILDINGS***************************************************/
  /******************************************************************************************************/

  initBuildings() {
    this.buildings = [];
    if(this.levelNum == 6) {
      this.initPalace();
    }
    else {
      for(let k = 0; k < this.outSpokes.length; k++) {
        let startI = this.boulevardStartIndex + this.boulevardWidth;
        let startJ = this.outSpokes[k] + 1;
        let endI = this.gridWidth - 1;
        let endJ = this.gridLength - 1;
        if(k < this.outSpokes.length -1) {
          endJ = this.outSpokes[k+1] - 1;
        }

        this.initBlockBuildings(startI, startJ, endI, endJ);
      }

      for(let k = 0; k < this.inSpokes.length; k++) {
        let startI = 0;
        let startJ = this.inSpokes[k] + 1;
        let endI = this.boulevardStartIndex - 1;
        let endJ = this.gridLength - 1;
        if(k < this.inSpokes.length -1) {
          endJ = this.inSpokes[k+1] - 1;
        }

        this.initBlockBuildings(startI, startJ, endI, endJ);
      }

    }
  }

  initPalace() {
    this.buildings = [];
    console.log('palace');

    let size = this.getOuterRadius() * 1.4;
    let palace = new Building({
      pos: vec3.fromValues(this.city.pos[0], this.getWallTopElevation() + size /4, this.city.pos[2] + size /6.2),
      rotation: vec3.fromValues(0,0,0),
      seed:  Math.pow(this.seed[1], this.city.palaceSeed),
      footprint: vec3.fromValues(size,size/2, size/3.1)
    });
    palace.runReplacements();
    this.buildings.push(palace);

    let tower = new Building({
      pos: vec3.fromValues(this.city.pos[0] - size/2 - 1.1, this.getWallTopElevation() + size*1.2/2, this.city.pos[2] + 0.5 ),
      rotation: vec3.fromValues(0,0,0),
      seed:  Math.pow(this.seed[1], this.city.towerSeed),
      footprint: vec3.fromValues(2,size * 1.2, 2)
    });
    tower.runReplacements();
    this.buildings.push(tower);

    //add a wall at the top of the spur


  }

  initBlockBuildings(startI: number, startJ: number, endI: number, endJ: number) {
    //create a set of possible locations
    let blockArea = (endI - startI + 1) * (endJ - startJ + 1);
    let numBuildings = Math.max(1, Math.floor(blockArea / this.buildingFootprintTarget) - 1);



    //get the possible building locations
    let possibleSet = new Set<string>();
    for(let i = startI; i <= endI; i++) {
      for(let j = startJ; j <= endJ; j++) {
        possibleSet.add(i.toString() + '-' + j.toString());
      }
    }

    //sample random points in our block and add buildings
    let locations: vec2[] = [];
    for(let x = 0; x < numBuildings; x++) {
      if(possibleSet.size == 0) break;
      let location: string = Random.getRandomSetValue(2.2 + x, possibleSet);
      possibleSet.delete(location);
      let coords = location.split('-');
      let i = parseInt(coords[0]);
      let j = parseInt(coords[1]);
      if(this.gridInfo[i][j].gridType == GridType.OPEN) {
        locations.push(vec2.fromValues(i, j));
        this.gridInfo[i][j].gridType = GridType.BUILDING;
      }
    }

    //get the footprints
    let footprints: vec2[] = this.getBuildingFootprints(locations, possibleSet);
    for(let k = 0; k < locations.length; k++) {
      this.initBuilding(locations[k], footprints[k]);
    }
  }

  getBuildingFootprints(locations: vec2[], possibleSet: Set<string>): vec2[] {
    //loop through locations to get the footprint
    let footprints: vec2[] = [];
    for(let i=0; i < locations.length; i++) {
      footprints.push(vec2.fromValues(1,1));
    }
    let expanded: boolean = true;
    while(expanded) {
      expanded  = false;
      for(let i = 0; i < locations.length; i++) {
        if(
          false
          || this.expandIn(locations[i],footprints[i],possibleSet)
          || this.expandOut(locations[i],footprints[i],possibleSet)
          || this.expandRight(locations[i],footprints[i],possibleSet)
          || this.expandLeft(locations[i],footprints[i],possibleSet)
        ) {
          expanded = true;
        }
      }
    }

    return footprints;
  }

  expandRight(location: vec2, footprint: vec2, possibleSet: Set<string>): boolean {
    for(let i = location[0]; i < location[0] + footprint[0]; i++) {
      let j = location[1] + footprint[1];
      let hash = i.toString() + '-' + j.toString();
      if(!possibleSet.has(hash)) return false;
    }

    //adjust footprint and set grid and possibleset for new row
    for(let i = location[0]; i < location[0] + footprint[0]; i++) {
      let j = location[1] + footprint[1];
      let hash = i.toString() + '-' + j.toString();
      possibleSet.delete(hash);
      this.gridInfo[i][j].gridType = GridType.BUILDING;
    }
    footprint[1]++;

    return true;

  }


  expandLeft(location: vec2, footprint: vec2, possibleSet: Set<string>): boolean {
    for(let i = location[0]; i < location[0] + footprint[0]; i++) {
      let j = location[1] -1;
      let hash = i.toString() + '-' + j.toString();
      if(!possibleSet.has(hash)) return false;
    }

    //adjust footprint and set grid and possibleset for new row
    for(let i = location[0]; i < location[0] + footprint[0]; i++) {
      let j = location[1] - 1;
      let hash = i.toString() + '-' + j.toString();
      possibleSet.delete(hash);
      this.gridInfo[i][j].gridType = GridType.BUILDING;
    }
    location[1]--;
    footprint[1]++;

    return true;

  }


  expandOut(location: vec2, footprint: vec2, possibleSet: Set<string>): boolean {
    for(let j = location[1]; j < location[1] + footprint[1]; j++) {
      let i = location[0] + footprint[0];
      let hash = i.toString() + '-' + j.toString();
      if(!possibleSet.has(hash)) return false;
    }

    //adjust footprint and set grid and possibleset for new row
    for(let j = location[1]; j < location[1] + footprint[1]; j++) {
      let i = location[0] + footprint[0];
      let hash = i.toString() + '-' + j.toString();
      possibleSet.delete(hash);
      this.gridInfo[i][j].gridType = GridType.BUILDING;
    }
    footprint[0]++;

    return true;
  }

  expandIn(location: vec2, footprint: vec2, possibleSet: Set<string>): boolean {
    for(let j = location[1]; j < location[1] + footprint[1]; j++) {
      let i = location[0] - 1;
      let hash = i.toString() + '-' + j.toString();
      if(!possibleSet.has(hash)) return false;
    }

    //adjust footprint and set grid and possibleset for new row
    for(let j = location[1]; j < location[1] + footprint[1]; j++) {
      let i = location[0] - 1;
      let hash = i.toString() + '-' + j.toString();
      possibleSet.delete(hash);
      this.gridInfo[i][j].gridType = GridType.BUILDING;
    }
    location[0]--;
    footprint[0]++;

    return true;
  }


  initBuilding(location:vec2, footprint:vec2) {
    let centerGridPosI = location[0] + footprint[0]/2;
    let centerGridPosJ = location[1] + footprint[1]/2;
    let scale = this.levelWidth / this.gridWidth;
    let height = Math.min(footprint[0], footprint[1]) * scale;
    let foot: vec3 = vec3.fromValues(footprint[0] * scale * 0.75, height, footprint[1] * scale *  0.75);
    this.buildings.push(new Building({
      pos: this.getBuildingPosition(centerGridPosI,centerGridPosJ, foot[1]),
      rotation: this.getRotFromGridPos(centerGridPosI, centerGridPosJ),
      seed:  Math.pow(this.seed[1],this.buildings.length + 1),
      footprint: foot
    }));
    this.buildings[this.buildings.length - 1].runReplacements();
  }

  getBuildingPosition(gridI: number, gridJ: number, buildingHeight: number): vec3 {
    let pos: vec3 = this.getPosFromGridPos(gridI-0.5, gridJ-0.5);
    pos[1] = pos[1] + buildingHeight / 2;
    return pos;
  }




  getBuildingBlocks(): Block[] {

    let blocks: Block[] = [];

    for(let i =0; i < this.buildings.length; i++) {
      blocks = blocks.concat(this.buildings[i].getBlocks());
    }
    return blocks;
  }


};