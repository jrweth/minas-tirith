import {vec2, vec3} from 'gl-matrix';
import * as Stats from 'stats-js';
import * as DAT from 'dat-gui';
import Square from './geometry/Square';
import TerrainPlane from './geometry/TerrainPlane';
import OpenGLRenderer from './rendering/gl/OpenGLRenderer';
import Camera from './Camera';
import {setGL} from './globals';
import ShaderProgram, {Shader} from './rendering/gl/ShaderProgram';
import {Terrain} from "./generated-elements/terrain";
import Roads from "./generated-elements/road/roads";
import RoadSegments from "./geometry/RoadSegments";

// Define an object with application parameters and button callbacks
// This will be referred to by dat.GUI's functions that add GUI elements.
const controls = {
  'Elevation Seed': 1.234,
  'Population Seed': 1.234,
  'Road Seed': 1.234,
  'Show Roads': true,
  'Load Scene': loadScene, // A function pointer, essentially
};
// Add controls to the gui
const gui = new DAT.GUI();


let terrain: Terrain;
let roads: Roads;
let square: Square;
let plane : TerrainPlane;
let roadSegments: RoadSegments;
let wPressed: boolean;
let aPressed: boolean;
let sPressed: boolean;
let dPressed: boolean;
let planePos: vec2;

function loadScene() {

  //initialize terrain
  terrain = new Terrain();
  terrain.elevationSeed = vec2.fromValues(2.0, controls["Elevation Seed"]);
  terrain.populationSeed = vec2.fromValues(1.2, controls["Population Seed"]);
  terrain.init();
  plane = new TerrainPlane(terrain);
  plane.create();

  //initialize roads
  roads = new Roads(1, {seed: 1.234, terrain: terrain});
  roads.runExpansionIterations(3);
  roads.runDrawRules();
  roadSegments = new RoadSegments({
    gridSize: terrain.gridSize,
    scale: plane.scale}
  );
  roadSegments.create();
  roadSegments.setInstanceVBOs(roads.segments, roads.intersections);

  square = new Square(vec3.fromValues(0, 0, 0));
  square.create();

  wPressed = false;
  aPressed = false;
  sPressed = false;
  dPressed = false;
  planePos = vec2.fromValues(0,0);
}

function setControls() {
  let eSeed = gui.add(controls, 'Elevation Seed', {'seed 1': 1.234, 'seed 2': 5.43, 'seed 3': 8.987, 'seed 4': 89.3943}).listen();
  eSeed.onChange(loadScene);
  let pSeed = gui.add(controls, 'Population Seed', {'seed 1': 1.234, 'seed 2': 5.43, 'seed 3': 8.987, 'seed 4': 43.343}).listen();
  pSeed.onChange(loadScene);
  let rSeed = gui.add(controls, 'Road Seed', {'seed 1': 1.234, 'seed 2': 5.43, 'seed 3': 8.987, 'seed 4': 43.343}).listen();
  rSeed.onChange(loadScene);
  let showRoads = gui.add(controls, 'Show Roads');
  // mapType.onChange();
}


function main() {
  setControls();
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

  const camera = new Camera(vec3.fromValues(0, 10, -20), vec3.fromValues(0, 0, 0));

  const renderer = new OpenGLRenderer(canvas);
  renderer.setClearColor(164.0 / 255.0, 233.0 / 255.0, 1.0, 1);
  gl.enable(gl.DEPTH_TEST);

  const terrainShader = new ShaderProgram([
    new Shader(gl.VERTEX_SHADER, require('./shaders/terrain-vert.glsl')),
    new Shader(gl.FRAGMENT_SHADER, require('./shaders/terrain-frag.glsl')),
  ]);

  const roadShader = new ShaderProgram([
    new Shader(gl.VERTEX_SHADER, require('./shaders/roads-vert.glsl')),
    new Shader(gl.FRAGMENT_SHADER, require('./shaders/roads-frag.glsl')),
  ]);

  const flat = new ShaderProgram([
    new Shader(gl.VERTEX_SHADER, require('./shaders/flat-vert.glsl')),
    new Shader(gl.FRAGMENT_SHADER, require('./shaders/flat-frag.glsl')),
  ]);

  function processKeyPresses() {
    let velocity: vec2 = vec2.fromValues(0,0);
    if(wPressed) {
      velocity[1] += 1.0;
    }
    if(aPressed) {
      velocity[0] += 1.0;
    }
    if(sPressed) {
      velocity[1] -= 1.0;
    }
    if(dPressed) {
      velocity[0] -= 1.0;
    }
    let newPos: vec2 = vec2.fromValues(0,0);
    vec2.add(newPos, velocity, planePos);
    terrainShader.setPlanePos(newPos);
    roadShader.setPlanePos(newPos);
    planePos = newPos;
  }

  // This function will be called every frame
  function tick() {
    camera.update();
    stats.begin();
    gl.viewport(0, 0, window.innerWidth, window.innerHeight);
    renderer.clear();
    processKeyPresses();
    renderer.render(camera, terrainShader, [
      plane
    ]);
    if(controls["Show Roads"]) {
      renderer.render(camera, roadShader,
        [roadSegments]
      );
    }
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
  console.log(roadSegments);
  tick();
}

main();
