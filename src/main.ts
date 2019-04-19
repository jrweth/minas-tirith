import {vec2, vec3, vec4} from 'gl-matrix';
import * as Stats from 'stats-js';
import * as DAT from 'dat-gui';
import Square from './geometry/Square';
import Cube from './geometry/Cube';
import TerrainPlane from './geometry/TerrainPlane';
import OpenGLRenderer from './rendering/gl/OpenGLRenderer';
import Camera from './Camera';
import {setGL} from './globals';
import ShaderProgram, {Shader} from './rendering/gl/ShaderProgram';
import {Terrain} from "./generated-elements/terrain";
import Roads from "./generated-elements/road/roads";
import RoadSegments from "./geometry/RoadSegments";
import {City} from "./generated-elements/city/city";
import {getDefaultLevelOptions, LevelOptions} from "./generated-elements/city/city-level";

function initLevels(): LevelOptions[] {
  let levels: LevelOptions[] = [];
  for(let i =0; i < 7; i++) {
    levels.push(getDefaultLevelOptions(i));
  }
  return levels;
}

// Define an object with application parameters and button callbacks
// This will be referred to by dat.GUI's functions that add GUI elements.
const controls = {
  'Levels': initLevels(),
  'AllLevels': getDefaultLevelOptions(0),
  'Theme': 2,
  'Show Highways': true,
  'Show Streets' : false,
  'Show Population Density': true,
  'Show Buildings': true,
  'Show Build Sites': false,
  'Show Walls': true,

  'Elevation Seed': 8,
  'Population Seed': 1.234,

  'Road Seed': 5.43,
  'Highway Segment Length': 8,
  'Highway Iterations': 3,
  'Highway Max Turn Angle': Math.PI / 18,
  'Street Segment Length': 12,
  'Street Iterations': 3,

  'Num Buildings': 3000,
  'Load Scene': loadScene, // A function pointer, essentially
};
// Add controls to the gui
const gui = new DAT.GUI();
gui.width = 320;


let terrain: Terrain;
let square: Square;
let cube: Cube;
let plane : TerrainPlane;
let roadSegments: RoadSegments;
let wPressed: boolean;
let aPressed: boolean;
let sPressed: boolean;
let dPressed: boolean;
let planePos: vec2;
let city: City;

function initTerrain() {
  //initialize terrain
  terrain = new Terrain();
  terrain.elevationSeed = vec2.fromValues(2.0, controls["Elevation Seed"]);
  terrain.populationSeed = vec2.fromValues(1.2, controls["Population Seed"]);
  terrain.roadSeed = controls["Road Seed"];
  terrain.highwayIterations = controls["Highway Iterations"];
  terrain.highwayMaxTurnAngle = controls["Highway Max Turn Angle"];
  terrain.highwaySegmentLength = controls["Highway Segment Length"];
  terrain.streetSegmentLength = controls["Street Segment Length"];
  terrain.streetIterations = controls["Street Iterations"];
  terrain.numBuildings = controls["Num Buildings"];
  terrain.init();
}

function loadScene() {


  //create the plane geometry
  plane = new TerrainPlane(terrain);
  plane.create();

  //create the road geometry
  // roadSegments = new RoadSegments({
  //   gridSize: terrain.gridSize,
  //   scale: plane.scale}
  // );
  // roadSegments.create();
  // roadSegments.setInstanceVBOs(terrain.roads.segments, terrain.roads.intersections, {
  //   showHighways: controls["Show Highways"],
  //   showStreets: controls["Show Streets"]
  // });

  //create the building geometry
  cube = new Cube({
    gridSize: terrain.gridSize,
    scale: plane.scale
  });
  cube.create();
  cube.setInstanceVBOs(city);

  square = new Square(vec3.fromValues(0, 0, 0));
  square.create();

  wPressed = false;
  aPressed = false;
  sPressed = false;
  dPressed = false;
  planePos = vec2.fromValues(0,0);
}

/**
 * Initialize the Seed Controls
 */
function addTerrainControls() {
  let terrainFolder = gui.addFolder('terrain');
  let eSeed = terrainFolder.add(controls, 'Elevation Seed', {'seed 1': 8, 'seed 2': 5.43, 'seed 3': 8.987, 'seed 4': 1.234}).listen();
  eSeed.onChange(() => {initTerrain(); loadScene()});
  // let pSeed = terrainFolder.add(controls, 'Population Seed', {'seed 1': 1.234, 'seed 2': 5.43, 'seed 3': 8.987, 'seed 4': 43.343}).listen();
  // pSeed.onChange(loadScene);

  // mapType.onChange();
}

function getDisplayOptions(): vec4 {
  return vec4.fromValues(
    controls["Show Population Density"] ? 1 : 0,
    controls["Show Build Sites"] ? 1 : 0,
    controls["Theme"],
    0
  );
}

function redoRoads() {
  roadSegments.setInstanceVBOs(terrain.roads.segments, terrain.roads.intersections, {
    showHighways: controls["Show Highways"],
    showStreets: controls["Show Streets"]
  });
}

function getBackgroundColor(): vec3 {
  if(controls.Theme == 1) {
    return vec3.fromValues(164.0 / 255.0, 233.0 / 255.0, 1.0);
  }
  else if(controls.Theme == 2) {
    return vec3.fromValues(0,0,0);
  }
}

/**
 * Initialize the display controls
 * @param options
 */
function addDisplayControls(options: {
  terrainShader: ShaderProgram,
  buildingShader: ShaderProgram,
  roadShader: ShaderProgram,
  renderer: OpenGLRenderer
}) {
  let displayFolder = gui.addFolder('display');
  let theme = displayFolder.add(controls, 'Theme', {'Map': 1, 'White City': 2}).listen();
  //let showHighways = displayFolder.add(controls, 'Show Highways').listen();
  let showStreets = displayFolder.add(controls, 'Show Streets').listen();
  //let showPop = displayFolder.add(controls, 'Show Population Density').listen();
  let showBuildings = displayFolder.add(controls, 'Show Buildings').listen();
  //let showBuildSites = displayFolder.add(controls, 'Show Build Sites').listen();
  let showWalls = displayFolder.add(controls, 'Show Walls');

  showBuildings.onChange(() => {city.showBuildings = controls["Show Buildings"]; loadScene()});
  showStreets.onChange(() => {city.showRoads = controls["Show Streets"]; loadScene()});
  showWalls.onChange(() => {city.showWalls = controls["Show Walls"]; loadScene()});
  theme.onChange(() => {
    options.terrainShader.setDisplayOptions(getDisplayOptions());
    options.roadShader.setDisplayOptions(getDisplayOptions());
    options.buildingShader.setDisplayOptions(getDisplayOptions());
    options.renderer.setClearColor3(getBackgroundColor());
  })
  //showHighways.onChange(redoRoads);
  //showStreets.onChange(redoRoads);
  //showPop.onChange(() => {
  //  options.terrainShader.setDisplayOptions(getDisplayOptions());
  //});
  // showBuildSites.onChange(() => {
  //   options.terrainShader.setDisplayOptions(getDisplayOptions());
  // })
}

function addRoadControls() {
  let roadFolder = gui.addFolder('roads');
  let rSeed = roadFolder.add(controls, 'Road Seed', {'seed 1': 8.987, 'seed 2': 5.43, 'seed 3': 1.234, 'seed 4': 43.343}).listen();
  let rLength = roadFolder.add(controls, 'Highway Segment Length', [1,2,4, 8, 12, 16, 32]).listen();
  let rIter = roadFolder.add(controls, 'Highway Iterations', [3,4,5]).listen();
  let rAngle = roadFolder.add(controls, 'Highway Max Turn Angle', {
    '2 deg': Math.PI / 90,
    '5 deg': Math.PI / 36,
    '10 deg': Math.PI / 18,
    '15 deg': Math.PI / 12,
    '20 deg': Math.PI / 9,
    '30 deg': Math.PI / 6,
    '45 deg': Math.PI / 4
  }).listen();

  let sIter = roadFolder.add(controls, 'Street Iterations', [3,4,5,6,7]).listen();
  let sLength = roadFolder.add(controls, 'Street Segment Length', [2 ,4, 8, 12, 16]).listen();

  rSeed.onChange(loadScene);
  rLength.onChange(loadScene);
  rIter.onChange(loadScene);
  rAngle.onChange(loadScene);
  sIter.onChange(loadScene);
  sLength.onChange(loadScene);
}



function addBuildingControls() {
  let buildingFolder = gui.addFolder('building');
  let eSeed = buildingFolder.add(controls, 'Num Buildings', [10,100,1000, 2000, 3000, 4000, 8000]).listen();
  eSeed.onChange(loadScene);

  // mapType.onChange();
}

function adjustLevel(i: number, property: string) {
  switch(property) {
    case 'levelWidth': city.adjustLevel(i, property, controls.Levels[i].levelWidth); break;
    case 'wallWidth': city.adjustLevel(i, property, controls.Levels[i].wallWidth); break;
    case 'wallHeight': city.adjustLevel(i, property, controls.Levels[i].wallHeight); break;
    case 'gridWidth': city.adjustLevel(i, property, controls.Levels[i].gridWidth); break;
    case 'elevationRise': city.adjustLevel(i, property, controls.Levels[i].elevationRise); break;
    case 'buildingFootprintTarget': city.adjustLevel(i, property, controls.Levels[i].buildingFootprintTarget); break;
  }
  loadScene();
}

function adjustAllLevels(property: string) {
  for(let i = 0; i < city.levels.length; i++) {
    switch(property) {
      case 'levelWidth':
        controls.Levels[i].levelWidth = controls.AllLevels.levelWidth;
        city.adjustLevel(i, property, controls.Levels[i].levelWidth);
        break;
      case 'wallWidth':
        controls.Levels[i].wallWidth = controls.AllLevels.wallWidth;
        city.adjustLevel(i, property, controls.Levels[i].wallWidth);
        break;
      case 'wallHeight':
        controls.Levels[i].wallHeight = controls.AllLevels.wallHeight;
        city.adjustLevel(i, property, controls.Levels[i].wallHeight);
        break;
      case 'gridWidth':
        controls.Levels[i].gridWidth = controls.AllLevels.gridWidth;
        city.adjustLevel(i, property, controls.Levels[i].gridWidth);
        break;
      case 'elevationRise':
        controls.Levels[i].elevationRise = controls.AllLevels.elevationRise;
        city.adjustLevel(i, property, controls.Levels[i].elevationRise);
        break;
    }
  }
  loadScene();
}

function addLevelControls() {
  let levels = gui.addFolder('city levels');
  let properties: string[] = ['wallWidth', 'wallHeight', 'levelWidth', 'elevationRise'];
  for(let i = 0; i < 7; i++) {
    let level = levels.addFolder('level ' + (i+1).toString());
    for(let property of properties) {
      let control = level.add(controls.Levels[i],property).min(1).max(30).step(1).listen();
      control.onChange(()=>{adjustLevel(i,property)});
    }
    let gridWidthControl = level.add(controls.Levels[i], 'gridWidth').min(4).max(10).step(1).listen();
    let buildingSizeControl = level.add(controls.Levels[i], 'buildingFootprintTarget').min(1).max(40).listen();
    gridWidthControl.onChange(()=>adjustLevel(i,'gridWidth'));
    buildingSizeControl.onChange(()=>adjustLevel(i,'buildingFootprintTarget'));
  }
  let level = levels.addFolder('all levels');
  for(let property of properties) {
    let control = level.add(controls.AllLevels, property).min(1).max(30).step(1).listen();
    control.onChange(()=>adjustAllLevels(property));
  }
  let gridWidthControl = level.add(controls.AllLevels, 'gridWidth').min(1).max(10).step(1).listen();
  gridWidthControl.onChange(()=>adjustAllLevels('gridWidth'));
}


function main() {
  initTerrain();
  city = new City({
    pos: vec3.fromValues(250, 0, 200),
    seed: 12345,
  });
  city.initBuildings();

  window.addEventListener('keypress', function (e) {
    // console.log(e.key);
    switch(e.key) {
      case 'w':
      wPressed = true;
      break;
      case 'a':
      aPressed = true;
      break;
      case 's':
      sPressed = true;
      break;
      case 'd':
      dPressed = true;
      break;
    }
  }, false);

  window.addEventListener('keyup', function (e) {
    switch(e.key) {
      case 'w':
      wPressed = false;
      break;
      case 'a':
      aPressed = false;
      break;
      case 's':
      sPressed = false;
      break;
      case 'd':
      dPressed = false;
      break;
    }
  }, false);

  // Initial display for framerate
  const stats = Stats();
  stats.setMode(0);
  stats.domElement.style.position = 'absolute';
  stats.domElement.style.left = '0px';
  stats.domElement.style.top = '0px';
  document.body.appendChild(stats.domElement);



  // get canvas and webgl context
  const canvas = <HTMLCanvasElement> document.getElementById('canvas');
  const gl = <WebGL2RenderingContext> canvas.getContext('webgl2');
  if (!gl) {
    alert('WebGL 2 not supported!');
  }
  // `setGL` is a function imported above which sets the value of `gl` in the `globals.ts` module.
  // Later, we can import `gl` from `globals.ts` to access it
  setGL(gl);

  // Initial call to load scene
  loadScene();

  const camera = new Camera(vec3.fromValues(-50, 40, 30), vec3.fromValues(0, 5, -3));

  const renderer = new OpenGLRenderer(canvas);
  renderer.setClearColor3(getBackgroundColor());
  gl.enable(gl.DEPTH_TEST);

  const terrainShader = new ShaderProgram([
    new Shader(gl.VERTEX_SHADER, require('./shaders/terrain-vert.glsl')),
    new Shader(gl.FRAGMENT_SHADER, require('./shaders/terrain-frag.glsl')),
  ]);

  const roadShader = new ShaderProgram([
    new Shader(gl.VERTEX_SHADER, require('./shaders/roads-vert.glsl')),
    new Shader(gl.FRAGMENT_SHADER, require('./shaders/roads-frag.glsl')),
  ]);

  const buildingShader = new ShaderProgram([
    new Shader(gl.VERTEX_SHADER, require('./shaders/buildings-vert.glsl')),
    new Shader(gl.FRAGMENT_SHADER, require('./shaders/buildings-frag.glsl')),
  ]);

  terrainShader.setDisplayOptions(getDisplayOptions());
  roadShader.setDisplayOptions(getDisplayOptions());
  buildingShader.setDisplayOptions(getDisplayOptions());

  //add all the controls
  addDisplayControls({
    terrainShader: terrainShader,
    buildingShader: buildingShader,
    roadShader: roadShader,
    renderer: renderer
  });
  addTerrainControls();
  //addRoadControls();
  //addBuildingControls();
  addLevelControls();


  /**
   * more control stuff
   */


  function processKeyPresses() {
    let velocity: vec3 = vec3.fromValues(0,0, 0);
    if(wPressed) {
      velocity[2] += 1.0;
    }
    if(aPressed) {
      velocity[0] += 1.0;
    }
    if(sPressed) {
      velocity[2] -= 1.0;
    }
    if(dPressed) {
      velocity[0] -= 1.0;
    }
    camera.pan(velocity);

  }

  // This function will be called every frame
  function tick() {
    camera.update();
    stats.begin();
    gl.viewport(0, 0, window.innerWidth, window.innerHeight);
    renderer.clear();
    processKeyPresses();
    //figure out the ratio
    terrainShader.setCityInfo({cityHeight: city.getHeight()/3.3, cityRadius: city.getRadius()*1.5});
    renderer.render(camera, terrainShader, [
      plane
    ]);
    if(controls["Show Highways"] || controls["Show Streets"]) {
    //  renderer.render(camera, roadShader, [roadSegments]);
    }
    renderer.render(camera, buildingShader, [cube]);
    stats.end();

    // Tell the browser to call `tick` again whenever it renders a new frame
    requestAnimationFrame(tick);
  }

  window.addEventListener('resize', function() {
    renderer.setSize(window.innerWidth, window.innerHeight);
    camera.setAspectRatio(window.innerWidth / window.innerHeight);
    camera.updateProjectionMatrix();
  }, false);

  renderer.setSize(window.innerWidth, window.innerHeight);
  camera.setAspectRatio(window.innerWidth / window.innerHeight);
  camera.updateProjectionMatrix();

  // Start the render loop
  tick();
}

main();
