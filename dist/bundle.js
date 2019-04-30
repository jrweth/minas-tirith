/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "dist/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 36);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__gl_matrix_common_js__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__gl_matrix_mat2_js__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__gl_matrix_mat2d_js__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__gl_matrix_mat3_js__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__gl_matrix_mat4_js__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__gl_matrix_quat_js__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__gl_matrix_quat2_js__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__gl_matrix_vec2_js__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__gl_matrix_vec3_js__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__gl_matrix_vec4_js__ = __webpack_require__(21);
/* unused harmony reexport glMatrix */
/* unused harmony reexport mat2 */
/* unused harmony reexport mat2d */
/* unused harmony reexport mat3 */
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_4__gl_matrix_mat4_js__; });
/* unused harmony reexport quat */
/* unused harmony reexport quat2 */
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_7__gl_matrix_vec2_js__; });
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_8__gl_matrix_vec3_js__; });
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_9__gl_matrix_vec4_js__; });













/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
class BaseDrawRule {
    constructor(options) {
        this.options = options ? options : {};
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = BaseDrawRule;



/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return EPSILON; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ARRAY_TYPE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return RANDOM; });
/* unused harmony export setMatrixArrayType */
/* unused harmony export toRadian */
/* unused harmony export equals */
/**
 * Common utilities
 * @module glMatrix
 */

// Configuration Constants
var EPSILON = 0.000001;
var ARRAY_TYPE = typeof Float32Array !== 'undefined' ? Float32Array : Array;
var RANDOM = Math.random;

/**
 * Sets the type of array used when creating new vectors and matrices
 *
 * @param {Type} type Array type, such as Float32Array or Array
 */
function setMatrixArrayType(type) {
  ARRAY_TYPE = type;
}

var degree = Math.PI / 180;

/**
 * Convert Degree To Radian
 *
 * @param {Number} a Angle in Degrees
 */
function toRadian(a) {
  return a * degree;
}

/**
 * Tests whether or not the arguments have approximately the same value, within an absolute
 * or relative tolerance of glMatrix.EPSILON (an absolute tolerance is used for values less
 * than or equal to 1.0, and a relative tolerance is used for larger values)
 *
 * @param {Number} a The first number to test.
 * @param {Number} b The second number to test.
 * @returns {Boolean} True if the numbers are approximately equal, false otherwise.
 */
function equals(a, b) {
  return Math.abs(a - b) <= EPSILON * Math.max(1.0, Math.abs(a), Math.abs(b));
}

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TextureType; });
var TextureType;
(function (TextureType) {
    TextureType[TextureType["WALL"] = 0] = "WALL";
    TextureType[TextureType["ROAD"] = 1] = "ROAD";
    TextureType[TextureType["ROOF"] = 2] = "ROOF";
    TextureType[TextureType["BUILDING"] = 3] = "BUILDING";
    TextureType[TextureType["LEVEL_GROUND"] = 4] = "LEVEL_GROUND";
    TextureType[TextureType["TURRET"] = 5] = "TURRET";
    TextureType[TextureType["FOUNDATION"] = 6] = "FOUNDATION";
})(TextureType || (TextureType = {}));


/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return gl; });
/* harmony export (immutable) */ __webpack_exports__["b"] = setGL;
var gl;
function setGL(_gl) {
    gl = _gl;
}


/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_gl_matrix__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils_vec_math__ = __webpack_require__(12);


/**
 * Various random functions to help generate noise
 */
class Random {
    //get a pseudo random number based upon 2 values
    static random2to1(p, seed) {
        return Math.abs((Math.sin(__WEBPACK_IMPORTED_MODULE_0_gl_matrix__["b" /* vec2 */].dot(__WEBPACK_IMPORTED_MODULE_0_gl_matrix__["b" /* vec2 */].add(p, p, seed), __WEBPACK_IMPORTED_MODULE_0_gl_matrix__["b" /* vec2 */].fromValues(127.1, 311.7))) * 43758.5453) % 1);
    }
    //get a pseudo random number based upon 1 value
    static random1to1(p, seed) {
        return Math.abs((Math.sin(__WEBPACK_IMPORTED_MODULE_0_gl_matrix__["b" /* vec2 */].dot(__WEBPACK_IMPORTED_MODULE_0_gl_matrix__["b" /* vec2 */].fromValues(p, 311.2), seed)) * 43758.5453) % 1);
    }
    //mix two number toget
    static mix(a, b, ratio) {
        return a + ((b - a) * (ratio));
    }
    //chose a random int between 0 and the max number
    static randomInt(max, seed) {
        let num = this.random1to1(2.3, __WEBPACK_IMPORTED_MODULE_0_gl_matrix__["b" /* vec2 */].fromValues(seed, 12.65));
        return Math.floor(num * (max + 1));
    }
    static interpNoiseRandom2to1(p, seed) {
        let fractX = p[0] % 1;
        let x1 = Math.floor(p[0]);
        let x2 = x1 + 1.0;
        let fractY = p[1] % 1;
        let y1 = Math.floor(p[1]);
        let y2 = y1 + 1.0;
        let v1 = this.random2to1(__WEBPACK_IMPORTED_MODULE_0_gl_matrix__["b" /* vec2 */].fromValues(x1, y1), seed);
        let v2 = this.random2to1(__WEBPACK_IMPORTED_MODULE_0_gl_matrix__["b" /* vec2 */].fromValues(x2, y1), seed);
        let v3 = this.random2to1(__WEBPACK_IMPORTED_MODULE_0_gl_matrix__["b" /* vec2 */].fromValues(x1, y2), seed);
        let v4 = this.random2to1(__WEBPACK_IMPORTED_MODULE_0_gl_matrix__["b" /* vec2 */].fromValues(x2, y2), seed);
        let i1 = this.mix(v1, v2, fractX);
        let i2 = this.mix(v3, v4, fractX);
        return this.mix(i1, i2, fractY);
    }
    static interp2D(fracX, fracY, x1y1, x2y1, x1y2, x2y2) {
        let i1 = this.mix(x1y1, x2y1, fracX);
        let i2 = this.mix(x1y2, x2y2, fracX);
        return this.mix(i1, i2, fracY);
    }
    static fbm2to1(p, seed, persistence = 0.5, octaves = 8.0) {
        let total = 0.0;
        for (let i = 0.0; i < octaves; i++) {
            let freq = Math.pow(2.0, i);
            let amp = Math.pow(persistence, i + 1.0);
            total = total + this.interpNoiseRandom2to1(__WEBPACK_IMPORTED_MODULE_1__utils_vec_math__["a" /* VecMath */].multiply2(p, freq), seed) * amp;
        }
        return total;
    }
    static getRandomSetValue(seed, set) {
        let index = Random.randomInt(set.size, seed);
        let count = 0;
        let val;
        for (val of set) {
            if (count == index)
                return val;
            count++;
        }
        return val;
    }
}
/* harmony default export */ __webpack_exports__["a"] = (Random);


/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_gl_matrix__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__noise_random__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__geometry_Axis__ = __webpack_require__(13);



class NumOptions {
    static getValue(options, maxValue, minValue) {
        if (options.value)
            return options.value;
        if (options.percentage)
            return maxValue * options.percentage;
        if (!minValue)
            minValue = 0;
        let rand = __WEBPACK_IMPORTED_MODULE_1__noise_random__["a" /* default */].random1to1(1, __WEBPACK_IMPORTED_MODULE_0_gl_matrix__["b" /* vec2 */].fromValues(options.seed, 4.2343));
        return minValue + (maxValue - minValue) * rand;
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = NumOptions;

class Shape {
    constructor(options) {
        this.children = [];
        this.pos = options.pos;
        this.footprint = options.footprint;
        this.rotation = options.rotation;
    }
    getSplitFootprints(options) {
        options.footprint1 = __WEBPACK_IMPORTED_MODULE_0_gl_matrix__["c" /* vec3 */].fromValues(this.footprint[0], this.footprint[1], this.footprint[2]);
        options.footprint2 = __WEBPACK_IMPORTED_MODULE_0_gl_matrix__["c" /* vec3 */].fromValues(this.footprint[0], this.footprint[1], this.footprint[2]);
        options.footprint1[options.axis] = options.offset;
        options.footprint2[options.axis] = this.footprint[options.axis] - options.offset;
    }
    getSplitPositions(params) {
        params.position1 = __WEBPACK_IMPORTED_MODULE_0_gl_matrix__["c" /* vec3 */].fromValues(this.pos[0], this.pos[1], this.pos[2]);
        params.position2 = __WEBPACK_IMPORTED_MODULE_0_gl_matrix__["c" /* vec3 */].fromValues(this.pos[0], this.pos[1], this.pos[2]);
        params.position1[params.axis] = this.pos[params.axis] - this.footprint[params.axis] / 2 + 0.5 * params.offset;
        params.position2[params.axis] = this.pos[params.axis] + 0.5 * params.offset;
    }
    splitShape(numDivisions, axis, position, footprint, rotation) {
        let shapeInfo = [];
        for (let i = 0; i < numDivisions; i++) {
            let pos = __WEBPACK_IMPORTED_MODULE_0_gl_matrix__["c" /* vec3 */].create();
            __WEBPACK_IMPORTED_MODULE_0_gl_matrix__["c" /* vec3 */].copy(pos, position);
            let distance = -footprint[axis] / 2 + (i + 0.5) * (footprint[axis] / numDivisions);
            switch (axis) {
                case __WEBPACK_IMPORTED_MODULE_2__geometry_Axis__["a" /* Axis */].Y:
                    pos[axis] = pos[axis] + distance;
                    break;
                case __WEBPACK_IMPORTED_MODULE_2__geometry_Axis__["a" /* Axis */].X:
                    pos[0] = pos[0] + Math.cos(this.rotation[1]) * distance;
                    pos[2] = pos[2] + Math.sin(this.rotation[1]) * distance;
                    break;
                case __WEBPACK_IMPORTED_MODULE_2__geometry_Axis__["a" /* Axis */].Z:
                    pos[0] = pos[0] + Math.sin(this.rotation[1]) * distance;
                    pos[2] = pos[2] + Math.cos(this.rotation[1]) * distance;
                    break;
            }
            let foot = __WEBPACK_IMPORTED_MODULE_0_gl_matrix__["c" /* vec3 */].create();
            __WEBPACK_IMPORTED_MODULE_0_gl_matrix__["c" /* vec3 */].copy(foot, footprint);
            foot[axis] = footprint[axis] / numDivisions;
            shapeInfo.push({ pos: pos, footprint: foot });
        }
        return shapeInfo;
    }
    /**
     * Shrink shape from the center inward
     * @param axis
     * @param options
     */
    shrink(axis, shrinkBy) {
        let shrinkage = NumOptions.getValue(shrinkBy, this.footprint[axis]);
        this.footprint[axis] -= shrinkage;
    }
    shrinkX(shrinkBy) {
        this.shrink(0, shrinkBy);
    }
    shrinkZ(shrinkBy) {
        this.shrink(2, shrinkBy);
    }
    shrinkBoth(shrinkBy) {
        this.shrinkX(shrinkBy);
        this.shrinkZ(shrinkBy);
    }
    reduce(axis, reduceBy) {
    }
}
/* harmony export (immutable) */ __webpack_exports__["b"] = Shape;



/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BlockType; });
var BlockType;
(function (BlockType) {
    BlockType[BlockType["CUBE"] = 1] = "CUBE";
    BlockType[BlockType["PYRAMID"] = 2] = "PYRAMID";
    BlockType[BlockType["TENT"] = 3] = "TENT";
    BlockType[BlockType["TRI_TUBE"] = 4] = "TRI_TUBE";
    BlockType[BlockType["QUARTER_PYRAMID"] = 5] = "QUARTER_PYRAMID";
    BlockType[BlockType["SLANT"] = 6] = "SLANT";
    BlockType[BlockType["WEDGE"] = 7] = "WEDGE";
    BlockType[BlockType["QUARTER_ROUND"] = 10] = "QUARTER_ROUND"; //standard quarter round
})(BlockType || (BlockType = {}));
;
class Block {
}
/* unused harmony export Block */



/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RoadType; });
/* harmony export (immutable) */ __webpack_exports__["c"] = cloneTurtle;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_gl_matrix__ = __webpack_require__(0);

var RoadType;
(function (RoadType) {
    RoadType[RoadType["HIGHWAY"] = 1] = "HIGHWAY";
    RoadType[RoadType["STREET"] = 2] = "STREET";
})(RoadType || (RoadType = {}));
/**
 * Struct to hold the parameters for the turtle
 */
class Turtle {
    constructor() {
        //the direction the turtle is facing represented by angle in radians
        this.dir = Math.PI / 2;
        //the position where the turtle exists
        this.pos = __WEBPACK_IMPORTED_MODULE_0_gl_matrix__["b" /* vec2 */].fromValues(0.0, 0.0);
        //the type of road
        this.roadType = RoadType.HIGHWAY;
        this.segmentLength = 8;
        this.lengthScale = 0.9;
        this.angle = Math.PI / 4;
        this.angleScale = 0.9;
        this.branchEnded = false;
        this.lastIntersectionId = 0;
        this.numIntersections = 0;
    }
}
/* harmony export (immutable) */ __webpack_exports__["b"] = Turtle;

function cloneTurtle(turtle) {
    let newTurtle = new Turtle();
    let pos = __WEBPACK_IMPORTED_MODULE_0_gl_matrix__["b" /* vec2 */].create();
    __WEBPACK_IMPORTED_MODULE_0_gl_matrix__["b" /* vec2 */].copy(pos, turtle.pos);
    newTurtle.dir = turtle.dir;
    newTurtle.pos = pos;
    newTurtle.roadType = turtle.roadType;
    newTurtle.segmentLength = turtle.segmentLength;
    newTurtle.lengthScale = turtle.lengthScale;
    newTurtle.angle = turtle.angle;
    newTurtle.angleScale = turtle.angleScale;
    newTurtle.branchEnded = turtle.branchEnded;
    newTurtle.lastIntersectionId = turtle.lastIntersectionId;
    newTurtle.numIntersections = turtle.numIntersections;
    return newTurtle;
}


/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
var Prando = /** @class */ (function () {
    // ================================================================================================================
    // CONSTRUCTOR ----------------------------------------------------------------------------------------------------
    /**
     * Generate a new Prando pseudo-random number generator.
     *
     * @param seed - A number or string seed that determines which pseudo-random number sequence will be created. Defaults to current time.
     */
    function Prando(seed) {
        this._value = NaN;
        if (typeof (seed) === "string") {
            // String seed
            this._seed = this.hashCode(seed);
        }
        else if (typeof (seed) === "number") {
            // Numeric seed
            this._seed = this.getSafeSeed(seed);
        }
        else {
            // Pseudo-random seed
            this._seed = this.getSafeSeed(Prando.MIN + Math.floor((Prando.MAX - Prando.MIN) * Math.random()));
        }
        this.reset();
    }
    // ================================================================================================================
    // PUBLIC INTERFACE -----------------------------------------------------------------------------------------------
    /**
     * Generates a pseudo-random number between a lower (inclusive) and a higher (exclusive) bounds.
     *
     * @param min - The minimum number that can be randomly generated.
     * @param pseudoMax - The maximum number that can be randomly generated (exclusive).
     * @return The generated pseudo-random number.
     */
    Prando.prototype.next = function (min, pseudoMax) {
        if (min === void 0) { min = 0; }
        if (pseudoMax === void 0) { pseudoMax = 1; }
        this.recalculate();
        return this.map(this._value, Prando.MIN, Prando.MAX, min, pseudoMax);
    };
    /**
     * Generates a pseudo-random integer number in a range (inclusive).
     *
     * @param min - The minimum number that can be randomly generated.
     * @param max - The maximum number that can be randomly generated.
     * @return The generated pseudo-random number.
     */
    Prando.prototype.nextInt = function (min, max) {
        if (min === void 0) { min = 10; }
        if (max === void 0) { max = 100; }
        this.recalculate();
        return Math.floor(this.map(this._value, Prando.MIN, Prando.MAX, min, max + 1));
    };
    /**
     * Generates a pseudo-random string sequence of a particular length from a specific character range.
     *
     * Note: keep in mind that creating a random string sequence does not guarantee uniqueness; there is always a
     * 1 in (char_length^string_length) chance of collision. For real unique string ids, always check for
     * pre-existing ids, or employ a robust GUID/UUID generator.
     *
     * @param length - Length of the strting to be generated.
     * @param chars - Characters that are used when creating the random string. Defaults to all alphanumeric chars (A-Z, a-z, 0-9).
     * @return The generated string sequence.
     */
    Prando.prototype.nextString = function (length, chars) {
        if (length === void 0) { length = 16; }
        if (chars === void 0) { chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"; }
        var str = "";
        while (str.length < length) {
            str += this.nextChar(chars);
        }
        return str;
    };
    /**
     * Generates a pseudo-random string of 1 character specific character range.
     *
     * @param chars - Characters that are used when creating the random string. Defaults to all alphanumeric chars (A-Z, a-z, 0-9).
     * @return The generated character.
     */
    Prando.prototype.nextChar = function (chars) {
        if (chars === void 0) { chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"; }
        this.recalculate();
        return chars.substr(this.nextInt(0, chars.length - 1), 1);
    };
    /**
     * Picks a pseudo-random item from an array. The array is left unmodified.
     *
     * Note: keep in mind that while the returned item will be random enough, picking one item from the array at a time
     * does not guarantee nor imply that a sequence of random non-repeating items will be picked. If you want to
     * *pick items in a random order* from an array, instead of *pick one random item from an array*, it's best to
     * apply a *shuffle* transformation to the array instead, then read it linearly.
     *
     * @param array - Array of any type containing one or more candidates for random picking.
     * @return An item from the array.
     */
    Prando.prototype.nextArrayItem = function (array) {
        this.recalculate();
        return array[this.nextInt(0, array.length - 1)];
    };
    /**
     * Generates a pseudo-random boolean.
     *
     * @return A value of true or false.
     */
    Prando.prototype.nextBoolean = function () {
        this.recalculate();
        return this._value > 0.5;
    };
    /**
     * Skips ahead in the sequence of numbers that are being generated. This is equivalent to
     * calling next() a specified number of times, but faster since it doesn't need to map the
     * new random numbers to a range and return it.
     *
     * @param iterations - The number of items to skip ahead.
     */
    Prando.prototype.skip = function (iterations) {
        if (iterations === void 0) { iterations = 1; }
        while (iterations-- > 0) {
            this.recalculate();
        }
    };
    /**
     * Reset the pseudo-random number sequence back to its starting seed. Further calls to next()
     * will then produce the same sequence of numbers it had produced before. This is equivalent to
     * creating a new Prando instance with the same seed as another Prando instance.
     *
     * Example:
     * let rng = new Prando(12345678);
     * console.log(rng.next()); // 0.6177754114889017
     * console.log(rng.next()); // 0.5784605181725837
     * rng.reset();
     * console.log(rng.next()); // 0.6177754114889017 again
     * console.log(rng.next()); // 0.5784605181725837 again
     */
    Prando.prototype.reset = function () {
        this._value = this._seed;
    };
    // ================================================================================================================
    // PRIVATE INTERFACE ----------------------------------------------------------------------------------------------
    Prando.prototype.recalculate = function () {
        this._value = this.xorshift(this._value);
    };
    Prando.prototype.xorshift = function (value) {
        // Xorshift*32
        // Based on George Marsaglia's work: http://www.jstatsoft.org/v08/i14/paper
        value ^= value << 13;
        value ^= value >> 17;
        value ^= value << 5;
        return value;
    };
    Prando.prototype.map = function (val, minFrom, maxFrom, minTo, maxTo) {
        return ((val - minFrom) / (maxFrom - minFrom)) * (maxTo - minTo) + minTo;
    };
    Prando.prototype.hashCode = function (str) {
        var hash = 0;
        if (str) {
            var l = str.length;
            for (var i = 0; i < l; i++) {
                hash = ((hash << 5) - hash) + str.charCodeAt(i);
                hash |= 0;
                hash = this.xorshift(hash);
            }
        }
        return this.getSafeSeed(hash);
    };
    Prando.prototype.getSafeSeed = function (seed) {
        if (seed === 0)
            return 1;
        return seed;
    };
    Prando.MIN = -2147483648; // Int32 min
    Prando.MAX = 2147483647; // Int32 max
    return Prando;
}());

/* harmony default export */ __webpack_exports__["default"] = (Prando);


/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__globals__ = __webpack_require__(4);

// enum BufferType {
//   ELEMENT_ARRAY_BUFFER = 'ELEMENT_ARRAY_BUFFER',
//   ARRAY_BUFFER = 'ARRAY_BUFFER'
// }
//
// class Buffer {
//   buffer: WebGLBuffer;
//   bufferType: BufferType;
// }
class Drawable {
    constructor() {
        this.count = 0;
        this.numInstances = 1;
        this.idxBound = false;
        this.posBound = false;
        this.norBound = false;
        this.infoBound = false;
        this.colBound = false;
        this.translateBound = false;
        this.blockInfoBound = false;
        this.rotateBound = false;
        this.scaleBound = false;
        this.adjustmentBound = false;
        //starting the process of abstracting this out since it is a huge pain to do each one individually
        // bufferExists(buffName: string) {
        //   return this.buffers.hasOwnProperty(buffName);
        // }
        //
        // generate(buffName: string, bufferType: BufferType) {
        //   if(!this.bufferExists(buffName)) {
        //     this.buffers[buffName] = {
        //       buffer: gl.createBuffer(),
        //       bufferType: bufferType
        //     }
        //   }
        // }
        //
        // bind(buffName: string, bufferType: BufferType | null): boolean {
        //   if(!this.bufferExists(buffName)) {
        //     this.generate(buffName, bufferType);
        //   }
        //   if(this.buffers[buffName].bufferType == BufferType.ARRAY_BUFFER) {
        //     gl.bindBuffer(gl.ARRAY_BUFFER, this.buffers[buffName].buffer);
        //   }
        //   else if(this.buffers[buffName].bufferType == BufferType.ELEMENT_ARRAY_BUFFER) {
        //     gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, this.buffers[buffName].buffer);
        //   }
        //
        //   return true;
        // }
    }
    setNumInstances(num) {
        this.numInstances = num;
    }
    destory() {
        __WEBPACK_IMPORTED_MODULE_0__globals__["a" /* gl */].deleteBuffer(this.bufIdx);
        __WEBPACK_IMPORTED_MODULE_0__globals__["a" /* gl */].deleteBuffer(this.bufPos);
        __WEBPACK_IMPORTED_MODULE_0__globals__["a" /* gl */].deleteBuffer(this.bufNor);
        __WEBPACK_IMPORTED_MODULE_0__globals__["a" /* gl */].deleteBuffer(this.bufCol);
        __WEBPACK_IMPORTED_MODULE_0__globals__["a" /* gl */].deleteBuffer(this.bufTranslate);
        __WEBPACK_IMPORTED_MODULE_0__globals__["a" /* gl */].deleteBuffer(this.bufBlockInfo);
        __WEBPACK_IMPORTED_MODULE_0__globals__["a" /* gl */].deleteBuffer(this.bufRotate);
        __WEBPACK_IMPORTED_MODULE_0__globals__["a" /* gl */].deleteBuffer(this.bufScale);
        __WEBPACK_IMPORTED_MODULE_0__globals__["a" /* gl */].deleteBuffer(this.bufAdjustment);
    }
    generateIdx() {
        this.idxBound = true;
        this.bufIdx = __WEBPACK_IMPORTED_MODULE_0__globals__["a" /* gl */].createBuffer();
    }
    generatePos() {
        this.posBound = true;
        this.bufPos = __WEBPACK_IMPORTED_MODULE_0__globals__["a" /* gl */].createBuffer();
    }
    generateNor() {
        this.norBound = true;
        this.bufNor = __WEBPACK_IMPORTED_MODULE_0__globals__["a" /* gl */].createBuffer();
    }
    generateInfo() {
        this.infoBound = true;
        this.bufInfo = __WEBPACK_IMPORTED_MODULE_0__globals__["a" /* gl */].createBuffer();
    }
    generateCol() {
        this.colBound = true;
        this.bufCol = __WEBPACK_IMPORTED_MODULE_0__globals__["a" /* gl */].createBuffer();
    }
    generateTranslate() {
        this.translateBound = true;
        this.bufTranslate = __WEBPACK_IMPORTED_MODULE_0__globals__["a" /* gl */].createBuffer();
    }
    generateBlockInfo() {
        this.blockInfoBound = true;
        this.bufBlockInfo = __WEBPACK_IMPORTED_MODULE_0__globals__["a" /* gl */].createBuffer();
    }
    generateRotate() {
        this.rotateBound = true;
        this.bufRotate = __WEBPACK_IMPORTED_MODULE_0__globals__["a" /* gl */].createBuffer();
    }
    generateScale() {
        this.scaleBound = true;
        this.bufScale = __WEBPACK_IMPORTED_MODULE_0__globals__["a" /* gl */].createBuffer();
    }
    generateAdjustment() {
        this.adjustmentBound = true;
        this.bufAdjustment = __WEBPACK_IMPORTED_MODULE_0__globals__["a" /* gl */].createBuffer();
    }
    bindIdx() {
        if (this.idxBound) {
            __WEBPACK_IMPORTED_MODULE_0__globals__["a" /* gl */].bindBuffer(__WEBPACK_IMPORTED_MODULE_0__globals__["a" /* gl */].ELEMENT_ARRAY_BUFFER, this.bufIdx);
        }
        return this.idxBound;
    }
    bindPos() {
        if (this.posBound) {
            __WEBPACK_IMPORTED_MODULE_0__globals__["a" /* gl */].bindBuffer(__WEBPACK_IMPORTED_MODULE_0__globals__["a" /* gl */].ARRAY_BUFFER, this.bufPos);
        }
        return this.posBound;
    }
    bindNor() {
        if (this.norBound) {
            __WEBPACK_IMPORTED_MODULE_0__globals__["a" /* gl */].bindBuffer(__WEBPACK_IMPORTED_MODULE_0__globals__["a" /* gl */].ARRAY_BUFFER, this.bufNor);
        }
        return this.norBound;
    }
    bindInfo() {
        if (this.infoBound) {
            __WEBPACK_IMPORTED_MODULE_0__globals__["a" /* gl */].bindBuffer(__WEBPACK_IMPORTED_MODULE_0__globals__["a" /* gl */].ARRAY_BUFFER, this.bufInfo);
        }
        return this.infoBound;
    }
    bindCol() {
        if (this.colBound) {
            __WEBPACK_IMPORTED_MODULE_0__globals__["a" /* gl */].bindBuffer(__WEBPACK_IMPORTED_MODULE_0__globals__["a" /* gl */].ARRAY_BUFFER, this.bufCol);
        }
        return this.colBound;
    }
    bindTranslate() {
        if (this.translateBound) {
            __WEBPACK_IMPORTED_MODULE_0__globals__["a" /* gl */].bindBuffer(__WEBPACK_IMPORTED_MODULE_0__globals__["a" /* gl */].ARRAY_BUFFER, this.bufTranslate);
        }
        return this.translateBound;
    }
    bindBlockInfo() {
        if (this.blockInfoBound) {
            __WEBPACK_IMPORTED_MODULE_0__globals__["a" /* gl */].bindBuffer(__WEBPACK_IMPORTED_MODULE_0__globals__["a" /* gl */].ARRAY_BUFFER, this.bufBlockInfo);
        }
        return this.blockInfoBound;
    }
    bindRotate() {
        if (this.rotateBound) {
            __WEBPACK_IMPORTED_MODULE_0__globals__["a" /* gl */].bindBuffer(__WEBPACK_IMPORTED_MODULE_0__globals__["a" /* gl */].ARRAY_BUFFER, this.bufRotate);
        }
        return this.rotateBound;
    }
    bindScale() {
        if (this.scaleBound) {
            __WEBPACK_IMPORTED_MODULE_0__globals__["a" /* gl */].bindBuffer(__WEBPACK_IMPORTED_MODULE_0__globals__["a" /* gl */].ARRAY_BUFFER, this.bufScale);
        }
        return this.scaleBound;
    }
    bindAdjustment() {
        if (this.adjustmentBound) {
            __WEBPACK_IMPORTED_MODULE_0__globals__["a" /* gl */].bindBuffer(__WEBPACK_IMPORTED_MODULE_0__globals__["a" /* gl */].ARRAY_BUFFER, this.bufAdjustment);
        }
        return this.scaleBound;
    }
    elemCount() {
        return this.count;
    }
    drawMode() {
        return __WEBPACK_IMPORTED_MODULE_0__globals__["a" /* gl */].TRIANGLES;
    }
}
;
/* harmony default export */ __webpack_exports__["a"] = (Drawable);


/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports = invert;

/**
 * Inverts a mat4
 *
 * @param {mat4} out the receiving matrix
 * @param {mat4} a the source matrix
 * @returns {mat4} out
 */
function invert(out, a) {
    var a00 = a[0], a01 = a[1], a02 = a[2], a03 = a[3],
        a10 = a[4], a11 = a[5], a12 = a[6], a13 = a[7],
        a20 = a[8], a21 = a[9], a22 = a[10], a23 = a[11],
        a30 = a[12], a31 = a[13], a32 = a[14], a33 = a[15],

        b00 = a00 * a11 - a01 * a10,
        b01 = a00 * a12 - a02 * a10,
        b02 = a00 * a13 - a03 * a10,
        b03 = a01 * a12 - a02 * a11,
        b04 = a01 * a13 - a03 * a11,
        b05 = a02 * a13 - a03 * a12,
        b06 = a20 * a31 - a21 * a30,
        b07 = a20 * a32 - a22 * a30,
        b08 = a20 * a33 - a23 * a30,
        b09 = a21 * a32 - a22 * a31,
        b10 = a21 * a33 - a23 * a31,
        b11 = a22 * a33 - a23 * a32,

        // Calculate the determinant
        det = b00 * b11 - b01 * b10 + b02 * b09 + b03 * b08 - b04 * b07 + b05 * b06;

    if (!det) { 
        return null; 
    }
    det = 1.0 / det;

    out[0] = (a11 * b11 - a12 * b10 + a13 * b09) * det;
    out[1] = (a02 * b10 - a01 * b11 - a03 * b09) * det;
    out[2] = (a31 * b05 - a32 * b04 + a33 * b03) * det;
    out[3] = (a22 * b04 - a21 * b05 - a23 * b03) * det;
    out[4] = (a12 * b08 - a10 * b11 - a13 * b07) * det;
    out[5] = (a00 * b11 - a02 * b08 + a03 * b07) * det;
    out[6] = (a32 * b02 - a30 * b05 - a33 * b01) * det;
    out[7] = (a20 * b05 - a22 * b02 + a23 * b01) * det;
    out[8] = (a10 * b10 - a11 * b08 + a13 * b06) * det;
    out[9] = (a01 * b08 - a00 * b10 - a03 * b06) * det;
    out[10] = (a30 * b04 - a31 * b02 + a33 * b00) * det;
    out[11] = (a21 * b02 - a20 * b04 - a23 * b00) * det;
    out[12] = (a11 * b07 - a10 * b09 - a12 * b06) * det;
    out[13] = (a00 * b09 - a01 * b07 + a02 * b06) * det;
    out[14] = (a31 * b01 - a30 * b03 - a32 * b00) * det;
    out[15] = (a20 * b03 - a21 * b01 + a22 * b00) * det;

    return out;
};

/***/ }),
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_gl_matrix__ = __webpack_require__(0);

//wraps the vec3 functions so that they are easier to deal with
class VecMath {
    static ident() {
        let identity;
        __WEBPACK_IMPORTED_MODULE_0_gl_matrix__["a" /* mat4 */].identity(identity);
        return identity;
    }
    static degreeToRad(deg) {
        return deg * 2.0 * this.pi / 360;
    }
    static convertToVec3(a) {
        if (typeof a == 'number') {
            return __WEBPACK_IMPORTED_MODULE_0_gl_matrix__["c" /* vec3 */].fromValues(a, a, a);
        }
        else if (Array.isArray(a) && a.length == 3) {
            return __WEBPACK_IMPORTED_MODULE_0_gl_matrix__["c" /* vec3 */].fromValues(a[0], a[1], a[2]);
        }
        return a;
    }
    static convertToVec2(a) {
        if (typeof a == 'number') {
            return __WEBPACK_IMPORTED_MODULE_0_gl_matrix__["b" /* vec2 */].fromValues(a, a);
        }
        else if (Array.isArray(a) && a.length == 2) {
            return __WEBPACK_IMPORTED_MODULE_0_gl_matrix__["b" /* vec2 */].fromValues(a[0], a[1]);
        }
        return a;
    }
    static add(a, b) {
        let out = __WEBPACK_IMPORTED_MODULE_0_gl_matrix__["c" /* vec3 */].create();
        return __WEBPACK_IMPORTED_MODULE_0_gl_matrix__["c" /* vec3 */].add(out, this.convertToVec3(a), this.convertToVec3(b));
    }
    static add2(a, b) {
        let out = __WEBPACK_IMPORTED_MODULE_0_gl_matrix__["b" /* vec2 */].create();
        return __WEBPACK_IMPORTED_MODULE_0_gl_matrix__["b" /* vec2 */].add(out, this.convertToVec2(a), this.convertToVec2(b));
    }
    static multiply3(a, b) {
        let out = __WEBPACK_IMPORTED_MODULE_0_gl_matrix__["c" /* vec3 */].create();
        return __WEBPACK_IMPORTED_MODULE_0_gl_matrix__["c" /* vec3 */].multiply(out, this.convertToVec3(a), this.convertToVec3(b));
    }
    static multiply2(a, b) {
        let out = __WEBPACK_IMPORTED_MODULE_0_gl_matrix__["b" /* vec2 */].create();
        return __WEBPACK_IMPORTED_MODULE_0_gl_matrix__["b" /* vec2 */].multiply(out, this.convertToVec2(a), this.convertToVec2(b));
    }
    //this assumes that both the line and the point are normalized
    static rotateAroundVector(point, vector, degree) {
        let start = __WEBPACK_IMPORTED_MODULE_0_gl_matrix__["d" /* vec4 */].fromValues(point[0], point[1], point[2], 1);
        let result = __WEBPACK_IMPORTED_MODULE_0_gl_matrix__["d" /* vec4 */].create();
        let rot = this.rotationAroundVector(vector, degree);
        __WEBPACK_IMPORTED_MODULE_0_gl_matrix__["d" /* vec4 */].transformMat4(result, start, rot);
        return __WEBPACK_IMPORTED_MODULE_0_gl_matrix__["c" /* vec3 */].fromValues(result[0], result[1], result[2]);
    }
    /**
     * Get the rotation matrix for rotation the degrees around a vector
     * @param vector  the vector to rotate around
     * @param degree  the degrees to rotate
     */
    static rotationAroundVector(vector, degree) {
        let rot = __WEBPACK_IMPORTED_MODULE_0_gl_matrix__["a" /* mat4 */].create();
        __WEBPACK_IMPORTED_MODULE_0_gl_matrix__["a" /* mat4 */].rotate(rot, this.id, this.degreeToRad(degree), vector);
        return rot;
    }
    static getRotationFromPoints(startPoint, endPoint) {
        let dX = endPoint[0] - startPoint[0];
        let dY = endPoint[1] - startPoint[1];
        if (dX == 0 && dY >= 0) {
            return Math.PI / 2;
        }
        if (dX == 0 && dY < 0) {
            return Math.PI * 3 / 2;
        }
        if (dX < 0) {
            return Math.PI + Math.atan(dY / dX);
        }
        return Math.atan(dY / dX);
    }
    static clamp(val, min, max) {
        if (val < min)
            return min;
        if (val > max)
            return max;
        return val;
    }
    static intersectionTest(e0, e1, o0, o1) {
        // convert to Ax + By = C form
        var A1 = e1[1] - e0[1];
        var B1 = e0[0] - e1[0];
        var C1 = A1 * e0[0] + B1 * e0[1];
        var A2 = o1[1] - o0[1];
        var B2 = o0[0] - o1[0];
        var C2 = A2 * o0[0] + B2 * o0[1];
        var det = A1 * B2 - A2 * B1;
        // parallel lines
        if (Math.abs(det) < 0.000001) {
            return undefined;
        }
        else {
            var x = (B2 * C1 - B1 * C2) / det;
            var y = (A1 * C2 - A2 * C1) / det;
            //make sure they actually hit
            if (x < Math.min(e0[0], e1[0]))
                return undefined;
            if (x > Math.max(e0[0], e1[0]))
                return undefined;
            if (x < Math.min(o0[0], o1[0]))
                return undefined;
            if (x > Math.max(o0[0], o1[0]))
                return undefined;
            if (y < Math.min(e0[1], e1[1]))
                return undefined;
            if (y > Math.max(e0[1], e1[1]))
                return undefined;
            if (y < Math.min(o0[1], o1[1]))
                return undefined;
            if (y > Math.max(o0[1], o1[1]))
                return undefined;
            var intersection = __WEBPACK_IMPORTED_MODULE_0_gl_matrix__["b" /* vec2 */].fromValues(x, y);
            return intersection;
        }
    }
    // To find orientation of ordered triplet (p, q, r).
    // The function returns following values
    // 0 --> p, q and r are colinear
    // 1 --> Clockwise
    // 2 --> Counterclockwise
    static orientation(p, q, r) {
        // See https://www.geeksforgeeks.org/orientation-3-ordered-points/
        // for details of below formula.
        let val = (q[1] - p[1]) * (r[0] - q[0]) -
            (q[0] - p[0]) * (r[1] - q[1]);
        if (val == 0)
            return 0; // colinear
        return (val > 0) ? 1 : 2; // clock or counterclock wise
    }
    // Given three colinear points p, q, r, the function checks if
    // point q lies on line segment 'pr'
    static onSegment(p, q, r) {
        if (q[0] <= Math.max(p[0], r[0]) && q[0] >= Math.min(p[0], r[0]) &&
            q[1] <= Math.max(p[1], r[1]) && q[1] >= Math.min(p[1], r[1]))
            return true;
        return false;
    }
    // The main function that returns true if line segment 'p1q1'
    // and 'p2q2' intersect.
    static doIntersect(p1, q1, p2, q2) {
        // Find the four orientations needed for general and
        // special cases
        let o1 = this.orientation(p1, q1, p2);
        let o2 = this.orientation(p1, q1, q2);
        let o3 = this.orientation(p2, q2, p1);
        let o4 = this.orientation(p2, q2, q1);
        // General case
        if (o1 != o2 && o3 != o4)
            return true;
        // Special Cases
        // p1, q1 and p2 are colinear and p2 lies on segment p1q1
        if (o1 == 0 && this.onSegment(p1, p2, q1))
            return true;
        // p1, q1 and q2 are colinear and q2 lies on segment p1q1
        if (o2 == 0 && this.onSegment(p1, q2, q1))
            return true;
        // p2, q2 and p1 are colinear and p1 lies on segment p2q2
        if (o3 == 0 && this.onSegment(p2, p1, q2))
            return true;
        // p2, q2 and q1 are colinear and q1 lies on segment p2q2
        if (o4 == 0 && this.onSegment(p2, q1, q2))
            return true;
        return false; // Doesn't fall in any of the above cases
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = VecMath;

VecMath.pi = 3.14159;
VecMath.id = __WEBPACK_IMPORTED_MODULE_0_gl_matrix__["a" /* mat4 */].fromValues(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);


/***/ }),
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Axis; });
var Axis;
(function (Axis) {
    Axis[Axis["X"] = 0] = "X";
    Axis[Axis["Y"] = 1] = "Y";
    Axis[Axis["Z"] = 2] = "Z";
})(Axis || (Axis = {}));


/***/ }),
/* 14 */
/***/ (function(module, exports) {

module.exports = normalize;

/**
 * Normalize a vec3
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a vector to normalize
 * @returns {vec3} out
 */
function normalize(out, a) {
    var x = a[0],
        y = a[1],
        z = a[2]
    var len = x*x + y*y + z*z
    if (len > 0) {
        //TODO: evaluate use of glm_invsqrt here?
        len = 1 / Math.sqrt(len)
        out[0] = a[0] * len
        out[1] = a[1] * len
        out[2] = a[2] * len
    }
    return out
}

/***/ }),
/* 15 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
class ConstraintAdjustment {
}
/* harmony export (immutable) */ __webpack_exports__["a"] = ConstraintAdjustment;



/***/ }),
/* 16 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__noise_random__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shape_foundation__ = __webpack_require__(102);


class Building {
    constructor(options) {
        this.maxReplacements = 20;
        this.pos = options.pos;
        this.footprint = options.footprint;
        this.rotation = options.rotation;
        this.seed = options.seed;
        this.shapes = [
            new __WEBPACK_IMPORTED_MODULE_1__shape_foundation__["a" /* Foundation */]({
                footprint: this.footprint,
                pos: this.pos,
                rotation: this.rotation,
            })
        ];
        if (typeof options.maxReplacements !== 'undefined')
            this.maxReplacements = options.maxReplacements;
        //this.runReplacement();
    }
    getBlocks() {
        let blocks = [];
        for (let i = 0; i < this.shapes.length; i++) {
            blocks = blocks.concat(this.shapes[i].getBlocks());
        }
        return blocks;
    }
    allShapesTerminal() {
        for (let i = 0; i < this.shapes.length; i++) {
            if (!this.shapes[i].terminal)
                return false;
        }
        return true;
    }
    runReplacements() {
        let count = 0;
        while (!this.allShapesTerminal() && count < this.maxReplacements) {
            count++;
            this.runReplacement();
        }
    }
    runReplacement() {
        this.seed += 1.23;
        //get non terminal shapes
        let nonTerminal = [];
        for (let i = 0; i < this.shapes.length; i++) {
            if (!this.shapes[i].terminal)
                nonTerminal.push(i);
        }
        //pick a random shape to replace
        let replaceIndex = nonTerminal[__WEBPACK_IMPORTED_MODULE_0__noise_random__["a" /* default */].randomInt(nonTerminal.length - 1, this.seed)];
        if (this.shapes[replaceIndex]) {
            let newShapes = this.shapes[replaceIndex].runReplacement(this.seed);
            this.shapes[replaceIndex] = newShapes[0];
            for (let i = 1; i < newShapes.length; i++) {
                this.shapes.push(newShapes[i]);
            }
        }
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Building;



/***/ }),
/* 17 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = create;
/* unused harmony export fromMat4 */
/* unused harmony export clone */
/* unused harmony export copy */
/* unused harmony export fromValues */
/* unused harmony export set */
/* unused harmony export identity */
/* unused harmony export transpose */
/* unused harmony export invert */
/* unused harmony export adjoint */
/* unused harmony export determinant */
/* unused harmony export multiply */
/* unused harmony export translate */
/* unused harmony export rotate */
/* unused harmony export scale */
/* unused harmony export fromTranslation */
/* unused harmony export fromRotation */
/* unused harmony export fromScaling */
/* unused harmony export fromMat2d */
/* unused harmony export fromQuat */
/* unused harmony export normalFromMat4 */
/* unused harmony export projection */
/* unused harmony export str */
/* unused harmony export frob */
/* unused harmony export add */
/* unused harmony export subtract */
/* unused harmony export multiplyScalar */
/* unused harmony export multiplyScalarAndAdd */
/* unused harmony export exactEquals */
/* unused harmony export equals */
/* unused harmony export mul */
/* unused harmony export sub */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__common_js__ = __webpack_require__(2);


/**
 * 3x3 Matrix
 * @module mat3
 */

/**
 * Creates a new identity mat3
 *
 * @returns {mat3} a new 3x3 matrix
 */
function create() {
  var out = new __WEBPACK_IMPORTED_MODULE_0__common_js__["a" /* ARRAY_TYPE */](9);
  if (__WEBPACK_IMPORTED_MODULE_0__common_js__["a" /* ARRAY_TYPE */] != Float32Array) {
    out[1] = 0;
    out[2] = 0;
    out[3] = 0;
    out[5] = 0;
    out[6] = 0;
    out[7] = 0;
  }
  out[0] = 1;
  out[4] = 1;
  out[8] = 1;
  return out;
}

/**
 * Copies the upper-left 3x3 values into the given mat3.
 *
 * @param {mat3} out the receiving 3x3 matrix
 * @param {mat4} a   the source 4x4 matrix
 * @returns {mat3} out
 */
function fromMat4(out, a) {
  out[0] = a[0];
  out[1] = a[1];
  out[2] = a[2];
  out[3] = a[4];
  out[4] = a[5];
  out[5] = a[6];
  out[6] = a[8];
  out[7] = a[9];
  out[8] = a[10];
  return out;
}

/**
 * Creates a new mat3 initialized with values from an existing matrix
 *
 * @param {mat3} a matrix to clone
 * @returns {mat3} a new 3x3 matrix
 */
function clone(a) {
  var out = new __WEBPACK_IMPORTED_MODULE_0__common_js__["a" /* ARRAY_TYPE */](9);
  out[0] = a[0];
  out[1] = a[1];
  out[2] = a[2];
  out[3] = a[3];
  out[4] = a[4];
  out[5] = a[5];
  out[6] = a[6];
  out[7] = a[7];
  out[8] = a[8];
  return out;
}

/**
 * Copy the values from one mat3 to another
 *
 * @param {mat3} out the receiving matrix
 * @param {mat3} a the source matrix
 * @returns {mat3} out
 */
function copy(out, a) {
  out[0] = a[0];
  out[1] = a[1];
  out[2] = a[2];
  out[3] = a[3];
  out[4] = a[4];
  out[5] = a[5];
  out[6] = a[6];
  out[7] = a[7];
  out[8] = a[8];
  return out;
}

/**
 * Create a new mat3 with the given values
 *
 * @param {Number} m00 Component in column 0, row 0 position (index 0)
 * @param {Number} m01 Component in column 0, row 1 position (index 1)
 * @param {Number} m02 Component in column 0, row 2 position (index 2)
 * @param {Number} m10 Component in column 1, row 0 position (index 3)
 * @param {Number} m11 Component in column 1, row 1 position (index 4)
 * @param {Number} m12 Component in column 1, row 2 position (index 5)
 * @param {Number} m20 Component in column 2, row 0 position (index 6)
 * @param {Number} m21 Component in column 2, row 1 position (index 7)
 * @param {Number} m22 Component in column 2, row 2 position (index 8)
 * @returns {mat3} A new mat3
 */
function fromValues(m00, m01, m02, m10, m11, m12, m20, m21, m22) {
  var out = new __WEBPACK_IMPORTED_MODULE_0__common_js__["a" /* ARRAY_TYPE */](9);
  out[0] = m00;
  out[1] = m01;
  out[2] = m02;
  out[3] = m10;
  out[4] = m11;
  out[5] = m12;
  out[6] = m20;
  out[7] = m21;
  out[8] = m22;
  return out;
}

/**
 * Set the components of a mat3 to the given values
 *
 * @param {mat3} out the receiving matrix
 * @param {Number} m00 Component in column 0, row 0 position (index 0)
 * @param {Number} m01 Component in column 0, row 1 position (index 1)
 * @param {Number} m02 Component in column 0, row 2 position (index 2)
 * @param {Number} m10 Component in column 1, row 0 position (index 3)
 * @param {Number} m11 Component in column 1, row 1 position (index 4)
 * @param {Number} m12 Component in column 1, row 2 position (index 5)
 * @param {Number} m20 Component in column 2, row 0 position (index 6)
 * @param {Number} m21 Component in column 2, row 1 position (index 7)
 * @param {Number} m22 Component in column 2, row 2 position (index 8)
 * @returns {mat3} out
 */
function set(out, m00, m01, m02, m10, m11, m12, m20, m21, m22) {
  out[0] = m00;
  out[1] = m01;
  out[2] = m02;
  out[3] = m10;
  out[4] = m11;
  out[5] = m12;
  out[6] = m20;
  out[7] = m21;
  out[8] = m22;
  return out;
}

/**
 * Set a mat3 to the identity matrix
 *
 * @param {mat3} out the receiving matrix
 * @returns {mat3} out
 */
function identity(out) {
  out[0] = 1;
  out[1] = 0;
  out[2] = 0;
  out[3] = 0;
  out[4] = 1;
  out[5] = 0;
  out[6] = 0;
  out[7] = 0;
  out[8] = 1;
  return out;
}

/**
 * Transpose the values of a mat3
 *
 * @param {mat3} out the receiving matrix
 * @param {mat3} a the source matrix
 * @returns {mat3} out
 */
function transpose(out, a) {
  // If we are transposing ourselves we can skip a few steps but have to cache some values
  if (out === a) {
    var a01 = a[1],
        a02 = a[2],
        a12 = a[5];
    out[1] = a[3];
    out[2] = a[6];
    out[3] = a01;
    out[5] = a[7];
    out[6] = a02;
    out[7] = a12;
  } else {
    out[0] = a[0];
    out[1] = a[3];
    out[2] = a[6];
    out[3] = a[1];
    out[4] = a[4];
    out[5] = a[7];
    out[6] = a[2];
    out[7] = a[5];
    out[8] = a[8];
  }

  return out;
}

/**
 * Inverts a mat3
 *
 * @param {mat3} out the receiving matrix
 * @param {mat3} a the source matrix
 * @returns {mat3} out
 */
function invert(out, a) {
  var a00 = a[0],
      a01 = a[1],
      a02 = a[2];
  var a10 = a[3],
      a11 = a[4],
      a12 = a[5];
  var a20 = a[6],
      a21 = a[7],
      a22 = a[8];

  var b01 = a22 * a11 - a12 * a21;
  var b11 = -a22 * a10 + a12 * a20;
  var b21 = a21 * a10 - a11 * a20;

  // Calculate the determinant
  var det = a00 * b01 + a01 * b11 + a02 * b21;

  if (!det) {
    return null;
  }
  det = 1.0 / det;

  out[0] = b01 * det;
  out[1] = (-a22 * a01 + a02 * a21) * det;
  out[2] = (a12 * a01 - a02 * a11) * det;
  out[3] = b11 * det;
  out[4] = (a22 * a00 - a02 * a20) * det;
  out[5] = (-a12 * a00 + a02 * a10) * det;
  out[6] = b21 * det;
  out[7] = (-a21 * a00 + a01 * a20) * det;
  out[8] = (a11 * a00 - a01 * a10) * det;
  return out;
}

/**
 * Calculates the adjugate of a mat3
 *
 * @param {mat3} out the receiving matrix
 * @param {mat3} a the source matrix
 * @returns {mat3} out
 */
function adjoint(out, a) {
  var a00 = a[0],
      a01 = a[1],
      a02 = a[2];
  var a10 = a[3],
      a11 = a[4],
      a12 = a[5];
  var a20 = a[6],
      a21 = a[7],
      a22 = a[8];

  out[0] = a11 * a22 - a12 * a21;
  out[1] = a02 * a21 - a01 * a22;
  out[2] = a01 * a12 - a02 * a11;
  out[3] = a12 * a20 - a10 * a22;
  out[4] = a00 * a22 - a02 * a20;
  out[5] = a02 * a10 - a00 * a12;
  out[6] = a10 * a21 - a11 * a20;
  out[7] = a01 * a20 - a00 * a21;
  out[8] = a00 * a11 - a01 * a10;
  return out;
}

/**
 * Calculates the determinant of a mat3
 *
 * @param {mat3} a the source matrix
 * @returns {Number} determinant of a
 */
function determinant(a) {
  var a00 = a[0],
      a01 = a[1],
      a02 = a[2];
  var a10 = a[3],
      a11 = a[4],
      a12 = a[5];
  var a20 = a[6],
      a21 = a[7],
      a22 = a[8];

  return a00 * (a22 * a11 - a12 * a21) + a01 * (-a22 * a10 + a12 * a20) + a02 * (a21 * a10 - a11 * a20);
}

/**
 * Multiplies two mat3's
 *
 * @param {mat3} out the receiving matrix
 * @param {mat3} a the first operand
 * @param {mat3} b the second operand
 * @returns {mat3} out
 */
function multiply(out, a, b) {
  var a00 = a[0],
      a01 = a[1],
      a02 = a[2];
  var a10 = a[3],
      a11 = a[4],
      a12 = a[5];
  var a20 = a[6],
      a21 = a[7],
      a22 = a[8];

  var b00 = b[0],
      b01 = b[1],
      b02 = b[2];
  var b10 = b[3],
      b11 = b[4],
      b12 = b[5];
  var b20 = b[6],
      b21 = b[7],
      b22 = b[8];

  out[0] = b00 * a00 + b01 * a10 + b02 * a20;
  out[1] = b00 * a01 + b01 * a11 + b02 * a21;
  out[2] = b00 * a02 + b01 * a12 + b02 * a22;

  out[3] = b10 * a00 + b11 * a10 + b12 * a20;
  out[4] = b10 * a01 + b11 * a11 + b12 * a21;
  out[5] = b10 * a02 + b11 * a12 + b12 * a22;

  out[6] = b20 * a00 + b21 * a10 + b22 * a20;
  out[7] = b20 * a01 + b21 * a11 + b22 * a21;
  out[8] = b20 * a02 + b21 * a12 + b22 * a22;
  return out;
}

/**
 * Translate a mat3 by the given vector
 *
 * @param {mat3} out the receiving matrix
 * @param {mat3} a the matrix to translate
 * @param {vec2} v vector to translate by
 * @returns {mat3} out
 */
function translate(out, a, v) {
  var a00 = a[0],
      a01 = a[1],
      a02 = a[2],
      a10 = a[3],
      a11 = a[4],
      a12 = a[5],
      a20 = a[6],
      a21 = a[7],
      a22 = a[8],
      x = v[0],
      y = v[1];

  out[0] = a00;
  out[1] = a01;
  out[2] = a02;

  out[3] = a10;
  out[4] = a11;
  out[5] = a12;

  out[6] = x * a00 + y * a10 + a20;
  out[7] = x * a01 + y * a11 + a21;
  out[8] = x * a02 + y * a12 + a22;
  return out;
}

/**
 * Rotates a mat3 by the given angle
 *
 * @param {mat3} out the receiving matrix
 * @param {mat3} a the matrix to rotate
 * @param {Number} rad the angle to rotate the matrix by
 * @returns {mat3} out
 */
function rotate(out, a, rad) {
  var a00 = a[0],
      a01 = a[1],
      a02 = a[2],
      a10 = a[3],
      a11 = a[4],
      a12 = a[5],
      a20 = a[6],
      a21 = a[7],
      a22 = a[8],
      s = Math.sin(rad),
      c = Math.cos(rad);

  out[0] = c * a00 + s * a10;
  out[1] = c * a01 + s * a11;
  out[2] = c * a02 + s * a12;

  out[3] = c * a10 - s * a00;
  out[4] = c * a11 - s * a01;
  out[5] = c * a12 - s * a02;

  out[6] = a20;
  out[7] = a21;
  out[8] = a22;
  return out;
};

/**
 * Scales the mat3 by the dimensions in the given vec2
 *
 * @param {mat3} out the receiving matrix
 * @param {mat3} a the matrix to rotate
 * @param {vec2} v the vec2 to scale the matrix by
 * @returns {mat3} out
 **/
function scale(out, a, v) {
  var x = v[0],
      y = v[1];

  out[0] = x * a[0];
  out[1] = x * a[1];
  out[2] = x * a[2];

  out[3] = y * a[3];
  out[4] = y * a[4];
  out[5] = y * a[5];

  out[6] = a[6];
  out[7] = a[7];
  out[8] = a[8];
  return out;
}

/**
 * Creates a matrix from a vector translation
 * This is equivalent to (but much faster than):
 *
 *     mat3.identity(dest);
 *     mat3.translate(dest, dest, vec);
 *
 * @param {mat3} out mat3 receiving operation result
 * @param {vec2} v Translation vector
 * @returns {mat3} out
 */
function fromTranslation(out, v) {
  out[0] = 1;
  out[1] = 0;
  out[2] = 0;
  out[3] = 0;
  out[4] = 1;
  out[5] = 0;
  out[6] = v[0];
  out[7] = v[1];
  out[8] = 1;
  return out;
}

/**
 * Creates a matrix from a given angle
 * This is equivalent to (but much faster than):
 *
 *     mat3.identity(dest);
 *     mat3.rotate(dest, dest, rad);
 *
 * @param {mat3} out mat3 receiving operation result
 * @param {Number} rad the angle to rotate the matrix by
 * @returns {mat3} out
 */
function fromRotation(out, rad) {
  var s = Math.sin(rad),
      c = Math.cos(rad);

  out[0] = c;
  out[1] = s;
  out[2] = 0;

  out[3] = -s;
  out[4] = c;
  out[5] = 0;

  out[6] = 0;
  out[7] = 0;
  out[8] = 1;
  return out;
}

/**
 * Creates a matrix from a vector scaling
 * This is equivalent to (but much faster than):
 *
 *     mat3.identity(dest);
 *     mat3.scale(dest, dest, vec);
 *
 * @param {mat3} out mat3 receiving operation result
 * @param {vec2} v Scaling vector
 * @returns {mat3} out
 */
function fromScaling(out, v) {
  out[0] = v[0];
  out[1] = 0;
  out[2] = 0;

  out[3] = 0;
  out[4] = v[1];
  out[5] = 0;

  out[6] = 0;
  out[7] = 0;
  out[8] = 1;
  return out;
}

/**
 * Copies the values from a mat2d into a mat3
 *
 * @param {mat3} out the receiving matrix
 * @param {mat2d} a the matrix to copy
 * @returns {mat3} out
 **/
function fromMat2d(out, a) {
  out[0] = a[0];
  out[1] = a[1];
  out[2] = 0;

  out[3] = a[2];
  out[4] = a[3];
  out[5] = 0;

  out[6] = a[4];
  out[7] = a[5];
  out[8] = 1;
  return out;
}

/**
* Calculates a 3x3 matrix from the given quaternion
*
* @param {mat3} out mat3 receiving operation result
* @param {quat} q Quaternion to create matrix from
*
* @returns {mat3} out
*/
function fromQuat(out, q) {
  var x = q[0],
      y = q[1],
      z = q[2],
      w = q[3];
  var x2 = x + x;
  var y2 = y + y;
  var z2 = z + z;

  var xx = x * x2;
  var yx = y * x2;
  var yy = y * y2;
  var zx = z * x2;
  var zy = z * y2;
  var zz = z * z2;
  var wx = w * x2;
  var wy = w * y2;
  var wz = w * z2;

  out[0] = 1 - yy - zz;
  out[3] = yx - wz;
  out[6] = zx + wy;

  out[1] = yx + wz;
  out[4] = 1 - xx - zz;
  out[7] = zy - wx;

  out[2] = zx - wy;
  out[5] = zy + wx;
  out[8] = 1 - xx - yy;

  return out;
}

/**
* Calculates a 3x3 normal matrix (transpose inverse) from the 4x4 matrix
*
* @param {mat3} out mat3 receiving operation result
* @param {mat4} a Mat4 to derive the normal matrix from
*
* @returns {mat3} out
*/
function normalFromMat4(out, a) {
  var a00 = a[0],
      a01 = a[1],
      a02 = a[2],
      a03 = a[3];
  var a10 = a[4],
      a11 = a[5],
      a12 = a[6],
      a13 = a[7];
  var a20 = a[8],
      a21 = a[9],
      a22 = a[10],
      a23 = a[11];
  var a30 = a[12],
      a31 = a[13],
      a32 = a[14],
      a33 = a[15];

  var b00 = a00 * a11 - a01 * a10;
  var b01 = a00 * a12 - a02 * a10;
  var b02 = a00 * a13 - a03 * a10;
  var b03 = a01 * a12 - a02 * a11;
  var b04 = a01 * a13 - a03 * a11;
  var b05 = a02 * a13 - a03 * a12;
  var b06 = a20 * a31 - a21 * a30;
  var b07 = a20 * a32 - a22 * a30;
  var b08 = a20 * a33 - a23 * a30;
  var b09 = a21 * a32 - a22 * a31;
  var b10 = a21 * a33 - a23 * a31;
  var b11 = a22 * a33 - a23 * a32;

  // Calculate the determinant
  var det = b00 * b11 - b01 * b10 + b02 * b09 + b03 * b08 - b04 * b07 + b05 * b06;

  if (!det) {
    return null;
  }
  det = 1.0 / det;

  out[0] = (a11 * b11 - a12 * b10 + a13 * b09) * det;
  out[1] = (a12 * b08 - a10 * b11 - a13 * b07) * det;
  out[2] = (a10 * b10 - a11 * b08 + a13 * b06) * det;

  out[3] = (a02 * b10 - a01 * b11 - a03 * b09) * det;
  out[4] = (a00 * b11 - a02 * b08 + a03 * b07) * det;
  out[5] = (a01 * b08 - a00 * b10 - a03 * b06) * det;

  out[6] = (a31 * b05 - a32 * b04 + a33 * b03) * det;
  out[7] = (a32 * b02 - a30 * b05 - a33 * b01) * det;
  out[8] = (a30 * b04 - a31 * b02 + a33 * b00) * det;

  return out;
}

/**
 * Generates a 2D projection matrix with the given bounds
 *
 * @param {mat3} out mat3 frustum matrix will be written into
 * @param {number} width Width of your gl context
 * @param {number} height Height of gl context
 * @returns {mat3} out
 */
function projection(out, width, height) {
  out[0] = 2 / width;
  out[1] = 0;
  out[2] = 0;
  out[3] = 0;
  out[4] = -2 / height;
  out[5] = 0;
  out[6] = -1;
  out[7] = 1;
  out[8] = 1;
  return out;
}

/**
 * Returns a string representation of a mat3
 *
 * @param {mat3} a matrix to represent as a string
 * @returns {String} string representation of the matrix
 */
function str(a) {
  return 'mat3(' + a[0] + ', ' + a[1] + ', ' + a[2] + ', ' + a[3] + ', ' + a[4] + ', ' + a[5] + ', ' + a[6] + ', ' + a[7] + ', ' + a[8] + ')';
}

/**
 * Returns Frobenius norm of a mat3
 *
 * @param {mat3} a the matrix to calculate Frobenius norm of
 * @returns {Number} Frobenius norm
 */
function frob(a) {
  return Math.sqrt(Math.pow(a[0], 2) + Math.pow(a[1], 2) + Math.pow(a[2], 2) + Math.pow(a[3], 2) + Math.pow(a[4], 2) + Math.pow(a[5], 2) + Math.pow(a[6], 2) + Math.pow(a[7], 2) + Math.pow(a[8], 2));
}

/**
 * Adds two mat3's
 *
 * @param {mat3} out the receiving matrix
 * @param {mat3} a the first operand
 * @param {mat3} b the second operand
 * @returns {mat3} out
 */
function add(out, a, b) {
  out[0] = a[0] + b[0];
  out[1] = a[1] + b[1];
  out[2] = a[2] + b[2];
  out[3] = a[3] + b[3];
  out[4] = a[4] + b[4];
  out[5] = a[5] + b[5];
  out[6] = a[6] + b[6];
  out[7] = a[7] + b[7];
  out[8] = a[8] + b[8];
  return out;
}

/**
 * Subtracts matrix b from matrix a
 *
 * @param {mat3} out the receiving matrix
 * @param {mat3} a the first operand
 * @param {mat3} b the second operand
 * @returns {mat3} out
 */
function subtract(out, a, b) {
  out[0] = a[0] - b[0];
  out[1] = a[1] - b[1];
  out[2] = a[2] - b[2];
  out[3] = a[3] - b[3];
  out[4] = a[4] - b[4];
  out[5] = a[5] - b[5];
  out[6] = a[6] - b[6];
  out[7] = a[7] - b[7];
  out[8] = a[8] - b[8];
  return out;
}

/**
 * Multiply each element of the matrix by a scalar.
 *
 * @param {mat3} out the receiving matrix
 * @param {mat3} a the matrix to scale
 * @param {Number} b amount to scale the matrix's elements by
 * @returns {mat3} out
 */
function multiplyScalar(out, a, b) {
  out[0] = a[0] * b;
  out[1] = a[1] * b;
  out[2] = a[2] * b;
  out[3] = a[3] * b;
  out[4] = a[4] * b;
  out[5] = a[5] * b;
  out[6] = a[6] * b;
  out[7] = a[7] * b;
  out[8] = a[8] * b;
  return out;
}

/**
 * Adds two mat3's after multiplying each element of the second operand by a scalar value.
 *
 * @param {mat3} out the receiving vector
 * @param {mat3} a the first operand
 * @param {mat3} b the second operand
 * @param {Number} scale the amount to scale b's elements by before adding
 * @returns {mat3} out
 */
function multiplyScalarAndAdd(out, a, b, scale) {
  out[0] = a[0] + b[0] * scale;
  out[1] = a[1] + b[1] * scale;
  out[2] = a[2] + b[2] * scale;
  out[3] = a[3] + b[3] * scale;
  out[4] = a[4] + b[4] * scale;
  out[5] = a[5] + b[5] * scale;
  out[6] = a[6] + b[6] * scale;
  out[7] = a[7] + b[7] * scale;
  out[8] = a[8] + b[8] * scale;
  return out;
}

/**
 * Returns whether or not the matrices have exactly the same elements in the same position (when compared with ===)
 *
 * @param {mat3} a The first matrix.
 * @param {mat3} b The second matrix.
 * @returns {Boolean} True if the matrices are equal, false otherwise.
 */
function exactEquals(a, b) {
  return a[0] === b[0] && a[1] === b[1] && a[2] === b[2] && a[3] === b[3] && a[4] === b[4] && a[5] === b[5] && a[6] === b[6] && a[7] === b[7] && a[8] === b[8];
}

/**
 * Returns whether or not the matrices have approximately the same elements in the same position.
 *
 * @param {mat3} a The first matrix.
 * @param {mat3} b The second matrix.
 * @returns {Boolean} True if the matrices are equal, false otherwise.
 */
function equals(a, b) {
  var a0 = a[0],
      a1 = a[1],
      a2 = a[2],
      a3 = a[3],
      a4 = a[4],
      a5 = a[5],
      a6 = a[6],
      a7 = a[7],
      a8 = a[8];
  var b0 = b[0],
      b1 = b[1],
      b2 = b[2],
      b3 = b[3],
      b4 = b[4],
      b5 = b[5],
      b6 = b[6],
      b7 = b[7],
      b8 = b[8];
  return Math.abs(a0 - b0) <= __WEBPACK_IMPORTED_MODULE_0__common_js__["b" /* EPSILON */] * Math.max(1.0, Math.abs(a0), Math.abs(b0)) && Math.abs(a1 - b1) <= __WEBPACK_IMPORTED_MODULE_0__common_js__["b" /* EPSILON */] * Math.max(1.0, Math.abs(a1), Math.abs(b1)) && Math.abs(a2 - b2) <= __WEBPACK_IMPORTED_MODULE_0__common_js__["b" /* EPSILON */] * Math.max(1.0, Math.abs(a2), Math.abs(b2)) && Math.abs(a3 - b3) <= __WEBPACK_IMPORTED_MODULE_0__common_js__["b" /* EPSILON */] * Math.max(1.0, Math.abs(a3), Math.abs(b3)) && Math.abs(a4 - b4) <= __WEBPACK_IMPORTED_MODULE_0__common_js__["b" /* EPSILON */] * Math.max(1.0, Math.abs(a4), Math.abs(b4)) && Math.abs(a5 - b5) <= __WEBPACK_IMPORTED_MODULE_0__common_js__["b" /* EPSILON */] * Math.max(1.0, Math.abs(a5), Math.abs(b5)) && Math.abs(a6 - b6) <= __WEBPACK_IMPORTED_MODULE_0__common_js__["b" /* EPSILON */] * Math.max(1.0, Math.abs(a6), Math.abs(b6)) && Math.abs(a7 - b7) <= __WEBPACK_IMPORTED_MODULE_0__common_js__["b" /* EPSILON */] * Math.max(1.0, Math.abs(a7), Math.abs(b7)) && Math.abs(a8 - b8) <= __WEBPACK_IMPORTED_MODULE_0__common_js__["b" /* EPSILON */] * Math.max(1.0, Math.abs(a8), Math.abs(b8));
}

/**
 * Alias for {@link mat3.multiply}
 * @function
 */
var mul = multiply;

/**
 * Alias for {@link mat3.subtract}
 * @function
 */
var sub = subtract;

/***/ }),
/* 18 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (immutable) */ __webpack_exports__["create"] = create;
/* harmony export (immutable) */ __webpack_exports__["clone"] = clone;
/* harmony export (immutable) */ __webpack_exports__["copy"] = copy;
/* harmony export (immutable) */ __webpack_exports__["fromValues"] = fromValues;
/* harmony export (immutable) */ __webpack_exports__["set"] = set;
/* harmony export (immutable) */ __webpack_exports__["identity"] = identity;
/* harmony export (immutable) */ __webpack_exports__["transpose"] = transpose;
/* harmony export (immutable) */ __webpack_exports__["invert"] = invert;
/* harmony export (immutable) */ __webpack_exports__["adjoint"] = adjoint;
/* harmony export (immutable) */ __webpack_exports__["determinant"] = determinant;
/* harmony export (immutable) */ __webpack_exports__["multiply"] = multiply;
/* harmony export (immutable) */ __webpack_exports__["translate"] = translate;
/* harmony export (immutable) */ __webpack_exports__["scale"] = scale;
/* harmony export (immutable) */ __webpack_exports__["rotate"] = rotate;
/* harmony export (immutable) */ __webpack_exports__["rotateX"] = rotateX;
/* harmony export (immutable) */ __webpack_exports__["rotateY"] = rotateY;
/* harmony export (immutable) */ __webpack_exports__["rotateZ"] = rotateZ;
/* harmony export (immutable) */ __webpack_exports__["fromTranslation"] = fromTranslation;
/* harmony export (immutable) */ __webpack_exports__["fromScaling"] = fromScaling;
/* harmony export (immutable) */ __webpack_exports__["fromRotation"] = fromRotation;
/* harmony export (immutable) */ __webpack_exports__["fromXRotation"] = fromXRotation;
/* harmony export (immutable) */ __webpack_exports__["fromYRotation"] = fromYRotation;
/* harmony export (immutable) */ __webpack_exports__["fromZRotation"] = fromZRotation;
/* harmony export (immutable) */ __webpack_exports__["fromRotationTranslation"] = fromRotationTranslation;
/* harmony export (immutable) */ __webpack_exports__["fromQuat2"] = fromQuat2;
/* harmony export (immutable) */ __webpack_exports__["getTranslation"] = getTranslation;
/* harmony export (immutable) */ __webpack_exports__["getScaling"] = getScaling;
/* harmony export (immutable) */ __webpack_exports__["getRotation"] = getRotation;
/* harmony export (immutable) */ __webpack_exports__["fromRotationTranslationScale"] = fromRotationTranslationScale;
/* harmony export (immutable) */ __webpack_exports__["fromRotationTranslationScaleOrigin"] = fromRotationTranslationScaleOrigin;
/* harmony export (immutable) */ __webpack_exports__["fromQuat"] = fromQuat;
/* harmony export (immutable) */ __webpack_exports__["frustum"] = frustum;
/* harmony export (immutable) */ __webpack_exports__["perspective"] = perspective;
/* harmony export (immutable) */ __webpack_exports__["perspectiveFromFieldOfView"] = perspectiveFromFieldOfView;
/* harmony export (immutable) */ __webpack_exports__["ortho"] = ortho;
/* harmony export (immutable) */ __webpack_exports__["lookAt"] = lookAt;
/* harmony export (immutable) */ __webpack_exports__["targetTo"] = targetTo;
/* harmony export (immutable) */ __webpack_exports__["str"] = str;
/* harmony export (immutable) */ __webpack_exports__["frob"] = frob;
/* harmony export (immutable) */ __webpack_exports__["add"] = add;
/* harmony export (immutable) */ __webpack_exports__["subtract"] = subtract;
/* harmony export (immutable) */ __webpack_exports__["multiplyScalar"] = multiplyScalar;
/* harmony export (immutable) */ __webpack_exports__["multiplyScalarAndAdd"] = multiplyScalarAndAdd;
/* harmony export (immutable) */ __webpack_exports__["exactEquals"] = exactEquals;
/* harmony export (immutable) */ __webpack_exports__["equals"] = equals;
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mul", function() { return mul; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sub", function() { return sub; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__common_js__ = __webpack_require__(2);


/**
 * 4x4 Matrix<br>Format: column-major, when typed out it looks like row-major<br>The matrices are being post multiplied.
 * @module mat4
 */

/**
 * Creates a new identity mat4
 *
 * @returns {mat4} a new 4x4 matrix
 */
function create() {
  var out = new __WEBPACK_IMPORTED_MODULE_0__common_js__["a" /* ARRAY_TYPE */](16);
  if (__WEBPACK_IMPORTED_MODULE_0__common_js__["a" /* ARRAY_TYPE */] != Float32Array) {
    out[1] = 0;
    out[2] = 0;
    out[3] = 0;
    out[4] = 0;
    out[6] = 0;
    out[7] = 0;
    out[8] = 0;
    out[9] = 0;
    out[11] = 0;
    out[12] = 0;
    out[13] = 0;
    out[14] = 0;
  }
  out[0] = 1;
  out[5] = 1;
  out[10] = 1;
  out[15] = 1;
  return out;
}

/**
 * Creates a new mat4 initialized with values from an existing matrix
 *
 * @param {mat4} a matrix to clone
 * @returns {mat4} a new 4x4 matrix
 */
function clone(a) {
  var out = new __WEBPACK_IMPORTED_MODULE_0__common_js__["a" /* ARRAY_TYPE */](16);
  out[0] = a[0];
  out[1] = a[1];
  out[2] = a[2];
  out[3] = a[3];
  out[4] = a[4];
  out[5] = a[5];
  out[6] = a[6];
  out[7] = a[7];
  out[8] = a[8];
  out[9] = a[9];
  out[10] = a[10];
  out[11] = a[11];
  out[12] = a[12];
  out[13] = a[13];
  out[14] = a[14];
  out[15] = a[15];
  return out;
}

/**
 * Copy the values from one mat4 to another
 *
 * @param {mat4} out the receiving matrix
 * @param {mat4} a the source matrix
 * @returns {mat4} out
 */
function copy(out, a) {
  out[0] = a[0];
  out[1] = a[1];
  out[2] = a[2];
  out[3] = a[3];
  out[4] = a[4];
  out[5] = a[5];
  out[6] = a[6];
  out[7] = a[7];
  out[8] = a[8];
  out[9] = a[9];
  out[10] = a[10];
  out[11] = a[11];
  out[12] = a[12];
  out[13] = a[13];
  out[14] = a[14];
  out[15] = a[15];
  return out;
}

/**
 * Create a new mat4 with the given values
 *
 * @param {Number} m00 Component in column 0, row 0 position (index 0)
 * @param {Number} m01 Component in column 0, row 1 position (index 1)
 * @param {Number} m02 Component in column 0, row 2 position (index 2)
 * @param {Number} m03 Component in column 0, row 3 position (index 3)
 * @param {Number} m10 Component in column 1, row 0 position (index 4)
 * @param {Number} m11 Component in column 1, row 1 position (index 5)
 * @param {Number} m12 Component in column 1, row 2 position (index 6)
 * @param {Number} m13 Component in column 1, row 3 position (index 7)
 * @param {Number} m20 Component in column 2, row 0 position (index 8)
 * @param {Number} m21 Component in column 2, row 1 position (index 9)
 * @param {Number} m22 Component in column 2, row 2 position (index 10)
 * @param {Number} m23 Component in column 2, row 3 position (index 11)
 * @param {Number} m30 Component in column 3, row 0 position (index 12)
 * @param {Number} m31 Component in column 3, row 1 position (index 13)
 * @param {Number} m32 Component in column 3, row 2 position (index 14)
 * @param {Number} m33 Component in column 3, row 3 position (index 15)
 * @returns {mat4} A new mat4
 */
function fromValues(m00, m01, m02, m03, m10, m11, m12, m13, m20, m21, m22, m23, m30, m31, m32, m33) {
  var out = new __WEBPACK_IMPORTED_MODULE_0__common_js__["a" /* ARRAY_TYPE */](16);
  out[0] = m00;
  out[1] = m01;
  out[2] = m02;
  out[3] = m03;
  out[4] = m10;
  out[5] = m11;
  out[6] = m12;
  out[7] = m13;
  out[8] = m20;
  out[9] = m21;
  out[10] = m22;
  out[11] = m23;
  out[12] = m30;
  out[13] = m31;
  out[14] = m32;
  out[15] = m33;
  return out;
}

/**
 * Set the components of a mat4 to the given values
 *
 * @param {mat4} out the receiving matrix
 * @param {Number} m00 Component in column 0, row 0 position (index 0)
 * @param {Number} m01 Component in column 0, row 1 position (index 1)
 * @param {Number} m02 Component in column 0, row 2 position (index 2)
 * @param {Number} m03 Component in column 0, row 3 position (index 3)
 * @param {Number} m10 Component in column 1, row 0 position (index 4)
 * @param {Number} m11 Component in column 1, row 1 position (index 5)
 * @param {Number} m12 Component in column 1, row 2 position (index 6)
 * @param {Number} m13 Component in column 1, row 3 position (index 7)
 * @param {Number} m20 Component in column 2, row 0 position (index 8)
 * @param {Number} m21 Component in column 2, row 1 position (index 9)
 * @param {Number} m22 Component in column 2, row 2 position (index 10)
 * @param {Number} m23 Component in column 2, row 3 position (index 11)
 * @param {Number} m30 Component in column 3, row 0 position (index 12)
 * @param {Number} m31 Component in column 3, row 1 position (index 13)
 * @param {Number} m32 Component in column 3, row 2 position (index 14)
 * @param {Number} m33 Component in column 3, row 3 position (index 15)
 * @returns {mat4} out
 */
function set(out, m00, m01, m02, m03, m10, m11, m12, m13, m20, m21, m22, m23, m30, m31, m32, m33) {
  out[0] = m00;
  out[1] = m01;
  out[2] = m02;
  out[3] = m03;
  out[4] = m10;
  out[5] = m11;
  out[6] = m12;
  out[7] = m13;
  out[8] = m20;
  out[9] = m21;
  out[10] = m22;
  out[11] = m23;
  out[12] = m30;
  out[13] = m31;
  out[14] = m32;
  out[15] = m33;
  return out;
}

/**
 * Set a mat4 to the identity matrix
 *
 * @param {mat4} out the receiving matrix
 * @returns {mat4} out
 */
function identity(out) {
  out[0] = 1;
  out[1] = 0;
  out[2] = 0;
  out[3] = 0;
  out[4] = 0;
  out[5] = 1;
  out[6] = 0;
  out[7] = 0;
  out[8] = 0;
  out[9] = 0;
  out[10] = 1;
  out[11] = 0;
  out[12] = 0;
  out[13] = 0;
  out[14] = 0;
  out[15] = 1;
  return out;
}

/**
 * Transpose the values of a mat4
 *
 * @param {mat4} out the receiving matrix
 * @param {mat4} a the source matrix
 * @returns {mat4} out
 */
function transpose(out, a) {
  // If we are transposing ourselves we can skip a few steps but have to cache some values
  if (out === a) {
    var a01 = a[1],
        a02 = a[2],
        a03 = a[3];
    var a12 = a[6],
        a13 = a[7];
    var a23 = a[11];

    out[1] = a[4];
    out[2] = a[8];
    out[3] = a[12];
    out[4] = a01;
    out[6] = a[9];
    out[7] = a[13];
    out[8] = a02;
    out[9] = a12;
    out[11] = a[14];
    out[12] = a03;
    out[13] = a13;
    out[14] = a23;
  } else {
    out[0] = a[0];
    out[1] = a[4];
    out[2] = a[8];
    out[3] = a[12];
    out[4] = a[1];
    out[5] = a[5];
    out[6] = a[9];
    out[7] = a[13];
    out[8] = a[2];
    out[9] = a[6];
    out[10] = a[10];
    out[11] = a[14];
    out[12] = a[3];
    out[13] = a[7];
    out[14] = a[11];
    out[15] = a[15];
  }

  return out;
}

/**
 * Inverts a mat4
 *
 * @param {mat4} out the receiving matrix
 * @param {mat4} a the source matrix
 * @returns {mat4} out
 */
function invert(out, a) {
  var a00 = a[0],
      a01 = a[1],
      a02 = a[2],
      a03 = a[3];
  var a10 = a[4],
      a11 = a[5],
      a12 = a[6],
      a13 = a[7];
  var a20 = a[8],
      a21 = a[9],
      a22 = a[10],
      a23 = a[11];
  var a30 = a[12],
      a31 = a[13],
      a32 = a[14],
      a33 = a[15];

  var b00 = a00 * a11 - a01 * a10;
  var b01 = a00 * a12 - a02 * a10;
  var b02 = a00 * a13 - a03 * a10;
  var b03 = a01 * a12 - a02 * a11;
  var b04 = a01 * a13 - a03 * a11;
  var b05 = a02 * a13 - a03 * a12;
  var b06 = a20 * a31 - a21 * a30;
  var b07 = a20 * a32 - a22 * a30;
  var b08 = a20 * a33 - a23 * a30;
  var b09 = a21 * a32 - a22 * a31;
  var b10 = a21 * a33 - a23 * a31;
  var b11 = a22 * a33 - a23 * a32;

  // Calculate the determinant
  var det = b00 * b11 - b01 * b10 + b02 * b09 + b03 * b08 - b04 * b07 + b05 * b06;

  if (!det) {
    return null;
  }
  det = 1.0 / det;

  out[0] = (a11 * b11 - a12 * b10 + a13 * b09) * det;
  out[1] = (a02 * b10 - a01 * b11 - a03 * b09) * det;
  out[2] = (a31 * b05 - a32 * b04 + a33 * b03) * det;
  out[3] = (a22 * b04 - a21 * b05 - a23 * b03) * det;
  out[4] = (a12 * b08 - a10 * b11 - a13 * b07) * det;
  out[5] = (a00 * b11 - a02 * b08 + a03 * b07) * det;
  out[6] = (a32 * b02 - a30 * b05 - a33 * b01) * det;
  out[7] = (a20 * b05 - a22 * b02 + a23 * b01) * det;
  out[8] = (a10 * b10 - a11 * b08 + a13 * b06) * det;
  out[9] = (a01 * b08 - a00 * b10 - a03 * b06) * det;
  out[10] = (a30 * b04 - a31 * b02 + a33 * b00) * det;
  out[11] = (a21 * b02 - a20 * b04 - a23 * b00) * det;
  out[12] = (a11 * b07 - a10 * b09 - a12 * b06) * det;
  out[13] = (a00 * b09 - a01 * b07 + a02 * b06) * det;
  out[14] = (a31 * b01 - a30 * b03 - a32 * b00) * det;
  out[15] = (a20 * b03 - a21 * b01 + a22 * b00) * det;

  return out;
}

/**
 * Calculates the adjugate of a mat4
 *
 * @param {mat4} out the receiving matrix
 * @param {mat4} a the source matrix
 * @returns {mat4} out
 */
function adjoint(out, a) {
  var a00 = a[0],
      a01 = a[1],
      a02 = a[2],
      a03 = a[3];
  var a10 = a[4],
      a11 = a[5],
      a12 = a[6],
      a13 = a[7];
  var a20 = a[8],
      a21 = a[9],
      a22 = a[10],
      a23 = a[11];
  var a30 = a[12],
      a31 = a[13],
      a32 = a[14],
      a33 = a[15];

  out[0] = a11 * (a22 * a33 - a23 * a32) - a21 * (a12 * a33 - a13 * a32) + a31 * (a12 * a23 - a13 * a22);
  out[1] = -(a01 * (a22 * a33 - a23 * a32) - a21 * (a02 * a33 - a03 * a32) + a31 * (a02 * a23 - a03 * a22));
  out[2] = a01 * (a12 * a33 - a13 * a32) - a11 * (a02 * a33 - a03 * a32) + a31 * (a02 * a13 - a03 * a12);
  out[3] = -(a01 * (a12 * a23 - a13 * a22) - a11 * (a02 * a23 - a03 * a22) + a21 * (a02 * a13 - a03 * a12));
  out[4] = -(a10 * (a22 * a33 - a23 * a32) - a20 * (a12 * a33 - a13 * a32) + a30 * (a12 * a23 - a13 * a22));
  out[5] = a00 * (a22 * a33 - a23 * a32) - a20 * (a02 * a33 - a03 * a32) + a30 * (a02 * a23 - a03 * a22);
  out[6] = -(a00 * (a12 * a33 - a13 * a32) - a10 * (a02 * a33 - a03 * a32) + a30 * (a02 * a13 - a03 * a12));
  out[7] = a00 * (a12 * a23 - a13 * a22) - a10 * (a02 * a23 - a03 * a22) + a20 * (a02 * a13 - a03 * a12);
  out[8] = a10 * (a21 * a33 - a23 * a31) - a20 * (a11 * a33 - a13 * a31) + a30 * (a11 * a23 - a13 * a21);
  out[9] = -(a00 * (a21 * a33 - a23 * a31) - a20 * (a01 * a33 - a03 * a31) + a30 * (a01 * a23 - a03 * a21));
  out[10] = a00 * (a11 * a33 - a13 * a31) - a10 * (a01 * a33 - a03 * a31) + a30 * (a01 * a13 - a03 * a11);
  out[11] = -(a00 * (a11 * a23 - a13 * a21) - a10 * (a01 * a23 - a03 * a21) + a20 * (a01 * a13 - a03 * a11));
  out[12] = -(a10 * (a21 * a32 - a22 * a31) - a20 * (a11 * a32 - a12 * a31) + a30 * (a11 * a22 - a12 * a21));
  out[13] = a00 * (a21 * a32 - a22 * a31) - a20 * (a01 * a32 - a02 * a31) + a30 * (a01 * a22 - a02 * a21);
  out[14] = -(a00 * (a11 * a32 - a12 * a31) - a10 * (a01 * a32 - a02 * a31) + a30 * (a01 * a12 - a02 * a11));
  out[15] = a00 * (a11 * a22 - a12 * a21) - a10 * (a01 * a22 - a02 * a21) + a20 * (a01 * a12 - a02 * a11);
  return out;
}

/**
 * Calculates the determinant of a mat4
 *
 * @param {mat4} a the source matrix
 * @returns {Number} determinant of a
 */
function determinant(a) {
  var a00 = a[0],
      a01 = a[1],
      a02 = a[2],
      a03 = a[3];
  var a10 = a[4],
      a11 = a[5],
      a12 = a[6],
      a13 = a[7];
  var a20 = a[8],
      a21 = a[9],
      a22 = a[10],
      a23 = a[11];
  var a30 = a[12],
      a31 = a[13],
      a32 = a[14],
      a33 = a[15];

  var b00 = a00 * a11 - a01 * a10;
  var b01 = a00 * a12 - a02 * a10;
  var b02 = a00 * a13 - a03 * a10;
  var b03 = a01 * a12 - a02 * a11;
  var b04 = a01 * a13 - a03 * a11;
  var b05 = a02 * a13 - a03 * a12;
  var b06 = a20 * a31 - a21 * a30;
  var b07 = a20 * a32 - a22 * a30;
  var b08 = a20 * a33 - a23 * a30;
  var b09 = a21 * a32 - a22 * a31;
  var b10 = a21 * a33 - a23 * a31;
  var b11 = a22 * a33 - a23 * a32;

  // Calculate the determinant
  return b00 * b11 - b01 * b10 + b02 * b09 + b03 * b08 - b04 * b07 + b05 * b06;
}

/**
 * Multiplies two mat4s
 *
 * @param {mat4} out the receiving matrix
 * @param {mat4} a the first operand
 * @param {mat4} b the second operand
 * @returns {mat4} out
 */
function multiply(out, a, b) {
  var a00 = a[0],
      a01 = a[1],
      a02 = a[2],
      a03 = a[3];
  var a10 = a[4],
      a11 = a[5],
      a12 = a[6],
      a13 = a[7];
  var a20 = a[8],
      a21 = a[9],
      a22 = a[10],
      a23 = a[11];
  var a30 = a[12],
      a31 = a[13],
      a32 = a[14],
      a33 = a[15];

  // Cache only the current line of the second matrix
  var b0 = b[0],
      b1 = b[1],
      b2 = b[2],
      b3 = b[3];
  out[0] = b0 * a00 + b1 * a10 + b2 * a20 + b3 * a30;
  out[1] = b0 * a01 + b1 * a11 + b2 * a21 + b3 * a31;
  out[2] = b0 * a02 + b1 * a12 + b2 * a22 + b3 * a32;
  out[3] = b0 * a03 + b1 * a13 + b2 * a23 + b3 * a33;

  b0 = b[4];b1 = b[5];b2 = b[6];b3 = b[7];
  out[4] = b0 * a00 + b1 * a10 + b2 * a20 + b3 * a30;
  out[5] = b0 * a01 + b1 * a11 + b2 * a21 + b3 * a31;
  out[6] = b0 * a02 + b1 * a12 + b2 * a22 + b3 * a32;
  out[7] = b0 * a03 + b1 * a13 + b2 * a23 + b3 * a33;

  b0 = b[8];b1 = b[9];b2 = b[10];b3 = b[11];
  out[8] = b0 * a00 + b1 * a10 + b2 * a20 + b3 * a30;
  out[9] = b0 * a01 + b1 * a11 + b2 * a21 + b3 * a31;
  out[10] = b0 * a02 + b1 * a12 + b2 * a22 + b3 * a32;
  out[11] = b0 * a03 + b1 * a13 + b2 * a23 + b3 * a33;

  b0 = b[12];b1 = b[13];b2 = b[14];b3 = b[15];
  out[12] = b0 * a00 + b1 * a10 + b2 * a20 + b3 * a30;
  out[13] = b0 * a01 + b1 * a11 + b2 * a21 + b3 * a31;
  out[14] = b0 * a02 + b1 * a12 + b2 * a22 + b3 * a32;
  out[15] = b0 * a03 + b1 * a13 + b2 * a23 + b3 * a33;
  return out;
}

/**
 * Translate a mat4 by the given vector
 *
 * @param {mat4} out the receiving matrix
 * @param {mat4} a the matrix to translate
 * @param {vec3} v vector to translate by
 * @returns {mat4} out
 */
function translate(out, a, v) {
  var x = v[0],
      y = v[1],
      z = v[2];
  var a00 = void 0,
      a01 = void 0,
      a02 = void 0,
      a03 = void 0;
  var a10 = void 0,
      a11 = void 0,
      a12 = void 0,
      a13 = void 0;
  var a20 = void 0,
      a21 = void 0,
      a22 = void 0,
      a23 = void 0;

  if (a === out) {
    out[12] = a[0] * x + a[4] * y + a[8] * z + a[12];
    out[13] = a[1] * x + a[5] * y + a[9] * z + a[13];
    out[14] = a[2] * x + a[6] * y + a[10] * z + a[14];
    out[15] = a[3] * x + a[7] * y + a[11] * z + a[15];
  } else {
    a00 = a[0];a01 = a[1];a02 = a[2];a03 = a[3];
    a10 = a[4];a11 = a[5];a12 = a[6];a13 = a[7];
    a20 = a[8];a21 = a[9];a22 = a[10];a23 = a[11];

    out[0] = a00;out[1] = a01;out[2] = a02;out[3] = a03;
    out[4] = a10;out[5] = a11;out[6] = a12;out[7] = a13;
    out[8] = a20;out[9] = a21;out[10] = a22;out[11] = a23;

    out[12] = a00 * x + a10 * y + a20 * z + a[12];
    out[13] = a01 * x + a11 * y + a21 * z + a[13];
    out[14] = a02 * x + a12 * y + a22 * z + a[14];
    out[15] = a03 * x + a13 * y + a23 * z + a[15];
  }

  return out;
}

/**
 * Scales the mat4 by the dimensions in the given vec3 not using vectorization
 *
 * @param {mat4} out the receiving matrix
 * @param {mat4} a the matrix to scale
 * @param {vec3} v the vec3 to scale the matrix by
 * @returns {mat4} out
 **/
function scale(out, a, v) {
  var x = v[0],
      y = v[1],
      z = v[2];

  out[0] = a[0] * x;
  out[1] = a[1] * x;
  out[2] = a[2] * x;
  out[3] = a[3] * x;
  out[4] = a[4] * y;
  out[5] = a[5] * y;
  out[6] = a[6] * y;
  out[7] = a[7] * y;
  out[8] = a[8] * z;
  out[9] = a[9] * z;
  out[10] = a[10] * z;
  out[11] = a[11] * z;
  out[12] = a[12];
  out[13] = a[13];
  out[14] = a[14];
  out[15] = a[15];
  return out;
}

/**
 * Rotates a mat4 by the given angle around the given axis
 *
 * @param {mat4} out the receiving matrix
 * @param {mat4} a the matrix to rotate
 * @param {Number} rad the angle to rotate the matrix by
 * @param {vec3} axis the axis to rotate around
 * @returns {mat4} out
 */
function rotate(out, a, rad, axis) {
  var x = axis[0],
      y = axis[1],
      z = axis[2];
  var len = Math.sqrt(x * x + y * y + z * z);
  var s = void 0,
      c = void 0,
      t = void 0;
  var a00 = void 0,
      a01 = void 0,
      a02 = void 0,
      a03 = void 0;
  var a10 = void 0,
      a11 = void 0,
      a12 = void 0,
      a13 = void 0;
  var a20 = void 0,
      a21 = void 0,
      a22 = void 0,
      a23 = void 0;
  var b00 = void 0,
      b01 = void 0,
      b02 = void 0;
  var b10 = void 0,
      b11 = void 0,
      b12 = void 0;
  var b20 = void 0,
      b21 = void 0,
      b22 = void 0;

  if (len < __WEBPACK_IMPORTED_MODULE_0__common_js__["b" /* EPSILON */]) {
    return null;
  }

  len = 1 / len;
  x *= len;
  y *= len;
  z *= len;

  s = Math.sin(rad);
  c = Math.cos(rad);
  t = 1 - c;

  a00 = a[0];a01 = a[1];a02 = a[2];a03 = a[3];
  a10 = a[4];a11 = a[5];a12 = a[6];a13 = a[7];
  a20 = a[8];a21 = a[9];a22 = a[10];a23 = a[11];

  // Construct the elements of the rotation matrix
  b00 = x * x * t + c;b01 = y * x * t + z * s;b02 = z * x * t - y * s;
  b10 = x * y * t - z * s;b11 = y * y * t + c;b12 = z * y * t + x * s;
  b20 = x * z * t + y * s;b21 = y * z * t - x * s;b22 = z * z * t + c;

  // Perform rotation-specific matrix multiplication
  out[0] = a00 * b00 + a10 * b01 + a20 * b02;
  out[1] = a01 * b00 + a11 * b01 + a21 * b02;
  out[2] = a02 * b00 + a12 * b01 + a22 * b02;
  out[3] = a03 * b00 + a13 * b01 + a23 * b02;
  out[4] = a00 * b10 + a10 * b11 + a20 * b12;
  out[5] = a01 * b10 + a11 * b11 + a21 * b12;
  out[6] = a02 * b10 + a12 * b11 + a22 * b12;
  out[7] = a03 * b10 + a13 * b11 + a23 * b12;
  out[8] = a00 * b20 + a10 * b21 + a20 * b22;
  out[9] = a01 * b20 + a11 * b21 + a21 * b22;
  out[10] = a02 * b20 + a12 * b21 + a22 * b22;
  out[11] = a03 * b20 + a13 * b21 + a23 * b22;

  if (a !== out) {
    // If the source and destination differ, copy the unchanged last row
    out[12] = a[12];
    out[13] = a[13];
    out[14] = a[14];
    out[15] = a[15];
  }
  return out;
}

/**
 * Rotates a matrix by the given angle around the X axis
 *
 * @param {mat4} out the receiving matrix
 * @param {mat4} a the matrix to rotate
 * @param {Number} rad the angle to rotate the matrix by
 * @returns {mat4} out
 */
function rotateX(out, a, rad) {
  var s = Math.sin(rad);
  var c = Math.cos(rad);
  var a10 = a[4];
  var a11 = a[5];
  var a12 = a[6];
  var a13 = a[7];
  var a20 = a[8];
  var a21 = a[9];
  var a22 = a[10];
  var a23 = a[11];

  if (a !== out) {
    // If the source and destination differ, copy the unchanged rows
    out[0] = a[0];
    out[1] = a[1];
    out[2] = a[2];
    out[3] = a[3];
    out[12] = a[12];
    out[13] = a[13];
    out[14] = a[14];
    out[15] = a[15];
  }

  // Perform axis-specific matrix multiplication
  out[4] = a10 * c + a20 * s;
  out[5] = a11 * c + a21 * s;
  out[6] = a12 * c + a22 * s;
  out[7] = a13 * c + a23 * s;
  out[8] = a20 * c - a10 * s;
  out[9] = a21 * c - a11 * s;
  out[10] = a22 * c - a12 * s;
  out[11] = a23 * c - a13 * s;
  return out;
}

/**
 * Rotates a matrix by the given angle around the Y axis
 *
 * @param {mat4} out the receiving matrix
 * @param {mat4} a the matrix to rotate
 * @param {Number} rad the angle to rotate the matrix by
 * @returns {mat4} out
 */
function rotateY(out, a, rad) {
  var s = Math.sin(rad);
  var c = Math.cos(rad);
  var a00 = a[0];
  var a01 = a[1];
  var a02 = a[2];
  var a03 = a[3];
  var a20 = a[8];
  var a21 = a[9];
  var a22 = a[10];
  var a23 = a[11];

  if (a !== out) {
    // If the source and destination differ, copy the unchanged rows
    out[4] = a[4];
    out[5] = a[5];
    out[6] = a[6];
    out[7] = a[7];
    out[12] = a[12];
    out[13] = a[13];
    out[14] = a[14];
    out[15] = a[15];
  }

  // Perform axis-specific matrix multiplication
  out[0] = a00 * c - a20 * s;
  out[1] = a01 * c - a21 * s;
  out[2] = a02 * c - a22 * s;
  out[3] = a03 * c - a23 * s;
  out[8] = a00 * s + a20 * c;
  out[9] = a01 * s + a21 * c;
  out[10] = a02 * s + a22 * c;
  out[11] = a03 * s + a23 * c;
  return out;
}

/**
 * Rotates a matrix by the given angle around the Z axis
 *
 * @param {mat4} out the receiving matrix
 * @param {mat4} a the matrix to rotate
 * @param {Number} rad the angle to rotate the matrix by
 * @returns {mat4} out
 */
function rotateZ(out, a, rad) {
  var s = Math.sin(rad);
  var c = Math.cos(rad);
  var a00 = a[0];
  var a01 = a[1];
  var a02 = a[2];
  var a03 = a[3];
  var a10 = a[4];
  var a11 = a[5];
  var a12 = a[6];
  var a13 = a[7];

  if (a !== out) {
    // If the source and destination differ, copy the unchanged last row
    out[8] = a[8];
    out[9] = a[9];
    out[10] = a[10];
    out[11] = a[11];
    out[12] = a[12];
    out[13] = a[13];
    out[14] = a[14];
    out[15] = a[15];
  }

  // Perform axis-specific matrix multiplication
  out[0] = a00 * c + a10 * s;
  out[1] = a01 * c + a11 * s;
  out[2] = a02 * c + a12 * s;
  out[3] = a03 * c + a13 * s;
  out[4] = a10 * c - a00 * s;
  out[5] = a11 * c - a01 * s;
  out[6] = a12 * c - a02 * s;
  out[7] = a13 * c - a03 * s;
  return out;
}

/**
 * Creates a matrix from a vector translation
 * This is equivalent to (but much faster than):
 *
 *     mat4.identity(dest);
 *     mat4.translate(dest, dest, vec);
 *
 * @param {mat4} out mat4 receiving operation result
 * @param {vec3} v Translation vector
 * @returns {mat4} out
 */
function fromTranslation(out, v) {
  out[0] = 1;
  out[1] = 0;
  out[2] = 0;
  out[3] = 0;
  out[4] = 0;
  out[5] = 1;
  out[6] = 0;
  out[7] = 0;
  out[8] = 0;
  out[9] = 0;
  out[10] = 1;
  out[11] = 0;
  out[12] = v[0];
  out[13] = v[1];
  out[14] = v[2];
  out[15] = 1;
  return out;
}

/**
 * Creates a matrix from a vector scaling
 * This is equivalent to (but much faster than):
 *
 *     mat4.identity(dest);
 *     mat4.scale(dest, dest, vec);
 *
 * @param {mat4} out mat4 receiving operation result
 * @param {vec3} v Scaling vector
 * @returns {mat4} out
 */
function fromScaling(out, v) {
  out[0] = v[0];
  out[1] = 0;
  out[2] = 0;
  out[3] = 0;
  out[4] = 0;
  out[5] = v[1];
  out[6] = 0;
  out[7] = 0;
  out[8] = 0;
  out[9] = 0;
  out[10] = v[2];
  out[11] = 0;
  out[12] = 0;
  out[13] = 0;
  out[14] = 0;
  out[15] = 1;
  return out;
}

/**
 * Creates a matrix from a given angle around a given axis
 * This is equivalent to (but much faster than):
 *
 *     mat4.identity(dest);
 *     mat4.rotate(dest, dest, rad, axis);
 *
 * @param {mat4} out mat4 receiving operation result
 * @param {Number} rad the angle to rotate the matrix by
 * @param {vec3} axis the axis to rotate around
 * @returns {mat4} out
 */
function fromRotation(out, rad, axis) {
  var x = axis[0],
      y = axis[1],
      z = axis[2];
  var len = Math.sqrt(x * x + y * y + z * z);
  var s = void 0,
      c = void 0,
      t = void 0;

  if (len < __WEBPACK_IMPORTED_MODULE_0__common_js__["b" /* EPSILON */]) {
    return null;
  }

  len = 1 / len;
  x *= len;
  y *= len;
  z *= len;

  s = Math.sin(rad);
  c = Math.cos(rad);
  t = 1 - c;

  // Perform rotation-specific matrix multiplication
  out[0] = x * x * t + c;
  out[1] = y * x * t + z * s;
  out[2] = z * x * t - y * s;
  out[3] = 0;
  out[4] = x * y * t - z * s;
  out[5] = y * y * t + c;
  out[6] = z * y * t + x * s;
  out[7] = 0;
  out[8] = x * z * t + y * s;
  out[9] = y * z * t - x * s;
  out[10] = z * z * t + c;
  out[11] = 0;
  out[12] = 0;
  out[13] = 0;
  out[14] = 0;
  out[15] = 1;
  return out;
}

/**
 * Creates a matrix from the given angle around the X axis
 * This is equivalent to (but much faster than):
 *
 *     mat4.identity(dest);
 *     mat4.rotateX(dest, dest, rad);
 *
 * @param {mat4} out mat4 receiving operation result
 * @param {Number} rad the angle to rotate the matrix by
 * @returns {mat4} out
 */
function fromXRotation(out, rad) {
  var s = Math.sin(rad);
  var c = Math.cos(rad);

  // Perform axis-specific matrix multiplication
  out[0] = 1;
  out[1] = 0;
  out[2] = 0;
  out[3] = 0;
  out[4] = 0;
  out[5] = c;
  out[6] = s;
  out[7] = 0;
  out[8] = 0;
  out[9] = -s;
  out[10] = c;
  out[11] = 0;
  out[12] = 0;
  out[13] = 0;
  out[14] = 0;
  out[15] = 1;
  return out;
}

/**
 * Creates a matrix from the given angle around the Y axis
 * This is equivalent to (but much faster than):
 *
 *     mat4.identity(dest);
 *     mat4.rotateY(dest, dest, rad);
 *
 * @param {mat4} out mat4 receiving operation result
 * @param {Number} rad the angle to rotate the matrix by
 * @returns {mat4} out
 */
function fromYRotation(out, rad) {
  var s = Math.sin(rad);
  var c = Math.cos(rad);

  // Perform axis-specific matrix multiplication
  out[0] = c;
  out[1] = 0;
  out[2] = -s;
  out[3] = 0;
  out[4] = 0;
  out[5] = 1;
  out[6] = 0;
  out[7] = 0;
  out[8] = s;
  out[9] = 0;
  out[10] = c;
  out[11] = 0;
  out[12] = 0;
  out[13] = 0;
  out[14] = 0;
  out[15] = 1;
  return out;
}

/**
 * Creates a matrix from the given angle around the Z axis
 * This is equivalent to (but much faster than):
 *
 *     mat4.identity(dest);
 *     mat4.rotateZ(dest, dest, rad);
 *
 * @param {mat4} out mat4 receiving operation result
 * @param {Number} rad the angle to rotate the matrix by
 * @returns {mat4} out
 */
function fromZRotation(out, rad) {
  var s = Math.sin(rad);
  var c = Math.cos(rad);

  // Perform axis-specific matrix multiplication
  out[0] = c;
  out[1] = s;
  out[2] = 0;
  out[3] = 0;
  out[4] = -s;
  out[5] = c;
  out[6] = 0;
  out[7] = 0;
  out[8] = 0;
  out[9] = 0;
  out[10] = 1;
  out[11] = 0;
  out[12] = 0;
  out[13] = 0;
  out[14] = 0;
  out[15] = 1;
  return out;
}

/**
 * Creates a matrix from a quaternion rotation and vector translation
 * This is equivalent to (but much faster than):
 *
 *     mat4.identity(dest);
 *     mat4.translate(dest, vec);
 *     let quatMat = mat4.create();
 *     quat4.toMat4(quat, quatMat);
 *     mat4.multiply(dest, quatMat);
 *
 * @param {mat4} out mat4 receiving operation result
 * @param {quat4} q Rotation quaternion
 * @param {vec3} v Translation vector
 * @returns {mat4} out
 */
function fromRotationTranslation(out, q, v) {
  // Quaternion math
  var x = q[0],
      y = q[1],
      z = q[2],
      w = q[3];
  var x2 = x + x;
  var y2 = y + y;
  var z2 = z + z;

  var xx = x * x2;
  var xy = x * y2;
  var xz = x * z2;
  var yy = y * y2;
  var yz = y * z2;
  var zz = z * z2;
  var wx = w * x2;
  var wy = w * y2;
  var wz = w * z2;

  out[0] = 1 - (yy + zz);
  out[1] = xy + wz;
  out[2] = xz - wy;
  out[3] = 0;
  out[4] = xy - wz;
  out[5] = 1 - (xx + zz);
  out[6] = yz + wx;
  out[7] = 0;
  out[8] = xz + wy;
  out[9] = yz - wx;
  out[10] = 1 - (xx + yy);
  out[11] = 0;
  out[12] = v[0];
  out[13] = v[1];
  out[14] = v[2];
  out[15] = 1;

  return out;
}

/**
 * Creates a new mat4 from a dual quat.
 *
 * @param {mat4} out Matrix
 * @param {quat2} a Dual Quaternion
 * @returns {mat4} mat4 receiving operation result
 */
function fromQuat2(out, a) {
  var translation = new __WEBPACK_IMPORTED_MODULE_0__common_js__["a" /* ARRAY_TYPE */](3);
  var bx = -a[0],
      by = -a[1],
      bz = -a[2],
      bw = a[3],
      ax = a[4],
      ay = a[5],
      az = a[6],
      aw = a[7];

  var magnitude = bx * bx + by * by + bz * bz + bw * bw;
  //Only scale if it makes sense
  if (magnitude > 0) {
    translation[0] = (ax * bw + aw * bx + ay * bz - az * by) * 2 / magnitude;
    translation[1] = (ay * bw + aw * by + az * bx - ax * bz) * 2 / magnitude;
    translation[2] = (az * bw + aw * bz + ax * by - ay * bx) * 2 / magnitude;
  } else {
    translation[0] = (ax * bw + aw * bx + ay * bz - az * by) * 2;
    translation[1] = (ay * bw + aw * by + az * bx - ax * bz) * 2;
    translation[2] = (az * bw + aw * bz + ax * by - ay * bx) * 2;
  }
  fromRotationTranslation(out, a, translation);
  return out;
}

/**
 * Returns the translation vector component of a transformation
 *  matrix. If a matrix is built with fromRotationTranslation,
 *  the returned vector will be the same as the translation vector
 *  originally supplied.
 * @param  {vec3} out Vector to receive translation component
 * @param  {mat4} mat Matrix to be decomposed (input)
 * @return {vec3} out
 */
function getTranslation(out, mat) {
  out[0] = mat[12];
  out[1] = mat[13];
  out[2] = mat[14];

  return out;
}

/**
 * Returns the scaling factor component of a transformation
 *  matrix. If a matrix is built with fromRotationTranslationScale
 *  with a normalized Quaternion paramter, the returned vector will be
 *  the same as the scaling vector
 *  originally supplied.
 * @param  {vec3} out Vector to receive scaling factor component
 * @param  {mat4} mat Matrix to be decomposed (input)
 * @return {vec3} out
 */
function getScaling(out, mat) {
  var m11 = mat[0];
  var m12 = mat[1];
  var m13 = mat[2];
  var m21 = mat[4];
  var m22 = mat[5];
  var m23 = mat[6];
  var m31 = mat[8];
  var m32 = mat[9];
  var m33 = mat[10];

  out[0] = Math.sqrt(m11 * m11 + m12 * m12 + m13 * m13);
  out[1] = Math.sqrt(m21 * m21 + m22 * m22 + m23 * m23);
  out[2] = Math.sqrt(m31 * m31 + m32 * m32 + m33 * m33);

  return out;
}

/**
 * Returns a quaternion representing the rotational component
 *  of a transformation matrix. If a matrix is built with
 *  fromRotationTranslation, the returned quaternion will be the
 *  same as the quaternion originally supplied.
 * @param {quat} out Quaternion to receive the rotation component
 * @param {mat4} mat Matrix to be decomposed (input)
 * @return {quat} out
 */
function getRotation(out, mat) {
  // Algorithm taken from http://www.euclideanspace.com/maths/geometry/rotations/conversions/matrixToQuaternion/index.htm
  var trace = mat[0] + mat[5] + mat[10];
  var S = 0;

  if (trace > 0) {
    S = Math.sqrt(trace + 1.0) * 2;
    out[3] = 0.25 * S;
    out[0] = (mat[6] - mat[9]) / S;
    out[1] = (mat[8] - mat[2]) / S;
    out[2] = (mat[1] - mat[4]) / S;
  } else if (mat[0] > mat[5] && mat[0] > mat[10]) {
    S = Math.sqrt(1.0 + mat[0] - mat[5] - mat[10]) * 2;
    out[3] = (mat[6] - mat[9]) / S;
    out[0] = 0.25 * S;
    out[1] = (mat[1] + mat[4]) / S;
    out[2] = (mat[8] + mat[2]) / S;
  } else if (mat[5] > mat[10]) {
    S = Math.sqrt(1.0 + mat[5] - mat[0] - mat[10]) * 2;
    out[3] = (mat[8] - mat[2]) / S;
    out[0] = (mat[1] + mat[4]) / S;
    out[1] = 0.25 * S;
    out[2] = (mat[6] + mat[9]) / S;
  } else {
    S = Math.sqrt(1.0 + mat[10] - mat[0] - mat[5]) * 2;
    out[3] = (mat[1] - mat[4]) / S;
    out[0] = (mat[8] + mat[2]) / S;
    out[1] = (mat[6] + mat[9]) / S;
    out[2] = 0.25 * S;
  }

  return out;
}

/**
 * Creates a matrix from a quaternion rotation, vector translation and vector scale
 * This is equivalent to (but much faster than):
 *
 *     mat4.identity(dest);
 *     mat4.translate(dest, vec);
 *     let quatMat = mat4.create();
 *     quat4.toMat4(quat, quatMat);
 *     mat4.multiply(dest, quatMat);
 *     mat4.scale(dest, scale)
 *
 * @param {mat4} out mat4 receiving operation result
 * @param {quat4} q Rotation quaternion
 * @param {vec3} v Translation vector
 * @param {vec3} s Scaling vector
 * @returns {mat4} out
 */
function fromRotationTranslationScale(out, q, v, s) {
  // Quaternion math
  var x = q[0],
      y = q[1],
      z = q[2],
      w = q[3];
  var x2 = x + x;
  var y2 = y + y;
  var z2 = z + z;

  var xx = x * x2;
  var xy = x * y2;
  var xz = x * z2;
  var yy = y * y2;
  var yz = y * z2;
  var zz = z * z2;
  var wx = w * x2;
  var wy = w * y2;
  var wz = w * z2;
  var sx = s[0];
  var sy = s[1];
  var sz = s[2];

  out[0] = (1 - (yy + zz)) * sx;
  out[1] = (xy + wz) * sx;
  out[2] = (xz - wy) * sx;
  out[3] = 0;
  out[4] = (xy - wz) * sy;
  out[5] = (1 - (xx + zz)) * sy;
  out[6] = (yz + wx) * sy;
  out[7] = 0;
  out[8] = (xz + wy) * sz;
  out[9] = (yz - wx) * sz;
  out[10] = (1 - (xx + yy)) * sz;
  out[11] = 0;
  out[12] = v[0];
  out[13] = v[1];
  out[14] = v[2];
  out[15] = 1;

  return out;
}

/**
 * Creates a matrix from a quaternion rotation, vector translation and vector scale, rotating and scaling around the given origin
 * This is equivalent to (but much faster than):
 *
 *     mat4.identity(dest);
 *     mat4.translate(dest, vec);
 *     mat4.translate(dest, origin);
 *     let quatMat = mat4.create();
 *     quat4.toMat4(quat, quatMat);
 *     mat4.multiply(dest, quatMat);
 *     mat4.scale(dest, scale)
 *     mat4.translate(dest, negativeOrigin);
 *
 * @param {mat4} out mat4 receiving operation result
 * @param {quat4} q Rotation quaternion
 * @param {vec3} v Translation vector
 * @param {vec3} s Scaling vector
 * @param {vec3} o The origin vector around which to scale and rotate
 * @returns {mat4} out
 */
function fromRotationTranslationScaleOrigin(out, q, v, s, o) {
  // Quaternion math
  var x = q[0],
      y = q[1],
      z = q[2],
      w = q[3];
  var x2 = x + x;
  var y2 = y + y;
  var z2 = z + z;

  var xx = x * x2;
  var xy = x * y2;
  var xz = x * z2;
  var yy = y * y2;
  var yz = y * z2;
  var zz = z * z2;
  var wx = w * x2;
  var wy = w * y2;
  var wz = w * z2;

  var sx = s[0];
  var sy = s[1];
  var sz = s[2];

  var ox = o[0];
  var oy = o[1];
  var oz = o[2];

  var out0 = (1 - (yy + zz)) * sx;
  var out1 = (xy + wz) * sx;
  var out2 = (xz - wy) * sx;
  var out4 = (xy - wz) * sy;
  var out5 = (1 - (xx + zz)) * sy;
  var out6 = (yz + wx) * sy;
  var out8 = (xz + wy) * sz;
  var out9 = (yz - wx) * sz;
  var out10 = (1 - (xx + yy)) * sz;

  out[0] = out0;
  out[1] = out1;
  out[2] = out2;
  out[3] = 0;
  out[4] = out4;
  out[5] = out5;
  out[6] = out6;
  out[7] = 0;
  out[8] = out8;
  out[9] = out9;
  out[10] = out10;
  out[11] = 0;
  out[12] = v[0] + ox - (out0 * ox + out4 * oy + out8 * oz);
  out[13] = v[1] + oy - (out1 * ox + out5 * oy + out9 * oz);
  out[14] = v[2] + oz - (out2 * ox + out6 * oy + out10 * oz);
  out[15] = 1;

  return out;
}

/**
 * Calculates a 4x4 matrix from the given quaternion
 *
 * @param {mat4} out mat4 receiving operation result
 * @param {quat} q Quaternion to create matrix from
 *
 * @returns {mat4} out
 */
function fromQuat(out, q) {
  var x = q[0],
      y = q[1],
      z = q[2],
      w = q[3];
  var x2 = x + x;
  var y2 = y + y;
  var z2 = z + z;

  var xx = x * x2;
  var yx = y * x2;
  var yy = y * y2;
  var zx = z * x2;
  var zy = z * y2;
  var zz = z * z2;
  var wx = w * x2;
  var wy = w * y2;
  var wz = w * z2;

  out[0] = 1 - yy - zz;
  out[1] = yx + wz;
  out[2] = zx - wy;
  out[3] = 0;

  out[4] = yx - wz;
  out[5] = 1 - xx - zz;
  out[6] = zy + wx;
  out[7] = 0;

  out[8] = zx + wy;
  out[9] = zy - wx;
  out[10] = 1 - xx - yy;
  out[11] = 0;

  out[12] = 0;
  out[13] = 0;
  out[14] = 0;
  out[15] = 1;

  return out;
}

/**
 * Generates a frustum matrix with the given bounds
 *
 * @param {mat4} out mat4 frustum matrix will be written into
 * @param {Number} left Left bound of the frustum
 * @param {Number} right Right bound of the frustum
 * @param {Number} bottom Bottom bound of the frustum
 * @param {Number} top Top bound of the frustum
 * @param {Number} near Near bound of the frustum
 * @param {Number} far Far bound of the frustum
 * @returns {mat4} out
 */
function frustum(out, left, right, bottom, top, near, far) {
  var rl = 1 / (right - left);
  var tb = 1 / (top - bottom);
  var nf = 1 / (near - far);
  out[0] = near * 2 * rl;
  out[1] = 0;
  out[2] = 0;
  out[3] = 0;
  out[4] = 0;
  out[5] = near * 2 * tb;
  out[6] = 0;
  out[7] = 0;
  out[8] = (right + left) * rl;
  out[9] = (top + bottom) * tb;
  out[10] = (far + near) * nf;
  out[11] = -1;
  out[12] = 0;
  out[13] = 0;
  out[14] = far * near * 2 * nf;
  out[15] = 0;
  return out;
}

/**
 * Generates a perspective projection matrix with the given bounds.
 * Passing null/undefined/no value for far will generate infinite projection matrix.
 *
 * @param {mat4} out mat4 frustum matrix will be written into
 * @param {number} fovy Vertical field of view in radians
 * @param {number} aspect Aspect ratio. typically viewport width/height
 * @param {number} near Near bound of the frustum
 * @param {number} far Far bound of the frustum, can be null or Infinity
 * @returns {mat4} out
 */
function perspective(out, fovy, aspect, near, far) {
  var f = 1.0 / Math.tan(fovy / 2),
      nf = void 0;
  out[0] = f / aspect;
  out[1] = 0;
  out[2] = 0;
  out[3] = 0;
  out[4] = 0;
  out[5] = f;
  out[6] = 0;
  out[7] = 0;
  out[8] = 0;
  out[9] = 0;
  out[11] = -1;
  out[12] = 0;
  out[13] = 0;
  out[15] = 0;
  if (far != null && far !== Infinity) {
    nf = 1 / (near - far);
    out[10] = (far + near) * nf;
    out[14] = 2 * far * near * nf;
  } else {
    out[10] = -1;
    out[14] = -2 * near;
  }
  return out;
}

/**
 * Generates a perspective projection matrix with the given field of view.
 * This is primarily useful for generating projection matrices to be used
 * with the still experiemental WebVR API.
 *
 * @param {mat4} out mat4 frustum matrix will be written into
 * @param {Object} fov Object containing the following values: upDegrees, downDegrees, leftDegrees, rightDegrees
 * @param {number} near Near bound of the frustum
 * @param {number} far Far bound of the frustum
 * @returns {mat4} out
 */
function perspectiveFromFieldOfView(out, fov, near, far) {
  var upTan = Math.tan(fov.upDegrees * Math.PI / 180.0);
  var downTan = Math.tan(fov.downDegrees * Math.PI / 180.0);
  var leftTan = Math.tan(fov.leftDegrees * Math.PI / 180.0);
  var rightTan = Math.tan(fov.rightDegrees * Math.PI / 180.0);
  var xScale = 2.0 / (leftTan + rightTan);
  var yScale = 2.0 / (upTan + downTan);

  out[0] = xScale;
  out[1] = 0.0;
  out[2] = 0.0;
  out[3] = 0.0;
  out[4] = 0.0;
  out[5] = yScale;
  out[6] = 0.0;
  out[7] = 0.0;
  out[8] = -((leftTan - rightTan) * xScale * 0.5);
  out[9] = (upTan - downTan) * yScale * 0.5;
  out[10] = far / (near - far);
  out[11] = -1.0;
  out[12] = 0.0;
  out[13] = 0.0;
  out[14] = far * near / (near - far);
  out[15] = 0.0;
  return out;
}

/**
 * Generates a orthogonal projection matrix with the given bounds
 *
 * @param {mat4} out mat4 frustum matrix will be written into
 * @param {number} left Left bound of the frustum
 * @param {number} right Right bound of the frustum
 * @param {number} bottom Bottom bound of the frustum
 * @param {number} top Top bound of the frustum
 * @param {number} near Near bound of the frustum
 * @param {number} far Far bound of the frustum
 * @returns {mat4} out
 */
function ortho(out, left, right, bottom, top, near, far) {
  var lr = 1 / (left - right);
  var bt = 1 / (bottom - top);
  var nf = 1 / (near - far);
  out[0] = -2 * lr;
  out[1] = 0;
  out[2] = 0;
  out[3] = 0;
  out[4] = 0;
  out[5] = -2 * bt;
  out[6] = 0;
  out[7] = 0;
  out[8] = 0;
  out[9] = 0;
  out[10] = 2 * nf;
  out[11] = 0;
  out[12] = (left + right) * lr;
  out[13] = (top + bottom) * bt;
  out[14] = (far + near) * nf;
  out[15] = 1;
  return out;
}

/**
 * Generates a look-at matrix with the given eye position, focal point, and up axis.
 * If you want a matrix that actually makes an object look at another object, you should use targetTo instead.
 *
 * @param {mat4} out mat4 frustum matrix will be written into
 * @param {vec3} eye Position of the viewer
 * @param {vec3} center Point the viewer is looking at
 * @param {vec3} up vec3 pointing up
 * @returns {mat4} out
 */
function lookAt(out, eye, center, up) {
  var x0 = void 0,
      x1 = void 0,
      x2 = void 0,
      y0 = void 0,
      y1 = void 0,
      y2 = void 0,
      z0 = void 0,
      z1 = void 0,
      z2 = void 0,
      len = void 0;
  var eyex = eye[0];
  var eyey = eye[1];
  var eyez = eye[2];
  var upx = up[0];
  var upy = up[1];
  var upz = up[2];
  var centerx = center[0];
  var centery = center[1];
  var centerz = center[2];

  if (Math.abs(eyex - centerx) < __WEBPACK_IMPORTED_MODULE_0__common_js__["b" /* EPSILON */] && Math.abs(eyey - centery) < __WEBPACK_IMPORTED_MODULE_0__common_js__["b" /* EPSILON */] && Math.abs(eyez - centerz) < __WEBPACK_IMPORTED_MODULE_0__common_js__["b" /* EPSILON */]) {
    return identity(out);
  }

  z0 = eyex - centerx;
  z1 = eyey - centery;
  z2 = eyez - centerz;

  len = 1 / Math.sqrt(z0 * z0 + z1 * z1 + z2 * z2);
  z0 *= len;
  z1 *= len;
  z2 *= len;

  x0 = upy * z2 - upz * z1;
  x1 = upz * z0 - upx * z2;
  x2 = upx * z1 - upy * z0;
  len = Math.sqrt(x0 * x0 + x1 * x1 + x2 * x2);
  if (!len) {
    x0 = 0;
    x1 = 0;
    x2 = 0;
  } else {
    len = 1 / len;
    x0 *= len;
    x1 *= len;
    x2 *= len;
  }

  y0 = z1 * x2 - z2 * x1;
  y1 = z2 * x0 - z0 * x2;
  y2 = z0 * x1 - z1 * x0;

  len = Math.sqrt(y0 * y0 + y1 * y1 + y2 * y2);
  if (!len) {
    y0 = 0;
    y1 = 0;
    y2 = 0;
  } else {
    len = 1 / len;
    y0 *= len;
    y1 *= len;
    y2 *= len;
  }

  out[0] = x0;
  out[1] = y0;
  out[2] = z0;
  out[3] = 0;
  out[4] = x1;
  out[5] = y1;
  out[6] = z1;
  out[7] = 0;
  out[8] = x2;
  out[9] = y2;
  out[10] = z2;
  out[11] = 0;
  out[12] = -(x0 * eyex + x1 * eyey + x2 * eyez);
  out[13] = -(y0 * eyex + y1 * eyey + y2 * eyez);
  out[14] = -(z0 * eyex + z1 * eyey + z2 * eyez);
  out[15] = 1;

  return out;
}

/**
 * Generates a matrix that makes something look at something else.
 *
 * @param {mat4} out mat4 frustum matrix will be written into
 * @param {vec3} eye Position of the viewer
 * @param {vec3} center Point the viewer is looking at
 * @param {vec3} up vec3 pointing up
 * @returns {mat4} out
 */
function targetTo(out, eye, target, up) {
  var eyex = eye[0],
      eyey = eye[1],
      eyez = eye[2],
      upx = up[0],
      upy = up[1],
      upz = up[2];

  var z0 = eyex - target[0],
      z1 = eyey - target[1],
      z2 = eyez - target[2];

  var len = z0 * z0 + z1 * z1 + z2 * z2;
  if (len > 0) {
    len = 1 / Math.sqrt(len);
    z0 *= len;
    z1 *= len;
    z2 *= len;
  }

  var x0 = upy * z2 - upz * z1,
      x1 = upz * z0 - upx * z2,
      x2 = upx * z1 - upy * z0;

  len = x0 * x0 + x1 * x1 + x2 * x2;
  if (len > 0) {
    len = 1 / Math.sqrt(len);
    x0 *= len;
    x1 *= len;
    x2 *= len;
  }

  out[0] = x0;
  out[1] = x1;
  out[2] = x2;
  out[3] = 0;
  out[4] = z1 * x2 - z2 * x1;
  out[5] = z2 * x0 - z0 * x2;
  out[6] = z0 * x1 - z1 * x0;
  out[7] = 0;
  out[8] = z0;
  out[9] = z1;
  out[10] = z2;
  out[11] = 0;
  out[12] = eyex;
  out[13] = eyey;
  out[14] = eyez;
  out[15] = 1;
  return out;
};

/**
 * Returns a string representation of a mat4
 *
 * @param {mat4} a matrix to represent as a string
 * @returns {String} string representation of the matrix
 */
function str(a) {
  return 'mat4(' + a[0] + ', ' + a[1] + ', ' + a[2] + ', ' + a[3] + ', ' + a[4] + ', ' + a[5] + ', ' + a[6] + ', ' + a[7] + ', ' + a[8] + ', ' + a[9] + ', ' + a[10] + ', ' + a[11] + ', ' + a[12] + ', ' + a[13] + ', ' + a[14] + ', ' + a[15] + ')';
}

/**
 * Returns Frobenius norm of a mat4
 *
 * @param {mat4} a the matrix to calculate Frobenius norm of
 * @returns {Number} Frobenius norm
 */
function frob(a) {
  return Math.sqrt(Math.pow(a[0], 2) + Math.pow(a[1], 2) + Math.pow(a[2], 2) + Math.pow(a[3], 2) + Math.pow(a[4], 2) + Math.pow(a[5], 2) + Math.pow(a[6], 2) + Math.pow(a[7], 2) + Math.pow(a[8], 2) + Math.pow(a[9], 2) + Math.pow(a[10], 2) + Math.pow(a[11], 2) + Math.pow(a[12], 2) + Math.pow(a[13], 2) + Math.pow(a[14], 2) + Math.pow(a[15], 2));
}

/**
 * Adds two mat4's
 *
 * @param {mat4} out the receiving matrix
 * @param {mat4} a the first operand
 * @param {mat4} b the second operand
 * @returns {mat4} out
 */
function add(out, a, b) {
  out[0] = a[0] + b[0];
  out[1] = a[1] + b[1];
  out[2] = a[2] + b[2];
  out[3] = a[3] + b[3];
  out[4] = a[4] + b[4];
  out[5] = a[5] + b[5];
  out[6] = a[6] + b[6];
  out[7] = a[7] + b[7];
  out[8] = a[8] + b[8];
  out[9] = a[9] + b[9];
  out[10] = a[10] + b[10];
  out[11] = a[11] + b[11];
  out[12] = a[12] + b[12];
  out[13] = a[13] + b[13];
  out[14] = a[14] + b[14];
  out[15] = a[15] + b[15];
  return out;
}

/**
 * Subtracts matrix b from matrix a
 *
 * @param {mat4} out the receiving matrix
 * @param {mat4} a the first operand
 * @param {mat4} b the second operand
 * @returns {mat4} out
 */
function subtract(out, a, b) {
  out[0] = a[0] - b[0];
  out[1] = a[1] - b[1];
  out[2] = a[2] - b[2];
  out[3] = a[3] - b[3];
  out[4] = a[4] - b[4];
  out[5] = a[5] - b[5];
  out[6] = a[6] - b[6];
  out[7] = a[7] - b[7];
  out[8] = a[8] - b[8];
  out[9] = a[9] - b[9];
  out[10] = a[10] - b[10];
  out[11] = a[11] - b[11];
  out[12] = a[12] - b[12];
  out[13] = a[13] - b[13];
  out[14] = a[14] - b[14];
  out[15] = a[15] - b[15];
  return out;
}

/**
 * Multiply each element of the matrix by a scalar.
 *
 * @param {mat4} out the receiving matrix
 * @param {mat4} a the matrix to scale
 * @param {Number} b amount to scale the matrix's elements by
 * @returns {mat4} out
 */
function multiplyScalar(out, a, b) {
  out[0] = a[0] * b;
  out[1] = a[1] * b;
  out[2] = a[2] * b;
  out[3] = a[3] * b;
  out[4] = a[4] * b;
  out[5] = a[5] * b;
  out[6] = a[6] * b;
  out[7] = a[7] * b;
  out[8] = a[8] * b;
  out[9] = a[9] * b;
  out[10] = a[10] * b;
  out[11] = a[11] * b;
  out[12] = a[12] * b;
  out[13] = a[13] * b;
  out[14] = a[14] * b;
  out[15] = a[15] * b;
  return out;
}

/**
 * Adds two mat4's after multiplying each element of the second operand by a scalar value.
 *
 * @param {mat4} out the receiving vector
 * @param {mat4} a the first operand
 * @param {mat4} b the second operand
 * @param {Number} scale the amount to scale b's elements by before adding
 * @returns {mat4} out
 */
function multiplyScalarAndAdd(out, a, b, scale) {
  out[0] = a[0] + b[0] * scale;
  out[1] = a[1] + b[1] * scale;
  out[2] = a[2] + b[2] * scale;
  out[3] = a[3] + b[3] * scale;
  out[4] = a[4] + b[4] * scale;
  out[5] = a[5] + b[5] * scale;
  out[6] = a[6] + b[6] * scale;
  out[7] = a[7] + b[7] * scale;
  out[8] = a[8] + b[8] * scale;
  out[9] = a[9] + b[9] * scale;
  out[10] = a[10] + b[10] * scale;
  out[11] = a[11] + b[11] * scale;
  out[12] = a[12] + b[12] * scale;
  out[13] = a[13] + b[13] * scale;
  out[14] = a[14] + b[14] * scale;
  out[15] = a[15] + b[15] * scale;
  return out;
}

/**
 * Returns whether or not the matrices have exactly the same elements in the same position (when compared with ===)
 *
 * @param {mat4} a The first matrix.
 * @param {mat4} b The second matrix.
 * @returns {Boolean} True if the matrices are equal, false otherwise.
 */
function exactEquals(a, b) {
  return a[0] === b[0] && a[1] === b[1] && a[2] === b[2] && a[3] === b[3] && a[4] === b[4] && a[5] === b[5] && a[6] === b[6] && a[7] === b[7] && a[8] === b[8] && a[9] === b[9] && a[10] === b[10] && a[11] === b[11] && a[12] === b[12] && a[13] === b[13] && a[14] === b[14] && a[15] === b[15];
}

/**
 * Returns whether or not the matrices have approximately the same elements in the same position.
 *
 * @param {mat4} a The first matrix.
 * @param {mat4} b The second matrix.
 * @returns {Boolean} True if the matrices are equal, false otherwise.
 */
function equals(a, b) {
  var a0 = a[0],
      a1 = a[1],
      a2 = a[2],
      a3 = a[3];
  var a4 = a[4],
      a5 = a[5],
      a6 = a[6],
      a7 = a[7];
  var a8 = a[8],
      a9 = a[9],
      a10 = a[10],
      a11 = a[11];
  var a12 = a[12],
      a13 = a[13],
      a14 = a[14],
      a15 = a[15];

  var b0 = b[0],
      b1 = b[1],
      b2 = b[2],
      b3 = b[3];
  var b4 = b[4],
      b5 = b[5],
      b6 = b[6],
      b7 = b[7];
  var b8 = b[8],
      b9 = b[9],
      b10 = b[10],
      b11 = b[11];
  var b12 = b[12],
      b13 = b[13],
      b14 = b[14],
      b15 = b[15];

  return Math.abs(a0 - b0) <= __WEBPACK_IMPORTED_MODULE_0__common_js__["b" /* EPSILON */] * Math.max(1.0, Math.abs(a0), Math.abs(b0)) && Math.abs(a1 - b1) <= __WEBPACK_IMPORTED_MODULE_0__common_js__["b" /* EPSILON */] * Math.max(1.0, Math.abs(a1), Math.abs(b1)) && Math.abs(a2 - b2) <= __WEBPACK_IMPORTED_MODULE_0__common_js__["b" /* EPSILON */] * Math.max(1.0, Math.abs(a2), Math.abs(b2)) && Math.abs(a3 - b3) <= __WEBPACK_IMPORTED_MODULE_0__common_js__["b" /* EPSILON */] * Math.max(1.0, Math.abs(a3), Math.abs(b3)) && Math.abs(a4 - b4) <= __WEBPACK_IMPORTED_MODULE_0__common_js__["b" /* EPSILON */] * Math.max(1.0, Math.abs(a4), Math.abs(b4)) && Math.abs(a5 - b5) <= __WEBPACK_IMPORTED_MODULE_0__common_js__["b" /* EPSILON */] * Math.max(1.0, Math.abs(a5), Math.abs(b5)) && Math.abs(a6 - b6) <= __WEBPACK_IMPORTED_MODULE_0__common_js__["b" /* EPSILON */] * Math.max(1.0, Math.abs(a6), Math.abs(b6)) && Math.abs(a7 - b7) <= __WEBPACK_IMPORTED_MODULE_0__common_js__["b" /* EPSILON */] * Math.max(1.0, Math.abs(a7), Math.abs(b7)) && Math.abs(a8 - b8) <= __WEBPACK_IMPORTED_MODULE_0__common_js__["b" /* EPSILON */] * Math.max(1.0, Math.abs(a8), Math.abs(b8)) && Math.abs(a9 - b9) <= __WEBPACK_IMPORTED_MODULE_0__common_js__["b" /* EPSILON */] * Math.max(1.0, Math.abs(a9), Math.abs(b9)) && Math.abs(a10 - b10) <= __WEBPACK_IMPORTED_MODULE_0__common_js__["b" /* EPSILON */] * Math.max(1.0, Math.abs(a10), Math.abs(b10)) && Math.abs(a11 - b11) <= __WEBPACK_IMPORTED_MODULE_0__common_js__["b" /* EPSILON */] * Math.max(1.0, Math.abs(a11), Math.abs(b11)) && Math.abs(a12 - b12) <= __WEBPACK_IMPORTED_MODULE_0__common_js__["b" /* EPSILON */] * Math.max(1.0, Math.abs(a12), Math.abs(b12)) && Math.abs(a13 - b13) <= __WEBPACK_IMPORTED_MODULE_0__common_js__["b" /* EPSILON */] * Math.max(1.0, Math.abs(a13), Math.abs(b13)) && Math.abs(a14 - b14) <= __WEBPACK_IMPORTED_MODULE_0__common_js__["b" /* EPSILON */] * Math.max(1.0, Math.abs(a14), Math.abs(b14)) && Math.abs(a15 - b15) <= __WEBPACK_IMPORTED_MODULE_0__common_js__["b" /* EPSILON */] * Math.max(1.0, Math.abs(a15), Math.abs(b15));
}

/**
 * Alias for {@link mat4.multiply}
 * @function
 */
var mul = multiply;

/**
 * Alias for {@link mat4.subtract}
 * @function
 */
var sub = subtract;

/***/ }),
/* 19 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["b"] = create;
/* unused harmony export identity */
/* unused harmony export setAxisAngle */
/* unused harmony export getAxisAngle */
/* unused harmony export multiply */
/* harmony export (immutable) */ __webpack_exports__["e"] = rotateX;
/* harmony export (immutable) */ __webpack_exports__["f"] = rotateY;
/* harmony export (immutable) */ __webpack_exports__["g"] = rotateZ;
/* unused harmony export calculateW */
/* unused harmony export slerp */
/* unused harmony export random */
/* unused harmony export invert */
/* unused harmony export conjugate */
/* unused harmony export fromMat3 */
/* unused harmony export fromEuler */
/* unused harmony export str */
/* unused harmony export clone */
/* unused harmony export fromValues */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return copy; });
/* unused harmony export set */
/* unused harmony export add */
/* unused harmony export mul */
/* unused harmony export scale */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return dot; });
/* unused harmony export lerp */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return length; });
/* unused harmony export len */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return squaredLength; });
/* unused harmony export sqrLen */
/* unused harmony export normalize */
/* unused harmony export exactEquals */
/* unused harmony export equals */
/* unused harmony export rotationTo */
/* unused harmony export sqlerp */
/* unused harmony export setAxes */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__common_js__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mat3_js__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__vec3_js__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__vec4_js__ = __webpack_require__(21);





/**
 * Quaternion
 * @module quat
 */

/**
 * Creates a new identity quat
 *
 * @returns {quat} a new quaternion
 */
function create() {
  var out = new __WEBPACK_IMPORTED_MODULE_0__common_js__["a" /* ARRAY_TYPE */](4);
  if (__WEBPACK_IMPORTED_MODULE_0__common_js__["a" /* ARRAY_TYPE */] != Float32Array) {
    out[0] = 0;
    out[1] = 0;
    out[2] = 0;
  }
  out[3] = 1;
  return out;
}

/**
 * Set a quat to the identity quaternion
 *
 * @param {quat} out the receiving quaternion
 * @returns {quat} out
 */
function identity(out) {
  out[0] = 0;
  out[1] = 0;
  out[2] = 0;
  out[3] = 1;
  return out;
}

/**
 * Sets a quat from the given angle and rotation axis,
 * then returns it.
 *
 * @param {quat} out the receiving quaternion
 * @param {vec3} axis the axis around which to rotate
 * @param {Number} rad the angle in radians
 * @returns {quat} out
 **/
function setAxisAngle(out, axis, rad) {
  rad = rad * 0.5;
  var s = Math.sin(rad);
  out[0] = s * axis[0];
  out[1] = s * axis[1];
  out[2] = s * axis[2];
  out[3] = Math.cos(rad);
  return out;
}

/**
 * Gets the rotation axis and angle for a given
 *  quaternion. If a quaternion is created with
 *  setAxisAngle, this method will return the same
 *  values as providied in the original parameter list
 *  OR functionally equivalent values.
 * Example: The quaternion formed by axis [0, 0, 1] and
 *  angle -90 is the same as the quaternion formed by
 *  [0, 0, 1] and 270. This method favors the latter.
 * @param  {vec3} out_axis  Vector receiving the axis of rotation
 * @param  {quat} q     Quaternion to be decomposed
 * @return {Number}     Angle, in radians, of the rotation
 */
function getAxisAngle(out_axis, q) {
  var rad = Math.acos(q[3]) * 2.0;
  var s = Math.sin(rad / 2.0);
  if (s > __WEBPACK_IMPORTED_MODULE_0__common_js__["b" /* EPSILON */]) {
    out_axis[0] = q[0] / s;
    out_axis[1] = q[1] / s;
    out_axis[2] = q[2] / s;
  } else {
    // If s is zero, return any axis (no rotation - axis does not matter)
    out_axis[0] = 1;
    out_axis[1] = 0;
    out_axis[2] = 0;
  }
  return rad;
}

/**
 * Multiplies two quat's
 *
 * @param {quat} out the receiving quaternion
 * @param {quat} a the first operand
 * @param {quat} b the second operand
 * @returns {quat} out
 */
function multiply(out, a, b) {
  var ax = a[0],
      ay = a[1],
      az = a[2],
      aw = a[3];
  var bx = b[0],
      by = b[1],
      bz = b[2],
      bw = b[3];

  out[0] = ax * bw + aw * bx + ay * bz - az * by;
  out[1] = ay * bw + aw * by + az * bx - ax * bz;
  out[2] = az * bw + aw * bz + ax * by - ay * bx;
  out[3] = aw * bw - ax * bx - ay * by - az * bz;
  return out;
}

/**
 * Rotates a quaternion by the given angle about the X axis
 *
 * @param {quat} out quat receiving operation result
 * @param {quat} a quat to rotate
 * @param {number} rad angle (in radians) to rotate
 * @returns {quat} out
 */
function rotateX(out, a, rad) {
  rad *= 0.5;

  var ax = a[0],
      ay = a[1],
      az = a[2],
      aw = a[3];
  var bx = Math.sin(rad),
      bw = Math.cos(rad);

  out[0] = ax * bw + aw * bx;
  out[1] = ay * bw + az * bx;
  out[2] = az * bw - ay * bx;
  out[3] = aw * bw - ax * bx;
  return out;
}

/**
 * Rotates a quaternion by the given angle about the Y axis
 *
 * @param {quat} out quat receiving operation result
 * @param {quat} a quat to rotate
 * @param {number} rad angle (in radians) to rotate
 * @returns {quat} out
 */
function rotateY(out, a, rad) {
  rad *= 0.5;

  var ax = a[0],
      ay = a[1],
      az = a[2],
      aw = a[3];
  var by = Math.sin(rad),
      bw = Math.cos(rad);

  out[0] = ax * bw - az * by;
  out[1] = ay * bw + aw * by;
  out[2] = az * bw + ax * by;
  out[3] = aw * bw - ay * by;
  return out;
}

/**
 * Rotates a quaternion by the given angle about the Z axis
 *
 * @param {quat} out quat receiving operation result
 * @param {quat} a quat to rotate
 * @param {number} rad angle (in radians) to rotate
 * @returns {quat} out
 */
function rotateZ(out, a, rad) {
  rad *= 0.5;

  var ax = a[0],
      ay = a[1],
      az = a[2],
      aw = a[3];
  var bz = Math.sin(rad),
      bw = Math.cos(rad);

  out[0] = ax * bw + ay * bz;
  out[1] = ay * bw - ax * bz;
  out[2] = az * bw + aw * bz;
  out[3] = aw * bw - az * bz;
  return out;
}

/**
 * Calculates the W component of a quat from the X, Y, and Z components.
 * Assumes that quaternion is 1 unit in length.
 * Any existing W component will be ignored.
 *
 * @param {quat} out the receiving quaternion
 * @param {quat} a quat to calculate W component of
 * @returns {quat} out
 */
function calculateW(out, a) {
  var x = a[0],
      y = a[1],
      z = a[2];

  out[0] = x;
  out[1] = y;
  out[2] = z;
  out[3] = Math.sqrt(Math.abs(1.0 - x * x - y * y - z * z));
  return out;
}

/**
 * Performs a spherical linear interpolation between two quat
 *
 * @param {quat} out the receiving quaternion
 * @param {quat} a the first operand
 * @param {quat} b the second operand
 * @param {Number} t interpolation amount, in the range [0-1], between the two inputs
 * @returns {quat} out
 */
function slerp(out, a, b, t) {
  // benchmarks:
  //    http://jsperf.com/quaternion-slerp-implementations
  var ax = a[0],
      ay = a[1],
      az = a[2],
      aw = a[3];
  var bx = b[0],
      by = b[1],
      bz = b[2],
      bw = b[3];

  var omega = void 0,
      cosom = void 0,
      sinom = void 0,
      scale0 = void 0,
      scale1 = void 0;

  // calc cosine
  cosom = ax * bx + ay * by + az * bz + aw * bw;
  // adjust signs (if necessary)
  if (cosom < 0.0) {
    cosom = -cosom;
    bx = -bx;
    by = -by;
    bz = -bz;
    bw = -bw;
  }
  // calculate coefficients
  if (1.0 - cosom > __WEBPACK_IMPORTED_MODULE_0__common_js__["b" /* EPSILON */]) {
    // standard case (slerp)
    omega = Math.acos(cosom);
    sinom = Math.sin(omega);
    scale0 = Math.sin((1.0 - t) * omega) / sinom;
    scale1 = Math.sin(t * omega) / sinom;
  } else {
    // "from" and "to" quaternions are very close
    //  ... so we can do a linear interpolation
    scale0 = 1.0 - t;
    scale1 = t;
  }
  // calculate final values
  out[0] = scale0 * ax + scale1 * bx;
  out[1] = scale0 * ay + scale1 * by;
  out[2] = scale0 * az + scale1 * bz;
  out[3] = scale0 * aw + scale1 * bw;

  return out;
}

/**
 * Generates a random quaternion
 *
 * @param {quat} out the receiving quaternion
 * @returns {quat} out
 */
function random(out) {
  // Implementation of http://planning.cs.uiuc.edu/node198.html
  // TODO: Calling random 3 times is probably not the fastest solution
  var u1 = __WEBPACK_IMPORTED_MODULE_0__common_js__["c" /* RANDOM */]();
  var u2 = __WEBPACK_IMPORTED_MODULE_0__common_js__["c" /* RANDOM */]();
  var u3 = __WEBPACK_IMPORTED_MODULE_0__common_js__["c" /* RANDOM */]();

  var sqrt1MinusU1 = Math.sqrt(1 - u1);
  var sqrtU1 = Math.sqrt(u1);

  out[0] = sqrt1MinusU1 * Math.sin(2.0 * Math.PI * u2);
  out[1] = sqrt1MinusU1 * Math.cos(2.0 * Math.PI * u2);
  out[2] = sqrtU1 * Math.sin(2.0 * Math.PI * u3);
  out[3] = sqrtU1 * Math.cos(2.0 * Math.PI * u3);
  return out;
}

/**
 * Calculates the inverse of a quat
 *
 * @param {quat} out the receiving quaternion
 * @param {quat} a quat to calculate inverse of
 * @returns {quat} out
 */
function invert(out, a) {
  var a0 = a[0],
      a1 = a[1],
      a2 = a[2],
      a3 = a[3];
  var dot = a0 * a0 + a1 * a1 + a2 * a2 + a3 * a3;
  var invDot = dot ? 1.0 / dot : 0;

  // TODO: Would be faster to return [0,0,0,0] immediately if dot == 0

  out[0] = -a0 * invDot;
  out[1] = -a1 * invDot;
  out[2] = -a2 * invDot;
  out[3] = a3 * invDot;
  return out;
}

/**
 * Calculates the conjugate of a quat
 * If the quaternion is normalized, this function is faster than quat.inverse and produces the same result.
 *
 * @param {quat} out the receiving quaternion
 * @param {quat} a quat to calculate conjugate of
 * @returns {quat} out
 */
function conjugate(out, a) {
  out[0] = -a[0];
  out[1] = -a[1];
  out[2] = -a[2];
  out[3] = a[3];
  return out;
}

/**
 * Creates a quaternion from the given 3x3 rotation matrix.
 *
 * NOTE: The resultant quaternion is not normalized, so you should be sure
 * to renormalize the quaternion yourself where necessary.
 *
 * @param {quat} out the receiving quaternion
 * @param {mat3} m rotation matrix
 * @returns {quat} out
 * @function
 */
function fromMat3(out, m) {
  // Algorithm in Ken Shoemake's article in 1987 SIGGRAPH course notes
  // article "Quaternion Calculus and Fast Animation".
  var fTrace = m[0] + m[4] + m[8];
  var fRoot = void 0;

  if (fTrace > 0.0) {
    // |w| > 1/2, may as well choose w > 1/2
    fRoot = Math.sqrt(fTrace + 1.0); // 2w
    out[3] = 0.5 * fRoot;
    fRoot = 0.5 / fRoot; // 1/(4w)
    out[0] = (m[5] - m[7]) * fRoot;
    out[1] = (m[6] - m[2]) * fRoot;
    out[2] = (m[1] - m[3]) * fRoot;
  } else {
    // |w| <= 1/2
    var i = 0;
    if (m[4] > m[0]) i = 1;
    if (m[8] > m[i * 3 + i]) i = 2;
    var j = (i + 1) % 3;
    var k = (i + 2) % 3;

    fRoot = Math.sqrt(m[i * 3 + i] - m[j * 3 + j] - m[k * 3 + k] + 1.0);
    out[i] = 0.5 * fRoot;
    fRoot = 0.5 / fRoot;
    out[3] = (m[j * 3 + k] - m[k * 3 + j]) * fRoot;
    out[j] = (m[j * 3 + i] + m[i * 3 + j]) * fRoot;
    out[k] = (m[k * 3 + i] + m[i * 3 + k]) * fRoot;
  }

  return out;
}

/**
 * Creates a quaternion from the given euler angle x, y, z.
 *
 * @param {quat} out the receiving quaternion
 * @param {x} Angle to rotate around X axis in degrees.
 * @param {y} Angle to rotate around Y axis in degrees.
 * @param {z} Angle to rotate around Z axis in degrees.
 * @returns {quat} out
 * @function
 */
function fromEuler(out, x, y, z) {
  var halfToRad = 0.5 * Math.PI / 180.0;
  x *= halfToRad;
  y *= halfToRad;
  z *= halfToRad;

  var sx = Math.sin(x);
  var cx = Math.cos(x);
  var sy = Math.sin(y);
  var cy = Math.cos(y);
  var sz = Math.sin(z);
  var cz = Math.cos(z);

  out[0] = sx * cy * cz - cx * sy * sz;
  out[1] = cx * sy * cz + sx * cy * sz;
  out[2] = cx * cy * sz - sx * sy * cz;
  out[3] = cx * cy * cz + sx * sy * sz;

  return out;
}

/**
 * Returns a string representation of a quatenion
 *
 * @param {quat} a vector to represent as a string
 * @returns {String} string representation of the vector
 */
function str(a) {
  return 'quat(' + a[0] + ', ' + a[1] + ', ' + a[2] + ', ' + a[3] + ')';
}

/**
 * Creates a new quat initialized with values from an existing quaternion
 *
 * @param {quat} a quaternion to clone
 * @returns {quat} a new quaternion
 * @function
 */
var clone = __WEBPACK_IMPORTED_MODULE_3__vec4_js__["clone"];

/**
 * Creates a new quat initialized with the given values
 *
 * @param {Number} x X component
 * @param {Number} y Y component
 * @param {Number} z Z component
 * @param {Number} w W component
 * @returns {quat} a new quaternion
 * @function
 */
var fromValues = __WEBPACK_IMPORTED_MODULE_3__vec4_js__["fromValues"];

/**
 * Copy the values from one quat to another
 *
 * @param {quat} out the receiving quaternion
 * @param {quat} a the source quaternion
 * @returns {quat} out
 * @function
 */
var copy = __WEBPACK_IMPORTED_MODULE_3__vec4_js__["copy"];

/**
 * Set the components of a quat to the given values
 *
 * @param {quat} out the receiving quaternion
 * @param {Number} x X component
 * @param {Number} y Y component
 * @param {Number} z Z component
 * @param {Number} w W component
 * @returns {quat} out
 * @function
 */
var set = __WEBPACK_IMPORTED_MODULE_3__vec4_js__["set"];

/**
 * Adds two quat's
 *
 * @param {quat} out the receiving quaternion
 * @param {quat} a the first operand
 * @param {quat} b the second operand
 * @returns {quat} out
 * @function
 */
var add = __WEBPACK_IMPORTED_MODULE_3__vec4_js__["add"];

/**
 * Alias for {@link quat.multiply}
 * @function
 */
var mul = multiply;

/**
 * Scales a quat by a scalar number
 *
 * @param {quat} out the receiving vector
 * @param {quat} a the vector to scale
 * @param {Number} b amount to scale the vector by
 * @returns {quat} out
 * @function
 */
var scale = __WEBPACK_IMPORTED_MODULE_3__vec4_js__["scale"];

/**
 * Calculates the dot product of two quat's
 *
 * @param {quat} a the first operand
 * @param {quat} b the second operand
 * @returns {Number} dot product of a and b
 * @function
 */
var dot = __WEBPACK_IMPORTED_MODULE_3__vec4_js__["dot"];

/**
 * Performs a linear interpolation between two quat's
 *
 * @param {quat} out the receiving quaternion
 * @param {quat} a the first operand
 * @param {quat} b the second operand
 * @param {Number} t interpolation amount, in the range [0-1], between the two inputs
 * @returns {quat} out
 * @function
 */
var lerp = __WEBPACK_IMPORTED_MODULE_3__vec4_js__["lerp"];

/**
 * Calculates the length of a quat
 *
 * @param {quat} a vector to calculate length of
 * @returns {Number} length of a
 */
var length = __WEBPACK_IMPORTED_MODULE_3__vec4_js__["length"];

/**
 * Alias for {@link quat.length}
 * @function
 */
var len = length;

/**
 * Calculates the squared length of a quat
 *
 * @param {quat} a vector to calculate squared length of
 * @returns {Number} squared length of a
 * @function
 */
var squaredLength = __WEBPACK_IMPORTED_MODULE_3__vec4_js__["squaredLength"];

/**
 * Alias for {@link quat.squaredLength}
 * @function
 */
var sqrLen = squaredLength;

/**
 * Normalize a quat
 *
 * @param {quat} out the receiving quaternion
 * @param {quat} a quaternion to normalize
 * @returns {quat} out
 * @function
 */
var normalize = __WEBPACK_IMPORTED_MODULE_3__vec4_js__["normalize"];

/**
 * Returns whether or not the quaternions have exactly the same elements in the same position (when compared with ===)
 *
 * @param {quat} a The first quaternion.
 * @param {quat} b The second quaternion.
 * @returns {Boolean} True if the vectors are equal, false otherwise.
 */
var exactEquals = __WEBPACK_IMPORTED_MODULE_3__vec4_js__["exactEquals"];

/**
 * Returns whether or not the quaternions have approximately the same elements in the same position.
 *
 * @param {quat} a The first vector.
 * @param {quat} b The second vector.
 * @returns {Boolean} True if the vectors are equal, false otherwise.
 */
var equals = __WEBPACK_IMPORTED_MODULE_3__vec4_js__["equals"];

/**
 * Sets a quaternion to represent the shortest rotation from one
 * vector to another.
 *
 * Both vectors are assumed to be unit length.
 *
 * @param {quat} out the receiving quaternion.
 * @param {vec3} a the initial vector
 * @param {vec3} b the destination vector
 * @returns {quat} out
 */
var rotationTo = function () {
  var tmpvec3 = __WEBPACK_IMPORTED_MODULE_2__vec3_js__["create"]();
  var xUnitVec3 = __WEBPACK_IMPORTED_MODULE_2__vec3_js__["fromValues"](1, 0, 0);
  var yUnitVec3 = __WEBPACK_IMPORTED_MODULE_2__vec3_js__["fromValues"](0, 1, 0);

  return function (out, a, b) {
    var dot = __WEBPACK_IMPORTED_MODULE_2__vec3_js__["dot"](a, b);
    if (dot < -0.999999) {
      __WEBPACK_IMPORTED_MODULE_2__vec3_js__["cross"](tmpvec3, xUnitVec3, a);
      if (__WEBPACK_IMPORTED_MODULE_2__vec3_js__["len"](tmpvec3) < 0.000001) __WEBPACK_IMPORTED_MODULE_2__vec3_js__["cross"](tmpvec3, yUnitVec3, a);
      __WEBPACK_IMPORTED_MODULE_2__vec3_js__["normalize"](tmpvec3, tmpvec3);
      setAxisAngle(out, tmpvec3, Math.PI);
      return out;
    } else if (dot > 0.999999) {
      out[0] = 0;
      out[1] = 0;
      out[2] = 0;
      out[3] = 1;
      return out;
    } else {
      __WEBPACK_IMPORTED_MODULE_2__vec3_js__["cross"](tmpvec3, a, b);
      out[0] = tmpvec3[0];
      out[1] = tmpvec3[1];
      out[2] = tmpvec3[2];
      out[3] = 1 + dot;
      return normalize(out, out);
    }
  };
}();

/**
 * Performs a spherical linear interpolation with two control points
 *
 * @param {quat} out the receiving quaternion
 * @param {quat} a the first operand
 * @param {quat} b the second operand
 * @param {quat} c the third operand
 * @param {quat} d the fourth operand
 * @param {Number} t interpolation amount, in the range [0-1], between the two inputs
 * @returns {quat} out
 */
var sqlerp = function () {
  var temp1 = create();
  var temp2 = create();

  return function (out, a, b, c, d, t) {
    slerp(temp1, a, d, t);
    slerp(temp2, b, c, t);
    slerp(out, temp1, temp2, 2 * t * (1 - t));

    return out;
  };
}();

/**
 * Sets the specified quaternion with values corresponding to the given
 * axes. Each axis is a vec3 and is expected to be unit length and
 * perpendicular to all other specified axes.
 *
 * @param {vec3} view  the vector representing the viewing direction
 * @param {vec3} right the vector representing the local "right" direction
 * @param {vec3} up    the vector representing the local "up" direction
 * @returns {quat} out
 */
var setAxes = function () {
  var matr = __WEBPACK_IMPORTED_MODULE_1__mat3_js__["a" /* create */]();

  return function (out, view, right, up) {
    matr[0] = right[0];
    matr[3] = right[1];
    matr[6] = right[2];

    matr[1] = up[0];
    matr[4] = up[1];
    matr[7] = up[2];

    matr[2] = -view[0];
    matr[5] = -view[1];
    matr[8] = -view[2];

    return normalize(out, fromMat3(out, matr));
  };
}();

/***/ }),
/* 20 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (immutable) */ __webpack_exports__["create"] = create;
/* harmony export (immutable) */ __webpack_exports__["clone"] = clone;
/* harmony export (immutable) */ __webpack_exports__["length"] = length;
/* harmony export (immutable) */ __webpack_exports__["fromValues"] = fromValues;
/* harmony export (immutable) */ __webpack_exports__["copy"] = copy;
/* harmony export (immutable) */ __webpack_exports__["set"] = set;
/* harmony export (immutable) */ __webpack_exports__["add"] = add;
/* harmony export (immutable) */ __webpack_exports__["subtract"] = subtract;
/* harmony export (immutable) */ __webpack_exports__["multiply"] = multiply;
/* harmony export (immutable) */ __webpack_exports__["divide"] = divide;
/* harmony export (immutable) */ __webpack_exports__["ceil"] = ceil;
/* harmony export (immutable) */ __webpack_exports__["floor"] = floor;
/* harmony export (immutable) */ __webpack_exports__["min"] = min;
/* harmony export (immutable) */ __webpack_exports__["max"] = max;
/* harmony export (immutable) */ __webpack_exports__["round"] = round;
/* harmony export (immutable) */ __webpack_exports__["scale"] = scale;
/* harmony export (immutable) */ __webpack_exports__["scaleAndAdd"] = scaleAndAdd;
/* harmony export (immutable) */ __webpack_exports__["distance"] = distance;
/* harmony export (immutable) */ __webpack_exports__["squaredDistance"] = squaredDistance;
/* harmony export (immutable) */ __webpack_exports__["squaredLength"] = squaredLength;
/* harmony export (immutable) */ __webpack_exports__["negate"] = negate;
/* harmony export (immutable) */ __webpack_exports__["inverse"] = inverse;
/* harmony export (immutable) */ __webpack_exports__["normalize"] = normalize;
/* harmony export (immutable) */ __webpack_exports__["dot"] = dot;
/* harmony export (immutable) */ __webpack_exports__["cross"] = cross;
/* harmony export (immutable) */ __webpack_exports__["lerp"] = lerp;
/* harmony export (immutable) */ __webpack_exports__["hermite"] = hermite;
/* harmony export (immutable) */ __webpack_exports__["bezier"] = bezier;
/* harmony export (immutable) */ __webpack_exports__["random"] = random;
/* harmony export (immutable) */ __webpack_exports__["transformMat4"] = transformMat4;
/* harmony export (immutable) */ __webpack_exports__["transformMat3"] = transformMat3;
/* harmony export (immutable) */ __webpack_exports__["transformQuat"] = transformQuat;
/* harmony export (immutable) */ __webpack_exports__["rotateX"] = rotateX;
/* harmony export (immutable) */ __webpack_exports__["rotateY"] = rotateY;
/* harmony export (immutable) */ __webpack_exports__["rotateZ"] = rotateZ;
/* harmony export (immutable) */ __webpack_exports__["angle"] = angle;
/* harmony export (immutable) */ __webpack_exports__["str"] = str;
/* harmony export (immutable) */ __webpack_exports__["exactEquals"] = exactEquals;
/* harmony export (immutable) */ __webpack_exports__["equals"] = equals;
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sub", function() { return sub; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mul", function() { return mul; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "div", function() { return div; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dist", function() { return dist; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sqrDist", function() { return sqrDist; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "len", function() { return len; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sqrLen", function() { return sqrLen; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "forEach", function() { return forEach; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__common_js__ = __webpack_require__(2);


/**
 * 3 Dimensional Vector
 * @module vec3
 */

/**
 * Creates a new, empty vec3
 *
 * @returns {vec3} a new 3D vector
 */
function create() {
  var out = new __WEBPACK_IMPORTED_MODULE_0__common_js__["a" /* ARRAY_TYPE */](3);
  if (__WEBPACK_IMPORTED_MODULE_0__common_js__["a" /* ARRAY_TYPE */] != Float32Array) {
    out[0] = 0;
    out[1] = 0;
    out[2] = 0;
  }
  return out;
}

/**
 * Creates a new vec3 initialized with values from an existing vector
 *
 * @param {vec3} a vector to clone
 * @returns {vec3} a new 3D vector
 */
function clone(a) {
  var out = new __WEBPACK_IMPORTED_MODULE_0__common_js__["a" /* ARRAY_TYPE */](3);
  out[0] = a[0];
  out[1] = a[1];
  out[2] = a[2];
  return out;
}

/**
 * Calculates the length of a vec3
 *
 * @param {vec3} a vector to calculate length of
 * @returns {Number} length of a
 */
function length(a) {
  var x = a[0];
  var y = a[1];
  var z = a[2];
  return Math.sqrt(x * x + y * y + z * z);
}

/**
 * Creates a new vec3 initialized with the given values
 *
 * @param {Number} x X component
 * @param {Number} y Y component
 * @param {Number} z Z component
 * @returns {vec3} a new 3D vector
 */
function fromValues(x, y, z) {
  var out = new __WEBPACK_IMPORTED_MODULE_0__common_js__["a" /* ARRAY_TYPE */](3);
  out[0] = x;
  out[1] = y;
  out[2] = z;
  return out;
}

/**
 * Copy the values from one vec3 to another
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a the source vector
 * @returns {vec3} out
 */
function copy(out, a) {
  out[0] = a[0];
  out[1] = a[1];
  out[2] = a[2];
  return out;
}

/**
 * Set the components of a vec3 to the given values
 *
 * @param {vec3} out the receiving vector
 * @param {Number} x X component
 * @param {Number} y Y component
 * @param {Number} z Z component
 * @returns {vec3} out
 */
function set(out, x, y, z) {
  out[0] = x;
  out[1] = y;
  out[2] = z;
  return out;
}

/**
 * Adds two vec3's
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a the first operand
 * @param {vec3} b the second operand
 * @returns {vec3} out
 */
function add(out, a, b) {
  out[0] = a[0] + b[0];
  out[1] = a[1] + b[1];
  out[2] = a[2] + b[2];
  return out;
}

/**
 * Subtracts vector b from vector a
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a the first operand
 * @param {vec3} b the second operand
 * @returns {vec3} out
 */
function subtract(out, a, b) {
  out[0] = a[0] - b[0];
  out[1] = a[1] - b[1];
  out[2] = a[2] - b[2];
  return out;
}

/**
 * Multiplies two vec3's
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a the first operand
 * @param {vec3} b the second operand
 * @returns {vec3} out
 */
function multiply(out, a, b) {
  out[0] = a[0] * b[0];
  out[1] = a[1] * b[1];
  out[2] = a[2] * b[2];
  return out;
}

/**
 * Divides two vec3's
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a the first operand
 * @param {vec3} b the second operand
 * @returns {vec3} out
 */
function divide(out, a, b) {
  out[0] = a[0] / b[0];
  out[1] = a[1] / b[1];
  out[2] = a[2] / b[2];
  return out;
}

/**
 * Math.ceil the components of a vec3
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a vector to ceil
 * @returns {vec3} out
 */
function ceil(out, a) {
  out[0] = Math.ceil(a[0]);
  out[1] = Math.ceil(a[1]);
  out[2] = Math.ceil(a[2]);
  return out;
}

/**
 * Math.floor the components of a vec3
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a vector to floor
 * @returns {vec3} out
 */
function floor(out, a) {
  out[0] = Math.floor(a[0]);
  out[1] = Math.floor(a[1]);
  out[2] = Math.floor(a[2]);
  return out;
}

/**
 * Returns the minimum of two vec3's
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a the first operand
 * @param {vec3} b the second operand
 * @returns {vec3} out
 */
function min(out, a, b) {
  out[0] = Math.min(a[0], b[0]);
  out[1] = Math.min(a[1], b[1]);
  out[2] = Math.min(a[2], b[2]);
  return out;
}

/**
 * Returns the maximum of two vec3's
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a the first operand
 * @param {vec3} b the second operand
 * @returns {vec3} out
 */
function max(out, a, b) {
  out[0] = Math.max(a[0], b[0]);
  out[1] = Math.max(a[1], b[1]);
  out[2] = Math.max(a[2], b[2]);
  return out;
}

/**
 * Math.round the components of a vec3
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a vector to round
 * @returns {vec3} out
 */
function round(out, a) {
  out[0] = Math.round(a[0]);
  out[1] = Math.round(a[1]);
  out[2] = Math.round(a[2]);
  return out;
}

/**
 * Scales a vec3 by a scalar number
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a the vector to scale
 * @param {Number} b amount to scale the vector by
 * @returns {vec3} out
 */
function scale(out, a, b) {
  out[0] = a[0] * b;
  out[1] = a[1] * b;
  out[2] = a[2] * b;
  return out;
}

/**
 * Adds two vec3's after scaling the second operand by a scalar value
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a the first operand
 * @param {vec3} b the second operand
 * @param {Number} scale the amount to scale b by before adding
 * @returns {vec3} out
 */
function scaleAndAdd(out, a, b, scale) {
  out[0] = a[0] + b[0] * scale;
  out[1] = a[1] + b[1] * scale;
  out[2] = a[2] + b[2] * scale;
  return out;
}

/**
 * Calculates the euclidian distance between two vec3's
 *
 * @param {vec3} a the first operand
 * @param {vec3} b the second operand
 * @returns {Number} distance between a and b
 */
function distance(a, b) {
  var x = b[0] - a[0];
  var y = b[1] - a[1];
  var z = b[2] - a[2];
  return Math.sqrt(x * x + y * y + z * z);
}

/**
 * Calculates the squared euclidian distance between two vec3's
 *
 * @param {vec3} a the first operand
 * @param {vec3} b the second operand
 * @returns {Number} squared distance between a and b
 */
function squaredDistance(a, b) {
  var x = b[0] - a[0];
  var y = b[1] - a[1];
  var z = b[2] - a[2];
  return x * x + y * y + z * z;
}

/**
 * Calculates the squared length of a vec3
 *
 * @param {vec3} a vector to calculate squared length of
 * @returns {Number} squared length of a
 */
function squaredLength(a) {
  var x = a[0];
  var y = a[1];
  var z = a[2];
  return x * x + y * y + z * z;
}

/**
 * Negates the components of a vec3
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a vector to negate
 * @returns {vec3} out
 */
function negate(out, a) {
  out[0] = -a[0];
  out[1] = -a[1];
  out[2] = -a[2];
  return out;
}

/**
 * Returns the inverse of the components of a vec3
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a vector to invert
 * @returns {vec3} out
 */
function inverse(out, a) {
  out[0] = 1.0 / a[0];
  out[1] = 1.0 / a[1];
  out[2] = 1.0 / a[2];
  return out;
}

/**
 * Normalize a vec3
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a vector to normalize
 * @returns {vec3} out
 */
function normalize(out, a) {
  var x = a[0];
  var y = a[1];
  var z = a[2];
  var len = x * x + y * y + z * z;
  if (len > 0) {
    //TODO: evaluate use of glm_invsqrt here?
    len = 1 / Math.sqrt(len);
    out[0] = a[0] * len;
    out[1] = a[1] * len;
    out[2] = a[2] * len;
  }
  return out;
}

/**
 * Calculates the dot product of two vec3's
 *
 * @param {vec3} a the first operand
 * @param {vec3} b the second operand
 * @returns {Number} dot product of a and b
 */
function dot(a, b) {
  return a[0] * b[0] + a[1] * b[1] + a[2] * b[2];
}

/**
 * Computes the cross product of two vec3's
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a the first operand
 * @param {vec3} b the second operand
 * @returns {vec3} out
 */
function cross(out, a, b) {
  var ax = a[0],
      ay = a[1],
      az = a[2];
  var bx = b[0],
      by = b[1],
      bz = b[2];

  out[0] = ay * bz - az * by;
  out[1] = az * bx - ax * bz;
  out[2] = ax * by - ay * bx;
  return out;
}

/**
 * Performs a linear interpolation between two vec3's
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a the first operand
 * @param {vec3} b the second operand
 * @param {Number} t interpolation amount, in the range [0-1], between the two inputs
 * @returns {vec3} out
 */
function lerp(out, a, b, t) {
  var ax = a[0];
  var ay = a[1];
  var az = a[2];
  out[0] = ax + t * (b[0] - ax);
  out[1] = ay + t * (b[1] - ay);
  out[2] = az + t * (b[2] - az);
  return out;
}

/**
 * Performs a hermite interpolation with two control points
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a the first operand
 * @param {vec3} b the second operand
 * @param {vec3} c the third operand
 * @param {vec3} d the fourth operand
 * @param {Number} t interpolation amount, in the range [0-1], between the two inputs
 * @returns {vec3} out
 */
function hermite(out, a, b, c, d, t) {
  var factorTimes2 = t * t;
  var factor1 = factorTimes2 * (2 * t - 3) + 1;
  var factor2 = factorTimes2 * (t - 2) + t;
  var factor3 = factorTimes2 * (t - 1);
  var factor4 = factorTimes2 * (3 - 2 * t);

  out[0] = a[0] * factor1 + b[0] * factor2 + c[0] * factor3 + d[0] * factor4;
  out[1] = a[1] * factor1 + b[1] * factor2 + c[1] * factor3 + d[1] * factor4;
  out[2] = a[2] * factor1 + b[2] * factor2 + c[2] * factor3 + d[2] * factor4;

  return out;
}

/**
 * Performs a bezier interpolation with two control points
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a the first operand
 * @param {vec3} b the second operand
 * @param {vec3} c the third operand
 * @param {vec3} d the fourth operand
 * @param {Number} t interpolation amount, in the range [0-1], between the two inputs
 * @returns {vec3} out
 */
function bezier(out, a, b, c, d, t) {
  var inverseFactor = 1 - t;
  var inverseFactorTimesTwo = inverseFactor * inverseFactor;
  var factorTimes2 = t * t;
  var factor1 = inverseFactorTimesTwo * inverseFactor;
  var factor2 = 3 * t * inverseFactorTimesTwo;
  var factor3 = 3 * factorTimes2 * inverseFactor;
  var factor4 = factorTimes2 * t;

  out[0] = a[0] * factor1 + b[0] * factor2 + c[0] * factor3 + d[0] * factor4;
  out[1] = a[1] * factor1 + b[1] * factor2 + c[1] * factor3 + d[1] * factor4;
  out[2] = a[2] * factor1 + b[2] * factor2 + c[2] * factor3 + d[2] * factor4;

  return out;
}

/**
 * Generates a random vector with the given scale
 *
 * @param {vec3} out the receiving vector
 * @param {Number} [scale] Length of the resulting vector. If ommitted, a unit vector will be returned
 * @returns {vec3} out
 */
function random(out, scale) {
  scale = scale || 1.0;

  var r = __WEBPACK_IMPORTED_MODULE_0__common_js__["c" /* RANDOM */]() * 2.0 * Math.PI;
  var z = __WEBPACK_IMPORTED_MODULE_0__common_js__["c" /* RANDOM */]() * 2.0 - 1.0;
  var zScale = Math.sqrt(1.0 - z * z) * scale;

  out[0] = Math.cos(r) * zScale;
  out[1] = Math.sin(r) * zScale;
  out[2] = z * scale;
  return out;
}

/**
 * Transforms the vec3 with a mat4.
 * 4th vector component is implicitly '1'
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a the vector to transform
 * @param {mat4} m matrix to transform with
 * @returns {vec3} out
 */
function transformMat4(out, a, m) {
  var x = a[0],
      y = a[1],
      z = a[2];
  var w = m[3] * x + m[7] * y + m[11] * z + m[15];
  w = w || 1.0;
  out[0] = (m[0] * x + m[4] * y + m[8] * z + m[12]) / w;
  out[1] = (m[1] * x + m[5] * y + m[9] * z + m[13]) / w;
  out[2] = (m[2] * x + m[6] * y + m[10] * z + m[14]) / w;
  return out;
}

/**
 * Transforms the vec3 with a mat3.
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a the vector to transform
 * @param {mat3} m the 3x3 matrix to transform with
 * @returns {vec3} out
 */
function transformMat3(out, a, m) {
  var x = a[0],
      y = a[1],
      z = a[2];
  out[0] = x * m[0] + y * m[3] + z * m[6];
  out[1] = x * m[1] + y * m[4] + z * m[7];
  out[2] = x * m[2] + y * m[5] + z * m[8];
  return out;
}

/**
 * Transforms the vec3 with a quat
 * Can also be used for dual quaternions. (Multiply it with the real part)
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a the vector to transform
 * @param {quat} q quaternion to transform with
 * @returns {vec3} out
 */
function transformQuat(out, a, q) {
  // benchmarks: https://jsperf.com/quaternion-transform-vec3-implementations-fixed
  var qx = q[0],
      qy = q[1],
      qz = q[2],
      qw = q[3];
  var x = a[0],
      y = a[1],
      z = a[2];
  // var qvec = [qx, qy, qz];
  // var uv = vec3.cross([], qvec, a);
  var uvx = qy * z - qz * y,
      uvy = qz * x - qx * z,
      uvz = qx * y - qy * x;
  // var uuv = vec3.cross([], qvec, uv);
  var uuvx = qy * uvz - qz * uvy,
      uuvy = qz * uvx - qx * uvz,
      uuvz = qx * uvy - qy * uvx;
  // vec3.scale(uv, uv, 2 * w);
  var w2 = qw * 2;
  uvx *= w2;
  uvy *= w2;
  uvz *= w2;
  // vec3.scale(uuv, uuv, 2);
  uuvx *= 2;
  uuvy *= 2;
  uuvz *= 2;
  // return vec3.add(out, a, vec3.add(out, uv, uuv));
  out[0] = x + uvx + uuvx;
  out[1] = y + uvy + uuvy;
  out[2] = z + uvz + uuvz;
  return out;
}

/**
 * Rotate a 3D vector around the x-axis
 * @param {vec3} out The receiving vec3
 * @param {vec3} a The vec3 point to rotate
 * @param {vec3} b The origin of the rotation
 * @param {Number} c The angle of rotation
 * @returns {vec3} out
 */
function rotateX(out, a, b, c) {
  var p = [],
      r = [];
  //Translate point to the origin
  p[0] = a[0] - b[0];
  p[1] = a[1] - b[1];
  p[2] = a[2] - b[2];

  //perform rotation
  r[0] = p[0];
  r[1] = p[1] * Math.cos(c) - p[2] * Math.sin(c);
  r[2] = p[1] * Math.sin(c) + p[2] * Math.cos(c);

  //translate to correct position
  out[0] = r[0] + b[0];
  out[1] = r[1] + b[1];
  out[2] = r[2] + b[2];

  return out;
}

/**
 * Rotate a 3D vector around the y-axis
 * @param {vec3} out The receiving vec3
 * @param {vec3} a The vec3 point to rotate
 * @param {vec3} b The origin of the rotation
 * @param {Number} c The angle of rotation
 * @returns {vec3} out
 */
function rotateY(out, a, b, c) {
  var p = [],
      r = [];
  //Translate point to the origin
  p[0] = a[0] - b[0];
  p[1] = a[1] - b[1];
  p[2] = a[2] - b[2];

  //perform rotation
  r[0] = p[2] * Math.sin(c) + p[0] * Math.cos(c);
  r[1] = p[1];
  r[2] = p[2] * Math.cos(c) - p[0] * Math.sin(c);

  //translate to correct position
  out[0] = r[0] + b[0];
  out[1] = r[1] + b[1];
  out[2] = r[2] + b[2];

  return out;
}

/**
 * Rotate a 3D vector around the z-axis
 * @param {vec3} out The receiving vec3
 * @param {vec3} a The vec3 point to rotate
 * @param {vec3} b The origin of the rotation
 * @param {Number} c The angle of rotation
 * @returns {vec3} out
 */
function rotateZ(out, a, b, c) {
  var p = [],
      r = [];
  //Translate point to the origin
  p[0] = a[0] - b[0];
  p[1] = a[1] - b[1];
  p[2] = a[2] - b[2];

  //perform rotation
  r[0] = p[0] * Math.cos(c) - p[1] * Math.sin(c);
  r[1] = p[0] * Math.sin(c) + p[1] * Math.cos(c);
  r[2] = p[2];

  //translate to correct position
  out[0] = r[0] + b[0];
  out[1] = r[1] + b[1];
  out[2] = r[2] + b[2];

  return out;
}

/**
 * Get the angle between two 3D vectors
 * @param {vec3} a The first operand
 * @param {vec3} b The second operand
 * @returns {Number} The angle in radians
 */
function angle(a, b) {
  var tempA = fromValues(a[0], a[1], a[2]);
  var tempB = fromValues(b[0], b[1], b[2]);

  normalize(tempA, tempA);
  normalize(tempB, tempB);

  var cosine = dot(tempA, tempB);

  if (cosine > 1.0) {
    return 0;
  } else if (cosine < -1.0) {
    return Math.PI;
  } else {
    return Math.acos(cosine);
  }
}

/**
 * Returns a string representation of a vector
 *
 * @param {vec3} a vector to represent as a string
 * @returns {String} string representation of the vector
 */
function str(a) {
  return 'vec3(' + a[0] + ', ' + a[1] + ', ' + a[2] + ')';
}

/**
 * Returns whether or not the vectors have exactly the same elements in the same position (when compared with ===)
 *
 * @param {vec3} a The first vector.
 * @param {vec3} b The second vector.
 * @returns {Boolean} True if the vectors are equal, false otherwise.
 */
function exactEquals(a, b) {
  return a[0] === b[0] && a[1] === b[1] && a[2] === b[2];
}

/**
 * Returns whether or not the vectors have approximately the same elements in the same position.
 *
 * @param {vec3} a The first vector.
 * @param {vec3} b The second vector.
 * @returns {Boolean} True if the vectors are equal, false otherwise.
 */
function equals(a, b) {
  var a0 = a[0],
      a1 = a[1],
      a2 = a[2];
  var b0 = b[0],
      b1 = b[1],
      b2 = b[2];
  return Math.abs(a0 - b0) <= __WEBPACK_IMPORTED_MODULE_0__common_js__["b" /* EPSILON */] * Math.max(1.0, Math.abs(a0), Math.abs(b0)) && Math.abs(a1 - b1) <= __WEBPACK_IMPORTED_MODULE_0__common_js__["b" /* EPSILON */] * Math.max(1.0, Math.abs(a1), Math.abs(b1)) && Math.abs(a2 - b2) <= __WEBPACK_IMPORTED_MODULE_0__common_js__["b" /* EPSILON */] * Math.max(1.0, Math.abs(a2), Math.abs(b2));
}

/**
 * Alias for {@link vec3.subtract}
 * @function
 */
var sub = subtract;

/**
 * Alias for {@link vec3.multiply}
 * @function
 */
var mul = multiply;

/**
 * Alias for {@link vec3.divide}
 * @function
 */
var div = divide;

/**
 * Alias for {@link vec3.distance}
 * @function
 */
var dist = distance;

/**
 * Alias for {@link vec3.squaredDistance}
 * @function
 */
var sqrDist = squaredDistance;

/**
 * Alias for {@link vec3.length}
 * @function
 */
var len = length;

/**
 * Alias for {@link vec3.squaredLength}
 * @function
 */
var sqrLen = squaredLength;

/**
 * Perform some operation over an array of vec3s.
 *
 * @param {Array} a the array of vectors to iterate over
 * @param {Number} stride Number of elements between the start of each vec3. If 0 assumes tightly packed
 * @param {Number} offset Number of elements to skip at the beginning of the array
 * @param {Number} count Number of vec3s to iterate over. If 0 iterates over entire array
 * @param {Function} fn Function to call for each vector in the array
 * @param {Object} [arg] additional argument to pass to fn
 * @returns {Array} a
 * @function
 */
var forEach = function () {
  var vec = create();

  return function (a, stride, offset, count, fn, arg) {
    var i = void 0,
        l = void 0;
    if (!stride) {
      stride = 3;
    }

    if (!offset) {
      offset = 0;
    }

    if (count) {
      l = Math.min(count * stride + offset, a.length);
    } else {
      l = a.length;
    }

    for (i = offset; i < l; i += stride) {
      vec[0] = a[i];vec[1] = a[i + 1];vec[2] = a[i + 2];
      fn(vec, vec, arg);
      a[i] = vec[0];a[i + 1] = vec[1];a[i + 2] = vec[2];
    }

    return a;
  };
}();

/***/ }),
/* 21 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (immutable) */ __webpack_exports__["create"] = create;
/* harmony export (immutable) */ __webpack_exports__["clone"] = clone;
/* harmony export (immutable) */ __webpack_exports__["fromValues"] = fromValues;
/* harmony export (immutable) */ __webpack_exports__["copy"] = copy;
/* harmony export (immutable) */ __webpack_exports__["set"] = set;
/* harmony export (immutable) */ __webpack_exports__["add"] = add;
/* harmony export (immutable) */ __webpack_exports__["subtract"] = subtract;
/* harmony export (immutable) */ __webpack_exports__["multiply"] = multiply;
/* harmony export (immutable) */ __webpack_exports__["divide"] = divide;
/* harmony export (immutable) */ __webpack_exports__["ceil"] = ceil;
/* harmony export (immutable) */ __webpack_exports__["floor"] = floor;
/* harmony export (immutable) */ __webpack_exports__["min"] = min;
/* harmony export (immutable) */ __webpack_exports__["max"] = max;
/* harmony export (immutable) */ __webpack_exports__["round"] = round;
/* harmony export (immutable) */ __webpack_exports__["scale"] = scale;
/* harmony export (immutable) */ __webpack_exports__["scaleAndAdd"] = scaleAndAdd;
/* harmony export (immutable) */ __webpack_exports__["distance"] = distance;
/* harmony export (immutable) */ __webpack_exports__["squaredDistance"] = squaredDistance;
/* harmony export (immutable) */ __webpack_exports__["length"] = length;
/* harmony export (immutable) */ __webpack_exports__["squaredLength"] = squaredLength;
/* harmony export (immutable) */ __webpack_exports__["negate"] = negate;
/* harmony export (immutable) */ __webpack_exports__["inverse"] = inverse;
/* harmony export (immutable) */ __webpack_exports__["normalize"] = normalize;
/* harmony export (immutable) */ __webpack_exports__["dot"] = dot;
/* harmony export (immutable) */ __webpack_exports__["lerp"] = lerp;
/* harmony export (immutable) */ __webpack_exports__["random"] = random;
/* harmony export (immutable) */ __webpack_exports__["transformMat4"] = transformMat4;
/* harmony export (immutable) */ __webpack_exports__["transformQuat"] = transformQuat;
/* harmony export (immutable) */ __webpack_exports__["str"] = str;
/* harmony export (immutable) */ __webpack_exports__["exactEquals"] = exactEquals;
/* harmony export (immutable) */ __webpack_exports__["equals"] = equals;
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sub", function() { return sub; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mul", function() { return mul; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "div", function() { return div; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dist", function() { return dist; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sqrDist", function() { return sqrDist; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "len", function() { return len; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sqrLen", function() { return sqrLen; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "forEach", function() { return forEach; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__common_js__ = __webpack_require__(2);


/**
 * 4 Dimensional Vector
 * @module vec4
 */

/**
 * Creates a new, empty vec4
 *
 * @returns {vec4} a new 4D vector
 */
function create() {
  var out = new __WEBPACK_IMPORTED_MODULE_0__common_js__["a" /* ARRAY_TYPE */](4);
  if (__WEBPACK_IMPORTED_MODULE_0__common_js__["a" /* ARRAY_TYPE */] != Float32Array) {
    out[0] = 0;
    out[1] = 0;
    out[2] = 0;
    out[3] = 0;
  }
  return out;
}

/**
 * Creates a new vec4 initialized with values from an existing vector
 *
 * @param {vec4} a vector to clone
 * @returns {vec4} a new 4D vector
 */
function clone(a) {
  var out = new __WEBPACK_IMPORTED_MODULE_0__common_js__["a" /* ARRAY_TYPE */](4);
  out[0] = a[0];
  out[1] = a[1];
  out[2] = a[2];
  out[3] = a[3];
  return out;
}

/**
 * Creates a new vec4 initialized with the given values
 *
 * @param {Number} x X component
 * @param {Number} y Y component
 * @param {Number} z Z component
 * @param {Number} w W component
 * @returns {vec4} a new 4D vector
 */
function fromValues(x, y, z, w) {
  var out = new __WEBPACK_IMPORTED_MODULE_0__common_js__["a" /* ARRAY_TYPE */](4);
  out[0] = x;
  out[1] = y;
  out[2] = z;
  out[3] = w;
  return out;
}

/**
 * Copy the values from one vec4 to another
 *
 * @param {vec4} out the receiving vector
 * @param {vec4} a the source vector
 * @returns {vec4} out
 */
function copy(out, a) {
  out[0] = a[0];
  out[1] = a[1];
  out[2] = a[2];
  out[3] = a[3];
  return out;
}

/**
 * Set the components of a vec4 to the given values
 *
 * @param {vec4} out the receiving vector
 * @param {Number} x X component
 * @param {Number} y Y component
 * @param {Number} z Z component
 * @param {Number} w W component
 * @returns {vec4} out
 */
function set(out, x, y, z, w) {
  out[0] = x;
  out[1] = y;
  out[2] = z;
  out[3] = w;
  return out;
}

/**
 * Adds two vec4's
 *
 * @param {vec4} out the receiving vector
 * @param {vec4} a the first operand
 * @param {vec4} b the second operand
 * @returns {vec4} out
 */
function add(out, a, b) {
  out[0] = a[0] + b[0];
  out[1] = a[1] + b[1];
  out[2] = a[2] + b[2];
  out[3] = a[3] + b[3];
  return out;
}

/**
 * Subtracts vector b from vector a
 *
 * @param {vec4} out the receiving vector
 * @param {vec4} a the first operand
 * @param {vec4} b the second operand
 * @returns {vec4} out
 */
function subtract(out, a, b) {
  out[0] = a[0] - b[0];
  out[1] = a[1] - b[1];
  out[2] = a[2] - b[2];
  out[3] = a[3] - b[3];
  return out;
}

/**
 * Multiplies two vec4's
 *
 * @param {vec4} out the receiving vector
 * @param {vec4} a the first operand
 * @param {vec4} b the second operand
 * @returns {vec4} out
 */
function multiply(out, a, b) {
  out[0] = a[0] * b[0];
  out[1] = a[1] * b[1];
  out[2] = a[2] * b[2];
  out[3] = a[3] * b[3];
  return out;
}

/**
 * Divides two vec4's
 *
 * @param {vec4} out the receiving vector
 * @param {vec4} a the first operand
 * @param {vec4} b the second operand
 * @returns {vec4} out
 */
function divide(out, a, b) {
  out[0] = a[0] / b[0];
  out[1] = a[1] / b[1];
  out[2] = a[2] / b[2];
  out[3] = a[3] / b[3];
  return out;
}

/**
 * Math.ceil the components of a vec4
 *
 * @param {vec4} out the receiving vector
 * @param {vec4} a vector to ceil
 * @returns {vec4} out
 */
function ceil(out, a) {
  out[0] = Math.ceil(a[0]);
  out[1] = Math.ceil(a[1]);
  out[2] = Math.ceil(a[2]);
  out[3] = Math.ceil(a[3]);
  return out;
}

/**
 * Math.floor the components of a vec4
 *
 * @param {vec4} out the receiving vector
 * @param {vec4} a vector to floor
 * @returns {vec4} out
 */
function floor(out, a) {
  out[0] = Math.floor(a[0]);
  out[1] = Math.floor(a[1]);
  out[2] = Math.floor(a[2]);
  out[3] = Math.floor(a[3]);
  return out;
}

/**
 * Returns the minimum of two vec4's
 *
 * @param {vec4} out the receiving vector
 * @param {vec4} a the first operand
 * @param {vec4} b the second operand
 * @returns {vec4} out
 */
function min(out, a, b) {
  out[0] = Math.min(a[0], b[0]);
  out[1] = Math.min(a[1], b[1]);
  out[2] = Math.min(a[2], b[2]);
  out[3] = Math.min(a[3], b[3]);
  return out;
}

/**
 * Returns the maximum of two vec4's
 *
 * @param {vec4} out the receiving vector
 * @param {vec4} a the first operand
 * @param {vec4} b the second operand
 * @returns {vec4} out
 */
function max(out, a, b) {
  out[0] = Math.max(a[0], b[0]);
  out[1] = Math.max(a[1], b[1]);
  out[2] = Math.max(a[2], b[2]);
  out[3] = Math.max(a[3], b[3]);
  return out;
}

/**
 * Math.round the components of a vec4
 *
 * @param {vec4} out the receiving vector
 * @param {vec4} a vector to round
 * @returns {vec4} out
 */
function round(out, a) {
  out[0] = Math.round(a[0]);
  out[1] = Math.round(a[1]);
  out[2] = Math.round(a[2]);
  out[3] = Math.round(a[3]);
  return out;
}

/**
 * Scales a vec4 by a scalar number
 *
 * @param {vec4} out the receiving vector
 * @param {vec4} a the vector to scale
 * @param {Number} b amount to scale the vector by
 * @returns {vec4} out
 */
function scale(out, a, b) {
  out[0] = a[0] * b;
  out[1] = a[1] * b;
  out[2] = a[2] * b;
  out[3] = a[3] * b;
  return out;
}

/**
 * Adds two vec4's after scaling the second operand by a scalar value
 *
 * @param {vec4} out the receiving vector
 * @param {vec4} a the first operand
 * @param {vec4} b the second operand
 * @param {Number} scale the amount to scale b by before adding
 * @returns {vec4} out
 */
function scaleAndAdd(out, a, b, scale) {
  out[0] = a[0] + b[0] * scale;
  out[1] = a[1] + b[1] * scale;
  out[2] = a[2] + b[2] * scale;
  out[3] = a[3] + b[3] * scale;
  return out;
}

/**
 * Calculates the euclidian distance between two vec4's
 *
 * @param {vec4} a the first operand
 * @param {vec4} b the second operand
 * @returns {Number} distance between a and b
 */
function distance(a, b) {
  var x = b[0] - a[0];
  var y = b[1] - a[1];
  var z = b[2] - a[2];
  var w = b[3] - a[3];
  return Math.sqrt(x * x + y * y + z * z + w * w);
}

/**
 * Calculates the squared euclidian distance between two vec4's
 *
 * @param {vec4} a the first operand
 * @param {vec4} b the second operand
 * @returns {Number} squared distance between a and b
 */
function squaredDistance(a, b) {
  var x = b[0] - a[0];
  var y = b[1] - a[1];
  var z = b[2] - a[2];
  var w = b[3] - a[3];
  return x * x + y * y + z * z + w * w;
}

/**
 * Calculates the length of a vec4
 *
 * @param {vec4} a vector to calculate length of
 * @returns {Number} length of a
 */
function length(a) {
  var x = a[0];
  var y = a[1];
  var z = a[2];
  var w = a[3];
  return Math.sqrt(x * x + y * y + z * z + w * w);
}

/**
 * Calculates the squared length of a vec4
 *
 * @param {vec4} a vector to calculate squared length of
 * @returns {Number} squared length of a
 */
function squaredLength(a) {
  var x = a[0];
  var y = a[1];
  var z = a[2];
  var w = a[3];
  return x * x + y * y + z * z + w * w;
}

/**
 * Negates the components of a vec4
 *
 * @param {vec4} out the receiving vector
 * @param {vec4} a vector to negate
 * @returns {vec4} out
 */
function negate(out, a) {
  out[0] = -a[0];
  out[1] = -a[1];
  out[2] = -a[2];
  out[3] = -a[3];
  return out;
}

/**
 * Returns the inverse of the components of a vec4
 *
 * @param {vec4} out the receiving vector
 * @param {vec4} a vector to invert
 * @returns {vec4} out
 */
function inverse(out, a) {
  out[0] = 1.0 / a[0];
  out[1] = 1.0 / a[1];
  out[2] = 1.0 / a[2];
  out[3] = 1.0 / a[3];
  return out;
}

/**
 * Normalize a vec4
 *
 * @param {vec4} out the receiving vector
 * @param {vec4} a vector to normalize
 * @returns {vec4} out
 */
function normalize(out, a) {
  var x = a[0];
  var y = a[1];
  var z = a[2];
  var w = a[3];
  var len = x * x + y * y + z * z + w * w;
  if (len > 0) {
    len = 1 / Math.sqrt(len);
    out[0] = x * len;
    out[1] = y * len;
    out[2] = z * len;
    out[3] = w * len;
  }
  return out;
}

/**
 * Calculates the dot product of two vec4's
 *
 * @param {vec4} a the first operand
 * @param {vec4} b the second operand
 * @returns {Number} dot product of a and b
 */
function dot(a, b) {
  return a[0] * b[0] + a[1] * b[1] + a[2] * b[2] + a[3] * b[3];
}

/**
 * Performs a linear interpolation between two vec4's
 *
 * @param {vec4} out the receiving vector
 * @param {vec4} a the first operand
 * @param {vec4} b the second operand
 * @param {Number} t interpolation amount, in the range [0-1], between the two inputs
 * @returns {vec4} out
 */
function lerp(out, a, b, t) {
  var ax = a[0];
  var ay = a[1];
  var az = a[2];
  var aw = a[3];
  out[0] = ax + t * (b[0] - ax);
  out[1] = ay + t * (b[1] - ay);
  out[2] = az + t * (b[2] - az);
  out[3] = aw + t * (b[3] - aw);
  return out;
}

/**
 * Generates a random vector with the given scale
 *
 * @param {vec4} out the receiving vector
 * @param {Number} [scale] Length of the resulting vector. If ommitted, a unit vector will be returned
 * @returns {vec4} out
 */
function random(out, scale) {
  scale = scale || 1.0;

  // Marsaglia, George. Choosing a Point from the Surface of a
  // Sphere. Ann. Math. Statist. 43 (1972), no. 2, 645--646.
  // http://projecteuclid.org/euclid.aoms/1177692644;
  var v1, v2, v3, v4;
  var s1, s2;
  do {
    v1 = __WEBPACK_IMPORTED_MODULE_0__common_js__["c" /* RANDOM */]() * 2 - 1;
    v2 = __WEBPACK_IMPORTED_MODULE_0__common_js__["c" /* RANDOM */]() * 2 - 1;
    s1 = v1 * v1 + v2 * v2;
  } while (s1 >= 1);
  do {
    v3 = __WEBPACK_IMPORTED_MODULE_0__common_js__["c" /* RANDOM */]() * 2 - 1;
    v4 = __WEBPACK_IMPORTED_MODULE_0__common_js__["c" /* RANDOM */]() * 2 - 1;
    s2 = v3 * v3 + v4 * v4;
  } while (s2 >= 1);

  var d = Math.sqrt((1 - s1) / s2);
  out[0] = scale * v1;
  out[1] = scale * v2;
  out[2] = scale * v3 * d;
  out[3] = scale * v4 * d;
  return out;
}

/**
 * Transforms the vec4 with a mat4.
 *
 * @param {vec4} out the receiving vector
 * @param {vec4} a the vector to transform
 * @param {mat4} m matrix to transform with
 * @returns {vec4} out
 */
function transformMat4(out, a, m) {
  var x = a[0],
      y = a[1],
      z = a[2],
      w = a[3];
  out[0] = m[0] * x + m[4] * y + m[8] * z + m[12] * w;
  out[1] = m[1] * x + m[5] * y + m[9] * z + m[13] * w;
  out[2] = m[2] * x + m[6] * y + m[10] * z + m[14] * w;
  out[3] = m[3] * x + m[7] * y + m[11] * z + m[15] * w;
  return out;
}

/**
 * Transforms the vec4 with a quat
 *
 * @param {vec4} out the receiving vector
 * @param {vec4} a the vector to transform
 * @param {quat} q quaternion to transform with
 * @returns {vec4} out
 */
function transformQuat(out, a, q) {
  var x = a[0],
      y = a[1],
      z = a[2];
  var qx = q[0],
      qy = q[1],
      qz = q[2],
      qw = q[3];

  // calculate quat * vec
  var ix = qw * x + qy * z - qz * y;
  var iy = qw * y + qz * x - qx * z;
  var iz = qw * z + qx * y - qy * x;
  var iw = -qx * x - qy * y - qz * z;

  // calculate result * inverse quat
  out[0] = ix * qw + iw * -qx + iy * -qz - iz * -qy;
  out[1] = iy * qw + iw * -qy + iz * -qx - ix * -qz;
  out[2] = iz * qw + iw * -qz + ix * -qy - iy * -qx;
  out[3] = a[3];
  return out;
}

/**
 * Returns a string representation of a vector
 *
 * @param {vec4} a vector to represent as a string
 * @returns {String} string representation of the vector
 */
function str(a) {
  return 'vec4(' + a[0] + ', ' + a[1] + ', ' + a[2] + ', ' + a[3] + ')';
}

/**
 * Returns whether or not the vectors have exactly the same elements in the same position (when compared with ===)
 *
 * @param {vec4} a The first vector.
 * @param {vec4} b The second vector.
 * @returns {Boolean} True if the vectors are equal, false otherwise.
 */
function exactEquals(a, b) {
  return a[0] === b[0] && a[1] === b[1] && a[2] === b[2] && a[3] === b[3];
}

/**
 * Returns whether or not the vectors have approximately the same elements in the same position.
 *
 * @param {vec4} a The first vector.
 * @param {vec4} b The second vector.
 * @returns {Boolean} True if the vectors are equal, false otherwise.
 */
function equals(a, b) {
  var a0 = a[0],
      a1 = a[1],
      a2 = a[2],
      a3 = a[3];
  var b0 = b[0],
      b1 = b[1],
      b2 = b[2],
      b3 = b[3];
  return Math.abs(a0 - b0) <= __WEBPACK_IMPORTED_MODULE_0__common_js__["b" /* EPSILON */] * Math.max(1.0, Math.abs(a0), Math.abs(b0)) && Math.abs(a1 - b1) <= __WEBPACK_IMPORTED_MODULE_0__common_js__["b" /* EPSILON */] * Math.max(1.0, Math.abs(a1), Math.abs(b1)) && Math.abs(a2 - b2) <= __WEBPACK_IMPORTED_MODULE_0__common_js__["b" /* EPSILON */] * Math.max(1.0, Math.abs(a2), Math.abs(b2)) && Math.abs(a3 - b3) <= __WEBPACK_IMPORTED_MODULE_0__common_js__["b" /* EPSILON */] * Math.max(1.0, Math.abs(a3), Math.abs(b3));
}

/**
 * Alias for {@link vec4.subtract}
 * @function
 */
var sub = subtract;

/**
 * Alias for {@link vec4.multiply}
 * @function
 */
var mul = multiply;

/**
 * Alias for {@link vec4.divide}
 * @function
 */
var div = divide;

/**
 * Alias for {@link vec4.distance}
 * @function
 */
var dist = distance;

/**
 * Alias for {@link vec4.squaredDistance}
 * @function
 */
var sqrDist = squaredDistance;

/**
 * Alias for {@link vec4.length}
 * @function
 */
var len = length;

/**
 * Alias for {@link vec4.squaredLength}
 * @function
 */
var sqrLen = squaredLength;

/**
 * Perform some operation over an array of vec4s.
 *
 * @param {Array} a the array of vectors to iterate over
 * @param {Number} stride Number of elements between the start of each vec4. If 0 assumes tightly packed
 * @param {Number} offset Number of elements to skip at the beginning of the array
 * @param {Number} count Number of vec4s to iterate over. If 0 iterates over entire array
 * @param {Function} fn Function to call for each vector in the array
 * @param {Object} [arg] additional argument to pass to fn
 * @returns {Array} a
 * @function
 */
var forEach = function () {
  var vec = create();

  return function (a, stride, offset, count, fn, arg) {
    var i = void 0,
        l = void 0;
    if (!stride) {
      stride = 4;
    }

    if (!offset) {
      offset = 0;
    }

    if (count) {
      l = Math.min(count * stride + offset, a.length);
    } else {
      l = a.length;
    }

    for (i = offset; i < l; i += stride) {
      vec[0] = a[i];vec[1] = a[i + 1];vec[2] = a[i + 2];vec[3] = a[i + 3];
      fn(vec, vec, arg);
      a[i] = vec[0];a[i + 1] = vec[1];a[i + 2] = vec[2];a[i + 3] = vec[3];
    }

    return a;
  };
}();

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = createFilteredVector

var cubicHermite = __webpack_require__(55)
var bsearch = __webpack_require__(23)

function clamp(lo, hi, x) {
  return Math.min(hi, Math.max(lo, x))
}

function FilteredVector(state0, velocity0, t0) {
  this.dimension  = state0.length
  this.bounds     = [ new Array(this.dimension), new Array(this.dimension) ]
  for(var i=0; i<this.dimension; ++i) {
    this.bounds[0][i] = -Infinity
    this.bounds[1][i] = Infinity
  }
  this._state     = state0.slice().reverse()
  this._velocity  = velocity0.slice().reverse()
  this._time      = [ t0 ]
  this._scratch   = [ state0.slice(), state0.slice(), state0.slice(), state0.slice(), state0.slice() ]
}

var proto = FilteredVector.prototype

proto.flush = function(t) {
  var idx = bsearch.gt(this._time, t) - 1
  if(idx <= 0) {
    return
  }
  this._time.splice(0, idx)
  this._state.splice(0, idx * this.dimension)
  this._velocity.splice(0, idx * this.dimension)
}

proto.curve = function(t) {
  var time      = this._time
  var n         = time.length
  var idx       = bsearch.le(time, t)
  var result    = this._scratch[0]
  var state     = this._state
  var velocity  = this._velocity
  var d         = this.dimension
  var bounds    = this.bounds
  if(idx < 0) {
    var ptr = d-1
    for(var i=0; i<d; ++i, --ptr) {
      result[i] = state[ptr]
    }
  } else if(idx >= n-1) {
    var ptr = state.length-1
    var tf = t - time[n-1]
    for(var i=0; i<d; ++i, --ptr) {
      result[i] = state[ptr] + tf * velocity[ptr]
    }
  } else {
    var ptr = d * (idx+1) - 1
    var t0  = time[idx]
    var t1  = time[idx+1]
    var dt  = (t1 - t0) || 1.0
    var x0  = this._scratch[1]
    var x1  = this._scratch[2]
    var v0  = this._scratch[3]
    var v1  = this._scratch[4]
    var steady = true
    for(var i=0; i<d; ++i, --ptr) {
      x0[i] = state[ptr]
      v0[i] = velocity[ptr] * dt
      x1[i] = state[ptr+d]
      v1[i] = velocity[ptr+d] * dt
      steady = steady && (x0[i] === x1[i] && v0[i] === v1[i] && v0[i] === 0.0)
    }
    if(steady) {
      for(var i=0; i<d; ++i) {
        result[i] = x0[i]
      }
    } else {
      cubicHermite(x0, v0, x1, v1, (t-t0)/dt, result)
    }
  }
  var lo = bounds[0]
  var hi = bounds[1]
  for(var i=0; i<d; ++i) {
    result[i] = clamp(lo[i], hi[i], result[i])
  }
  return result
}

proto.dcurve = function(t) {
  var time     = this._time
  var n        = time.length
  var idx      = bsearch.le(time, t)
  var result   = this._scratch[0]
  var state    = this._state
  var velocity = this._velocity
  var d        = this.dimension
  if(idx >= n-1) {
    var ptr = state.length-1
    var tf = t - time[n-1]
    for(var i=0; i<d; ++i, --ptr) {
      result[i] = velocity[ptr]
    }
  } else {
    var ptr = d * (idx+1) - 1
    var t0 = time[idx]
    var t1 = time[idx+1]
    var dt = (t1 - t0) || 1.0
    var x0 = this._scratch[1]
    var x1 = this._scratch[2]
    var v0 = this._scratch[3]
    var v1 = this._scratch[4]
    var steady = true
    for(var i=0; i<d; ++i, --ptr) {
      x0[i] = state[ptr]
      v0[i] = velocity[ptr] * dt
      x1[i] = state[ptr+d]
      v1[i] = velocity[ptr+d] * dt
      steady = steady && (x0[i] === x1[i] && v0[i] === v1[i] && v0[i] === 0.0)
    }
    if(steady) {
      for(var i=0; i<d; ++i) {
        result[i] = 0.0
      }
    } else {
      cubicHermite.derivative(x0, v0, x1, v1, (t-t0)/dt, result)
      for(var i=0; i<d; ++i) {
        result[i] /= dt
      }
    }
  }
  return result
}

proto.lastT = function() {
  var time = this._time
  return time[time.length-1]
}

proto.stable = function() {
  var velocity = this._velocity
  var ptr = velocity.length
  for(var i=this.dimension-1; i>=0; --i) {
    if(velocity[--ptr]) {
      return false
    }
  }
  return true
}

proto.jump = function(t) {
  var t0 = this.lastT()
  var d  = this.dimension
  if(t < t0 || arguments.length !== d+1) {
    return
  }
  var state     = this._state
  var velocity  = this._velocity
  var ptr       = state.length-this.dimension
  var bounds    = this.bounds
  var lo        = bounds[0]
  var hi        = bounds[1]
  this._time.push(t0, t)
  for(var j=0; j<2; ++j) {
    for(var i=0; i<d; ++i) {
      state.push(state[ptr++])
      velocity.push(0)
    }
  }
  this._time.push(t)
  for(var i=d; i>0; --i) {
    state.push(clamp(lo[i-1], hi[i-1], arguments[i]))
    velocity.push(0)
  }
}

proto.push = function(t) {
  var t0 = this.lastT()
  var d  = this.dimension
  if(t < t0 || arguments.length !== d+1) {
    return
  }
  var state     = this._state
  var velocity  = this._velocity
  var ptr       = state.length-this.dimension
  var dt        = t - t0
  var bounds    = this.bounds
  var lo        = bounds[0]
  var hi        = bounds[1]
  var sf        = (dt > 1e-6) ? 1/dt : 0
  this._time.push(t)
  for(var i=d; i>0; --i) {
    var xc = clamp(lo[i-1], hi[i-1], arguments[i])
    state.push(xc)
    velocity.push((xc - state[ptr++]) * sf)
  }
}

proto.set = function(t) {
  var d = this.dimension
  if(t < this.lastT() || arguments.length !== d+1) {
    return
  }
  var state     = this._state
  var velocity  = this._velocity
  var bounds    = this.bounds
  var lo        = bounds[0]
  var hi        = bounds[1]
  this._time.push(t)
  for(var i=d; i>0; --i) {
    state.push(clamp(lo[i-1], hi[i-1], arguments[i]))
    velocity.push(0)
  }
}

proto.move = function(t) {
  var t0 = this.lastT()
  var d  = this.dimension
  if(t <= t0 || arguments.length !== d+1) {
    return
  }
  var state    = this._state
  var velocity = this._velocity
  var statePtr = state.length - this.dimension
  var bounds   = this.bounds
  var lo       = bounds[0]
  var hi       = bounds[1]
  var dt       = t - t0
  var sf       = (dt > 1e-6) ? 1/dt : 0.0
  this._time.push(t)
  for(var i=d; i>0; --i) {
    var dx = arguments[i]
    state.push(clamp(lo[i-1], hi[i-1], state[statePtr++] + dx))
    velocity.push(dx * sf)
  }
}

proto.idle = function(t) {
  var t0 = this.lastT()
  if(t < t0) {
    return
  }
  var d        = this.dimension
  var state    = this._state
  var velocity = this._velocity
  var statePtr = state.length-d
  var bounds   = this.bounds
  var lo       = bounds[0]
  var hi       = bounds[1]
  var dt       = t - t0
  this._time.push(t)
  for(var i=d-1; i>=0; --i) {
    state.push(clamp(lo[i], hi[i], state[statePtr] + dt * velocity[statePtr]))
    velocity.push(0)
    statePtr += 1
  }
}

function getZero(d) {
  var result = new Array(d)
  for(var i=0; i<d; ++i) {
    result[i] = 0.0
  }
  return result
}

function createFilteredVector(initState, initVelocity, initTime) {
  switch(arguments.length) {
    case 0:
      return new FilteredVector([0], [0], 0)
    case 1:
      if(typeof initState === 'number') {
        var zero = getZero(initState)
        return new FilteredVector(zero, zero, 0)
      } else {
        return new FilteredVector(initState, getZero(initState.length), 0)
      }
    case 2:
      if(typeof initVelocity === 'number') {
        var zero = getZero(initState.length)
        return new FilteredVector(initState, zero, +initVelocity)
      } else {
        initTime = 0
      }
    case 3:
      if(initState.length !== initVelocity.length) {
        throw new Error('state and velocity lengths must match')
      }
      return new FilteredVector(initState, initVelocity, initTime)
  }
}


/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function compileSearch(funcName, predicate, reversed, extraArgs, useNdarray, earlyOut) {
  var code = [
    "function ", funcName, "(a,l,h,", extraArgs.join(","),  "){",
earlyOut ? "" : "var i=", (reversed ? "l-1" : "h+1"),
";while(l<=h){\
var m=(l+h)>>>1,x=a", useNdarray ? ".get(m)" : "[m]"]
  if(earlyOut) {
    if(predicate.indexOf("c") < 0) {
      code.push(";if(x===y){return m}else if(x<=y){")
    } else {
      code.push(";var p=c(x,y);if(p===0){return m}else if(p<=0){")
    }
  } else {
    code.push(";if(", predicate, "){i=m;")
  }
  if(reversed) {
    code.push("l=m+1}else{h=m-1}")
  } else {
    code.push("h=m-1}else{l=m+1}")
  }
  code.push("}")
  if(earlyOut) {
    code.push("return -1};")
  } else {
    code.push("return i};")
  }
  return code.join("")
}

function compileBoundsSearch(predicate, reversed, suffix, earlyOut) {
  var result = new Function([
  compileSearch("A", "x" + predicate + "y", reversed, ["y"], false, earlyOut),
  compileSearch("B", "x" + predicate + "y", reversed, ["y"], true, earlyOut),
  compileSearch("P", "c(x,y)" + predicate + "0", reversed, ["y", "c"], false, earlyOut),
  compileSearch("Q", "c(x,y)" + predicate + "0", reversed, ["y", "c"], true, earlyOut),
"function dispatchBsearch", suffix, "(a,y,c,l,h){\
if(a.shape){\
if(typeof(c)==='function'){\
return Q(a,(l===undefined)?0:l|0,(h===undefined)?a.shape[0]-1:h|0,y,c)\
}else{\
return B(a,(c===undefined)?0:c|0,(l===undefined)?a.shape[0]-1:l|0,y)\
}}else{\
if(typeof(c)==='function'){\
return P(a,(l===undefined)?0:l|0,(h===undefined)?a.length-1:h|0,y,c)\
}else{\
return A(a,(c===undefined)?0:c|0,(l===undefined)?a.length-1:l|0,y)\
}}}\
return dispatchBsearch", suffix].join(""))
  return result()
}

module.exports = {
  ge: compileBoundsSearch(">=", false, "GE"),
  gt: compileBoundsSearch(">", false, "GT"),
  lt: compileBoundsSearch("<", true, "LT"),
  le: compileBoundsSearch("<=", true, "LE"),
  eq: compileBoundsSearch("-", true, "EQ", true)
}


/***/ }),
/* 24 */
/***/ (function(module, exports) {

module.exports = cross;

/**
 * Computes the cross product of two vec3's
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a the first operand
 * @param {vec3} b the second operand
 * @returns {vec3} out
 */
function cross(out, a, b) {
    var ax = a[0], ay = a[1], az = a[2],
        bx = b[0], by = b[1], bz = b[2]

    out[0] = ay * bz - az * by
    out[1] = az * bx - ax * bz
    out[2] = ax * by - ay * bx
    return out
}

/***/ }),
/* 25 */
/***/ (function(module, exports) {

module.exports = dot;

/**
 * Calculates the dot product of two vec3's
 *
 * @param {vec3} a the first operand
 * @param {vec3} b the second operand
 * @returns {Number} dot product of a and b
 */
function dot(a, b) {
    return a[0] * b[0] + a[1] * b[1] + a[2] * b[2]
}

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

var identity = __webpack_require__(27);

module.exports = lookAt;

/**
 * Generates a look-at matrix with the given eye position, focal point, and up axis
 *
 * @param {mat4} out mat4 frustum matrix will be written into
 * @param {vec3} eye Position of the viewer
 * @param {vec3} center Point the viewer is looking at
 * @param {vec3} up vec3 pointing up
 * @returns {mat4} out
 */
function lookAt(out, eye, center, up) {
    var x0, x1, x2, y0, y1, y2, z0, z1, z2, len,
        eyex = eye[0],
        eyey = eye[1],
        eyez = eye[2],
        upx = up[0],
        upy = up[1],
        upz = up[2],
        centerx = center[0],
        centery = center[1],
        centerz = center[2];

    if (Math.abs(eyex - centerx) < 0.000001 &&
        Math.abs(eyey - centery) < 0.000001 &&
        Math.abs(eyez - centerz) < 0.000001) {
        return identity(out);
    }

    z0 = eyex - centerx;
    z1 = eyey - centery;
    z2 = eyez - centerz;

    len = 1 / Math.sqrt(z0 * z0 + z1 * z1 + z2 * z2);
    z0 *= len;
    z1 *= len;
    z2 *= len;

    x0 = upy * z2 - upz * z1;
    x1 = upz * z0 - upx * z2;
    x2 = upx * z1 - upy * z0;
    len = Math.sqrt(x0 * x0 + x1 * x1 + x2 * x2);
    if (!len) {
        x0 = 0;
        x1 = 0;
        x2 = 0;
    } else {
        len = 1 / len;
        x0 *= len;
        x1 *= len;
        x2 *= len;
    }

    y0 = z1 * x2 - z2 * x1;
    y1 = z2 * x0 - z0 * x2;
    y2 = z0 * x1 - z1 * x0;

    len = Math.sqrt(y0 * y0 + y1 * y1 + y2 * y2);
    if (!len) {
        y0 = 0;
        y1 = 0;
        y2 = 0;
    } else {
        len = 1 / len;
        y0 *= len;
        y1 *= len;
        y2 *= len;
    }

    out[0] = x0;
    out[1] = y0;
    out[2] = z0;
    out[3] = 0;
    out[4] = x1;
    out[5] = y1;
    out[6] = z1;
    out[7] = 0;
    out[8] = x2;
    out[9] = y2;
    out[10] = z2;
    out[11] = 0;
    out[12] = -(x0 * eyex + x1 * eyey + x2 * eyez);
    out[13] = -(y0 * eyex + y1 * eyey + y2 * eyez);
    out[14] = -(z0 * eyex + z1 * eyey + z2 * eyez);
    out[15] = 1;

    return out;
};

/***/ }),
/* 27 */
/***/ (function(module, exports) {

module.exports = identity;

/**
 * Set a mat4 to the identity matrix
 *
 * @param {mat4} out the receiving matrix
 * @returns {mat4} out
 */
function identity(out) {
    out[0] = 1;
    out[1] = 0;
    out[2] = 0;
    out[3] = 0;
    out[4] = 0;
    out[5] = 1;
    out[6] = 0;
    out[7] = 0;
    out[8] = 0;
    out[9] = 0;
    out[10] = 1;
    out[11] = 0;
    out[12] = 0;
    out[13] = 0;
    out[14] = 0;
    out[15] = 1;
    return out;
};

/***/ }),
/* 28 */
/***/ (function(module, exports) {

module.exports = translate;

/**
 * Translate a mat4 by the given vector
 *
 * @param {mat4} out the receiving matrix
 * @param {mat4} a the matrix to translate
 * @param {vec3} v vector to translate by
 * @returns {mat4} out
 */
function translate(out, a, v) {
    var x = v[0], y = v[1], z = v[2],
        a00, a01, a02, a03,
        a10, a11, a12, a13,
        a20, a21, a22, a23;

    if (a === out) {
        out[12] = a[0] * x + a[4] * y + a[8] * z + a[12];
        out[13] = a[1] * x + a[5] * y + a[9] * z + a[13];
        out[14] = a[2] * x + a[6] * y + a[10] * z + a[14];
        out[15] = a[3] * x + a[7] * y + a[11] * z + a[15];
    } else {
        a00 = a[0]; a01 = a[1]; a02 = a[2]; a03 = a[3];
        a10 = a[4]; a11 = a[5]; a12 = a[6]; a13 = a[7];
        a20 = a[8]; a21 = a[9]; a22 = a[10]; a23 = a[11];

        out[0] = a00; out[1] = a01; out[2] = a02; out[3] = a03;
        out[4] = a10; out[5] = a11; out[6] = a12; out[7] = a13;
        out[8] = a20; out[9] = a21; out[10] = a22; out[11] = a23;

        out[12] = a00 * x + a10 * y + a20 * z + a[12];
        out[13] = a01 * x + a11 * y + a21 * z + a[13];
        out[14] = a02 * x + a12 * y + a22 * z + a[14];
        out[15] = a03 * x + a13 * y + a23 * z + a[15];
    }

    return out;
};

/***/ }),
/* 29 */
/***/ (function(module, exports) {

module.exports = create;

/**
 * Creates a new identity mat4
 *
 * @returns {mat4} a new 4x4 matrix
 */
function create() {
    var out = new Float32Array(16);
    out[0] = 1;
    out[1] = 0;
    out[2] = 0;
    out[3] = 0;
    out[4] = 0;
    out[5] = 1;
    out[6] = 0;
    out[7] = 0;
    out[8] = 0;
    out[9] = 0;
    out[10] = 1;
    out[11] = 0;
    out[12] = 0;
    out[13] = 0;
    out[14] = 0;
    out[15] = 1;
    return out;
};

/***/ }),
/* 30 */
/***/ (function(module, exports) {

module.exports = scale;

/**
 * Scales the mat4 by the dimensions in the given vec3
 *
 * @param {mat4} out the receiving matrix
 * @param {mat4} a the matrix to scale
 * @param {vec3} v the vec3 to scale the matrix by
 * @returns {mat4} out
 **/
function scale(out, a, v) {
    var x = v[0], y = v[1], z = v[2];

    out[0] = a[0] * x;
    out[1] = a[1] * x;
    out[2] = a[2] * x;
    out[3] = a[3] * x;
    out[4] = a[4] * y;
    out[5] = a[5] * y;
    out[6] = a[6] * y;
    out[7] = a[7] * y;
    out[8] = a[8] * z;
    out[9] = a[9] * z;
    out[10] = a[10] * z;
    out[11] = a[11] * z;
    out[12] = a[12];
    out[13] = a[13];
    out[14] = a[14];
    out[15] = a[15];
    return out;
};

/***/ }),
/* 31 */
/***/ (function(module, exports) {

module.exports = determinant;

/**
 * Calculates the determinant of a mat4
 *
 * @param {mat4} a the source matrix
 * @returns {Number} determinant of a
 */
function determinant(a) {
    var a00 = a[0], a01 = a[1], a02 = a[2], a03 = a[3],
        a10 = a[4], a11 = a[5], a12 = a[6], a13 = a[7],
        a20 = a[8], a21 = a[9], a22 = a[10], a23 = a[11],
        a30 = a[12], a31 = a[13], a32 = a[14], a33 = a[15],

        b00 = a00 * a11 - a01 * a10,
        b01 = a00 * a12 - a02 * a10,
        b02 = a00 * a13 - a03 * a10,
        b03 = a01 * a12 - a02 * a11,
        b04 = a01 * a13 - a03 * a11,
        b05 = a02 * a13 - a03 * a12,
        b06 = a20 * a31 - a21 * a30,
        b07 = a20 * a32 - a22 * a30,
        b08 = a20 * a33 - a23 * a30,
        b09 = a21 * a32 - a22 * a31,
        b10 = a21 * a33 - a23 * a31,
        b11 = a22 * a33 - a23 * a32;

    // Calculate the determinant
    return b00 * b11 - b01 * b10 + b02 * b09 + b03 * b08 - b04 * b07 + b05 * b06;
};

/***/ }),
/* 32 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__base_draw_rule__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_gl_matrix__ = __webpack_require__(0);


let Prando = __webpack_require__(9).default;
class TurnTowardPopulation extends __WEBPACK_IMPORTED_MODULE_0__base_draw_rule__["a" /* BaseDrawRule */] {
    constructor(options) {
        super(options);
        this.prando = new Prando(options.seed);
        this.terrain = options.terrain;
    }
    draw(turtle, turtleStack, segments, options) {
        //default to the current turtle roll angle
        let maxAngle = this.options.maxTurnAngle;
        let bestDir = turtle.dir;
        let highestSum = this.checkPopulationAtDirection(turtle, turtle.dir);
        //get five random angles to check
        for (let i = 0; i < 5; i++) {
            let newDir = turtle.dir + this.prando.next(0, maxAngle * 2) - maxAngle;
            let sum = this.checkPopulationAtDirection(turtle, newDir);
            if (sum > highestSum) {
                bestDir = newDir;
                highestSum = sum;
            }
        }
        turtle.dir = bestDir;
        return turtle;
    }
    /**
     * Sum the population density from the turtle along points along a ray
     * @param turtle
     * @param angle
     */
    checkPopulationAtDirection(turtle, newDir) {
        let dist = 20;
        let sum = 0;
        for (let i = 1; i < 6; i++) {
            let checkPoint = __WEBPACK_IMPORTED_MODULE_1_gl_matrix__["b" /* vec2 */].create();
            checkPoint[0] = turtle.pos[0] + Math.cos(newDir) * dist;
            checkPoint[1] = turtle.pos[1] + Math.sin(newDir) * dist;
            sum += this.terrain.getPopulationDensity(checkPoint) / i;
        }
        return sum;
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = TurnTowardPopulation;



/***/ }),
/* 33 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__base_draw_rule__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_gl_matrix__ = __webpack_require__(0);


let Prando = __webpack_require__(9).default;
class TurnAwayPopulation extends __WEBPACK_IMPORTED_MODULE_0__base_draw_rule__["a" /* BaseDrawRule */] {
    constructor(options) {
        super(options);
        this.prando = new Prando(options.seed);
        this.terrain = options.terrain;
    }
    draw(turtle, turtleStack, segments, options) {
        //default to the current turtle roll angle
        let maxAngle = Math.PI / 12;
        let bestDir = turtle.dir;
        let lowestSum = this.checkPopulationAtDirection(turtle, turtle.dir);
        //get five random angles to check
        for (let i = 0; i < 5; i++) {
            let newDir = turtle.dir + this.prando.next(0, maxAngle) - maxAngle;
            let sum = this.checkPopulationAtDirection(turtle, newDir);
            if (sum < lowestSum) {
                bestDir = newDir;
                lowestSum = sum;
            }
        }
        turtle.dir = bestDir;
        return turtle;
    }
    /**
     * Sum the population density from the turtle along points along a ray
     * @param turtle
     * @param angle
     */
    checkPopulationAtDirection(turtle, newDir) {
        let dist = 2 / (5 * this.terrain.numPopulationPoints[0]);
        let sum = 0;
        for (let i = 1; i < 6; i++) {
            let checkPoint = __WEBPACK_IMPORTED_MODULE_1_gl_matrix__["b" /* vec2 */].create();
            checkPoint[0] = turtle.pos[0] + Math.cos(newDir) * dist;
            checkPoint[1] = turtle.pos[1] + Math.sin(newDir) * dist;
            if (Math.abs(checkPoint[0]) < 1 && Math.abs(checkPoint[0]) < 1) {
                sum += this.terrain.getPopulationDensity(checkPoint) / i;
            }
        }
        return sum;
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = TurnAwayPopulation;



/***/ }),
/* 34 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__shape__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__block__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_gl_matrix__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__noise_random__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__geometry_Axis__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__standardRoof__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__texture_texture_type__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__turret__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__standardBlock__ = __webpack_require__(106);









class Box extends __WEBPACK_IMPORTED_MODULE_0__shape__["b" /* Shape */] {
    constructor(options) {
        super(options);
        this.symbol = 'B';
        this.terminal = false;
        this.textureType = (typeof options.textureType == 'undefined') ? __WEBPACK_IMPORTED_MODULE_6__texture_texture_type__["a" /* TextureType */].BUILDING : options.textureType;
    }
    getBlocks() {
        return [{
                blockType: __WEBPACK_IMPORTED_MODULE_1__block__["a" /* BlockType */].CUBE,
                footprint: this.footprint,
                pos: this.pos,
                adjustScale1: 1,
                adjustScale2: 1,
                rotation: this.rotation,
                scaleFromCenter: true,
                textureType: this.textureType
            }];
    }
    runReplacement(seed) {
        let type = __WEBPACK_IMPORTED_MODULE_3__noise_random__["a" /* default */].randomInt(13, seed);
        switch (type) {
            case 0: return this.splitX({ percentage: 0.5 });
            case 1: return this.splitY({ percentage: 0.5 });
            case 2: return this.splitZ({ percentage: 0.5 });
            case 3: return this.addRoof(__WEBPACK_IMPORTED_MODULE_1__block__["a" /* BlockType */].SLANT);
            case 4: return this.addRoof(__WEBPACK_IMPORTED_MODULE_1__block__["a" /* BlockType */].TENT);
            case 5: return this.addRoof(__WEBPACK_IMPORTED_MODULE_1__block__["a" /* BlockType */].PYRAMID);
            case 6:
                this.shrinkX({ percentage: 0.20 });
                return [this];
            case 7: return this.taperBoth({ percentage: 0.25 });
            case 8: return this.taperX({ percentage: 0.25 });
            case 9: return this.taperZ({ percentage: 0.25 });
            //  case 10: this.terminal = true; return [this];
            default:
                return this.toTurret();
        }
    }
    addRoof(blockType) {
        let height = Math.min(this.footprint[__WEBPACK_IMPORTED_MODULE_4__geometry_Axis__["a" /* Axis */].X], this.footprint[__WEBPACK_IMPORTED_MODULE_4__geometry_Axis__["a" /* Axis */].Z]);
        let posY = this.pos[1] + 0.5 * this.footprint[1] + 0.5 * height;
        let roof = new __WEBPACK_IMPORTED_MODULE_5__standardRoof__["a" /* StandardRoof */]({
            blockType: blockType,
            pos: __WEBPACK_IMPORTED_MODULE_2_gl_matrix__["c" /* vec3 */].fromValues(this.pos[0], posY, this.pos[2]),
            footprint: __WEBPACK_IMPORTED_MODULE_2_gl_matrix__["c" /* vec3 */].fromValues(this.footprint[0], height, this.footprint[2]),
            rotation: this.rotation
        });
        this.terminal = true;
        return [this, roof];
    }
    taperBoth(shrinkBy) {
        let newBoxes = this.splitY({ percentage: .5 });
        if (newBoxes.length > 1) {
            newBoxes[1].shrinkBoth(shrinkBy);
        }
        return newBoxes;
    }
    taperX(shrinkBy) {
        let newBoxes = this.splitY({ percentage: .5 });
        if (newBoxes.length > 1) {
            newBoxes[1].shrinkX(shrinkBy);
        }
        return newBoxes;
    }
    taperZ(shrinkBy) {
        let newBoxes = this.splitY({ percentage: .5 });
        if (newBoxes.length > 1) {
            newBoxes[1].shrinkZ(shrinkBy);
        }
        return newBoxes;
    }
    toTurret() {
        let newShapes7 = this.splitShape(8, __WEBPACK_IMPORTED_MODULE_4__geometry_Axis__["a" /* Axis */].Y, this.pos, this.footprint, this.rotation);
        //create a base 1/4 the size of the current box
        let base = new Box({
            pos: newShapes7[0].pos,
            footprint: newShapes7[0].footprint,
            rotation: this.rotation
        });
        base.terminal = true;
        let rot = __WEBPACK_IMPORTED_MODULE_2_gl_matrix__["c" /* vec3 */].create();
        __WEBPACK_IMPORTED_MODULE_2_gl_matrix__["c" /* vec3 */].copy(rot, this.rotation);
        if (this.footprint[0] < this.footprint[2]) {
            newShapes7[1].footprint[0] = this.footprint[2];
            newShapes7[1].footprint[2] = this.footprint[0];
            rot[1] += Math.PI / 2;
        }
        let transition = new __WEBPACK_IMPORTED_MODULE_8__standardBlock__["a" /* StandardBlock */]({
            pos: newShapes7[1].pos,
            footprint: newShapes7[1].footprint,
            rotation: rot,
            blockType: __WEBPACK_IMPORTED_MODULE_1__block__["a" /* BlockType */].TENT,
            adjustScale1: 0.5,
            adjustScale2: 1,
            textureType: __WEBPACK_IMPORTED_MODULE_6__texture_texture_type__["a" /* TextureType */].BUILDING
        });
        let turret = new __WEBPACK_IMPORTED_MODULE_7__turret__["a" /* Turret */]({
            pos: newShapes7[4].pos,
            footprint: __WEBPACK_IMPORTED_MODULE_2_gl_matrix__["c" /* vec3 */].fromValues(this.footprint[0], this.footprint[1] * 5 / 7, this.footprint[2]),
            rotation: this.rotation
        });
        return [base, transition, turret];
    }
    splitX(splitAt) { return this.split(__WEBPACK_IMPORTED_MODULE_4__geometry_Axis__["a" /* Axis */].X, splitAt); }
    splitY(splitAt) { return this.split(__WEBPACK_IMPORTED_MODULE_4__geometry_Axis__["a" /* Axis */].Y, splitAt); }
    splitZ(splitAt) { return this.split(__WEBPACK_IMPORTED_MODULE_4__geometry_Axis__["a" /* Axis */].Z, splitAt); }
    split(axis, splitAt) {
        //too small to spit vertically
        if (this.footprint[axis] < 0.4) {
            return [this];
        }
        let offset = __WEBPACK_IMPORTED_MODULE_0__shape__["a" /* NumOptions */].getValue(splitAt, this.footprint[axis] * 0.7, this.footprint[axis] * 0.3);
        let newPos = __WEBPACK_IMPORTED_MODULE_2_gl_matrix__["c" /* vec3 */].fromValues(this.pos[0], this.pos[1], this.pos[2]);
        newPos[axis] = this.pos[axis] + 0.5 * offset;
        let newFootprint = __WEBPACK_IMPORTED_MODULE_2_gl_matrix__["c" /* vec3 */].fromValues(this.footprint[0], this.footprint[1], this.footprint[2]);
        newFootprint[axis] = this.footprint[axis] - offset;
        let newBox = new Box({
            pos: newPos,
            footprint: newFootprint,
            rotation: this.rotation
        });
        this.pos[axis] = this.pos[axis] - this.footprint[axis] / 2 + 0.5 * offset;
        this.footprint[axis] = offset;
        //no more changes if we are supporting something on top
        if (axis == 1)
            this.terminal = true;
        return [this, newBox];
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Box;



/***/ }),
/* 35 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export GatePosition */
/* unused harmony export GridType */
/* harmony export (immutable) */ __webpack_exports__["b"] = getDefaultLevelOptions;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__building_shape_block__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__building_shape_wall__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_gl_matrix__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__noise_random__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__building_building__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__texture_texture_type__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__road__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__building_shape_battlement__ = __webpack_require__(110);








class LevelOptions {
}
/* unused harmony export LevelOptions */

var GatePosition;
(function (GatePosition) {
    GatePosition[GatePosition["RIGHT"] = 0] = "RIGHT";
    GatePosition[GatePosition["CENTER"] = 1] = "CENTER";
    GatePosition[GatePosition["LEFT"] = 2] = "LEFT";
})(GatePosition || (GatePosition = {}));
var GridType;
(function (GridType) {
    GridType[GridType["OPEN"] = 0] = "OPEN";
    GridType[GridType["ROAD"] = 1] = "ROAD";
    GridType[GridType["BUILDING"] = 2] = "BUILDING";
    GridType[GridType["RAMP"] = 3] = "RAMP";
    GridType[GridType["TUNNEL"] = 4] = "TUNNEL";
})(GridType || (GridType = {}));
class GridInfo {
}
/* unused harmony export GridInfo */

/**
 * Initialize all the values to their default based upon levelnum
 * @param levelNum
 */
function getDefaultLevelOptions(levelNum) {
    let levelWidth = 5 + 5 - levelNum;
    if (levelNum == 6)
        levelWidth = 16;
    return {
        wallHeight: 1,
        elevationRise: 9,
        levelWidth: levelWidth,
        wallWidth: 3,
        gridWidth: 6,
        seed: 1.34 * levelNum,
        buildingFootprintTarget: Math.pow(levelNum + 1.3, 1.7)
    };
}
class CityLevel {
    constructor(levelNum, city, options) {
        this.levelNum = levelNum;
        this.city = city;
        let defaultOptions = getDefaultLevelOptions(levelNum);
        options = Object.assign({}, defaultOptions, options);
        this.wallHeight = options.wallHeight;
        this.wallWidth = options.wallWidth;
        this.levelWidth = options.levelWidth;
        this.elevationRise = options.elevationRise;
        this.gridWidth = options.gridWidth;
        this.seed = __WEBPACK_IMPORTED_MODULE_2_gl_matrix__["b" /* vec2 */].fromValues(this.levelNum + 1, options.seed);
        this.buildingFootprintTarget = options.buildingFootprintTarget;
        if (options.entranceGate)
            this.entranceGate = options.entranceGate;
        if (options.exitGate)
            this.exitGate = options.exitGate;
        this.initGates(this.levelNum);
    }
    rescaleLevel() {
        this.updateGridPositions();
        this.initWall();
        this.initDetails();
    }
    getLevelHeight() {
        let height = this.city.pos[1];
        //only adjust levels 2 and higher based on height of first interior wall
        for (let i = 0; i < this.levelNum; i++) {
            height += this.city.levels[i].elevationRise;
        }
        return height;
    }
    getNextLevelHeight() {
        let nextLevelHeight = this.getLevelHeight();
        if (this.levelNum < this.city.levels.length - 1) {
            nextLevelHeight = this.city.levels[this.levelNum + 1].getLevelHeight();
        }
        else {
            nextLevelHeight += this.elevationRise;
        }
        return nextLevelHeight;
    }
    getNextLevelElevationRise() {
        if (this.levelNum < this.city.levels.length - 1) {
            return this.city.levels[this.levelNum + 1].elevationRise;
        }
        return this.wallHeight;
    }
    getInnerRadius() {
        let radius = 0;
        for (let i = this.levelNum + 1; i < 7; i++) {
            radius += this.city.levels[i].levelWidth + this.city.levels[i].wallWidth;
        }
        return radius;
    }
    getOuterRadius() {
        return this.wallWidth + this.levelWidth + this.getInnerRadius();
    }
    getLevelRadius() {
        let radius = this.wallWidth + this.levelWidth;
        for (let i = this.levelNum + 1; i < 7; i++) {
            radius += this.city.levels[i].levelWidth + this.city.levels[i].wallWidth;
        }
        return radius;
    }
    /**
     * Get the actual blocks to be rendered
     */
    getBlocks() {
        if (!this.wall)
            this.initWall();
        let blocks = [];
        blocks = blocks.concat(this.road.getBlocks());
        if (this.city.showWalls)
            blocks = blocks.concat(this.getWallBlocks());
        if (this.city.showRoads)
            blocks = blocks.concat(this.getStreetBlocks());
        if (this.city.showBuildings)
            blocks = blocks.concat(this.getBuildingBlocks());
        return blocks;
    }
    getGridLength() {
        let radius = this.getInnerRadius();
        let gridLength = radius * this.city.sweep * this.gridWidth / this.levelWidth;
        return Math.floor(gridLength);
    }
    setLevelWidth(width) {
        this.levelWidth = width;
        //initialize shapes for all levels here and below
        for (let i = this.levelNum; i >= 0; i--) {
            this.city.levels[i].rescaleLevel();
        }
    }
    setElevationRise(rise) {
        this.elevationRise = rise;
        //initialize shapes for all levels here and below
        for (let i = this.levelNum; i < this.city.levels.length; i++) {
            this.city.levels[i].rescaleLevel();
        }
    }
    setBuildingFootprintTarget(footprint) {
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
        for (let i = 0; i < this.gridWidth; i++) {
            for (let j = 0; j < this.gridLength; j++) {
                try {
                    this.gridInfo[i][j].pos = this.getPosFromGridPos(i, j);
                }
                catch (e) {
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
        for (let i = 0; i < this.gridWidth; i++) {
            this.gridInfo.push([]);
            for (let j = 0; j < this.gridLength; j++) {
                this.gridInfo[i].push({
                    i: i,
                    j: j,
                    level: this,
                    gridType: GridType.OPEN,
                    buildingIndex: null,
                    pos: this.getPosFromGridPos(i, j),
                    rotation: this.getRotFromGridPos(i, j)
                });
            }
        }
        //console.log(this.gridInfo);
    }
    setGridWidth(width) {
        this.gridWidth = width;
        this.initGrid();
        //initialize shapes for all levels here and below
        this.rescaleLevel();
    }
    getPosFromGridPos(i, j) {
        let radius = this.getInnerRadius() + (i + 0.5) * (this.levelWidth / this.gridWidth);
        let angle = this.getRotFromGridPos(i, j);
        let x = this.city.pos[0] + Math.cos(angle[1]) * radius;
        let y = this.getHeightFromGridPos(i, j);
        let z = this.city.pos[2] + Math.sin(angle[1]) * radius;
        return __WEBPACK_IMPORTED_MODULE_2_gl_matrix__["c" /* vec3 */].fromValues(x, y, z);
    }
    getHeightFromGridPos(i, j) {
        let height = this.getLevelHeight();
        let nextLevelHeight = this.getLevelHeight();
        if (this.levelNum < this.city.levels.length - 1) {
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
                if (percentSweep < 0.15) {
                    percentElevated = 0;
                }
                else if (percentSweep > 0.85) {
                    percentElevated = 1;
                }
                else {
                    percentElevated = (percentSweep - 0.15) / 0.7;
                }
                break;
            case GatePosition.RIGHT:
                if (percentSweep < 0.15) {
                    percentElevated = 1;
                }
                else if (percentSweep > 0.85) {
                    percentElevated = 0;
                }
                else {
                    percentElevated = (0.85 - percentSweep) / 0.7;
                }
                break;
            case GatePosition.CENTER:
                if (percentSweep < .55) {
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
    getRotFromGridPos(i, j) {
        return __WEBPACK_IMPORTED_MODULE_2_gl_matrix__["c" /* vec3 */].fromValues(0, this.city.sweep * j / this.gridLength, 0);
    }
    /******************************************************************************************************/
    /******************************************WALLS*******************************************************/
    /******************************************************************************************************/
    getTotalWallHeight() {
        if (this.levelNum == 0) {
            return this.wallHeight + this.elevationRise;
        }
        return this.elevationRise + this.wallHeight + this.city.levels[this.levelNum - 1].elevationRise;
    }
    getWallBase() {
        let wallBase = this.getLevelHeight();
        if (this.levelNum > 0) {
            wallBase -= this.city.levels[this.levelNum - 1].elevationRise;
        }
        return wallBase;
    }
    setWallHeight(height) {
        this.wallHeight = height;
        //initialize shapes for all levels here and above
        for (let i = this.levelNum; i < this.city.levels.length; i++) {
            this.city.levels[i].rescaleLevel();
        }
    }
    setWallWidth(width) {
        this.wallWidth = width;
        //initialize shapes for all levels here and below
        for (let i = this.levelNum; i >= 0; i--) {
            this.city.levels[i].rescaleLevel();
        }
    }
    getWallTopElevation() {
        return this.getWallBase() + this.getTotalWallHeight();
    }
    initWall() {
        //initialize the wall
        let levelRadius = this.getOuterRadius() - this.wallWidth / 2;
        let numSegments = this.getNumWallSegments();
        this.wall = new __WEBPACK_IMPORTED_MODULE_1__building_shape_wall__["a" /* Wall */]({
            pos: __WEBPACK_IMPORTED_MODULE_2_gl_matrix__["c" /* vec3 */].fromValues(this.city.pos[0], this.getWallBase(), this.city.pos[2]),
            footprint: __WEBPACK_IMPORTED_MODULE_2_gl_matrix__["c" /* vec3 */].fromValues(levelRadius, this.getTotalWallHeight(), this.wallWidth),
            rotation: __WEBPACK_IMPORTED_MODULE_2_gl_matrix__["c" /* vec3 */].fromValues(0, 0, 0),
            sweep: Math.PI,
            numSegments: numSegments
        });
    }
    /**
     * Get the number of wall segments for each wall
     */
    getNumWallSegments() {
        let levelRadius = this.getLevelRadius();
        return Math.max(10, Math.floor(levelRadius / 2));
    }
    /**
     * get the index of the wall segment that should be a gate
     */
    getGateWallBlockIndex() {
        let numWallSegments = this.getNumWallSegments();
        if (this.entranceGate == GatePosition.CENTER) {
            return Math.floor(numWallSegments / 2);
        }
        else if (this.entranceGate == GatePosition.RIGHT) {
            return Math.floor(numWallSegments * 0.9);
        }
        else if (this.entranceGate == GatePosition.LEFT) {
            return Math.floor(numWallSegments * 0.1);
        }
    }
    /**
     * Initialize the gates based upon the level number
     * @param levelNum
     */
    initGates(levelNum) {
        //set the positions of the gates for each level
        if (levelNum == 0) {
            this.entranceGate = GatePosition.CENTER;
            this.exitGate = GatePosition.RIGHT;
        }
        else if (levelNum == 5) {
            this.entranceGate = GatePosition.RIGHT;
            this.exitGate = GatePosition.CENTER;
        }
        else if (levelNum == 6) {
            this.entranceGate = GatePosition.CENTER;
            this.exitGate = GatePosition.CENTER;
        }
        else if (levelNum % 2 == 1) {
            this.entranceGate = GatePosition.RIGHT;
            this.exitGate = GatePosition.LEFT;
        }
        else {
            this.entranceGate = GatePosition.LEFT;
            this.exitGate = GatePosition.RIGHT;
        }
    }
    getSpurBlocks() {
        let blocks = [];
        if (this.levelNum == 6) {
            let posX = this.city.pos[0] + 1.5 + this.getOuterRadius() / 2.0;
            let posX2 = this.city.pos[0] - 1.5 - this.getOuterRadius() / 2.0;
            let posY = this.getWallTopElevation() + 1;
            let posZ = this.city.pos[2] - 5.0 + this.city.levels[1].getOuterRadius() / 2.0;
            let rot = Math.atan((this.getOuterRadius()) / this.city.levels[1].getOuterRadius());
            let length = Math.sqrt(this.getOuterRadius() * this.getOuterRadius() + this.city.levels[1].getOuterRadius() * this.city.levels[1].getOuterRadius());
            length = length - 5.0;
            let battlement1 = new __WEBPACK_IMPORTED_MODULE_7__building_shape_battlement__["a" /* Battlement */]({
                pos: __WEBPACK_IMPORTED_MODULE_2_gl_matrix__["c" /* vec3 */].fromValues(posX, posY, posZ),
                footprint: __WEBPACK_IMPORTED_MODULE_2_gl_matrix__["c" /* vec3 */].fromValues(3, 2, length),
                rotation: __WEBPACK_IMPORTED_MODULE_2_gl_matrix__["c" /* vec3 */].fromValues(0, rot, 0)
            });
            let battlement2 = new __WEBPACK_IMPORTED_MODULE_7__building_shape_battlement__["a" /* Battlement */]({
                pos: __WEBPACK_IMPORTED_MODULE_2_gl_matrix__["c" /* vec3 */].fromValues(posX2, posY, posZ),
                footprint: __WEBPACK_IMPORTED_MODULE_2_gl_matrix__["c" /* vec3 */].fromValues(3, 2, length),
                rotation: __WEBPACK_IMPORTED_MODULE_2_gl_matrix__["c" /* vec3 */].fromValues(0, Math.PI * 2 - rot, 0)
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
        for (let i = 0; i < wallBlocks.length; i++) {
            if (i !== gateIndex) {
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
        if (this.levelNum > 0) {
            roadBase -= this.city.levels[this.levelNum - 1].elevationRise;
        }
        let roadRadius = (this.getOuterRadius() + this.getInnerRadius()) / 2.01;
        let numSegments = this.getNumWallSegments();
        this.road = new __WEBPACK_IMPORTED_MODULE_6__road__["a" /* Road */]({
            pos: __WEBPACK_IMPORTED_MODULE_2_gl_matrix__["c" /* vec3 */].fromValues(this.city.pos[0], roadBase, this.city.pos[2]),
            footprint: __WEBPACK_IMPORTED_MODULE_2_gl_matrix__["c" /* vec3 */].fromValues(roadRadius, 0.1, this.levelWidth + this.wallWidth),
            rotation: __WEBPACK_IMPORTED_MODULE_2_gl_matrix__["c" /* vec3 */].fromValues(0, 0, 0),
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
        if (this.levelNum > 2)
            return this.gridWidth - roadWidth;
        return Math.floor((this.gridWidth - roadWidth / 2) / 2);
    }
    /**
     * Initialize the central boulevard
     */
    initBoulevard() {
        //add a central boulevard down the middle of the level
        this.boulevardWidth = this.getBoulevardWidth();
        this.boulevardStartIndex = this.getBoulevardStartIndex();
        for (let i = this.boulevardStartIndex; i < this.boulevardStartIndex + this.boulevardWidth; i++) {
            for (let j = 0; j < this.gridLength; j++) {
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
        let entranceAngle = this.city.sweep * (gateSegmentIndex) / this.getNumWallSegments();
        //adjust
        entranceAngle += entranceAngleWidth * (1 + gateSegmentIndex) / this.getNumWallSegments();
        for (let i = this.getBoulevardStartIndex() + this.getBoulevardWidth(); i < this.gridWidth; i++) {
            for (let j = 0; j < this.gridLength; j++) {
                if (Math.abs(this.gridInfo[i][j].rotation[1] - entranceAngle) < entranceAngleWidth) {
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
        if (this.levelNum == this.city.levels.length - 1)
            return;
        let nextLevel = this.city.levels[this.levelNum + 1];
        let gateSegmentIndex = nextLevel.getGateWallBlockIndex();
        let entranceAngleWidth = this.city.sweep * 0.9 / (nextLevel.getNumWallSegments());
        let entranceAngle = this.city.sweep * (gateSegmentIndex) / nextLevel.getNumWallSegments();
        //adjust
        entranceAngle += entranceAngleWidth * (1 + gateSegmentIndex) / nextLevel.getNumWallSegments();
        for (let i = 0; i < this.getBoulevardStartIndex(); i++) {
            for (let j = 0; j < this.gridLength; j++) {
                if (Math.abs(this.gridInfo[i][j].rotation[1] - entranceAngle) < entranceAngleWidth) {
                    this.gridInfo[i][j].gridType = GridType.ROAD;
                }
            }
        }
    }
    gridPosUnderSpur(i, j) {
        let pos = this.getPosFromGridPos(i, j);
        //use z = mx + b formula
        let b = this.city.levels[1].getOuterRadius();
        let m = b / this.city.levels[6].getOuterRadius();
        let z = pos[2] - this.city.pos[2];
        let x = -Math.abs(pos[0] - this.city.pos[0]) * 0.95;
        return z < m * x + b;
    }
    initTunnelRoads() {
        for (let i = 0; i < this.getBoulevardStartIndex(); i++) {
            for (let j = 0; j < this.gridLength; j++) {
                if (this.gridPosUnderSpur(i, j)) {
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
        for (let j = 0; j < this.gridLength; j++) {
            let rand = __WEBPACK_IMPORTED_MODULE_3__noise_random__["a" /* default */].random2to1(__WEBPACK_IMPORTED_MODULE_2_gl_matrix__["b" /* vec2 */].fromValues(j, 2.2), this.seed);
            if (rand < spokeProbability) {
                for (let i = this.boulevardStartIndex + this.boulevardWidth; i < this.gridWidth; i++) {
                    this.gridInfo[i][j].gridType = GridType.ROAD;
                }
                this.outSpokes.push(j);
                j += 2;
            }
        }
        this.inSpokes = [-1];
        for (let j = 0; j < this.gridLength; j++) {
            let rand = __WEBPACK_IMPORTED_MODULE_3__noise_random__["a" /* default */].random2to1(__WEBPACK_IMPORTED_MODULE_2_gl_matrix__["b" /* vec2 */].fromValues(j, 34.343), this.seed);
            if (rand < spokeProbability) {
                for (let i = 0; i < this.boulevardStartIndex; i++) {
                    this.gridInfo[i][j].gridType = GridType.ROAD;
                }
                this.inSpokes.push(j);
                j += 2;
            }
        }
    }
    getStreetBlocks() {
        let blocks = [];
        let gridSize = this.levelWidth / this.gridWidth;
        let footprint = __WEBPACK_IMPORTED_MODULE_2_gl_matrix__["c" /* vec3 */].fromValues(gridSize, 1, gridSize);
        for (let i = 0; i < this.gridWidth; i++) {
            for (let j = 0; j < this.gridLength; j++) {
                if (this.gridInfo[i][j].gridType == GridType.ROAD) {
                    let pos = this.gridInfo[i][j].pos;
                    blocks.push({
                        blockType: __WEBPACK_IMPORTED_MODULE_0__building_shape_block__["a" /* BlockType */].CUBE,
                        pos: __WEBPACK_IMPORTED_MODULE_2_gl_matrix__["c" /* vec3 */].fromValues(pos[0], pos[1] + 0.35, pos[2]),
                        footprint: footprint,
                        adjustScale1: 1,
                        adjustScale2: 1,
                        rotation: this.gridInfo[i][j].rotation,
                        scaleFromCenter: true,
                        textureType: __WEBPACK_IMPORTED_MODULE_5__texture_texture_type__["a" /* TextureType */].ROAD
                    });
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
        if (this.levelNum == 6) {
            this.initPalace();
        }
        else {
            for (let k = 0; k < this.outSpokes.length; k++) {
                let startI = this.boulevardStartIndex + this.boulevardWidth;
                let startJ = this.outSpokes[k] + 1;
                let endI = this.gridWidth - 1;
                let endJ = this.gridLength - 1;
                if (k < this.outSpokes.length - 1) {
                    endJ = this.outSpokes[k + 1] - 1;
                }
                this.initBlockBuildings(startI, startJ, endI, endJ);
            }
            for (let k = 0; k < this.inSpokes.length; k++) {
                let startI = 0;
                let startJ = this.inSpokes[k] + 1;
                let endI = this.boulevardStartIndex - 1;
                let endJ = this.gridLength - 1;
                if (k < this.inSpokes.length - 1) {
                    endJ = this.inSpokes[k + 1] - 1;
                }
                this.initBlockBuildings(startI, startJ, endI, endJ);
            }
        }
    }
    initPalace() {
        this.buildings = [];
        console.log('palace');
        let size = this.getOuterRadius() * 1.4;
        let palace = new __WEBPACK_IMPORTED_MODULE_4__building_building__["a" /* Building */]({
            pos: __WEBPACK_IMPORTED_MODULE_2_gl_matrix__["c" /* vec3 */].fromValues(this.city.pos[0], this.getWallTopElevation() + size / 4, this.city.pos[2] + size / 6.2),
            rotation: __WEBPACK_IMPORTED_MODULE_2_gl_matrix__["c" /* vec3 */].fromValues(0, 0, 0),
            seed: Math.pow(this.seed[1], this.city.palaceSeed),
            footprint: __WEBPACK_IMPORTED_MODULE_2_gl_matrix__["c" /* vec3 */].fromValues(size, size / 2, size / 3.1),
            maxReplacements: this.city.maxBuildingIterations
        });
        palace.runReplacements();
        this.buildings.push(palace);
        let tower = new __WEBPACK_IMPORTED_MODULE_4__building_building__["a" /* Building */]({
            pos: __WEBPACK_IMPORTED_MODULE_2_gl_matrix__["c" /* vec3 */].fromValues(this.city.pos[0] - size / 2 - 1.1, this.getWallTopElevation() + size * 1.2 / 2, this.city.pos[2] + 0.5),
            rotation: __WEBPACK_IMPORTED_MODULE_2_gl_matrix__["c" /* vec3 */].fromValues(0, 0, 0),
            seed: Math.pow(this.seed[1], this.city.towerSeed),
            footprint: __WEBPACK_IMPORTED_MODULE_2_gl_matrix__["c" /* vec3 */].fromValues(2, size * 1.2, 2),
            maxReplacements: this.city.maxBuildingIterations
        });
        tower.runReplacements();
        this.buildings.push(tower);
        //add a wall at the top of the spur
    }
    initBlockBuildings(startI, startJ, endI, endJ) {
        //create a set of possible locations
        let blockArea = (endI - startI + 1) * (endJ - startJ + 1);
        let numBuildings = Math.max(1, Math.floor(blockArea / this.buildingFootprintTarget) - 1);
        //get the possible building locations
        let possibleSet = new Set();
        for (let i = startI; i <= endI; i++) {
            for (let j = startJ; j <= endJ; j++) {
                possibleSet.add(i.toString() + '-' + j.toString());
            }
        }
        //sample random points in our block and add buildings
        let locations = [];
        for (let x = 0; x < numBuildings; x++) {
            if (possibleSet.size == 0)
                break;
            let location = __WEBPACK_IMPORTED_MODULE_3__noise_random__["a" /* default */].getRandomSetValue(2.2 + x, possibleSet);
            possibleSet.delete(location);
            let coords = location.split('-');
            let i = parseInt(coords[0]);
            let j = parseInt(coords[1]);
            if (this.gridInfo[i][j].gridType == GridType.OPEN) {
                locations.push(__WEBPACK_IMPORTED_MODULE_2_gl_matrix__["b" /* vec2 */].fromValues(i, j));
                this.gridInfo[i][j].gridType = GridType.BUILDING;
            }
        }
        //get the footprints
        let footprints = this.getBuildingFootprints(locations, possibleSet);
        for (let k = 0; k < locations.length; k++) {
            this.initBuilding(locations[k], footprints[k]);
        }
    }
    getBuildingFootprints(locations, possibleSet) {
        //loop through locations to get the footprint
        let footprints = [];
        for (let i = 0; i < locations.length; i++) {
            footprints.push(__WEBPACK_IMPORTED_MODULE_2_gl_matrix__["b" /* vec2 */].fromValues(1, 1));
        }
        let expanded = true;
        while (expanded) {
            expanded = false;
            for (let i = 0; i < locations.length; i++) {
                if (false
                    || this.expandIn(locations[i], footprints[i], possibleSet)
                    || this.expandOut(locations[i], footprints[i], possibleSet)
                    || this.expandRight(locations[i], footprints[i], possibleSet)
                    || this.expandLeft(locations[i], footprints[i], possibleSet)) {
                    expanded = true;
                }
            }
        }
        return footprints;
    }
    expandRight(location, footprint, possibleSet) {
        for (let i = location[0]; i < location[0] + footprint[0]; i++) {
            let j = location[1] + footprint[1];
            let hash = i.toString() + '-' + j.toString();
            if (!possibleSet.has(hash))
                return false;
        }
        //adjust footprint and set grid and possibleset for new row
        for (let i = location[0]; i < location[0] + footprint[0]; i++) {
            let j = location[1] + footprint[1];
            let hash = i.toString() + '-' + j.toString();
            possibleSet.delete(hash);
            this.gridInfo[i][j].gridType = GridType.BUILDING;
        }
        footprint[1]++;
        return true;
    }
    expandLeft(location, footprint, possibleSet) {
        for (let i = location[0]; i < location[0] + footprint[0]; i++) {
            let j = location[1] - 1;
            let hash = i.toString() + '-' + j.toString();
            if (!possibleSet.has(hash))
                return false;
        }
        //adjust footprint and set grid and possibleset for new row
        for (let i = location[0]; i < location[0] + footprint[0]; i++) {
            let j = location[1] - 1;
            let hash = i.toString() + '-' + j.toString();
            possibleSet.delete(hash);
            this.gridInfo[i][j].gridType = GridType.BUILDING;
        }
        location[1]--;
        footprint[1]++;
        return true;
    }
    expandOut(location, footprint, possibleSet) {
        for (let j = location[1]; j < location[1] + footprint[1]; j++) {
            let i = location[0] + footprint[0];
            let hash = i.toString() + '-' + j.toString();
            if (!possibleSet.has(hash))
                return false;
        }
        //adjust footprint and set grid and possibleset for new row
        for (let j = location[1]; j < location[1] + footprint[1]; j++) {
            let i = location[0] + footprint[0];
            let hash = i.toString() + '-' + j.toString();
            possibleSet.delete(hash);
            this.gridInfo[i][j].gridType = GridType.BUILDING;
        }
        footprint[0]++;
        return true;
    }
    expandIn(location, footprint, possibleSet) {
        for (let j = location[1]; j < location[1] + footprint[1]; j++) {
            let i = location[0] - 1;
            let hash = i.toString() + '-' + j.toString();
            if (!possibleSet.has(hash))
                return false;
        }
        //adjust footprint and set grid and possibleset for new row
        for (let j = location[1]; j < location[1] + footprint[1]; j++) {
            let i = location[0] - 1;
            let hash = i.toString() + '-' + j.toString();
            possibleSet.delete(hash);
            this.gridInfo[i][j].gridType = GridType.BUILDING;
        }
        location[0]--;
        footprint[0]++;
        return true;
    }
    initBuilding(location, footprint) {
        let centerGridPosI = location[0] + footprint[0] / 2;
        let centerGridPosJ = location[1] + footprint[1] / 2;
        let scale = this.levelWidth / this.gridWidth;
        let height = Math.min(footprint[0], footprint[1]) * scale;
        let foot = __WEBPACK_IMPORTED_MODULE_2_gl_matrix__["c" /* vec3 */].fromValues(footprint[0] * scale * 0.75, height, footprint[1] * scale * 0.75);
        this.buildings.push(new __WEBPACK_IMPORTED_MODULE_4__building_building__["a" /* Building */]({
            pos: this.getBuildingPosition(centerGridPosI, centerGridPosJ, foot[1]),
            rotation: this.getRotFromGridPos(centerGridPosI, centerGridPosJ),
            seed: Math.pow(this.seed[1] + 1.3434, this.buildings.length + 1),
            footprint: foot,
            maxReplacements: this.city.maxBuildingIterations
        }));
        this.buildings[this.buildings.length - 1].runReplacements();
    }
    getBuildingPosition(gridI, gridJ, buildingHeight) {
        let pos = this.getPosFromGridPos(gridI - 0.5, gridJ - 0.5);
        pos[1] = pos[1] + buildingHeight / 2;
        return pos;
    }
    getBuildingBlocks() {
        let blocks = [];
        for (let i = 0; i < this.buildings.length; i++) {
            blocks = blocks.concat(this.buildings[i].getBlocks());
        }
        return blocks;
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = CityLevel;

;


/***/ }),
/* 36 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_gl_matrix__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_stats_js__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_stats_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_stats_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_dat_gui__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_dat_gui___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_dat_gui__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__geometry_Square__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__geometry_Cube__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__geometry_TerrainPlane__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__rendering_gl_OpenGLRenderer__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__Camera__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__globals__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__rendering_gl_ShaderProgram__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__generated_elements_terrain__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__generated_elements_city_city__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__generated_elements_city_city_level__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__texture_texture__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__geometry_SpurGeometry__ = __webpack_require__(112);















function initLevels() {
    let levels = [];
    for (let i = 0; i < 7; i++) {
        levels.push(Object(__WEBPACK_IMPORTED_MODULE_12__generated_elements_city_city_level__["b" /* getDefaultLevelOptions */])(i));
    }
    return levels;
}
// Define an object with application parameters and button callbacks
// This will be referred to by dat.GUI's functions that add GUI elements.
const controls = {
    'Levels': initLevels(),
    'AllLevels': Object(__WEBPACK_IMPORTED_MODULE_12__generated_elements_city_city_level__["b" /* getDefaultLevelOptions */])(0),
    'Theme': 3,
    'Show Highways': true,
    'Show Streets': false,
    'Show Population Density': true,
    'Show Buildings': true,
    'Show Build Sites': false,
    'Show Walls': true,
    'Sample Buildings': false,
    'Show Spur': true,
    'Palace Seed': 0.4,
    'Tower Seed': 0.2,
    'Building Iterations': 20,
    'Elevation Seed': 8,
    'Population Seed': 1.234,
    'Road Seed': 5.43,
    'Highway Segment Length': 8,
    'Highway Iterations': 3,
    'Highway Max Turn Angle': Math.PI / 18,
    'Street Segment Length': 12,
    'Street Iterations': 3,
    'Num Buildings': 3000,
    'Load Scene': loadScene,
};
// Add controls to the gui
const gui = new __WEBPACK_IMPORTED_MODULE_2_dat_gui__["GUI"]();
gui.width = 320;
let terrain;
let square;
let cube;
let plane;
let spur1;
let spur2;
let spur3;
let spur4;
let spur5;
let spur6;
let roadSegments;
let wPressed;
let aPressed;
let sPressed;
let dPressed;
let planePos;
let city;
let pavementTexture;
let whiteStoneTexture;
function initTerrain() {
    //initialize terrain
    terrain = new __WEBPACK_IMPORTED_MODULE_10__generated_elements_terrain__["a" /* Terrain */]();
    terrain.elevationSeed = __WEBPACK_IMPORTED_MODULE_0_gl_matrix__["b" /* vec2 */].fromValues(2.0, controls["Elevation Seed"]);
    terrain.populationSeed = __WEBPACK_IMPORTED_MODULE_0_gl_matrix__["b" /* vec2 */].fromValues(1.2, controls["Population Seed"]);
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
    plane = new __WEBPACK_IMPORTED_MODULE_5__geometry_TerrainPlane__["a" /* default */]();
    plane.create();
    spur1 = new __WEBPACK_IMPORTED_MODULE_14__geometry_SpurGeometry__["a" /* default */](city, 1);
    spur1.create();
    spur2 = new __WEBPACK_IMPORTED_MODULE_14__geometry_SpurGeometry__["a" /* default */](city, 2);
    spur2.create();
    spur3 = new __WEBPACK_IMPORTED_MODULE_14__geometry_SpurGeometry__["a" /* default */](city, 3);
    spur3.create();
    spur4 = new __WEBPACK_IMPORTED_MODULE_14__geometry_SpurGeometry__["a" /* default */](city, 4);
    spur4.create();
    spur5 = new __WEBPACK_IMPORTED_MODULE_14__geometry_SpurGeometry__["a" /* default */](city, 5);
    spur5.create();
    spur6 = new __WEBPACK_IMPORTED_MODULE_14__geometry_SpurGeometry__["a" /* default */](city, 6);
    spur6.create();
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
    cube = new __WEBPACK_IMPORTED_MODULE_4__geometry_Cube__["a" /* default */]({
        gridSize: terrain.gridSize,
        scale: plane.scale
    });
    cube.create();
    cube.setInstanceVBOs(city);
    square = new __WEBPACK_IMPORTED_MODULE_3__geometry_Square__["a" /* default */](__WEBPACK_IMPORTED_MODULE_0_gl_matrix__["c" /* vec3 */].fromValues(0, 0, 0));
    square.create();
    wPressed = false;
    aPressed = false;
    sPressed = false;
    dPressed = false;
    planePos = __WEBPACK_IMPORTED_MODULE_0_gl_matrix__["b" /* vec2 */].fromValues(0, 0);
}
/**
 * Initialize the Seed Controls
 */
function addTerrainControls() {
    let terrainFolder = gui.addFolder('terrain');
    let eSeed = terrainFolder.add(controls, 'Elevation Seed', { 'seed 1': 8, 'seed 2': 5.43, 'seed 3': 8.987, 'seed 4': 1.234 }).listen();
    eSeed.onChange(() => { initTerrain(); loadScene(); });
    // let pSeed = terrainFolder.add(controls, 'Population Seed', {'seed 1': 1.234, 'seed 2': 5.43, 'seed 3': 8.987, 'seed 4': 43.343}).listen();
    // pSeed.onChange(loadScene);
    // mapType.onChange();
}
function getDisplayOptions() {
    return __WEBPACK_IMPORTED_MODULE_0_gl_matrix__["d" /* vec4 */].fromValues(controls["Show Population Density"] ? 1 : 0, controls["Show Build Sites"] ? 1 : 0, controls["Theme"], 0);
}
function redoRoads() {
    roadSegments.setInstanceVBOs(terrain.roads.segments, terrain.roads.intersections, {
        showHighways: controls["Show Highways"],
        showStreets: controls["Show Streets"]
    });
}
function getBackgroundColor() {
    if (controls.Theme == 1) {
        return __WEBPACK_IMPORTED_MODULE_0_gl_matrix__["c" /* vec3 */].fromValues(0.65, .91, 1.0);
    }
    else if (controls.Theme == 2) {
        return __WEBPACK_IMPORTED_MODULE_0_gl_matrix__["c" /* vec3 */].fromValues(0, 0, 0);
    }
    else if (controls.Theme == 3) {
        return __WEBPACK_IMPORTED_MODULE_0_gl_matrix__["c" /* vec3 */].fromValues(0.65, .91, 1.0);
    }
}
/**
 * Initialize the display controls
 * @param options
 */
function addDisplayControls(options) {
    let displayFolder = gui.addFolder('display');
    let theme = displayFolder.add(controls, 'Theme', { 'Textured': 3, 'White City': 2 }).listen();
    //let showHighways = displayFolder.add(controls, 'Show Highways').listen();
    let showStreets = displayFolder.add(controls, 'Show Streets').listen();
    let showBuildings = displayFolder.add(controls, 'Show Buildings').listen();
    let showWalls = displayFolder.add(controls, 'Show Walls');
    let showSpur = displayFolder.add(controls, 'Show Spur');
    let sampleBuildings = displayFolder.add(controls, 'Sample Buildings');
    let palaceSeed = displayFolder.add(controls, 'Palace Seed').min(0).max(1.0).step(0.05).listen();
    let towerSeed = displayFolder.add(controls, 'Tower Seed').min(0).max(1.0).step(0.05).listen();
    let maxReplace = displayFolder.add(controls, 'Building Iterations').min(1).max(20).step(1).listen();
    showBuildings.onChange(() => { city.showBuildings = controls["Show Buildings"]; loadScene(); });
    showStreets.onChange(() => { city.showRoads = controls["Show Streets"]; loadScene(); });
    showWalls.onChange(() => { city.showWalls = controls["Show Walls"]; loadScene(); });
    sampleBuildings.onChange(() => { city.showSampleBuildings = controls["Sample Buildings"]; loadScene(); });
    towerSeed.onChange(() => { city.towerSeed = controls["Tower Seed"]; city.initPalace(); loadScene(); });
    palaceSeed.onChange(() => { city.palaceSeed = controls["Palace Seed"]; city.initPalace(); loadScene(); });
    theme.onChange(() => {
        options.terrainShader.setDisplayOptions(getDisplayOptions());
        options.roadShader.setDisplayOptions(getDisplayOptions());
        options.buildingShader.setDisplayOptions(getDisplayOptions());
        options.renderer.setClearColor3(getBackgroundColor());
    });
    maxReplace.onChange(() => {
        city.maxBuildingIterations = controls["Building Iterations"] - 1;
        city.initBuildings();
        loadScene();
    });
}
function adjustLevel(i, property) {
    switch (property) {
        case 'levelWidth':
            city.adjustLevel(i, property, controls.Levels[i].levelWidth);
            break;
        case 'wallWidth':
            city.adjustLevel(i, property, controls.Levels[i].wallWidth);
            break;
        case 'wallHeight':
            city.adjustLevel(i, property, controls.Levels[i].wallHeight);
            break;
        case 'gridWidth':
            city.adjustLevel(i, property, controls.Levels[i].gridWidth);
            break;
        case 'elevationRise':
            city.adjustLevel(i, property, controls.Levels[i].elevationRise);
            break;
        case 'buildingFootprintTarget':
            city.adjustLevel(i, property, controls.Levels[i].buildingFootprintTarget);
            break;
    }
    loadScene();
}
function adjustAllLevels(property) {
    for (let i = 0; i < city.levels.length; i++) {
        switch (property) {
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
    let properties = ['wallWidth', 'wallHeight', 'levelWidth', 'elevationRise'];
    for (let i = 0; i < 7; i++) {
        let level = levels.addFolder('level ' + (i + 1).toString());
        for (let property of properties) {
            let control = level.add(controls.Levels[i], property).min(1).max(30).step(1).listen();
            control.onChange(() => { adjustLevel(i, property); });
        }
        let gridWidthControl = level.add(controls.Levels[i], 'gridWidth').min(4).max(10).step(1).listen();
        let buildingSizeControl = level.add(controls.Levels[i], 'buildingFootprintTarget').min(1).max(40).listen();
        gridWidthControl.onChange(() => adjustLevel(i, 'gridWidth'));
        buildingSizeControl.onChange(() => adjustLevel(i, 'buildingFootprintTarget'));
    }
    let level = levels.addFolder('all levels');
    for (let property of properties) {
        let control = level.add(controls.AllLevels, property).min(1).max(30).step(1).listen();
        control.onChange(() => adjustAllLevels(property));
    }
    let gridWidthControl = level.add(controls.AllLevels, 'gridWidth').min(1).max(10).step(1).listen();
    gridWidthControl.onChange(() => adjustAllLevels('gridWidth'));
}
function main() {
    initTerrain();
    city = new __WEBPACK_IMPORTED_MODULE_11__generated_elements_city_city__["a" /* City */]({
        pos: __WEBPACK_IMPORTED_MODULE_0_gl_matrix__["c" /* vec3 */].fromValues(250, 0.1, 200),
        seed: 12345,
        palaceSeed: controls["Palace Seed"],
        towerSeed: controls["Tower Seed"]
    });
    city.initBuildings();
    city.showSampleBuildings = controls["Sample Buildings"];
    window.addEventListener('keypress', function (e) {
        // console.log(e.key);
        switch (e.key) {
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
        switch (e.key) {
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
    const stats = __WEBPACK_IMPORTED_MODULE_1_stats_js__();
    stats.setMode(0);
    stats.domElement.style.position = 'absolute';
    stats.domElement.style.left = '0px';
    stats.domElement.style.top = '0px';
    document.body.appendChild(stats.domElement);
    // get canvas and webgl context
    const canvas = document.getElementById('canvas');
    const gl = canvas.getContext('webgl2');
    if (!gl) {
        alert('WebGL 2 not supported!');
    }
    // `setGL` is a function imported above which sets the value of `gl` in the `globals.ts` module.
    // Later, we can import `gl` from `globals.ts` to access it
    Object(__WEBPACK_IMPORTED_MODULE_8__globals__["b" /* setGL */])(gl);
    const camera = new __WEBPACK_IMPORTED_MODULE_7__Camera__["a" /* default */](__WEBPACK_IMPORTED_MODULE_0_gl_matrix__["c" /* vec3 */].fromValues(25, 21, 14), __WEBPACK_IMPORTED_MODULE_0_gl_matrix__["c" /* vec3 */].fromValues(0, 13, -9));
    const renderer = new __WEBPACK_IMPORTED_MODULE_6__rendering_gl_OpenGLRenderer__["a" /* default */](canvas);
    renderer.setClearColor3(getBackgroundColor());
    gl.enable(gl.DEPTH_TEST);
    const terrainShader = new __WEBPACK_IMPORTED_MODULE_9__rendering_gl_ShaderProgram__["b" /* default */]([
        new __WEBPACK_IMPORTED_MODULE_9__rendering_gl_ShaderProgram__["a" /* Shader */](gl.VERTEX_SHADER, __webpack_require__(113)),
        new __WEBPACK_IMPORTED_MODULE_9__rendering_gl_ShaderProgram__["a" /* Shader */](gl.FRAGMENT_SHADER, __webpack_require__(114)),
    ]);
    const roadShader = new __WEBPACK_IMPORTED_MODULE_9__rendering_gl_ShaderProgram__["b" /* default */]([
        new __WEBPACK_IMPORTED_MODULE_9__rendering_gl_ShaderProgram__["a" /* Shader */](gl.VERTEX_SHADER, __webpack_require__(115)),
        new __WEBPACK_IMPORTED_MODULE_9__rendering_gl_ShaderProgram__["a" /* Shader */](gl.FRAGMENT_SHADER, __webpack_require__(116)),
    ]);
    const buildingShader = new __WEBPACK_IMPORTED_MODULE_9__rendering_gl_ShaderProgram__["b" /* default */]([
        new __WEBPACK_IMPORTED_MODULE_9__rendering_gl_ShaderProgram__["a" /* Shader */](gl.VERTEX_SHADER, __webpack_require__(117)),
        new __WEBPACK_IMPORTED_MODULE_9__rendering_gl_ShaderProgram__["a" /* Shader */](gl.FRAGMENT_SHADER, __webpack_require__(118)),
    ]);
    terrainShader.setDisplayOptions(getDisplayOptions());
    roadShader.setDisplayOptions(getDisplayOptions());
    buildingShader.setDisplayOptions(getDisplayOptions());
    whiteStoneTexture = new __WEBPACK_IMPORTED_MODULE_13__texture_texture__["a" /* default */]('src/texture/white-stone.jpg', 0);
    pavementTexture = new __WEBPACK_IMPORTED_MODULE_13__texture_texture__["a" /* default */]('src/texture/pavement.jpg', 0);
    buildingShader.bindTexToUnit(buildingShader.unifWhiteStoneSampler, whiteStoneTexture, 0);
    buildingShader.bindTexToUnit(buildingShader.unifPavementSampler, pavementTexture, 1);
    terrainShader.bindTexToUnit(terrainShader.unifWhiteStoneSampler, whiteStoneTexture, 0);
    terrainShader.bindTexToUnit(terrainShader.unifPavementSampler, pavementTexture, 1);
    // Initial call to load scene
    loadScene();
    //add all the controls
    addDisplayControls({
        terrainShader: terrainShader,
        buildingShader: buildingShader,
        roadShader: roadShader,
        renderer: renderer
    });
    addLevelControls();
    /**
     * more control stuff
     */
    function processKeyPresses() {
        let velocity = __WEBPACK_IMPORTED_MODULE_0_gl_matrix__["c" /* vec3 */].fromValues(0, 0, 0);
        if (wPressed) {
            velocity[2] += 1.0;
        }
        if (aPressed) {
            velocity[0] += 1.0;
        }
        if (sPressed) {
            velocity[2] -= 1.0;
        }
        if (dPressed) {
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
        let terrainDrawables = [plane, spur1, spur2, spur3, spur4, spur5, spur6];
        if (controls["Sample Buildings"] || !controls["Show Spur"])
            terrainDrawables = [plane];
        terrainShader.setCityInfo({ cityHeight: city.getHeight() / 3.3, cityRadius: city.getRadius() * 0.2 });
        renderer.render(camera, terrainShader, terrainDrawables);
        if (controls["Show Highways"] || controls["Show Streets"]) {
            //  renderer.render(camera, roadShader, [roadSegments]);
        }
        renderer.render(camera, buildingShader, [cube]);
        stats.end();
        // Tell the browser to call `tick` again whenever it renders a new frame
        requestAnimationFrame(tick);
    }
    window.addEventListener('resize', function () {
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


/***/ }),
/* 37 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export create */
/* unused harmony export clone */
/* unused harmony export copy */
/* unused harmony export identity */
/* unused harmony export fromValues */
/* unused harmony export set */
/* unused harmony export transpose */
/* unused harmony export invert */
/* unused harmony export adjoint */
/* unused harmony export determinant */
/* unused harmony export multiply */
/* unused harmony export rotate */
/* unused harmony export scale */
/* unused harmony export fromRotation */
/* unused harmony export fromScaling */
/* unused harmony export str */
/* unused harmony export frob */
/* unused harmony export LDU */
/* unused harmony export add */
/* unused harmony export subtract */
/* unused harmony export exactEquals */
/* unused harmony export equals */
/* unused harmony export multiplyScalar */
/* unused harmony export multiplyScalarAndAdd */
/* unused harmony export mul */
/* unused harmony export sub */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__common_js__ = __webpack_require__(2);


/**
 * 2x2 Matrix
 * @module mat2
 */

/**
 * Creates a new identity mat2
 *
 * @returns {mat2} a new 2x2 matrix
 */
function create() {
  var out = new __WEBPACK_IMPORTED_MODULE_0__common_js__["a" /* ARRAY_TYPE */](4);
  if (__WEBPACK_IMPORTED_MODULE_0__common_js__["a" /* ARRAY_TYPE */] != Float32Array) {
    out[1] = 0;
    out[2] = 0;
  }
  out[0] = 1;
  out[3] = 1;
  return out;
}

/**
 * Creates a new mat2 initialized with values from an existing matrix
 *
 * @param {mat2} a matrix to clone
 * @returns {mat2} a new 2x2 matrix
 */
function clone(a) {
  var out = new __WEBPACK_IMPORTED_MODULE_0__common_js__["a" /* ARRAY_TYPE */](4);
  out[0] = a[0];
  out[1] = a[1];
  out[2] = a[2];
  out[3] = a[3];
  return out;
}

/**
 * Copy the values from one mat2 to another
 *
 * @param {mat2} out the receiving matrix
 * @param {mat2} a the source matrix
 * @returns {mat2} out
 */
function copy(out, a) {
  out[0] = a[0];
  out[1] = a[1];
  out[2] = a[2];
  out[3] = a[3];
  return out;
}

/**
 * Set a mat2 to the identity matrix
 *
 * @param {mat2} out the receiving matrix
 * @returns {mat2} out
 */
function identity(out) {
  out[0] = 1;
  out[1] = 0;
  out[2] = 0;
  out[3] = 1;
  return out;
}

/**
 * Create a new mat2 with the given values
 *
 * @param {Number} m00 Component in column 0, row 0 position (index 0)
 * @param {Number} m01 Component in column 0, row 1 position (index 1)
 * @param {Number} m10 Component in column 1, row 0 position (index 2)
 * @param {Number} m11 Component in column 1, row 1 position (index 3)
 * @returns {mat2} out A new 2x2 matrix
 */
function fromValues(m00, m01, m10, m11) {
  var out = new __WEBPACK_IMPORTED_MODULE_0__common_js__["a" /* ARRAY_TYPE */](4);
  out[0] = m00;
  out[1] = m01;
  out[2] = m10;
  out[3] = m11;
  return out;
}

/**
 * Set the components of a mat2 to the given values
 *
 * @param {mat2} out the receiving matrix
 * @param {Number} m00 Component in column 0, row 0 position (index 0)
 * @param {Number} m01 Component in column 0, row 1 position (index 1)
 * @param {Number} m10 Component in column 1, row 0 position (index 2)
 * @param {Number} m11 Component in column 1, row 1 position (index 3)
 * @returns {mat2} out
 */
function set(out, m00, m01, m10, m11) {
  out[0] = m00;
  out[1] = m01;
  out[2] = m10;
  out[3] = m11;
  return out;
}

/**
 * Transpose the values of a mat2
 *
 * @param {mat2} out the receiving matrix
 * @param {mat2} a the source matrix
 * @returns {mat2} out
 */
function transpose(out, a) {
  // If we are transposing ourselves we can skip a few steps but have to cache
  // some values
  if (out === a) {
    var a1 = a[1];
    out[1] = a[2];
    out[2] = a1;
  } else {
    out[0] = a[0];
    out[1] = a[2];
    out[2] = a[1];
    out[3] = a[3];
  }

  return out;
}

/**
 * Inverts a mat2
 *
 * @param {mat2} out the receiving matrix
 * @param {mat2} a the source matrix
 * @returns {mat2} out
 */
function invert(out, a) {
  var a0 = a[0],
      a1 = a[1],
      a2 = a[2],
      a3 = a[3];

  // Calculate the determinant
  var det = a0 * a3 - a2 * a1;

  if (!det) {
    return null;
  }
  det = 1.0 / det;

  out[0] = a3 * det;
  out[1] = -a1 * det;
  out[2] = -a2 * det;
  out[3] = a0 * det;

  return out;
}

/**
 * Calculates the adjugate of a mat2
 *
 * @param {mat2} out the receiving matrix
 * @param {mat2} a the source matrix
 * @returns {mat2} out
 */
function adjoint(out, a) {
  // Caching this value is nessecary if out == a
  var a0 = a[0];
  out[0] = a[3];
  out[1] = -a[1];
  out[2] = -a[2];
  out[3] = a0;

  return out;
}

/**
 * Calculates the determinant of a mat2
 *
 * @param {mat2} a the source matrix
 * @returns {Number} determinant of a
 */
function determinant(a) {
  return a[0] * a[3] - a[2] * a[1];
}

/**
 * Multiplies two mat2's
 *
 * @param {mat2} out the receiving matrix
 * @param {mat2} a the first operand
 * @param {mat2} b the second operand
 * @returns {mat2} out
 */
function multiply(out, a, b) {
  var a0 = a[0],
      a1 = a[1],
      a2 = a[2],
      a3 = a[3];
  var b0 = b[0],
      b1 = b[1],
      b2 = b[2],
      b3 = b[3];
  out[0] = a0 * b0 + a2 * b1;
  out[1] = a1 * b0 + a3 * b1;
  out[2] = a0 * b2 + a2 * b3;
  out[3] = a1 * b2 + a3 * b3;
  return out;
}

/**
 * Rotates a mat2 by the given angle
 *
 * @param {mat2} out the receiving matrix
 * @param {mat2} a the matrix to rotate
 * @param {Number} rad the angle to rotate the matrix by
 * @returns {mat2} out
 */
function rotate(out, a, rad) {
  var a0 = a[0],
      a1 = a[1],
      a2 = a[2],
      a3 = a[3];
  var s = Math.sin(rad);
  var c = Math.cos(rad);
  out[0] = a0 * c + a2 * s;
  out[1] = a1 * c + a3 * s;
  out[2] = a0 * -s + a2 * c;
  out[3] = a1 * -s + a3 * c;
  return out;
}

/**
 * Scales the mat2 by the dimensions in the given vec2
 *
 * @param {mat2} out the receiving matrix
 * @param {mat2} a the matrix to rotate
 * @param {vec2} v the vec2 to scale the matrix by
 * @returns {mat2} out
 **/
function scale(out, a, v) {
  var a0 = a[0],
      a1 = a[1],
      a2 = a[2],
      a3 = a[3];
  var v0 = v[0],
      v1 = v[1];
  out[0] = a0 * v0;
  out[1] = a1 * v0;
  out[2] = a2 * v1;
  out[3] = a3 * v1;
  return out;
}

/**
 * Creates a matrix from a given angle
 * This is equivalent to (but much faster than):
 *
 *     mat2.identity(dest);
 *     mat2.rotate(dest, dest, rad);
 *
 * @param {mat2} out mat2 receiving operation result
 * @param {Number} rad the angle to rotate the matrix by
 * @returns {mat2} out
 */
function fromRotation(out, rad) {
  var s = Math.sin(rad);
  var c = Math.cos(rad);
  out[0] = c;
  out[1] = s;
  out[2] = -s;
  out[3] = c;
  return out;
}

/**
 * Creates a matrix from a vector scaling
 * This is equivalent to (but much faster than):
 *
 *     mat2.identity(dest);
 *     mat2.scale(dest, dest, vec);
 *
 * @param {mat2} out mat2 receiving operation result
 * @param {vec2} v Scaling vector
 * @returns {mat2} out
 */
function fromScaling(out, v) {
  out[0] = v[0];
  out[1] = 0;
  out[2] = 0;
  out[3] = v[1];
  return out;
}

/**
 * Returns a string representation of a mat2
 *
 * @param {mat2} a matrix to represent as a string
 * @returns {String} string representation of the matrix
 */
function str(a) {
  return 'mat2(' + a[0] + ', ' + a[1] + ', ' + a[2] + ', ' + a[3] + ')';
}

/**
 * Returns Frobenius norm of a mat2
 *
 * @param {mat2} a the matrix to calculate Frobenius norm of
 * @returns {Number} Frobenius norm
 */
function frob(a) {
  return Math.sqrt(Math.pow(a[0], 2) + Math.pow(a[1], 2) + Math.pow(a[2], 2) + Math.pow(a[3], 2));
}

/**
 * Returns L, D and U matrices (Lower triangular, Diagonal and Upper triangular) by factorizing the input matrix
 * @param {mat2} L the lower triangular matrix
 * @param {mat2} D the diagonal matrix
 * @param {mat2} U the upper triangular matrix
 * @param {mat2} a the input matrix to factorize
 */

function LDU(L, D, U, a) {
  L[2] = a[2] / a[0];
  U[0] = a[0];
  U[1] = a[1];
  U[3] = a[3] - L[2] * U[1];
  return [L, D, U];
}

/**
 * Adds two mat2's
 *
 * @param {mat2} out the receiving matrix
 * @param {mat2} a the first operand
 * @param {mat2} b the second operand
 * @returns {mat2} out
 */
function add(out, a, b) {
  out[0] = a[0] + b[0];
  out[1] = a[1] + b[1];
  out[2] = a[2] + b[2];
  out[3] = a[3] + b[3];
  return out;
}

/**
 * Subtracts matrix b from matrix a
 *
 * @param {mat2} out the receiving matrix
 * @param {mat2} a the first operand
 * @param {mat2} b the second operand
 * @returns {mat2} out
 */
function subtract(out, a, b) {
  out[0] = a[0] - b[0];
  out[1] = a[1] - b[1];
  out[2] = a[2] - b[2];
  out[3] = a[3] - b[3];
  return out;
}

/**
 * Returns whether or not the matrices have exactly the same elements in the same position (when compared with ===)
 *
 * @param {mat2} a The first matrix.
 * @param {mat2} b The second matrix.
 * @returns {Boolean} True if the matrices are equal, false otherwise.
 */
function exactEquals(a, b) {
  return a[0] === b[0] && a[1] === b[1] && a[2] === b[2] && a[3] === b[3];
}

/**
 * Returns whether or not the matrices have approximately the same elements in the same position.
 *
 * @param {mat2} a The first matrix.
 * @param {mat2} b The second matrix.
 * @returns {Boolean} True if the matrices are equal, false otherwise.
 */
function equals(a, b) {
  var a0 = a[0],
      a1 = a[1],
      a2 = a[2],
      a3 = a[3];
  var b0 = b[0],
      b1 = b[1],
      b2 = b[2],
      b3 = b[3];
  return Math.abs(a0 - b0) <= __WEBPACK_IMPORTED_MODULE_0__common_js__["b" /* EPSILON */] * Math.max(1.0, Math.abs(a0), Math.abs(b0)) && Math.abs(a1 - b1) <= __WEBPACK_IMPORTED_MODULE_0__common_js__["b" /* EPSILON */] * Math.max(1.0, Math.abs(a1), Math.abs(b1)) && Math.abs(a2 - b2) <= __WEBPACK_IMPORTED_MODULE_0__common_js__["b" /* EPSILON */] * Math.max(1.0, Math.abs(a2), Math.abs(b2)) && Math.abs(a3 - b3) <= __WEBPACK_IMPORTED_MODULE_0__common_js__["b" /* EPSILON */] * Math.max(1.0, Math.abs(a3), Math.abs(b3));
}

/**
 * Multiply each element of the matrix by a scalar.
 *
 * @param {mat2} out the receiving matrix
 * @param {mat2} a the matrix to scale
 * @param {Number} b amount to scale the matrix's elements by
 * @returns {mat2} out
 */
function multiplyScalar(out, a, b) {
  out[0] = a[0] * b;
  out[1] = a[1] * b;
  out[2] = a[2] * b;
  out[3] = a[3] * b;
  return out;
}

/**
 * Adds two mat2's after multiplying each element of the second operand by a scalar value.
 *
 * @param {mat2} out the receiving vector
 * @param {mat2} a the first operand
 * @param {mat2} b the second operand
 * @param {Number} scale the amount to scale b's elements by before adding
 * @returns {mat2} out
 */
function multiplyScalarAndAdd(out, a, b, scale) {
  out[0] = a[0] + b[0] * scale;
  out[1] = a[1] + b[1] * scale;
  out[2] = a[2] + b[2] * scale;
  out[3] = a[3] + b[3] * scale;
  return out;
}

/**
 * Alias for {@link mat2.multiply}
 * @function
 */
var mul = multiply;

/**
 * Alias for {@link mat2.subtract}
 * @function
 */
var sub = subtract;

/***/ }),
/* 38 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export create */
/* unused harmony export clone */
/* unused harmony export copy */
/* unused harmony export identity */
/* unused harmony export fromValues */
/* unused harmony export set */
/* unused harmony export invert */
/* unused harmony export determinant */
/* unused harmony export multiply */
/* unused harmony export rotate */
/* unused harmony export scale */
/* unused harmony export translate */
/* unused harmony export fromRotation */
/* unused harmony export fromScaling */
/* unused harmony export fromTranslation */
/* unused harmony export str */
/* unused harmony export frob */
/* unused harmony export add */
/* unused harmony export subtract */
/* unused harmony export multiplyScalar */
/* unused harmony export multiplyScalarAndAdd */
/* unused harmony export exactEquals */
/* unused harmony export equals */
/* unused harmony export mul */
/* unused harmony export sub */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__common_js__ = __webpack_require__(2);


/**
 * 2x3 Matrix
 * @module mat2d
 *
 * @description
 * A mat2d contains six elements defined as:
 * <pre>
 * [a, c, tx,
 *  b, d, ty]
 * </pre>
 * This is a short form for the 3x3 matrix:
 * <pre>
 * [a, c, tx,
 *  b, d, ty,
 *  0, 0, 1]
 * </pre>
 * The last row is ignored so the array is shorter and operations are faster.
 */

/**
 * Creates a new identity mat2d
 *
 * @returns {mat2d} a new 2x3 matrix
 */
function create() {
  var out = new __WEBPACK_IMPORTED_MODULE_0__common_js__["a" /* ARRAY_TYPE */](6);
  if (__WEBPACK_IMPORTED_MODULE_0__common_js__["a" /* ARRAY_TYPE */] != Float32Array) {
    out[1] = 0;
    out[2] = 0;
    out[4] = 0;
    out[5] = 0;
  }
  out[0] = 1;
  out[3] = 1;
  return out;
}

/**
 * Creates a new mat2d initialized with values from an existing matrix
 *
 * @param {mat2d} a matrix to clone
 * @returns {mat2d} a new 2x3 matrix
 */
function clone(a) {
  var out = new __WEBPACK_IMPORTED_MODULE_0__common_js__["a" /* ARRAY_TYPE */](6);
  out[0] = a[0];
  out[1] = a[1];
  out[2] = a[2];
  out[3] = a[3];
  out[4] = a[4];
  out[5] = a[5];
  return out;
}

/**
 * Copy the values from one mat2d to another
 *
 * @param {mat2d} out the receiving matrix
 * @param {mat2d} a the source matrix
 * @returns {mat2d} out
 */
function copy(out, a) {
  out[0] = a[0];
  out[1] = a[1];
  out[2] = a[2];
  out[3] = a[3];
  out[4] = a[4];
  out[5] = a[5];
  return out;
}

/**
 * Set a mat2d to the identity matrix
 *
 * @param {mat2d} out the receiving matrix
 * @returns {mat2d} out
 */
function identity(out) {
  out[0] = 1;
  out[1] = 0;
  out[2] = 0;
  out[3] = 1;
  out[4] = 0;
  out[5] = 0;
  return out;
}

/**
 * Create a new mat2d with the given values
 *
 * @param {Number} a Component A (index 0)
 * @param {Number} b Component B (index 1)
 * @param {Number} c Component C (index 2)
 * @param {Number} d Component D (index 3)
 * @param {Number} tx Component TX (index 4)
 * @param {Number} ty Component TY (index 5)
 * @returns {mat2d} A new mat2d
 */
function fromValues(a, b, c, d, tx, ty) {
  var out = new __WEBPACK_IMPORTED_MODULE_0__common_js__["a" /* ARRAY_TYPE */](6);
  out[0] = a;
  out[1] = b;
  out[2] = c;
  out[3] = d;
  out[4] = tx;
  out[5] = ty;
  return out;
}

/**
 * Set the components of a mat2d to the given values
 *
 * @param {mat2d} out the receiving matrix
 * @param {Number} a Component A (index 0)
 * @param {Number} b Component B (index 1)
 * @param {Number} c Component C (index 2)
 * @param {Number} d Component D (index 3)
 * @param {Number} tx Component TX (index 4)
 * @param {Number} ty Component TY (index 5)
 * @returns {mat2d} out
 */
function set(out, a, b, c, d, tx, ty) {
  out[0] = a;
  out[1] = b;
  out[2] = c;
  out[3] = d;
  out[4] = tx;
  out[5] = ty;
  return out;
}

/**
 * Inverts a mat2d
 *
 * @param {mat2d} out the receiving matrix
 * @param {mat2d} a the source matrix
 * @returns {mat2d} out
 */
function invert(out, a) {
  var aa = a[0],
      ab = a[1],
      ac = a[2],
      ad = a[3];
  var atx = a[4],
      aty = a[5];

  var det = aa * ad - ab * ac;
  if (!det) {
    return null;
  }
  det = 1.0 / det;

  out[0] = ad * det;
  out[1] = -ab * det;
  out[2] = -ac * det;
  out[3] = aa * det;
  out[4] = (ac * aty - ad * atx) * det;
  out[5] = (ab * atx - aa * aty) * det;
  return out;
}

/**
 * Calculates the determinant of a mat2d
 *
 * @param {mat2d} a the source matrix
 * @returns {Number} determinant of a
 */
function determinant(a) {
  return a[0] * a[3] - a[1] * a[2];
}

/**
 * Multiplies two mat2d's
 *
 * @param {mat2d} out the receiving matrix
 * @param {mat2d} a the first operand
 * @param {mat2d} b the second operand
 * @returns {mat2d} out
 */
function multiply(out, a, b) {
  var a0 = a[0],
      a1 = a[1],
      a2 = a[2],
      a3 = a[3],
      a4 = a[4],
      a5 = a[5];
  var b0 = b[0],
      b1 = b[1],
      b2 = b[2],
      b3 = b[3],
      b4 = b[4],
      b5 = b[5];
  out[0] = a0 * b0 + a2 * b1;
  out[1] = a1 * b0 + a3 * b1;
  out[2] = a0 * b2 + a2 * b3;
  out[3] = a1 * b2 + a3 * b3;
  out[4] = a0 * b4 + a2 * b5 + a4;
  out[5] = a1 * b4 + a3 * b5 + a5;
  return out;
}

/**
 * Rotates a mat2d by the given angle
 *
 * @param {mat2d} out the receiving matrix
 * @param {mat2d} a the matrix to rotate
 * @param {Number} rad the angle to rotate the matrix by
 * @returns {mat2d} out
 */
function rotate(out, a, rad) {
  var a0 = a[0],
      a1 = a[1],
      a2 = a[2],
      a3 = a[3],
      a4 = a[4],
      a5 = a[5];
  var s = Math.sin(rad);
  var c = Math.cos(rad);
  out[0] = a0 * c + a2 * s;
  out[1] = a1 * c + a3 * s;
  out[2] = a0 * -s + a2 * c;
  out[3] = a1 * -s + a3 * c;
  out[4] = a4;
  out[5] = a5;
  return out;
}

/**
 * Scales the mat2d by the dimensions in the given vec2
 *
 * @param {mat2d} out the receiving matrix
 * @param {mat2d} a the matrix to translate
 * @param {vec2} v the vec2 to scale the matrix by
 * @returns {mat2d} out
 **/
function scale(out, a, v) {
  var a0 = a[0],
      a1 = a[1],
      a2 = a[2],
      a3 = a[3],
      a4 = a[4],
      a5 = a[5];
  var v0 = v[0],
      v1 = v[1];
  out[0] = a0 * v0;
  out[1] = a1 * v0;
  out[2] = a2 * v1;
  out[3] = a3 * v1;
  out[4] = a4;
  out[5] = a5;
  return out;
}

/**
 * Translates the mat2d by the dimensions in the given vec2
 *
 * @param {mat2d} out the receiving matrix
 * @param {mat2d} a the matrix to translate
 * @param {vec2} v the vec2 to translate the matrix by
 * @returns {mat2d} out
 **/
function translate(out, a, v) {
  var a0 = a[0],
      a1 = a[1],
      a2 = a[2],
      a3 = a[3],
      a4 = a[4],
      a5 = a[5];
  var v0 = v[0],
      v1 = v[1];
  out[0] = a0;
  out[1] = a1;
  out[2] = a2;
  out[3] = a3;
  out[4] = a0 * v0 + a2 * v1 + a4;
  out[5] = a1 * v0 + a3 * v1 + a5;
  return out;
}

/**
 * Creates a matrix from a given angle
 * This is equivalent to (but much faster than):
 *
 *     mat2d.identity(dest);
 *     mat2d.rotate(dest, dest, rad);
 *
 * @param {mat2d} out mat2d receiving operation result
 * @param {Number} rad the angle to rotate the matrix by
 * @returns {mat2d} out
 */
function fromRotation(out, rad) {
  var s = Math.sin(rad),
      c = Math.cos(rad);
  out[0] = c;
  out[1] = s;
  out[2] = -s;
  out[3] = c;
  out[4] = 0;
  out[5] = 0;
  return out;
}

/**
 * Creates a matrix from a vector scaling
 * This is equivalent to (but much faster than):
 *
 *     mat2d.identity(dest);
 *     mat2d.scale(dest, dest, vec);
 *
 * @param {mat2d} out mat2d receiving operation result
 * @param {vec2} v Scaling vector
 * @returns {mat2d} out
 */
function fromScaling(out, v) {
  out[0] = v[0];
  out[1] = 0;
  out[2] = 0;
  out[3] = v[1];
  out[4] = 0;
  out[5] = 0;
  return out;
}

/**
 * Creates a matrix from a vector translation
 * This is equivalent to (but much faster than):
 *
 *     mat2d.identity(dest);
 *     mat2d.translate(dest, dest, vec);
 *
 * @param {mat2d} out mat2d receiving operation result
 * @param {vec2} v Translation vector
 * @returns {mat2d} out
 */
function fromTranslation(out, v) {
  out[0] = 1;
  out[1] = 0;
  out[2] = 0;
  out[3] = 1;
  out[4] = v[0];
  out[5] = v[1];
  return out;
}

/**
 * Returns a string representation of a mat2d
 *
 * @param {mat2d} a matrix to represent as a string
 * @returns {String} string representation of the matrix
 */
function str(a) {
  return 'mat2d(' + a[0] + ', ' + a[1] + ', ' + a[2] + ', ' + a[3] + ', ' + a[4] + ', ' + a[5] + ')';
}

/**
 * Returns Frobenius norm of a mat2d
 *
 * @param {mat2d} a the matrix to calculate Frobenius norm of
 * @returns {Number} Frobenius norm
 */
function frob(a) {
  return Math.sqrt(Math.pow(a[0], 2) + Math.pow(a[1], 2) + Math.pow(a[2], 2) + Math.pow(a[3], 2) + Math.pow(a[4], 2) + Math.pow(a[5], 2) + 1);
}

/**
 * Adds two mat2d's
 *
 * @param {mat2d} out the receiving matrix
 * @param {mat2d} a the first operand
 * @param {mat2d} b the second operand
 * @returns {mat2d} out
 */
function add(out, a, b) {
  out[0] = a[0] + b[0];
  out[1] = a[1] + b[1];
  out[2] = a[2] + b[2];
  out[3] = a[3] + b[3];
  out[4] = a[4] + b[4];
  out[5] = a[5] + b[5];
  return out;
}

/**
 * Subtracts matrix b from matrix a
 *
 * @param {mat2d} out the receiving matrix
 * @param {mat2d} a the first operand
 * @param {mat2d} b the second operand
 * @returns {mat2d} out
 */
function subtract(out, a, b) {
  out[0] = a[0] - b[0];
  out[1] = a[1] - b[1];
  out[2] = a[2] - b[2];
  out[3] = a[3] - b[3];
  out[4] = a[4] - b[4];
  out[5] = a[5] - b[5];
  return out;
}

/**
 * Multiply each element of the matrix by a scalar.
 *
 * @param {mat2d} out the receiving matrix
 * @param {mat2d} a the matrix to scale
 * @param {Number} b amount to scale the matrix's elements by
 * @returns {mat2d} out
 */
function multiplyScalar(out, a, b) {
  out[0] = a[0] * b;
  out[1] = a[1] * b;
  out[2] = a[2] * b;
  out[3] = a[3] * b;
  out[4] = a[4] * b;
  out[5] = a[5] * b;
  return out;
}

/**
 * Adds two mat2d's after multiplying each element of the second operand by a scalar value.
 *
 * @param {mat2d} out the receiving vector
 * @param {mat2d} a the first operand
 * @param {mat2d} b the second operand
 * @param {Number} scale the amount to scale b's elements by before adding
 * @returns {mat2d} out
 */
function multiplyScalarAndAdd(out, a, b, scale) {
  out[0] = a[0] + b[0] * scale;
  out[1] = a[1] + b[1] * scale;
  out[2] = a[2] + b[2] * scale;
  out[3] = a[3] + b[3] * scale;
  out[4] = a[4] + b[4] * scale;
  out[5] = a[5] + b[5] * scale;
  return out;
}

/**
 * Returns whether or not the matrices have exactly the same elements in the same position (when compared with ===)
 *
 * @param {mat2d} a The first matrix.
 * @param {mat2d} b The second matrix.
 * @returns {Boolean} True if the matrices are equal, false otherwise.
 */
function exactEquals(a, b) {
  return a[0] === b[0] && a[1] === b[1] && a[2] === b[2] && a[3] === b[3] && a[4] === b[4] && a[5] === b[5];
}

/**
 * Returns whether or not the matrices have approximately the same elements in the same position.
 *
 * @param {mat2d} a The first matrix.
 * @param {mat2d} b The second matrix.
 * @returns {Boolean} True if the matrices are equal, false otherwise.
 */
function equals(a, b) {
  var a0 = a[0],
      a1 = a[1],
      a2 = a[2],
      a3 = a[3],
      a4 = a[4],
      a5 = a[5];
  var b0 = b[0],
      b1 = b[1],
      b2 = b[2],
      b3 = b[3],
      b4 = b[4],
      b5 = b[5];
  return Math.abs(a0 - b0) <= __WEBPACK_IMPORTED_MODULE_0__common_js__["b" /* EPSILON */] * Math.max(1.0, Math.abs(a0), Math.abs(b0)) && Math.abs(a1 - b1) <= __WEBPACK_IMPORTED_MODULE_0__common_js__["b" /* EPSILON */] * Math.max(1.0, Math.abs(a1), Math.abs(b1)) && Math.abs(a2 - b2) <= __WEBPACK_IMPORTED_MODULE_0__common_js__["b" /* EPSILON */] * Math.max(1.0, Math.abs(a2), Math.abs(b2)) && Math.abs(a3 - b3) <= __WEBPACK_IMPORTED_MODULE_0__common_js__["b" /* EPSILON */] * Math.max(1.0, Math.abs(a3), Math.abs(b3)) && Math.abs(a4 - b4) <= __WEBPACK_IMPORTED_MODULE_0__common_js__["b" /* EPSILON */] * Math.max(1.0, Math.abs(a4), Math.abs(b4)) && Math.abs(a5 - b5) <= __WEBPACK_IMPORTED_MODULE_0__common_js__["b" /* EPSILON */] * Math.max(1.0, Math.abs(a5), Math.abs(b5));
}

/**
 * Alias for {@link mat2d.multiply}
 * @function
 */
var mul = multiply;

/**
 * Alias for {@link mat2d.subtract}
 * @function
 */
var sub = subtract;

/***/ }),
/* 39 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export create */
/* unused harmony export clone */
/* unused harmony export fromValues */
/* unused harmony export fromRotationTranslationValues */
/* unused harmony export fromRotationTranslation */
/* unused harmony export fromTranslation */
/* unused harmony export fromRotation */
/* unused harmony export fromMat4 */
/* unused harmony export copy */
/* unused harmony export identity */
/* unused harmony export set */
/* unused harmony export getReal */
/* unused harmony export getDual */
/* unused harmony export setReal */
/* unused harmony export setDual */
/* unused harmony export getTranslation */
/* unused harmony export translate */
/* unused harmony export rotateX */
/* unused harmony export rotateY */
/* unused harmony export rotateZ */
/* unused harmony export rotateByQuatAppend */
/* unused harmony export rotateByQuatPrepend */
/* unused harmony export rotateAroundAxis */
/* unused harmony export add */
/* unused harmony export multiply */
/* unused harmony export mul */
/* unused harmony export scale */
/* unused harmony export dot */
/* unused harmony export lerp */
/* unused harmony export invert */
/* unused harmony export conjugate */
/* unused harmony export length */
/* unused harmony export len */
/* unused harmony export squaredLength */
/* unused harmony export sqrLen */
/* unused harmony export normalize */
/* unused harmony export str */
/* unused harmony export exactEquals */
/* unused harmony export equals */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__common_js__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__quat_js__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__mat4_js__ = __webpack_require__(18);




/**
 * Dual Quaternion<br>
 * Format: [real, dual]<br>
 * Quaternion format: XYZW<br>
 * Make sure to have normalized dual quaternions, otherwise the functions may not work as intended.<br>
 * @module quat2
 */

/**
 * Creates a new identity dual quat
 *
 * @returns {quat2} a new dual quaternion [real -> rotation, dual -> translation]
 */
function create() {
  var dq = new __WEBPACK_IMPORTED_MODULE_0__common_js__["a" /* ARRAY_TYPE */](8);
  if (__WEBPACK_IMPORTED_MODULE_0__common_js__["a" /* ARRAY_TYPE */] != Float32Array) {
    dq[0] = 0;
    dq[1] = 0;
    dq[2] = 0;
    dq[4] = 0;
    dq[5] = 0;
    dq[6] = 0;
    dq[7] = 0;
  }
  dq[3] = 1;
  return dq;
}

/**
 * Creates a new quat initialized with values from an existing quaternion
 *
 * @param {quat2} a dual quaternion to clone
 * @returns {quat2} new dual quaternion
 * @function
 */
function clone(a) {
  var dq = new __WEBPACK_IMPORTED_MODULE_0__common_js__["a" /* ARRAY_TYPE */](8);
  dq[0] = a[0];
  dq[1] = a[1];
  dq[2] = a[2];
  dq[3] = a[3];
  dq[4] = a[4];
  dq[5] = a[5];
  dq[6] = a[6];
  dq[7] = a[7];
  return dq;
}

/**
 * Creates a new dual quat initialized with the given values
 *
 * @param {Number} x1 X component
 * @param {Number} y1 Y component
 * @param {Number} z1 Z component
 * @param {Number} w1 W component
 * @param {Number} x2 X component
 * @param {Number} y2 Y component
 * @param {Number} z2 Z component
 * @param {Number} w2 W component
 * @returns {quat2} new dual quaternion
 * @function
 */
function fromValues(x1, y1, z1, w1, x2, y2, z2, w2) {
  var dq = new __WEBPACK_IMPORTED_MODULE_0__common_js__["a" /* ARRAY_TYPE */](8);
  dq[0] = x1;
  dq[1] = y1;
  dq[2] = z1;
  dq[3] = w1;
  dq[4] = x2;
  dq[5] = y2;
  dq[6] = z2;
  dq[7] = w2;
  return dq;
}

/**
 * Creates a new dual quat from the given values (quat and translation)
 *
 * @param {Number} x1 X component
 * @param {Number} y1 Y component
 * @param {Number} z1 Z component
 * @param {Number} w1 W component
 * @param {Number} x2 X component (translation)
 * @param {Number} y2 Y component (translation)
 * @param {Number} z2 Z component (translation)
 * @returns {quat2} new dual quaternion
 * @function
 */
function fromRotationTranslationValues(x1, y1, z1, w1, x2, y2, z2) {
  var dq = new __WEBPACK_IMPORTED_MODULE_0__common_js__["a" /* ARRAY_TYPE */](8);
  dq[0] = x1;
  dq[1] = y1;
  dq[2] = z1;
  dq[3] = w1;
  var ax = x2 * 0.5,
      ay = y2 * 0.5,
      az = z2 * 0.5;
  dq[4] = ax * w1 + ay * z1 - az * y1;
  dq[5] = ay * w1 + az * x1 - ax * z1;
  dq[6] = az * w1 + ax * y1 - ay * x1;
  dq[7] = -ax * x1 - ay * y1 - az * z1;
  return dq;
}

/**
 * Creates a dual quat from a quaternion and a translation
 *
 * @param {quat2} dual quaternion receiving operation result
 * @param {quat} q quaternion
 * @param {vec3} t tranlation vector
 * @returns {quat2} dual quaternion receiving operation result
 * @function
 */
function fromRotationTranslation(out, q, t) {
  var ax = t[0] * 0.5,
      ay = t[1] * 0.5,
      az = t[2] * 0.5,
      bx = q[0],
      by = q[1],
      bz = q[2],
      bw = q[3];
  out[0] = bx;
  out[1] = by;
  out[2] = bz;
  out[3] = bw;
  out[4] = ax * bw + ay * bz - az * by;
  out[5] = ay * bw + az * bx - ax * bz;
  out[6] = az * bw + ax * by - ay * bx;
  out[7] = -ax * bx - ay * by - az * bz;
  return out;
}

/**
 * Creates a dual quat from a translation
 *
 * @param {quat2} dual quaternion receiving operation result
 * @param {vec3} t translation vector
 * @returns {quat2} dual quaternion receiving operation result
 * @function
 */
function fromTranslation(out, t) {
  out[0] = 0;
  out[1] = 0;
  out[2] = 0;
  out[3] = 1;
  out[4] = t[0] * 0.5;
  out[5] = t[1] * 0.5;
  out[6] = t[2] * 0.5;
  out[7] = 0;
  return out;
}

/**
 * Creates a dual quat from a quaternion
 *
 * @param {quat2} dual quaternion receiving operation result
 * @param {quat} q the quaternion
 * @returns {quat2} dual quaternion receiving operation result
 * @function
 */
function fromRotation(out, q) {
  out[0] = q[0];
  out[1] = q[1];
  out[2] = q[2];
  out[3] = q[3];
  out[4] = 0;
  out[5] = 0;
  out[6] = 0;
  out[7] = 0;
  return out;
}

/**
 * Creates a new dual quat from a matrix (4x4)
 *
 * @param {quat2} out the dual quaternion
 * @param {mat4} a the matrix
 * @returns {quat2} dual quat receiving operation result
 * @function
 */
function fromMat4(out, a) {
  //TODO Optimize this
  var outer = __WEBPACK_IMPORTED_MODULE_1__quat_js__["b" /* create */]();
  __WEBPACK_IMPORTED_MODULE_2__mat4_js__["getRotation"](outer, a);
  var t = new __WEBPACK_IMPORTED_MODULE_0__common_js__["a" /* ARRAY_TYPE */](3);
  __WEBPACK_IMPORTED_MODULE_2__mat4_js__["getTranslation"](t, a);
  fromRotationTranslation(out, outer, t);
  return out;
}

/**
 * Copy the values from one dual quat to another
 *
 * @param {quat2} out the receiving dual quaternion
 * @param {quat2} a the source dual quaternion
 * @returns {quat2} out
 * @function
 */
function copy(out, a) {
  out[0] = a[0];
  out[1] = a[1];
  out[2] = a[2];
  out[3] = a[3];
  out[4] = a[4];
  out[5] = a[5];
  out[6] = a[6];
  out[7] = a[7];
  return out;
}

/**
 * Set a dual quat to the identity dual quaternion
 *
 * @param {quat2} out the receiving quaternion
 * @returns {quat2} out
 */
function identity(out) {
  out[0] = 0;
  out[1] = 0;
  out[2] = 0;
  out[3] = 1;
  out[4] = 0;
  out[5] = 0;
  out[6] = 0;
  out[7] = 0;
  return out;
}

/**
 * Set the components of a dual quat to the given values
 *
 * @param {quat2} out the receiving quaternion
 * @param {Number} x1 X component
 * @param {Number} y1 Y component
 * @param {Number} z1 Z component
 * @param {Number} w1 W component
 * @param {Number} x2 X component
 * @param {Number} y2 Y component
 * @param {Number} z2 Z component
 * @param {Number} w2 W component
 * @returns {quat2} out
 * @function
 */
function set(out, x1, y1, z1, w1, x2, y2, z2, w2) {
  out[0] = x1;
  out[1] = y1;
  out[2] = z1;
  out[3] = w1;

  out[4] = x2;
  out[5] = y2;
  out[6] = z2;
  out[7] = w2;
  return out;
}

/**
 * Gets the real part of a dual quat
 * @param  {quat} out real part
 * @param  {quat2} a Dual Quaternion
 * @return {quat} real part
 */
var getReal = __WEBPACK_IMPORTED_MODULE_1__quat_js__["a" /* copy */];

/**
 * Gets the dual part of a dual quat
 * @param  {quat} out dual part
 * @param  {quat2} a Dual Quaternion
 * @return {quat} dual part
 */
function getDual(out, a) {
  out[0] = a[4];
  out[1] = a[5];
  out[2] = a[6];
  out[3] = a[7];
  return out;
}

/**
 * Set the real component of a dual quat to the given quaternion
 *
 * @param {quat2} out the receiving quaternion
 * @param {quat} q a quaternion representing the real part
 * @returns {quat2} out
 * @function
 */
var setReal = __WEBPACK_IMPORTED_MODULE_1__quat_js__["a" /* copy */];

/**
 * Set the dual component of a dual quat to the given quaternion
 *
 * @param {quat2} out the receiving quaternion
 * @param {quat} q a quaternion representing the dual part
 * @returns {quat2} out
 * @function
 */
function setDual(out, q) {
  out[4] = q[0];
  out[5] = q[1];
  out[6] = q[2];
  out[7] = q[3];
  return out;
}

/**
 * Gets the translation of a normalized dual quat
 * @param  {vec3} out translation
 * @param  {quat2} a Dual Quaternion to be decomposed
 * @return {vec3} translation
 */
function getTranslation(out, a) {
  var ax = a[4],
      ay = a[5],
      az = a[6],
      aw = a[7],
      bx = -a[0],
      by = -a[1],
      bz = -a[2],
      bw = a[3];
  out[0] = (ax * bw + aw * bx + ay * bz - az * by) * 2;
  out[1] = (ay * bw + aw * by + az * bx - ax * bz) * 2;
  out[2] = (az * bw + aw * bz + ax * by - ay * bx) * 2;
  return out;
}

/**
 * Translates a dual quat by the given vector
 *
 * @param {quat2} out the receiving dual quaternion
 * @param {quat2} a the dual quaternion to translate
 * @param {vec3} v vector to translate by
 * @returns {quat2} out
 */
function translate(out, a, v) {
  var ax1 = a[0],
      ay1 = a[1],
      az1 = a[2],
      aw1 = a[3],
      bx1 = v[0] * 0.5,
      by1 = v[1] * 0.5,
      bz1 = v[2] * 0.5,
      ax2 = a[4],
      ay2 = a[5],
      az2 = a[6],
      aw2 = a[7];
  out[0] = ax1;
  out[1] = ay1;
  out[2] = az1;
  out[3] = aw1;
  out[4] = aw1 * bx1 + ay1 * bz1 - az1 * by1 + ax2;
  out[5] = aw1 * by1 + az1 * bx1 - ax1 * bz1 + ay2;
  out[6] = aw1 * bz1 + ax1 * by1 - ay1 * bx1 + az2;
  out[7] = -ax1 * bx1 - ay1 * by1 - az1 * bz1 + aw2;
  return out;
}

/**
 * Rotates a dual quat around the X axis
 *
 * @param {quat2} out the receiving dual quaternion
 * @param {quat2} a the dual quaternion to rotate
 * @param {number} rad how far should the rotation be
 * @returns {quat2} out
 */
function rotateX(out, a, rad) {
  var bx = -a[0],
      by = -a[1],
      bz = -a[2],
      bw = a[3],
      ax = a[4],
      ay = a[5],
      az = a[6],
      aw = a[7],
      ax1 = ax * bw + aw * bx + ay * bz - az * by,
      ay1 = ay * bw + aw * by + az * bx - ax * bz,
      az1 = az * bw + aw * bz + ax * by - ay * bx,
      aw1 = aw * bw - ax * bx - ay * by - az * bz;
  __WEBPACK_IMPORTED_MODULE_1__quat_js__["e" /* rotateX */](out, a, rad);
  bx = out[0];
  by = out[1];
  bz = out[2];
  bw = out[3];
  out[4] = ax1 * bw + aw1 * bx + ay1 * bz - az1 * by;
  out[5] = ay1 * bw + aw1 * by + az1 * bx - ax1 * bz;
  out[6] = az1 * bw + aw1 * bz + ax1 * by - ay1 * bx;
  out[7] = aw1 * bw - ax1 * bx - ay1 * by - az1 * bz;
  return out;
}

/**
 * Rotates a dual quat around the Y axis
 *
 * @param {quat2} out the receiving dual quaternion
 * @param {quat2} a the dual quaternion to rotate
 * @param {number} rad how far should the rotation be
 * @returns {quat2} out
 */
function rotateY(out, a, rad) {
  var bx = -a[0],
      by = -a[1],
      bz = -a[2],
      bw = a[3],
      ax = a[4],
      ay = a[5],
      az = a[6],
      aw = a[7],
      ax1 = ax * bw + aw * bx + ay * bz - az * by,
      ay1 = ay * bw + aw * by + az * bx - ax * bz,
      az1 = az * bw + aw * bz + ax * by - ay * bx,
      aw1 = aw * bw - ax * bx - ay * by - az * bz;
  __WEBPACK_IMPORTED_MODULE_1__quat_js__["f" /* rotateY */](out, a, rad);
  bx = out[0];
  by = out[1];
  bz = out[2];
  bw = out[3];
  out[4] = ax1 * bw + aw1 * bx + ay1 * bz - az1 * by;
  out[5] = ay1 * bw + aw1 * by + az1 * bx - ax1 * bz;
  out[6] = az1 * bw + aw1 * bz + ax1 * by - ay1 * bx;
  out[7] = aw1 * bw - ax1 * bx - ay1 * by - az1 * bz;
  return out;
}

/**
 * Rotates a dual quat around the Z axis
 *
 * @param {quat2} out the receiving dual quaternion
 * @param {quat2} a the dual quaternion to rotate
 * @param {number} rad how far should the rotation be
 * @returns {quat2} out
 */
function rotateZ(out, a, rad) {
  var bx = -a[0],
      by = -a[1],
      bz = -a[2],
      bw = a[3],
      ax = a[4],
      ay = a[5],
      az = a[6],
      aw = a[7],
      ax1 = ax * bw + aw * bx + ay * bz - az * by,
      ay1 = ay * bw + aw * by + az * bx - ax * bz,
      az1 = az * bw + aw * bz + ax * by - ay * bx,
      aw1 = aw * bw - ax * bx - ay * by - az * bz;
  __WEBPACK_IMPORTED_MODULE_1__quat_js__["g" /* rotateZ */](out, a, rad);
  bx = out[0];
  by = out[1];
  bz = out[2];
  bw = out[3];
  out[4] = ax1 * bw + aw1 * bx + ay1 * bz - az1 * by;
  out[5] = ay1 * bw + aw1 * by + az1 * bx - ax1 * bz;
  out[6] = az1 * bw + aw1 * bz + ax1 * by - ay1 * bx;
  out[7] = aw1 * bw - ax1 * bx - ay1 * by - az1 * bz;
  return out;
}

/**
 * Rotates a dual quat by a given quaternion (a * q)
 *
 * @param {quat2} out the receiving dual quaternion
 * @param {quat2} a the dual quaternion to rotate
 * @param {quat} q quaternion to rotate by
 * @returns {quat2} out
 */
function rotateByQuatAppend(out, a, q) {
  var qx = q[0],
      qy = q[1],
      qz = q[2],
      qw = q[3],
      ax = a[0],
      ay = a[1],
      az = a[2],
      aw = a[3];

  out[0] = ax * qw + aw * qx + ay * qz - az * qy;
  out[1] = ay * qw + aw * qy + az * qx - ax * qz;
  out[2] = az * qw + aw * qz + ax * qy - ay * qx;
  out[3] = aw * qw - ax * qx - ay * qy - az * qz;
  ax = a[4];
  ay = a[5];
  az = a[6];
  aw = a[7];
  out[4] = ax * qw + aw * qx + ay * qz - az * qy;
  out[5] = ay * qw + aw * qy + az * qx - ax * qz;
  out[6] = az * qw + aw * qz + ax * qy - ay * qx;
  out[7] = aw * qw - ax * qx - ay * qy - az * qz;
  return out;
}

/**
 * Rotates a dual quat by a given quaternion (q * a)
 *
 * @param {quat2} out the receiving dual quaternion
 * @param {quat} q quaternion to rotate by
 * @param {quat2} a the dual quaternion to rotate
 * @returns {quat2} out
 */
function rotateByQuatPrepend(out, q, a) {
  var qx = q[0],
      qy = q[1],
      qz = q[2],
      qw = q[3],
      bx = a[0],
      by = a[1],
      bz = a[2],
      bw = a[3];

  out[0] = qx * bw + qw * bx + qy * bz - qz * by;
  out[1] = qy * bw + qw * by + qz * bx - qx * bz;
  out[2] = qz * bw + qw * bz + qx * by - qy * bx;
  out[3] = qw * bw - qx * bx - qy * by - qz * bz;
  bx = a[4];
  by = a[5];
  bz = a[6];
  bw = a[7];
  out[4] = qx * bw + qw * bx + qy * bz - qz * by;
  out[5] = qy * bw + qw * by + qz * bx - qx * bz;
  out[6] = qz * bw + qw * bz + qx * by - qy * bx;
  out[7] = qw * bw - qx * bx - qy * by - qz * bz;
  return out;
}

/**
 * Rotates a dual quat around a given axis. Does the normalisation automatically
 *
 * @param {quat2} out the receiving dual quaternion
 * @param {quat2} a the dual quaternion to rotate
 * @param {vec3} axis the axis to rotate around
 * @param {Number} rad how far the rotation should be
 * @returns {quat2} out
 */
function rotateAroundAxis(out, a, axis, rad) {
  //Special case for rad = 0
  if (Math.abs(rad) < __WEBPACK_IMPORTED_MODULE_0__common_js__["b" /* EPSILON */]) {
    return copy(out, a);
  }
  var axisLength = Math.sqrt(axis[0] * axis[0] + axis[1] * axis[1] + axis[2] * axis[2]);

  rad = rad * 0.5;
  var s = Math.sin(rad);
  var bx = s * axis[0] / axisLength;
  var by = s * axis[1] / axisLength;
  var bz = s * axis[2] / axisLength;
  var bw = Math.cos(rad);

  var ax1 = a[0],
      ay1 = a[1],
      az1 = a[2],
      aw1 = a[3];
  out[0] = ax1 * bw + aw1 * bx + ay1 * bz - az1 * by;
  out[1] = ay1 * bw + aw1 * by + az1 * bx - ax1 * bz;
  out[2] = az1 * bw + aw1 * bz + ax1 * by - ay1 * bx;
  out[3] = aw1 * bw - ax1 * bx - ay1 * by - az1 * bz;

  var ax = a[4],
      ay = a[5],
      az = a[6],
      aw = a[7];
  out[4] = ax * bw + aw * bx + ay * bz - az * by;
  out[5] = ay * bw + aw * by + az * bx - ax * bz;
  out[6] = az * bw + aw * bz + ax * by - ay * bx;
  out[7] = aw * bw - ax * bx - ay * by - az * bz;

  return out;
}

/**
 * Adds two dual quat's
 *
 * @param {quat2} out the receiving dual quaternion
 * @param {quat2} a the first operand
 * @param {quat2} b the second operand
 * @returns {quat2} out
 * @function
 */
function add(out, a, b) {
  out[0] = a[0] + b[0];
  out[1] = a[1] + b[1];
  out[2] = a[2] + b[2];
  out[3] = a[3] + b[3];
  out[4] = a[4] + b[4];
  out[5] = a[5] + b[5];
  out[6] = a[6] + b[6];
  out[7] = a[7] + b[7];
  return out;
}

/**
 * Multiplies two dual quat's
 *
 * @param {quat2} out the receiving dual quaternion
 * @param {quat2} a the first operand
 * @param {quat2} b the second operand
 * @returns {quat2} out
 */
function multiply(out, a, b) {
  var ax0 = a[0],
      ay0 = a[1],
      az0 = a[2],
      aw0 = a[3],
      bx1 = b[4],
      by1 = b[5],
      bz1 = b[6],
      bw1 = b[7],
      ax1 = a[4],
      ay1 = a[5],
      az1 = a[6],
      aw1 = a[7],
      bx0 = b[0],
      by0 = b[1],
      bz0 = b[2],
      bw0 = b[3];
  out[0] = ax0 * bw0 + aw0 * bx0 + ay0 * bz0 - az0 * by0;
  out[1] = ay0 * bw0 + aw0 * by0 + az0 * bx0 - ax0 * bz0;
  out[2] = az0 * bw0 + aw0 * bz0 + ax0 * by0 - ay0 * bx0;
  out[3] = aw0 * bw0 - ax0 * bx0 - ay0 * by0 - az0 * bz0;
  out[4] = ax0 * bw1 + aw0 * bx1 + ay0 * bz1 - az0 * by1 + ax1 * bw0 + aw1 * bx0 + ay1 * bz0 - az1 * by0;
  out[5] = ay0 * bw1 + aw0 * by1 + az0 * bx1 - ax0 * bz1 + ay1 * bw0 + aw1 * by0 + az1 * bx0 - ax1 * bz0;
  out[6] = az0 * bw1 + aw0 * bz1 + ax0 * by1 - ay0 * bx1 + az1 * bw0 + aw1 * bz0 + ax1 * by0 - ay1 * bx0;
  out[7] = aw0 * bw1 - ax0 * bx1 - ay0 * by1 - az0 * bz1 + aw1 * bw0 - ax1 * bx0 - ay1 * by0 - az1 * bz0;
  return out;
}

/**
 * Alias for {@link quat2.multiply}
 * @function
 */
var mul = multiply;

/**
 * Scales a dual quat by a scalar number
 *
 * @param {quat2} out the receiving dual quat
 * @param {quat2} a the dual quat to scale
 * @param {Number} b amount to scale the dual quat by
 * @returns {quat2} out
 * @function
 */
function scale(out, a, b) {
  out[0] = a[0] * b;
  out[1] = a[1] * b;
  out[2] = a[2] * b;
  out[3] = a[3] * b;
  out[4] = a[4] * b;
  out[5] = a[5] * b;
  out[6] = a[6] * b;
  out[7] = a[7] * b;
  return out;
}

/**
 * Calculates the dot product of two dual quat's (The dot product of the real parts)
 *
 * @param {quat2} a the first operand
 * @param {quat2} b the second operand
 * @returns {Number} dot product of a and b
 * @function
 */
var dot = __WEBPACK_IMPORTED_MODULE_1__quat_js__["c" /* dot */];

/**
 * Performs a linear interpolation between two dual quats's
 * NOTE: The resulting dual quaternions won't always be normalized (The error is most noticeable when t = 0.5)
 *
 * @param {quat2} out the receiving dual quat
 * @param {quat2} a the first operand
 * @param {quat2} b the second operand
 * @param {Number} t interpolation amount, in the range [0-1], between the two inputs
 * @returns {quat2} out
 */
function lerp(out, a, b, t) {
  var mt = 1 - t;
  if (dot(a, b) < 0) t = -t;

  out[0] = a[0] * mt + b[0] * t;
  out[1] = a[1] * mt + b[1] * t;
  out[2] = a[2] * mt + b[2] * t;
  out[3] = a[3] * mt + b[3] * t;
  out[4] = a[4] * mt + b[4] * t;
  out[5] = a[5] * mt + b[5] * t;
  out[6] = a[6] * mt + b[6] * t;
  out[7] = a[7] * mt + b[7] * t;

  return out;
}

/**
 * Calculates the inverse of a dual quat. If they are normalized, conjugate is cheaper
 *
 * @param {quat2} out the receiving dual quaternion
 * @param {quat2} a dual quat to calculate inverse of
 * @returns {quat2} out
 */
function invert(out, a) {
  var sqlen = squaredLength(a);
  out[0] = -a[0] / sqlen;
  out[1] = -a[1] / sqlen;
  out[2] = -a[2] / sqlen;
  out[3] = a[3] / sqlen;
  out[4] = -a[4] / sqlen;
  out[5] = -a[5] / sqlen;
  out[6] = -a[6] / sqlen;
  out[7] = a[7] / sqlen;
  return out;
}

/**
 * Calculates the conjugate of a dual quat
 * If the dual quaternion is normalized, this function is faster than quat2.inverse and produces the same result.
 *
 * @param {quat2} out the receiving quaternion
 * @param {quat2} a quat to calculate conjugate of
 * @returns {quat2} out
 */
function conjugate(out, a) {
  out[0] = -a[0];
  out[1] = -a[1];
  out[2] = -a[2];
  out[3] = a[3];
  out[4] = -a[4];
  out[5] = -a[5];
  out[6] = -a[6];
  out[7] = a[7];
  return out;
}

/**
 * Calculates the length of a dual quat
 *
 * @param {quat2} a dual quat to calculate length of
 * @returns {Number} length of a
 * @function
 */
var length = __WEBPACK_IMPORTED_MODULE_1__quat_js__["d" /* length */];

/**
 * Alias for {@link quat2.length}
 * @function
 */
var len = length;

/**
 * Calculates the squared length of a dual quat
 *
 * @param {quat2} a dual quat to calculate squared length of
 * @returns {Number} squared length of a
 * @function
 */
var squaredLength = __WEBPACK_IMPORTED_MODULE_1__quat_js__["h" /* squaredLength */];

/**
 * Alias for {@link quat2.squaredLength}
 * @function
 */
var sqrLen = squaredLength;

/**
 * Normalize a dual quat
 *
 * @param {quat2} out the receiving dual quaternion
 * @param {quat2} a dual quaternion to normalize
 * @returns {quat2} out
 * @function
 */
function normalize(out, a) {
  var magnitude = squaredLength(a);
  if (magnitude > 0) {
    magnitude = Math.sqrt(magnitude);

    var a0 = a[0] / magnitude;
    var a1 = a[1] / magnitude;
    var a2 = a[2] / magnitude;
    var a3 = a[3] / magnitude;

    var b0 = a[4];
    var b1 = a[5];
    var b2 = a[6];
    var b3 = a[7];

    var a_dot_b = a0 * b0 + a1 * b1 + a2 * b2 + a3 * b3;

    out[0] = a0;
    out[1] = a1;
    out[2] = a2;
    out[3] = a3;

    out[4] = (b0 - a0 * a_dot_b) / magnitude;
    out[5] = (b1 - a1 * a_dot_b) / magnitude;
    out[6] = (b2 - a2 * a_dot_b) / magnitude;
    out[7] = (b3 - a3 * a_dot_b) / magnitude;
  }
  return out;
}

/**
 * Returns a string representation of a dual quatenion
 *
 * @param {quat2} a dual quaternion to represent as a string
 * @returns {String} string representation of the dual quat
 */
function str(a) {
  return 'quat2(' + a[0] + ', ' + a[1] + ', ' + a[2] + ', ' + a[3] + ', ' + a[4] + ', ' + a[5] + ', ' + a[6] + ', ' + a[7] + ')';
}

/**
 * Returns whether or not the dual quaternions have exactly the same elements in the same position (when compared with ===)
 *
 * @param {quat2} a the first dual quaternion.
 * @param {quat2} b the second dual quaternion.
 * @returns {Boolean} true if the dual quaternions are equal, false otherwise.
 */
function exactEquals(a, b) {
  return a[0] === b[0] && a[1] === b[1] && a[2] === b[2] && a[3] === b[3] && a[4] === b[4] && a[5] === b[5] && a[6] === b[6] && a[7] === b[7];
}

/**
 * Returns whether or not the dual quaternions have approximately the same elements in the same position.
 *
 * @param {quat2} a the first dual quat.
 * @param {quat2} b the second dual quat.
 * @returns {Boolean} true if the dual quats are equal, false otherwise.
 */
function equals(a, b) {
  var a0 = a[0],
      a1 = a[1],
      a2 = a[2],
      a3 = a[3],
      a4 = a[4],
      a5 = a[5],
      a6 = a[6],
      a7 = a[7];
  var b0 = b[0],
      b1 = b[1],
      b2 = b[2],
      b3 = b[3],
      b4 = b[4],
      b5 = b[5],
      b6 = b[6],
      b7 = b[7];
  return Math.abs(a0 - b0) <= __WEBPACK_IMPORTED_MODULE_0__common_js__["b" /* EPSILON */] * Math.max(1.0, Math.abs(a0), Math.abs(b0)) && Math.abs(a1 - b1) <= __WEBPACK_IMPORTED_MODULE_0__common_js__["b" /* EPSILON */] * Math.max(1.0, Math.abs(a1), Math.abs(b1)) && Math.abs(a2 - b2) <= __WEBPACK_IMPORTED_MODULE_0__common_js__["b" /* EPSILON */] * Math.max(1.0, Math.abs(a2), Math.abs(b2)) && Math.abs(a3 - b3) <= __WEBPACK_IMPORTED_MODULE_0__common_js__["b" /* EPSILON */] * Math.max(1.0, Math.abs(a3), Math.abs(b3)) && Math.abs(a4 - b4) <= __WEBPACK_IMPORTED_MODULE_0__common_js__["b" /* EPSILON */] * Math.max(1.0, Math.abs(a4), Math.abs(b4)) && Math.abs(a5 - b5) <= __WEBPACK_IMPORTED_MODULE_0__common_js__["b" /* EPSILON */] * Math.max(1.0, Math.abs(a5), Math.abs(b5)) && Math.abs(a6 - b6) <= __WEBPACK_IMPORTED_MODULE_0__common_js__["b" /* EPSILON */] * Math.max(1.0, Math.abs(a6), Math.abs(b6)) && Math.abs(a7 - b7) <= __WEBPACK_IMPORTED_MODULE_0__common_js__["b" /* EPSILON */] * Math.max(1.0, Math.abs(a7), Math.abs(b7));
}

/***/ }),
/* 40 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (immutable) */ __webpack_exports__["create"] = create;
/* harmony export (immutable) */ __webpack_exports__["clone"] = clone;
/* harmony export (immutable) */ __webpack_exports__["fromValues"] = fromValues;
/* harmony export (immutable) */ __webpack_exports__["copy"] = copy;
/* harmony export (immutable) */ __webpack_exports__["set"] = set;
/* harmony export (immutable) */ __webpack_exports__["add"] = add;
/* harmony export (immutable) */ __webpack_exports__["subtract"] = subtract;
/* harmony export (immutable) */ __webpack_exports__["multiply"] = multiply;
/* harmony export (immutable) */ __webpack_exports__["divide"] = divide;
/* harmony export (immutable) */ __webpack_exports__["ceil"] = ceil;
/* harmony export (immutable) */ __webpack_exports__["floor"] = floor;
/* harmony export (immutable) */ __webpack_exports__["min"] = min;
/* harmony export (immutable) */ __webpack_exports__["max"] = max;
/* harmony export (immutable) */ __webpack_exports__["round"] = round;
/* harmony export (immutable) */ __webpack_exports__["scale"] = scale;
/* harmony export (immutable) */ __webpack_exports__["scaleAndAdd"] = scaleAndAdd;
/* harmony export (immutable) */ __webpack_exports__["distance"] = distance;
/* harmony export (immutable) */ __webpack_exports__["squaredDistance"] = squaredDistance;
/* harmony export (immutable) */ __webpack_exports__["length"] = length;
/* harmony export (immutable) */ __webpack_exports__["squaredLength"] = squaredLength;
/* harmony export (immutable) */ __webpack_exports__["negate"] = negate;
/* harmony export (immutable) */ __webpack_exports__["inverse"] = inverse;
/* harmony export (immutable) */ __webpack_exports__["normalize"] = normalize;
/* harmony export (immutable) */ __webpack_exports__["dot"] = dot;
/* harmony export (immutable) */ __webpack_exports__["cross"] = cross;
/* harmony export (immutable) */ __webpack_exports__["lerp"] = lerp;
/* harmony export (immutable) */ __webpack_exports__["random"] = random;
/* harmony export (immutable) */ __webpack_exports__["transformMat2"] = transformMat2;
/* harmony export (immutable) */ __webpack_exports__["transformMat2d"] = transformMat2d;
/* harmony export (immutable) */ __webpack_exports__["transformMat3"] = transformMat3;
/* harmony export (immutable) */ __webpack_exports__["transformMat4"] = transformMat4;
/* harmony export (immutable) */ __webpack_exports__["rotate"] = rotate;
/* harmony export (immutable) */ __webpack_exports__["angle"] = angle;
/* harmony export (immutable) */ __webpack_exports__["str"] = str;
/* harmony export (immutable) */ __webpack_exports__["exactEquals"] = exactEquals;
/* harmony export (immutable) */ __webpack_exports__["equals"] = equals;
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "len", function() { return len; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sub", function() { return sub; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mul", function() { return mul; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "div", function() { return div; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dist", function() { return dist; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sqrDist", function() { return sqrDist; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sqrLen", function() { return sqrLen; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "forEach", function() { return forEach; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__common_js__ = __webpack_require__(2);


/**
 * 2 Dimensional Vector
 * @module vec2
 */

/**
 * Creates a new, empty vec2
 *
 * @returns {vec2} a new 2D vector
 */
function create() {
  var out = new __WEBPACK_IMPORTED_MODULE_0__common_js__["a" /* ARRAY_TYPE */](2);
  if (__WEBPACK_IMPORTED_MODULE_0__common_js__["a" /* ARRAY_TYPE */] != Float32Array) {
    out[0] = 0;
    out[1] = 0;
  }
  return out;
}

/**
 * Creates a new vec2 initialized with values from an existing vector
 *
 * @param {vec2} a vector to clone
 * @returns {vec2} a new 2D vector
 */
function clone(a) {
  var out = new __WEBPACK_IMPORTED_MODULE_0__common_js__["a" /* ARRAY_TYPE */](2);
  out[0] = a[0];
  out[1] = a[1];
  return out;
}

/**
 * Creates a new vec2 initialized with the given values
 *
 * @param {Number} x X component
 * @param {Number} y Y component
 * @returns {vec2} a new 2D vector
 */
function fromValues(x, y) {
  var out = new __WEBPACK_IMPORTED_MODULE_0__common_js__["a" /* ARRAY_TYPE */](2);
  out[0] = x;
  out[1] = y;
  return out;
}

/**
 * Copy the values from one vec2 to another
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a the source vector
 * @returns {vec2} out
 */
function copy(out, a) {
  out[0] = a[0];
  out[1] = a[1];
  return out;
}

/**
 * Set the components of a vec2 to the given values
 *
 * @param {vec2} out the receiving vector
 * @param {Number} x X component
 * @param {Number} y Y component
 * @returns {vec2} out
 */
function set(out, x, y) {
  out[0] = x;
  out[1] = y;
  return out;
}

/**
 * Adds two vec2's
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a the first operand
 * @param {vec2} b the second operand
 * @returns {vec2} out
 */
function add(out, a, b) {
  out[0] = a[0] + b[0];
  out[1] = a[1] + b[1];
  return out;
}

/**
 * Subtracts vector b from vector a
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a the first operand
 * @param {vec2} b the second operand
 * @returns {vec2} out
 */
function subtract(out, a, b) {
  out[0] = a[0] - b[0];
  out[1] = a[1] - b[1];
  return out;
}

/**
 * Multiplies two vec2's
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a the first operand
 * @param {vec2} b the second operand
 * @returns {vec2} out
 */
function multiply(out, a, b) {
  out[0] = a[0] * b[0];
  out[1] = a[1] * b[1];
  return out;
}

/**
 * Divides two vec2's
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a the first operand
 * @param {vec2} b the second operand
 * @returns {vec2} out
 */
function divide(out, a, b) {
  out[0] = a[0] / b[0];
  out[1] = a[1] / b[1];
  return out;
}

/**
 * Math.ceil the components of a vec2
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a vector to ceil
 * @returns {vec2} out
 */
function ceil(out, a) {
  out[0] = Math.ceil(a[0]);
  out[1] = Math.ceil(a[1]);
  return out;
}

/**
 * Math.floor the components of a vec2
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a vector to floor
 * @returns {vec2} out
 */
function floor(out, a) {
  out[0] = Math.floor(a[0]);
  out[1] = Math.floor(a[1]);
  return out;
}

/**
 * Returns the minimum of two vec2's
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a the first operand
 * @param {vec2} b the second operand
 * @returns {vec2} out
 */
function min(out, a, b) {
  out[0] = Math.min(a[0], b[0]);
  out[1] = Math.min(a[1], b[1]);
  return out;
}

/**
 * Returns the maximum of two vec2's
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a the first operand
 * @param {vec2} b the second operand
 * @returns {vec2} out
 */
function max(out, a, b) {
  out[0] = Math.max(a[0], b[0]);
  out[1] = Math.max(a[1], b[1]);
  return out;
}

/**
 * Math.round the components of a vec2
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a vector to round
 * @returns {vec2} out
 */
function round(out, a) {
  out[0] = Math.round(a[0]);
  out[1] = Math.round(a[1]);
  return out;
}

/**
 * Scales a vec2 by a scalar number
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a the vector to scale
 * @param {Number} b amount to scale the vector by
 * @returns {vec2} out
 */
function scale(out, a, b) {
  out[0] = a[0] * b;
  out[1] = a[1] * b;
  return out;
}

/**
 * Adds two vec2's after scaling the second operand by a scalar value
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a the first operand
 * @param {vec2} b the second operand
 * @param {Number} scale the amount to scale b by before adding
 * @returns {vec2} out
 */
function scaleAndAdd(out, a, b, scale) {
  out[0] = a[0] + b[0] * scale;
  out[1] = a[1] + b[1] * scale;
  return out;
}

/**
 * Calculates the euclidian distance between two vec2's
 *
 * @param {vec2} a the first operand
 * @param {vec2} b the second operand
 * @returns {Number} distance between a and b
 */
function distance(a, b) {
  var x = b[0] - a[0],
      y = b[1] - a[1];
  return Math.sqrt(x * x + y * y);
}

/**
 * Calculates the squared euclidian distance between two vec2's
 *
 * @param {vec2} a the first operand
 * @param {vec2} b the second operand
 * @returns {Number} squared distance between a and b
 */
function squaredDistance(a, b) {
  var x = b[0] - a[0],
      y = b[1] - a[1];
  return x * x + y * y;
}

/**
 * Calculates the length of a vec2
 *
 * @param {vec2} a vector to calculate length of
 * @returns {Number} length of a
 */
function length(a) {
  var x = a[0],
      y = a[1];
  return Math.sqrt(x * x + y * y);
}

/**
 * Calculates the squared length of a vec2
 *
 * @param {vec2} a vector to calculate squared length of
 * @returns {Number} squared length of a
 */
function squaredLength(a) {
  var x = a[0],
      y = a[1];
  return x * x + y * y;
}

/**
 * Negates the components of a vec2
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a vector to negate
 * @returns {vec2} out
 */
function negate(out, a) {
  out[0] = -a[0];
  out[1] = -a[1];
  return out;
}

/**
 * Returns the inverse of the components of a vec2
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a vector to invert
 * @returns {vec2} out
 */
function inverse(out, a) {
  out[0] = 1.0 / a[0];
  out[1] = 1.0 / a[1];
  return out;
}

/**
 * Normalize a vec2
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a vector to normalize
 * @returns {vec2} out
 */
function normalize(out, a) {
  var x = a[0],
      y = a[1];
  var len = x * x + y * y;
  if (len > 0) {
    //TODO: evaluate use of glm_invsqrt here?
    len = 1 / Math.sqrt(len);
    out[0] = a[0] * len;
    out[1] = a[1] * len;
  }
  return out;
}

/**
 * Calculates the dot product of two vec2's
 *
 * @param {vec2} a the first operand
 * @param {vec2} b the second operand
 * @returns {Number} dot product of a and b
 */
function dot(a, b) {
  return a[0] * b[0] + a[1] * b[1];
}

/**
 * Computes the cross product of two vec2's
 * Note that the cross product must by definition produce a 3D vector
 *
 * @param {vec3} out the receiving vector
 * @param {vec2} a the first operand
 * @param {vec2} b the second operand
 * @returns {vec3} out
 */
function cross(out, a, b) {
  var z = a[0] * b[1] - a[1] * b[0];
  out[0] = out[1] = 0;
  out[2] = z;
  return out;
}

/**
 * Performs a linear interpolation between two vec2's
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a the first operand
 * @param {vec2} b the second operand
 * @param {Number} t interpolation amount, in the range [0-1], between the two inputs
 * @returns {vec2} out
 */
function lerp(out, a, b, t) {
  var ax = a[0],
      ay = a[1];
  out[0] = ax + t * (b[0] - ax);
  out[1] = ay + t * (b[1] - ay);
  return out;
}

/**
 * Generates a random vector with the given scale
 *
 * @param {vec2} out the receiving vector
 * @param {Number} [scale] Length of the resulting vector. If ommitted, a unit vector will be returned
 * @returns {vec2} out
 */
function random(out, scale) {
  scale = scale || 1.0;
  var r = __WEBPACK_IMPORTED_MODULE_0__common_js__["c" /* RANDOM */]() * 2.0 * Math.PI;
  out[0] = Math.cos(r) * scale;
  out[1] = Math.sin(r) * scale;
  return out;
}

/**
 * Transforms the vec2 with a mat2
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a the vector to transform
 * @param {mat2} m matrix to transform with
 * @returns {vec2} out
 */
function transformMat2(out, a, m) {
  var x = a[0],
      y = a[1];
  out[0] = m[0] * x + m[2] * y;
  out[1] = m[1] * x + m[3] * y;
  return out;
}

/**
 * Transforms the vec2 with a mat2d
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a the vector to transform
 * @param {mat2d} m matrix to transform with
 * @returns {vec2} out
 */
function transformMat2d(out, a, m) {
  var x = a[0],
      y = a[1];
  out[0] = m[0] * x + m[2] * y + m[4];
  out[1] = m[1] * x + m[3] * y + m[5];
  return out;
}

/**
 * Transforms the vec2 with a mat3
 * 3rd vector component is implicitly '1'
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a the vector to transform
 * @param {mat3} m matrix to transform with
 * @returns {vec2} out
 */
function transformMat3(out, a, m) {
  var x = a[0],
      y = a[1];
  out[0] = m[0] * x + m[3] * y + m[6];
  out[1] = m[1] * x + m[4] * y + m[7];
  return out;
}

/**
 * Transforms the vec2 with a mat4
 * 3rd vector component is implicitly '0'
 * 4th vector component is implicitly '1'
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a the vector to transform
 * @param {mat4} m matrix to transform with
 * @returns {vec2} out
 */
function transformMat4(out, a, m) {
  var x = a[0];
  var y = a[1];
  out[0] = m[0] * x + m[4] * y + m[12];
  out[1] = m[1] * x + m[5] * y + m[13];
  return out;
}

/**
 * Rotate a 2D vector
 * @param {vec2} out The receiving vec2
 * @param {vec2} a The vec2 point to rotate
 * @param {vec2} b The origin of the rotation
 * @param {Number} c The angle of rotation
 * @returns {vec2} out
 */
function rotate(out, a, b, c) {
  //Translate point to the origin
  var p0 = a[0] - b[0],
      p1 = a[1] - b[1],
      sinC = Math.sin(c),
      cosC = Math.cos(c);

  //perform rotation and translate to correct position
  out[0] = p0 * cosC - p1 * sinC + b[0];
  out[1] = p0 * sinC + p1 * cosC + b[1];

  return out;
}

/**
 * Get the angle between two 2D vectors
 * @param {vec2} a The first operand
 * @param {vec2} b The second operand
 * @returns {Number} The angle in radians
 */
function angle(a, b) {
  var x1 = a[0],
      y1 = a[1],
      x2 = b[0],
      y2 = b[1];

  var len1 = x1 * x1 + y1 * y1;
  if (len1 > 0) {
    //TODO: evaluate use of glm_invsqrt here?
    len1 = 1 / Math.sqrt(len1);
  }

  var len2 = x2 * x2 + y2 * y2;
  if (len2 > 0) {
    //TODO: evaluate use of glm_invsqrt here?
    len2 = 1 / Math.sqrt(len2);
  }

  var cosine = (x1 * x2 + y1 * y2) * len1 * len2;

  if (cosine > 1.0) {
    return 0;
  } else if (cosine < -1.0) {
    return Math.PI;
  } else {
    return Math.acos(cosine);
  }
}

/**
 * Returns a string representation of a vector
 *
 * @param {vec2} a vector to represent as a string
 * @returns {String} string representation of the vector
 */
function str(a) {
  return 'vec2(' + a[0] + ', ' + a[1] + ')';
}

/**
 * Returns whether or not the vectors exactly have the same elements in the same position (when compared with ===)
 *
 * @param {vec2} a The first vector.
 * @param {vec2} b The second vector.
 * @returns {Boolean} True if the vectors are equal, false otherwise.
 */
function exactEquals(a, b) {
  return a[0] === b[0] && a[1] === b[1];
}

/**
 * Returns whether or not the vectors have approximately the same elements in the same position.
 *
 * @param {vec2} a The first vector.
 * @param {vec2} b The second vector.
 * @returns {Boolean} True if the vectors are equal, false otherwise.
 */
function equals(a, b) {
  var a0 = a[0],
      a1 = a[1];
  var b0 = b[0],
      b1 = b[1];
  return Math.abs(a0 - b0) <= __WEBPACK_IMPORTED_MODULE_0__common_js__["b" /* EPSILON */] * Math.max(1.0, Math.abs(a0), Math.abs(b0)) && Math.abs(a1 - b1) <= __WEBPACK_IMPORTED_MODULE_0__common_js__["b" /* EPSILON */] * Math.max(1.0, Math.abs(a1), Math.abs(b1));
}

/**
 * Alias for {@link vec2.length}
 * @function
 */
var len = length;

/**
 * Alias for {@link vec2.subtract}
 * @function
 */
var sub = subtract;

/**
 * Alias for {@link vec2.multiply}
 * @function
 */
var mul = multiply;

/**
 * Alias for {@link vec2.divide}
 * @function
 */
var div = divide;

/**
 * Alias for {@link vec2.distance}
 * @function
 */
var dist = distance;

/**
 * Alias for {@link vec2.squaredDistance}
 * @function
 */
var sqrDist = squaredDistance;

/**
 * Alias for {@link vec2.squaredLength}
 * @function
 */
var sqrLen = squaredLength;

/**
 * Perform some operation over an array of vec2s.
 *
 * @param {Array} a the array of vectors to iterate over
 * @param {Number} stride Number of elements between the start of each vec2. If 0 assumes tightly packed
 * @param {Number} offset Number of elements to skip at the beginning of the array
 * @param {Number} count Number of vec2s to iterate over. If 0 iterates over entire array
 * @param {Function} fn Function to call for each vector in the array
 * @param {Object} [arg] additional argument to pass to fn
 * @returns {Array} a
 * @function
 */
var forEach = function () {
  var vec = create();

  return function (a, stride, offset, count, fn, arg) {
    var i = void 0,
        l = void 0;
    if (!stride) {
      stride = 2;
    }

    if (!offset) {
      offset = 0;
    }

    if (count) {
      l = Math.min(count * stride + offset, a.length);
    } else {
      l = a.length;
    }

    for (i = offset; i < l; i += stride) {
      vec[0] = a[i];vec[1] = a[i + 1];
      fn(vec, vec, arg);
      a[i] = vec[0];a[i + 1] = vec[1];
    }

    return a;
  };
}();

/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

!function(e,t){ true?module.exports=t():"function"==typeof define&&define.amd?define(t):e.Stats=t()}(this,function(){"use strict";var c=function(){var n=0,l=document.createElement("div");function e(e){return l.appendChild(e.dom),e}function t(e){for(var t=0;t<l.children.length;t++)l.children[t].style.display=t===e?"block":"none";n=e}l.style.cssText="position:fixed;top:0;left:0;cursor:pointer;opacity:0.9;z-index:10000",l.addEventListener("click",function(e){e.preventDefault(),t(++n%l.children.length)},!1);var i=(performance||Date).now(),a=i,o=0,f=e(new c.Panel("FPS","#0ff","#002")),r=e(new c.Panel("MS","#0f0","#020"));if(self.performance&&self.performance.memory)var d=e(new c.Panel("MB","#f08","#201"));return t(0),{REVISION:16,dom:l,addPanel:e,showPanel:t,begin:function(){i=(performance||Date).now()},end:function(){o++;var e=(performance||Date).now();if(r.update(e-i,200),a+1e3<=e&&(f.update(1e3*o/(e-a),100),a=e,o=0,d)){var t=performance.memory;d.update(t.usedJSHeapSize/1048576,t.jsHeapSizeLimit/1048576)}return e},update:function(){i=this.end()},domElement:l,setMode:t}};return c.Panel=function(n,l,i){var a=1/0,o=0,f=Math.round,r=f(window.devicePixelRatio||1),d=80*r,e=48*r,c=3*r,p=2*r,u=3*r,s=15*r,m=74*r,h=30*r,y=document.createElement("canvas");y.width=d,y.height=e,y.style.cssText="width:80px;height:48px";var v=y.getContext("2d");return v.font="bold "+9*r+"px Helvetica,Arial,sans-serif",v.textBaseline="top",v.fillStyle=i,v.fillRect(0,0,d,e),v.fillStyle=l,v.fillText(n,c,p),v.fillRect(u,s,m,h),v.fillStyle=i,v.globalAlpha=.9,v.fillRect(u,s,m,h),{dom:y,update:function(e,t){a=Math.min(a,e),o=Math.max(o,e),v.fillStyle=i,v.globalAlpha=1,v.fillRect(0,0,d,s),v.fillStyle=l,v.fillText(f(e)+" "+n+" ("+f(a)+"-"+f(o)+")",c,p),v.drawImage(y,u+r,s,m-r,h,u,s,m-r,h),v.fillRect(u+m-r,s,r,h),v.fillStyle=i,v.globalAlpha=.9,v.fillRect(u+m-r,s,r,f((1-e/t)*h))}}},c});


/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(43)
module.exports.color = __webpack_require__(44)

/***/ }),
/* 43 */
/***/ (function(module, exports) {

/**
 * dat-gui JavaScript Controller Library
 * http://code.google.com/p/dat-gui
 *
 * Copyright 2011 Data Arts Team, Google Creative Lab
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 */

/** @namespace */
var dat = module.exports = dat || {};

/** @namespace */
dat.gui = dat.gui || {};

/** @namespace */
dat.utils = dat.utils || {};

/** @namespace */
dat.controllers = dat.controllers || {};

/** @namespace */
dat.dom = dat.dom || {};

/** @namespace */
dat.color = dat.color || {};

dat.utils.css = (function () {
  return {
    load: function (url, doc) {
      doc = doc || document;
      var link = doc.createElement('link');
      link.type = 'text/css';
      link.rel = 'stylesheet';
      link.href = url;
      doc.getElementsByTagName('head')[0].appendChild(link);
    },
    inject: function(css, doc) {
      doc = doc || document;
      var injected = document.createElement('style');
      injected.type = 'text/css';
      injected.innerHTML = css;
      doc.getElementsByTagName('head')[0].appendChild(injected);
    }
  }
})();


dat.utils.common = (function () {
  
  var ARR_EACH = Array.prototype.forEach;
  var ARR_SLICE = Array.prototype.slice;

  /**
   * Band-aid methods for things that should be a lot easier in JavaScript.
   * Implementation and structure inspired by underscore.js
   * http://documentcloud.github.com/underscore/
   */

  return { 
    
    BREAK: {},
  
    extend: function(target) {
      
      this.each(ARR_SLICE.call(arguments, 1), function(obj) {
        
        for (var key in obj)
          if (!this.isUndefined(obj[key])) 
            target[key] = obj[key];
        
      }, this);
      
      return target;
      
    },
    
    defaults: function(target) {
      
      this.each(ARR_SLICE.call(arguments, 1), function(obj) {
        
        for (var key in obj)
          if (this.isUndefined(target[key])) 
            target[key] = obj[key];
        
      }, this);
      
      return target;
    
    },
    
    compose: function() {
      var toCall = ARR_SLICE.call(arguments);
            return function() {
              var args = ARR_SLICE.call(arguments);
              for (var i = toCall.length -1; i >= 0; i--) {
                args = [toCall[i].apply(this, args)];
              }
              return args[0];
            }
    },
    
    each: function(obj, itr, scope) {

      
      if (ARR_EACH && obj.forEach === ARR_EACH) { 
        
        obj.forEach(itr, scope);
        
      } else if (obj.length === obj.length + 0) { // Is number but not NaN
        
        for (var key = 0, l = obj.length; key < l; key++)
          if (key in obj && itr.call(scope, obj[key], key) === this.BREAK) 
            return;
            
      } else {

        for (var key in obj) 
          if (itr.call(scope, obj[key], key) === this.BREAK)
            return;
            
      }
            
    },
    
    defer: function(fnc) {
      setTimeout(fnc, 0);
    },
    
    toArray: function(obj) {
      if (obj.toArray) return obj.toArray();
      return ARR_SLICE.call(obj);
    },

    isUndefined: function(obj) {
      return obj === undefined;
    },
    
    isNull: function(obj) {
      return obj === null;
    },
    
    isNaN: function(obj) {
      return obj !== obj;
    },
    
    isArray: Array.isArray || function(obj) {
      return obj.constructor === Array;
    },
    
    isObject: function(obj) {
      return obj === Object(obj);
    },
    
    isNumber: function(obj) {
      return obj === obj+0;
    },
    
    isString: function(obj) {
      return obj === obj+'';
    },
    
    isBoolean: function(obj) {
      return obj === false || obj === true;
    },
    
    isFunction: function(obj) {
      return Object.prototype.toString.call(obj) === '[object Function]';
    }
  
  };
    
})();


dat.controllers.Controller = (function (common) {

  /**
   * @class An "abstract" class that represents a given property of an object.
   *
   * @param {Object} object The object to be manipulated
   * @param {string} property The name of the property to be manipulated
   *
   * @member dat.controllers
   */
  var Controller = function(object, property) {

    this.initialValue = object[property];

    /**
     * Those who extend this class will put their DOM elements in here.
     * @type {DOMElement}
     */
    this.domElement = document.createElement('div');

    /**
     * The object to manipulate
     * @type {Object}
     */
    this.object = object;

    /**
     * The name of the property to manipulate
     * @type {String}
     */
    this.property = property;

    /**
     * The function to be called on change.
     * @type {Function}
     * @ignore
     */
    this.__onChange = undefined;

    /**
     * The function to be called on finishing change.
     * @type {Function}
     * @ignore
     */
    this.__onFinishChange = undefined;

  };

  common.extend(

      Controller.prototype,

      /** @lends dat.controllers.Controller.prototype */
      {

        /**
         * Specify that a function fire every time someone changes the value with
         * this Controller.
         *
         * @param {Function} fnc This function will be called whenever the value
         * is modified via this Controller.
         * @returns {dat.controllers.Controller} this
         */
        onChange: function(fnc) {
          this.__onChange = fnc;
          return this;
        },

        /**
         * Specify that a function fire every time someone "finishes" changing
         * the value wih this Controller. Useful for values that change
         * incrementally like numbers or strings.
         *
         * @param {Function} fnc This function will be called whenever
         * someone "finishes" changing the value via this Controller.
         * @returns {dat.controllers.Controller} this
         */
        onFinishChange: function(fnc) {
          this.__onFinishChange = fnc;
          return this;
        },

        /**
         * Change the value of <code>object[property]</code>
         *
         * @param {Object} newValue The new value of <code>object[property]</code>
         */
        setValue: function(newValue) {
          this.object[this.property] = newValue;
          if (this.__onChange) {
            this.__onChange.call(this, newValue);
          }
          this.updateDisplay();
          return this;
        },

        /**
         * Gets the value of <code>object[property]</code>
         *
         * @returns {Object} The current value of <code>object[property]</code>
         */
        getValue: function() {
          return this.object[this.property];
        },

        /**
         * Refreshes the visual display of a Controller in order to keep sync
         * with the object's current value.
         * @returns {dat.controllers.Controller} this
         */
        updateDisplay: function() {
          return this;
        },

        /**
         * @returns {Boolean} true if the value has deviated from initialValue
         */
        isModified: function() {
          return this.initialValue !== this.getValue()
        }

      }

  );

  return Controller;


})(dat.utils.common);


dat.dom.dom = (function (common) {

  var EVENT_MAP = {
    'HTMLEvents': ['change'],
    'MouseEvents': ['click','mousemove','mousedown','mouseup', 'mouseover'],
    'KeyboardEvents': ['keydown']
  };

  var EVENT_MAP_INV = {};
  common.each(EVENT_MAP, function(v, k) {
    common.each(v, function(e) {
      EVENT_MAP_INV[e] = k;
    });
  });

  var CSS_VALUE_PIXELS = /(\d+(\.\d+)?)px/;

  function cssValueToPixels(val) {

    if (val === '0' || common.isUndefined(val)) return 0;

    var match = val.match(CSS_VALUE_PIXELS);

    if (!common.isNull(match)) {
      return parseFloat(match[1]);
    }

    // TODO ...ems? %?

    return 0;

  }

  /**
   * @namespace
   * @member dat.dom
   */
  var dom = {

    /**
     * 
     * @param elem
     * @param selectable
     */
    makeSelectable: function(elem, selectable) {

      if (elem === undefined || elem.style === undefined) return;

      elem.onselectstart = selectable ? function() {
        return false;
      } : function() {
      };

      elem.style.MozUserSelect = selectable ? 'auto' : 'none';
      elem.style.KhtmlUserSelect = selectable ? 'auto' : 'none';
      elem.unselectable = selectable ? 'on' : 'off';

    },

    /**
     *
     * @param elem
     * @param horizontal
     * @param vertical
     */
    makeFullscreen: function(elem, horizontal, vertical) {

      if (common.isUndefined(horizontal)) horizontal = true;
      if (common.isUndefined(vertical)) vertical = true;

      elem.style.position = 'absolute';

      if (horizontal) {
        elem.style.left = 0;
        elem.style.right = 0;
      }
      if (vertical) {
        elem.style.top = 0;
        elem.style.bottom = 0;
      }

    },

    /**
     *
     * @param elem
     * @param eventType
     * @param params
     */
    fakeEvent: function(elem, eventType, params, aux) {
      params = params || {};
      var className = EVENT_MAP_INV[eventType];
      if (!className) {
        throw new Error('Event type ' + eventType + ' not supported.');
      }
      var evt = document.createEvent(className);
      switch (className) {
        case 'MouseEvents':
          var clientX = params.x || params.clientX || 0;
          var clientY = params.y || params.clientY || 0;
          evt.initMouseEvent(eventType, params.bubbles || false,
              params.cancelable || true, window, params.clickCount || 1,
              0, //screen X
              0, //screen Y
              clientX, //client X
              clientY, //client Y
              false, false, false, false, 0, null);
          break;
        case 'KeyboardEvents':
          var init = evt.initKeyboardEvent || evt.initKeyEvent; // webkit || moz
          common.defaults(params, {
            cancelable: true,
            ctrlKey: false,
            altKey: false,
            shiftKey: false,
            metaKey: false,
            keyCode: undefined,
            charCode: undefined
          });
          init(eventType, params.bubbles || false,
              params.cancelable, window,
              params.ctrlKey, params.altKey,
              params.shiftKey, params.metaKey,
              params.keyCode, params.charCode);
          break;
        default:
          evt.initEvent(eventType, params.bubbles || false,
              params.cancelable || true);
          break;
      }
      common.defaults(evt, aux);
      elem.dispatchEvent(evt);
    },

    /**
     *
     * @param elem
     * @param event
     * @param func
     * @param bool
     */
    bind: function(elem, event, func, bool) {
      bool = bool || false;
      if (elem.addEventListener)
        elem.addEventListener(event, func, bool);
      else if (elem.attachEvent)
        elem.attachEvent('on' + event, func);
      return dom;
    },

    /**
     *
     * @param elem
     * @param event
     * @param func
     * @param bool
     */
    unbind: function(elem, event, func, bool) {
      bool = bool || false;
      if (elem.removeEventListener)
        elem.removeEventListener(event, func, bool);
      else if (elem.detachEvent)
        elem.detachEvent('on' + event, func);
      return dom;
    },

    /**
     *
     * @param elem
     * @param className
     */
    addClass: function(elem, className) {
      if (elem.className === undefined) {
        elem.className = className;
      } else if (elem.className !== className) {
        var classes = elem.className.split(/ +/);
        if (classes.indexOf(className) == -1) {
          classes.push(className);
          elem.className = classes.join(' ').replace(/^\s+/, '').replace(/\s+$/, '');
        }
      }
      return dom;
    },

    /**
     *
     * @param elem
     * @param className
     */
    removeClass: function(elem, className) {
      if (className) {
        if (elem.className === undefined) {
          // elem.className = className;
        } else if (elem.className === className) {
          elem.removeAttribute('class');
        } else {
          var classes = elem.className.split(/ +/);
          var index = classes.indexOf(className);
          if (index != -1) {
            classes.splice(index, 1);
            elem.className = classes.join(' ');
          }
        }
      } else {
        elem.className = undefined;
      }
      return dom;
    },

    hasClass: function(elem, className) {
      return new RegExp('(?:^|\\s+)' + className + '(?:\\s+|$)').test(elem.className) || false;
    },

    /**
     *
     * @param elem
     */
    getWidth: function(elem) {

      var style = getComputedStyle(elem);

      return cssValueToPixels(style['border-left-width']) +
          cssValueToPixels(style['border-right-width']) +
          cssValueToPixels(style['padding-left']) +
          cssValueToPixels(style['padding-right']) +
          cssValueToPixels(style['width']);
    },

    /**
     *
     * @param elem
     */
    getHeight: function(elem) {

      var style = getComputedStyle(elem);

      return cssValueToPixels(style['border-top-width']) +
          cssValueToPixels(style['border-bottom-width']) +
          cssValueToPixels(style['padding-top']) +
          cssValueToPixels(style['padding-bottom']) +
          cssValueToPixels(style['height']);
    },

    /**
     *
     * @param elem
     */
    getOffset: function(elem) {
      var offset = {left: 0, top:0};
      if (elem.offsetParent) {
        do {
          offset.left += elem.offsetLeft;
          offset.top += elem.offsetTop;
        } while (elem = elem.offsetParent);
      }
      return offset;
    },

    // http://stackoverflow.com/posts/2684561/revisions
    /**
     * 
     * @param elem
     */
    isActive: function(elem) {
      return elem === document.activeElement && ( elem.type || elem.href );
    }

  };

  return dom;

})(dat.utils.common);


dat.controllers.OptionController = (function (Controller, dom, common) {

  /**
   * @class Provides a select input to alter the property of an object, using a
   * list of accepted values.
   *
   * @extends dat.controllers.Controller
   *
   * @param {Object} object The object to be manipulated
   * @param {string} property The name of the property to be manipulated
   * @param {Object|string[]} options A map of labels to acceptable values, or
   * a list of acceptable string values.
   *
   * @member dat.controllers
   */
  var OptionController = function(object, property, options) {

    OptionController.superclass.call(this, object, property);

    var _this = this;

    /**
     * The drop down menu
     * @ignore
     */
    this.__select = document.createElement('select');

    if (common.isArray(options)) {
      var map = {};
      common.each(options, function(element) {
        map[element] = element;
      });
      options = map;
    }

    common.each(options, function(value, key) {

      var opt = document.createElement('option');
      opt.innerHTML = key;
      opt.setAttribute('value', value);
      _this.__select.appendChild(opt);

    });

    // Acknowledge original value
    this.updateDisplay();

    dom.bind(this.__select, 'change', function() {
      var desiredValue = this.options[this.selectedIndex].value;
      _this.setValue(desiredValue);
    });

    this.domElement.appendChild(this.__select);

  };

  OptionController.superclass = Controller;

  common.extend(

      OptionController.prototype,
      Controller.prototype,

      {

        setValue: function(v) {
          var toReturn = OptionController.superclass.prototype.setValue.call(this, v);
          if (this.__onFinishChange) {
            this.__onFinishChange.call(this, this.getValue());
          }
          return toReturn;
        },

        updateDisplay: function() {
          this.__select.value = this.getValue();
          return OptionController.superclass.prototype.updateDisplay.call(this);
        }

      }

  );

  return OptionController;

})(dat.controllers.Controller,
dat.dom.dom,
dat.utils.common);


dat.controllers.NumberController = (function (Controller, common) {

  /**
   * @class Represents a given property of an object that is a number.
   *
   * @extends dat.controllers.Controller
   *
   * @param {Object} object The object to be manipulated
   * @param {string} property The name of the property to be manipulated
   * @param {Object} [params] Optional parameters
   * @param {Number} [params.min] Minimum allowed value
   * @param {Number} [params.max] Maximum allowed value
   * @param {Number} [params.step] Increment by which to change value
   *
   * @member dat.controllers
   */
  var NumberController = function(object, property, params) {

    NumberController.superclass.call(this, object, property);

    params = params || {};

    this.__min = params.min;
    this.__max = params.max;
    this.__step = params.step;

    if (common.isUndefined(this.__step)) {

      if (this.initialValue == 0) {
        this.__impliedStep = 1; // What are we, psychics?
      } else {
        // Hey Doug, check this out.
        this.__impliedStep = Math.pow(10, Math.floor(Math.log(this.initialValue)/Math.LN10))/10;
      }

    } else {

      this.__impliedStep = this.__step;

    }

    this.__precision = numDecimals(this.__impliedStep);


  };

  NumberController.superclass = Controller;

  common.extend(

      NumberController.prototype,
      Controller.prototype,

      /** @lends dat.controllers.NumberController.prototype */
      {

        setValue: function(v) {

          if (this.__min !== undefined && v < this.__min) {
            v = this.__min;
          } else if (this.__max !== undefined && v > this.__max) {
            v = this.__max;
          }

          if (this.__step !== undefined && v % this.__step != 0) {
            v = Math.round(v / this.__step) * this.__step;
          }

          return NumberController.superclass.prototype.setValue.call(this, v);

        },

        /**
         * Specify a minimum value for <code>object[property]</code>.
         *
         * @param {Number} minValue The minimum value for
         * <code>object[property]</code>
         * @returns {dat.controllers.NumberController} this
         */
        min: function(v) {
          this.__min = v;
          return this;
        },

        /**
         * Specify a maximum value for <code>object[property]</code>.
         *
         * @param {Number} maxValue The maximum value for
         * <code>object[property]</code>
         * @returns {dat.controllers.NumberController} this
         */
        max: function(v) {
          this.__max = v;
          return this;
        },

        /**
         * Specify a step value that dat.controllers.NumberController
         * increments by.
         *
         * @param {Number} stepValue The step value for
         * dat.controllers.NumberController
         * @default if minimum and maximum specified increment is 1% of the
         * difference otherwise stepValue is 1
         * @returns {dat.controllers.NumberController} this
         */
        step: function(v) {
          this.__step = v;
          return this;
        }

      }

  );

  function numDecimals(x) {
    x = x.toString();
    if (x.indexOf('.') > -1) {
      return x.length - x.indexOf('.') - 1;
    } else {
      return 0;
    }
  }

  return NumberController;

})(dat.controllers.Controller,
dat.utils.common);


dat.controllers.NumberControllerBox = (function (NumberController, dom, common) {

  /**
   * @class Represents a given property of an object that is a number and
   * provides an input element with which to manipulate it.
   *
   * @extends dat.controllers.Controller
   * @extends dat.controllers.NumberController
   *
   * @param {Object} object The object to be manipulated
   * @param {string} property The name of the property to be manipulated
   * @param {Object} [params] Optional parameters
   * @param {Number} [params.min] Minimum allowed value
   * @param {Number} [params.max] Maximum allowed value
   * @param {Number} [params.step] Increment by which to change value
   *
   * @member dat.controllers
   */
  var NumberControllerBox = function(object, property, params) {

    this.__truncationSuspended = false;

    NumberControllerBox.superclass.call(this, object, property, params);

    var _this = this;

    /**
     * {Number} Previous mouse y position
     * @ignore
     */
    var prev_y;

    this.__input = document.createElement('input');
    this.__input.setAttribute('type', 'text');

    // Makes it so manually specified values are not truncated.

    dom.bind(this.__input, 'change', onChange);
    dom.bind(this.__input, 'blur', onBlur);
    dom.bind(this.__input, 'mousedown', onMouseDown);
    dom.bind(this.__input, 'keydown', function(e) {

      // When pressing entire, you can be as precise as you want.
      if (e.keyCode === 13) {
        _this.__truncationSuspended = true;
        this.blur();
        _this.__truncationSuspended = false;
      }

    });

    function onChange() {
      var attempted = parseFloat(_this.__input.value);
      if (!common.isNaN(attempted)) _this.setValue(attempted);
    }

    function onBlur() {
      onChange();
      if (_this.__onFinishChange) {
        _this.__onFinishChange.call(_this, _this.getValue());
      }
    }

    function onMouseDown(e) {
      dom.bind(window, 'mousemove', onMouseDrag);
      dom.bind(window, 'mouseup', onMouseUp);
      prev_y = e.clientY;
    }

    function onMouseDrag(e) {

      var diff = prev_y - e.clientY;
      _this.setValue(_this.getValue() + diff * _this.__impliedStep);

      prev_y = e.clientY;

    }

    function onMouseUp() {
      dom.unbind(window, 'mousemove', onMouseDrag);
      dom.unbind(window, 'mouseup', onMouseUp);
    }

    this.updateDisplay();

    this.domElement.appendChild(this.__input);

  };

  NumberControllerBox.superclass = NumberController;

  common.extend(

      NumberControllerBox.prototype,
      NumberController.prototype,

      {

        updateDisplay: function() {

          this.__input.value = this.__truncationSuspended ? this.getValue() : roundToDecimal(this.getValue(), this.__precision);
          return NumberControllerBox.superclass.prototype.updateDisplay.call(this);
        }

      }

  );

  function roundToDecimal(value, decimals) {
    var tenTo = Math.pow(10, decimals);
    return Math.round(value * tenTo) / tenTo;
  }

  return NumberControllerBox;

})(dat.controllers.NumberController,
dat.dom.dom,
dat.utils.common);


dat.controllers.NumberControllerSlider = (function (NumberController, dom, css, common, styleSheet) {

  /**
   * @class Represents a given property of an object that is a number, contains
   * a minimum and maximum, and provides a slider element with which to
   * manipulate it. It should be noted that the slider element is made up of
   * <code>&lt;div&gt;</code> tags, <strong>not</strong> the html5
   * <code>&lt;slider&gt;</code> element.
   *
   * @extends dat.controllers.Controller
   * @extends dat.controllers.NumberController
   * 
   * @param {Object} object The object to be manipulated
   * @param {string} property The name of the property to be manipulated
   * @param {Number} minValue Minimum allowed value
   * @param {Number} maxValue Maximum allowed value
   * @param {Number} stepValue Increment by which to change value
   *
   * @member dat.controllers
   */
  var NumberControllerSlider = function(object, property, min, max, step) {

    NumberControllerSlider.superclass.call(this, object, property, { min: min, max: max, step: step });

    var _this = this;

    this.__background = document.createElement('div');
    this.__foreground = document.createElement('div');
    


    dom.bind(this.__background, 'mousedown', onMouseDown);
    
    dom.addClass(this.__background, 'slider');
    dom.addClass(this.__foreground, 'slider-fg');

    function onMouseDown(e) {

      dom.bind(window, 'mousemove', onMouseDrag);
      dom.bind(window, 'mouseup', onMouseUp);

      onMouseDrag(e);
    }

    function onMouseDrag(e) {

      e.preventDefault();

      var offset = dom.getOffset(_this.__background);
      var width = dom.getWidth(_this.__background);
      
      _this.setValue(
        map(e.clientX, offset.left, offset.left + width, _this.__min, _this.__max)
      );

      return false;

    }

    function onMouseUp() {
      dom.unbind(window, 'mousemove', onMouseDrag);
      dom.unbind(window, 'mouseup', onMouseUp);
      if (_this.__onFinishChange) {
        _this.__onFinishChange.call(_this, _this.getValue());
      }
    }

    this.updateDisplay();

    this.__background.appendChild(this.__foreground);
    this.domElement.appendChild(this.__background);

  };

  NumberControllerSlider.superclass = NumberController;

  /**
   * Injects default stylesheet for slider elements.
   */
  NumberControllerSlider.useDefaultStyles = function() {
    css.inject(styleSheet);
  };

  common.extend(

      NumberControllerSlider.prototype,
      NumberController.prototype,

      {

        updateDisplay: function() {
          var pct = (this.getValue() - this.__min)/(this.__max - this.__min);
          this.__foreground.style.width = pct*100+'%';
          return NumberControllerSlider.superclass.prototype.updateDisplay.call(this);
        }

      }



  );

  function map(v, i1, i2, o1, o2) {
    return o1 + (o2 - o1) * ((v - i1) / (i2 - i1));
  }

  return NumberControllerSlider;
  
})(dat.controllers.NumberController,
dat.dom.dom,
dat.utils.css,
dat.utils.common,
".slider {\n  box-shadow: inset 0 2px 4px rgba(0,0,0,0.15);\n  height: 1em;\n  border-radius: 1em;\n  background-color: #eee;\n  padding: 0 0.5em;\n  overflow: hidden;\n}\n\n.slider-fg {\n  padding: 1px 0 2px 0;\n  background-color: #aaa;\n  height: 1em;\n  margin-left: -0.5em;\n  padding-right: 0.5em;\n  border-radius: 1em 0 0 1em;\n}\n\n.slider-fg:after {\n  display: inline-block;\n  border-radius: 1em;\n  background-color: #fff;\n  border:  1px solid #aaa;\n  content: '';\n  float: right;\n  margin-right: -1em;\n  margin-top: -1px;\n  height: 0.9em;\n  width: 0.9em;\n}");


dat.controllers.FunctionController = (function (Controller, dom, common) {

  /**
   * @class Provides a GUI interface to fire a specified method, a property of an object.
   *
   * @extends dat.controllers.Controller
   *
   * @param {Object} object The object to be manipulated
   * @param {string} property The name of the property to be manipulated
   *
   * @member dat.controllers
   */
  var FunctionController = function(object, property, text) {

    FunctionController.superclass.call(this, object, property);

    var _this = this;

    this.__button = document.createElement('div');
    this.__button.innerHTML = text === undefined ? 'Fire' : text;
    dom.bind(this.__button, 'click', function(e) {
      e.preventDefault();
      _this.fire();
      return false;
    });

    dom.addClass(this.__button, 'button');

    this.domElement.appendChild(this.__button);


  };

  FunctionController.superclass = Controller;

  common.extend(

      FunctionController.prototype,
      Controller.prototype,
      {
        
        fire: function() {
          if (this.__onChange) {
            this.__onChange.call(this);
          }
          if (this.__onFinishChange) {
            this.__onFinishChange.call(this, this.getValue());
          }
          this.getValue().call(this.object);
        }
      }

  );

  return FunctionController;

})(dat.controllers.Controller,
dat.dom.dom,
dat.utils.common);


dat.controllers.BooleanController = (function (Controller, dom, common) {

  /**
   * @class Provides a checkbox input to alter the boolean property of an object.
   * @extends dat.controllers.Controller
   *
   * @param {Object} object The object to be manipulated
   * @param {string} property The name of the property to be manipulated
   *
   * @member dat.controllers
   */
  var BooleanController = function(object, property) {

    BooleanController.superclass.call(this, object, property);

    var _this = this;
    this.__prev = this.getValue();

    this.__checkbox = document.createElement('input');
    this.__checkbox.setAttribute('type', 'checkbox');


    dom.bind(this.__checkbox, 'change', onChange, false);

    this.domElement.appendChild(this.__checkbox);

    // Match original value
    this.updateDisplay();

    function onChange() {
      _this.setValue(!_this.__prev);
    }

  };

  BooleanController.superclass = Controller;

  common.extend(

      BooleanController.prototype,
      Controller.prototype,

      {

        setValue: function(v) {
          var toReturn = BooleanController.superclass.prototype.setValue.call(this, v);
          if (this.__onFinishChange) {
            this.__onFinishChange.call(this, this.getValue());
          }
          this.__prev = this.getValue();
          return toReturn;
        },

        updateDisplay: function() {
          
          if (this.getValue() === true) {
            this.__checkbox.setAttribute('checked', 'checked');
            this.__checkbox.checked = true;    
          } else {
              this.__checkbox.checked = false;
          }

          return BooleanController.superclass.prototype.updateDisplay.call(this);

        }


      }

  );

  return BooleanController;

})(dat.controllers.Controller,
dat.dom.dom,
dat.utils.common);


dat.color.toString = (function (common) {

  return function(color) {

    if (color.a == 1 || common.isUndefined(color.a)) {

      var s = color.hex.toString(16);
      while (s.length < 6) {
        s = '0' + s;
      }

      return '#' + s;

    } else {

      return 'rgba(' + Math.round(color.r) + ',' + Math.round(color.g) + ',' + Math.round(color.b) + ',' + color.a + ')';

    }

  }

})(dat.utils.common);


dat.color.interpret = (function (toString, common) {

  var result, toReturn;

  var interpret = function() {

    toReturn = false;

    var original = arguments.length > 1 ? common.toArray(arguments) : arguments[0];

    common.each(INTERPRETATIONS, function(family) {

      if (family.litmus(original)) {

        common.each(family.conversions, function(conversion, conversionName) {

          result = conversion.read(original);

          if (toReturn === false && result !== false) {
            toReturn = result;
            result.conversionName = conversionName;
            result.conversion = conversion;
            return common.BREAK;

          }

        });

        return common.BREAK;

      }

    });

    return toReturn;

  };

  var INTERPRETATIONS = [

    // Strings
    {

      litmus: common.isString,

      conversions: {

        THREE_CHAR_HEX: {

          read: function(original) {

            var test = original.match(/^#([A-F0-9])([A-F0-9])([A-F0-9])$/i);
            if (test === null) return false;

            return {
              space: 'HEX',
              hex: parseInt(
                  '0x' +
                      test[1].toString() + test[1].toString() +
                      test[2].toString() + test[2].toString() +
                      test[3].toString() + test[3].toString())
            };

          },

          write: toString

        },

        SIX_CHAR_HEX: {

          read: function(original) {

            var test = original.match(/^#([A-F0-9]{6})$/i);
            if (test === null) return false;

            return {
              space: 'HEX',
              hex: parseInt('0x' + test[1].toString())
            };

          },

          write: toString

        },

        CSS_RGB: {

          read: function(original) {

            var test = original.match(/^rgb\(\s*(.+)\s*,\s*(.+)\s*,\s*(.+)\s*\)/);
            if (test === null) return false;

            return {
              space: 'RGB',
              r: parseFloat(test[1]),
              g: parseFloat(test[2]),
              b: parseFloat(test[3])
            };

          },

          write: toString

        },

        CSS_RGBA: {

          read: function(original) {

            var test = original.match(/^rgba\(\s*(.+)\s*,\s*(.+)\s*,\s*(.+)\s*\,\s*(.+)\s*\)/);
            if (test === null) return false;

            return {
              space: 'RGB',
              r: parseFloat(test[1]),
              g: parseFloat(test[2]),
              b: parseFloat(test[3]),
              a: parseFloat(test[4])
            };

          },

          write: toString

        }

      }

    },

    // Numbers
    {

      litmus: common.isNumber,

      conversions: {

        HEX: {
          read: function(original) {
            return {
              space: 'HEX',
              hex: original,
              conversionName: 'HEX'
            }
          },

          write: function(color) {
            return color.hex;
          }
        }

      }

    },

    // Arrays
    {

      litmus: common.isArray,

      conversions: {

        RGB_ARRAY: {
          read: function(original) {
            if (original.length != 3) return false;
            return {
              space: 'RGB',
              r: original[0],
              g: original[1],
              b: original[2]
            };
          },

          write: function(color) {
            return [color.r, color.g, color.b];
          }

        },

        RGBA_ARRAY: {
          read: function(original) {
            if (original.length != 4) return false;
            return {
              space: 'RGB',
              r: original[0],
              g: original[1],
              b: original[2],
              a: original[3]
            };
          },

          write: function(color) {
            return [color.r, color.g, color.b, color.a];
          }

        }

      }

    },

    // Objects
    {

      litmus: common.isObject,

      conversions: {

        RGBA_OBJ: {
          read: function(original) {
            if (common.isNumber(original.r) &&
                common.isNumber(original.g) &&
                common.isNumber(original.b) &&
                common.isNumber(original.a)) {
              return {
                space: 'RGB',
                r: original.r,
                g: original.g,
                b: original.b,
                a: original.a
              }
            }
            return false;
          },

          write: function(color) {
            return {
              r: color.r,
              g: color.g,
              b: color.b,
              a: color.a
            }
          }
        },

        RGB_OBJ: {
          read: function(original) {
            if (common.isNumber(original.r) &&
                common.isNumber(original.g) &&
                common.isNumber(original.b)) {
              return {
                space: 'RGB',
                r: original.r,
                g: original.g,
                b: original.b
              }
            }
            return false;
          },

          write: function(color) {
            return {
              r: color.r,
              g: color.g,
              b: color.b
            }
          }
        },

        HSVA_OBJ: {
          read: function(original) {
            if (common.isNumber(original.h) &&
                common.isNumber(original.s) &&
                common.isNumber(original.v) &&
                common.isNumber(original.a)) {
              return {
                space: 'HSV',
                h: original.h,
                s: original.s,
                v: original.v,
                a: original.a
              }
            }
            return false;
          },

          write: function(color) {
            return {
              h: color.h,
              s: color.s,
              v: color.v,
              a: color.a
            }
          }
        },

        HSV_OBJ: {
          read: function(original) {
            if (common.isNumber(original.h) &&
                common.isNumber(original.s) &&
                common.isNumber(original.v)) {
              return {
                space: 'HSV',
                h: original.h,
                s: original.s,
                v: original.v
              }
            }
            return false;
          },

          write: function(color) {
            return {
              h: color.h,
              s: color.s,
              v: color.v
            }
          }

        }

      }

    }


  ];

  return interpret;


})(dat.color.toString,
dat.utils.common);


dat.GUI = dat.gui.GUI = (function (css, saveDialogueContents, styleSheet, controllerFactory, Controller, BooleanController, FunctionController, NumberControllerBox, NumberControllerSlider, OptionController, ColorController, requestAnimationFrame, CenteredDiv, dom, common) {

  css.inject(styleSheet);

  /** Outer-most className for GUI's */
  var CSS_NAMESPACE = 'dg';

  var HIDE_KEY_CODE = 72;

  /** The only value shared between the JS and SCSS. Use caution. */
  var CLOSE_BUTTON_HEIGHT = 20;

  var DEFAULT_DEFAULT_PRESET_NAME = 'Default';

  var SUPPORTS_LOCAL_STORAGE = (function() {
    try {
      return 'localStorage' in window && window['localStorage'] !== null;
    } catch (e) {
      return false;
    }
  })();

  var SAVE_DIALOGUE;

  /** Have we yet to create an autoPlace GUI? */
  var auto_place_virgin = true;

  /** Fixed position div that auto place GUI's go inside */
  var auto_place_container;

  /** Are we hiding the GUI's ? */
  var hide = false;

  /** GUI's which should be hidden */
  var hideable_guis = [];

  /**
   * A lightweight controller library for JavaScript. It allows you to easily
   * manipulate variables and fire functions on the fly.
   * @class
   *
   * @member dat.gui
   *
   * @param {Object} [params]
   * @param {String} [params.name] The name of this GUI.
   * @param {Object} [params.load] JSON object representing the saved state of
   * this GUI.
   * @param {Boolean} [params.auto=true]
   * @param {dat.gui.GUI} [params.parent] The GUI I'm nested in.
   * @param {Boolean} [params.closed] If true, starts closed
   */
  var GUI = function(params) {

    var _this = this;

    /**
     * Outermost DOM Element
     * @type DOMElement
     */
    this.domElement = document.createElement('div');
    this.__ul = document.createElement('ul');
    this.domElement.appendChild(this.__ul);

    dom.addClass(this.domElement, CSS_NAMESPACE);

    /**
     * Nested GUI's by name
     * @ignore
     */
    this.__folders = {};

    this.__controllers = [];

    /**
     * List of objects I'm remembering for save, only used in top level GUI
     * @ignore
     */
    this.__rememberedObjects = [];

    /**
     * Maps the index of remembered objects to a map of controllers, only used
     * in top level GUI.
     *
     * @private
     * @ignore
     *
     * @example
     * [
     *  {
     *    propertyName: Controller,
     *    anotherPropertyName: Controller
     *  },
     *  {
     *    propertyName: Controller
     *  }
     * ]
     */
    this.__rememberedObjectIndecesToControllers = [];

    this.__listening = [];

    params = params || {};

    // Default parameters
    params = common.defaults(params, {
      autoPlace: true,
      width: GUI.DEFAULT_WIDTH
    });

    params = common.defaults(params, {
      resizable: params.autoPlace,
      hideable: params.autoPlace
    });


    if (!common.isUndefined(params.load)) {

      // Explicit preset
      if (params.preset) params.load.preset = params.preset;

    } else {

      params.load = { preset: DEFAULT_DEFAULT_PRESET_NAME };

    }

    if (common.isUndefined(params.parent) && params.hideable) {
      hideable_guis.push(this);
    }

    // Only root level GUI's are resizable.
    params.resizable = common.isUndefined(params.parent) && params.resizable;


    if (params.autoPlace && common.isUndefined(params.scrollable)) {
      params.scrollable = true;
    }
//    params.scrollable = common.isUndefined(params.parent) && params.scrollable === true;

    // Not part of params because I don't want people passing this in via
    // constructor. Should be a 'remembered' value.
    var use_local_storage =
        SUPPORTS_LOCAL_STORAGE &&
            localStorage.getItem(getLocalStorageHash(this, 'isLocal')) === 'true';

    Object.defineProperties(this,

        /** @lends dat.gui.GUI.prototype */
        {

          /**
           * The parent <code>GUI</code>
           * @type dat.gui.GUI
           */
          parent: {
            get: function() {
              return params.parent;
            }
          },

          scrollable: {
            get: function() {
              return params.scrollable;
            }
          },

          /**
           * Handles <code>GUI</code>'s element placement for you
           * @type Boolean
           */
          autoPlace: {
            get: function() {
              return params.autoPlace;
            }
          },

          /**
           * The identifier for a set of saved values
           * @type String
           */
          preset: {

            get: function() {
              if (_this.parent) {
                return _this.getRoot().preset;
              } else {
                return params.load.preset;
              }
            },

            set: function(v) {
              if (_this.parent) {
                _this.getRoot().preset = v;
              } else {
                params.load.preset = v;
              }
              setPresetSelectIndex(this);
              _this.revert();
            }

          },

          /**
           * The width of <code>GUI</code> element
           * @type Number
           */
          width: {
            get: function() {
              return params.width;
            },
            set: function(v) {
              params.width = v;
              setWidth(_this, v);
            }
          },

          /**
           * The name of <code>GUI</code>. Used for folders. i.e
           * a folder's name
           * @type String
           */
          name: {
            get: function() {
              return params.name;
            },
            set: function(v) {
              // TODO Check for collisions among sibling folders
              params.name = v;
              if (title_row_name) {
                title_row_name.innerHTML = params.name;
              }
            }
          },

          /**
           * Whether the <code>GUI</code> is collapsed or not
           * @type Boolean
           */
          closed: {
            get: function() {
              return params.closed;
            },
            set: function(v) {
              params.closed = v;
              if (params.closed) {
                dom.addClass(_this.__ul, GUI.CLASS_CLOSED);
              } else {
                dom.removeClass(_this.__ul, GUI.CLASS_CLOSED);
              }
              // For browsers that aren't going to respect the CSS transition,
              // Lets just check our height against the window height right off
              // the bat.
              this.onResize();

              if (_this.__closeButton) {
                _this.__closeButton.innerHTML = v ? GUI.TEXT_OPEN : GUI.TEXT_CLOSED;
              }
            }
          },

          /**
           * Contains all presets
           * @type Object
           */
          load: {
            get: function() {
              return params.load;
            }
          },

          /**
           * Determines whether or not to use <a href="https://developer.mozilla.org/en/DOM/Storage#localStorage">localStorage</a> as the means for
           * <code>remember</code>ing
           * @type Boolean
           */
          useLocalStorage: {

            get: function() {
              return use_local_storage;
            },
            set: function(bool) {
              if (SUPPORTS_LOCAL_STORAGE) {
                use_local_storage = bool;
                if (bool) {
                  dom.bind(window, 'unload', saveToLocalStorage);
                } else {
                  dom.unbind(window, 'unload', saveToLocalStorage);
                }
                localStorage.setItem(getLocalStorageHash(_this, 'isLocal'), bool);
              }
            }

          }

        });

    // Are we a root level GUI?
    if (common.isUndefined(params.parent)) {

      params.closed = false;

      dom.addClass(this.domElement, GUI.CLASS_MAIN);
      dom.makeSelectable(this.domElement, false);

      // Are we supposed to be loading locally?
      if (SUPPORTS_LOCAL_STORAGE) {

        if (use_local_storage) {

          _this.useLocalStorage = true;

          var saved_gui = localStorage.getItem(getLocalStorageHash(this, 'gui'));

          if (saved_gui) {
            params.load = JSON.parse(saved_gui);
          }

        }

      }

      this.__closeButton = document.createElement('div');
      this.__closeButton.innerHTML = GUI.TEXT_CLOSED;
      dom.addClass(this.__closeButton, GUI.CLASS_CLOSE_BUTTON);
      this.domElement.appendChild(this.__closeButton);

      dom.bind(this.__closeButton, 'click', function() {

        _this.closed = !_this.closed;


      });


      // Oh, you're a nested GUI!
    } else {

      if (params.closed === undefined) {
        params.closed = true;
      }

      var title_row_name = document.createTextNode(params.name);
      dom.addClass(title_row_name, 'controller-name');

      var title_row = addRow(_this, title_row_name);

      var on_click_title = function(e) {
        e.preventDefault();
        _this.closed = !_this.closed;
        return false;
      };

      dom.addClass(this.__ul, GUI.CLASS_CLOSED);

      dom.addClass(title_row, 'title');
      dom.bind(title_row, 'click', on_click_title);

      if (!params.closed) {
        this.closed = false;
      }

    }

    if (params.autoPlace) {

      if (common.isUndefined(params.parent)) {

        if (auto_place_virgin) {
          auto_place_container = document.createElement('div');
          dom.addClass(auto_place_container, CSS_NAMESPACE);
          dom.addClass(auto_place_container, GUI.CLASS_AUTO_PLACE_CONTAINER);
          document.body.appendChild(auto_place_container);
          auto_place_virgin = false;
        }

        // Put it in the dom for you.
        auto_place_container.appendChild(this.domElement);

        // Apply the auto styles
        dom.addClass(this.domElement, GUI.CLASS_AUTO_PLACE);

      }


      // Make it not elastic.
      if (!this.parent) setWidth(_this, params.width);

    }

    dom.bind(window, 'resize', function() { _this.onResize() });
    dom.bind(this.__ul, 'webkitTransitionEnd', function() { _this.onResize(); });
    dom.bind(this.__ul, 'transitionend', function() { _this.onResize() });
    dom.bind(this.__ul, 'oTransitionEnd', function() { _this.onResize() });
    this.onResize();


    if (params.resizable) {
      addResizeHandle(this);
    }

    function saveToLocalStorage() {
      localStorage.setItem(getLocalStorageHash(_this, 'gui'), JSON.stringify(_this.getSaveObject()));
    }

    var root = _this.getRoot();
    function resetWidth() {
        var root = _this.getRoot();
        root.width += 1;
        common.defer(function() {
          root.width -= 1;
        });
      }

      if (!params.parent) {
        resetWidth();
      }

  };

  GUI.toggleHide = function() {

    hide = !hide;
    common.each(hideable_guis, function(gui) {
      gui.domElement.style.zIndex = hide ? -999 : 999;
      gui.domElement.style.opacity = hide ? 0 : 1;
    });
  };

  GUI.CLASS_AUTO_PLACE = 'a';
  GUI.CLASS_AUTO_PLACE_CONTAINER = 'ac';
  GUI.CLASS_MAIN = 'main';
  GUI.CLASS_CONTROLLER_ROW = 'cr';
  GUI.CLASS_TOO_TALL = 'taller-than-window';
  GUI.CLASS_CLOSED = 'closed';
  GUI.CLASS_CLOSE_BUTTON = 'close-button';
  GUI.CLASS_DRAG = 'drag';

  GUI.DEFAULT_WIDTH = 245;
  GUI.TEXT_CLOSED = 'Close Controls';
  GUI.TEXT_OPEN = 'Open Controls';

  dom.bind(window, 'keydown', function(e) {

    if (document.activeElement.type !== 'text' &&
        (e.which === HIDE_KEY_CODE || e.keyCode == HIDE_KEY_CODE)) {
      GUI.toggleHide();
    }

  }, false);

  common.extend(

      GUI.prototype,

      /** @lends dat.gui.GUI */
      {

        /**
         * @param object
         * @param property
         * @returns {dat.controllers.Controller} The new controller that was added.
         * @instance
         */
        add: function(object, property) {

          return add(
              this,
              object,
              property,
              {
                factoryArgs: Array.prototype.slice.call(arguments, 2)
              }
          );

        },

        /**
         * @param object
         * @param property
         * @returns {dat.controllers.ColorController} The new controller that was added.
         * @instance
         */
        addColor: function(object, property) {

          return add(
              this,
              object,
              property,
              {
                color: true
              }
          );

        },

        /**
         * @param controller
         * @instance
         */
        remove: function(controller) {

          // TODO listening?
          this.__ul.removeChild(controller.__li);
          this.__controllers.slice(this.__controllers.indexOf(controller), 1);
          var _this = this;
          common.defer(function() {
            _this.onResize();
          });

        },

        destroy: function() {

          if (this.autoPlace) {
            auto_place_container.removeChild(this.domElement);
          }

        },

        /**
         * @param name
         * @returns {dat.gui.GUI} The new folder.
         * @throws {Error} if this GUI already has a folder by the specified
         * name
         * @instance
         */
        addFolder: function(name) {

          // We have to prevent collisions on names in order to have a key
          // by which to remember saved values
          if (this.__folders[name] !== undefined) {
            throw new Error('You already have a folder in this GUI by the' +
                ' name "' + name + '"');
          }

          var new_gui_params = { name: name, parent: this };

          // We need to pass down the autoPlace trait so that we can
          // attach event listeners to open/close folder actions to
          // ensure that a scrollbar appears if the window is too short.
          new_gui_params.autoPlace = this.autoPlace;

          // Do we have saved appearance data for this folder?

          if (this.load && // Anything loaded?
              this.load.folders && // Was my parent a dead-end?
              this.load.folders[name]) { // Did daddy remember me?

            // Start me closed if I was closed
            new_gui_params.closed = this.load.folders[name].closed;

            // Pass down the loaded data
            new_gui_params.load = this.load.folders[name];

          }

          var gui = new GUI(new_gui_params);
          this.__folders[name] = gui;

          var li = addRow(this, gui.domElement);
          dom.addClass(li, 'folder');
          return gui;

        },

        open: function() {
          this.closed = false;
        },

        close: function() {
          this.closed = true;
        },

        onResize: function() {

          var root = this.getRoot();

          if (root.scrollable) {

            var top = dom.getOffset(root.__ul).top;
            var h = 0;

            common.each(root.__ul.childNodes, function(node) {
              if (! (root.autoPlace && node === root.__save_row))
                h += dom.getHeight(node);
            });

            if (window.innerHeight - top - CLOSE_BUTTON_HEIGHT < h) {
              dom.addClass(root.domElement, GUI.CLASS_TOO_TALL);
              root.__ul.style.height = window.innerHeight - top - CLOSE_BUTTON_HEIGHT + 'px';
            } else {
              dom.removeClass(root.domElement, GUI.CLASS_TOO_TALL);
              root.__ul.style.height = 'auto';
            }

          }

          if (root.__resize_handle) {
            common.defer(function() {
              root.__resize_handle.style.height = root.__ul.offsetHeight + 'px';
            });
          }

          if (root.__closeButton) {
            root.__closeButton.style.width = root.width + 'px';
          }

        },

        /**
         * Mark objects for saving. The order of these objects cannot change as
         * the GUI grows. When remembering new objects, append them to the end
         * of the list.
         *
         * @param {Object...} objects
         * @throws {Error} if not called on a top level GUI.
         * @instance
         */
        remember: function() {

          if (common.isUndefined(SAVE_DIALOGUE)) {
            SAVE_DIALOGUE = new CenteredDiv();
            SAVE_DIALOGUE.domElement.innerHTML = saveDialogueContents;
          }

          if (this.parent) {
            throw new Error("You can only call remember on a top level GUI.");
          }

          var _this = this;

          common.each(Array.prototype.slice.call(arguments), function(object) {
            if (_this.__rememberedObjects.length == 0) {
              addSaveMenu(_this);
            }
            if (_this.__rememberedObjects.indexOf(object) == -1) {
              _this.__rememberedObjects.push(object);
            }
          });

          if (this.autoPlace) {
            // Set save row width
            setWidth(this, this.width);
          }

        },

        /**
         * @returns {dat.gui.GUI} the topmost parent GUI of a nested GUI.
         * @instance
         */
        getRoot: function() {
          var gui = this;
          while (gui.parent) {
            gui = gui.parent;
          }
          return gui;
        },

        /**
         * @returns {Object} a JSON object representing the current state of
         * this GUI as well as its remembered properties.
         * @instance
         */
        getSaveObject: function() {

          var toReturn = this.load;

          toReturn.closed = this.closed;

          // Am I remembering any values?
          if (this.__rememberedObjects.length > 0) {

            toReturn.preset = this.preset;

            if (!toReturn.remembered) {
              toReturn.remembered = {};
            }

            toReturn.remembered[this.preset] = getCurrentPreset(this);

          }

          toReturn.folders = {};
          common.each(this.__folders, function(element, key) {
            toReturn.folders[key] = element.getSaveObject();
          });

          return toReturn;

        },

        save: function() {

          if (!this.load.remembered) {
            this.load.remembered = {};
          }

          this.load.remembered[this.preset] = getCurrentPreset(this);
          markPresetModified(this, false);

        },

        saveAs: function(presetName) {

          if (!this.load.remembered) {

            // Retain default values upon first save
            this.load.remembered = {};
            this.load.remembered[DEFAULT_DEFAULT_PRESET_NAME] = getCurrentPreset(this, true);

          }

          this.load.remembered[presetName] = getCurrentPreset(this);
          this.preset = presetName;
          addPresetOption(this, presetName, true);

        },

        revert: function(gui) {

          common.each(this.__controllers, function(controller) {
            // Make revert work on Default.
            if (!this.getRoot().load.remembered) {
              controller.setValue(controller.initialValue);
            } else {
              recallSavedValue(gui || this.getRoot(), controller);
            }
          }, this);

          common.each(this.__folders, function(folder) {
            folder.revert(folder);
          });

          if (!gui) {
            markPresetModified(this.getRoot(), false);
          }


        },

        listen: function(controller) {

          var init = this.__listening.length == 0;
          this.__listening.push(controller);
          if (init) updateDisplays(this.__listening);

        }

      }

  );

  function add(gui, object, property, params) {

    if (object[property] === undefined) {
      throw new Error("Object " + object + " has no property \"" + property + "\"");
    }

    var controller;

    if (params.color) {

      controller = new ColorController(object, property);

    } else {

      var factoryArgs = [object,property].concat(params.factoryArgs);
      controller = controllerFactory.apply(gui, factoryArgs);

    }

    if (params.before instanceof Controller) {
      params.before = params.before.__li;
    }

    recallSavedValue(gui, controller);

    dom.addClass(controller.domElement, 'c');

    var name = document.createElement('span');
    dom.addClass(name, 'property-name');
    name.innerHTML = controller.property;

    var container = document.createElement('div');
    container.appendChild(name);
    container.appendChild(controller.domElement);

    var li = addRow(gui, container, params.before);

    dom.addClass(li, GUI.CLASS_CONTROLLER_ROW);
    dom.addClass(li, typeof controller.getValue());

    augmentController(gui, li, controller);

    gui.__controllers.push(controller);

    return controller;

  }

  /**
   * Add a row to the end of the GUI or before another row.
   *
   * @param gui
   * @param [dom] If specified, inserts the dom content in the new row
   * @param [liBefore] If specified, places the new row before another row
   */
  function addRow(gui, dom, liBefore) {
    var li = document.createElement('li');
    if (dom) li.appendChild(dom);
    if (liBefore) {
      gui.__ul.insertBefore(li, params.before);
    } else {
      gui.__ul.appendChild(li);
    }
    gui.onResize();
    return li;
  }

  function augmentController(gui, li, controller) {

    controller.__li = li;
    controller.__gui = gui;

    common.extend(controller, {

      options: function(options) {

        if (arguments.length > 1) {
          controller.remove();

          return add(
              gui,
              controller.object,
              controller.property,
              {
                before: controller.__li.nextElementSibling,
                factoryArgs: [common.toArray(arguments)]
              }
          );

        }

        if (common.isArray(options) || common.isObject(options)) {
          controller.remove();

          return add(
              gui,
              controller.object,
              controller.property,
              {
                before: controller.__li.nextElementSibling,
                factoryArgs: [options]
              }
          );

        }

      },

      name: function(v) {
        controller.__li.firstElementChild.firstElementChild.innerHTML = v;
        return controller;
      },

      listen: function() {
        controller.__gui.listen(controller);
        return controller;
      },

      remove: function() {
        controller.__gui.remove(controller);
        return controller;
      }

    });

    // All sliders should be accompanied by a box.
    if (controller instanceof NumberControllerSlider) {

      var box = new NumberControllerBox(controller.object, controller.property,
          { min: controller.__min, max: controller.__max, step: controller.__step });

      common.each(['updateDisplay', 'onChange', 'onFinishChange'], function(method) {
        var pc = controller[method];
        var pb = box[method];
        controller[method] = box[method] = function() {
          var args = Array.prototype.slice.call(arguments);
          pc.apply(controller, args);
          return pb.apply(box, args);
        }
      });

      dom.addClass(li, 'has-slider');
      controller.domElement.insertBefore(box.domElement, controller.domElement.firstElementChild);

    }
    else if (controller instanceof NumberControllerBox) {

      var r = function(returned) {

        // Have we defined both boundaries?
        if (common.isNumber(controller.__min) && common.isNumber(controller.__max)) {

          // Well, then lets just replace this with a slider.
          controller.remove();
          return add(
              gui,
              controller.object,
              controller.property,
              {
                before: controller.__li.nextElementSibling,
                factoryArgs: [controller.__min, controller.__max, controller.__step]
              });

        }

        return returned;

      };

      controller.min = common.compose(r, controller.min);
      controller.max = common.compose(r, controller.max);

    }
    else if (controller instanceof BooleanController) {

      dom.bind(li, 'click', function() {
        dom.fakeEvent(controller.__checkbox, 'click');
      });

      dom.bind(controller.__checkbox, 'click', function(e) {
        e.stopPropagation(); // Prevents double-toggle
      })

    }
    else if (controller instanceof FunctionController) {

      dom.bind(li, 'click', function() {
        dom.fakeEvent(controller.__button, 'click');
      });

      dom.bind(li, 'mouseover', function() {
        dom.addClass(controller.__button, 'hover');
      });

      dom.bind(li, 'mouseout', function() {
        dom.removeClass(controller.__button, 'hover');
      });

    }
    else if (controller instanceof ColorController) {

      dom.addClass(li, 'color');
      controller.updateDisplay = common.compose(function(r) {
        li.style.borderLeftColor = controller.__color.toString();
        return r;
      }, controller.updateDisplay);

      controller.updateDisplay();

    }

    controller.setValue = common.compose(function(r) {
      if (gui.getRoot().__preset_select && controller.isModified()) {
        markPresetModified(gui.getRoot(), true);
      }
      return r;
    }, controller.setValue);

  }

  function recallSavedValue(gui, controller) {

    // Find the topmost GUI, that's where remembered objects live.
    var root = gui.getRoot();

    // Does the object we're controlling match anything we've been told to
    // remember?
    var matched_index = root.__rememberedObjects.indexOf(controller.object);

    // Why yes, it does!
    if (matched_index != -1) {

      // Let me fetch a map of controllers for thcommon.isObject.
      var controller_map =
          root.__rememberedObjectIndecesToControllers[matched_index];

      // Ohp, I believe this is the first controller we've created for this
      // object. Lets make the map fresh.
      if (controller_map === undefined) {
        controller_map = {};
        root.__rememberedObjectIndecesToControllers[matched_index] =
            controller_map;
      }

      // Keep track of this controller
      controller_map[controller.property] = controller;

      // Okay, now have we saved any values for this controller?
      if (root.load && root.load.remembered) {

        var preset_map = root.load.remembered;

        // Which preset are we trying to load?
        var preset;

        if (preset_map[gui.preset]) {

          preset = preset_map[gui.preset];

        } else if (preset_map[DEFAULT_DEFAULT_PRESET_NAME]) {

          // Uhh, you can have the default instead?
          preset = preset_map[DEFAULT_DEFAULT_PRESET_NAME];

        } else {

          // Nada.

          return;

        }


        // Did the loaded object remember thcommon.isObject?
        if (preset[matched_index] &&

          // Did we remember this particular property?
            preset[matched_index][controller.property] !== undefined) {

          // We did remember something for this guy ...
          var value = preset[matched_index][controller.property];

          // And that's what it is.
          controller.initialValue = value;
          controller.setValue(value);

        }

      }

    }

  }

  function getLocalStorageHash(gui, key) {
    // TODO how does this deal with multiple GUI's?
    return document.location.href + '.' + key;

  }

  function addSaveMenu(gui) {

    var div = gui.__save_row = document.createElement('li');

    dom.addClass(gui.domElement, 'has-save');

    gui.__ul.insertBefore(div, gui.__ul.firstChild);

    dom.addClass(div, 'save-row');

    var gears = document.createElement('span');
    gears.innerHTML = '&nbsp;';
    dom.addClass(gears, 'button gears');

    // TODO replace with FunctionController
    var button = document.createElement('span');
    button.innerHTML = 'Save';
    dom.addClass(button, 'button');
    dom.addClass(button, 'save');

    var button2 = document.createElement('span');
    button2.innerHTML = 'New';
    dom.addClass(button2, 'button');
    dom.addClass(button2, 'save-as');

    var button3 = document.createElement('span');
    button3.innerHTML = 'Revert';
    dom.addClass(button3, 'button');
    dom.addClass(button3, 'revert');

    var select = gui.__preset_select = document.createElement('select');

    if (gui.load && gui.load.remembered) {

      common.each(gui.load.remembered, function(value, key) {
        addPresetOption(gui, key, key == gui.preset);
      });

    } else {
      addPresetOption(gui, DEFAULT_DEFAULT_PRESET_NAME, false);
    }

    dom.bind(select, 'change', function() {


      for (var index = 0; index < gui.__preset_select.length; index++) {
        gui.__preset_select[index].innerHTML = gui.__preset_select[index].value;
      }

      gui.preset = this.value;

    });

    div.appendChild(select);
    div.appendChild(gears);
    div.appendChild(button);
    div.appendChild(button2);
    div.appendChild(button3);

    if (SUPPORTS_LOCAL_STORAGE) {

      var saveLocally = document.getElementById('dg-save-locally');
      var explain = document.getElementById('dg-local-explain');

      saveLocally.style.display = 'block';

      var localStorageCheckBox = document.getElementById('dg-local-storage');

      if (localStorage.getItem(getLocalStorageHash(gui, 'isLocal')) === 'true') {
        localStorageCheckBox.setAttribute('checked', 'checked');
      }

      function showHideExplain() {
        explain.style.display = gui.useLocalStorage ? 'block' : 'none';
      }

      showHideExplain();

      // TODO: Use a boolean controller, fool!
      dom.bind(localStorageCheckBox, 'change', function() {
        gui.useLocalStorage = !gui.useLocalStorage;
        showHideExplain();
      });

    }

    var newConstructorTextArea = document.getElementById('dg-new-constructor');

    dom.bind(newConstructorTextArea, 'keydown', function(e) {
      if (e.metaKey && (e.which === 67 || e.keyCode == 67)) {
        SAVE_DIALOGUE.hide();
      }
    });

    dom.bind(gears, 'click', function() {
      newConstructorTextArea.innerHTML = JSON.stringify(gui.getSaveObject(), undefined, 2);
      SAVE_DIALOGUE.show();
      newConstructorTextArea.focus();
      newConstructorTextArea.select();
    });

    dom.bind(button, 'click', function() {
      gui.save();
    });

    dom.bind(button2, 'click', function() {
      var presetName = prompt('Enter a new preset name.');
      if (presetName) gui.saveAs(presetName);
    });

    dom.bind(button3, 'click', function() {
      gui.revert();
    });

//    div.appendChild(button2);

  }

  function addResizeHandle(gui) {

    gui.__resize_handle = document.createElement('div');

    common.extend(gui.__resize_handle.style, {

      width: '6px',
      marginLeft: '-3px',
      height: '200px',
      cursor: 'ew-resize',
      position: 'absolute'
//      border: '1px solid blue'

    });

    var pmouseX;

    dom.bind(gui.__resize_handle, 'mousedown', dragStart);
    dom.bind(gui.__closeButton, 'mousedown', dragStart);

    gui.domElement.insertBefore(gui.__resize_handle, gui.domElement.firstElementChild);

    function dragStart(e) {

      e.preventDefault();

      pmouseX = e.clientX;

      dom.addClass(gui.__closeButton, GUI.CLASS_DRAG);
      dom.bind(window, 'mousemove', drag);
      dom.bind(window, 'mouseup', dragStop);

      return false;

    }

    function drag(e) {

      e.preventDefault();

      gui.width += pmouseX - e.clientX;
      gui.onResize();
      pmouseX = e.clientX;

      return false;

    }

    function dragStop() {

      dom.removeClass(gui.__closeButton, GUI.CLASS_DRAG);
      dom.unbind(window, 'mousemove', drag);
      dom.unbind(window, 'mouseup', dragStop);

    }

  }

  function setWidth(gui, w) {
    gui.domElement.style.width = w + 'px';
    // Auto placed save-rows are position fixed, so we have to
    // set the width manually if we want it to bleed to the edge
    if (gui.__save_row && gui.autoPlace) {
      gui.__save_row.style.width = w + 'px';
    }if (gui.__closeButton) {
      gui.__closeButton.style.width = w + 'px';
    }
  }

  function getCurrentPreset(gui, useInitialValues) {

    var toReturn = {};

    // For each object I'm remembering
    common.each(gui.__rememberedObjects, function(val, index) {

      var saved_values = {};

      // The controllers I've made for thcommon.isObject by property
      var controller_map =
          gui.__rememberedObjectIndecesToControllers[index];

      // Remember each value for each property
      common.each(controller_map, function(controller, property) {
        saved_values[property] = useInitialValues ? controller.initialValue : controller.getValue();
      });

      // Save the values for thcommon.isObject
      toReturn[index] = saved_values;

    });

    return toReturn;

  }

  function addPresetOption(gui, name, setSelected) {
    var opt = document.createElement('option');
    opt.innerHTML = name;
    opt.value = name;
    gui.__preset_select.appendChild(opt);
    if (setSelected) {
      gui.__preset_select.selectedIndex = gui.__preset_select.length - 1;
    }
  }

  function setPresetSelectIndex(gui) {
    for (var index = 0; index < gui.__preset_select.length; index++) {
      if (gui.__preset_select[index].value == gui.preset) {
        gui.__preset_select.selectedIndex = index;
      }
    }
  }

  function markPresetModified(gui, modified) {
    var opt = gui.__preset_select[gui.__preset_select.selectedIndex];
//    console.log('mark', modified, opt);
    if (modified) {
      opt.innerHTML = opt.value + "*";
    } else {
      opt.innerHTML = opt.value;
    }
  }

  function updateDisplays(controllerArray) {


    if (controllerArray.length != 0) {

      requestAnimationFrame(function() {
        updateDisplays(controllerArray);
      });

    }

    common.each(controllerArray, function(c) {
      c.updateDisplay();
    });

  }

  return GUI;

})(dat.utils.css,
"<div id=\"dg-save\" class=\"dg dialogue\">\n\n  Here's the new load parameter for your <code>GUI</code>'s constructor:\n\n  <textarea id=\"dg-new-constructor\"></textarea>\n\n  <div id=\"dg-save-locally\">\n\n    <input id=\"dg-local-storage\" type=\"checkbox\"/> Automatically save\n    values to <code>localStorage</code> on exit.\n\n    <div id=\"dg-local-explain\">The values saved to <code>localStorage</code> will\n      override those passed to <code>dat.GUI</code>'s constructor. This makes it\n      easier to work incrementally, but <code>localStorage</code> is fragile,\n      and your friends may not see the same values you do.\n      \n    </div>\n    \n  </div>\n\n</div>",
".dg ul{list-style:none;margin:0;padding:0;width:100%;clear:both}.dg.ac{position:fixed;top:0;left:0;right:0;height:0;z-index:0}.dg:not(.ac) .main{overflow:hidden}.dg.main{-webkit-transition:opacity 0.1s linear;-o-transition:opacity 0.1s linear;-moz-transition:opacity 0.1s linear;transition:opacity 0.1s linear}.dg.main.taller-than-window{overflow-y:auto}.dg.main.taller-than-window .close-button{opacity:1;margin-top:-1px;border-top:1px solid #2c2c2c}.dg.main ul.closed .close-button{opacity:1 !important}.dg.main:hover .close-button,.dg.main .close-button.drag{opacity:1}.dg.main .close-button{-webkit-transition:opacity 0.1s linear;-o-transition:opacity 0.1s linear;-moz-transition:opacity 0.1s linear;transition:opacity 0.1s linear;border:0;position:absolute;line-height:19px;height:20px;cursor:pointer;text-align:center;background-color:#000}.dg.main .close-button:hover{background-color:#111}.dg.a{float:right;margin-right:15px;overflow-x:hidden}.dg.a.has-save ul{margin-top:27px}.dg.a.has-save ul.closed{margin-top:0}.dg.a .save-row{position:fixed;top:0;z-index:1002}.dg li{-webkit-transition:height 0.1s ease-out;-o-transition:height 0.1s ease-out;-moz-transition:height 0.1s ease-out;transition:height 0.1s ease-out}.dg li:not(.folder){cursor:auto;height:27px;line-height:27px;overflow:hidden;padding:0 4px 0 5px}.dg li.folder{padding:0;border-left:4px solid rgba(0,0,0,0)}.dg li.title{cursor:pointer;margin-left:-4px}.dg .closed li:not(.title),.dg .closed ul li,.dg .closed ul li > *{height:0;overflow:hidden;border:0}.dg .cr{clear:both;padding-left:3px;height:27px}.dg .property-name{cursor:default;float:left;clear:left;width:40%;overflow:hidden;text-overflow:ellipsis}.dg .c{float:left;width:60%}.dg .c input[type=text]{border:0;margin-top:4px;padding:3px;width:100%;float:right}.dg .has-slider input[type=text]{width:30%;margin-left:0}.dg .slider{float:left;width:66%;margin-left:-5px;margin-right:0;height:19px;margin-top:4px}.dg .slider-fg{height:100%}.dg .c input[type=checkbox]{margin-top:9px}.dg .c select{margin-top:5px}.dg .cr.function,.dg .cr.function .property-name,.dg .cr.function *,.dg .cr.boolean,.dg .cr.boolean *{cursor:pointer}.dg .selector{display:none;position:absolute;margin-left:-9px;margin-top:23px;z-index:10}.dg .c:hover .selector,.dg .selector.drag{display:block}.dg li.save-row{padding:0}.dg li.save-row .button{display:inline-block;padding:0px 6px}.dg.dialogue{background-color:#222;width:460px;padding:15px;font-size:13px;line-height:15px}#dg-new-constructor{padding:10px;color:#222;font-family:Monaco, monospace;font-size:10px;border:0;resize:none;box-shadow:inset 1px 1px 1px #888;word-wrap:break-word;margin:12px 0;display:block;width:440px;overflow-y:scroll;height:100px;position:relative}#dg-local-explain{display:none;font-size:11px;line-height:17px;border-radius:3px;background-color:#333;padding:8px;margin-top:10px}#dg-local-explain code{font-size:10px}#dat-gui-save-locally{display:none}.dg{color:#eee;font:11px 'Lucida Grande', sans-serif;text-shadow:0 -1px 0 #111}.dg.main::-webkit-scrollbar{width:5px;background:#1a1a1a}.dg.main::-webkit-scrollbar-corner{height:0;display:none}.dg.main::-webkit-scrollbar-thumb{border-radius:5px;background:#676767}.dg li:not(.folder){background:#1a1a1a;border-bottom:1px solid #2c2c2c}.dg li.save-row{line-height:25px;background:#dad5cb;border:0}.dg li.save-row select{margin-left:5px;width:108px}.dg li.save-row .button{margin-left:5px;margin-top:1px;border-radius:2px;font-size:9px;line-height:7px;padding:4px 4px 5px 4px;background:#c5bdad;color:#fff;text-shadow:0 1px 0 #b0a58f;box-shadow:0 -1px 0 #b0a58f;cursor:pointer}.dg li.save-row .button.gears{background:#c5bdad url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAsAAAANCAYAAAB/9ZQ7AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAQJJREFUeNpiYKAU/P//PwGIC/ApCABiBSAW+I8AClAcgKxQ4T9hoMAEUrxx2QSGN6+egDX+/vWT4e7N82AMYoPAx/evwWoYoSYbACX2s7KxCxzcsezDh3evFoDEBYTEEqycggWAzA9AuUSQQgeYPa9fPv6/YWm/Acx5IPb7ty/fw+QZblw67vDs8R0YHyQhgObx+yAJkBqmG5dPPDh1aPOGR/eugW0G4vlIoTIfyFcA+QekhhHJhPdQxbiAIguMBTQZrPD7108M6roWYDFQiIAAv6Aow/1bFwXgis+f2LUAynwoIaNcz8XNx3Dl7MEJUDGQpx9gtQ8YCueB+D26OECAAQDadt7e46D42QAAAABJRU5ErkJggg==) 2px 1px no-repeat;height:7px;width:8px}.dg li.save-row .button:hover{background-color:#bab19e;box-shadow:0 -1px 0 #b0a58f}.dg li.folder{border-bottom:0}.dg li.title{padding-left:16px;background:#000 url(data:image/gif;base64,R0lGODlhBQAFAJEAAP////Pz8////////yH5BAEAAAIALAAAAAAFAAUAAAIIlI+hKgFxoCgAOw==) 6px 10px no-repeat;cursor:pointer;border-bottom:1px solid rgba(255,255,255,0.2)}.dg .closed li.title{background-image:url(data:image/gif;base64,R0lGODlhBQAFAJEAAP////Pz8////////yH5BAEAAAIALAAAAAAFAAUAAAIIlGIWqMCbWAEAOw==)}.dg .cr.boolean{border-left:3px solid #806787}.dg .cr.function{border-left:3px solid #e61d5f}.dg .cr.number{border-left:3px solid #2fa1d6}.dg .cr.number input[type=text]{color:#2fa1d6}.dg .cr.string{border-left:3px solid #1ed36f}.dg .cr.string input[type=text]{color:#1ed36f}.dg .cr.function:hover,.dg .cr.boolean:hover{background:#111}.dg .c input[type=text]{background:#303030;outline:none}.dg .c input[type=text]:hover{background:#3c3c3c}.dg .c input[type=text]:focus{background:#494949;color:#fff}.dg .c .slider{background:#303030;cursor:ew-resize}.dg .c .slider-fg{background:#2fa1d6}.dg .c .slider:hover{background:#3c3c3c}.dg .c .slider:hover .slider-fg{background:#44abda}\n",
dat.controllers.factory = (function (OptionController, NumberControllerBox, NumberControllerSlider, StringController, FunctionController, BooleanController, common) {

      return function(object, property) {

        var initialValue = object[property];

        // Providing options?
        if (common.isArray(arguments[2]) || common.isObject(arguments[2])) {
          return new OptionController(object, property, arguments[2]);
        }

        // Providing a map?

        if (common.isNumber(initialValue)) {

          if (common.isNumber(arguments[2]) && common.isNumber(arguments[3])) {

            // Has min and max.
            return new NumberControllerSlider(object, property, arguments[2], arguments[3]);

          } else {

            return new NumberControllerBox(object, property, { min: arguments[2], max: arguments[3] });

          }

        }

        if (common.isString(initialValue)) {
          return new StringController(object, property);
        }

        if (common.isFunction(initialValue)) {
          return new FunctionController(object, property, '');
        }

        if (common.isBoolean(initialValue)) {
          return new BooleanController(object, property);
        }

      }

    })(dat.controllers.OptionController,
dat.controllers.NumberControllerBox,
dat.controllers.NumberControllerSlider,
dat.controllers.StringController = (function (Controller, dom, common) {

  /**
   * @class Provides a text input to alter the string property of an object.
   *
   * @extends dat.controllers.Controller
   *
   * @param {Object} object The object to be manipulated
   * @param {string} property The name of the property to be manipulated
   *
   * @member dat.controllers
   */
  var StringController = function(object, property) {

    StringController.superclass.call(this, object, property);

    var _this = this;

    this.__input = document.createElement('input');
    this.__input.setAttribute('type', 'text');

    dom.bind(this.__input, 'keyup', onChange);
    dom.bind(this.__input, 'change', onChange);
    dom.bind(this.__input, 'blur', onBlur);
    dom.bind(this.__input, 'keydown', function(e) {
      if (e.keyCode === 13) {
        this.blur();
      }
    });
    

    function onChange() {
      _this.setValue(_this.__input.value);
    }

    function onBlur() {
      if (_this.__onFinishChange) {
        _this.__onFinishChange.call(_this, _this.getValue());
      }
    }

    this.updateDisplay();

    this.domElement.appendChild(this.__input);

  };

  StringController.superclass = Controller;

  common.extend(

      StringController.prototype,
      Controller.prototype,

      {

        updateDisplay: function() {
          // Stops the caret from moving on account of:
          // keyup -> setValue -> updateDisplay
          if (!dom.isActive(this.__input)) {
            this.__input.value = this.getValue();
          }
          return StringController.superclass.prototype.updateDisplay.call(this);
        }

      }

  );

  return StringController;

})(dat.controllers.Controller,
dat.dom.dom,
dat.utils.common),
dat.controllers.FunctionController,
dat.controllers.BooleanController,
dat.utils.common),
dat.controllers.Controller,
dat.controllers.BooleanController,
dat.controllers.FunctionController,
dat.controllers.NumberControllerBox,
dat.controllers.NumberControllerSlider,
dat.controllers.OptionController,
dat.controllers.ColorController = (function (Controller, dom, Color, interpret, common) {

  var ColorController = function(object, property) {

    ColorController.superclass.call(this, object, property);

    this.__color = new Color(this.getValue());
    this.__temp = new Color(0);

    var _this = this;

    this.domElement = document.createElement('div');

    dom.makeSelectable(this.domElement, false);

    this.__selector = document.createElement('div');
    this.__selector.className = 'selector';

    this.__saturation_field = document.createElement('div');
    this.__saturation_field.className = 'saturation-field';

    this.__field_knob = document.createElement('div');
    this.__field_knob.className = 'field-knob';
    this.__field_knob_border = '2px solid ';

    this.__hue_knob = document.createElement('div');
    this.__hue_knob.className = 'hue-knob';

    this.__hue_field = document.createElement('div');
    this.__hue_field.className = 'hue-field';

    this.__input = document.createElement('input');
    this.__input.type = 'text';
    this.__input_textShadow = '0 1px 1px ';

    dom.bind(this.__input, 'keydown', function(e) {
      if (e.keyCode === 13) { // on enter
        onBlur.call(this);
      }
    });

    dom.bind(this.__input, 'blur', onBlur);

    dom.bind(this.__selector, 'mousedown', function(e) {

      dom
        .addClass(this, 'drag')
        .bind(window, 'mouseup', function(e) {
          dom.removeClass(_this.__selector, 'drag');
        });

    });

    var value_field = document.createElement('div');

    common.extend(this.__selector.style, {
      width: '122px',
      height: '102px',
      padding: '3px',
      backgroundColor: '#222',
      boxShadow: '0px 1px 3px rgba(0,0,0,0.3)'
    });

    common.extend(this.__field_knob.style, {
      position: 'absolute',
      width: '12px',
      height: '12px',
      border: this.__field_knob_border + (this.__color.v < .5 ? '#fff' : '#000'),
      boxShadow: '0px 1px 3px rgba(0,0,0,0.5)',
      borderRadius: '12px',
      zIndex: 1
    });
    
    common.extend(this.__hue_knob.style, {
      position: 'absolute',
      width: '15px',
      height: '2px',
      borderRight: '4px solid #fff',
      zIndex: 1
    });

    common.extend(this.__saturation_field.style, {
      width: '100px',
      height: '100px',
      border: '1px solid #555',
      marginRight: '3px',
      display: 'inline-block',
      cursor: 'pointer'
    });

    common.extend(value_field.style, {
      width: '100%',
      height: '100%',
      background: 'none'
    });
    
    linearGradient(value_field, 'top', 'rgba(0,0,0,0)', '#000');

    common.extend(this.__hue_field.style, {
      width: '15px',
      height: '100px',
      display: 'inline-block',
      border: '1px solid #555',
      cursor: 'ns-resize'
    });

    hueGradient(this.__hue_field);

    common.extend(this.__input.style, {
      outline: 'none',
//      width: '120px',
      textAlign: 'center',
//      padding: '4px',
//      marginBottom: '6px',
      color: '#fff',
      border: 0,
      fontWeight: 'bold',
      textShadow: this.__input_textShadow + 'rgba(0,0,0,0.7)'
    });

    dom.bind(this.__saturation_field, 'mousedown', fieldDown);
    dom.bind(this.__field_knob, 'mousedown', fieldDown);

    dom.bind(this.__hue_field, 'mousedown', function(e) {
      setH(e);
      dom.bind(window, 'mousemove', setH);
      dom.bind(window, 'mouseup', unbindH);
    });

    function fieldDown(e) {
      setSV(e);
      // document.body.style.cursor = 'none';
      dom.bind(window, 'mousemove', setSV);
      dom.bind(window, 'mouseup', unbindSV);
    }

    function unbindSV() {
      dom.unbind(window, 'mousemove', setSV);
      dom.unbind(window, 'mouseup', unbindSV);
      // document.body.style.cursor = 'default';
    }

    function onBlur() {
      var i = interpret(this.value);
      if (i !== false) {
        _this.__color.__state = i;
        _this.setValue(_this.__color.toOriginal());
      } else {
        this.value = _this.__color.toString();
      }
    }

    function unbindH() {
      dom.unbind(window, 'mousemove', setH);
      dom.unbind(window, 'mouseup', unbindH);
    }

    this.__saturation_field.appendChild(value_field);
    this.__selector.appendChild(this.__field_knob);
    this.__selector.appendChild(this.__saturation_field);
    this.__selector.appendChild(this.__hue_field);
    this.__hue_field.appendChild(this.__hue_knob);

    this.domElement.appendChild(this.__input);
    this.domElement.appendChild(this.__selector);

    this.updateDisplay();

    function setSV(e) {

      e.preventDefault();

      var w = dom.getWidth(_this.__saturation_field);
      var o = dom.getOffset(_this.__saturation_field);
      var s = (e.clientX - o.left + document.body.scrollLeft) / w;
      var v = 1 - (e.clientY - o.top + document.body.scrollTop) / w;

      if (v > 1) v = 1;
      else if (v < 0) v = 0;

      if (s > 1) s = 1;
      else if (s < 0) s = 0;

      _this.__color.v = v;
      _this.__color.s = s;

      _this.setValue(_this.__color.toOriginal());


      return false;

    }

    function setH(e) {

      e.preventDefault();

      var s = dom.getHeight(_this.__hue_field);
      var o = dom.getOffset(_this.__hue_field);
      var h = 1 - (e.clientY - o.top + document.body.scrollTop) / s;

      if (h > 1) h = 1;
      else if (h < 0) h = 0;

      _this.__color.h = h * 360;

      _this.setValue(_this.__color.toOriginal());

      return false;

    }

  };

  ColorController.superclass = Controller;

  common.extend(

      ColorController.prototype,
      Controller.prototype,

      {

        updateDisplay: function() {

          var i = interpret(this.getValue());

          if (i !== false) {

            var mismatch = false;

            // Check for mismatch on the interpreted value.

            common.each(Color.COMPONENTS, function(component) {
              if (!common.isUndefined(i[component]) &&
                  !common.isUndefined(this.__color.__state[component]) &&
                  i[component] !== this.__color.__state[component]) {
                mismatch = true;
                return {}; // break
              }
            }, this);

            // If nothing diverges, we keep our previous values
            // for statefulness, otherwise we recalculate fresh
            if (mismatch) {
              common.extend(this.__color.__state, i);
            }

          }

          common.extend(this.__temp.__state, this.__color.__state);

          this.__temp.a = 1;

          var flip = (this.__color.v < .5 || this.__color.s > .5) ? 255 : 0;
          var _flip = 255 - flip;

          common.extend(this.__field_knob.style, {
            marginLeft: 100 * this.__color.s - 7 + 'px',
            marginTop: 100 * (1 - this.__color.v) - 7 + 'px',
            backgroundColor: this.__temp.toString(),
            border: this.__field_knob_border + 'rgb(' + flip + ',' + flip + ',' + flip +')'
          });

          this.__hue_knob.style.marginTop = (1 - this.__color.h / 360) * 100 + 'px'

          this.__temp.s = 1;
          this.__temp.v = 1;

          linearGradient(this.__saturation_field, 'left', '#fff', this.__temp.toString());

          common.extend(this.__input.style, {
            backgroundColor: this.__input.value = this.__color.toString(),
            color: 'rgb(' + flip + ',' + flip + ',' + flip +')',
            textShadow: this.__input_textShadow + 'rgba(' + _flip + ',' + _flip + ',' + _flip +',.7)'
          });

        }

      }

  );
  
  var vendors = ['-moz-','-o-','-webkit-','-ms-',''];
  
  function linearGradient(elem, x, a, b) {
    elem.style.background = '';
    common.each(vendors, function(vendor) {
      elem.style.cssText += 'background: ' + vendor + 'linear-gradient('+x+', '+a+' 0%, ' + b + ' 100%); ';
    });
  }
  
  function hueGradient(elem) {
    elem.style.background = '';
    elem.style.cssText += 'background: -moz-linear-gradient(top,  #ff0000 0%, #ff00ff 17%, #0000ff 34%, #00ffff 50%, #00ff00 67%, #ffff00 84%, #ff0000 100%);'
    elem.style.cssText += 'background: -webkit-linear-gradient(top,  #ff0000 0%,#ff00ff 17%,#0000ff 34%,#00ffff 50%,#00ff00 67%,#ffff00 84%,#ff0000 100%);'
    elem.style.cssText += 'background: -o-linear-gradient(top,  #ff0000 0%,#ff00ff 17%,#0000ff 34%,#00ffff 50%,#00ff00 67%,#ffff00 84%,#ff0000 100%);'
    elem.style.cssText += 'background: -ms-linear-gradient(top,  #ff0000 0%,#ff00ff 17%,#0000ff 34%,#00ffff 50%,#00ff00 67%,#ffff00 84%,#ff0000 100%);'
    elem.style.cssText += 'background: linear-gradient(top,  #ff0000 0%,#ff00ff 17%,#0000ff 34%,#00ffff 50%,#00ff00 67%,#ffff00 84%,#ff0000 100%);'
  }


  return ColorController;

})(dat.controllers.Controller,
dat.dom.dom,
dat.color.Color = (function (interpret, math, toString, common) {

  var Color = function() {

    this.__state = interpret.apply(this, arguments);

    if (this.__state === false) {
      throw 'Failed to interpret color arguments';
    }

    this.__state.a = this.__state.a || 1;


  };

  Color.COMPONENTS = ['r','g','b','h','s','v','hex','a'];

  common.extend(Color.prototype, {

    toString: function() {
      return toString(this);
    },

    toOriginal: function() {
      return this.__state.conversion.write(this);
    }

  });

  defineRGBComponent(Color.prototype, 'r', 2);
  defineRGBComponent(Color.prototype, 'g', 1);
  defineRGBComponent(Color.prototype, 'b', 0);

  defineHSVComponent(Color.prototype, 'h');
  defineHSVComponent(Color.prototype, 's');
  defineHSVComponent(Color.prototype, 'v');

  Object.defineProperty(Color.prototype, 'a', {

    get: function() {
      return this.__state.a;
    },

    set: function(v) {
      this.__state.a = v;
    }

  });

  Object.defineProperty(Color.prototype, 'hex', {

    get: function() {

      if (!this.__state.space !== 'HEX') {
        this.__state.hex = math.rgb_to_hex(this.r, this.g, this.b);
      }

      return this.__state.hex;

    },

    set: function(v) {

      this.__state.space = 'HEX';
      this.__state.hex = v;

    }

  });

  function defineRGBComponent(target, component, componentHexIndex) {

    Object.defineProperty(target, component, {

      get: function() {

        if (this.__state.space === 'RGB') {
          return this.__state[component];
        }

        recalculateRGB(this, component, componentHexIndex);

        return this.__state[component];

      },

      set: function(v) {

        if (this.__state.space !== 'RGB') {
          recalculateRGB(this, component, componentHexIndex);
          this.__state.space = 'RGB';
        }

        this.__state[component] = v;

      }

    });

  }

  function defineHSVComponent(target, component) {

    Object.defineProperty(target, component, {

      get: function() {

        if (this.__state.space === 'HSV')
          return this.__state[component];

        recalculateHSV(this);

        return this.__state[component];

      },

      set: function(v) {

        if (this.__state.space !== 'HSV') {
          recalculateHSV(this);
          this.__state.space = 'HSV';
        }

        this.__state[component] = v;

      }

    });

  }

  function recalculateRGB(color, component, componentHexIndex) {

    if (color.__state.space === 'HEX') {

      color.__state[component] = math.component_from_hex(color.__state.hex, componentHexIndex);

    } else if (color.__state.space === 'HSV') {

      common.extend(color.__state, math.hsv_to_rgb(color.__state.h, color.__state.s, color.__state.v));

    } else {

      throw 'Corrupted color state';

    }

  }

  function recalculateHSV(color) {

    var result = math.rgb_to_hsv(color.r, color.g, color.b);

    common.extend(color.__state,
        {
          s: result.s,
          v: result.v
        }
    );

    if (!common.isNaN(result.h)) {
      color.__state.h = result.h;
    } else if (common.isUndefined(color.__state.h)) {
      color.__state.h = 0;
    }

  }

  return Color;

})(dat.color.interpret,
dat.color.math = (function () {

  var tmpComponent;

  return {

    hsv_to_rgb: function(h, s, v) {

      var hi = Math.floor(h / 60) % 6;

      var f = h / 60 - Math.floor(h / 60);
      var p = v * (1.0 - s);
      var q = v * (1.0 - (f * s));
      var t = v * (1.0 - ((1.0 - f) * s));
      var c = [
        [v, t, p],
        [q, v, p],
        [p, v, t],
        [p, q, v],
        [t, p, v],
        [v, p, q]
      ][hi];

      return {
        r: c[0] * 255,
        g: c[1] * 255,
        b: c[2] * 255
      };

    },

    rgb_to_hsv: function(r, g, b) {

      var min = Math.min(r, g, b),
          max = Math.max(r, g, b),
          delta = max - min,
          h, s;

      if (max != 0) {
        s = delta / max;
      } else {
        return {
          h: NaN,
          s: 0,
          v: 0
        };
      }

      if (r == max) {
        h = (g - b) / delta;
      } else if (g == max) {
        h = 2 + (b - r) / delta;
      } else {
        h = 4 + (r - g) / delta;
      }
      h /= 6;
      if (h < 0) {
        h += 1;
      }

      return {
        h: h * 360,
        s: s,
        v: max / 255
      };
    },

    rgb_to_hex: function(r, g, b) {
      var hex = this.hex_with_component(0, 2, r);
      hex = this.hex_with_component(hex, 1, g);
      hex = this.hex_with_component(hex, 0, b);
      return hex;
    },

    component_from_hex: function(hex, componentIndex) {
      return (hex >> (componentIndex * 8)) & 0xFF;
    },

    hex_with_component: function(hex, componentIndex, value) {
      return value << (tmpComponent = componentIndex * 8) | (hex & ~ (0xFF << tmpComponent));
    }

  }

})(),
dat.color.toString,
dat.utils.common),
dat.color.interpret,
dat.utils.common),
dat.utils.requestAnimationFrame = (function () {

  /**
   * requirejs version of Paul Irish's RequestAnimationFrame
   * http://paulirish.com/2011/requestanimationframe-for-smart-animating/
   */

  return window.webkitRequestAnimationFrame ||
      window.mozRequestAnimationFrame ||
      window.oRequestAnimationFrame ||
      window.msRequestAnimationFrame ||
      function(callback, element) {

        window.setTimeout(callback, 1000 / 60);

      };
})(),
dat.dom.CenteredDiv = (function (dom, common) {


  var CenteredDiv = function() {

    this.backgroundElement = document.createElement('div');
    common.extend(this.backgroundElement.style, {
      backgroundColor: 'rgba(0,0,0,0.8)',
      top: 0,
      left: 0,
      display: 'none',
      zIndex: '1000',
      opacity: 0,
      WebkitTransition: 'opacity 0.2s linear'
    });

    dom.makeFullscreen(this.backgroundElement);
    this.backgroundElement.style.position = 'fixed';

    this.domElement = document.createElement('div');
    common.extend(this.domElement.style, {
      position: 'fixed',
      display: 'none',
      zIndex: '1001',
      opacity: 0,
      WebkitTransition: '-webkit-transform 0.2s ease-out, opacity 0.2s linear'
    });


    document.body.appendChild(this.backgroundElement);
    document.body.appendChild(this.domElement);

    var _this = this;
    dom.bind(this.backgroundElement, 'click', function() {
      _this.hide();
    });


  };

  CenteredDiv.prototype.show = function() {

    var _this = this;
    


    this.backgroundElement.style.display = 'block';

    this.domElement.style.display = 'block';
    this.domElement.style.opacity = 0;
//    this.domElement.style.top = '52%';
    this.domElement.style.webkitTransform = 'scale(1.1)';

    this.layout();

    common.defer(function() {
      _this.backgroundElement.style.opacity = 1;
      _this.domElement.style.opacity = 1;
      _this.domElement.style.webkitTransform = 'scale(1)';
    });

  };

  CenteredDiv.prototype.hide = function() {

    var _this = this;

    var hide = function() {

      _this.domElement.style.display = 'none';
      _this.backgroundElement.style.display = 'none';

      dom.unbind(_this.domElement, 'webkitTransitionEnd', hide);
      dom.unbind(_this.domElement, 'transitionend', hide);
      dom.unbind(_this.domElement, 'oTransitionEnd', hide);

    };

    dom.bind(this.domElement, 'webkitTransitionEnd', hide);
    dom.bind(this.domElement, 'transitionend', hide);
    dom.bind(this.domElement, 'oTransitionEnd', hide);

    this.backgroundElement.style.opacity = 0;
//    this.domElement.style.top = '48%';
    this.domElement.style.opacity = 0;
    this.domElement.style.webkitTransform = 'scale(1.1)';

  };

  CenteredDiv.prototype.layout = function() {
    this.domElement.style.left = window.innerWidth/2 - dom.getWidth(this.domElement) / 2 + 'px';
    this.domElement.style.top = window.innerHeight/2 - dom.getHeight(this.domElement) / 2 + 'px';
  };
  
  function lockScroll(e) {
    console.log(e);
  }

  return CenteredDiv;

})(dat.dom.dom,
dat.utils.common),
dat.dom.dom,
dat.utils.common);

/***/ }),
/* 44 */
/***/ (function(module, exports) {

/**
 * dat-gui JavaScript Controller Library
 * http://code.google.com/p/dat-gui
 *
 * Copyright 2011 Data Arts Team, Google Creative Lab
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 */

/** @namespace */
var dat = module.exports = dat || {};

/** @namespace */
dat.color = dat.color || {};

/** @namespace */
dat.utils = dat.utils || {};

dat.utils.common = (function () {
  
  var ARR_EACH = Array.prototype.forEach;
  var ARR_SLICE = Array.prototype.slice;

  /**
   * Band-aid methods for things that should be a lot easier in JavaScript.
   * Implementation and structure inspired by underscore.js
   * http://documentcloud.github.com/underscore/
   */

  return { 
    
    BREAK: {},
  
    extend: function(target) {
      
      this.each(ARR_SLICE.call(arguments, 1), function(obj) {
        
        for (var key in obj)
          if (!this.isUndefined(obj[key])) 
            target[key] = obj[key];
        
      }, this);
      
      return target;
      
    },
    
    defaults: function(target) {
      
      this.each(ARR_SLICE.call(arguments, 1), function(obj) {
        
        for (var key in obj)
          if (this.isUndefined(target[key])) 
            target[key] = obj[key];
        
      }, this);
      
      return target;
    
    },
    
    compose: function() {
      var toCall = ARR_SLICE.call(arguments);
            return function() {
              var args = ARR_SLICE.call(arguments);
              for (var i = toCall.length -1; i >= 0; i--) {
                args = [toCall[i].apply(this, args)];
              }
              return args[0];
            }
    },
    
    each: function(obj, itr, scope) {

      
      if (ARR_EACH && obj.forEach === ARR_EACH) { 
        
        obj.forEach(itr, scope);
        
      } else if (obj.length === obj.length + 0) { // Is number but not NaN
        
        for (var key = 0, l = obj.length; key < l; key++)
          if (key in obj && itr.call(scope, obj[key], key) === this.BREAK) 
            return;
            
      } else {

        for (var key in obj) 
          if (itr.call(scope, obj[key], key) === this.BREAK)
            return;
            
      }
            
    },
    
    defer: function(fnc) {
      setTimeout(fnc, 0);
    },
    
    toArray: function(obj) {
      if (obj.toArray) return obj.toArray();
      return ARR_SLICE.call(obj);
    },

    isUndefined: function(obj) {
      return obj === undefined;
    },
    
    isNull: function(obj) {
      return obj === null;
    },
    
    isNaN: function(obj) {
      return obj !== obj;
    },
    
    isArray: Array.isArray || function(obj) {
      return obj.constructor === Array;
    },
    
    isObject: function(obj) {
      return obj === Object(obj);
    },
    
    isNumber: function(obj) {
      return obj === obj+0;
    },
    
    isString: function(obj) {
      return obj === obj+'';
    },
    
    isBoolean: function(obj) {
      return obj === false || obj === true;
    },
    
    isFunction: function(obj) {
      return Object.prototype.toString.call(obj) === '[object Function]';
    }
  
  };
    
})();


dat.color.toString = (function (common) {

  return function(color) {

    if (color.a == 1 || common.isUndefined(color.a)) {

      var s = color.hex.toString(16);
      while (s.length < 6) {
        s = '0' + s;
      }

      return '#' + s;

    } else {

      return 'rgba(' + Math.round(color.r) + ',' + Math.round(color.g) + ',' + Math.round(color.b) + ',' + color.a + ')';

    }

  }

})(dat.utils.common);


dat.Color = dat.color.Color = (function (interpret, math, toString, common) {

  var Color = function() {

    this.__state = interpret.apply(this, arguments);

    if (this.__state === false) {
      throw 'Failed to interpret color arguments';
    }

    this.__state.a = this.__state.a || 1;


  };

  Color.COMPONENTS = ['r','g','b','h','s','v','hex','a'];

  common.extend(Color.prototype, {

    toString: function() {
      return toString(this);
    },

    toOriginal: function() {
      return this.__state.conversion.write(this);
    }

  });

  defineRGBComponent(Color.prototype, 'r', 2);
  defineRGBComponent(Color.prototype, 'g', 1);
  defineRGBComponent(Color.prototype, 'b', 0);

  defineHSVComponent(Color.prototype, 'h');
  defineHSVComponent(Color.prototype, 's');
  defineHSVComponent(Color.prototype, 'v');

  Object.defineProperty(Color.prototype, 'a', {

    get: function() {
      return this.__state.a;
    },

    set: function(v) {
      this.__state.a = v;
    }

  });

  Object.defineProperty(Color.prototype, 'hex', {

    get: function() {

      if (!this.__state.space !== 'HEX') {
        this.__state.hex = math.rgb_to_hex(this.r, this.g, this.b);
      }

      return this.__state.hex;

    },

    set: function(v) {

      this.__state.space = 'HEX';
      this.__state.hex = v;

    }

  });

  function defineRGBComponent(target, component, componentHexIndex) {

    Object.defineProperty(target, component, {

      get: function() {

        if (this.__state.space === 'RGB') {
          return this.__state[component];
        }

        recalculateRGB(this, component, componentHexIndex);

        return this.__state[component];

      },

      set: function(v) {

        if (this.__state.space !== 'RGB') {
          recalculateRGB(this, component, componentHexIndex);
          this.__state.space = 'RGB';
        }

        this.__state[component] = v;

      }

    });

  }

  function defineHSVComponent(target, component) {

    Object.defineProperty(target, component, {

      get: function() {

        if (this.__state.space === 'HSV')
          return this.__state[component];

        recalculateHSV(this);

        return this.__state[component];

      },

      set: function(v) {

        if (this.__state.space !== 'HSV') {
          recalculateHSV(this);
          this.__state.space = 'HSV';
        }

        this.__state[component] = v;

      }

    });

  }

  function recalculateRGB(color, component, componentHexIndex) {

    if (color.__state.space === 'HEX') {

      color.__state[component] = math.component_from_hex(color.__state.hex, componentHexIndex);

    } else if (color.__state.space === 'HSV') {

      common.extend(color.__state, math.hsv_to_rgb(color.__state.h, color.__state.s, color.__state.v));

    } else {

      throw 'Corrupted color state';

    }

  }

  function recalculateHSV(color) {

    var result = math.rgb_to_hsv(color.r, color.g, color.b);

    common.extend(color.__state,
        {
          s: result.s,
          v: result.v
        }
    );

    if (!common.isNaN(result.h)) {
      color.__state.h = result.h;
    } else if (common.isUndefined(color.__state.h)) {
      color.__state.h = 0;
    }

  }

  return Color;

})(dat.color.interpret = (function (toString, common) {

  var result, toReturn;

  var interpret = function() {

    toReturn = false;

    var original = arguments.length > 1 ? common.toArray(arguments) : arguments[0];

    common.each(INTERPRETATIONS, function(family) {

      if (family.litmus(original)) {

        common.each(family.conversions, function(conversion, conversionName) {

          result = conversion.read(original);

          if (toReturn === false && result !== false) {
            toReturn = result;
            result.conversionName = conversionName;
            result.conversion = conversion;
            return common.BREAK;

          }

        });

        return common.BREAK;

      }

    });

    return toReturn;

  };

  var INTERPRETATIONS = [

    // Strings
    {

      litmus: common.isString,

      conversions: {

        THREE_CHAR_HEX: {

          read: function(original) {

            var test = original.match(/^#([A-F0-9])([A-F0-9])([A-F0-9])$/i);
            if (test === null) return false;

            return {
              space: 'HEX',
              hex: parseInt(
                  '0x' +
                      test[1].toString() + test[1].toString() +
                      test[2].toString() + test[2].toString() +
                      test[3].toString() + test[3].toString())
            };

          },

          write: toString

        },

        SIX_CHAR_HEX: {

          read: function(original) {

            var test = original.match(/^#([A-F0-9]{6})$/i);
            if (test === null) return false;

            return {
              space: 'HEX',
              hex: parseInt('0x' + test[1].toString())
            };

          },

          write: toString

        },

        CSS_RGB: {

          read: function(original) {

            var test = original.match(/^rgb\(\s*(.+)\s*,\s*(.+)\s*,\s*(.+)\s*\)/);
            if (test === null) return false;

            return {
              space: 'RGB',
              r: parseFloat(test[1]),
              g: parseFloat(test[2]),
              b: parseFloat(test[3])
            };

          },

          write: toString

        },

        CSS_RGBA: {

          read: function(original) {

            var test = original.match(/^rgba\(\s*(.+)\s*,\s*(.+)\s*,\s*(.+)\s*\,\s*(.+)\s*\)/);
            if (test === null) return false;

            return {
              space: 'RGB',
              r: parseFloat(test[1]),
              g: parseFloat(test[2]),
              b: parseFloat(test[3]),
              a: parseFloat(test[4])
            };

          },

          write: toString

        }

      }

    },

    // Numbers
    {

      litmus: common.isNumber,

      conversions: {

        HEX: {
          read: function(original) {
            return {
              space: 'HEX',
              hex: original,
              conversionName: 'HEX'
            }
          },

          write: function(color) {
            return color.hex;
          }
        }

      }

    },

    // Arrays
    {

      litmus: common.isArray,

      conversions: {

        RGB_ARRAY: {
          read: function(original) {
            if (original.length != 3) return false;
            return {
              space: 'RGB',
              r: original[0],
              g: original[1],
              b: original[2]
            };
          },

          write: function(color) {
            return [color.r, color.g, color.b];
          }

        },

        RGBA_ARRAY: {
          read: function(original) {
            if (original.length != 4) return false;
            return {
              space: 'RGB',
              r: original[0],
              g: original[1],
              b: original[2],
              a: original[3]
            };
          },

          write: function(color) {
            return [color.r, color.g, color.b, color.a];
          }

        }

      }

    },

    // Objects
    {

      litmus: common.isObject,

      conversions: {

        RGBA_OBJ: {
          read: function(original) {
            if (common.isNumber(original.r) &&
                common.isNumber(original.g) &&
                common.isNumber(original.b) &&
                common.isNumber(original.a)) {
              return {
                space: 'RGB',
                r: original.r,
                g: original.g,
                b: original.b,
                a: original.a
              }
            }
            return false;
          },

          write: function(color) {
            return {
              r: color.r,
              g: color.g,
              b: color.b,
              a: color.a
            }
          }
        },

        RGB_OBJ: {
          read: function(original) {
            if (common.isNumber(original.r) &&
                common.isNumber(original.g) &&
                common.isNumber(original.b)) {
              return {
                space: 'RGB',
                r: original.r,
                g: original.g,
                b: original.b
              }
            }
            return false;
          },

          write: function(color) {
            return {
              r: color.r,
              g: color.g,
              b: color.b
            }
          }
        },

        HSVA_OBJ: {
          read: function(original) {
            if (common.isNumber(original.h) &&
                common.isNumber(original.s) &&
                common.isNumber(original.v) &&
                common.isNumber(original.a)) {
              return {
                space: 'HSV',
                h: original.h,
                s: original.s,
                v: original.v,
                a: original.a
              }
            }
            return false;
          },

          write: function(color) {
            return {
              h: color.h,
              s: color.s,
              v: color.v,
              a: color.a
            }
          }
        },

        HSV_OBJ: {
          read: function(original) {
            if (common.isNumber(original.h) &&
                common.isNumber(original.s) &&
                common.isNumber(original.v)) {
              return {
                space: 'HSV',
                h: original.h,
                s: original.s,
                v: original.v
              }
            }
            return false;
          },

          write: function(color) {
            return {
              h: color.h,
              s: color.s,
              v: color.v
            }
          }

        }

      }

    }


  ];

  return interpret;


})(dat.color.toString,
dat.utils.common),
dat.color.math = (function () {

  var tmpComponent;

  return {

    hsv_to_rgb: function(h, s, v) {

      var hi = Math.floor(h / 60) % 6;

      var f = h / 60 - Math.floor(h / 60);
      var p = v * (1.0 - s);
      var q = v * (1.0 - (f * s));
      var t = v * (1.0 - ((1.0 - f) * s));
      var c = [
        [v, t, p],
        [q, v, p],
        [p, v, t],
        [p, q, v],
        [t, p, v],
        [v, p, q]
      ][hi];

      return {
        r: c[0] * 255,
        g: c[1] * 255,
        b: c[2] * 255
      };

    },

    rgb_to_hsv: function(r, g, b) {

      var min = Math.min(r, g, b),
          max = Math.max(r, g, b),
          delta = max - min,
          h, s;

      if (max != 0) {
        s = delta / max;
      } else {
        return {
          h: NaN,
          s: 0,
          v: 0
        };
      }

      if (r == max) {
        h = (g - b) / delta;
      } else if (g == max) {
        h = 2 + (b - r) / delta;
      } else {
        h = 4 + (r - g) / delta;
      }
      h /= 6;
      if (h < 0) {
        h += 1;
      }

      return {
        h: h * 360,
        s: s,
        v: max / 255
      };
    },

    rgb_to_hex: function(r, g, b) {
      var hex = this.hex_with_component(0, 2, r);
      hex = this.hex_with_component(hex, 1, g);
      hex = this.hex_with_component(hex, 0, b);
      return hex;
    },

    component_from_hex: function(hex, componentIndex) {
      return (hex >> (componentIndex * 8)) & 0xFF;
    },

    hex_with_component: function(hex, componentIndex, value) {
      return value << (tmpComponent = componentIndex * 8) | (hex & ~ (0xFF << tmpComponent));
    }

  }

})(),
dat.color.toString,
dat.utils.common);

/***/ }),
/* 45 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_gl_matrix__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__rendering_gl_Drawable__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__globals__ = __webpack_require__(4);



class Square extends __WEBPACK_IMPORTED_MODULE_1__rendering_gl_Drawable__["a" /* default */] {
    constructor(center) {
        super(); // Call the constructor of the super class. This is required.
        this.center = __WEBPACK_IMPORTED_MODULE_0_gl_matrix__["d" /* vec4 */].fromValues(center[0], center[1], center[2], 1);
    }
    create() {
        this.indices = new Uint32Array([0, 1, 2,
            0, 2, 3]);
        this.normals = new Float32Array([0, 0, 1, 0,
            0, 0, 1, 0,
            0, 0, 1, 0,
            0, 0, 1, 0]);
        this.positions = new Float32Array([-1, -1, 0.999, 1,
            1, -1, 0.999, 1,
            1, 1, 0.999, 1,
            -1, 1, 0.999, 1]);
        this.generateIdx();
        this.generatePos();
        this.generateNor();
        this.count = this.indices.length;
        __WEBPACK_IMPORTED_MODULE_2__globals__["a" /* gl */].bindBuffer(__WEBPACK_IMPORTED_MODULE_2__globals__["a" /* gl */].ELEMENT_ARRAY_BUFFER, this.bufIdx);
        __WEBPACK_IMPORTED_MODULE_2__globals__["a" /* gl */].bufferData(__WEBPACK_IMPORTED_MODULE_2__globals__["a" /* gl */].ELEMENT_ARRAY_BUFFER, this.indices, __WEBPACK_IMPORTED_MODULE_2__globals__["a" /* gl */].STATIC_DRAW);
        __WEBPACK_IMPORTED_MODULE_2__globals__["a" /* gl */].bindBuffer(__WEBPACK_IMPORTED_MODULE_2__globals__["a" /* gl */].ARRAY_BUFFER, this.bufNor);
        __WEBPACK_IMPORTED_MODULE_2__globals__["a" /* gl */].bufferData(__WEBPACK_IMPORTED_MODULE_2__globals__["a" /* gl */].ARRAY_BUFFER, this.normals, __WEBPACK_IMPORTED_MODULE_2__globals__["a" /* gl */].STATIC_DRAW);
        __WEBPACK_IMPORTED_MODULE_2__globals__["a" /* gl */].bindBuffer(__WEBPACK_IMPORTED_MODULE_2__globals__["a" /* gl */].ARRAY_BUFFER, this.bufPos);
        __WEBPACK_IMPORTED_MODULE_2__globals__["a" /* gl */].bufferData(__WEBPACK_IMPORTED_MODULE_2__globals__["a" /* gl */].ARRAY_BUFFER, this.positions, __WEBPACK_IMPORTED_MODULE_2__globals__["a" /* gl */].STATIC_DRAW);
    }
}
;
/* harmony default export */ __webpack_exports__["a"] = (Square);


/***/ }),
/* 46 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__globals__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__rendering_gl_Drawable__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_gl_matrix__ = __webpack_require__(0);



class Cube extends __WEBPACK_IMPORTED_MODULE_1__rendering_gl_Drawable__["a" /* default */] {
    ;
    constructor(options) {
        super(); // Call the constructor of the super class. This is required.
        this.scale = options.scale;
        this.gridSize = options.gridSize;
    }
    create() {
        this.positions = new Float32Array([
            //left
            0.0, 0.0, 0.0, 1,
            0.0, 0.0, 1.0, 1,
            0.0, 1.0, 0.0, 1,
            0.0, 1.0, 1.0, 1,
            //right
            1.0, 0.0, 0.0, 1,
            1.0, 0.0, 1.0, 1,
            1.0, 1.0, 0.0, 1,
            1.0, 1.0, 1.0, 1,
            //top
            0.0, 1.0, 0.0, 1,
            0.0, 1.0, 1.0, 1,
            1.0, 1.0, 0.0, 1,
            1.0, 1.0, 1.0, 1,
            //bottom
            0.0, 0.0, 0.0, 1,
            0.0, 0.0, 1.0, 1,
            1.0, 0.0, 0.0, 1,
            1.0, 0.0, 1.0, 1,
            //back
            0.0, 0.0, 0.0, 1,
            0.0, 1.0, 0.0, 1,
            1.0, 0.0, 0.0, 1,
            1.0, 1.0, 0.0, 1,
            //front
            0.0, 0.0, 1.0, 1,
            0.0, 1.0, 1.0, 1,
            1.0, 0.0, 1.0, 1,
            1.0, 1.0, 1.0, 1
        ]);
        this.indices = new Uint32Array([
            //left side
            0, 1, 2,
            1, 2, 3,
            //right side
            4, 5, 6,
            5, 6, 7,
            //top
            8, 9, 10,
            9, 10, 11,
            //bottom
            12, 13, 14,
            13, 14, 15,
            //back
            16, 17, 18,
            17, 18, 19,
            //front
            20, 21, 22,
            21, 22, 23
        ]);
        this.normals = new Float32Array([
            //left
            -1, 0, 0, 0,
            -1, 0, 0, 0,
            -1, 0, 0, 0,
            -1, 0, 0, 0,
            //right
            1, 0, 0, 0,
            1, 0, 0, 0,
            1, 0, 0, 0,
            1, 0, 0, 0,
            //top
            0, 1, 0, 0,
            0, 1, 0, 0,
            0, 1, 0, 0,
            0, 1, 0, 0,
            //bottom
            0, -1, 0, 0,
            0, -1, 0, 0,
            0, -1, 0, 0,
            0, -1, 0, 0,
            //back
            0, 0, -1, 0,
            0, 0, -1, 0,
            0, 0, -1, 0,
            0, 0, -1, 0,
            //front
            0, 0, 1, 0,
            0, 0, 1, 0,
            0, 0, 1, 0,
            0, 0, 1, 0
        ]);
        // this.indices = new Uint32Array([0, 1, 2,
        //   1, 3, 2]);
        // this.positions = new Float32Array([
        //   0, 0.6, 0.0,, 1,
        //   0, 0.6, 0.5,  1,
        //   1, 0.6, 0.0,, 1,
        //   1, 0.6, 0.5,  1]);
        this.generateIdx();
        this.generatePos();
        this.generateNor();
        this.count = this.indices.length;
        __WEBPACK_IMPORTED_MODULE_0__globals__["a" /* gl */].bindBuffer(__WEBPACK_IMPORTED_MODULE_0__globals__["a" /* gl */].ELEMENT_ARRAY_BUFFER, this.bufIdx);
        __WEBPACK_IMPORTED_MODULE_0__globals__["a" /* gl */].bufferData(__WEBPACK_IMPORTED_MODULE_0__globals__["a" /* gl */].ELEMENT_ARRAY_BUFFER, this.indices, __WEBPACK_IMPORTED_MODULE_0__globals__["a" /* gl */].STATIC_DRAW);
        __WEBPACK_IMPORTED_MODULE_0__globals__["a" /* gl */].bindBuffer(__WEBPACK_IMPORTED_MODULE_0__globals__["a" /* gl */].ARRAY_BUFFER, this.bufPos);
        __WEBPACK_IMPORTED_MODULE_0__globals__["a" /* gl */].bufferData(__WEBPACK_IMPORTED_MODULE_0__globals__["a" /* gl */].ARRAY_BUFFER, this.positions, __WEBPACK_IMPORTED_MODULE_0__globals__["a" /* gl */].STATIC_DRAW);
        __WEBPACK_IMPORTED_MODULE_0__globals__["a" /* gl */].bindBuffer(__WEBPACK_IMPORTED_MODULE_0__globals__["a" /* gl */].ARRAY_BUFFER, this.bufNor);
        __WEBPACK_IMPORTED_MODULE_0__globals__["a" /* gl */].bufferData(__WEBPACK_IMPORTED_MODULE_0__globals__["a" /* gl */].ARRAY_BUFFER, this.normals, __WEBPACK_IMPORTED_MODULE_0__globals__["a" /* gl */].STATIC_DRAW);
    }
    gridPosToScreenPos(gridPos) {
        let screenPos = __WEBPACK_IMPORTED_MODULE_2_gl_matrix__["c" /* vec3 */].create();
        screenPos[0] = gridPos[0] * this.scale[0] / this.gridSize[0] - this.scale[0] * 0.5;
        screenPos[1] = gridPos[1] * this.scale[0] / this.gridSize[0];
        screenPos[2] = gridPos[2] * this.scale[1] / this.gridSize[1] - this.scale[1] * 0.5;
        return screenPos;
    }
    setInstanceVBOs(city) {
        this.generateTranslate();
        this.generateCol();
        this.generateBlockInfo();
        this.generateRotate();
        this.generateScale();
        this.generateAdjustment();
        let offsets = [];
        let colors = []; //set to footprint
        let rotations = [];
        let blockInfo = [];
        let scales = [];
        let adjustments = [];
        this.numInstances = 0;
        let cityBlocks = city.getBlocks();
        for (let i = 0; i < cityBlocks.length; i++) {
            let block = cityBlocks[i];
            this.numInstances++;
            let startPosScreen = this.gridPosToScreenPos(block.pos);
            offsets.push(startPosScreen[0], startPosScreen[1], startPosScreen[2], 0);
            colors.push(block.footprint[0] * this.scale[0] / this.gridSize[0], block.footprint[1] * this.scale[0] / this.gridSize[0], block.footprint[2] * this.scale[1] / this.gridSize[1], block.scaleFromCenter ? 1 : 0);
            blockInfo.push(block.blockType, block.textureType, block.adjustScale2, block.adjustScale1);
            rotations.push(block.rotation[0], block.rotation[1], block.rotation[2], 0);
            scales.push(block.footprint[0] * this.scale[0] / this.gridSize[0], block.footprint[1] * this.scale[0] / this.gridSize[0], block.footprint[2] * this.scale[1] / this.gridSize[1], block.scaleFromCenter ? 1 : 0);
            adjustments.push(block.adjustScale1, block.adjustScale2, block.adjustScale3, block.adjustScale4);
        }
        this.offsets = new Float32Array(offsets);
        this.colors = new Float32Array(colors);
        this.blockInfo = new Float32Array(blockInfo);
        this.rotations = new Float32Array(rotations);
        this.scales = new Float32Array(scales);
        this.adjustments = new Float32Array(adjustments);
        __WEBPACK_IMPORTED_MODULE_0__globals__["a" /* gl */].bindBuffer(__WEBPACK_IMPORTED_MODULE_0__globals__["a" /* gl */].ARRAY_BUFFER, this.bufTranslate);
        __WEBPACK_IMPORTED_MODULE_0__globals__["a" /* gl */].bufferData(__WEBPACK_IMPORTED_MODULE_0__globals__["a" /* gl */].ARRAY_BUFFER, this.offsets, __WEBPACK_IMPORTED_MODULE_0__globals__["a" /* gl */].STATIC_DRAW);
        __WEBPACK_IMPORTED_MODULE_0__globals__["a" /* gl */].bindBuffer(__WEBPACK_IMPORTED_MODULE_0__globals__["a" /* gl */].ARRAY_BUFFER, this.bufCol);
        __WEBPACK_IMPORTED_MODULE_0__globals__["a" /* gl */].bufferData(__WEBPACK_IMPORTED_MODULE_0__globals__["a" /* gl */].ARRAY_BUFFER, this.colors, __WEBPACK_IMPORTED_MODULE_0__globals__["a" /* gl */].STATIC_DRAW);
        __WEBPACK_IMPORTED_MODULE_0__globals__["a" /* gl */].bindBuffer(__WEBPACK_IMPORTED_MODULE_0__globals__["a" /* gl */].ARRAY_BUFFER, this.bufBlockInfo);
        __WEBPACK_IMPORTED_MODULE_0__globals__["a" /* gl */].bufferData(__WEBPACK_IMPORTED_MODULE_0__globals__["a" /* gl */].ARRAY_BUFFER, this.blockInfo, __WEBPACK_IMPORTED_MODULE_0__globals__["a" /* gl */].STATIC_DRAW);
        __WEBPACK_IMPORTED_MODULE_0__globals__["a" /* gl */].bindBuffer(__WEBPACK_IMPORTED_MODULE_0__globals__["a" /* gl */].ARRAY_BUFFER, this.bufRotate);
        __WEBPACK_IMPORTED_MODULE_0__globals__["a" /* gl */].bufferData(__WEBPACK_IMPORTED_MODULE_0__globals__["a" /* gl */].ARRAY_BUFFER, this.rotations, __WEBPACK_IMPORTED_MODULE_0__globals__["a" /* gl */].STATIC_DRAW);
        __WEBPACK_IMPORTED_MODULE_0__globals__["a" /* gl */].bindBuffer(__WEBPACK_IMPORTED_MODULE_0__globals__["a" /* gl */].ARRAY_BUFFER, this.bufScale);
        __WEBPACK_IMPORTED_MODULE_0__globals__["a" /* gl */].bufferData(__WEBPACK_IMPORTED_MODULE_0__globals__["a" /* gl */].ARRAY_BUFFER, this.scales, __WEBPACK_IMPORTED_MODULE_0__globals__["a" /* gl */].STATIC_DRAW);
        __WEBPACK_IMPORTED_MODULE_0__globals__["a" /* gl */].bindBuffer(__WEBPACK_IMPORTED_MODULE_0__globals__["a" /* gl */].ARRAY_BUFFER, this.bufAdjustment);
        __WEBPACK_IMPORTED_MODULE_0__globals__["a" /* gl */].bufferData(__WEBPACK_IMPORTED_MODULE_0__globals__["a" /* gl */].ARRAY_BUFFER, this.adjustments, __WEBPACK_IMPORTED_MODULE_0__globals__["a" /* gl */].STATIC_DRAW);
    }
}
;
/* harmony default export */ __webpack_exports__["a"] = (Cube);


/***/ }),
/* 47 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_gl_matrix__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__rendering_gl_Drawable__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__globals__ = __webpack_require__(4);



class TerrainPlane extends __WEBPACK_IMPORTED_MODULE_1__rendering_gl_Drawable__["a" /* default */] {
    //terrain: Terrain;
    constructor() {
        super(); // Call the constructor of the super class. This is required.
        this.seed = __WEBPACK_IMPORTED_MODULE_0_gl_matrix__["b" /* vec2 */].fromValues(342.3423, 984.843);
        this.scale = __WEBPACK_IMPORTED_MODULE_0_gl_matrix__["b" /* vec2 */].fromValues(100, 100);
        this.gridSize = __WEBPACK_IMPORTED_MODULE_0_gl_matrix__["b" /* vec2 */].fromValues(100, 100);
        this.subdivs = 20;
        //this.terrain = terrain;
    }
    create() {
        this.initGrid();
        this.generateIdx();
        this.generatePos();
        this.generateNor();
        this.generateInfo();
        this.generateCol();
        this.count = this.indices.length;
        __WEBPACK_IMPORTED_MODULE_2__globals__["a" /* gl */].bindBuffer(__WEBPACK_IMPORTED_MODULE_2__globals__["a" /* gl */].ELEMENT_ARRAY_BUFFER, this.bufIdx);
        __WEBPACK_IMPORTED_MODULE_2__globals__["a" /* gl */].bufferData(__WEBPACK_IMPORTED_MODULE_2__globals__["a" /* gl */].ELEMENT_ARRAY_BUFFER, this.indices, __WEBPACK_IMPORTED_MODULE_2__globals__["a" /* gl */].STATIC_DRAW);
        __WEBPACK_IMPORTED_MODULE_2__globals__["a" /* gl */].bindBuffer(__WEBPACK_IMPORTED_MODULE_2__globals__["a" /* gl */].ARRAY_BUFFER, this.bufNor);
        __WEBPACK_IMPORTED_MODULE_2__globals__["a" /* gl */].bufferData(__WEBPACK_IMPORTED_MODULE_2__globals__["a" /* gl */].ARRAY_BUFFER, this.normals, __WEBPACK_IMPORTED_MODULE_2__globals__["a" /* gl */].STATIC_DRAW);
        __WEBPACK_IMPORTED_MODULE_2__globals__["a" /* gl */].bindBuffer(__WEBPACK_IMPORTED_MODULE_2__globals__["a" /* gl */].ARRAY_BUFFER, this.bufInfo);
        __WEBPACK_IMPORTED_MODULE_2__globals__["a" /* gl */].bufferData(__WEBPACK_IMPORTED_MODULE_2__globals__["a" /* gl */].ARRAY_BUFFER, this.info, __WEBPACK_IMPORTED_MODULE_2__globals__["a" /* gl */].STATIC_DRAW);
        __WEBPACK_IMPORTED_MODULE_2__globals__["a" /* gl */].bindBuffer(__WEBPACK_IMPORTED_MODULE_2__globals__["a" /* gl */].ARRAY_BUFFER, this.bufPos);
        __WEBPACK_IMPORTED_MODULE_2__globals__["a" /* gl */].bufferData(__WEBPACK_IMPORTED_MODULE_2__globals__["a" /* gl */].ARRAY_BUFFER, this.positions, __WEBPACK_IMPORTED_MODULE_2__globals__["a" /* gl */].STATIC_DRAW);
        __WEBPACK_IMPORTED_MODULE_2__globals__["a" /* gl */].bindBuffer(__WEBPACK_IMPORTED_MODULE_2__globals__["a" /* gl */].ARRAY_BUFFER, this.bufCol);
        __WEBPACK_IMPORTED_MODULE_2__globals__["a" /* gl */].bufferData(__WEBPACK_IMPORTED_MODULE_2__globals__["a" /* gl */].ARRAY_BUFFER, this.colors, __WEBPACK_IMPORTED_MODULE_2__globals__["a" /* gl */].STATIC_DRAW);
    }
    initGrid() {
        let numPoints = (this.gridSize[1] + 1) * (this.gridSize[1] + 1);
        let numGridSquares = this.gridSize[0] * this.gridSize[1];
        let normalizeX = 1.0 / this.gridSize[0];
        let normalizeY = 1.0 / this.gridSize[1];
        this.positions = new Float32Array(numPoints * 4);
        this.normals = new Float32Array(numPoints * 4);
        this.info = new Float32Array(numPoints * 4);
        this.indices = new Uint32Array(numGridSquares * 6); // NxN squares, each square is two triangles, each triangle is three indices
        this.colors = new Float32Array(numPoints * 4);
        let posIdx = 0;
        for (let x = 0; x <= this.gridSize[0]; ++x) {
            for (let z = 0; z <= this.gridSize[1]; ++z) {
                // Make a strip of vertices along Z with the current X coord
                this.normals[posIdx] = 0;
                this.info[posIdx] = 0; //this.terrain.getBuildingSuitability(vec2.fromValues(x,z)) ? 1 : 0;
                this.colors[posIdx] = 0;
                this.positions[posIdx++] = x * normalizeX * this.scale[0] - this.scale[0] * 0.5;
                this.normals[posIdx] = 1;
                this.info[posIdx] = 0; //this.terrain.gridParts[x % this.gridSize[0]][z % this.gridSize[1]].hasBuilding ? 1: 0;
                this.colors[posIdx] = 0;
                this.positions[posIdx++] = 0; //this.terrain.elevations[x][z];
                this.normals[posIdx] = 0;
                this.info[posIdx] = 0;
                this.positions[posIdx++] = z * normalizeY * this.scale[1] - this.scale[1] * 0.5;
                this.colors[posIdx] = 0;
                this.normals[posIdx] = 0; //this.terrain.getPopulationDensity(vec2.fromValues(x, z));
                this.info[posIdx] = 0;
                this.colors[posIdx] = 0;
                this.positions[posIdx++] = 1;
            }
        }
        let indexIdx = 0;
        // Make the squares out of indices
        for (let i = 0; i < this.gridSize[0]; ++i) { // X iter
            for (let j = 0; j < this.gridSize[1]; ++j) { // Z iter
                this.indices[indexIdx++] = j + i * (this.gridSize[1] + 1);
                this.indices[indexIdx++] = j + 1 + i * (this.gridSize[1] + 1);
                this.indices[indexIdx++] = j + (i + 1) * (this.gridSize[1] + 1);
                this.indices[indexIdx++] = j + 1 + i * (this.gridSize[1] + 1);
                this.indices[indexIdx++] = j + (i + 1) * (this.gridSize[1] + 1);
                this.indices[indexIdx++] = j + 1 + (i + 1) * (this.gridSize[1] + 1);
            }
        }
    }
    setSeedFromNum(seed) {
        this.seed = __WEBPACK_IMPORTED_MODULE_0_gl_matrix__["b" /* vec2 */].fromValues(seed, seed + 8.33398);
    }
    gridPosToScreenPos(pos) {
        let screenPos = __WEBPACK_IMPORTED_MODULE_0_gl_matrix__["c" /* vec3 */].create();
        let normalizeX = 1 / this.gridSize[0];
        screenPos[0] = pos[0];
        return screenPos;
    }
}
;
/* harmony default export */ __webpack_exports__["a"] = (TerrainPlane);


/***/ }),
/* 48 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_gl_matrix__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__globals__ = __webpack_require__(4);


// In this file, `gl` is accessible because it is imported above
class OpenGLRenderer {
    constructor(canvas) {
        this.canvas = canvas;
    }
    setClearColor(r, g, b, a) {
        __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].clearColor(r, g, b, a);
    }
    setClearColor3(color) {
        __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].clearColor(color[0], color[1], color[2], 1);
    }
    setSize(width, height) {
        this.canvas.width = width;
        this.canvas.height = height;
    }
    clear() {
        __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].clear(__WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].COLOR_BUFFER_BIT | __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].DEPTH_BUFFER_BIT);
    }
    render(camera, prog, drawables) {
        let model = __WEBPACK_IMPORTED_MODULE_0_gl_matrix__["a" /* mat4 */].create();
        let viewProj = __WEBPACK_IMPORTED_MODULE_0_gl_matrix__["a" /* mat4 */].create();
        let color = __WEBPACK_IMPORTED_MODULE_0_gl_matrix__["d" /* vec4 */].fromValues(1, 0, 0, 1);
        __WEBPACK_IMPORTED_MODULE_0_gl_matrix__["a" /* mat4 */].identity(model);
        __WEBPACK_IMPORTED_MODULE_0_gl_matrix__["a" /* mat4 */].multiply(viewProj, camera.projectionMatrix, camera.viewMatrix);
        prog.setModelMatrix(model);
        prog.setViewProjMatrix(viewProj);
        for (let drawable of drawables) {
            prog.draw(drawable);
        }
    }
}
;
/* harmony default export */ __webpack_exports__["a"] = (OpenGLRenderer);


/***/ }),
/* 49 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_gl_matrix__ = __webpack_require__(0);
var CameraControls = __webpack_require__(50);

class Camera {
    constructor(position, target) {
        this.projectionMatrix = __WEBPACK_IMPORTED_MODULE_0_gl_matrix__["a" /* mat4 */].create();
        this.viewMatrix = __WEBPACK_IMPORTED_MODULE_0_gl_matrix__["a" /* mat4 */].create();
        this.fovy = 45;
        this.aspectRatio = 1;
        this.near = 0.1;
        this.far = 1000;
        this.position = __WEBPACK_IMPORTED_MODULE_0_gl_matrix__["c" /* vec3 */].create();
        this.direction = __WEBPACK_IMPORTED_MODULE_0_gl_matrix__["c" /* vec3 */].create();
        this.target = __WEBPACK_IMPORTED_MODULE_0_gl_matrix__["c" /* vec3 */].create();
        this.up = __WEBPACK_IMPORTED_MODULE_0_gl_matrix__["c" /* vec3 */].create();
        this.target = target;
        this.controls = CameraControls(document.getElementById('canvas'), {
            eye: position,
            center: target,
            flipX: false,
            flipY: false
        });
        __WEBPACK_IMPORTED_MODULE_0_gl_matrix__["c" /* vec3 */].add(this.target, this.position, this.direction);
        __WEBPACK_IMPORTED_MODULE_0_gl_matrix__["a" /* mat4 */].lookAt(this.viewMatrix, this.controls.eye, this.controls.center, this.controls.up);
    }
    setAspectRatio(aspectRatio) {
        this.aspectRatio = aspectRatio;
    }
    updateProjectionMatrix() {
        __WEBPACK_IMPORTED_MODULE_0_gl_matrix__["a" /* mat4 */].perspective(this.projectionMatrix, this.fovy, this.aspectRatio, this.near, this.far);
    }
    pan(dir) {
        if (dir.length > 0) {
            this.controls.pan(dir[0], dir[1], dir[2]);
            __WEBPACK_IMPORTED_MODULE_0_gl_matrix__["a" /* mat4 */].lookAt(this.viewMatrix, this.controls.eye, this.controls.center, this.controls.up);
        }
    }
    update() {
        this.controls.tick();
        // vec3.add(this.target, this.position, this.direction);
        // console.log('center');
        // console.log(this.controls.center);
        // console.log('eye');
        // console.log(this.controls.eye);
        // console.log('up');
        // console.log(this.controls.up);
        __WEBPACK_IMPORTED_MODULE_0_gl_matrix__["a" /* mat4 */].lookAt(this.viewMatrix, this.controls.eye, this.controls.center, this.controls.up);
    }
}
;
/* harmony default export */ __webpack_exports__["a"] = (Camera);


/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = createCamera

var now         = __webpack_require__(51)
var createView  = __webpack_require__(53)
var mouseChange = __webpack_require__(76)
var mouseWheel  = __webpack_require__(78)
var mouseOffset = __webpack_require__(81)
var hasPassive  = __webpack_require__(82)

function createCamera(element, options) {
  element = element || document.body
  options = options || {}

  var limits  = [ 0.01, Infinity ]
  if('distanceLimits' in options) {
    limits[0] = options.distanceLimits[0]
    limits[1] = options.distanceLimits[1]
  }
  if('zoomMin' in options) {
    limits[0] = options.zoomMin
  }
  if('zoomMax' in options) {
    limits[1] = options.zoomMax
  }

  var view = createView({
    center: options.center || [0,0,0],
    up:     options.up     || [0,1,0],
    eye:    options.eye    || [0,0,10],
    mode:   options.mode   || 'orbit',
    distanceLimits: limits
  })

  var pmatrix = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
  var distance = 0.0
  var width   = element.clientWidth
  var height  = element.clientHeight

  var camera = {
    view:               view,
    element:            element,
    delay:              options.delay          || 16,
    rotateSpeed:        options.rotateSpeed    || 1,
    zoomSpeed:          options.zoomSpeed      || 1,
    translateSpeed:     options.translateSpeed || 1,
    flipX:              !!options.flipX,
    flipY:              !!options.flipY,
    modes:              view.modes,
    tick: function() {
      var t = now()
      var delay = this.delay
      view.idle(t-delay)
      view.flush(t-(100+delay*2))
      var ctime = t - 2 * delay
      view.recalcMatrix(ctime)
      var allEqual = true
      var matrix = view.computedMatrix
      for(var i=0; i<16; ++i) {
        allEqual = allEqual && (pmatrix[i] === matrix[i])
        pmatrix[i] = matrix[i]
      }
      var sizeChanged =
          element.clientWidth === width &&
          element.clientHeight === height
      width  = element.clientWidth
      height = element.clientHeight
      if(allEqual) {
        return !sizeChanged
      }
      distance = Math.exp(view.computedRadius[0])
      return true
    },
    lookAt: function(center, eye, up) {
      view.lookAt(view.lastT(), center, eye, up)
    },
    rotate: function(pitch, yaw, roll) {
      view.rotate(view.lastT(), pitch, yaw, roll)
    },
    pan: function(dx, dy, dz) {
      view.pan(view.lastT(), dx, dy, dz)
    },
    translate: function(dx, dy, dz) {
      view.translate(view.lastT(), dx, dy, dz)
    }
  }

  Object.defineProperties(camera, {
    matrix: {
      get: function() {
        return view.computedMatrix
      },
      set: function(mat) {
        view.setMatrix(view.lastT(), mat)
        return view.computedMatrix
      },
      enumerable: true
    },
    mode: {
      get: function() {
        return view.getMode()
      },
      set: function(mode) {
        view.setMode(mode)
        return view.getMode()
      },
      enumerable: true
    },
    center: {
      get: function() {
        return view.computedCenter
      },
      set: function(ncenter) {
        view.lookAt(view.lastT(), ncenter)
        return view.computedCenter
      },
      enumerable: true
    },
    eye: {
      get: function() {
        return view.computedEye
      },
      set: function(neye) {
        view.lookAt(view.lastT(), null, neye)
        return view.computedEye
      },
      enumerable: true
    },
    up: {
      get: function() {
        return view.computedUp
      },
      set: function(nup) {
        view.lookAt(view.lastT(), null, null, nup)
        return view.computedUp
      },
      enumerable: true
    },
    distance: {
      get: function() {
        return distance
      },
      set: function(d) {
        view.setDistance(view.lastT(), d)
        return d
      },
      enumerable: true
    },
    distanceLimits: {
      get: function() {
        return view.getDistanceLimits(limits)
      },
      set: function(v) {
        view.setDistanceLimits(v)
        return v
      },
      enumerable: true
    }
  })

  element.addEventListener('contextmenu', function(ev) {
    ev.preventDefault()
    return false
  })

  var lastX = 0, lastY = 0, lastMods = {shift: false, control: false, alt: false, meta: false}
  mouseChange(element, handleInteraction)

  //enable simple touch interactions
  element.addEventListener('touchstart', function (ev) {
    var xy = mouseOffset(ev.changedTouches[0], element)
    handleInteraction(0, xy[0], xy[1], lastMods)
    handleInteraction(1, xy[0], xy[1], lastMods)

    ev.preventDefault()
  }, hasPassive ? {passive: false} : false)

  element.addEventListener('touchmove', function (ev) {
    var xy = mouseOffset(ev.changedTouches[0], element)
    handleInteraction(1, xy[0], xy[1], lastMods)

    ev.preventDefault()
  }, hasPassive ? {passive: false} : false)

  element.addEventListener('touchend', function (ev) {
    var xy = mouseOffset(ev.changedTouches[0], element)
    handleInteraction(0, lastX, lastY, lastMods)

    ev.preventDefault()
  }, hasPassive ? {passive: false} : false)

  function handleInteraction (buttons, x, y, mods) {
    var scale = 1.0 / element.clientHeight
    var dx    = scale * (x - lastX)
    var dy    = scale * (y - lastY)

    var flipX = camera.flipX ? 1 : -1
    var flipY = camera.flipY ? 1 : -1

    var drot  = Math.PI * camera.rotateSpeed

    var t = now()

    if(buttons & 1) {
      if(mods.shift) {
        view.rotate(t, 0, 0, -dx * drot)
      } else {
        view.rotate(t, flipX * drot * dx, -flipY * drot * dy, 0)
      }
    } else if(buttons & 2) {
      view.pan(t, -camera.translateSpeed * dx * distance, camera.translateSpeed * dy * distance, 0)
    } else if(buttons & 4) {
      var kzoom = camera.zoomSpeed * dy / window.innerHeight * (t - view.lastT()) * 50.0
      view.pan(t, 0, 0, distance * (Math.exp(kzoom) - 1))
    }

    lastX = x
    lastY = y
    lastMods = mods
  }

  mouseWheel(element, function(dx, dy, dz) {
    var flipX = camera.flipX ? 1 : -1
    var flipY = camera.flipY ? 1 : -1
    var t = now()
    if(Math.abs(dx) > Math.abs(dy)) {
      view.rotate(t, 0, 0, -dx * flipX * Math.PI * camera.rotateSpeed / window.innerWidth)
    } else {
      var kzoom = camera.zoomSpeed * flipY * dy / window.innerHeight * (t - view.lastT()) / 100.0
      view.pan(t, 0, 0, distance * (Math.exp(kzoom) - 1))
    }
  }, true)

  return camera
}


/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {module.exports =
  global.performance &&
  global.performance.now ? function now() {
    return performance.now()
  } : Date.now || function now() {
    return +new Date
  }

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(52)))

/***/ }),
/* 52 */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1,eval)("this");
} catch(e) {
	// This works if the window reference is available
	if(typeof window === "object")
		g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = createViewController

var createTurntable = __webpack_require__(54)
var createOrbit     = __webpack_require__(57)
var createMatrix    = __webpack_require__(60)

function ViewController(controllers, mode) {
  this._controllerNames = Object.keys(controllers)
  this._controllerList = this._controllerNames.map(function(n) {
    return controllers[n]
  })
  this._mode   = mode
  this._active = controllers[mode]
  if(!this._active) {
    this._mode   = 'turntable'
    this._active = controllers.turntable
  }
  this.modes = this._controllerNames
  this.computedMatrix = this._active.computedMatrix
  this.computedEye    = this._active.computedEye
  this.computedUp     = this._active.computedUp
  this.computedCenter = this._active.computedCenter
  this.computedRadius = this._active.computedRadius
}

var proto = ViewController.prototype

var COMMON_METHODS = [
  ['flush', 1],
  ['idle', 1],
  ['lookAt', 4],
  ['rotate', 4],
  ['pan', 4],
  ['translate', 4],
  ['setMatrix', 2],
  ['setDistanceLimits', 2],
  ['setDistance', 2]
]

COMMON_METHODS.forEach(function(method) {
  var name = method[0]
  var argNames = []
  for(var i=0; i<method[1]; ++i) {
    argNames.push('a'+i)
  }
  var code = 'var cc=this._controllerList;for(var i=0;i<cc.length;++i){cc[i].'+method[0]+'('+argNames.join()+')}'
  proto[name] = Function.apply(null, argNames.concat(code))
})

proto.recalcMatrix = function(t) {
  this._active.recalcMatrix(t)
}

proto.getDistance = function(t) {
  return this._active.getDistance(t)
}
proto.getDistanceLimits = function(out) {
  return this._active.getDistanceLimits(out)
}

proto.lastT = function() {
  return this._active.lastT()
}

proto.setMode = function(mode) {
  if(mode === this._mode) {
    return
  }
  var idx = this._controllerNames.indexOf(mode)
  if(idx < 0) {
    return
  }
  var prev  = this._active
  var next  = this._controllerList[idx]
  var lastT = Math.max(prev.lastT(), next.lastT())

  prev.recalcMatrix(lastT)
  next.setMatrix(lastT, prev.computedMatrix)
  
  this._active = next
  this._mode   = mode

  //Update matrix properties
  this.computedMatrix = this._active.computedMatrix
  this.computedEye    = this._active.computedEye
  this.computedUp     = this._active.computedUp
  this.computedCenter = this._active.computedCenter
  this.computedRadius = this._active.computedRadius
}

proto.getMode = function() {
  return this._mode
}

function createViewController(options) {
  options = options || {}

  var eye       = options.eye    || [0,0,1]
  var center    = options.center || [0,0,0]
  var up        = options.up     || [0,1,0]
  var limits    = options.distanceLimits || [0, Infinity]
  var mode      = options.mode   || 'turntable'

  var turntable = createTurntable()
  var orbit     = createOrbit()
  var matrix    = createMatrix()

  turntable.setDistanceLimits(limits[0], limits[1])
  turntable.lookAt(0, eye, center, up)
  orbit.setDistanceLimits(limits[0], limits[1])
  orbit.lookAt(0, eye, center, up)
  matrix.setDistanceLimits(limits[0], limits[1])
  matrix.lookAt(0, eye, center, up)

  return new ViewController({
    turntable: turntable,
    orbit: orbit,
    matrix: matrix
  }, mode)
}

/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = createTurntableController

var filterVector = __webpack_require__(22)
var invert44     = __webpack_require__(11)
var rotateM      = __webpack_require__(56)
var cross        = __webpack_require__(24)
var normalize3   = __webpack_require__(14)
var dot3         = __webpack_require__(25)

function len3(x, y, z) {
  return Math.sqrt(Math.pow(x, 2) + Math.pow(y, 2) + Math.pow(z, 2))
}

function clamp1(x) {
  return Math.min(1.0, Math.max(-1.0, x))
}

function findOrthoPair(v) {
  var vx = Math.abs(v[0])
  var vy = Math.abs(v[1])
  var vz = Math.abs(v[2])

  var u = [0,0,0]
  if(vx > Math.max(vy, vz)) {
    u[2] = 1
  } else if(vy > Math.max(vx, vz)) {
    u[0] = 1
  } else {
    u[1] = 1
  }

  var vv = 0
  var uv = 0
  for(var i=0; i<3; ++i ) {
    vv += v[i] * v[i]
    uv += u[i] * v[i]
  }
  for(var i=0; i<3; ++i) {
    u[i] -= (uv / vv) *  v[i]
  }
  normalize3(u, u)
  return u
}

function TurntableController(zoomMin, zoomMax, center, up, right, radius, theta, phi) {
  this.center = filterVector(center)
  this.up     = filterVector(up)
  this.right  = filterVector(right)
  this.radius = filterVector([radius])
  this.angle  = filterVector([theta, phi])
  this.angle.bounds = [[-Infinity,-Math.PI/2], [Infinity,Math.PI/2]]
  this.setDistanceLimits(zoomMin, zoomMax)

  this.computedCenter = this.center.curve(0)
  this.computedUp     = this.up.curve(0)
  this.computedRight  = this.right.curve(0)
  this.computedRadius = this.radius.curve(0)
  this.computedAngle  = this.angle.curve(0)
  this.computedToward = [0,0,0]
  this.computedEye    = [0,0,0]
  this.computedMatrix = new Array(16)
  for(var i=0; i<16; ++i) {
    this.computedMatrix[i] = 0.5
  }

  this.recalcMatrix(0)
}

var proto = TurntableController.prototype

proto.setDistanceLimits = function(minDist, maxDist) {
  if(minDist > 0) {
    minDist = Math.log(minDist)
  } else {
    minDist = -Infinity
  }
  if(maxDist > 0) {
    maxDist = Math.log(maxDist)
  } else {
    maxDist = Infinity
  }
  maxDist = Math.max(maxDist, minDist)
  this.radius.bounds[0][0] = minDist
  this.radius.bounds[1][0] = maxDist
}

proto.getDistanceLimits = function(out) {
  var bounds = this.radius.bounds[0]
  if(out) {
    out[0] = Math.exp(bounds[0][0])
    out[1] = Math.exp(bounds[1][0])
    return out
  }
  return [ Math.exp(bounds[0][0]), Math.exp(bounds[1][0]) ]
}

proto.recalcMatrix = function(t) {
  //Recompute curves
  this.center.curve(t)
  this.up.curve(t)
  this.right.curve(t)
  this.radius.curve(t)
  this.angle.curve(t)

  //Compute frame for camera matrix
  var up     = this.computedUp
  var right  = this.computedRight
  var uu = 0.0
  var ur = 0.0
  for(var i=0; i<3; ++i) {
    ur += up[i] * right[i]
    uu += up[i] * up[i]
  }
  var ul = Math.sqrt(uu)
  var rr = 0.0
  for(var i=0; i<3; ++i) {
    right[i] -= up[i] * ur / uu
    rr       += right[i] * right[i]
    up[i]    /= ul
  }
  var rl = Math.sqrt(rr)
  for(var i=0; i<3; ++i) {
    right[i] /= rl
  }

  //Compute toward vector
  var toward = this.computedToward
  cross(toward, up, right)
  normalize3(toward, toward)

  //Compute angular parameters
  var radius = Math.exp(this.computedRadius[0])
  var theta  = this.computedAngle[0]
  var phi    = this.computedAngle[1]

  var ctheta = Math.cos(theta)
  var stheta = Math.sin(theta)
  var cphi   = Math.cos(phi)
  var sphi   = Math.sin(phi)

  var center = this.computedCenter

  var wx = ctheta * cphi 
  var wy = stheta * cphi
  var wz = sphi

  var sx = -ctheta * sphi
  var sy = -stheta * sphi
  var sz = cphi

  var eye = this.computedEye
  var mat = this.computedMatrix
  for(var i=0; i<3; ++i) {
    var x      = wx * right[i] + wy * toward[i] + wz * up[i]
    mat[4*i+1] = sx * right[i] + sy * toward[i] + sz * up[i]
    mat[4*i+2] = x
    mat[4*i+3] = 0.0
  }

  var ax = mat[1]
  var ay = mat[5]
  var az = mat[9]
  var bx = mat[2]
  var by = mat[6]
  var bz = mat[10]
  var cx = ay * bz - az * by
  var cy = az * bx - ax * bz
  var cz = ax * by - ay * bx
  var cl = len3(cx, cy, cz)
  cx /= cl
  cy /= cl
  cz /= cl
  mat[0] = cx
  mat[4] = cy
  mat[8] = cz

  for(var i=0; i<3; ++i) {
    eye[i] = center[i] + mat[2+4*i]*radius
  }

  for(var i=0; i<3; ++i) {
    var rr = 0.0
    for(var j=0; j<3; ++j) {
      rr += mat[i+4*j] * eye[j]
    }
    mat[12+i] = -rr
  }
  mat[15] = 1.0
}

proto.getMatrix = function(t, result) {
  this.recalcMatrix(t)
  var mat = this.computedMatrix
  if(result) {
    for(var i=0; i<16; ++i) {
      result[i] = mat[i]
    }
    return result
  }
  return mat
}

var zAxis = [0,0,0]
proto.rotate = function(t, dtheta, dphi, droll) {
  this.angle.move(t, dtheta, dphi)
  if(droll) {
    this.recalcMatrix(t)

    var mat = this.computedMatrix
    zAxis[0] = mat[2]
    zAxis[1] = mat[6]
    zAxis[2] = mat[10]

    var up     = this.computedUp
    var right  = this.computedRight
    var toward = this.computedToward

    for(var i=0; i<3; ++i) {
      mat[4*i]   = up[i]
      mat[4*i+1] = right[i]
      mat[4*i+2] = toward[i]
    }
    rotateM(mat, mat, droll, zAxis)
    for(var i=0; i<3; ++i) {
      up[i] =    mat[4*i]
      right[i] = mat[4*i+1]
    }

    this.up.set(t, up[0], up[1], up[2])
    this.right.set(t, right[0], right[1], right[2])
  }
}

proto.pan = function(t, dx, dy, dz) {
  dx = dx || 0.0
  dy = dy || 0.0
  dz = dz || 0.0

  this.recalcMatrix(t)
  var mat = this.computedMatrix

  var dist = Math.exp(this.computedRadius[0])

  var ux = mat[1]
  var uy = mat[5]
  var uz = mat[9]
  var ul = len3(ux, uy, uz)
  ux /= ul
  uy /= ul
  uz /= ul

  var rx = mat[0]
  var ry = mat[4]
  var rz = mat[8]
  var ru = rx * ux + ry * uy + rz * uz
  rx -= ux * ru
  ry -= uy * ru
  rz -= uz * ru
  var rl = len3(rx, ry, rz)
  rx /= rl
  ry /= rl
  rz /= rl

  var vx = rx * dx + ux * dy
  var vy = ry * dx + uy * dy
  var vz = rz * dx + uz * dy
  this.center.move(t, vx, vy, vz)

  //Update z-component of radius
  var radius = Math.exp(this.computedRadius[0])
  radius = Math.max(1e-4, radius + dz)
  this.radius.set(t, Math.log(radius))
}

proto.translate = function(t, dx, dy, dz) {
  this.center.move(t,
    dx||0.0,
    dy||0.0,
    dz||0.0)
}

//Recenters the coordinate axes
proto.setMatrix = function(t, mat, axes, noSnap) {
  
  //Get the axes for tare
  var ushift = 1
  if(typeof axes === 'number') {
    ushift = (axes)|0
  } 
  if(ushift < 0 || ushift > 3) {
    ushift = 1
  }
  var vshift = (ushift + 2) % 3
  var fshift = (ushift + 1) % 3

  //Recompute state for new t value
  if(!mat) { 
    this.recalcMatrix(t)
    mat = this.computedMatrix
  }

  //Get right and up vectors
  var ux = mat[ushift]
  var uy = mat[ushift+4]
  var uz = mat[ushift+8]
  if(!noSnap) {
    var ul = len3(ux, uy, uz)
    ux /= ul
    uy /= ul
    uz /= ul
  } else {
    var ax = Math.abs(ux)
    var ay = Math.abs(uy)
    var az = Math.abs(uz)
    var am = Math.max(ax,ay,az)
    if(ax === am) {
      ux = (ux < 0) ? -1 : 1
      uy = uz = 0
    } else if(az === am) {
      uz = (uz < 0) ? -1 : 1
      ux = uy = 0
    } else {
      uy = (uy < 0) ? -1 : 1
      ux = uz = 0
    }
  }

  var rx = mat[vshift]
  var ry = mat[vshift+4]
  var rz = mat[vshift+8]
  var ru = rx * ux + ry * uy + rz * uz
  rx -= ux * ru
  ry -= uy * ru
  rz -= uz * ru
  var rl = len3(rx, ry, rz)
  rx /= rl
  ry /= rl
  rz /= rl
  
  var fx = uy * rz - uz * ry
  var fy = uz * rx - ux * rz
  var fz = ux * ry - uy * rx
  var fl = len3(fx, fy, fz)
  fx /= fl
  fy /= fl
  fz /= fl

  this.center.jump(t, ex, ey, ez)
  this.radius.idle(t)
  this.up.jump(t, ux, uy, uz)
  this.right.jump(t, rx, ry, rz)

  var phi, theta
  if(ushift === 2) {
    var cx = mat[1]
    var cy = mat[5]
    var cz = mat[9]
    var cr = cx * rx + cy * ry + cz * rz
    var cf = cx * fx + cy * fy + cz * fz
    if(tu < 0) {
      phi = -Math.PI/2
    } else {
      phi = Math.PI/2
    }
    theta = Math.atan2(cf, cr)
  } else {
    var tx = mat[2]
    var ty = mat[6]
    var tz = mat[10]
    var tu = tx * ux + ty * uy + tz * uz
    var tr = tx * rx + ty * ry + tz * rz
    var tf = tx * fx + ty * fy + tz * fz

    phi = Math.asin(clamp1(tu))
    theta = Math.atan2(tf, tr)
  }

  this.angle.jump(t, theta, phi)

  this.recalcMatrix(t)
  var dx = mat[2]
  var dy = mat[6]
  var dz = mat[10]

  var imat = this.computedMatrix
  invert44(imat, mat)
  var w  = imat[15]
  var ex = imat[12] / w
  var ey = imat[13] / w
  var ez = imat[14] / w

  var gs = Math.exp(this.computedRadius[0])
  this.center.jump(t, ex-dx*gs, ey-dy*gs, ez-dz*gs)
}

proto.lastT = function() {
  return Math.max(
    this.center.lastT(),
    this.up.lastT(),
    this.right.lastT(),
    this.radius.lastT(),
    this.angle.lastT())
}

proto.idle = function(t) {
  this.center.idle(t)
  this.up.idle(t)
  this.right.idle(t)
  this.radius.idle(t)
  this.angle.idle(t)
}

proto.flush = function(t) {
  this.center.flush(t)
  this.up.flush(t)
  this.right.flush(t)
  this.radius.flush(t)
  this.angle.flush(t)
}

proto.setDistance = function(t, d) {
  if(d > 0) {
    this.radius.set(t, Math.log(d))
  }
}

proto.lookAt = function(t, eye, center, up) {
  this.recalcMatrix(t)

  eye    = eye    || this.computedEye
  center = center || this.computedCenter
  up     = up     || this.computedUp

  var ux = up[0]
  var uy = up[1]
  var uz = up[2]
  var ul = len3(ux, uy, uz)
  if(ul < 1e-6) {
    return
  }
  ux /= ul
  uy /= ul
  uz /= ul

  var tx = eye[0] - center[0]
  var ty = eye[1] - center[1]
  var tz = eye[2] - center[2]
  var tl = len3(tx, ty, tz)
  if(tl < 1e-6) {
    return
  }
  tx /= tl
  ty /= tl
  tz /= tl

  var right = this.computedRight
  var rx = right[0]
  var ry = right[1]
  var rz = right[2]
  var ru = ux*rx + uy*ry + uz*rz
  rx -= ru * ux
  ry -= ru * uy
  rz -= ru * uz
  var rl = len3(rx, ry, rz)

  if(rl < 0.01) {
    rx = uy * tz - uz * ty
    ry = uz * tx - ux * tz
    rz = ux * ty - uy * tx
    rl = len3(rx, ry, rz)
    if(rl < 1e-6) {
      return
    }
  }
  rx /= rl
  ry /= rl
  rz /= rl

  this.up.set(t, ux, uy, uz)
  this.right.set(t, rx, ry, rz)
  this.center.set(t, center[0], center[1], center[2])
  this.radius.set(t, Math.log(tl))

  var fx = uy * rz - uz * ry
  var fy = uz * rx - ux * rz
  var fz = ux * ry - uy * rx
  var fl = len3(fx, fy, fz)
  fx /= fl
  fy /= fl
  fz /= fl

  var tu = ux*tx + uy*ty + uz*tz
  var tr = rx*tx + ry*ty + rz*tz
  var tf = fx*tx + fy*ty + fz*tz

  var phi   = Math.asin(clamp1(tu))
  var theta = Math.atan2(tf, tr)

  var angleState = this.angle._state
  var lastTheta  = angleState[angleState.length-1]
  var lastPhi    = angleState[angleState.length-2]
  lastTheta      = lastTheta % (2.0 * Math.PI)
  var dp = Math.abs(lastTheta + 2.0 * Math.PI - theta)
  var d0 = Math.abs(lastTheta - theta)
  var dn = Math.abs(lastTheta - 2.0 * Math.PI - theta)
  if(dp < d0) {
    lastTheta += 2.0 * Math.PI
  }
  if(dn < d0) {
    lastTheta -= 2.0 * Math.PI
  }

  this.angle.jump(this.angle.lastT(), lastTheta, lastPhi)
  this.angle.set(t, theta, phi)
}

function createTurntableController(options) {
  options = options || {}

  var center = options.center || [0,0,0]
  var up     = options.up     || [0,1,0]
  var right  = options.right  || findOrthoPair(up)
  var radius = options.radius || 1.0
  var theta  = options.theta  || 0.0
  var phi    = options.phi    || 0.0

  center = [].slice.call(center, 0, 3)

  up = [].slice.call(up, 0, 3)
  normalize3(up, up)

  right = [].slice.call(right, 0, 3)
  normalize3(right, right)

  if('eye' in options) {
    var eye = options.eye
    var toward = [
      eye[0]-center[0],
      eye[1]-center[1],
      eye[2]-center[2]
    ]
    cross(right, toward, up)
    if(len3(right[0], right[1], right[2]) < 1e-6) {
      right = findOrthoPair(up)
    } else {
      normalize3(right, right)
    }

    radius = len3(toward[0], toward[1], toward[2])

    var ut = dot3(up, toward) / radius
    var rt = dot3(right, toward) / radius
    phi    = Math.acos(ut)
    theta  = Math.acos(rt)
  }

  //Use logarithmic coordinates for radius
  radius = Math.log(radius)

  //Return the controller
  return new TurntableController(
    options.zoomMin,
    options.zoomMax,
    center,
    up,
    right,
    radius,
    theta,
    phi)
}

/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function dcubicHermite(p0, v0, p1, v1, t, f) {
  var dh00 = 6*t*t-6*t,
      dh10 = 3*t*t-4*t + 1,
      dh01 = -6*t*t+6*t,
      dh11 = 3*t*t-2*t
  if(p0.length) {
    if(!f) {
      f = new Array(p0.length)
    }
    for(var i=p0.length-1; i>=0; --i) {
      f[i] = dh00*p0[i] + dh10*v0[i] + dh01*p1[i] + dh11*v1[i]
    }
    return f
  }
  return dh00*p0 + dh10*v0 + dh01*p1[i] + dh11*v1
}

function cubicHermite(p0, v0, p1, v1, t, f) {
  var ti  = (t-1), t2 = t*t, ti2 = ti*ti,
      h00 = (1+2*t)*ti2,
      h10 = t*ti2,
      h01 = t2*(3-2*t),
      h11 = t2*ti
  if(p0.length) {
    if(!f) {
      f = new Array(p0.length)
    }
    for(var i=p0.length-1; i>=0; --i) {
      f[i] = h00*p0[i] + h10*v0[i] + h01*p1[i] + h11*v1[i]
    }
    return f
  }
  return h00*p0 + h10*v0 + h01*p1 + h11*v1
}

module.exports = cubicHermite
module.exports.derivative = dcubicHermite

/***/ }),
/* 56 */
/***/ (function(module, exports) {

module.exports = rotate;

/**
 * Rotates a mat4 by the given angle
 *
 * @param {mat4} out the receiving matrix
 * @param {mat4} a the matrix to rotate
 * @param {Number} rad the angle to rotate the matrix by
 * @param {vec3} axis the axis to rotate around
 * @returns {mat4} out
 */
function rotate(out, a, rad, axis) {
    var x = axis[0], y = axis[1], z = axis[2],
        len = Math.sqrt(x * x + y * y + z * z),
        s, c, t,
        a00, a01, a02, a03,
        a10, a11, a12, a13,
        a20, a21, a22, a23,
        b00, b01, b02,
        b10, b11, b12,
        b20, b21, b22;

    if (Math.abs(len) < 0.000001) { return null; }
    
    len = 1 / len;
    x *= len;
    y *= len;
    z *= len;

    s = Math.sin(rad);
    c = Math.cos(rad);
    t = 1 - c;

    a00 = a[0]; a01 = a[1]; a02 = a[2]; a03 = a[3];
    a10 = a[4]; a11 = a[5]; a12 = a[6]; a13 = a[7];
    a20 = a[8]; a21 = a[9]; a22 = a[10]; a23 = a[11];

    // Construct the elements of the rotation matrix
    b00 = x * x * t + c; b01 = y * x * t + z * s; b02 = z * x * t - y * s;
    b10 = x * y * t - z * s; b11 = y * y * t + c; b12 = z * y * t + x * s;
    b20 = x * z * t + y * s; b21 = y * z * t - x * s; b22 = z * z * t + c;

    // Perform rotation-specific matrix multiplication
    out[0] = a00 * b00 + a10 * b01 + a20 * b02;
    out[1] = a01 * b00 + a11 * b01 + a21 * b02;
    out[2] = a02 * b00 + a12 * b01 + a22 * b02;
    out[3] = a03 * b00 + a13 * b01 + a23 * b02;
    out[4] = a00 * b10 + a10 * b11 + a20 * b12;
    out[5] = a01 * b10 + a11 * b11 + a21 * b12;
    out[6] = a02 * b10 + a12 * b11 + a22 * b12;
    out[7] = a03 * b10 + a13 * b11 + a23 * b12;
    out[8] = a00 * b20 + a10 * b21 + a20 * b22;
    out[9] = a01 * b20 + a11 * b21 + a21 * b22;
    out[10] = a02 * b20 + a12 * b21 + a22 * b22;
    out[11] = a03 * b20 + a13 * b21 + a23 * b22;

    if (a !== out) { // If the source and destination differ, copy the unchanged last row
        out[12] = a[12];
        out[13] = a[13];
        out[14] = a[14];
        out[15] = a[15];
    }
    return out;
};

/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = createOrbitController

var filterVector  = __webpack_require__(22)
var lookAt        = __webpack_require__(26)
var mat4FromQuat  = __webpack_require__(58)
var invert44      = __webpack_require__(11)
var quatFromFrame = __webpack_require__(59)

function len3(x,y,z) {
  return Math.sqrt(Math.pow(x,2) + Math.pow(y,2) + Math.pow(z,2))
}

function len4(w,x,y,z) {
  return Math.sqrt(Math.pow(w,2) + Math.pow(x,2) + Math.pow(y,2) + Math.pow(z,2))
}

function normalize4(out, a) {
  var ax = a[0]
  var ay = a[1]
  var az = a[2]
  var aw = a[3]
  var al = len4(ax, ay, az, aw)
  if(al > 1e-6) {
    out[0] = ax/al
    out[1] = ay/al
    out[2] = az/al
    out[3] = aw/al
  } else {
    out[0] = out[1] = out[2] = 0.0
    out[3] = 1.0
  }
}

function OrbitCameraController(initQuat, initCenter, initRadius) {
  this.radius    = filterVector([initRadius])
  this.center    = filterVector(initCenter)
  this.rotation  = filterVector(initQuat)

  this.computedRadius   = this.radius.curve(0)
  this.computedCenter   = this.center.curve(0)
  this.computedRotation = this.rotation.curve(0)
  this.computedUp       = [0.1,0,0]
  this.computedEye      = [0.1,0,0]
  this.computedMatrix   = [0.1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]

  this.recalcMatrix(0)
}

var proto = OrbitCameraController.prototype

proto.lastT = function() {
  return Math.max(
    this.radius.lastT(),
    this.center.lastT(),
    this.rotation.lastT())
}

proto.recalcMatrix = function(t) {
  this.radius.curve(t)
  this.center.curve(t)
  this.rotation.curve(t)

  var quat = this.computedRotation
  normalize4(quat, quat)

  var mat = this.computedMatrix
  mat4FromQuat(mat, quat)

  var center = this.computedCenter
  var eye    = this.computedEye
  var up     = this.computedUp
  var radius = Math.exp(this.computedRadius[0])

  eye[0] = center[0] + radius * mat[2]
  eye[1] = center[1] + radius * mat[6]
  eye[2] = center[2] + radius * mat[10]
  up[0] = mat[1]
  up[1] = mat[5]
  up[2] = mat[9]

  for(var i=0; i<3; ++i) {
    var rr = 0.0
    for(var j=0; j<3; ++j) {
      rr += mat[i+4*j] * eye[j]
    }
    mat[12+i] = -rr
  }
}

proto.getMatrix = function(t, result) {
  this.recalcMatrix(t)
  var m = this.computedMatrix
  if(result) {
    for(var i=0; i<16; ++i) {
      result[i] = m[i]
    }
    return result
  }
  return m
}

proto.idle = function(t) {
  this.center.idle(t)
  this.radius.idle(t)
  this.rotation.idle(t)
}

proto.flush = function(t) {
  this.center.flush(t)
  this.radius.flush(t)
  this.rotation.flush(t)
}

proto.pan = function(t, dx, dy, dz) {
  dx = dx || 0.0
  dy = dy || 0.0
  dz = dz || 0.0

  this.recalcMatrix(t)
  var mat = this.computedMatrix

  var ux = mat[1]
  var uy = mat[5]
  var uz = mat[9]
  var ul = len3(ux, uy, uz)
  ux /= ul
  uy /= ul
  uz /= ul

  var rx = mat[0]
  var ry = mat[4]
  var rz = mat[8]
  var ru = rx * ux + ry * uy + rz * uz
  rx -= ux * ru
  ry -= uy * ru
  rz -= uz * ru
  var rl = len3(rx, ry, rz)
  rx /= rl
  ry /= rl
  rz /= rl

  var fx = mat[2]
  var fy = mat[6]
  var fz = mat[10]
  var fu = fx * ux + fy * uy + fz * uz
  var fr = fx * rx + fy * ry + fz * rz
  fx -= fu * ux + fr * rx
  fy -= fu * uy + fr * ry
  fz -= fu * uz + fr * rz
  var fl = len3(fx, fy, fz)
  fx /= fl
  fy /= fl
  fz /= fl

  var vx = rx * dx + ux * dy
  var vy = ry * dx + uy * dy
  var vz = rz * dx + uz * dy

  this.center.move(t, vx, vy, vz)

  //Update z-component of radius
  var radius = Math.exp(this.computedRadius[0])
  radius = Math.max(1e-4, radius + dz)
  this.radius.set(t, Math.log(radius))
}

proto.rotate = function(t, dx, dy, dz) {
  this.recalcMatrix(t)

  dx = dx||0.0
  dy = dy||0.0

  var mat = this.computedMatrix

  var rx = mat[0]
  var ry = mat[4]
  var rz = mat[8]

  var ux = mat[1]
  var uy = mat[5]
  var uz = mat[9]

  var fx = mat[2]
  var fy = mat[6]
  var fz = mat[10]

  var qx = dx * rx + dy * ux
  var qy = dx * ry + dy * uy
  var qz = dx * rz + dy * uz

  var bx = -(fy * qz - fz * qy)
  var by = -(fz * qx - fx * qz)
  var bz = -(fx * qy - fy * qx)  
  var bw = Math.sqrt(Math.max(0.0, 1.0 - Math.pow(bx,2) - Math.pow(by,2) - Math.pow(bz,2)))
  var bl = len4(bx, by, bz, bw)
  if(bl > 1e-6) {
    bx /= bl
    by /= bl
    bz /= bl
    bw /= bl
  } else {
    bx = by = bz = 0.0
    bw = 1.0
  }

  var rotation = this.computedRotation
  var ax = rotation[0]
  var ay = rotation[1]
  var az = rotation[2]
  var aw = rotation[3]

  var cx = ax*bw + aw*bx + ay*bz - az*by
  var cy = ay*bw + aw*by + az*bx - ax*bz
  var cz = az*bw + aw*bz + ax*by - ay*bx
  var cw = aw*bw - ax*bx - ay*by - az*bz
  
  //Apply roll
  if(dz) {
    bx = fx
    by = fy
    bz = fz
    var s = Math.sin(dz) / len3(bx, by, bz)
    bx *= s
    by *= s
    bz *= s
    bw = Math.cos(dx)
    cx = cx*bw + cw*bx + cy*bz - cz*by
    cy = cy*bw + cw*by + cz*bx - cx*bz
    cz = cz*bw + cw*bz + cx*by - cy*bx
    cw = cw*bw - cx*bx - cy*by - cz*bz
  }

  var cl = len4(cx, cy, cz, cw)
  if(cl > 1e-6) {
    cx /= cl
    cy /= cl
    cz /= cl
    cw /= cl
  } else {
    cx = cy = cz = 0.0
    cw = 1.0
  }

  this.rotation.set(t, cx, cy, cz, cw)
}

proto.lookAt = function(t, eye, center, up) {
  this.recalcMatrix(t)

  center = center || this.computedCenter
  eye    = eye    || this.computedEye
  up     = up     || this.computedUp

  var mat = this.computedMatrix
  lookAt(mat, eye, center, up)

  var rotation = this.computedRotation
  quatFromFrame(rotation,
    mat[0], mat[1], mat[2],
    mat[4], mat[5], mat[6],
    mat[8], mat[9], mat[10])
  normalize4(rotation, rotation)
  this.rotation.set(t, rotation[0], rotation[1], rotation[2], rotation[3])

  var fl = 0.0
  for(var i=0; i<3; ++i) {
    fl += Math.pow(center[i] - eye[i], 2)
  }
  this.radius.set(t, 0.5 * Math.log(Math.max(fl, 1e-6)))

  this.center.set(t, center[0], center[1], center[2])
}

proto.translate = function(t, dx, dy, dz) {
  this.center.move(t,
    dx||0.0,
    dy||0.0,
    dz||0.0)
}

proto.setMatrix = function(t, matrix) {

  var rotation = this.computedRotation
  quatFromFrame(rotation,
    matrix[0], matrix[1], matrix[2],
    matrix[4], matrix[5], matrix[6],
    matrix[8], matrix[9], matrix[10])
  normalize4(rotation, rotation)
  this.rotation.set(t, rotation[0], rotation[1], rotation[2], rotation[3])

  var mat = this.computedMatrix
  invert44(mat, matrix)
  var w = mat[15]
  if(Math.abs(w) > 1e-6) {
    var cx = mat[12]/w
    var cy = mat[13]/w
    var cz = mat[14]/w

    this.recalcMatrix(t)  
    var r = Math.exp(this.computedRadius[0])
    this.center.set(t, cx-mat[2]*r, cy-mat[6]*r, cz-mat[10]*r)
    this.radius.idle(t)
  } else {
    this.center.idle(t)
    this.radius.idle(t)
  }
}

proto.setDistance = function(t, d) {
  if(d > 0) {
    this.radius.set(t, Math.log(d))
  }
}

proto.setDistanceLimits = function(lo, hi) {
  if(lo > 0) {
    lo = Math.log(lo)
  } else {
    lo = -Infinity    
  }
  if(hi > 0) {
    hi = Math.log(hi)
  } else {
    hi = Infinity
  }
  hi = Math.max(hi, lo)
  this.radius.bounds[0][0] = lo
  this.radius.bounds[1][0] = hi
}

proto.getDistanceLimits = function(out) {
  var bounds = this.radius.bounds
  if(out) {
    out[0] = Math.exp(bounds[0][0])
    out[1] = Math.exp(bounds[1][0])
    return out
  }
  return [ Math.exp(bounds[0][0]), Math.exp(bounds[1][0]) ]
}

proto.toJSON = function() {
  this.recalcMatrix(this.lastT())
  return {
    center:   this.computedCenter.slice(),
    rotation: this.computedRotation.slice(),
    distance: Math.log(this.computedRadius[0]),
    zoomMin:  this.radius.bounds[0][0],
    zoomMax:  this.radius.bounds[1][0]
  }
}

proto.fromJSON = function(options) {
  var t = this.lastT()
  var c = options.center
  if(c) {
    this.center.set(t, c[0], c[1], c[2])
  }
  var r = options.rotation
  if(r) {
    this.rotation.set(t, r[0], r[1], r[2], r[3])
  }
  var d = options.distance
  if(d && d > 0) {
    this.radius.set(t, Math.log(d))
  }
  this.setDistanceLimits(options.zoomMin, options.zoomMax)
}

function createOrbitController(options) {
  options = options || {}
  var center   = options.center   || [0,0,0]
  var rotation = options.rotation || [0,0,0,1]
  var radius   = options.radius   || 1.0

  center = [].slice.call(center, 0, 3)
  rotation = [].slice.call(rotation, 0, 4)
  normalize4(rotation, rotation)

  var result = new OrbitCameraController(
    rotation,
    center,
    Math.log(radius))

  result.setDistanceLimits(options.zoomMin, options.zoomMax)

  if('eye' in options || 'up' in options) {
    result.lookAt(0, options.eye, options.center, options.up)
  }

  return result
}

/***/ }),
/* 58 */
/***/ (function(module, exports) {

module.exports = fromQuat;

/**
 * Creates a matrix from a quaternion rotation.
 *
 * @param {mat4} out mat4 receiving operation result
 * @param {quat4} q Rotation quaternion
 * @returns {mat4} out
 */
function fromQuat(out, q) {
    var x = q[0], y = q[1], z = q[2], w = q[3],
        x2 = x + x,
        y2 = y + y,
        z2 = z + z,

        xx = x * x2,
        yx = y * x2,
        yy = y * y2,
        zx = z * x2,
        zy = z * y2,
        zz = z * z2,
        wx = w * x2,
        wy = w * y2,
        wz = w * z2;

    out[0] = 1 - yy - zz;
    out[1] = yx + wz;
    out[2] = zx - wy;
    out[3] = 0;

    out[4] = yx - wz;
    out[5] = 1 - xx - zz;
    out[6] = zy + wx;
    out[7] = 0;

    out[8] = zx + wy;
    out[9] = zy - wx;
    out[10] = 1 - xx - yy;
    out[11] = 0;

    out[12] = 0;
    out[13] = 0;
    out[14] = 0;
    out[15] = 1;

    return out;
};

/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = quatFromFrame

function quatFromFrame(
  out,
  rx, ry, rz,
  ux, uy, uz,
  fx, fy, fz) {
  var tr = rx + uy + fz
  if(l > 0) {
    var l = Math.sqrt(tr + 1.0)
    out[0] = 0.5 * (uz - fy) / l
    out[1] = 0.5 * (fx - rz) / l
    out[2] = 0.5 * (ry - uy) / l
    out[3] = 0.5 * l
  } else {
    var tf = Math.max(rx, uy, fz)
    var l = Math.sqrt(2 * tf - tr + 1.0)
    if(rx >= tf) {
      //x y z  order
      out[0] = 0.5 * l
      out[1] = 0.5 * (ux + ry) / l
      out[2] = 0.5 * (fx + rz) / l
      out[3] = 0.5 * (uz - fy) / l
    } else if(uy >= tf) {
      //y z x  order
      out[0] = 0.5 * (ry + ux) / l
      out[1] = 0.5 * l
      out[2] = 0.5 * (fy + uz) / l
      out[3] = 0.5 * (fx - rz) / l
    } else {
      //z x y  order
      out[0] = 0.5 * (rz + fx) / l
      out[1] = 0.5 * (uz + fy) / l
      out[2] = 0.5 * l
      out[3] = 0.5 * (ry - ux) / l
    }
  }
  return out
}

/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var bsearch   = __webpack_require__(23)
var m4interp  = __webpack_require__(61)
var invert44  = __webpack_require__(11)
var rotateX   = __webpack_require__(73)
var rotateY   = __webpack_require__(74)
var rotateZ   = __webpack_require__(75)
var lookAt    = __webpack_require__(26)
var translate = __webpack_require__(28)
var scale     = __webpack_require__(30)
var normalize = __webpack_require__(14)

var DEFAULT_CENTER = [0,0,0]

module.exports = createMatrixCameraController

function MatrixCameraController(initialMatrix) {
  this._components    = initialMatrix.slice()
  this._time          = [0]
  this.prevMatrix     = initialMatrix.slice()
  this.nextMatrix     = initialMatrix.slice()
  this.computedMatrix = initialMatrix.slice()
  this.computedInverse = initialMatrix.slice()
  this.computedEye    = [0,0,0]
  this.computedUp     = [0,0,0]
  this.computedCenter = [0,0,0]
  this.computedRadius = [0]
  this._limits        = [-Infinity, Infinity]
}

var proto = MatrixCameraController.prototype

proto.recalcMatrix = function(t) {
  var time = this._time
  var tidx = bsearch.le(time, t)
  var mat = this.computedMatrix
  if(tidx < 0) {
    return
  }
  var comps = this._components
  if(tidx === time.length-1) {
    var ptr = 16*tidx
    for(var i=0; i<16; ++i) {
      mat[i] = comps[ptr++]
    }
  } else {
    var dt = (time[tidx+1] - time[tidx])
    var ptr = 16*tidx
    var prev = this.prevMatrix
    var allEqual = true
    for(var i=0; i<16; ++i) {
      prev[i] = comps[ptr++]
    }
    var next = this.nextMatrix
    for(var i=0; i<16; ++i) {
      next[i] = comps[ptr++]
      allEqual = allEqual && (prev[i] === next[i])
    }
    if(dt < 1e-6 || allEqual) {
      for(var i=0; i<16; ++i) {
        mat[i] = prev[i]
      }
    } else {
      m4interp(mat, prev, next, (t - time[tidx])/dt)
    }
  }

  var up = this.computedUp
  up[0] = mat[1]
  up[1] = mat[5]
  up[2] = mat[9]
  normalize(up, up)

  var imat = this.computedInverse
  invert44(imat, mat)
  var eye = this.computedEye
  var w = imat[15]
  eye[0] = imat[12]/w
  eye[1] = imat[13]/w
  eye[2] = imat[14]/w

  var center = this.computedCenter
  var radius = Math.exp(this.computedRadius[0])
  for(var i=0; i<3; ++i) {
    center[i] = eye[i] - mat[2+4*i] * radius
  }
}

proto.idle = function(t) {
  if(t < this.lastT()) {
    return
  }
  var mc = this._components
  var ptr = mc.length-16
  for(var i=0; i<16; ++i) {
    mc.push(mc[ptr++])
  }
  this._time.push(t)
}

proto.flush = function(t) {
  var idx = bsearch.gt(this._time, t) - 2
  if(idx < 0) {
    return
  }
  this._time.splice(0, idx)
  this._components.splice(0, 16*idx)
}

proto.lastT = function() {
  return this._time[this._time.length-1]
}

proto.lookAt = function(t, eye, center, up) {
  this.recalcMatrix(t)
  eye    = eye || this.computedEye
  center = center || DEFAULT_CENTER
  up     = up || this.computedUp
  this.setMatrix(t, lookAt(this.computedMatrix, eye, center, up))
  var d2 = 0.0
  for(var i=0; i<3; ++i) {
    d2 += Math.pow(center[i] - eye[i], 2)
  }
  d2 = Math.log(Math.sqrt(d2))
  this.computedRadius[0] = d2
}

proto.rotate = function(t, yaw, pitch, roll) {
  this.recalcMatrix(t)
  var mat = this.computedInverse
  if(yaw)   rotateY(mat, mat, yaw)
  if(pitch) rotateX(mat, mat, pitch)
  if(roll)  rotateZ(mat, mat, roll)
  this.setMatrix(t, invert44(this.computedMatrix, mat))
}

var tvec = [0,0,0]

proto.pan = function(t, dx, dy, dz) {
  tvec[0] = -(dx || 0.0)
  tvec[1] = -(dy || 0.0)
  tvec[2] = -(dz || 0.0)
  this.recalcMatrix(t)
  var mat = this.computedInverse
  translate(mat, mat, tvec)
  this.setMatrix(t, invert44(mat, mat))
}

proto.translate = function(t, dx, dy, dz) {
  tvec[0] = dx || 0.0
  tvec[1] = dy || 0.0
  tvec[2] = dz || 0.0
  this.recalcMatrix(t)
  var mat = this.computedMatrix
  translate(mat, mat, tvec)
  this.setMatrix(t, mat)
}

proto.setMatrix = function(t, mat) {
  if(t < this.lastT()) {
    return
  }
  this._time.push(t)
  for(var i=0; i<16; ++i) {
    this._components.push(mat[i])
  }
}

proto.setDistance = function(t, d) {
  this.computedRadius[0] = d
}

proto.setDistanceLimits = function(a,b) {
  var lim = this._limits
  lim[0] = a
  lim[1] = b
}

proto.getDistanceLimits = function(out) {
  var lim = this._limits
  if(out) {
    out[0] = lim[0]
    out[1] = lim[1]
    return out
  }
  return lim
}

function createMatrixCameraController(options) {
  options = options || {}
  var matrix = options.matrix || 
              [1,0,0,0,
               0,1,0,0,
               0,0,1,0,
               0,0,0,1]
  return new MatrixCameraController(matrix)
}


/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

var lerp = __webpack_require__(62)

var recompose = __webpack_require__(63)
var decompose = __webpack_require__(66)
var determinant = __webpack_require__(31)
var slerp = __webpack_require__(71)

var state0 = state()
var state1 = state()
var tmp = state()

module.exports = interpolate
function interpolate(out, start, end, alpha) {
    if (determinant(start) === 0 || determinant(end) === 0)
        return false

    //decompose the start and end matrices into individual components
    var r0 = decompose(start, state0.translate, state0.scale, state0.skew, state0.perspective, state0.quaternion)
    var r1 = decompose(end, state1.translate, state1.scale, state1.skew, state1.perspective, state1.quaternion)
    if (!r0 || !r1)
        return false    


    //now lerp/slerp the start and end components into a temporary     lerp(tmptranslate, state0.translate, state1.translate, alpha)
    lerp(tmp.translate, state0.translate, state1.translate, alpha)
    lerp(tmp.skew, state0.skew, state1.skew, alpha)
    lerp(tmp.scale, state0.scale, state1.scale, alpha)
    lerp(tmp.perspective, state0.perspective, state1.perspective, alpha)
    slerp(tmp.quaternion, state0.quaternion, state1.quaternion, alpha)

    //and recompose into our 'out' matrix
    recompose(out, tmp.translate, tmp.scale, tmp.skew, tmp.perspective, tmp.quaternion)
    return true
}

function state() {
    return {
        translate: vec3(),
        scale: vec3(1),
        skew: vec3(),
        perspective: vec4(),
        quaternion: vec4()
    }
}

function vec3(n) {
    return [n||0,n||0,n||0]
}

function vec4() {
    return [0,0,0,1]
}

/***/ }),
/* 62 */
/***/ (function(module, exports) {

module.exports = lerp;

/**
 * Performs a linear interpolation between two vec3's
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a the first operand
 * @param {vec3} b the second operand
 * @param {Number} t interpolation amount between the two inputs
 * @returns {vec3} out
 */
function lerp(out, a, b, t) {
    var ax = a[0],
        ay = a[1],
        az = a[2]
    out[0] = ax + t * (b[0] - ax)
    out[1] = ay + t * (b[1] - ay)
    out[2] = az + t * (b[2] - az)
    return out
}

/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

/*
Input:  translation ; a 3 component vector
        scale       ; a 3 component vector
        skew        ; skew factors XY,XZ,YZ represented as a 3 component vector
        perspective ; a 4 component vector
        quaternion  ; a 4 component vector
Output: matrix      ; a 4x4 matrix

From: http://www.w3.org/TR/css3-transforms/#recomposing-to-a-3d-matrix
*/

var mat4 = {
    identity: __webpack_require__(27),
    translate: __webpack_require__(28),
    multiply: __webpack_require__(64),
    create: __webpack_require__(29),
    scale: __webpack_require__(30),
    fromRotationTranslation: __webpack_require__(65)
}

var rotationMatrix = mat4.create()
var temp = mat4.create()

module.exports = function recomposeMat4(matrix, translation, scale, skew, perspective, quaternion) {
    mat4.identity(matrix)

    //apply translation & rotation
    mat4.fromRotationTranslation(matrix, quaternion, translation)

    //apply perspective
    matrix[3] = perspective[0]
    matrix[7] = perspective[1]
    matrix[11] = perspective[2]
    matrix[15] = perspective[3]
        
    // apply skew
    // temp is a identity 4x4 matrix initially
    mat4.identity(temp)

    if (skew[2] !== 0) {
        temp[9] = skew[2]
        mat4.multiply(matrix, matrix, temp)
    }

    if (skew[1] !== 0) {
        temp[9] = 0
        temp[8] = skew[1]
        mat4.multiply(matrix, matrix, temp)
    }

    if (skew[0] !== 0) {
        temp[8] = 0
        temp[4] = skew[0]
        mat4.multiply(matrix, matrix, temp)
    }

    //apply scale
    mat4.scale(matrix, matrix, scale)
    return matrix
}

/***/ }),
/* 64 */
/***/ (function(module, exports) {

module.exports = multiply;

/**
 * Multiplies two mat4's
 *
 * @param {mat4} out the receiving matrix
 * @param {mat4} a the first operand
 * @param {mat4} b the second operand
 * @returns {mat4} out
 */
function multiply(out, a, b) {
    var a00 = a[0], a01 = a[1], a02 = a[2], a03 = a[3],
        a10 = a[4], a11 = a[5], a12 = a[6], a13 = a[7],
        a20 = a[8], a21 = a[9], a22 = a[10], a23 = a[11],
        a30 = a[12], a31 = a[13], a32 = a[14], a33 = a[15];

    // Cache only the current line of the second matrix
    var b0  = b[0], b1 = b[1], b2 = b[2], b3 = b[3];  
    out[0] = b0*a00 + b1*a10 + b2*a20 + b3*a30;
    out[1] = b0*a01 + b1*a11 + b2*a21 + b3*a31;
    out[2] = b0*a02 + b1*a12 + b2*a22 + b3*a32;
    out[3] = b0*a03 + b1*a13 + b2*a23 + b3*a33;

    b0 = b[4]; b1 = b[5]; b2 = b[6]; b3 = b[7];
    out[4] = b0*a00 + b1*a10 + b2*a20 + b3*a30;
    out[5] = b0*a01 + b1*a11 + b2*a21 + b3*a31;
    out[6] = b0*a02 + b1*a12 + b2*a22 + b3*a32;
    out[7] = b0*a03 + b1*a13 + b2*a23 + b3*a33;

    b0 = b[8]; b1 = b[9]; b2 = b[10]; b3 = b[11];
    out[8] = b0*a00 + b1*a10 + b2*a20 + b3*a30;
    out[9] = b0*a01 + b1*a11 + b2*a21 + b3*a31;
    out[10] = b0*a02 + b1*a12 + b2*a22 + b3*a32;
    out[11] = b0*a03 + b1*a13 + b2*a23 + b3*a33;

    b0 = b[12]; b1 = b[13]; b2 = b[14]; b3 = b[15];
    out[12] = b0*a00 + b1*a10 + b2*a20 + b3*a30;
    out[13] = b0*a01 + b1*a11 + b2*a21 + b3*a31;
    out[14] = b0*a02 + b1*a12 + b2*a22 + b3*a32;
    out[15] = b0*a03 + b1*a13 + b2*a23 + b3*a33;
    return out;
};

/***/ }),
/* 65 */
/***/ (function(module, exports) {

module.exports = fromRotationTranslation;

/**
 * Creates a matrix from a quaternion rotation and vector translation
 * This is equivalent to (but much faster than):
 *
 *     mat4.identity(dest);
 *     mat4.translate(dest, vec);
 *     var quatMat = mat4.create();
 *     quat4.toMat4(quat, quatMat);
 *     mat4.multiply(dest, quatMat);
 *
 * @param {mat4} out mat4 receiving operation result
 * @param {quat4} q Rotation quaternion
 * @param {vec3} v Translation vector
 * @returns {mat4} out
 */
function fromRotationTranslation(out, q, v) {
    // Quaternion math
    var x = q[0], y = q[1], z = q[2], w = q[3],
        x2 = x + x,
        y2 = y + y,
        z2 = z + z,

        xx = x * x2,
        xy = x * y2,
        xz = x * z2,
        yy = y * y2,
        yz = y * z2,
        zz = z * z2,
        wx = w * x2,
        wy = w * y2,
        wz = w * z2;

    out[0] = 1 - (yy + zz);
    out[1] = xy + wz;
    out[2] = xz - wy;
    out[3] = 0;
    out[4] = xy - wz;
    out[5] = 1 - (xx + zz);
    out[6] = yz + wx;
    out[7] = 0;
    out[8] = xz + wy;
    out[9] = yz - wx;
    out[10] = 1 - (xx + yy);
    out[11] = 0;
    out[12] = v[0];
    out[13] = v[1];
    out[14] = v[2];
    out[15] = 1;
    
    return out;
};

/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

/*jshint unused:true*/
/*
Input:  matrix      ; a 4x4 matrix
Output: translation ; a 3 component vector
        scale       ; a 3 component vector
        skew        ; skew factors XY,XZ,YZ represented as a 3 component vector
        perspective ; a 4 component vector
        quaternion  ; a 4 component vector
Returns false if the matrix cannot be decomposed, true if it can


References:
https://github.com/kamicane/matrix3d/blob/master/lib/Matrix3d.js
https://github.com/ChromiumWebApps/chromium/blob/master/ui/gfx/transform_util.cc
http://www.w3.org/TR/css3-transforms/#decomposing-a-3d-matrix
*/

var normalize = __webpack_require__(67)

var create = __webpack_require__(29)
var clone = __webpack_require__(68)
var determinant = __webpack_require__(31)
var invert = __webpack_require__(11)
var transpose = __webpack_require__(69)
var vec3 = {
    length: __webpack_require__(70),
    normalize: __webpack_require__(14),
    dot: __webpack_require__(25),
    cross: __webpack_require__(24)
}

var tmp = create()
var perspectiveMatrix = create()
var tmpVec4 = [0, 0, 0, 0]
var row = [ [0,0,0], [0,0,0], [0,0,0] ]
var pdum3 = [0,0,0]

module.exports = function decomposeMat4(matrix, translation, scale, skew, perspective, quaternion) {
    if (!translation) translation = [0,0,0]
    if (!scale) scale = [0,0,0]
    if (!skew) skew = [0,0,0]
    if (!perspective) perspective = [0,0,0,1]
    if (!quaternion) quaternion = [0,0,0,1]

    //normalize, if not possible then bail out early
    if (!normalize(tmp, matrix))
        return false

    // perspectiveMatrix is used to solve for perspective, but it also provides
    // an easy way to test for singularity of the upper 3x3 component.
    clone(perspectiveMatrix, tmp)

    perspectiveMatrix[3] = 0
    perspectiveMatrix[7] = 0
    perspectiveMatrix[11] = 0
    perspectiveMatrix[15] = 1

    // If the perspectiveMatrix is not invertible, we are also unable to
    // decompose, so we'll bail early. Constant taken from SkMatrix44::invert.
    if (Math.abs(determinant(perspectiveMatrix) < 1e-8))
        return false

    var a03 = tmp[3], a13 = tmp[7], a23 = tmp[11],
            a30 = tmp[12], a31 = tmp[13], a32 = tmp[14], a33 = tmp[15]

    // First, isolate perspective.
    if (a03 !== 0 || a13 !== 0 || a23 !== 0) {
        tmpVec4[0] = a03
        tmpVec4[1] = a13
        tmpVec4[2] = a23
        tmpVec4[3] = a33

        // Solve the equation by inverting perspectiveMatrix and multiplying
        // rightHandSide by the inverse.
        // resuing the perspectiveMatrix here since it's no longer needed
        var ret = invert(perspectiveMatrix, perspectiveMatrix)
        if (!ret) return false
        transpose(perspectiveMatrix, perspectiveMatrix)

        //multiply by transposed inverse perspective matrix, into perspective vec4
        vec4multMat4(perspective, tmpVec4, perspectiveMatrix)
    } else { 
        //no perspective
        perspective[0] = perspective[1] = perspective[2] = 0
        perspective[3] = 1
    }

    // Next take care of translation
    translation[0] = a30
    translation[1] = a31
    translation[2] = a32

    // Now get scale and shear. 'row' is a 3 element array of 3 component vectors
    mat3from4(row, tmp)

    // Compute X scale factor and normalize first row.
    scale[0] = vec3.length(row[0])
    vec3.normalize(row[0], row[0])

    // Compute XY shear factor and make 2nd row orthogonal to 1st.
    skew[0] = vec3.dot(row[0], row[1])
    combine(row[1], row[1], row[0], 1.0, -skew[0])

    // Now, compute Y scale and normalize 2nd row.
    scale[1] = vec3.length(row[1])
    vec3.normalize(row[1], row[1])
    skew[0] /= scale[1]

    // Compute XZ and YZ shears, orthogonalize 3rd row
    skew[1] = vec3.dot(row[0], row[2])
    combine(row[2], row[2], row[0], 1.0, -skew[1])
    skew[2] = vec3.dot(row[1], row[2])
    combine(row[2], row[2], row[1], 1.0, -skew[2])

    // Next, get Z scale and normalize 3rd row.
    scale[2] = vec3.length(row[2])
    vec3.normalize(row[2], row[2])
    skew[1] /= scale[2]
    skew[2] /= scale[2]


    // At this point, the matrix (in rows) is orthonormal.
    // Check for a coordinate system flip.  If the determinant
    // is -1, then negate the matrix and the scaling factors.
    vec3.cross(pdum3, row[1], row[2])
    if (vec3.dot(row[0], pdum3) < 0) {
        for (var i = 0; i < 3; i++) {
            scale[i] *= -1;
            row[i][0] *= -1
            row[i][1] *= -1
            row[i][2] *= -1
        }
    }

    // Now, get the rotations out
    quaternion[0] = 0.5 * Math.sqrt(Math.max(1 + row[0][0] - row[1][1] - row[2][2], 0))
    quaternion[1] = 0.5 * Math.sqrt(Math.max(1 - row[0][0] + row[1][1] - row[2][2], 0))
    quaternion[2] = 0.5 * Math.sqrt(Math.max(1 - row[0][0] - row[1][1] + row[2][2], 0))
    quaternion[3] = 0.5 * Math.sqrt(Math.max(1 + row[0][0] + row[1][1] + row[2][2], 0))

    if (row[2][1] > row[1][2])
        quaternion[0] = -quaternion[0]
    if (row[0][2] > row[2][0])
        quaternion[1] = -quaternion[1]
    if (row[1][0] > row[0][1])
        quaternion[2] = -quaternion[2]
    return true
}

//will be replaced by gl-vec4 eventually
function vec4multMat4(out, a, m) {
    var x = a[0], y = a[1], z = a[2], w = a[3];
    out[0] = m[0] * x + m[4] * y + m[8] * z + m[12] * w;
    out[1] = m[1] * x + m[5] * y + m[9] * z + m[13] * w;
    out[2] = m[2] * x + m[6] * y + m[10] * z + m[14] * w;
    out[3] = m[3] * x + m[7] * y + m[11] * z + m[15] * w;
    return out;
}

//gets upper-left of a 4x4 matrix into a 3x3 of vectors
function mat3from4(out, mat4x4) {
    out[0][0] = mat4x4[0]
    out[0][1] = mat4x4[1]
    out[0][2] = mat4x4[2]
    
    out[1][0] = mat4x4[4]
    out[1][1] = mat4x4[5]
    out[1][2] = mat4x4[6]

    out[2][0] = mat4x4[8]
    out[2][1] = mat4x4[9]
    out[2][2] = mat4x4[10]
}

function combine(out, a, b, scale1, scale2) {
    out[0] = a[0] * scale1 + b[0] * scale2
    out[1] = a[1] * scale1 + b[1] * scale2
    out[2] = a[2] * scale1 + b[2] * scale2
}

/***/ }),
/* 67 */
/***/ (function(module, exports) {

module.exports = function normalize(out, mat) {
    var m44 = mat[15]
    // Cannot normalize.
    if (m44 === 0) 
        return false
    var scale = 1 / m44
    for (var i=0; i<16; i++)
        out[i] = mat[i] * scale
    return true
}

/***/ }),
/* 68 */
/***/ (function(module, exports) {

module.exports = clone;

/**
 * Creates a new mat4 initialized with values from an existing matrix
 *
 * @param {mat4} a matrix to clone
 * @returns {mat4} a new 4x4 matrix
 */
function clone(a) {
    var out = new Float32Array(16);
    out[0] = a[0];
    out[1] = a[1];
    out[2] = a[2];
    out[3] = a[3];
    out[4] = a[4];
    out[5] = a[5];
    out[6] = a[6];
    out[7] = a[7];
    out[8] = a[8];
    out[9] = a[9];
    out[10] = a[10];
    out[11] = a[11];
    out[12] = a[12];
    out[13] = a[13];
    out[14] = a[14];
    out[15] = a[15];
    return out;
};

/***/ }),
/* 69 */
/***/ (function(module, exports) {

module.exports = transpose;

/**
 * Transpose the values of a mat4
 *
 * @param {mat4} out the receiving matrix
 * @param {mat4} a the source matrix
 * @returns {mat4} out
 */
function transpose(out, a) {
    // If we are transposing ourselves we can skip a few steps but have to cache some values
    if (out === a) {
        var a01 = a[1], a02 = a[2], a03 = a[3],
            a12 = a[6], a13 = a[7],
            a23 = a[11];

        out[1] = a[4];
        out[2] = a[8];
        out[3] = a[12];
        out[4] = a01;
        out[6] = a[9];
        out[7] = a[13];
        out[8] = a02;
        out[9] = a12;
        out[11] = a[14];
        out[12] = a03;
        out[13] = a13;
        out[14] = a23;
    } else {
        out[0] = a[0];
        out[1] = a[4];
        out[2] = a[8];
        out[3] = a[12];
        out[4] = a[1];
        out[5] = a[5];
        out[6] = a[9];
        out[7] = a[13];
        out[8] = a[2];
        out[9] = a[6];
        out[10] = a[10];
        out[11] = a[14];
        out[12] = a[3];
        out[13] = a[7];
        out[14] = a[11];
        out[15] = a[15];
    }
    
    return out;
};

/***/ }),
/* 70 */
/***/ (function(module, exports) {

module.exports = length;

/**
 * Calculates the length of a vec3
 *
 * @param {vec3} a vector to calculate length of
 * @returns {Number} length of a
 */
function length(a) {
    var x = a[0],
        y = a[1],
        z = a[2]
    return Math.sqrt(x*x + y*y + z*z)
}

/***/ }),
/* 71 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(72)

/***/ }),
/* 72 */
/***/ (function(module, exports) {

module.exports = slerp

/**
 * Performs a spherical linear interpolation between two quat
 *
 * @param {quat} out the receiving quaternion
 * @param {quat} a the first operand
 * @param {quat} b the second operand
 * @param {Number} t interpolation amount between the two inputs
 * @returns {quat} out
 */
function slerp (out, a, b, t) {
  // benchmarks:
  //    http://jsperf.com/quaternion-slerp-implementations

  var ax = a[0], ay = a[1], az = a[2], aw = a[3],
    bx = b[0], by = b[1], bz = b[2], bw = b[3]

  var omega, cosom, sinom, scale0, scale1

  // calc cosine
  cosom = ax * bx + ay * by + az * bz + aw * bw
  // adjust signs (if necessary)
  if (cosom < 0.0) {
    cosom = -cosom
    bx = -bx
    by = -by
    bz = -bz
    bw = -bw
  }
  // calculate coefficients
  if ((1.0 - cosom) > 0.000001) {
    // standard case (slerp)
    omega = Math.acos(cosom)
    sinom = Math.sin(omega)
    scale0 = Math.sin((1.0 - t) * omega) / sinom
    scale1 = Math.sin(t * omega) / sinom
  } else {
    // "from" and "to" quaternions are very close
    //  ... so we can do a linear interpolation
    scale0 = 1.0 - t
    scale1 = t
  }
  // calculate final values
  out[0] = scale0 * ax + scale1 * bx
  out[1] = scale0 * ay + scale1 * by
  out[2] = scale0 * az + scale1 * bz
  out[3] = scale0 * aw + scale1 * bw

  return out
}


/***/ }),
/* 73 */
/***/ (function(module, exports) {

module.exports = rotateX;

/**
 * Rotates a matrix by the given angle around the X axis
 *
 * @param {mat4} out the receiving matrix
 * @param {mat4} a the matrix to rotate
 * @param {Number} rad the angle to rotate the matrix by
 * @returns {mat4} out
 */
function rotateX(out, a, rad) {
    var s = Math.sin(rad),
        c = Math.cos(rad),
        a10 = a[4],
        a11 = a[5],
        a12 = a[6],
        a13 = a[7],
        a20 = a[8],
        a21 = a[9],
        a22 = a[10],
        a23 = a[11];

    if (a !== out) { // If the source and destination differ, copy the unchanged rows
        out[0]  = a[0];
        out[1]  = a[1];
        out[2]  = a[2];
        out[3]  = a[3];
        out[12] = a[12];
        out[13] = a[13];
        out[14] = a[14];
        out[15] = a[15];
    }

    // Perform axis-specific matrix multiplication
    out[4] = a10 * c + a20 * s;
    out[5] = a11 * c + a21 * s;
    out[6] = a12 * c + a22 * s;
    out[7] = a13 * c + a23 * s;
    out[8] = a20 * c - a10 * s;
    out[9] = a21 * c - a11 * s;
    out[10] = a22 * c - a12 * s;
    out[11] = a23 * c - a13 * s;
    return out;
};

/***/ }),
/* 74 */
/***/ (function(module, exports) {

module.exports = rotateY;

/**
 * Rotates a matrix by the given angle around the Y axis
 *
 * @param {mat4} out the receiving matrix
 * @param {mat4} a the matrix to rotate
 * @param {Number} rad the angle to rotate the matrix by
 * @returns {mat4} out
 */
function rotateY(out, a, rad) {
    var s = Math.sin(rad),
        c = Math.cos(rad),
        a00 = a[0],
        a01 = a[1],
        a02 = a[2],
        a03 = a[3],
        a20 = a[8],
        a21 = a[9],
        a22 = a[10],
        a23 = a[11];

    if (a !== out) { // If the source and destination differ, copy the unchanged rows
        out[4]  = a[4];
        out[5]  = a[5];
        out[6]  = a[6];
        out[7]  = a[7];
        out[12] = a[12];
        out[13] = a[13];
        out[14] = a[14];
        out[15] = a[15];
    }

    // Perform axis-specific matrix multiplication
    out[0] = a00 * c - a20 * s;
    out[1] = a01 * c - a21 * s;
    out[2] = a02 * c - a22 * s;
    out[3] = a03 * c - a23 * s;
    out[8] = a00 * s + a20 * c;
    out[9] = a01 * s + a21 * c;
    out[10] = a02 * s + a22 * c;
    out[11] = a03 * s + a23 * c;
    return out;
};

/***/ }),
/* 75 */
/***/ (function(module, exports) {

module.exports = rotateZ;

/**
 * Rotates a matrix by the given angle around the Z axis
 *
 * @param {mat4} out the receiving matrix
 * @param {mat4} a the matrix to rotate
 * @param {Number} rad the angle to rotate the matrix by
 * @returns {mat4} out
 */
function rotateZ(out, a, rad) {
    var s = Math.sin(rad),
        c = Math.cos(rad),
        a00 = a[0],
        a01 = a[1],
        a02 = a[2],
        a03 = a[3],
        a10 = a[4],
        a11 = a[5],
        a12 = a[6],
        a13 = a[7];

    if (a !== out) { // If the source and destination differ, copy the unchanged last row
        out[8]  = a[8];
        out[9]  = a[9];
        out[10] = a[10];
        out[11] = a[11];
        out[12] = a[12];
        out[13] = a[13];
        out[14] = a[14];
        out[15] = a[15];
    }

    // Perform axis-specific matrix multiplication
    out[0] = a00 * c + a10 * s;
    out[1] = a01 * c + a11 * s;
    out[2] = a02 * c + a12 * s;
    out[3] = a03 * c + a13 * s;
    out[4] = a10 * c - a00 * s;
    out[5] = a11 * c - a01 * s;
    out[6] = a12 * c - a02 * s;
    out[7] = a13 * c - a03 * s;
    return out;
};

/***/ }),
/* 76 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = mouseListen

var mouse = __webpack_require__(77)

function mouseListen (element, callback) {
  if (!callback) {
    callback = element
    element = window
  }

  var buttonState = 0
  var x = 0
  var y = 0
  var mods = {
    shift: false,
    alt: false,
    control: false,
    meta: false
  }
  var attached = false

  function updateMods (ev) {
    var changed = false
    if ('altKey' in ev) {
      changed = changed || ev.altKey !== mods.alt
      mods.alt = !!ev.altKey
    }
    if ('shiftKey' in ev) {
      changed = changed || ev.shiftKey !== mods.shift
      mods.shift = !!ev.shiftKey
    }
    if ('ctrlKey' in ev) {
      changed = changed || ev.ctrlKey !== mods.control
      mods.control = !!ev.ctrlKey
    }
    if ('metaKey' in ev) {
      changed = changed || ev.metaKey !== mods.meta
      mods.meta = !!ev.metaKey
    }
    return changed
  }

  function handleEvent (nextButtons, ev) {
    var nextX = mouse.x(ev)
    var nextY = mouse.y(ev)
    if ('buttons' in ev) {
      nextButtons = ev.buttons | 0
    }
    if (nextButtons !== buttonState ||
      nextX !== x ||
      nextY !== y ||
      updateMods(ev)) {
      buttonState = nextButtons | 0
      x = nextX || 0
      y = nextY || 0
      callback && callback(buttonState, x, y, mods)
    }
  }

  function clearState (ev) {
    handleEvent(0, ev)
  }

  function handleBlur () {
    if (buttonState ||
      x ||
      y ||
      mods.shift ||
      mods.alt ||
      mods.meta ||
      mods.control) {
      x = y = 0
      buttonState = 0
      mods.shift = mods.alt = mods.control = mods.meta = false
      callback && callback(0, 0, 0, mods)
    }
  }

  function handleMods (ev) {
    if (updateMods(ev)) {
      callback && callback(buttonState, x, y, mods)
    }
  }

  function handleMouseMove (ev) {
    if (mouse.buttons(ev) === 0) {
      handleEvent(0, ev)
    } else {
      handleEvent(buttonState, ev)
    }
  }

  function handleMouseDown (ev) {
    handleEvent(buttonState | mouse.buttons(ev), ev)
  }

  function handleMouseUp (ev) {
    handleEvent(buttonState & ~mouse.buttons(ev), ev)
  }

  function attachListeners () {
    if (attached) {
      return
    }
    attached = true

    element.addEventListener('mousemove', handleMouseMove)

    element.addEventListener('mousedown', handleMouseDown)

    element.addEventListener('mouseup', handleMouseUp)

    element.addEventListener('mouseleave', clearState)
    element.addEventListener('mouseenter', clearState)
    element.addEventListener('mouseout', clearState)
    element.addEventListener('mouseover', clearState)

    element.addEventListener('blur', handleBlur)

    element.addEventListener('keyup', handleMods)
    element.addEventListener('keydown', handleMods)
    element.addEventListener('keypress', handleMods)

    if (element !== window) {
      window.addEventListener('blur', handleBlur)

      window.addEventListener('keyup', handleMods)
      window.addEventListener('keydown', handleMods)
      window.addEventListener('keypress', handleMods)
    }
  }

  function detachListeners () {
    if (!attached) {
      return
    }
    attached = false

    element.removeEventListener('mousemove', handleMouseMove)

    element.removeEventListener('mousedown', handleMouseDown)

    element.removeEventListener('mouseup', handleMouseUp)

    element.removeEventListener('mouseleave', clearState)
    element.removeEventListener('mouseenter', clearState)
    element.removeEventListener('mouseout', clearState)
    element.removeEventListener('mouseover', clearState)

    element.removeEventListener('blur', handleBlur)

    element.removeEventListener('keyup', handleMods)
    element.removeEventListener('keydown', handleMods)
    element.removeEventListener('keypress', handleMods)

    if (element !== window) {
      window.removeEventListener('blur', handleBlur)

      window.removeEventListener('keyup', handleMods)
      window.removeEventListener('keydown', handleMods)
      window.removeEventListener('keypress', handleMods)
    }
  }

  // Attach listeners
  attachListeners()

  var result = {
    element: element
  }

  Object.defineProperties(result, {
    enabled: {
      get: function () { return attached },
      set: function (f) {
        if (f) {
          attachListeners()
        } else {
          detachListeners()
        }
      },
      enumerable: true
    },
    buttons: {
      get: function () { return buttonState },
      enumerable: true
    },
    x: {
      get: function () { return x },
      enumerable: true
    },
    y: {
      get: function () { return y },
      enumerable: true
    },
    mods: {
      get: function () { return mods },
      enumerable: true
    }
  })

  return result
}


/***/ }),
/* 77 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function mouseButtons(ev) {
  if(typeof ev === 'object') {
    if('buttons' in ev) {
      return ev.buttons
    } else if('which' in ev) {
      var b = ev.which
      if(b === 2) {
        return 4
      } else if(b === 3) {
        return 2
      } else if(b > 0) {
        return 1<<(b-1)
      }
    } else if('button' in ev) {
      var b = ev.button
      if(b === 1) {
        return 4
      } else if(b === 2) {
        return 2
      } else if(b >= 0) {
        return 1<<b
      }
    }
  }
  return 0
}
exports.buttons = mouseButtons

function mouseElement(ev) {
  return ev.target || ev.srcElement || window
}
exports.element = mouseElement

function mouseRelativeX(ev) {
  if(typeof ev === 'object') {
    if('offsetX' in ev) {
      return ev.offsetX
    }
    var target = mouseElement(ev)
    var bounds = target.getBoundingClientRect()
    return ev.clientX - bounds.left
  }
  return 0
}
exports.x = mouseRelativeX

function mouseRelativeY(ev) {
  if(typeof ev === 'object') {
    if('offsetY' in ev) {
      return ev.offsetY
    }
    var target = mouseElement(ev)
    var bounds = target.getBoundingClientRect()
    return ev.clientY - bounds.top
  }
  return 0
}
exports.y = mouseRelativeY


/***/ }),
/* 78 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var toPX = __webpack_require__(79)

module.exports = mouseWheelListen

function mouseWheelListen(element, callback, noScroll) {
  if(typeof element === 'function') {
    noScroll = !!callback
    callback = element
    element = window
  }
  var lineHeight = toPX('ex', element)
  var listener = function(ev) {
    if(noScroll) {
      ev.preventDefault()
    }
    var dx = ev.deltaX || 0
    var dy = ev.deltaY || 0
    var dz = ev.deltaZ || 0
    var mode = ev.deltaMode
    var scale = 1
    switch(mode) {
      case 1:
        scale = lineHeight
      break
      case 2:
        scale = window.innerHeight
      break
    }
    dx *= scale
    dy *= scale
    dz *= scale
    if(dx || dy || dz) {
      return callback(dx, dy, dz, ev)
    }
  }
  element.addEventListener('wheel', listener)
  return listener
}


/***/ }),
/* 79 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var parseUnit = __webpack_require__(80)

module.exports = toPX

var PIXELS_PER_INCH = getSizeBrutal('in', document.body) // 96


function getPropertyInPX(element, prop) {
  var parts = parseUnit(getComputedStyle(element).getPropertyValue(prop))
  return parts[0] * toPX(parts[1], element)
}

//This brutal hack is needed
function getSizeBrutal(unit, element) {
  var testDIV = document.createElement('div')
  testDIV.style['height'] = '128' + unit
  element.appendChild(testDIV)
  var size = getPropertyInPX(testDIV, 'height') / 128
  element.removeChild(testDIV)
  return size
}

function toPX(str, element) {
  if (!str) return null

  element = element || document.body
  str = (str + '' || 'px').trim().toLowerCase()
  if(element === window || element === document) {
    element = document.body
  }

  switch(str) {
    case '%':  //Ambiguous, not sure if we should use width or height
      return element.clientHeight / 100.0
    case 'ch':
    case 'ex':
      return getSizeBrutal(str, element)
    case 'em':
      return getPropertyInPX(element, 'font-size')
    case 'rem':
      return getPropertyInPX(document.body, 'font-size')
    case 'vw':
      return window.innerWidth/100
    case 'vh':
      return window.innerHeight/100
    case 'vmin':
      return Math.min(window.innerWidth, window.innerHeight) / 100
    case 'vmax':
      return Math.max(window.innerWidth, window.innerHeight) / 100
    case 'in':
      return PIXELS_PER_INCH
    case 'cm':
      return PIXELS_PER_INCH / 2.54
    case 'mm':
      return PIXELS_PER_INCH / 25.4
    case 'pt':
      return PIXELS_PER_INCH / 72
    case 'pc':
      return PIXELS_PER_INCH / 6
    case 'px':
      return 1
  }

  // detect number of units
  var parts = parseUnit(str)
  if (!isNaN(parts[0]) && parts[1]) {
    var px = toPX(parts[1], element)
    return typeof px === 'number' ? parts[0] * px : null
  }

  return null
}


/***/ }),
/* 80 */
/***/ (function(module, exports) {

module.exports = function parseUnit(str, out) {
    if (!out)
        out = [ 0, '' ]

    str = String(str)
    var num = parseFloat(str, 10)
    out[0] = num
    out[1] = str.match(/[\d.\-\+]*\s*(.*)/)[1] || ''
    return out
}

/***/ }),
/* 81 */
/***/ (function(module, exports) {

var rootPosition = { left: 0, top: 0 }

module.exports = mouseEventOffset
function mouseEventOffset (ev, target, out) {
  target = target || ev.currentTarget || ev.srcElement
  if (!Array.isArray(out)) {
    out = [ 0, 0 ]
  }
  var cx = ev.clientX || 0
  var cy = ev.clientY || 0
  var rect = getBoundingClientOffset(target)
  out[0] = cx - rect.left
  out[1] = cy - rect.top
  return out
}

function getBoundingClientOffset (element) {
  if (element === window ||
      element === document ||
      element === document.body) {
    return rootPosition
  } else {
    return element.getBoundingClientRect()
  }
}


/***/ }),
/* 82 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isBrowser = __webpack_require__(83)

function detect() {
	var supported = false

	try {
		var opts = Object.defineProperty({}, 'passive', {
			get: function() {
				supported = true
			}
		})

		window.addEventListener('test', null, opts)
		window.removeEventListener('test', null, opts)
	} catch(e) {
		supported = false
	}

	return supported
}

module.exports = isBrowser && detect()


/***/ }),
/* 83 */
/***/ (function(module, exports) {

module.exports = true;

/***/ }),
/* 84 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_gl_matrix__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__globals__ = __webpack_require__(4);


var activeProgram = null;
class Shader {
    constructor(type, source) {
        this.shader = __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].createShader(type);
        __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].shaderSource(this.shader, source);
        __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].compileShader(this.shader);
        if (!__WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].getShaderParameter(this.shader, __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].COMPILE_STATUS)) {
            throw __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].getShaderInfoLog(this.shader);
        }
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Shader;

;
class ShaderProgram {
    constructor(shaders) {
        this.prog = __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].createProgram();
        for (let shader of shaders) {
            __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].attachShader(this.prog, shader.shader);
        }
        __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].linkProgram(this.prog);
        if (!__WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].getProgramParameter(this.prog, __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].LINK_STATUS)) {
            throw __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].getProgramInfoLog(this.prog);
        }
        this.attrPos = __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].getAttribLocation(this.prog, "vs_Pos");
        this.attrNor = __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].getAttribLocation(this.prog, "vs_Nor");
        this.attrCol = __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].getAttribLocation(this.prog, "vs_Col");
        this.attrInfo = __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].getAttribLocation(this.prog, "vs_Info");
        this.attrTranslate = __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].getAttribLocation(this.prog, "vs_Translate");
        this.attrBlockInfo = __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].getAttribLocation(this.prog, "vs_BlockInfo");
        this.attrRotate = __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].getAttribLocation(this.prog, "vs_Rotate");
        this.attrScale = __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].getAttribLocation(this.prog, "vs_Scale");
        this.attrAdjustment = __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].getAttribLocation(this.prog, "vs_Adjustment");
        this.unifModel = __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].getUniformLocation(this.prog, "u_Model");
        this.unifModelInvTr = __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].getUniformLocation(this.prog, "u_ModelInvTr");
        this.unifViewProj = __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].getUniformLocation(this.prog, "u_ViewProj");
        this.unifPlanePos = __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].getUniformLocation(this.prog, "u_PlanePos");
        this.unifDisplayOptions = __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].getUniformLocation(this.prog, "u_DisplayOptions");
        this.unifCityInfo = __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].getUniformLocation(this.prog, "u_CityInfo");
        this.unifWhiteStoneSampler = __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].getUniformLocation(this.prog, "u_WhiteStoneSampler");
        this.unifPavementSampler = __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].getUniformLocation(this.prog, "u_PavementSampler");
    }
    use() {
        if (activeProgram !== this.prog) {
            __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].useProgram(this.prog);
            activeProgram = this.prog;
        }
    }
    // Bind the given Texture to the given texture unit
    bindTexToUnit(handleName, tex, unit) {
        this.use();
        __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].activeTexture(__WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].TEXTURE0 + unit);
        tex.bindTex();
        __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].uniform1i(handleName, unit);
    }
    setModelMatrix(model) {
        this.use();
        if (this.unifModel !== -1) {
            __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].uniformMatrix4fv(this.unifModel, false, model);
        }
        if (this.unifModelInvTr !== -1) {
            let modelinvtr = __WEBPACK_IMPORTED_MODULE_0_gl_matrix__["a" /* mat4 */].create();
            __WEBPACK_IMPORTED_MODULE_0_gl_matrix__["a" /* mat4 */].transpose(modelinvtr, model);
            __WEBPACK_IMPORTED_MODULE_0_gl_matrix__["a" /* mat4 */].invert(modelinvtr, modelinvtr);
            __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].uniformMatrix4fv(this.unifModelInvTr, false, modelinvtr);
        }
    }
    setViewProjMatrix(vp) {
        this.use();
        if (this.unifViewProj !== -1) {
            __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].uniformMatrix4fv(this.unifViewProj, false, vp);
        }
    }
    setPlanePos(pos) {
        this.use();
        if (this.unifPlanePos !== -1) {
            __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].uniform2fv(this.unifPlanePos, pos);
        }
    }
    setDisplayOptions(options) {
        this.use();
        if (this.unifDisplayOptions !== -1) {
            __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].uniform4fv(this.unifDisplayOptions, options);
        }
    }
    setCityInfo(options) {
        this.use();
        if (this.unifCityInfo !== -1) {
            __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].uniform4fv(this.unifCityInfo, __WEBPACK_IMPORTED_MODULE_0_gl_matrix__["d" /* vec4 */].fromValues(options.cityRadius, options.cityHeight, 0, 0));
        }
    }
    draw(d) {
        this.use();
        //this.setPavementTexture();
        if (this.attrPos != -1 && d.bindPos()) {
            __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].enableVertexAttribArray(this.attrPos);
            __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].vertexAttribPointer(this.attrPos, 4, __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].FLOAT, false, 0, 0);
            __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].vertexAttribDivisor(this.attrPos, 0);
        }
        if (this.attrNor != -1 && d.bindNor()) {
            __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].enableVertexAttribArray(this.attrNor);
            __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].vertexAttribPointer(this.attrNor, 4, __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].FLOAT, false, 0, 0);
            __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].vertexAttribDivisor(this.attrNor, 0);
        }
        if (this.attrInfo != -1 && d.bindInfo()) {
            __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].enableVertexAttribArray(this.attrInfo);
            __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].vertexAttribPointer(this.attrInfo, 4, __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].FLOAT, false, 0, 0);
            __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].vertexAttribDivisor(this.attrInfo, 0);
        }
        if (this.attrCol != -1 && d.bindCol()) {
            __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].enableVertexAttribArray(this.attrCol);
            __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].vertexAttribPointer(this.attrCol, 4, __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].FLOAT, false, 0, 0);
            __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].vertexAttribDivisor(this.attrCol, 1);
        }
        if (this.attrTranslate != -1 && d.bindTranslate()) {
            __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].enableVertexAttribArray(this.attrTranslate);
            __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].vertexAttribPointer(this.attrTranslate, 4, __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].FLOAT, false, 0, 0);
            __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].vertexAttribDivisor(this.attrTranslate, 1);
        }
        if (this.attrBlockInfo != -1 && d.bindBlockInfo()) {
            __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].enableVertexAttribArray(this.attrBlockInfo);
            __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].vertexAttribPointer(this.attrBlockInfo, 4, __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].FLOAT, false, 0, 0);
            __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].vertexAttribDivisor(this.attrBlockInfo, 1);
        }
        if (this.attrRotate != -1 && d.bindRotate()) {
            __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].enableVertexAttribArray(this.attrRotate);
            __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].vertexAttribPointer(this.attrRotate, 4, __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].FLOAT, false, 0, 0);
            __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].vertexAttribDivisor(this.attrRotate, 1);
        }
        if (this.attrScale != -1 && d.bindScale()) {
            __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].enableVertexAttribArray(this.attrScale);
            __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].vertexAttribPointer(this.attrScale, 4, __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].FLOAT, false, 0, 0);
            __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].vertexAttribDivisor(this.attrScale, 1);
        }
        if (this.attrAdjustment != -1 && d.bindAdjustment()) {
            __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].enableVertexAttribArray(this.attrAdjustment);
            __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].vertexAttribPointer(this.attrAdjustment, 4, __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].FLOAT, false, 0, 0);
            __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].vertexAttribDivisor(this.attrAdjustment, 1);
        }
        d.bindIdx();
        __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].drawElementsInstanced(d.drawMode(), d.elemCount(), __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].UNSIGNED_INT, 0, d.numInstances);
        if (this.attrPos != -1)
            __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].disableVertexAttribArray(this.attrPos);
        if (this.attrNor != -1)
            __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].disableVertexAttribArray(this.attrNor);
        if (this.attrCol != -1)
            __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].disableVertexAttribArray(this.attrCol);
        if (this.attrTranslate != -1)
            __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].disableVertexAttribArray(this.attrTranslate);
        if (this.attrInfo != -1)
            __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].disableVertexAttribArray(this.attrInfo);
        if (this.attrBlockInfo != -1)
            __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].disableVertexAttribArray(this.attrBlockInfo);
        if (this.attrRotate != -1)
            __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].disableVertexAttribArray(this.attrRotate);
        if (this.attrScale != -1)
            __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].disableVertexAttribArray(this.attrScale);
        if (this.attrAdjustment != -1)
            __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].disableVertexAttribArray(this.attrAdjustment);
    }
}
;
/* harmony default export */ __webpack_exports__["b"] = (ShaderProgram);


/***/ }),
/* 85 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export TerrainType */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_gl_matrix__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__noise_noise__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__road_roads__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__utils_vec_math__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__road_turtle__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__building_building__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__noise_random__ = __webpack_require__(5);







var TerrainType;
(function (TerrainType) {
    TerrainType[TerrainType["WATER"] = 0] = "WATER";
    TerrainType[TerrainType["LAND"] = 1] = "LAND";
    TerrainType[TerrainType["COAST"] = 2] = "COAST";
    TerrainType[TerrainType["MOUNTAIN"] = 3] = "MOUNTAIN";
    TerrainType[TerrainType["SPUR"] = 4] = "SPUR";
})(TerrainType || (TerrainType = {}));
class GridPart {
    constructor() {
        this.minElevation = 0;
        this.avgDensity = 0;
        this.roadSegmentIds = [];
        this.roadIntersectionIds = [];
        this.containsStreet = false;
        this.containsHighway = false;
        this.hasBuilding = false;
    }
}
/* unused harmony export GridPart */

/**
 * Class which represents the terrain which can be calculated once
 */
class Terrain {
    constructor() {
        //the size of the grid (i.e number of squares in our grid representing the terrain).
        this.gridSize = __WEBPACK_IMPORTED_MODULE_0_gl_matrix__["b" /* vec2 */].fromValues(500, 500);
        //the seed to generate the random elevation generation
        this.elevationSeed = __WEBPACK_IMPORTED_MODULE_0_gl_matrix__["b" /* vec2 */].fromValues(122.323, 897.9855);
        this.populationSeed = __WEBPACK_IMPORTED_MODULE_0_gl_matrix__["b" /* vec2 */].fromValues(97.9676, 85.959);
        //the elevation lower than which terrain is water
        this.waterLevel = 0.4;
        this.landLevel = 0.43;
        this.numPopulationPoints = __WEBPACK_IMPORTED_MODULE_0_gl_matrix__["b" /* vec2 */].fromValues(3, 4);
        //seed for the road
        this.roadSeed = 1;
        //highway segment lenght for roads
        this.highwaySegmentLength = 12;
        //hightway max turn angle
        this.highwayMaxTurnAngle = Math.PI / 18;
        //number of times to iterate the highway lsystem
        this.highwayIterations = 3;
        this.streetSegmentLength = 8;
        this.streetIterations = 5;
        this.buildings = [];
        this.numBuildings = 1000;
        this.buildingSeed = 1;
    }
    init() {
        this.initElevations();
        this.initNormals();
        //this.initPopulation();
        this.initGridParts();
        //this.initRoads();
        //this.initBuildings();
    }
    /**
     * Initialize the elevation grid
     */
    initElevations() {
        this.elevations = [];
        for (let x = 0; x <= this.gridSize[0]; x++) {
            this.elevations.push([]);
            for (let z = 0; z <= this.gridSize[1]; z++) {
                //let y = Noise.fbm2to1(vec2.fromValues(x * 5 / this.gridSize[0], z * 5/ this.gridSize[1]), this.elevationSeed);
                this.elevations[x].push(0);
            }
        }
    }
    /**
     * Initialize the normal value for each point in our grid
     * should be called after initialization of elevations
     */
    initNormals() {
        this.normals = [];
        for (let x = 0; x <= this.gridSize[0]; x++) {
            this.normals.push([]);
            for (let z = 0; z <= this.gridSize[1]; z++) {
                //get the points to the left and right and above and below this point
                let startX = x - 1;
                let endX = x + 1;
                let startZ = z - 1;
                let endZ = z + 1;
                //adjust for start and end row positions that don't have left/right/up/down points
                if (x == 0)
                    startX = 0;
                if (x == this.gridSize[0])
                    endX = x;
                if (z == 0)
                    startZ = 0;
                if (z == this.gridSize[1])
                    endZ = z;
                //get the four surrounding points
                let xPoint1 = __WEBPACK_IMPORTED_MODULE_0_gl_matrix__["c" /* vec3 */].fromValues(startX, this.elevations[startX][z], z);
                let xPoint2 = __WEBPACK_IMPORTED_MODULE_0_gl_matrix__["c" /* vec3 */].fromValues(endX, this.elevations[endX][z], z);
                let zPoint1 = __WEBPACK_IMPORTED_MODULE_0_gl_matrix__["c" /* vec3 */].fromValues(x, this.elevations[x][startZ], startZ);
                let zPoint2 = __WEBPACK_IMPORTED_MODULE_0_gl_matrix__["c" /* vec3 */].fromValues(x, this.elevations[x][endZ], endZ);
                //get the lines from the two points
                let lineX = __WEBPACK_IMPORTED_MODULE_0_gl_matrix__["c" /* vec3 */].create();
                __WEBPACK_IMPORTED_MODULE_0_gl_matrix__["c" /* vec3 */].subtract(lineX, xPoint2, xPoint1);
                let lineZ = __WEBPACK_IMPORTED_MODULE_0_gl_matrix__["c" /* vec3 */].create();
                __WEBPACK_IMPORTED_MODULE_0_gl_matrix__["c" /* vec3 */].subtract(lineZ, zPoint2, zPoint1);
                let normal = __WEBPACK_IMPORTED_MODULE_0_gl_matrix__["c" /* vec3 */].create();
                __WEBPACK_IMPORTED_MODULE_0_gl_matrix__["c" /* vec3 */].cross(normal, lineX, lineZ);
                this.normals[x].push(normal);
            }
        }
    }
    /**
     * Initialize the population density for the grid
     */
    initPopulation() {
        this.populationPoints = __WEBPACK_IMPORTED_MODULE_1__noise_noise__["a" /* default */].generateWorleyPoints2d(this.numPopulationPoints, this.populationSeed);
        this.populationDensities = [];
        for (let x = 0; x <= this.gridSize[0]; x++) {
            this.populationDensities.push([]);
            for (let z = 0; z <= this.gridSize[1]; z++) {
                let pos = __WEBPACK_IMPORTED_MODULE_0_gl_matrix__["b" /* vec2 */].fromValues(x, z);
                this.populationDensities[x].push(this.getPopulationDensity(pos));
            }
        }
    }
    /**
     * loop through grid and calculate min elevation and avg density
     */
    initGridParts() {
        this.gridParts = [];
        for (let i = 0; i < this.gridSize[0]; i++) {
            this.gridParts.push([]);
            for (let j = 0; j < this.gridSize[1]; j++) {
                this.gridParts[i].push(new GridPart);
                let minElevation = Math.min(this.elevations[i][j], this.elevations[i + 1][j], this.elevations[i][j + 1], this.elevations[i + 1][j + 1]);
                this.setGridPartAttribute(i, j, 'minElevation', minElevation);
                // let avgDensity = (
                //   this.populationDensities[i][j] +
                //   this.populationDensities[i+1][j] +
                //   this.populationDensities[i][j+1] +
                //   this.populationDensities[i+1][j+1]
                // )/4;
                // this.setGridPartAttribute(i, j, 'avgDensity', avgDensity);
            }
        }
    }
    initRoads() {
        //initialize roads
        this.roads = new __WEBPACK_IMPORTED_MODULE_2__road_roads__["a" /* default */](this.highwayIterations, {
            seed: this.roadSeed,
            terrain: this,
            highwaySegmentLength: this.highwaySegmentLength,
            highwayMaxTurnAngle: this.highwayMaxTurnAngle,
            streetSegmentLength: this.streetSegmentLength,
            streetIterations: this.streetIterations
        });
        this.roads.runExpansionIterations(this.highwayIterations);
        this.roads.runDrawRules();
        // console.log(this.gridParts[350][353]);
        // for(let i = 0; i < this.gridParts[350][353].roadSegmentIds.length; i++) {
        //   let roadSegment = this.roads.segments[this.gridParts[350][353].roadSegmentIds[i]];
        //   console.log(this.roads.intersections[roadSegment.startIntersectionId]);
        //   console.log(this.roads.intersections[roadSegment.endIntersectionId]);
        // }
        this.roads.addNeighborhoods();
    }
    initBuildings() {
        this.selectBuildingLocations();
    }
    gridPosToWorlyPos(gridPos) {
        let worleyX = gridPos[0] * this.numPopulationPoints[0] / this.gridSize[0];
        let worleyY = gridPos[1] * this.numPopulationPoints[1] / this.gridSize[1];
        let worleyPos = __WEBPACK_IMPORTED_MODULE_0_gl_matrix__["b" /* vec2 */].fromValues(worleyX, worleyY);
        return worleyPos;
    }
    /**
     * Get the population density at a particular gridPosition
     * @param gridPos
     */
    getPopulationDensity(gridPos) {
        if (!this.positionOnLand(gridPos))
            return 0;
        let worleyPos = this.gridPosToWorlyPos(gridPos);
        let closestPopPoint = __WEBPACK_IMPORTED_MODULE_1__noise_noise__["a" /* default */].getClosestWorleyPoint2d(worleyPos, this.numPopulationPoints, this.populationPoints);
        if (closestPopPoint) {
            return Math.pow((1 - __WEBPACK_IMPORTED_MODULE_0_gl_matrix__["b" /* vec2 */].dist(worleyPos, closestPopPoint)) / 1.414, 3);
        }
        return 0;
    }
    checkGridPosOutOfBounds(gridPos) {
        //check if we are in bounds
        return (gridPos[0] < 0 ||
            gridPos[1] < 0 ||
            gridPos[0] >= this.gridSize[0] ||
            gridPos[1] >= this.gridSize[1]);
    }
    hasNearbyStreet(gridPos) {
        if (this.checkGridPosOutOfBounds(gridPos))
            return false;
        let blockRadius = this.streetSegmentLength * 0.5;
        let minX = Math.max(0, gridPos[0] - blockRadius);
        let minZ = Math.max(0, gridPos[1] - blockRadius);
        let maxX = Math.min(this.gridSize[0] - 1, gridPos[0] + blockRadius);
        let maxZ = Math.min(this.gridSize[1] - 1, gridPos[1] + blockRadius);
        for (let i = minX; i <= maxX; i++) {
            for (let j = minZ; j <= maxZ; j++) {
                if (this.gridParts[i][j].containsStreet == true)
                    return true;
            }
        }
        return false;
    }
    notToCloseToRoad(gridPos) {
        if (this.checkGridPosOutOfBounds(gridPos))
            return false;
        let blockRadius = 1;
        let minX = Math.max(0, gridPos[0] - blockRadius);
        let minZ = Math.max(0, gridPos[1] - blockRadius);
        let maxX = Math.min(this.gridSize[0] - 1, gridPos[0] + blockRadius);
        let maxZ = Math.min(this.gridSize[1] - 1, gridPos[1] + blockRadius);
        for (let i = minX; i <= maxX; i++) {
            for (let j = minZ; j <= maxZ; j++) {
                if (this.gridParts[i][j].containsStreet == true)
                    return false;
                if (this.gridParts[i][j].containsHighway == true)
                    return false;
            }
        }
        return true;
    }
    /**
     *
     * @param gridPos
     */
    getBuildingSuitability(gridPos) {
        if (this.checkGridPosOutOfBounds(gridPos))
            return false;
        return (this.hasNearbyStreet(gridPos)
            && this.notToCloseToRoad(gridPos)
            && this.gridParts[gridPos[0]][gridPos[1]].roadSegmentIds.length == 0
            && this.positionOnLand(gridPos));
    }
    /**
     * Get the elevation at a particular position
     * @param gridPos
     * @todo interpolate between the four neighboring grid values
     */
    positionElevation(gridPos) {
        let gridIndex = this.gridPosToGridIndex(gridPos);
        return this.elevations[gridIndex[0]][gridIndex[1]];
    }
    /**
     * Get the type of terrain at the given position
     * @param gridPos
     */
    positionTerrainType(gridPos) {
        let elevation = this.positionElevation(gridPos);
        if (elevation < this.waterLevel) {
            return TerrainType.WATER;
        }
        else if (elevation < this.landLevel) {
            return TerrainType.COAST;
        }
        return TerrainType.LAND;
    }
    /**
     * Check if the given position is on the water
     * @param gridPos
     */
    positionOnWater(gridPos) {
        return this.positionTerrainType(gridPos) === TerrainType.WATER;
    }
    /**
     * Check if the given positio is on the land
     * @param gridPos
     */
    positionOnLand(gridPos) {
        return this.positionTerrainType(gridPos) === TerrainType.LAND;
    }
    gridPosToGridIndex(gridPos) {
        let gridX = Math.floor(gridPos[0]);
        let gridY = Math.floor(gridPos[1]);
        if (gridX < 0)
            gridX = 0;
        if (gridY < 0)
            gridY = 0;
        if (gridX >= this.gridSize[0])
            gridX = this.gridSize[0] - 1;
        if (gridY >= this.gridSize[0])
            gridY = this.gridSize[1] - 1;
        return __WEBPACK_IMPORTED_MODULE_0_gl_matrix__["b" /* vec2 */].fromValues(gridX, gridY);
    }
    setGridPartAttribute(i, j, attribute, value) {
        switch (attribute) {
            case 'minElevation':
                this.gridParts[i][j].minElevation = value;
                break;
            case 'avgDensity':
                this.gridParts[i][j].avgDensity = value;
                break;
        }
    }
    /**
     * Add a road segment
     * @param segmentId
     */
    addRoadSegment(segmentId) {
        let gridPos = this.getSegmentGridPositions(segmentId);
        for (let i = 0; i < gridPos.length; i++) {
            this.gridParts[gridPos[i][0]][gridPos[i][1]].roadSegmentIds.push(segmentId);
            if (this.roads.segments[segmentId].roadType == __WEBPACK_IMPORTED_MODULE_4__road_turtle__["a" /* RoadType */].STREET) {
                this.gridParts[gridPos[i][0]][gridPos[i][1]].containsStreet = true;
            }
            if (this.roads.segments[segmentId].roadType == __WEBPACK_IMPORTED_MODULE_4__road_turtle__["a" /* RoadType */].HIGHWAY) {
                this.gridParts[gridPos[i][0]][gridPos[i][1]].containsHighway = true;
            }
        }
    }
    /**
     * Get the gridPositions through which the road passes
     * @param segmentId
     */
    getSegmentGridPositions(segmentId) {
        let gridPos = [];
        let segment = this.roads.segments[segmentId];
        let p1 = this.roads.intersections[segment.startIntersectionId].pos;
        let p2 = this.roads.intersections[segment.endIntersectionId].pos;
        //loop through all the possible grid positions
        let minX = Math.floor(Math.min(p1[0], p2[0], this.gridSize[0]));
        let maxX = Math.floor(Math.max(p1[0], p2[0], 0));
        let minZ = Math.floor(Math.min(p1[1], p2[1], this.gridSize[1]));
        let maxZ = Math.floor(Math.max(p1[1], p2[1], 0));
        if (minX < 0)
            minX = 0;
        if (minZ < 0)
            minZ = 0;
        if (maxX >= this.gridSize[0])
            maxX = this.gridSize[0] - 1;
        if (maxZ >= this.gridSize[1])
            maxZ = this.gridSize[1] - 1;
        for (let i = minX; i <= maxX; i++) {
            for (let j = minZ; j <= maxZ; j++) {
                //console.log(i + '-' + j);
                //check for intersections
                let g1 = __WEBPACK_IMPORTED_MODULE_0_gl_matrix__["b" /* vec2 */].fromValues(i, j);
                let g2 = __WEBPACK_IMPORTED_MODULE_0_gl_matrix__["b" /* vec2 */].fromValues(i, j + 1);
                let g3 = __WEBPACK_IMPORTED_MODULE_0_gl_matrix__["b" /* vec2 */].fromValues(i + 1, j);
                let g4 = __WEBPACK_IMPORTED_MODULE_0_gl_matrix__["b" /* vec2 */].fromValues(i + 1, j + 1);
                if (__WEBPACK_IMPORTED_MODULE_3__utils_vec_math__["a" /* VecMath */].intersectionTest(g1, g2, p1, p2) !== undefined ||
                    __WEBPACK_IMPORTED_MODULE_3__utils_vec_math__["a" /* VecMath */].intersectionTest(g1, g3, p1, p2) !== undefined ||
                    __WEBPACK_IMPORTED_MODULE_3__utils_vec_math__["a" /* VecMath */].intersectionTest(g3, g4, p1, p2) !== undefined ||
                    __WEBPACK_IMPORTED_MODULE_3__utils_vec_math__["a" /* VecMath */].intersectionTest(g2, g4, p1, p2) !== undefined) {
                    gridPos.push(__WEBPACK_IMPORTED_MODULE_0_gl_matrix__["b" /* vec2 */].fromValues(i, j));
                }
            }
        }
        return gridPos;
    }
    /**
     * set the building locations
     */
    selectBuildingLocations() {
        let possibleSet = new Set();
        //get the possible building locations
        for (let i = 0; i < this.gridSize[0] - 1; i++) {
            for (let j = 0; j < this.gridSize[1] - 1; j++) {
                if (this.getBuildingSuitability(__WEBPACK_IMPORTED_MODULE_0_gl_matrix__["b" /* vec2 */].fromValues(i, j))) {
                    possibleSet.add(i.toString() + '-' + j.toString());
                }
            }
        }
        for (let x = 0; x < this.numBuildings; x++) {
            if (possibleSet.size == 0)
                break;
            let coords = this.getRandomSetValue(2.2 + x, possibleSet).split('-');
            // this.createBuilding(
            //   parseInt(coords[0]),
            //   parseInt(coords[1]),
            //   x,
            //   possibleSet
            // );
        }
        let numBuildings = 0;
        for (let i = 0; i < numBuildings; i++) {
            this.buildings.push(new __WEBPACK_IMPORTED_MODULE_5__building_building__["a" /* Building */]({
                pos: __WEBPACK_IMPORTED_MODULE_0_gl_matrix__["c" /* vec3 */].fromValues(250 - numBuildings * 10 + i * 20, 0, 250),
                rotation: __WEBPACK_IMPORTED_MODULE_0_gl_matrix__["c" /* vec3 */].fromValues(0, 0, 0),
                footprint: __WEBPACK_IMPORTED_MODULE_0_gl_matrix__["c" /* vec3 */].fromValues(10, 10, 10),
                seed: __WEBPACK_IMPORTED_MODULE_6__noise_random__["a" /* default */].random2to1(__WEBPACK_IMPORTED_MODULE_0_gl_matrix__["b" /* vec2 */].fromValues(i, 34.32), __WEBPACK_IMPORTED_MODULE_0_gl_matrix__["b" /* vec2 */].fromValues(this.buildingSeed, 2.2))
            }));
        }
    }
    getRandomSetValue(seed, set) {
        let index = __WEBPACK_IMPORTED_MODULE_6__noise_random__["a" /* default */].randomInt(set.size, seed);
        let count = 0;
        let val;
        for (val of set) {
            if (count == index)
                return val;
            count++;
        }
        return val;
    }
    createBuilding(x, z, seed, set) {
        let gridPart = this.gridParts[x][z];
        let maxFootprint = gridPart.avgDensity * this.streetSegmentLength * 10;
        let pos = __WEBPACK_IMPORTED_MODULE_0_gl_matrix__["c" /* vec3 */].fromValues(x, 2.5, z);
        let footprint = __WEBPACK_IMPORTED_MODULE_0_gl_matrix__["c" /* vec3 */].fromValues(1, 1, 1);
        //remove start from the possible
        set.delete(x.toString() + '-' + z.toString());
        this.expandBuildingFootprint(pos, footprint, set, maxFootprint, seed);
        //adjust the height
        footprint[1] = maxFootprint * 3 / 10;
        this.buildings.push(new __WEBPACK_IMPORTED_MODULE_5__building_building__["a" /* Building */]({
            pos: pos,
            rotation: __WEBPACK_IMPORTED_MODULE_0_gl_matrix__["c" /* vec3 */].fromValues(0, 0, 0),
            footprint: footprint,
            seed: seed
        }));
        this.createBuildingBuffer(set, pos, footprint);
    }
    /**
     * Try to exapnd the building in the direction specified by the seed
     * @param startPos - the starting position of the building
     * @param footprint - the footprint to expand
     * @param possibleSet - the set of
     * @param maxFootprint - max size that one dimension of the expansion can get
     * @param seed - integer value
     */
    expandBuildingFootprint(startPos, footprint, possibleSet, maxFootprint, seed) {
        let expandedX = true;
        //try expanding x
        let xVal = startPos[0] + footprint[0];
        if (seed % 2 == 1)
            xVal = startPos[0] - 1;
        //check to make sure all values in expanded column are possible
        for (let z = startPos[2]; z < startPos[2] + footprint[2]; z++) {
            if (!possibleSet.has(xVal.toString() + '-' + z.toString()) || !this.getBuildingSuitability(__WEBPACK_IMPORTED_MODULE_0_gl_matrix__["b" /* vec2 */].fromValues(xVal, z))) {
                expandedX = false;
            }
        }
        if (expandedX) {
            //adjust footprint
            footprint[0]++;
            //adjust startpos if necessary
            if (seed % 2 == 1)
                startPos[0]--;
            //remove row from the possibilities
            for (let z = startPos[2]; z < footprint[2]; z++) {
                possibleSet.delete(xVal.toString() + '-' + z.toString());
            }
        }
        //try expanding y
        let expandedZ = true;
        //try expanding y
        let zVal = startPos[2] + footprint[2];
        if (seed % 4 < 2)
            zVal = startPos[2] - 1;
        //check to make sure all values in expanded column are possible
        for (let x = startPos[0]; x < startPos[0] + footprint[0]; x++) {
            if (!possibleSet.has(x.toString() + '-' + zVal.toString()) || !this.getBuildingSuitability(__WEBPACK_IMPORTED_MODULE_0_gl_matrix__["b" /* vec2 */].fromValues(x, zVal))) {
                expandedZ = false;
            }
        }
        if (expandedZ) {
            //adjust footprint
            footprint[2]++;
            //adjust startpos if necessary
            if (seed % 4 < 2)
                startPos[0]--;
            //remove row from the possibilities
            for (let x = startPos[0]; x < footprint[0]; x++) {
                possibleSet.delete(x.toString() + '-' + zVal.toString());
            }
        }
        //run again if we just expanded and still have room for more
        if ((expandedX && footprint[0] < maxFootprint)
            || (expandedX && footprint[0] < maxFootprint))
            this.expandBuildingFootprint(startPos, footprint, possibleSet, maxFootprint, seed);
    }
    /**
     * Remove the positions around the building footprint from the possible values for the building
     * @param possibleSet -  possible set of building coordinates
     * @param pos - start position of the building
     * @param fooprint - footprint of the building
     */
    createBuildingBuffer(possibleSet, pos, fooprint) {
        for (let x = pos[0] - 1; x <= pos[0] + fooprint[0]; x++) {
            let z = pos[2] - 1;
            possibleSet.delete(x + '-' + z);
            z = pos[2] + fooprint[2];
            possibleSet.delete(x + '-' + z);
        }
        for (let z = pos[2] - 1; z <= pos[2] + fooprint[2]; z++) {
            let x = pos[0] - 1;
            possibleSet.delete(x + '-' + z);
            x = pos[0] + fooprint[0];
            possibleSet.delete(x + '-' + z);
        }
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Terrain;

//metropolis procedulal modeling.
//clemen deng


/***/ }),
/* 86 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_gl_matrix__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils_vec_math__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__random__ = __webpack_require__(5);



/**
 * Various random functions to help generate noise
 */
class Noise {
    static fbm2to1(p, seed, persistence = 0.5, octaves = 8.0) {
        let total = 0.0;
        for (let i = 0.0; i < octaves; i++) {
            let freq = Math.pow(2.0, i);
            let amp = Math.pow(persistence, i + 1.0);
            total = total + __WEBPACK_IMPORTED_MODULE_2__random__["a" /* default */].interpNoiseRandom2to1(__WEBPACK_IMPORTED_MODULE_1__utils_vec_math__["a" /* VecMath */].multiply2(p, freq), seed) * amp;
        }
        return total;
    }
    static generateWorleyPoints2d(gridSize, seed) {
        let points = [];
        let seed2 = __WEBPACK_IMPORTED_MODULE_0_gl_matrix__["b" /* vec2 */].create();
        __WEBPACK_IMPORTED_MODULE_0_gl_matrix__["b" /* vec2 */].add(seed2, seed, __WEBPACK_IMPORTED_MODULE_0_gl_matrix__["b" /* vec2 */].fromValues(0.2343, 1.232));
        for (let x = 0; x < gridSize[0]; x++) {
            for (let y = 0; y < gridSize[1]; y++) {
                let gridPos = __WEBPACK_IMPORTED_MODULE_0_gl_matrix__["b" /* vec2 */].fromValues(x, y);
                let xOffset = __WEBPACK_IMPORTED_MODULE_2__random__["a" /* default */].random2to1(gridPos, seed);
                let yOffset = __WEBPACK_IMPORTED_MODULE_2__random__["a" /* default */].random2to1(gridPos, seed2);
                points.push(__WEBPACK_IMPORTED_MODULE_0_gl_matrix__["b" /* vec2 */].fromValues(x + xOffset, y + yOffset));
            }
        }
        return points;
    }
    /*
    Determine worley noise for given position and grid size
    - param vec2 pos :      the position to test for
    - param vec2 gridSize:  the size of the grid
    - param vec2 seed:       the random seed
    - return vec2:          the location of the closest worley point
    */
    static getClosestWorleyPoint2d(pos, gridSize, gridPoints) {
        let centerGridX = Math.floor(pos[0]);
        let centerGridY = Math.floor(pos[1]);
        let closestDistance = 3.0;
        let closestWorleyPoint;
        //loop through the 9 grid sections surrouding this one to find the closes worley point
        for (let gridX = -1.0; gridX <= 1.0; gridX += 1.0) {
            for (let gridY = -1.0; gridY <= 1.0; gridY += 1.0) {
                let currentGridX = centerGridX + gridX;
                let currentGridY = centerGridY + gridY;
                //make sure we aren't out of the grid
                if (currentGridX < 0 || currentGridY < 0 || currentGridX >= gridSize[0] || currentGridY >= gridSize[1]) {
                    continue;
                }
                let currentWorleyPoint = gridPoints[currentGridX * gridSize[1] + currentGridY];
                let currentDistance = __WEBPACK_IMPORTED_MODULE_0_gl_matrix__["b" /* vec2 */].dist(pos, currentWorleyPoint);
                if (currentDistance < closestDistance) {
                    closestDistance = currentDistance;
                    closestWorleyPoint = currentWorleyPoint;
                }
            }
        }
        return closestWorleyPoint;
    }
}
/* harmony default export */ __webpack_exports__["a"] = (Noise);


/***/ }),
/* 87 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__lsystem__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__x_rule_x_replace__ = __webpack_require__(96);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__draw_rule_turn_toward_population__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_gl_matrix__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__draw_rule_turn_away_population__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__draw_rule_span_population__ = __webpack_require__(97);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__turtle__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__draw_rule_start_branch__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__constraint_water_constraint__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__constraint_edge_of_map_constraint__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__noise_random__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__constraint_current_roads_constraint__ = __webpack_require__(101);












class Roads extends __WEBPACK_IMPORTED_MODULE_0__lsystem__["b" /* LSystem */] {
    //constructor
    constructor(iterations, options) {
        super(options);
        this.highwayRoadWidth = 0.5;
        this.streetRoadWidth = 0.2;
        this.streetSegmentLength = 8;
        this.streetIterations = 5;
        this.terrain = options.terrain;
        this.seed = options.seed;
        this.streetSegmentLength = options.streetSegmentLength;
        this.streetIterations = options.streetIterations;
        this.initRoadSections();
        this.axiom = '[----FL]FL';
        this.addStandardDrawRules();
        this.addDrawRule('P', new __WEBPACK_IMPORTED_MODULE_2__draw_rule_turn_toward_population__["a" /* TurnTowardPopulation */]({
            seed: this.options.seed,
            terrain: this.options.terrain,
            maxTurnAngle: this.options.highwayMaxTurnAngle
        }));
        this.addDrawRule('p', new __WEBPACK_IMPORTED_MODULE_4__draw_rule_turn_away_population__["a" /* TurnAwayPopulation */]({
            seed: this.options.seed,
            terrain: this.options.terrain
        }));
        this.addDrawRule('S', new __WEBPACK_IMPORTED_MODULE_5__draw_rule_span_population__["a" /* SpanPopulation */]({
            seed: this.options.seed,
            terrain: this.options.terrain
        }));
        this.addDrawRule('[', new __WEBPACK_IMPORTED_MODULE_7__draw_rule_start_branch__["a" /* StartBranch */]({ terrain: this.terrain }));
        this.addXRule('A', new __WEBPACK_IMPORTED_MODULE_1__x_rule_x_replace__["a" /* XReplace */]('FPFPFPFPFPFPF'));
        this.addXRule('L', new __WEBPACK_IMPORTED_MODULE_1__x_rule_x_replace__["a" /* XReplace */]('A[--L]A[++L]A[--L]A[++L]AA[--L]A[++L]A'));
        this.initStartingPos();
        this.turtle.segmentLength = this.options.highwaySegmentLength;
        //add constraints
        let waterConstraint = new __WEBPACK_IMPORTED_MODULE_8__constraint_water_constraint__["a" /* WaterConstraint */]({
            terrain: this.terrain,
            roads: this
        });
        this.addConstraint(waterConstraint);
        let edgeConstraint = new __WEBPACK_IMPORTED_MODULE_9__constraint_edge_of_map_constraint__["a" /* EdgeOfMapConstraint */]({
            terrain: this.terrain,
            roads: this
        });
        this.addConstraint(edgeConstraint);
        let currentRoadsConstraint = new __WEBPACK_IMPORTED_MODULE_11__constraint_current_roads_constraint__["a" /* CurrentRoadsConstraint */]({
            terrain: this.terrain,
            roads: this
        });
        this.addConstraint(currentRoadsConstraint);
    }
    initStartingPos() {
        //get the starting intersection
        let startPos = this.getRoadStartingPos();
        let startIntersection = new __WEBPACK_IMPORTED_MODULE_0__lsystem__["a" /* Intersection */]();
        startIntersection.pos = startPos;
        startIntersection.segmentIds = [];
        this.addIntersection(startIntersection);
        //setup the turtle
        this.turtle.roadType = __WEBPACK_IMPORTED_MODULE_6__turtle__["a" /* RoadType */].HIGHWAY;
        this.turtle.lastIntersectionId = 0;
        this.turtle.pos = startIntersection.pos;
        this.turtle.dir = Math.PI / 2;
    }
    getRoadStartingPos() {
        let startPos = __WEBPACK_IMPORTED_MODULE_3_gl_matrix__["b" /* vec2 */].create();
        let onWater = true;
        let seed = this.seed;
        while (onWater) {
            startPos[0] = this.terrain.gridSize[0] / 4 + __WEBPACK_IMPORTED_MODULE_10__noise_random__["a" /* default */].random1to1(1, __WEBPACK_IMPORTED_MODULE_3_gl_matrix__["b" /* vec2 */].fromValues(seed++, seed++)) * this.terrain.gridSize[0] / 2;
            startPos[1] = this.terrain.gridSize[1] / 4 + __WEBPACK_IMPORTED_MODULE_10__noise_random__["a" /* default */].random1to1(2, __WEBPACK_IMPORTED_MODULE_3_gl_matrix__["b" /* vec2 */].fromValues(seed++, seed++)) * this.terrain.gridSize[1] / 2;
            if (!this.terrain.positionOnWater(startPos)) {
                onWater = false;
            }
        }
        //startPos[0] = this.terrain.gridSize[0] / 2;
        //startPos[1] = this.terrain.gridSize[1] / 2;
        return startPos;
    }
    /**
     * Override the add segment - if the segment is added then we must add to terrain
     * @param startIntersectionId
     * @param endPos
     * @param rotation
     * @param roadType
     */
    addSegment(startIntersectionId, endPos, rotation, roadType) {
        let adj = super.addSegment(startIntersectionId, endPos, rotation, roadType);
        if (adj.added) {
            this.terrain.addRoadSegment(this.segments.length - 1);
        }
        return adj;
    }
    addConstraint(constraint) {
        this.constraints.push(constraint);
    }
    addIntersection(intersection) {
        super.addIntersection(intersection);
        //add the intersection to the appropriate grid section
        //let gridIndex: vec2 = this.terrain.screenPosToGridIndex(intersection.pos);
        //this.roadGrid[gridIndex[0]][gridIndex[1]].intersectionIds.push(this.intersections.length -1);
    }
    //Loop through all of the terrain divisions and create a Raod
    initRoadSections() {
        //loop through the terrain trid
        // this.roadGrid = [];
        // for(let i = 0; i < this.terrain.divisions[0]; i++) {
        //   this.roadGrid.push([]);
        //   for(let j = 0; j < this.terrain.divisions[0]; j++) {
        //     this.roadGrid[i].push(new RoadSection());
        //     this.roadGrid[i][j].terrainSection = this.terrain.sectionGrid[i][j];
        //   }
        // }
    }
    addNeighborhoods() {
        this.axiom = 'FXFFXFXFFX';
        this.addXRule('X', new __WEBPACK_IMPORTED_MODULE_1__x_rule_x_replace__["a" /* XReplace */]('[-FX][FX][+FX]'));
        this.runExpansionIterations(this.streetIterations);
        let numInt = this.intersections.length;
        let numNeighborhoods = 20;
        for (let i = 0; i < numNeighborhoods; i++) {
            let intId = Math.floor(i * numInt / numNeighborhoods);
            this.addNeighborhood(intId, i % 5 * Math.PI / 69);
        }
    }
    addNeighborhood(intersectionId, startDir) {
        this.turtle = new __WEBPACK_IMPORTED_MODULE_6__turtle__["b" /* Turtle */]();
        this.turtle.segmentLength = this.streetSegmentLength;
        this.turtle.roadType = __WEBPACK_IMPORTED_MODULE_6__turtle__["a" /* RoadType */].STREET;
        this.turtle.dir = startDir;
        this.turtle.lastIntersectionId = intersectionId;
        this.turtle.angle = Math.PI / 2;
        this.turtle.pos = this.intersections[intersectionId].pos;
        this.runDrawRules();
    }
    /**
     * Get the ids of the road which intersect the provided segment
     * @param segment
     * @param endPos
     */
    intersectingRoadIds(startPos, endPos) {
        let possible = new Set();
    }
    findNearestSegment(pos, distThreshold) {
        let gridIndex = this.terrain.gridPosToGridIndex(pos);
        let minX = Math.max(0, gridIndex[0] - Math.ceil(distThreshold));
        let maxX = Math.min(this.terrain.gridSize[0] - 1, gridIndex[0] + Math.ceil(distThreshold));
        let minZ = Math.max(0, gridIndex[1] - Math.ceil(distThreshold));
        let maxZ = Math.min(this.terrain.gridSize[1] - 1, gridIndex[1] + Math.ceil(distThreshold));
        let closestDist = 2 * distThreshold * distThreshold;
        let closestId = null;
        for (let x = minX; x < maxX; x++) {
            for (let z = minZ; z < maxZ; z++) {
                let gridPart = this.terrain.gridParts[x][z];
                if (gridPart.roadSegmentIds.length > 0) {
                    let distX = gridIndex[0] - x;
                    let distZ = gridIndex[1] - z;
                    let dist = (distX * distX) + (distZ * distZ);
                    if (dist < closestDist) {
                        closestId = gridPart.roadSegmentIds[0];
                    }
                }
            }
        }
        return closestId;
    }
}
/* harmony default export */ __webpack_exports__["a"] = (Roads);


/***/ }),
/* 88 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export SegmentStatus */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__turtle__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_gl_matrix__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__draw_rule_turn_right__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__draw_rule_turn_left__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__draw_rule_random_angle__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__draw_rule_scale_length__ = __webpack_require__(92);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__draw_rule_scale_angle__ = __webpack_require__(93);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__draw_rule_end_branch__ = __webpack_require__(94);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__draw_rule_draw__ = __webpack_require__(95);









var SegmentStatus;
(function (SegmentStatus) {
    SegmentStatus["OPEN"] = "open";
    SegmentStatus["CLOSED"] = "closed";
})(SegmentStatus || (SegmentStatus = {}));
class Segment {
}
/* unused harmony export Segment */

class Intersection {
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Intersection;

class LSystem {
    //initialize with the options
    constructor(options) {
        //the segments already created
        this.segments = [];
        this.intersections = [];
        //the constraints to check for each prospective segment
        this.constraints = [];
        //the set of expansion rules
        this.xRules = new Map();
        //the set of drawing rules
        this.drawRules = new Map();
        //the current state of the turtle
        this.turtle = new __WEBPACK_IMPORTED_MODULE_0__turtle__["b" /* Turtle */]();
        //the turtle stack
        this.turtleStack = [];
        this.options = options;
        this.curIteration = 0;
    }
    //add an expansion rule
    addXRule(char, rule) {
        this.xRules.set(char, rule);
    }
    addDrawRule(char, rule) {
        this.drawRules.set(char, rule);
    }
    //do one iteration over the string
    iterate(iterations) {
        let nextString = '';
        let params = { iterations: iterations };
        for (let charIndex = 0; charIndex < this.curString.length; charIndex++) {
            let char = this.curString.charAt(charIndex);
            let func = this.xRules.get(char);
            //if rule is found then use
            if (func) {
                //special case for handling drawing
                nextString += func.apply(char, params);
            }
            //if no rule found then just retain the same character
            else {
                nextString += char;
            }
        }
        this.curString = nextString;
        this.curIteration++;
    }
    runExpansionIterations(iterations) {
        this.curString = this.axiom;
        for (let i = 0; i < iterations; i++) {
            this.iterate(i);
        }
    }
    addSegment(startIntersectionId, endPos, rotation, roadType) {
        //create possible segment
        let segment = new Segment();
        let segmentId = this.segments.length;
        segment.startIntersectionId = startIntersectionId;
        segment.roadType = roadType;
        segment.rotation = rotation;
        segment.endIntersectionId = this.intersections.length;
        //do the checks
        for (let i = 0; i < this.constraints.length; i++) {
            //check if constraint fails
            if (!this.constraints[i].checkConstraint(segment, endPos)) {
                //try to adjust it
                let adj = this.constraints[i].attemptAdjustment(segment, endPos);
                if (!adj.added)
                    return adj;
            }
        }
        //add the end segment if we still need to
        if (segment.endIntersectionId == this.intersections.length) {
            let endIntersection = new Intersection();
            endIntersection.pos = endPos;
            endIntersection.segmentIds = [segmentId];
            this.addIntersection(endIntersection);
        }
        this.intersections[startIntersectionId].segmentIds.push(this.segments.length);
        this.segments.push(segment);
        return {
            added: true,
            intersected: false,
            segment: segment
        };
    }
    addIntersection(intersection) {
        this.intersections.push(intersection);
    }
    findNearbyIntersectionId(pos, distThreshold) {
        let closestDist = distThreshold;
        let closestId = null;
        for (let i = 0; i < this.intersections.length; i++) {
            let dist = __WEBPACK_IMPORTED_MODULE_1_gl_matrix__["b" /* vec2 */].dist(pos, this.intersections[i].pos);
            if (dist < closestDist) {
                closestDist = dist;
                closestId = i;
            }
        }
        return closestId;
    }
    setStartPosition() {
        //add the first intersection
        let firstIntersection = new Intersection();
        firstIntersection.segmentIds = [];
        firstIntersection.pos = __WEBPACK_IMPORTED_MODULE_1_gl_matrix__["b" /* vec2 */].fromValues(0, 0);
        this.addIntersection(firstIntersection);
        this.turtle.lastIntersectionId = 0;
    }
    runDrawRules() {
        if (this.intersections.length == 0)
            this.setStartPosition();
        //do the initial scaling
        for (let charIndex = 0; charIndex < this.curString.length; charIndex++) {
            let char = this.curString.charAt(charIndex);
            let func = this.drawRules.get(char);
            //if rule is found then use
            if (func) {
                //check to see if we have an option string for our draw rule
                let option = '';
                //options for the symbol are encloesed in () -- if they exist get the option
                if (this.curString.charAt(charIndex + 1) == '(') {
                    charIndex += 2;
                    while (this.curString.charAt(charIndex) !== ')') {
                        option += this.curString.charAt(charIndex);
                        charIndex++;
                    }
                }
                if (this.turtle.roadType == __WEBPACK_IMPORTED_MODULE_0__turtle__["a" /* RoadType */].HIGHWAY
                    || this.turtle.branchEnded == false
                    || char == ']') {
                    this.turtle = func.draw(this.turtle, this.turtleStack, this.segments, option);
                }
            }
        }
    }
    /**
     * Add the standard rules based off Houdini codes
     */
    addStandardDrawRules() {
        this.addDrawRule('F', new __WEBPACK_IMPORTED_MODULE_8__draw_rule_draw__["a" /* Draw */]({ lsystem: this, seed: 2 }));
        this.addDrawRule('+', new __WEBPACK_IMPORTED_MODULE_2__draw_rule_turn_right__["a" /* TurnRight */]());
        this.addDrawRule('-', new __WEBPACK_IMPORTED_MODULE_3__draw_rule_turn_left__["a" /* TurnLeft */]());
        this.addDrawRule(']', new __WEBPACK_IMPORTED_MODULE_7__draw_rule_end_branch__["a" /* EndBranch */]());
        this.addDrawRule('~', new __WEBPACK_IMPORTED_MODULE_4__draw_rule_random_angle__["a" /* RandomAngle */]({ seed: 1 }));
        this.addDrawRule('"', new __WEBPACK_IMPORTED_MODULE_5__draw_rule_scale_length__["a" /* ScaleLength */]());
        this.addDrawRule(";", new __WEBPACK_IMPORTED_MODULE_6__draw_rule_scale_angle__["a" /* ScaleAngle */]());
    }
}
/* harmony export (immutable) */ __webpack_exports__["b"] = LSystem;



/***/ }),
/* 89 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__base_draw_rule__ = __webpack_require__(1);

class TurnRight extends __WEBPACK_IMPORTED_MODULE_0__base_draw_rule__["a" /* BaseDrawRule */] {
    draw(turtle, turtleStack, segments, options) {
        let angle = turtle.angle;
        if (!isNaN(parseFloat(options))) {
            angle = parseFloat(options);
        }
        turtle.dir -= angle;
        return turtle;
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = TurnRight;



/***/ }),
/* 90 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__base_draw_rule__ = __webpack_require__(1);

class TurnLeft extends __WEBPACK_IMPORTED_MODULE_0__base_draw_rule__["a" /* BaseDrawRule */] {
    draw(turtle, turtleStack, segments, options) {
        let angle = turtle.angle;
        if (!isNaN(parseFloat(options))) {
            angle = parseFloat(options);
        }
        turtle.dir += angle;
        return turtle;
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = TurnLeft;



/***/ }),
/* 91 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__base_draw_rule__ = __webpack_require__(1);

let Prando = __webpack_require__(9).default;
class RandomAngle extends __WEBPACK_IMPORTED_MODULE_0__base_draw_rule__["a" /* BaseDrawRule */] {
    constructor(options) {
        super(options);
        this.prando = new Prando(options.seed);
    }
    draw(turtle, turtleStack, segments, options) {
        //default to the current turtle roll angle
        let maxAngle = turtle.angle;
        if (parseFloat(options) > 0) {
            maxAngle = parseFloat(options);
        }
        let angle;
        //get the roll transform
        angle = this.prando.next(0, maxAngle * 2) - maxAngle;
        turtle.dir += angle;
        return turtle;
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = RandomAngle;



/***/ }),
/* 92 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__base_draw_rule__ = __webpack_require__(1);

class ScaleLength extends __WEBPACK_IMPORTED_MODULE_0__base_draw_rule__["a" /* BaseDrawRule */] {
    draw(turtle, turtleStack, segments, options) {
        let scale = turtle.lengthScale;
        if (!isNaN(parseFloat(options))) {
            scale = parseFloat(options);
        }
        turtle.segmentLength *= scale;
        return turtle;
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = ScaleLength;



/***/ }),
/* 93 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__base_draw_rule__ = __webpack_require__(1);

class ScaleAngle extends __WEBPACK_IMPORTED_MODULE_0__base_draw_rule__["a" /* BaseDrawRule */] {
    draw(turtle, turtleStack, segments, options) {
        let scale = turtle.angleScale;
        if (!isNaN(parseFloat(options))) {
            scale = parseFloat(options);
        }
        turtle.angle *= scale;
        return turtle;
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = ScaleAngle;



/***/ }),
/* 94 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__base_draw_rule__ = __webpack_require__(1);

class EndBranch extends __WEBPACK_IMPORTED_MODULE_0__base_draw_rule__["a" /* BaseDrawRule */] {
    draw(turtle, turtleStack, segments) {
        if (turtleStack.length > 0) {
            turtle = turtleStack.pop();
        }
        turtle.branchEnded = false;
        return turtle;
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = EndBranch;



/***/ }),
/* 95 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__base_draw_rule__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__turtle__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_gl_matrix__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_prando__ = __webpack_require__(9);




class Draw extends __WEBPACK_IMPORTED_MODULE_0__base_draw_rule__["a" /* BaseDrawRule */] {
    constructor(options) {
        super(options);
        this.lsystem = options.lsystem;
        this.prando = new __WEBPACK_IMPORTED_MODULE_3_prando__["default"](options.seed);
    }
    draw(turtle, turtleStack, segments) {
        if (turtle.branchEnded) {
            return turtle;
        }
        //create the standard segment
        let distance = __WEBPACK_IMPORTED_MODULE_2_gl_matrix__["b" /* vec2 */].fromValues(Math.cos(turtle.dir) * turtle.segmentLength, Math.sin(turtle.dir) * turtle.segmentLength);
        let endPoint = __WEBPACK_IMPORTED_MODULE_2_gl_matrix__["b" /* vec2 */].create();
        __WEBPACK_IMPORTED_MODULE_2_gl_matrix__["b" /* vec2 */].add(endPoint, turtle.pos, distance);
        //try to add the segment
        let result = this.lsystem.addSegment(turtle.lastIntersectionId, endPoint, turtle.dir, turtle.roadType);
        //if successful move our turtle
        if (result.added) {
            turtle.pos = this.lsystem.intersections[result.segment.endIntersectionId].pos;
            turtle.dir = result.segment.rotation;
            turtle.lastIntersectionId = result.segment.endIntersectionId;
            if (result.intersected && turtle.roadType == __WEBPACK_IMPORTED_MODULE_1__turtle__["a" /* RoadType */].STREET) {
                turtle.branchEnded = true;
            }
        }
        else {
            turtle.branchEnded = true;
        }
        if (turtle.roadType == __WEBPACK_IMPORTED_MODULE_1__turtle__["a" /* RoadType */].STREET && result.intersected) {
            turtle.branchEnded = true;
        }
        return turtle;
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Draw;



/***/ }),
/* 96 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
class XReplace {
    constructor(output) {
        this.output = output;
    }
    apply(string, params) {
        return this.output;
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = XReplace;



/***/ }),
/* 97 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__base_draw_rule__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prando__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__turn_toward_population__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__turn_away_population__ = __webpack_require__(33);




class SpanPopulation extends __WEBPACK_IMPORTED_MODULE_0__base_draw_rule__["a" /* BaseDrawRule */] {
    constructor(options) {
        super(options);
        this.prando = new __WEBPACK_IMPORTED_MODULE_1_prando__["default"](options.seed);
        this.terrain = options.terrain;
    }
    draw(turtle, turtleStack, segments, options) {
        let rule;
        if (this.terrain.getPopulationDensity(turtle.pos) < 0.9) {
            rule = new __WEBPACK_IMPORTED_MODULE_2__turn_toward_population__["a" /* TurnTowardPopulation */](this.options);
        }
        else {
            rule = new __WEBPACK_IMPORTED_MODULE_3__turn_away_population__["a" /* TurnAwayPopulation */](this.options);
        }
        return rule.draw(turtle, turtleStack, segments, options);
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = SpanPopulation;



/***/ }),
/* 98 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__base_draw_rule__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__turtle__ = __webpack_require__(8);


class StartBranch extends __WEBPACK_IMPORTED_MODULE_0__base_draw_rule__["a" /* BaseDrawRule */] {
    constructor(options) {
        super(options);
        this.terrain = options.terrain;
    }
    draw(turtle, turtleStack, segments) {
        turtleStack.push(Object(__WEBPACK_IMPORTED_MODULE_1__turtle__["c" /* cloneTurtle */])(turtle));
        if (!this.terrain.positionOnLand(turtle.pos)) {
            turtle.branchEnded = true;
        }
        return turtle;
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = StartBranch;



/***/ }),
/* 99 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__turtle__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__constraint__ = __webpack_require__(15);


class WaterConstraint {
    constructor(options) {
        this.terrain = options.terrain;
        this.roads = options.roads;
    }
    checkConstraint(segment, endPos) {
        if (segment.roadType == __WEBPACK_IMPORTED_MODULE_0__turtle__["a" /* RoadType */].STREET) {
            if (!this.terrain.positionOnLand(endPos)) {
                return false;
            }
        }
        if (segment.roadType == __WEBPACK_IMPORTED_MODULE_0__turtle__["a" /* RoadType */].STREET) {
            //if(segment.startIntersectionId)
        }
        return true;
    }
    attemptAdjustment(segment, endPos) {
        let adj = new __WEBPACK_IMPORTED_MODULE_1__constraint__["a" /* ConstraintAdjustment */]();
        adj.added = false;
        adj.intersected = false;
        {
            false;
        }
        ;
        return adj;
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = WaterConstraint;



/***/ }),
/* 100 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__constraint__ = __webpack_require__(15);

class EdgeOfMapConstraint {
    constructor(options) {
        this.roads = options.roads;
        this.terrain = options.terrain;
    }
    checkConstraint(segment, endPos) {
        let startPos = this.roads.intersections[segment.startIntersectionId].pos;
        if (Math.abs(startPos[0]) > this.terrain.gridSize[0])
            return false;
        if (Math.abs(startPos[1]) > this.terrain.gridSize[1])
            return false;
        return true;
    }
    attemptAdjustment(segment, endPos) {
        let adj = new __WEBPACK_IMPORTED_MODULE_0__constraint__["a" /* ConstraintAdjustment */]();
        adj.added = false;
        adj.intersected = false;
        return adj;
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = EdgeOfMapConstraint;



/***/ }),
/* 101 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_gl_matrix__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__turtle__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__constraint__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__utils_vec_math__ = __webpack_require__(12);




class CurrentRoadsConstraint {
    constructor(options) {
        this.terrain = options.terrain;
        this.roads = options.roads;
    }
    checkConstraint(segment, endPos) {
        let nearestSegmentId = this.getNearestSegmentId(segment, endPos);
        if (nearestSegmentId !== null && segment.roadType == __WEBPACK_IMPORTED_MODULE_1__turtle__["a" /* RoadType */].STREET) {
            return false;
        }
        return true;
    }
    attemptAdjustment(segment, endPos) {
        let adj = new __WEBPACK_IMPORTED_MODULE_2__constraint__["a" /* ConstraintAdjustment */]();
        adj.added = false;
        adj.intersected = false;
        let nearestSegmentId = this.getNearestSegmentId(segment, endPos);
        if (nearestSegmentId !== null) {
            //get the segment
            segment.endIntersectionId = this.getNearestSegmentIntersectionId(endPos, nearestSegmentId);
            segment.rotation = __WEBPACK_IMPORTED_MODULE_3__utils_vec_math__["a" /* VecMath */].getRotationFromPoints(this.roads.intersections[segment.startIntersectionId].pos, this.roads.intersections[segment.endIntersectionId].pos);
            adj.added = true;
            adj.intersected = true;
            // console.log('adjusted');
        }
        return adj;
    }
    getNearestSegmentId(segment, endPos) {
        let threshold = this.terrain.highwaySegmentLength / 3;
        if (segment.roadType == __WEBPACK_IMPORTED_MODULE_1__turtle__["a" /* RoadType */].STREET)
            threshold = this.terrain.streetSegmentLength / 3;
        return this.roads.findNearestSegment(endPos, threshold);
    }
    getNearestSegmentIntersectionId(pos, segmentId) {
        let start = this.roads.intersections[this.roads.segments[segmentId].startIntersectionId];
        let end = this.roads.intersections[this.roads.segments[segmentId].endIntersectionId];
        if (__WEBPACK_IMPORTED_MODULE_0_gl_matrix__["b" /* vec2 */].dist(start.pos, pos) < __WEBPACK_IMPORTED_MODULE_0_gl_matrix__["b" /* vec2 */].dist(end.pos, pos)) {
            return this.roads.segments[segmentId].startIntersectionId;
        }
        else {
            return this.roads.segments[segmentId].endIntersectionId;
        }
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = CurrentRoadsConstraint;



/***/ }),
/* 102 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__shape__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__block__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_gl_matrix__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__noise_random__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__geometry_Axis__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__texture_texture_type__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__box__ = __webpack_require__(34);







class Foundation extends __WEBPACK_IMPORTED_MODULE_0__shape__["b" /* Shape */] {
    constructor(options) {
        super(options);
        this.symbol = 'B';
        this.terminal = false;
    }
    getBlocks() {
        return [{
                blockType: __WEBPACK_IMPORTED_MODULE_1__block__["a" /* BlockType */].CUBE,
                footprint: this.footprint,
                pos: this.pos,
                adjustScale1: 1,
                adjustScale2: 1,
                rotation: this.rotation,
                scaleFromCenter: true,
                textureType: __WEBPACK_IMPORTED_MODULE_5__texture_texture_type__["a" /* TextureType */].BUILDING
            }];
    }
    getBase() {
        //move the foundation underground one block
        let pos = __WEBPACK_IMPORTED_MODULE_2_gl_matrix__["c" /* vec3 */].create();
        let rot = __WEBPACK_IMPORTED_MODULE_2_gl_matrix__["c" /* vec3 */].create();
        let footprint = __WEBPACK_IMPORTED_MODULE_2_gl_matrix__["c" /* vec3 */].create();
        __WEBPACK_IMPORTED_MODULE_2_gl_matrix__["c" /* vec3 */].copy(pos, this.pos);
        __WEBPACK_IMPORTED_MODULE_2_gl_matrix__["c" /* vec3 */].copy(rot, this.rotation);
        __WEBPACK_IMPORTED_MODULE_2_gl_matrix__["c" /* vec3 */].copy(footprint, this.footprint);
        pos[1] = this.pos[1] - this.footprint[1] / 2 - 0.5;
        footprint[1] = 1;
        let foundation = new __WEBPACK_IMPORTED_MODULE_6__box__["a" /* Box */]({
            pos: pos,
            footprint: footprint,
            rotation: rot,
            textureType: __WEBPACK_IMPORTED_MODULE_5__texture_texture_type__["a" /* TextureType */].FOUNDATION
        });
        foundation.terminal = true;
        return foundation;
    }
    runReplacement(seed) {
        //get the ratio of x,z dimension
        let ratio = Math.min(this.footprint[0], this.footprint[2]) / Math.max(this.footprint[0], this.footprint[2]);
        //really skinny buildings
        if (ratio < 0.33) {
            let shapes = this.getSkinnyBuildingShapes(seed);
            return shapes;
        }
        else if (ratio < 0.66) {
            let shapes = this.getRectangularBuildingShapes(seed);
        }
        let type = __WEBPACK_IMPORTED_MODULE_3__noise_random__["a" /* default */].randomInt(12, seed);
        return [
            new __WEBPACK_IMPORTED_MODULE_6__box__["a" /* Box */]({
                pos: this.pos,
                rotation: this.rotation,
                footprint: this.footprint
            }),
            this.getBase()
        ];
    }
    getSkinnyBuildingShapes(seed) {
        let axis = __WEBPACK_IMPORTED_MODULE_4__geometry_Axis__["a" /* Axis */].X;
        if (this.footprint[2] > this.footprint[0]) {
            axis = __WEBPACK_IMPORTED_MODULE_4__geometry_Axis__["a" /* Axis */].Z;
        }
        let newShapes = this.splitShape(3, axis, this.pos, this.footprint, this.rotation);
        let adjustHeight = this.footprint[1] * 0.3;
        let type = __WEBPACK_IMPORTED_MODULE_3__noise_random__["a" /* default */].randomInt(3, seed);
        switch (type) {
            case 0: //raise up the selected
            case 1:
            case 2:
                newShapes[type].footprint[1] = newShapes[type].footprint[1] + adjustHeight;
                newShapes[type].pos[1] = newShapes[type].pos[1] + adjustHeight / 2;
                break;
            case 3:
                newShapes[1].footprint[1] = newShapes[1].footprint[1] - adjustHeight;
                newShapes[1].pos[1] = newShapes[1].pos[1] - adjustHeight / 2;
                break;
        }
        return [
            new __WEBPACK_IMPORTED_MODULE_6__box__["a" /* Box */]({
                pos: newShapes[0].pos,
                rotation: this.rotation,
                footprint: newShapes[0].footprint
            }),
            new __WEBPACK_IMPORTED_MODULE_6__box__["a" /* Box */]({
                pos: newShapes[1].pos,
                rotation: this.rotation,
                footprint: newShapes[1].footprint
            }),
            new __WEBPACK_IMPORTED_MODULE_6__box__["a" /* Box */]({
                pos: newShapes[2].pos,
                rotation: this.rotation,
                footprint: newShapes[2].footprint
            }),
            this.getBase()
        ];
    }
    getRectangularBuildingShapes(seed) {
        let shapes = [];
        return shapes;
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Foundation;



/***/ }),
/* 103 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__shape__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__texture_texture_type__ = __webpack_require__(3);


class StandardRoof extends __WEBPACK_IMPORTED_MODULE_0__shape__["b" /* Shape */] {
    constructor(options) {
        super(options);
        this.symbol = 'T';
        this.terminal = true;
        this.blockType = options.blockType;
    }
    getBlocks() {
        return [{
                blockType: this.blockType,
                footprint: this.footprint,
                pos: this.pos,
                adjustScale1: 0,
                adjustScale2: 1,
                rotation: this.rotation,
                scaleFromCenter: true,
                textureType: __WEBPACK_IMPORTED_MODULE_1__texture_texture_type__["a" /* TextureType */].ROOF
            }];
    }
    runReplacement() {
        return [this];
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = StandardRoof;



/***/ }),
/* 104 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__shape__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__block__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_gl_matrix__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__texture_texture_type__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__geometry_Axis__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__turret_roof__ = __webpack_require__(105);






class Turret extends __WEBPACK_IMPORTED_MODULE_0__shape__["b" /* Shape */] {
    constructor(options) {
        super(options);
        this.width = Math.min(this.footprint[0], this.footprint[2]);
        this.footprint[0] = this.width;
        this.footprint[2] = this.width;
        this.radius = 0;
        this.sweep = options.sweep ? options.sweep : Math.PI;
        this.numSegments = options.numSegments ? options.numSegments : 8;
        this.corners = options.corners ? options.corners : false;
    }
    getBlocks() {
        let segmentAngle = this.sweep / (this.numSegments - 1);
        let blockZ = 2 * (this.radius + this.width / 2) * Math.tan(segmentAngle / 2);
        let blockZ2 = 2 * (this.radius - this.width / 2) * Math.tan(segmentAngle / 2);
        let scaleBottom = blockZ2 / blockZ;
        let blocks = [];
        for (let i = 0; i < this.numSegments; i++) {
            let angle = this.rotation[1] + segmentAngle * i;
            blocks.push({
                pos: __WEBPACK_IMPORTED_MODULE_2_gl_matrix__["c" /* vec3 */].fromValues(this.pos[0] + (this.radius * Math.cos(angle)), this.pos[1], this.pos[2] + (this.radius * Math.sin(angle))),
                footprint: __WEBPACK_IMPORTED_MODULE_2_gl_matrix__["c" /* vec3 */].fromValues(this.width, this.footprint[1], blockZ),
                blockType: __WEBPACK_IMPORTED_MODULE_1__block__["a" /* BlockType */].WEDGE,
                adjustScale1: scaleBottom,
                adjustScale2: 1,
                adjustScale3: 1,
                adjustScale4: 1,
                rotation: __WEBPACK_IMPORTED_MODULE_2_gl_matrix__["c" /* vec3 */].fromValues(0, angle, 0),
                scaleFromCenter: true,
                textureType: __WEBPACK_IMPORTED_MODULE_3__texture_texture_type__["a" /* TextureType */].TURRET
            });
        }
        return blocks;
    }
    runReplacement() {
        return this.addRoof();
    }
    addRoof() {
        let height = Math.min(this.footprint[__WEBPACK_IMPORTED_MODULE_4__geometry_Axis__["a" /* Axis */].X], this.footprint[__WEBPACK_IMPORTED_MODULE_4__geometry_Axis__["a" /* Axis */].Z]);
        let posY = this.pos[1] + 0.5 * this.footprint[1] + 0.5 * height;
        let roof = new __WEBPACK_IMPORTED_MODULE_5__turret_roof__["a" /* TurretRoof */]({
            pos: __WEBPACK_IMPORTED_MODULE_2_gl_matrix__["c" /* vec3 */].fromValues(this.pos[0], posY, this.pos[2]),
            footprint: __WEBPACK_IMPORTED_MODULE_2_gl_matrix__["c" /* vec3 */].fromValues(this.footprint[0] * 1.2, height, this.footprint[0] * 1.2),
            rotation: this.rotation,
            numSegments: this.numSegments
        });
        this.terminal = true;
        return [this, roof];
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Turret;



/***/ }),
/* 105 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__shape__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__block__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_gl_matrix__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__texture_texture_type__ = __webpack_require__(3);




class TurretRoof extends __WEBPACK_IMPORTED_MODULE_0__shape__["b" /* Shape */] {
    constructor(options) {
        super(options);
        this.center = options.pos;
        this.width = options.footprint[0] / 2;
        this.height = options.footprint[1];
        this.radius = options.footprint[0];
        this.sweep = options.sweep ? options.sweep : Math.PI * 2;
        this.numSegments = options.numSegments ? options.numSegments : 20;
        this.terminal = true;
    }
    getBlocks() {
        let segmentAngle = this.sweep / (this.numSegments - 1);
        let blockZ = 2 * (this.width) * Math.tan(segmentAngle / 2);
        let blockZ2 = 0;
        let scaleBottom = blockZ2 / blockZ;
        let blocks = [];
        for (let i = 0; i < this.numSegments; i++) {
            let angle = this.rotation[1] + segmentAngle * i;
            blocks.push({
                pos: __WEBPACK_IMPORTED_MODULE_2_gl_matrix__["c" /* vec3 */].fromValues(this.center[0] + (this.width / 2 * Math.cos(angle)), this.center[1], this.center[2] + (this.width / 2 * Math.sin(angle))),
                footprint: __WEBPACK_IMPORTED_MODULE_2_gl_matrix__["c" /* vec3 */].fromValues(this.width, this.height, blockZ),
                blockType: __WEBPACK_IMPORTED_MODULE_1__block__["a" /* BlockType */].WEDGE,
                adjustScale1: scaleBottom,
                adjustScale2: 1,
                adjustScale3: 1,
                adjustScale4: 0,
                rotation: __WEBPACK_IMPORTED_MODULE_2_gl_matrix__["c" /* vec3 */].fromValues(0, angle, 0),
                scaleFromCenter: true,
                textureType: __WEBPACK_IMPORTED_MODULE_3__texture_texture_type__["a" /* TextureType */].ROOF
            });
        }
        return blocks;
    }
    runReplacement() {
        return [this];
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = TurretRoof;



/***/ }),
/* 106 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__shape__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__texture_texture_type__ = __webpack_require__(3);


class StandardBlock extends __WEBPACK_IMPORTED_MODULE_0__shape__["b" /* Shape */] {
    constructor(options) {
        super(options);
        this.blockType = options.blockType;
        this.symbol = 'S';
        this.terminal = true;
        this.adjustScale1 = (typeof options.adjustScale1 == 'undefined') ? 1 : options.adjustScale1;
        this.adjustScale2 = (typeof options.adjustScale2 == 'undefined') ? 1 : options.adjustScale2;
        this.adjustScale3 = (typeof options.adjustScale3 == 'undefined') ? 1 : options.adjustScale3;
        this.adjustScale4 = (typeof options.adjustScale4 == 'undefined') ? 1 : options.adjustScale4;
        this.textureType = (typeof options.textureType == 'undefined') ? __WEBPACK_IMPORTED_MODULE_1__texture_texture_type__["a" /* TextureType */].BUILDING : options.textureType;
    }
    getBlocks() {
        return [
            {
                blockType: this.blockType,
                footprint: this.footprint,
                pos: this.pos,
                adjustScale1: this.adjustScale1,
                adjustScale2: this.adjustScale2,
                rotation: this.rotation,
                scaleFromCenter: true,
                textureType: this.textureType
            },
        ];
    }
    runReplacement() {
        return [this];
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = StandardBlock;



/***/ }),
/* 107 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_gl_matrix__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__city_level__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__building_building__ = __webpack_require__(16);



class City {
    constructor(options) {
        this.sweep = Math.PI;
        this.showBuildings = true;
        this.showRoads = false;
        this.showWalls = true;
        this.showSampleBuildings = false;
        this.sampleBuildings = [];
        this.maxBuildingIterations = 20;
        this.pos = options.pos;
        this.seed = options.seed;
        this.towerSeed = options.towerSeed;
        this.palaceSeed = options.palaceSeed;
        this.levels = [];
        for (let i = 0; i < 7; i++) {
            this.levels.push(new __WEBPACK_IMPORTED_MODULE_1__city_level__["a" /* CityLevel */](i, this, {}));
        }
    }
    initBuildings() {
        for (let i = 0; i < this.levels.length; i++) {
            this.levels[i].initGrid();
            this.levels[i].initRoads();
            this.levels[i].initBuildings();
        }
    }
    //make an adjustment to a level and subsequent adjustments to other levels
    adjustLevel(levelIndex, propertyName, value) {
        let level = this.levels[levelIndex];
        switch (propertyName) {
            case 'wallHeight':
                level.setWallHeight(value);
                break;
            case 'wallWidth':
                level.setWallWidth(value);
                break;
            case 'levelWidth':
                level.setLevelWidth(value);
                break;
            case 'gridWidth':
                level.setGridWidth(value);
                break;
            case 'elevationRise':
                level.setElevationRise(value);
                break;
            case 'buildingFootprintTarget':
                level.setBuildingFootprintTarget(value);
                break;
        }
    }
    getBlocks() {
        if (this.showSampleBuildings)
            return this.getSampleBlocks();
        let blocks = [];
        for (let i = 0; i < this.levels.length; i++) {
            blocks = blocks.concat(this.levels[i].getBlocks());
        }
        return blocks;
    }
    getSampleBlocks() {
        let blocks = [];
        this.getSampleBuildings();
        for (let i = 0; i < this.sampleBuildings.length; i++) {
            blocks = blocks.concat(this.sampleBuildings[i].getBlocks());
        }
        return blocks;
    }
    getSampleBuildings() {
        if (this.sampleBuildings.length > 0)
            return this.sampleBuildings;
        let footprints = [
            __WEBPACK_IMPORTED_MODULE_0_gl_matrix__["c" /* vec3 */].fromValues(1, 1, 4),
            __WEBPACK_IMPORTED_MODULE_0_gl_matrix__["c" /* vec3 */].fromValues(8, 3, 2),
            __WEBPACK_IMPORTED_MODULE_0_gl_matrix__["c" /* vec3 */].fromValues(3, 7, 6),
            __WEBPACK_IMPORTED_MODULE_0_gl_matrix__["c" /* vec3 */].fromValues(4, 4, 5),
            __WEBPACK_IMPORTED_MODULE_0_gl_matrix__["c" /* vec3 */].fromValues(5, 8, 8),
            __WEBPACK_IMPORTED_MODULE_0_gl_matrix__["c" /* vec3 */].fromValues(6, 6, 3),
            __WEBPACK_IMPORTED_MODULE_0_gl_matrix__["c" /* vec3 */].fromValues(7, 7, 5),
            __WEBPACK_IMPORTED_MODULE_0_gl_matrix__["c" /* vec3 */].fromValues(8, 8, 8),
            __WEBPACK_IMPORTED_MODULE_0_gl_matrix__["c" /* vec3 */].fromValues(9, 9, 2),
            __WEBPACK_IMPORTED_MODULE_0_gl_matrix__["c" /* vec3 */].fromValues(10, 10, 7),
            __WEBPACK_IMPORTED_MODULE_0_gl_matrix__["c" /* vec3 */].fromValues(11, 11, 11),
        ];
        let xPos = 200;
        for (let i = 0; i < footprints.length; i++) {
            let foot = footprints[i];
            xPos = xPos + foot[0] / 2;
            let pos = __WEBPACK_IMPORTED_MODULE_0_gl_matrix__["c" /* vec3 */].fromValues(xPos, foot[1] / 2, 210);
            let seed = Math.pow(1.232, i);
            let b = new __WEBPACK_IMPORTED_MODULE_2__building_building__["a" /* Building */]({
                pos: pos,
                footprint: foot,
                rotation: __WEBPACK_IMPORTED_MODULE_0_gl_matrix__["c" /* vec3 */].fromValues(0, i * Math.PI / 10, 0),
                seed: seed
            });
            b.runReplacements();
            this.sampleBuildings.push(b);
            xPos = xPos + foot[0] / 2 + 3;
        }
        return this.sampleBuildings;
    }
    initPalace() {
        this.levels[this.levels.length - 1].initPalace();
    }
    getHeight() {
        let topLevel = this.levels[this.levels.length - 1];
        return topLevel.getLevelHeight();
    }
    getRadius() {
        let topLevel = this.levels[0];
        return topLevel.getLevelRadius();
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = City;



/***/ }),
/* 108 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__shape__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__block__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_gl_matrix__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__texture_texture_type__ = __webpack_require__(3);




class Wall extends __WEBPACK_IMPORTED_MODULE_0__shape__["b" /* Shape */] {
    constructor(options) {
        super(options);
        this.center = options.pos;
        this.width = options.footprint[2];
        this.height = options.footprint[1];
        this.radius = options.footprint[0];
        this.sweep = options.sweep ? options.sweep : Math.PI;
        this.numSegments = options.numSegments ? options.numSegments : 20;
        this.terminal = true;
    }
    getBlocks() {
        let segmentAngle = this.sweep / (this.numSegments - 1);
        let blockZ = 2 * (this.radius + this.width / 2) * Math.tan(segmentAngle / 2);
        let blockZ2 = 2 * (this.radius - this.width / 2) * Math.tan(segmentAngle / 2);
        let scaleBottom = blockZ2 / blockZ;
        let blocks = [];
        for (let i = 0; i < this.numSegments; i++) {
            let angle = this.rotation[1] + segmentAngle * i;
            blocks.push({
                pos: __WEBPACK_IMPORTED_MODULE_2_gl_matrix__["c" /* vec3 */].fromValues(this.center[0] + (this.radius * Math.cos(angle)), this.center[1] + this.footprint[1] / 2, this.center[2] + (this.radius * Math.sin(angle))),
                footprint: __WEBPACK_IMPORTED_MODULE_2_gl_matrix__["c" /* vec3 */].fromValues(this.width, this.height, blockZ),
                blockType: __WEBPACK_IMPORTED_MODULE_1__block__["a" /* BlockType */].WEDGE,
                adjustScale1: scaleBottom,
                adjustScale2: 1,
                adjustScale3: 1,
                adjustScale4: 1,
                rotation: __WEBPACK_IMPORTED_MODULE_2_gl_matrix__["c" /* vec3 */].fromValues(0, angle, 0),
                scaleFromCenter: true,
                textureType: __WEBPACK_IMPORTED_MODULE_3__texture_texture_type__["a" /* TextureType */].WALL
            });
        }
        return blocks;
    }
    runReplacement() {
        return [this];
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Wall;



/***/ }),
/* 109 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__building_shape_shape__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__building_shape_block__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_gl_matrix__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__texture_texture_type__ = __webpack_require__(3);




class Road extends __WEBPACK_IMPORTED_MODULE_0__building_shape_shape__["b" /* Shape */] {
    constructor(options) {
        super(options);
        this.center = options.pos;
        this.width = options.footprint[2];
        this.height = options.footprint[1];
        this.radius = options.footprint[0];
        this.sweep = options.sweep ? options.sweep : Math.PI;
        this.numSegments = options.numSegments ? options.numSegments : 20;
        this.terminal = true;
        this.cityLevel = options.cityLevel;
    }
    getBlocks() {
        this.segmentAngle = this.sweep / (this.numSegments - 1);
        this.blockZ = 2 * (this.radius + this.width / 2) * Math.tan(this.segmentAngle / 2);
        let blockZ2 = 2 * (this.radius - this.width / 2) * Math.tan(this.segmentAngle / 2);
        let scaleBottom = blockZ2 / this.blockZ;
        let blocks = [];
        let gateIndex = this.cityLevel.getGateWallBlockIndex();
        for (let i = 0; i < this.numSegments; i++) {
            let angle = this.rotation[1] + this.segmentAngle * i;
            blocks.push({
                pos: this.getBlockPosition(angle),
                footprint: __WEBPACK_IMPORTED_MODULE_2_gl_matrix__["c" /* vec3 */].fromValues(this.width, 1, this.blockZ),
                blockType: __WEBPACK_IMPORTED_MODULE_1__building_shape_block__["a" /* BlockType */].WEDGE,
                adjustScale1: scaleBottom,
                adjustScale2: this.getLeftScale(angle),
                adjustScale3: this.getRightScale(angle),
                adjustScale4: 1,
                rotation: __WEBPACK_IMPORTED_MODULE_2_gl_matrix__["c" /* vec3 */].fromValues(0, angle, 0),
                scaleFromCenter: true,
                textureType: __WEBPACK_IMPORTED_MODULE_3__texture_texture_type__["a" /* TextureType */].LEVEL_GROUND
            });
        }
        return blocks;
    }
    getBlockElevation(rotation) {
        let j = this.cityLevel.gridLength * rotation / this.sweep;
        return this.cityLevel.getHeightFromGridPos(0, j) - 0.5;
    }
    getBlockPosition(angle) {
        let x = this.center[0] + (this.radius * Math.cos(angle));
        let z = this.center[2] + (this.radius * Math.sin(angle));
        let y = Math.min(this.getBlockElevation(angle), this.getBlockElevation(angle + this.segmentAngle));
        return __WEBPACK_IMPORTED_MODULE_2_gl_matrix__["c" /* vec3 */].fromValues(x, y, z);
    }
    getRightScale(rotation) {
        let el1 = this.getBlockElevation(rotation);
        let el2 = this.getBlockElevation(rotation + this.segmentAngle);
        if (el1 >= el2)
            return 1;
        let scale = 1 + (el2 - el1);
        return scale;
    }
    getLeftScale(rotation) {
        let el1 = this.getBlockElevation(rotation);
        let el2 = this.getBlockElevation(rotation + this.segmentAngle);
        if (el2 >= el1)
            return 1;
        let scale = 1 + (el1 - el2);
        return scale;
    }
    runReplacement() {
        return [this];
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Road;



/***/ }),
/* 110 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__block__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_gl_matrix__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__texture_texture_type__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__box__ = __webpack_require__(34);




var MerlonPlacement;
(function (MerlonPlacement) {
    MerlonPlacement[MerlonPlacement["NONE"] = 0] = "NONE";
    MerlonPlacement[MerlonPlacement["FILL"] = 1] = "FILL";
    MerlonPlacement[MerlonPlacement["HALF_GAP"] = 2] = "HALF_GAP";
    MerlonPlacement[MerlonPlacement["DOUBLE_GAP"] = 3] = "DOUBLE_GAP";
})(MerlonPlacement || (MerlonPlacement = {}));
class Battlement extends __WEBPACK_IMPORTED_MODULE_3__box__["a" /* Box */] {
    constructor(options) {
        super(options);
        this.xSide1 = MerlonPlacement.FILL;
        this.xSide2 = MerlonPlacement.FILL;
        this.zSide1 = MerlonPlacement.DOUBLE_GAP;
        this.zSide2 = MerlonPlacement.DOUBLE_GAP;
        this.symbol = 'B';
        this.terminal = false;
        this.textureType = (typeof options.textureType == 'undefined') ? __WEBPACK_IMPORTED_MODULE_2__texture_texture_type__["a" /* TextureType */].BUILDING : options.textureType;
        this.numMerlons = (typeof options.numMerlons == 'undefined') ? 4 : options.numMerlons;
        if (typeof options.xSide1 !== 'undefined')
            this.xSide1 = options.xSide1;
        if (typeof options.xSide2 !== 'undefined')
            this.xSide2 = options.xSide2;
        if (typeof options.zSide1 !== 'undefined')
            this.zSide1 = options.zSide1;
        if (typeof options.zSide2 !== 'undefined')
            this.zSide2 = options.zSide2;
        this.scaleInner = 1;
    }
    getBlocks() {
        let blocks = [{
                blockType: __WEBPACK_IMPORTED_MODULE_0__block__["a" /* BlockType */].CUBE,
                footprint: this.footprint,
                pos: this.pos,
                adjustScale1: 1,
                adjustScale2: 1,
                rotation: this.rotation,
                scaleFromCenter: true,
                textureType: this.textureType
            }];
        blocks = blocks.concat(this.getMerlons());
        return blocks;
    }
    runReplacement(seed) {
        return [this];
    }
    getMerlons() {
        let blocks = [];
        let size = Math.min(this.footprint[2], this.footprint[0]) / (this.numMerlons * 2);
        let y = this.pos[1] + this.footprint[1] * 0.5 + size * 0.5;
        let pos = [];
        let z1 = this.footprint[2] * 0.5 - size * 0.5;
        let z2 = -this.footprint[2] * 0.5 + size * 0.5;
        pos = pos.concat(this.getXMerlonsPos(size, y, z1, this.xSide1));
        pos = pos.concat(this.getXMerlonsPos(size, y, z2, this.xSide2));
        let x1 = this.footprint[0] * 0.5 - size * 0.5;
        let x2 = -this.footprint[0] * 0.5 + size * 0.5;
        pos = pos.concat(this.getZMerlonsPos(size, x1, y, this.zSide1));
        pos = pos.concat(this.getZMerlonsPos(size, x2, y, this.zSide2));
        for (let i = 0; i < pos.length; i++) {
            blocks.push({
                pos: pos[i],
                footprint: __WEBPACK_IMPORTED_MODULE_1_gl_matrix__["c" /* vec3 */].fromValues(size, size, size),
                rotation: this.rotation,
                blockType: __WEBPACK_IMPORTED_MODULE_0__block__["a" /* BlockType */].CUBE,
                adjustScale1: this.scaleInner,
                adjustScale2: 1,
                adjustScale3: 1,
                adjustScale4: 1,
                scaleFromCenter: true,
                textureType: this.textureType
            });
        }
        return blocks;
    }
    getXMerlonsPos(size, y, z, merlonPlacement) {
        let pos = [];
        if (merlonPlacement == MerlonPlacement.NONE)
            return pos;
        //get the number of merlons
        let numMerlons = Math.floor(this.footprint[0] / (size * 2));
        let startX = -this.footprint[0] * 0.5 + size * 0.5;
        let endX = this.footprint[0] * 0.5 - size * 0.5;
        if (merlonPlacement == MerlonPlacement.HALF_GAP) {
            startX = startX + size * 0.5;
            endX = endX - size * 0.5;
        }
        else if (merlonPlacement == MerlonPlacement.DOUBLE_GAP) {
            numMerlons = numMerlons - 2;
            startX = startX + size * 2.5;
            endX = endX - size * 2.5;
        }
        let incX = (endX - startX) / (numMerlons - 1);
        for (let x = startX; x <= endX; x = x + incX) {
            let rotPos = __WEBPACK_IMPORTED_MODULE_1_gl_matrix__["b" /* vec2 */].fromValues(x, z);
            __WEBPACK_IMPORTED_MODULE_1_gl_matrix__["b" /* vec2 */].rotate(rotPos, rotPos, __WEBPACK_IMPORTED_MODULE_1_gl_matrix__["b" /* vec2 */].fromValues(0, 0), this.rotation[1]);
            pos.push(__WEBPACK_IMPORTED_MODULE_1_gl_matrix__["c" /* vec3 */].fromValues(this.pos[0] + rotPos[0], y, this.pos[2] + rotPos[1]));
        }
        return pos;
    }
    getZMerlonsPos(size, x, y, merlonPlacement) {
        let pos = [];
        if (merlonPlacement == MerlonPlacement.NONE)
            return pos;
        //get the number of merlons
        let numMerlons = Math.floor(this.footprint[2] / (size * 2));
        let startZ = -this.footprint[2] * 0.5 + size * 0.5;
        let endZ = this.footprint[2] * 0.5 - size * 0.5;
        if (merlonPlacement == MerlonPlacement.HALF_GAP) {
            startZ = startZ + size * 0.5;
            endZ = endZ - size * 0.5;
        }
        else if (merlonPlacement == MerlonPlacement.DOUBLE_GAP) {
            numMerlons = numMerlons - 2;
            startZ = startZ + size * 2.0;
            endZ = endZ - size * 2.0;
        }
        let incZ = (endZ - startZ) / (numMerlons - 1);
        for (let z = startZ; z <= endZ; z = z + incZ) {
            let rotPos = __WEBPACK_IMPORTED_MODULE_1_gl_matrix__["b" /* vec2 */].fromValues(x, z);
            __WEBPACK_IMPORTED_MODULE_1_gl_matrix__["b" /* vec2 */].rotate(rotPos, rotPos, __WEBPACK_IMPORTED_MODULE_1_gl_matrix__["b" /* vec2 */].fromValues(0, 0), this.rotation[1]);
            pos.push(__WEBPACK_IMPORTED_MODULE_1_gl_matrix__["c" /* vec3 */].fromValues(this.pos[0] + rotPos[0], y, this.pos[2] + rotPos[1]));
        }
        return pos;
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Battlement;



/***/ }),
/* 111 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__globals__ = __webpack_require__(4);

class Texture {
    bindTex() {
        __WEBPACK_IMPORTED_MODULE_0__globals__["a" /* gl */].bindTexture(__WEBPACK_IMPORTED_MODULE_0__globals__["a" /* gl */].TEXTURE_2D, this.texture);
    }
    handle() {
        return this.texture;
    }
    isPowerOf2(value) {
        return (value & (value - 1)) == 0;
    }
    constructor(imgSource, clampVert) {
        this.texture = __WEBPACK_IMPORTED_MODULE_0__globals__["a" /* gl */].createTexture();
        this.bindTex();
        // create a white pixel to serve as placeholder
        const formatSrc = __WEBPACK_IMPORTED_MODULE_0__globals__["a" /* gl */].RGBA;
        const formatDst = __WEBPACK_IMPORTED_MODULE_0__globals__["a" /* gl */].RGBA;
        const lvl = 0;
        const phWidth = 1; // placeholder
        const phHeight = 1;
        const phImg = new Uint8Array([255, 255, 255, 255]);
        const formatBit = __WEBPACK_IMPORTED_MODULE_0__globals__["a" /* gl */].UNSIGNED_BYTE; // TODO: HDR
        __WEBPACK_IMPORTED_MODULE_0__globals__["a" /* gl */].texImage2D(__WEBPACK_IMPORTED_MODULE_0__globals__["a" /* gl */].TEXTURE_2D, lvl, formatDst, phWidth, phHeight, 0, formatSrc, formatBit, phImg);
        // get a javascript image locally and load it. not instant but will auto-replace white pixel
        const img = new Image();
        if (clampVert == 0) {
            img.onload = function () {
                this.bindTex();
                __WEBPACK_IMPORTED_MODULE_0__globals__["a" /* gl */].texImage2D(__WEBPACK_IMPORTED_MODULE_0__globals__["a" /* gl */].TEXTURE_2D, lvl, formatDst, img.width, img.height, 0, formatSrc, formatBit, img);
                __WEBPACK_IMPORTED_MODULE_0__globals__["a" /* gl */].texParameteri(__WEBPACK_IMPORTED_MODULE_0__globals__["a" /* gl */].TEXTURE_2D, __WEBPACK_IMPORTED_MODULE_0__globals__["a" /* gl */].TEXTURE_WRAP_S, __WEBPACK_IMPORTED_MODULE_0__globals__["a" /* gl */].REPEAT);
                __WEBPACK_IMPORTED_MODULE_0__globals__["a" /* gl */].texParameteri(__WEBPACK_IMPORTED_MODULE_0__globals__["a" /* gl */].TEXTURE_2D, __WEBPACK_IMPORTED_MODULE_0__globals__["a" /* gl */].TEXTURE_WRAP_T, __WEBPACK_IMPORTED_MODULE_0__globals__["a" /* gl */].REPEAT);
                __WEBPACK_IMPORTED_MODULE_0__globals__["a" /* gl */].texParameteri(__WEBPACK_IMPORTED_MODULE_0__globals__["a" /* gl */].TEXTURE_2D, __WEBPACK_IMPORTED_MODULE_0__globals__["a" /* gl */].TEXTURE_MIN_FILTER, __WEBPACK_IMPORTED_MODULE_0__globals__["a" /* gl */].LINEAR);
                __WEBPACK_IMPORTED_MODULE_0__globals__["a" /* gl */].texParameteri(__WEBPACK_IMPORTED_MODULE_0__globals__["a" /* gl */].TEXTURE_2D, __WEBPACK_IMPORTED_MODULE_0__globals__["a" /* gl */].TEXTURE_MAG_FILTER, __WEBPACK_IMPORTED_MODULE_0__globals__["a" /* gl */].LINEAR);
            }.bind(this);
        }
        else {
            img.onload = function () {
                this.bindTex();
                __WEBPACK_IMPORTED_MODULE_0__globals__["a" /* gl */].texImage2D(__WEBPACK_IMPORTED_MODULE_0__globals__["a" /* gl */].TEXTURE_2D, lvl, formatDst, img.width, img.height, 0, formatSrc, formatBit, img);
                __WEBPACK_IMPORTED_MODULE_0__globals__["a" /* gl */].texParameteri(__WEBPACK_IMPORTED_MODULE_0__globals__["a" /* gl */].TEXTURE_2D, __WEBPACK_IMPORTED_MODULE_0__globals__["a" /* gl */].TEXTURE_WRAP_S, __WEBPACK_IMPORTED_MODULE_0__globals__["a" /* gl */].CLAMP_TO_EDGE);
                __WEBPACK_IMPORTED_MODULE_0__globals__["a" /* gl */].texParameteri(__WEBPACK_IMPORTED_MODULE_0__globals__["a" /* gl */].TEXTURE_2D, __WEBPACK_IMPORTED_MODULE_0__globals__["a" /* gl */].TEXTURE_WRAP_T, __WEBPACK_IMPORTED_MODULE_0__globals__["a" /* gl */].CLAMP_TO_EDGE);
                __WEBPACK_IMPORTED_MODULE_0__globals__["a" /* gl */].texParameteri(__WEBPACK_IMPORTED_MODULE_0__globals__["a" /* gl */].TEXTURE_2D, __WEBPACK_IMPORTED_MODULE_0__globals__["a" /* gl */].TEXTURE_MIN_FILTER, __WEBPACK_IMPORTED_MODULE_0__globals__["a" /* gl */].LINEAR);
                __WEBPACK_IMPORTED_MODULE_0__globals__["a" /* gl */].texParameteri(__WEBPACK_IMPORTED_MODULE_0__globals__["a" /* gl */].TEXTURE_2D, __WEBPACK_IMPORTED_MODULE_0__globals__["a" /* gl */].TEXTURE_MAG_FILTER, __WEBPACK_IMPORTED_MODULE_0__globals__["a" /* gl */].LINEAR);
            }.bind(this);
        }
        img.src = imgSource; // load the image
    }
}
/* unused harmony export Texture */

;
/* harmony default export */ __webpack_exports__["a"] = (Texture);


/***/ }),
/* 112 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_gl_matrix__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__rendering_gl_Drawable__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__globals__ = __webpack_require__(4);



class SpurGeometry extends __WEBPACK_IMPORTED_MODULE_1__rendering_gl_Drawable__["a" /* default */] {
    constructor(city, level) {
        super(); // Call the constructor of the super class. This is required.
        this.seed = __WEBPACK_IMPORTED_MODULE_0_gl_matrix__["b" /* vec2 */].fromValues(342.3423, 984.843);
        this.gridSectionsPerLevel = 10;
        this.numLevels = 6;
        this.gridSize = __WEBPACK_IMPORTED_MODULE_0_gl_matrix__["b" /* vec2 */].fromValues(500, 500);
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
        __WEBPACK_IMPORTED_MODULE_2__globals__["a" /* gl */].bindBuffer(__WEBPACK_IMPORTED_MODULE_2__globals__["a" /* gl */].ELEMENT_ARRAY_BUFFER, this.bufIdx);
        __WEBPACK_IMPORTED_MODULE_2__globals__["a" /* gl */].bufferData(__WEBPACK_IMPORTED_MODULE_2__globals__["a" /* gl */].ELEMENT_ARRAY_BUFFER, this.indices, __WEBPACK_IMPORTED_MODULE_2__globals__["a" /* gl */].STATIC_DRAW);
        __WEBPACK_IMPORTED_MODULE_2__globals__["a" /* gl */].bindBuffer(__WEBPACK_IMPORTED_MODULE_2__globals__["a" /* gl */].ARRAY_BUFFER, this.bufNor);
        __WEBPACK_IMPORTED_MODULE_2__globals__["a" /* gl */].bufferData(__WEBPACK_IMPORTED_MODULE_2__globals__["a" /* gl */].ARRAY_BUFFER, this.normals, __WEBPACK_IMPORTED_MODULE_2__globals__["a" /* gl */].STATIC_DRAW);
        __WEBPACK_IMPORTED_MODULE_2__globals__["a" /* gl */].bindBuffer(__WEBPACK_IMPORTED_MODULE_2__globals__["a" /* gl */].ARRAY_BUFFER, this.bufPos);
        __WEBPACK_IMPORTED_MODULE_2__globals__["a" /* gl */].bufferData(__WEBPACK_IMPORTED_MODULE_2__globals__["a" /* gl */].ARRAY_BUFFER, this.positions, __WEBPACK_IMPORTED_MODULE_2__globals__["a" /* gl */].STATIC_DRAW);
        __WEBPACK_IMPORTED_MODULE_2__globals__["a" /* gl */].bindBuffer(__WEBPACK_IMPORTED_MODULE_2__globals__["a" /* gl */].ARRAY_BUFFER, this.bufInfo);
        __WEBPACK_IMPORTED_MODULE_2__globals__["a" /* gl */].bufferData(__WEBPACK_IMPORTED_MODULE_2__globals__["a" /* gl */].ARRAY_BUFFER, this.info, __WEBPACK_IMPORTED_MODULE_2__globals__["a" /* gl */].STATIC_DRAW);
        // gl.bindBuffer(gl.ARRAY_BUFFER, this.bufCol);
        // gl.bufferData(gl.ARRAY_BUFFER, this.colors, gl.STATIC_DRAW);
    }
    //get the number of points
    getNumPoints() {
        let numPoints = 0;
        for (let level = this.numLevels; level >= 1; level--) {
            numPoints += (level * this.gridSectionsPerLevel + 1) * (this.gridSectionsPerLevel + 1);
        }
        return numPoints * 2; //two sides of spur
    }
    toTerrainPos(pos) {
        return (pos - 250) / 5;
    }
    initGrid() {
        let numPoints = this.getNumPoints();
        this.normals = new Float32Array(numPoints * 4);
        let indicies = [];
        let positions = [];
        let info = [];
        let normals = [];
        for (let widthLevel = this.level; widthLevel >= 1; widthLevel--) {
            this.initGridSection(this.level, widthLevel, indicies, positions, info, normals);
        }
        this.positions = new Float32Array(positions);
        this.info = new Float32Array(info);
        this.normals = new Float32Array(normals);
        this.indices = new Uint32Array(indicies); // NxN squares, each square is two triangles, each triangle is three indices
    }
    /**
     * This is just an approximation
     * @param radius
     */
    getSpurRadiusZIntersection(radius) {
        let lev7radius = this.city.levels[this.city.levels.length - 1].getOuterRadius();
        let lev2radius = this.city.levels[1].getOuterRadius();
        let spurDeltaZ = lev2radius;
        let spurDeltaX = lev7radius;
        let deltaX = spurDeltaX * (spurDeltaZ - radius) / spurDeltaZ;
        let angle = Math.atan(deltaX / radius);
        let z = radius - Math.sin(angle / 3.1415) * radius;
        return z;
    }
    initGridSection(levelHeight, levelWidth, indicies, positions, info, normals) {
        let heightLevel = this.city.levels[levelHeight];
        let innerRadius = this.city.levels[levelWidth].getInnerRadius();
        let outerRadius = this.city.levels[levelWidth].getOuterRadius();
        let startElevation = heightLevel.getLevelHeight();
        let endElevation = heightLevel.getNextLevelHeight();
        if (levelHeight == 6) {
            if (levelWidth == 5)
                innerRadius = 0;
            endElevation = heightLevel.getWallTopElevation() + 0.1;
        }
        //get the start, end and increments for the z coordinate
        let startZ = this.city.pos[2] + this.getSpurRadiusZIntersection(innerRadius);
        let endZ = this.city.pos[2] + this.getSpurRadiusZIntersection(outerRadius);
        let incZ = (endZ - startZ) / (this.gridSectionsPerLevel);
        //get the start end and increments for the y coordinate
        let startY = startElevation;
        let endY = endElevation;
        let incY = (endY - startY) / (this.gridSectionsPerLevel);
        //get the x offset
        let lev7radius = this.city.levels[this.city.levels.length - 1].getOuterRadius();
        let lev2radius = this.city.levels[1].getOuterRadius();
        let spurDeltaZ = lev2radius;
        let spurDeltaX = lev7radius;
        let startOffsetX = spurDeltaX * (spurDeltaZ - innerRadius) / spurDeltaZ;
        let endOffsetX = spurDeltaX * (spurDeltaZ - outerRadius) / spurDeltaZ;
        let incOffsetX = (startOffsetX - endOffsetX) / (this.gridSectionsPerLevel);
        for (let i = 0; i <= this.gridSectionsPerLevel; ++i) {
            for (let j = 0; j <= this.gridSectionsPerLevel; j++) {
                let posIndex = positions.length / 4;
                positions.push(this.toTerrainPos(this.city.pos[0] + startOffsetX - i * incOffsetX));
                positions.push((startY + j * incY) / 5);
                positions.push(this.toTerrainPos(startZ + i * incZ));
                positions.push(0);
                positions.push(this.toTerrainPos(this.city.pos[0] - startOffsetX + i * incOffsetX));
                positions.push((startY + j * incY) / 5);
                positions.push(this.toTerrainPos(startZ + i * incZ));
                positions.push(0);
                //make the triangles
                if (i < this.gridSectionsPerLevel && j < this.gridSectionsPerLevel && !this.checkForTunnel(i, j, levelHeight, levelWidth)) {
                    //triangles for first
                    indicies.push(posIndex, posIndex + 2, posIndex + this.gridSectionsPerLevel * 2 + 2);
                    indicies.push(posIndex + 2, posIndex + this.gridSectionsPerLevel * 2 + 2, posIndex + this.gridSectionsPerLevel * 2 + 4);
                    indicies.push(posIndex + 1, posIndex + 3, posIndex + this.gridSectionsPerLevel * 2 + 3);
                    indicies.push(posIndex + 3, posIndex + this.gridSectionsPerLevel * 2 + 3, posIndex + this.gridSectionsPerLevel * 2 + 5);
                }
                //if this is the top then make roof of triangles
                if (this.level == 6 && i < this.gridSectionsPerLevel && j == this.gridSectionsPerLevel) {
                    indicies.push(posIndex, posIndex + 1, posIndex + this.gridSectionsPerLevel * 2 + 2);
                    indicies.push(posIndex + 1, posIndex + this.gridSectionsPerLevel * 2 + 2, posIndex + this.gridSectionsPerLevel * 2 + 3);
                }
                //add normals
                if (j == this.gridSectionsPerLevel && j == this.gridSectionsPerLevel) {
                    normals.push(-1, 0, 0, 1);
                    normals.push(1, 0, 0, 1);
                }
                else {
                    normals.push(-1, 0, 0, 0);
                    normals.push(1, 0, 0, 0);
                }
                //add info
                info.push(0, 0, 0, 0);
                info.push(1, 1, 1, 1);
            }
        }
    }
    checkForTunnel(i, j, levelHeight, levelWidth) {
        if (levelHeight != levelWidth)
            return false;
        if (i > this.gridSectionsPerLevel * 0.4)
            return false;
        return true;
    }
}
;
/* harmony default export */ __webpack_exports__["a"] = (SpurGeometry);


/***/ }),
/* 113 */
/***/ (function(module, exports) {

module.exports = "#version 300 es\n\n\nuniform mat4 u_Model;\nuniform mat4 u_ModelInvTr;\nuniform mat4 u_ViewProj;\nuniform vec2 u_PlanePos; // Our location in the virtual world displayed by the plane\nuniform vec4 u_CityInfo; //[0] = city radius [1] = cityHeight\n\nin vec4 vs_Pos;\nin vec4 vs_Nor;\nin vec4 vs_Col;\nin vec4 vs_Info;\n\nout vec3 fs_Pos;\nout vec4 fs_Nor;\nout vec4 fs_Col;\nout vec4 fs_Info;\nout vec4 fs_RealPos;\nout vec4 fs_LandNormal;\n\nconst float WATER = 0.0;\nconst float LAND = 1.0;\nconst float COAST = 2.0;\nconst float MOUNTAIN = 3.0;\nconst float SPUR = 4.0;\n\nvec4 vs_Pos2;\n\nfloat random1( vec2 p , vec2 seed) {\n  return fract(sin(dot(p + seed, vec2(127.1, 311.7))) * 43758.5453);\n}\n\nfloat random1( vec3 p , vec3 seed) {\n  return fract(sin(dot(p + seed, vec3(987.654, 123.456, 531.975))) * 85734.3545);\n}\n\nvec2 random2( vec2 p , vec2 seed) {\n  return fract(sin(vec2(dot(p + seed, vec2(311.7, 127.1)), dot(p + seed, vec2(269.5, 183.3)))) * 85734.3545);\n}\n\n\nfloat interpNoiseRandom2to1(vec2 p, vec2 seed) {\n  float fractX = fract(p.x);\n  float x1 = floor(p.x);\n  float x2 = x1 + 1.0;\n\n  float fractY = fract(p.y);\n  float y1 = floor(p.y);\n  float y2 = y1 + 1.0;\n\n  float v1 = random1(vec2(x1, y1), seed);\n  float v2 = random1(vec2(x2, y1), seed);\n  float v3 = random1(vec2(x1, y2), seed);\n  float v4 = random1(vec2(x2, y2), seed);\n\n  float i1 = mix(v1, v2, fractX);\n  float i2 = mix(v3, v4, fractX);\n\n  //    return smoothstep(i1, i2, fractY);\n  return mix(i1, i2, fractY);\n\n}\n\nfloat fbm2to1(vec2 p, vec2 seed) {\n  float total  = 0.0;\n  float persistence = 0.5;\n  float octaves = 8.0;\n\n  for(float i = 0.0; i < octaves; i++) {\n    float freq = pow(2.0, i);\n    float amp = pow(persistence, i+1.0);\n    total = total + interpNoiseRandom2to1(p * freq, seed) * amp;\n  }\n  return total;\n}\n\n\n\n\nfloat calcMountainHeight(float x, float y, float z) {\n  float cityRadius = u_CityInfo[0];\n  float cityHeight = u_CityInfo[1];\n  float maxElevation = 15.0;\n  float baseMtHeight =  cityHeight;\n  float baseZ = -10.0;\n  float baseToMaxWidth = u_CityInfo[1];\n  float yNew = 0.0;\n  //wall behind city\n  if (abs(x) < cityRadius) {\n    baseMtHeight= cityHeight * (1.0 - abs(x)/cityRadius);\n  }\n  //wall moving out fromthe city\n  else {\n    baseMtHeight = cityHeight * min(1.0, (abs(x) - cityRadius)/cityRadius);\n  }\n\n\n  //standard mountaints 10 clicks back from back of fortress\n  if (z < baseZ - baseToMaxWidth) {\n    yNew = cityHeight + vs_Pos2.y * maxElevation;\n    fs_Col.r = MOUNTAIN;\n  }\n  //ramp up from mountain height at back of fortress\n  else if (z <= baseZ) {\n    float scale = (baseZ - z) / baseToMaxWidth;\n    //ramp up to ultimate height\n    yNew = mix(baseMtHeight, cityHeight + vs_Pos2.y * maxElevation, scale);\n    fs_Col.r = MOUNTAIN;\n  }\n  //mountain start radiates out from fortress\n  else if (abs(x) >= cityRadius) {\n    float mtStart = (abs(x) - cityRadius) * 0.5;\n    float distToBase = z - baseZ;\n    if (z < mtStart) {\n      float scale = (mtStart - z) / (mtStart - baseZ);\n      if (scale < 0.5) scale = smoothstep(0.0, 1.0, scale);\n      //modelposition.y = baseMtHeight + (baseZ - z) * 0.1  *  vs_Pos.y*(maxElevation - baseMtHeight);\n      yNew = vs_Pos.y * scale + baseMtHeight * scale;\n      fs_Col.r = MOUNTAIN;\n    }\n  }\n  return yNew;\n\n}\n\n/**\nCalculate the normal for each vertex by getting the height of the four\nsurrounding vertex and calculate the slope between them\n*/\nvec4 calcMountainNormal(float x, float y, float z) {\n\n  //get the four surrounding points\n  float sampleDistance = 0.1;\n  vec3 x1 = vec3(x, calcMountainHeight(x, y, z + sampleDistance), z + sampleDistance);\n  vec3 x2 = vec3(x, calcMountainHeight(x, y, z - sampleDistance), z - sampleDistance);\n\n  vec3 z1 = vec3(x + sampleDistance, calcMountainHeight(x + sampleDistance, y, z), z);\n  vec3 z2 = vec3(x - sampleDistance, calcMountainHeight(x - sampleDistance, y, z), z);\n\n  return vec4(normalize(cross(x1-x2, z1-z2)), 1.0);\n\n}\n\nfloat calcSpurXOffset(float y, float z) {\n  return fbm2to1(vec2(y,z), vec2(3.34, 4343.2)) - 0.5;\n}\n\nfloat calcSpurZOffset(float x, float y) {\n  return fbm2to1(vec2(x,y), vec2(3.1, 43.2)) * 0.3;\n}\n\n\nvoid main()\n{\n  vs_Pos2 = vs_Pos;\n  fs_Col = vs_Col;\n  if(vs_Pos.y == 0.0) {\n    vs_Pos2.y = fbm2to1(vec2(vs_Pos2.x/10.0, vs_Pos2.z/10.0), vec2(3.43, 4.43));\n    fs_Col.r = LAND;\n  }\n  fs_Pos = vs_Pos2.xyz;\n  fs_Nor = vs_Nor;\n  fs_Info = vs_Info;\n  vec4 modelposition = vec4(vs_Pos2.x, vs_Pos2.y, vs_Pos2.z, 1.0);\n\n  //this must be our spur stuff\n  if(vs_Pos2.y > 1.0) {\n      fs_Col.r = SPUR;\n    //adjust the x position\n    //float adjustment = fbm2to1(vs_Pos2.yz, vec2(3.34, 4343.2));\n    modelposition.x = vs_Pos2.x + calcSpurXOffset(vs_Pos2.y, vs_Pos2.z);\n    //modelposition.z = vs_Pos2.z - calcSpurZOffset(vs_Pos2.x, vs_Pos2.y);\n  }\n\n  if(vs_Pos2.y <= 1.0) {\n    modelposition.y = calcMountainHeight(modelposition.x, modelposition.y, modelposition.z);\n  }\n\n  fs_LandNormal = calcMountainNormal(modelposition.x, modelposition.y, modelposition.z);\n  fs_RealPos = modelposition.xyzw;\n\n  modelposition = u_Model * modelposition;\n  gl_Position = u_ViewProj * modelposition;\n}\n"

/***/ }),
/* 114 */
/***/ (function(module, exports) {

module.exports = "#version 300 es\nprecision highp float;\n\nuniform vec2 u_PlanePos; // Our location in the virtual world displayed by the plane\nuniform vec4 u_DisplayOptions;\nuniform vec4 u_CityInfo; //[0] = city radius [1] = cityHeight\nuniform sampler2D u_PavementSampler;\nuniform sampler2D u_WhiteStoneSampler;\n\nin vec3 fs_Pos;\nin vec4 fs_Nor;\nin vec4 fs_Col;\nin vec4 fs_Info;\nin vec4 fs_RealPos;\nin vec4 fs_LandNormal;\n\nout vec4 out_Col; // This is the final output color that you will see on your\n                  // screen for the pixel that is currently being processed.\nconst float MAP_THEME = 1.0;\nconst float DAZZLE_THEME = 2.0;\nconst float TEXTURE_THEME = 3.0;\n\nconst float WATER_LINE = 0.4;\nconst float COAST_LINE = 0.43;\n\nconst int WATER = 0;\nconst int LAND = 1;\nconst int COAST = 2;\nconst int MOUNTAIN = 3;\nconst int SPUR = 4;\n\nvec3 fs_LightVector;\nvec3 sunPosition = vec3(12000.0, 10000.0, 8000.0);\n\nfloat random1( vec2 p , vec2 seed) {\n    return fract(sin(dot(p + seed, vec2(127.1, 311.7))) * 43758.5453);\n}\n\nfloat random1( vec3 p , vec3 seed) {\n    return fract(sin(dot(p + seed, vec3(987.654, 123.456, 531.975))) * 85734.3545);\n}\n\nvec2 random2( vec2 p , vec2 seed) {\n    return fract(sin(vec2(dot(p + seed, vec2(311.7, 127.1)), dot(p + seed, vec2(269.5, 183.3)))) * 85734.3545);\n}\n\nfloat interpNoiseRandom2to1(vec2 p, vec2 seed) {\n    float fractX = fract(p.x);\n    float x1 = floor(p.x);\n    float x2 = x1 + 1.0;\n\n    float fractY = fract(p.y);\n    float y1 = floor(p.y);\n    float y2 = y1 + 1.0;\n\n    float v1 = random1(vec2(x1, y1), seed);\n    float v2 = random1(vec2(x2, y1), seed);\n    float v3 = random1(vec2(x1, y2), seed);\n    float v4 = random1(vec2(x2, y2), seed);\n\n    float i1 = mix(v1, v2, fractX);\n    float i2 = mix(v3, v4, fractX);\n\n    //    return smoothstep(i1, i2, fractY);\n    return mix(i1, i2, fractY);\n\n}\n\nfloat fbm2to1(vec2 p, vec2 seed) {\n    float total  = 0.0;\n    float persistence = 0.5;\n    float octaves = 8.0;\n\n    for(float i = 0.0; i < octaves; i++) {\n        float freq = pow(2.0, i);\n        float amp = pow(persistence, i+1.0);\n        total = total + interpNoiseRandom2to1(p * freq, seed) * amp;\n    }\n    return total;\n}\n\n\n\nint getTerrainType() {\n    //check for water\n    if(fs_Col.r == 4.0) {\n        return SPUR;\n    }\n    if(fs_Col.r == 3.0) {\n        return MOUNTAIN;\n    }\n    //check for sand\n    else if(fs_Col.r == 2.0) {\n        return COAST;\n    }\n    return LAND;\n}\n\nfloat calcSpurXOffset(float y, float z) {\n    return fbm2to1(vec2(y,z), vec2(3.34, 4343.2)) - 0.5;\n}\n\n\nvec4 calcSpurNormal(float x, float y, float z) {\n    //get the four surrounding points\n    float sampleDistance = 0.001;\n    vec3 y1 = vec3(x + calcSpurXOffset(y, z + sampleDistance), y, z + sampleDistance);\n    vec3 y2 = vec3(x + calcSpurXOffset(y, z - sampleDistance), y, z - sampleDistance);\n\n    vec3 z1 = vec3(x + calcSpurXOffset(y + sampleDistance, z), y + sampleDistance, z);\n    vec3 z2 = vec3(x + calcSpurXOffset(y - sampleDistance, z), y - sampleDistance, z);\n\n    //right side\n    if(fs_Nor.x == 1.0) {\n        return vec4(normalize(cross(y1-y2, z1-z2)), 1.0);\n    }\n    //left side\n    else if(fs_Nor.x == -1.0) {\n        return vec4(normalize(cross(y1-y2, z2-z1)), 1.0);\n    }\n    else return vec4(0.0, 1.0, 0.0, 1.0);\n}\n\nfloat calcMountainOffset(float x, float z) {\n   return fbm2to1(vec2(x, z), vec2(4.43, 4343.4));\n}\n\nvec4 calcMountainNormal(float x, float y, float z) {\n    //get the four surrounding points\n    float sampleDistance = 0.001;\n    vec3 x1 = vec3(x + calcMountainOffset(x, z + sampleDistance), y, z + sampleDistance);\n    vec3 x2 = vec3(x + calcMountainOffset(x, z - sampleDistance), y, z - sampleDistance);\n\n    vec3 z1 = vec3(x + calcSpurXOffset(y + sampleDistance, z), y + sampleDistance, z);\n    vec3 z2 = vec3(x + calcSpurXOffset(y - sampleDistance, z), y - sampleDistance, z);\n\n    return vec4(normalize(cross(x1-x2, z1-z2)), 1.0);\n}\n\nvec3 adjustColorForSun(vec3 color, vec4 normal) {\n    fs_LightVector = vec3(10, 10, 10);\n\n    vec3 diffuseColor;\n\n    // Calculate the diffuse term for Lambert shading\n    float sunDiffuseTerm = dot(normalize(normal.xyz), normalize(fs_LightVector.xyz));\n    float ambientTerm = 0.1;\n    float sunIntensity = clamp(0.1, 1.0, sunDiffuseTerm + ambientTerm);//Add a small float value to the color multiplier\n    diffuseColor = vec3(color.rgb * sunIntensity);\n    return diffuseColor;\n}\n\nvec3 adjustColorForLights(vec3 color, vec3 normal, vec3 point) {\n    vec3 direction;\n    vec3 lightColor;\n    vec3 sunDirection = normalize(sunPosition - point);\n    vec3 sunColor = vec3(1.5, 1.25, 1.0);\n    vec3 skyColor = vec3(0.16,0.20,0.28);\n    vec3 indirectColor = vec3(0.17, 0.14, 0.10);\n    vec3 fireFlyColor = vec3(0.698, 0.956, 0.145);\n    float hour = 15.0;\n    float night = 0.0;\n    float dawn = 0.0;\n    float sunset = 0.1;\n\n\n\n    //get the soft shadow and subsurface amounts\n    //float shadow = sunShadow(point, 3.0, sdfIndex);\n    float sunIntensity;\n\n\n    if(dot(normal, sunDirection) >= 0.0) {\n        sunIntensity = clamp(dot(normal, sunDirection), 0.0, 1.0);// * shadow;\n    }\n    else {\n        sunIntensity = 0.0;\n    }\n\n    //make sun brighter at noon\n    sunIntensity = sunIntensity * clamp(sunPosition.y/80.0, 0.0, 1.0);\n    float skyIntensity = clamp(0.5 + 0.5*normal.y, 0.0, 1.0);\n\n\n    vec3 indirectDirection = vec3(-sunDirection[0], sunDirection[1], sunDirection[2]);\n    //vec3 indirectDirection = normalize(vec3(0.2, 0.0, 1.0));\n    float indirectIntensity = clamp(dot(normal, indirectDirection), 0.0, 1.0);// * shadow;\n\n    //make sun redder at sunrise/sunset\n    sunColor.r = max(sunColor.r * 3.0 * (dawn*0.8 + sunset), sunColor.r);\n    if(hour < 5.0) {\n        sunIntensity = 0.0;\n    }\n\n\n\n    vec3 intensity = sunIntensity*sunColor +\n     skyIntensity * skyColor\n    + indirectIntensity * indirectColor;\n\n\n    color = color * intensity;\n    return color;\n\n}\n\nvec3 getMapThemeBackground() {\n    return vec3(164.0 / 255.0, 233.0 / 255.0, 1.0);\n}\n\nvec3 getMapThemeColor() {\n    vec3 groundColor = vec3(.0, 1, 0);\n    int type = getTerrainType();\n    //add population density whic is stored in last of normal\n\n\n    //check for water\n    if(type == WATER) {\n        groundColor = vec3(0.0, 0.0, 1.0);\n    }\n    //check for sand\n    else if(type == COAST) {\n        groundColor = mix(vec3(0.0, 1.0, 0.0), vec3(1.0, 1.0, 0.0), (COAST_LINE - fs_Pos.y) * 33.33);\n    }\n    else if(type == LAND) {\n        groundColor = vec3(.0, 1, 0);\n        if(u_DisplayOptions.r > 0.0) {\n            groundColor = groundColor * (1.0 - fs_Nor.a*2.0);\n        }\n    }\n    else if(type == SPUR) {\n        vec4 normal = calcSpurNormal(fs_Pos.x, fs_Pos.y, fs_Pos.z);\n        return adjustColorForSun(vec3(1.0, 1.0, 1.0), normal);\n    }\n\n    //building possibility\n    if(fs_Info.x == 1.0 && u_DisplayOptions.g > 0.0) {\n        groundColor = vec3(0.5, 0.5, 0.5);\n    }\n    //building locations\n    if(fs_Info.y == 1.0) {\n        groundColor = vec3(0.0, 0.0, 0.0);\n    }\n\n    return groundColor;\n}\n\nvec3 getDazzleThemeColor() {\n    int type = getTerrainType();\n    vec3 groundColor;\n    if(type == WATER) {\n        vec3 waterColor = vec3(0.0, 0.0, 0.2);\n        vec3 highlightColor = vec3(0.3, 0.3, 0.8);\n\n        float fbm = fbm2to1(fs_Pos.xz* 5.0, vec2(4.4343, 4.343));\n        groundColor = waterColor * fbm;\n        float hBreak = 0.70;\n        if(fbm > hBreak) {\n            //groundColor = highlightColor;\n            groundColor = mix(waterColor * fbm, highlightColor, (fbm - hBreak) / (1.0 - hBreak));//);\n        }\n    }\n    else if(type == COAST) {\n       groundColor = mix(vec3(0.0, 0.3, 0.2), vec3(0.1, 0.1, 0.0), (COAST_LINE - fs_Pos.y) * 33.33);\n    }\n    else if(type == SPUR) {\n        vec4 normal = calcSpurNormal(fs_Pos.x, fs_Pos.y, fs_Pos.z);\n        return adjustColorForSun(vec3(1.0, 1.0, 1.0), normal);\n    }\n    if(type == LAND) {\n        groundColor = mix(vec3(0.0, 0.3, 0.2), vec3(0.7, 0.7, 1.0), (fs_Pos.y - COAST_LINE) / COAST_LINE);\n    }\n    groundColor = mix(vec3(0.0, 0.3, 0.2), vec3(0.7, 0.7, 1.0), (fs_Pos.y - COAST_LINE) / COAST_LINE);\n    if(u_DisplayOptions.r > 0.0) {\n        groundColor = groundColor * (1.0 + pow(fs_Nor.a*2.0, 2.0));\n    }\n\n    return groundColor;\n\n}\n\nvec3 getDazzleThemeBackground() {\n    return vec3(0.0, 0.0, 0.0);\n}\n\n\nvec3 getTopPlazaColor(float x, float z) {\n    if(abs(fs_Pos.x) < 0.4) {\n        return texture(u_PavementSampler, fs_Pos.xz).xyz;\n    }\n    float elevation = fbm2to1(vec2(fs_RealPos.x + 20.0, fs_RealPos.z), vec2(3.43, 5.454));\n    return mix(vec3(0.0, 0.4, 0.2), vec3(0.5, 0.7, .3), elevation);\n}\n\nvec3 getTextureThemeColor() {\n    int type = getTerrainType();\n    vec3 groundColor;\n\n    if(type == SPUR) {\n        vec4 normal = calcSpurNormal(fs_Pos.x, fs_Pos.y, fs_Pos.z);\n        //signifies we are on the top\n        if (fs_Nor.a == 1.0) {\n            return getTopPlazaColor(fs_Pos.x, fs_Pos.z);\n        }\n        return adjustColorForLights(vec3(0.5, 0.5, 0.5), normal.xyz, fs_RealPos.xyz).xyz;\n    }\n\n\n    vec3 landColor = mix(vec3(0.0, 0.4, 0.2), vec3(1.0, 1.0, .3), fs_Pos.y);\n    vec3 mountainColor = mix(vec3(0.4, 0.4, 0.4), vec3(0.0, 0.0, .0), fs_Pos.y);\n\n    float percentMountain = 0.0;\n    if(type == MOUNTAIN) {\n        groundColor = mix(vec3(0.5, 0.5, 0.5), vec3(0.0, 0.4, 0.2), fs_Pos.y);\n        percentMountain = 1.0;\n    }\n    //the baVnd along the transition from land to mountain\n    if(\n    (\n        abs(abs(fs_Pos.x)*0.5 - fs_Pos.z - 10.0) < 10.0\n        || (abs(fs_Pos.x) - 1.0 < u_CityInfo[0] && fs_Pos.z < 0.5)\n        )\n        && fs_Pos.z > -10.0\n    ) {\n        float percentByXY = (abs(fs_Pos.x)*0.5 - fs_Pos.z - 10.0) / 10.0;\n        float percentByElevation =  fs_RealPos.y / 2.0;\n\n        percentMountain = clamp(0.0, 1.0, percentByXY);\n\n    }\n\n    vec3 color = mix(landColor, mountainColor,  percentMountain);\n    //hack for back of caslte\n    if(abs(fs_Pos.x) + 0.5 < u_CityInfo[0] && fs_Pos.z <= -9.0) color = mountainColor;\n    return adjustColorForLights(color, fs_LandNormal.xyz, fs_RealPos.xyz).xyz;\n\n}\n\nvec3 getTextureThemeBackground() {\n    return vec3(0.65, .91, 1.0);\n}\n\n\nvoid main()\n{\n    vec3 groundColor = vec3(.0, 0.5, 0);\n    vec3 backgroundColor = vec3(1.0, 1.0, 1.0);\n\n\n    if(u_DisplayOptions[2] == MAP_THEME) {\n        groundColor = getMapThemeColor();\n        backgroundColor = getMapThemeBackground();\n    }\n    else if(u_DisplayOptions[2] == DAZZLE_THEME) {\n        groundColor = getDazzleThemeColor();\n        backgroundColor = getDazzleThemeBackground();\n    }\n    else if(u_DisplayOptions[2] == TEXTURE_THEME) {\n        groundColor = getTextureThemeColor();\n        backgroundColor = getTextureThemeBackground();\n    }\n\n    float t = clamp(smoothstep(40.0, 50.0, length(fs_Pos)), 0.0, 1.0); // Distance fog\n\n    out_Col = vec4(mix(groundColor, backgroundColor, t), 1.0);\n}\n"

/***/ }),
/* 115 */
/***/ (function(module, exports) {

module.exports = "#version 300 es\n\n\nuniform mat4 u_Model;\nuniform mat4 u_ModelInvTr;\nuniform mat4 u_ViewProj;\nuniform vec2 u_PlanePos; // Our location in the virtual world displayed by the plane\n\nin vec4 vs_Pos;\nin vec4 vs_Nor;\nin vec4 vs_Col;\nin vec4 vs_Translate;\n\nout vec3 fs_Pos;\nout vec4 fs_Nor;\nout vec4 fs_Col;\nout vec4 fs_Translate;\n\nfloat random1( vec2 p , vec2 seed) {\n  return fract(sin(dot(p + seed, vec2(127.1, 311.7))) * 43758.5453);\n}\n\nfloat random1( vec3 p , vec3 seed) {\n  return fract(sin(dot(p + seed, vec3(987.654, 123.456, 531.975))) * 85734.3545);\n}\n\nvec2 random2( vec2 p , vec2 seed) {\n  return fract(sin(vec2(dot(p + seed, vec2(311.7, 127.1)), dot(p + seed, vec2(269.5, 183.3)))) * 85734.3545);\n}\n\nvoid main()\n{\n    fs_Pos = vs_Pos.xyz;\n    fs_Translate = vs_Translate;\n    fs_Col = vs_Col;\n    vec4 modelposition = vec4(vs_Pos.x*1.05, 0.501 + vs_Col.y / 10.0, vs_Pos.z, 1.0);\n   //scale by width and height\n    modelposition.x = modelposition.x * vs_Col.x; //vs_Col.x = length\n    modelposition.z = modelposition.z * vs_Col.y; //vs_Col.y = width;\n\n    //fs_Pos.y = vs_Pos.y * vs_Col.y;\n\n    //rotate\n    float s = sin(vs_Col.z);\n    float c = cos(vs_Col.z);\n    modelposition.xz = mat2(c, s, -s, c) * modelposition.xz;\n\n    //translate\n    modelposition.xyz += vs_Translate.xyz;\n\n    modelposition = u_Model * modelposition;\n    gl_Position = u_ViewProj * modelposition;\n}\n"

/***/ }),
/* 116 */
/***/ (function(module, exports) {

module.exports = "#version 300 es\nprecision highp float;\n\nuniform vec2 u_PlanePos; // Our location in the virtual world displayed by the plane\nuniform vec4 u_DisplayOptions;\n\nin vec3 fs_Pos;\nin vec4 fs_Nor;\nin vec4 fs_Col; //fs_Col.x = length, fs_Col.y = width\nin vec4 fs_Translate;\n\n//in float fs_Sine;\n\nout vec4 out_Col; // This is the final output color that you will see on your\n                  // screen for the pixel that is currently being processed.\n\nfloat MAP_THEME = 1.0;\nfloat DAZZLE_THEME = 2.0;\n\n\nvec2 random2( vec2 p , vec2 seed) {\n    return fract(sin(vec2(dot(p + seed, vec2(311.7, 127.1)), dot(p + seed, vec2(269.5, 183.3)))) * 85734.3545);\n}\n\n/*\nDetermine worley noise for given position and grid size\n- param vec2 pos :      the position to test for\n- param vec2 gridSize:  the size of the grid\n- param vec2 seed:       the random seed\n- return vec2:          the location of the closest worley point\n*/\nvec2 getClosestWorleyPoint2d(vec2 pos, vec2 gridSize, vec2 seed) {\n    vec2 centerGridPos = pos - mod(pos, gridSize);  //the corner of the grid in which this point resides\n    vec2 closestWorleyPoint = vec2(1.0, 1.0);\n    float closestDistance = (gridSize.x + gridSize.y) * 2.0;\n\n    vec2 currentGridPos;\n    vec2 currentWorleyPoint;\n    float currentDistance;\n    //loop through the 9 grid sections surrouding this one to find the closes worley point\n    for(float gridX = -1.0; gridX <= 1.0; gridX += 1.0) {\n        for(float gridY = -1.0; gridY <= 1.0; gridY += 1.0) {\n            currentGridPos = centerGridPos + vec2(gridX, gridY) * gridSize;\n            currentWorleyPoint = currentGridPos + random2(currentGridPos, seed) * gridSize;\n            currentDistance = length(currentWorleyPoint - pos);\n            if(currentDistance < closestDistance) {\n                closestDistance = currentDistance;\n                closestWorleyPoint = currentWorleyPoint;\n            }\n        }\n    }\n\n    return closestWorleyPoint;\n}\n\nfloat getWorleyNoise2d(vec2 pos, vec2 gridSize, vec2 seed) {\n    vec2 wPoint = getClosestWorleyPoint2d(pos, gridSize, seed);\n    return length(wPoint - pos) / length(gridSize);\n}\n\n\nvec3 getMapThemeColor() {\n    //stripes in the road\n    if(abs(fs_Pos.z) < 0.1) {\n        return vec3(1.0, 1.0, 0.0);\n    }\n\n    return vec3(1.0, 0.0, 0.0);\n\n}\nvec3 getDazzleThemeColor() {\n    vec3 roadColor = vec3(0.301, 0.274, 0.219);\n    vec3 stripeColor = vec3(1.0, 1.0, 1.0);\n\n    //stripes in the highway\n    if(abs(fs_Pos.z) < 0.05 && fs_Col.y >= 0.5) {\n       roadColor = stripeColor;\n    }\n    //dashes on the streets\n    if(\n      abs(fs_Pos.z) < 0.05\n      && fs_Col.y < 0.5\n      && floor(mod(fs_Pos.x * 8.0, 2.0)) == 0.0\n    ) {\n        roadColor =  stripeColor;\n    }\n\n    //add worley noise to the road\n    vec2 pos = fs_Pos.xz * 500.0;\n    vec2 seed = vec2(1.23,2.32);\n    vec2 gridSize = vec2(1.0, 1.0); //size of our road\n    float wNoise = getWorleyNoise2d(pos, gridSize, seed);\n    roadColor = mix(roadColor, vec3(0.0, 0.0, 0.0), pow(wNoise,2.0));\n\n\n    return roadColor;\n\n}\nvec3 getDazzleThemeBackground() {\n    return vec3(0.0, 0.0, 0.0);\n}\nvec3 getMapThemeBackground() {\n    return vec3(164.0 / 255.0, 233.0 / 255.0, 1.0);\n}\n\nvoid main()\n{\n\n    vec3 roadColor = vec3(0.0, 0.0, 0.0);\n    vec3 backgroundColor = vec3(0,0,0);\n\n    if(u_DisplayOptions[2] == MAP_THEME) {\n        roadColor = getMapThemeColor();\n        backgroundColor = getMapThemeBackground();\n    }\n    else if(u_DisplayOptions[2] == DAZZLE_THEME) {\n        roadColor = getDazzleThemeColor();\n        backgroundColor = getDazzleThemeBackground();\n    }\n\n    float t = clamp(smoothstep(40.0, 50.0, length(fs_Translate.xz)), 0.0, 1.0); // Distance fog\n    out_Col = vec4(mix(roadColor, backgroundColor, t), 1.0);\n}\n"

/***/ }),
/* 117 */
/***/ (function(module, exports) {

module.exports = "#version 300 es\n\n\nuniform mat4 u_Model;\nuniform mat4 u_ModelInvTr;\nuniform mat4 u_ViewProj;\nuniform vec2 u_PlanePos; // Our location in the virtual world displayed by the plane\n\n\nin vec4 vs_Pos;\nin vec4 vs_Nor;\nin vec4 vs_Col;\nin vec4 vs_Rotate;\nin vec4 vs_Scale;\nin vec4 vs_Translate;\nin vec4 vs_BlockInfo;\nin vec4 vs_Adjustment;\n\nflat out int fs_Face;\nout vec3 fs_Pos;   //position on unit cube (0 or 1)\nout vec4 fs_Nor;\nout vec4 fs_Col;   //scale\nout vec4 fs_Translate;\nout vec4 fs_BlockInfo;\nout vec4 fs_Scale;\n\nconst float CUBE = 1.0;\nconst float PYRAMID = 2.0;\nconst float TENT = 3.0;\nconst float TRI_TUBE = 4.0;\nconst float QUARTER_PYRAMID = 5.0;\nconst float SLANT = 6.0;\nconst float WEDGE = 7.0;\n\nconst int FACE_BACK = 0;\nconst int FACE_FRONT = 1;\nconst int FACE_LEFT = 2;\nconst int FACE_RIGHT = 3;\nconst int FACE_BOTTOM = 4;\nconst int FACE_TOP = 5;\n\nfloat adjust1; //contained in vs_BlockInfo[3]\nfloat adjust2;  //contained in vs_BlockInfo[2]\nfloat adjust3; //contained in vs_BlockInfo[3]\nfloat adjust4; //contained in vs_BlockInfo[3]\nfloat scaleX;  //contained in vs_Col[0];\nfloat scaleY; //contained in vs_Col[1];\nfloat scaleZ; //contained in vs_Col[2];\nbool scaleFromCenter; //boolean indicating if scaling should be done from the center - contained in vs_Col[3]\n\nfloat random1( vec2 p , vec2 seed) {\n  return fract(sin(dot(p + seed, vec2(127.1, 311.7))) * 43758.5453);\n}\n\nfloat random1( vec3 p , vec3 seed) {\n  return fract(sin(dot(p + seed, vec3(987.654, 123.456, 531.975))) * 85734.3545);\n}\n\nvec2 random2( vec2 p , vec2 seed) {\n  return fract(sin(vec2(dot(p + seed, vec2(311.7, 127.1)), dot(p + seed, vec2(269.5, 183.3)))) * 85734.3545);\n}\n\n\nfloat getVertexNum() {\n   if(vs_BlockInfo.x < 10.0 ) {\n       return vs_Pos.x + vs_Pos.z * 2.0 + vs_Pos.y * 4.0;\n   }\n\n   return 0.0;\n}\n\n/**\n* Get the face number of the block\n* 0 - Front\n* 1 - Back\n* 2 - Left\n* 3 - Right\n* 4 - Bottom\n* 5 - Top\n*/\nint getFaceNum() {\n    if     (vs_Nor.z == -1.0) { return FACE_BACK; }\n    else if(vs_Nor.z ==  1.0) { return FACE_FRONT; }\n    else if(vs_Nor.x == -1.0) { return FACE_LEFT; }\n    else if(vs_Nor.x ==  1.0) { return FACE_RIGHT; }\n    else if(vs_Nor.y == -1.0) { return FACE_BOTTOM; }\n    else if(vs_Nor.y ==  1.0) { return FACE_TOP; }\n    return 0;\n}\n\nvec3 getCubeVertexPosition() {\n    float vertexNum = getVertexNum();\n    //scale bottom toward middle\n    if(vertexNum < 4.0) {\n        return mix(vec3(0.5, 0.0, 0.5), vs_Pos.xyz, vs_BlockInfo[2]);\n    }\n    //scale top toward middle\n    else {\n        return mix(vec3(0.5, 1.0, 0.5), vs_Pos.xyz, vs_BlockInfo[3]);\n    }\n}\n\nvec3 getSlantVertexPosition() {\n    float vertexNum = getVertexNum();\n    //scale bottom toward middle\n    if(vertexNum == 0.0 || vertexNum == 2.0 || vertexNum == 4.0 || vertexNum == 6.0) {\n        return vs_Pos.xyz;\n    }\n    //scale top toward middle\n    else if(vertexNum == 1.0 || vertexNum == 3.0) {\n        return mix(vec3(0.0, 0.0, vs_Pos.z), vs_Pos.xyz, vs_BlockInfo[2]);\n    }\n    else {\n        return mix(vec3(0.0, 1.0, vs_Pos.z), vs_Pos.xyz, vs_BlockInfo[3]);\n    }\n}\n\nvec3 getTentVertexPosition() {\n    float vertexNum = getVertexNum();\n    //scale bottom toward middle\n    if(vertexNum < 4.0) {\n        return mix(vec3(0.5, 0.0, 0.5), vs_Pos.xyz, adjust2);\n    }\n    //scale top toward middle\n    else {\n        return mix(vec3(0.5, vs_Pos[1], vs_Pos[2]), vs_Pos.xyz, adjust1);\n    }\n}\n\nvec3 getTriTubeVertexPosition() {\n    float vertexNum = getVertexNum();\n    //scale bottom toward middle\n    if(vertexNum < 3.0) {\n        return mix(vec3(0.0, 0.0, 0.0), vs_Pos.xyz, vs_BlockInfo[2]);\n    }\n    else if(vertexNum == 3.0) {\n        return mix(vec3(0.0, 0.0, 0.0), vec3(0.5, 0.0, 0.5), vs_BlockInfo[2]);\n    }\n    else if(vertexNum < 7.0) {\n        return mix(vec3(0.0, 1.0, 0.0), vs_Pos.xyz, vs_BlockInfo[3]);\n    }\n    else { //vertex num = 7\n        return mix(vec3(0.0, 1.0, 0.0), vec3(0.5, 1.0, 0.5), vs_BlockInfo[3]);\n    }\n}\n\nvec3 getQuarterPyramidVertexPosition() {\n    float vertexNum = getVertexNum();\n    //scale bottom toward middle\n    if(vertexNum < 4.0) {\n        return mix(vec3(0.0, 0.0, 0.0), vs_Pos.xyz, vs_BlockInfo[2]);\n    }\n    else if(vertexNum < 7.0) {\n        return mix(vec3(0.0, 1.0, 0.0), vs_Pos.xyz, vs_BlockInfo[3]);\n    }\n    else {\n        return mix(vec3(0.0, 1.0, 0.0), vec3(0.5, 1.0, 0.5), vs_BlockInfo[3]);\n    }\n}\n\nvec3 getWedgeVertexPosition() {\n    float vertexNum = getVertexNum();\n    vec3 pos = vs_Pos.xyz;\n    //adjust interior points to be smaller\n    if(vertexNum == 0.0 || vertexNum == 4.0 || vertexNum == 2.0 || vertexNum == 6.0) {\n        pos = mix(vec3(vs_Pos.xy, 0.5), vs_Pos.xyz, adjust1);\n    }\n\n    if(vertexNum == 4.0 || vertexNum == 5.0) {\n        pos.y = pos.y * adjust2;\n    }\n\n    if(vertexNum == 6.0 || vertexNum == 7.0) {\n        pos.y = pos.y * adjust3;\n    }\n\n    //slope toward the center\n    if(vertexNum == 5.0 || vertexNum == 7.0) {\n        //adjust4 = 0.0;\n        float innerZ = mix(0.5, vs_Pos.z, adjust1);\n        pos.x = mix(-0.0, pos.x, adjust4);\n        pos.z = mix(innerZ, pos.z, adjust4);\n    }\n\n    return pos;\n}\n\n\nmat3 rotationMatrix(int axis, float angle) {\n    float c = cos(angle);\n    float s = sin(angle);\n    mat3 rot;\n    if(axis == 0) {\n        rot = mat3(\n        1.0, 0.0, 0.0,\n        0.0, c,   -s,\n        0.0, s,   c);\n    }\n\n    if(axis == 1) {\n        rot = mat3(\n        c,   0.0, s,\n        0.0, 1.0, 0.0,\n        -s,  0.0, c\n        );\n    }\n    if(axis == 2) {\n        rot =mat3(\n        c,  -s,   0.0,\n        s,   c,   0.0,\n        0.0, 0.0, 1.0\n        );\n    }\n\n    return rot;\n}\n\nvec3 rotate(vec3 pos, vec3 rotation) {\n    mat3 rot;\n    if(vs_Rotate.x > 0.0) {\n        mat3 rot = rotationMatrix(0, rotation.x);\n        pos = rot * pos;\n    }\n    if(vs_Rotate.y > 0.0) {\n        mat3 rot = rotationMatrix(1, rotation.y);\n        pos = rot * pos;\n    }\n    return pos;\n}\n\nvec3 getVertexPosition() {\n    vec3 shapePos;\n    if(vs_BlockInfo[0] == CUBE\n      || vs_BlockInfo[0] == PYRAMID\n    ) {\n        shapePos = getCubeVertexPosition();\n    }\n    else if (vs_BlockInfo[0] == TENT) shapePos = getTentVertexPosition();\n    else if (vs_BlockInfo[0] == TRI_TUBE) shapePos = getTriTubeVertexPosition();\n    else if (vs_BlockInfo[0] == QUARTER_PYRAMID) shapePos = getQuarterPyramidVertexPosition();\n    else if (vs_BlockInfo[0] == SLANT) shapePos = getSlantVertexPosition();\n    else if (vs_BlockInfo[0] == WEDGE) shapePos = getWedgeVertexPosition();\n    else shapePos = vs_Pos.xyz;\n\n    if(scaleFromCenter) {\n        shapePos = shapePos - vec3(0.5, 0.5, 0.5);\n    }\n    shapePos.x = shapePos.x * scaleX;\n    shapePos.y = shapePos.y * scaleY;\n    shapePos.z = shapePos.z * scaleZ;\n    shapePos = rotate(shapePos, vs_Rotate.xyz);\n    return shapePos;\n}\n\nvec3 getWedgeNormal() {\n    float vertexNum = getVertexNum();\n\n    //get the angle which the wedge causes the vertex to adjust\n    float angle = atan(scaleZ * 0.5 * (1.0 - adjust1) / scaleX);\n    if(vertexNum == 0.0 || vertexNum == 1.0 || vertexNum == 4.0 || vertexNum == 5.0) {\n        return rotate(vs_Nor.xyz, vec3(0.0, -angle, 0.0));\n    }\n    else {\n        return rotate(vs_Nor.xyz, vec3(0.0, angle, 0.0));\n    }\n}\n\nvec4 getVertexNormal() {\n    vec3 normal = vs_Nor.xyz;\n    if(vs_BlockInfo[0] == CUBE)  normal = normal;\n//    else if(vs_BlockInfo[0] == PYRAMID) { }\n//    else if (vs_BlockInfo[0] == TENT) normal = getTentVertexPosition();\n//    else if (vs_BlockInfo[0] == TRI_TUBE) normal = getTriTubeVertexPosition();\n//    else if (vs_BlockInfo[0] == QUARTER_PYRAMID) normal = getQuarterPyramidVertexPosition();\n//    else if (vs_BlockInfo[0] == SLANT) normal = getSlantVertexPosition();\n    else if (vs_BlockInfo[0] == WEDGE) normal = getWedgeNormal();\n\n    return vec4(rotate(normal.xyz, vs_Rotate.xyz), 1.0);\n\n}\n\n\nvoid main()\n{\n    fs_Pos = vs_Pos.xyz;\n    fs_Translate = vs_Translate;\n    fs_BlockInfo = vs_BlockInfo;\n    fs_Face = getFaceNum();\n    fs_Scale = vs_Scale;\n    adjust1 = vs_Adjustment[0];\n    adjust2 = vs_Adjustment[1];\n    adjust3 = vs_Adjustment[2];\n    adjust4 = vs_Adjustment[3];\n    scaleX = vs_Scale[0];\n    scaleY = vs_Scale[1];\n    scaleZ = vs_Scale[2];\n    fs_Nor = getVertexNormal();\n    scaleFromCenter = (vs_Scale[3] == 1.0);\n\n    vec4 modelposition = vec4(getVertexPosition(), 1.0);\n\n\n    modelposition.xyz += vs_Translate.xyz;\n\n    modelposition = u_Model * modelposition;\n    gl_Position = u_ViewProj * modelposition;\n}\n\n///redblobgames.com/maps/mapgen4"

/***/ }),
/* 118 */
/***/ (function(module, exports) {

module.exports = "#version 300 es\nprecision highp float;\n\nuniform vec2 u_PlanePos; // Our location in the virtual world displayed by the plane\nuniform vec4 u_DisplayOptions; //\nuniform sampler2D u_PavementSampler;\nuniform sampler2D u_WhiteStoneSampler;\n\nin vec3 fs_Pos;\nin vec4 fs_Nor;\nin vec4 fs_Col;\nin vec4 fs_Translate;\nin vec4 fs_BlockInfo;\nin vec4 fs_Scale;\nflat in int fs_Face;\n\n//in float fs_Sine;\n\nout vec4 out_Col; // This is the final output color that you will see on your\n                  // screen for the pixel that is currently being processed.\n\nfloat MAP_THEME = 1.0;\nfloat DAZZLE_THEME = 2.0;\nfloat TEXTURED_THEME = 3.0;\n\nfloat TEXTURE_WALL     = 0.0;\nfloat TEXTURE_ROAD     = 1.0;\nfloat TEXTURE_ROOF     = 2.0;\nfloat TEXTURE_BUILDING = 3.0;\nfloat TEXTURE_LEVEL_GROUND = 4.0;\nfloat TEXTURE_TURRET = 5.0;\nfloat TEXTURE_FOUNDATION = 6.0;\n\nvec3 sunPosition = vec3(12000.0, 10000.0, 8000.0);\n\nconst float CUBE = 1.0;\nconst float PYRAMID = 2.0;\nconst float TENT = 3.0;\nconst float TRI_TUBE = 4.0;\nconst float QUARTER_PYRAMID = 5.0;\nconst float SLANT = 6.0;\nconst float WEDGE = 7.0;\n\nconst int FACE_BACK = 0;\nconst int FACE_FRONT = 1;\nconst int FACE_LEFT = 2;\nconst int FACE_RIGHT = 3;\nconst int FACE_BOTTOM = 4;\nconst int FACE_TOP = 5;\n\n\nvec3 fs_LightVector;\n\nfloat random1( vec2 p , vec2 seed) {\n    return fract(sin(dot(p + seed, vec2(127.1, 311.7))) * 43758.5453);\n}\n\nfloat random1( vec3 p , vec3 seed) {\n    return fract(sin(dot(p + seed, vec3(987.654, 123.456, 531.975))) * 85734.3545);\n}\n\nvec2 random2( vec2 p , vec2 seed) {\n    return fract(sin(vec2(dot(p + seed, vec2(311.7, 127.1)), dot(p + seed, vec2(269.5, 183.3)))) * 85734.3545);\n}\nfloat interpNoiseRandom2to1(vec2 p, vec2 seed) {\n    float fractX = fract(p.x);\n    float x1 = floor(p.x);\n    float x2 = x1 + 1.0;\n\n    float fractY = fract(p.y);\n    float y1 = floor(p.y);\n    float y2 = y1 + 1.0;\n\n    float v1 = random1(vec2(x1, y1), seed);\n    float v2 = random1(vec2(x2, y1), seed);\n    float v3 = random1(vec2(x1, y2), seed);\n    float v4 = random1(vec2(x2, y2), seed);\n\n    float i1 = mix(v1, v2, fractX);\n    float i2 = mix(v3, v4, fractX);\n\n    //    return smoothstep(i1, i2, fractY);\n    return mix(i1, i2, fractY);\n\n}\n\nfloat fbm2to1(vec2 p, vec2 seed) {\n    float total  = 0.0;\n    float persistence = 0.5;\n    float octaves = 8.0;\n\n    for(float i = 0.0; i < octaves; i++) {\n        float freq = pow(2.0, i);\n        float amp = pow(persistence, i+1.0);\n        total = total + interpNoiseRandom2to1(p * freq, seed) * amp;\n    }\n    return total;\n}\n\nvec3 getMapThemeColor() {\n    vec3 buildingColor = vec3(0.0, 0.0, 0.0);\n    if(fs_Pos.x > 0.999999) {\n        buildingColor = vec3(0.8, 0.8, 0.8);\n    }\n    else if(fs_Pos.z < 0.0001) {\n        buildingColor = vec3(0.3, 0.3, 0.3);\n    }\n    else if(fs_Pos.z > 0.999999) {\n        buildingColor = vec3(0.6, 0.6, 0.6);\n    }\n    else if(fs_Pos.y > 0.99999) {\n        buildingColor = vec3(0.9, 0.9, 0.9);\n\n    }\n\n\n    if(fs_BlockInfo[1] == TEXTURE_ROAD) {\n        buildingColor = vec3(0.9, 0.4, 0.4);\n    }\n\n    if(fs_BlockInfo[1] == TEXTURE_LEVEL_GROUND) {\n        buildingColor = texture(u_PavementSampler, fs_Pos.xz * 3.0).xyz;\n        //buildingColor = mySample.xyz;\n    }\n\n\n    return buildingColor;\n}\n\nvec3 getDazzleThemeColor() {\n    vec3 color = vec3(1.0, 1.0, 1.0);\n\n    //highlight the edges\n    float lum = 500.0 * (\n        max(pow(fs_Pos.x -0.5, 4.0) * pow(fs_Pos.z - 0.5, 4.0),\n        max(pow(fs_Pos.x -0.5, 4.0) * pow(fs_Pos.y - 0.5, 4.0),\n        pow(fs_Pos.z -0.5, 4.0) * pow(fs_Pos.y - 0.5, 4.0)))\n    );\n    //lum = smoothstep(0.9999, 1.0, lum);\n    color = (1.0-lum) * color;\n\n    return color;\n}\n\nvec3 getRoofColor() {\n    return vec3(0.0, 0.0, 0.5);\n}\n\n/**\n* Divid the geometry into segments based on scale and send back where this point falls in its segment\n**/\nvec2 getBuildingFloorWallPosition() {\n    vec2 floorSegmentPos = vec2(0.0, 0.0);\n\n    //handle the case for top and bottom faces\n    if(fs_Face == FACE_BOTTOM || fs_Face == FACE_TOP) {\n        return vec2(0.0, 0.0);\n    }\n    float numFloors = ceil(fs_Scale.y);\n    floorSegmentPos.y = fs_Pos.y * numFloors - floor(fs_Pos.y * numFloors);\n\n\n    //handle front and back faces\n    if(fs_Face == FACE_FRONT || fs_Face == FACE_BACK) { float numSegments = ceil(fs_Scale.x);\n        floorSegmentPos.x = fs_Pos.x * numSegments - floor(fs_Pos.x * numSegments);\n        return floorSegmentPos;\n    }\n\n    //handle front and back faces\n    float numSegments = ceil(fs_Scale.z);\n    floorSegmentPos.x = fs_Pos.z * numSegments - floor(fs_Pos.z * numSegments);\n    return floorSegmentPos;\n}\n\nbool posInWindow(vec2 pos) {\n    //make sure this piece isn't too skinny\n    if(fs_Scale.y < 0.5 && fs_Scale.z > 1.5) return false;\n    if(fs_Scale.y < 0.5 && fs_Scale.x > 1.5) return false;\n    return (true\n        && pos.y > 0.33\n        && pos.x * 4.0 - 1.5 > smoothstep(0.0, 1.0, pos.y * 2.0 - 1.0)\n        && pos.x * 4.0 - 1.5 < smoothstep(0.0, 1.0, 1.0 -  pos.y * 2.0  + 1.0)\n    );\n}\n\n\nvec3 getBuildingCubeColor() {\n    vec2 wallPos = getBuildingFloorWallPosition();\n    if(posInWindow(wallPos) ) {\n        return vec3(0.0);\n    }\n    float fbm = fbm2to1(vec2(fs_Pos.x + fs_Pos.y/2.0, fs_Pos.z + fs_Pos.y/2.0)*500.0, vec2(3.43, 43.23));\n    return vec3((fbm + 1.0) / 2.0);\n}\n\n\nfloat calcPlasterOffset(float x, float z) {\n    return fbm2to1(vec2(x,z), vec2(3.34, 4343.2)) - 0.5;\n}\n\nvec4 calcPlasterNormal(float x, float z) {\n    //get the four surrounding points\n    float sampleDistance = 0.001;\n    vec3 x1 = vec3(x, calcPlasterOffset(x, z + sampleDistance), z + sampleDistance);\n    vec3 x2 = vec3(x, calcPlasterOffset(x, z - sampleDistance), z - sampleDistance);\n\n    vec3 z1 = vec3(x + sampleDistance, calcPlasterOffset(x + sampleDistance, z), z);\n    vec3 z2 = vec3(x - sampleDistance, calcPlasterOffset(x - sampleDistance, z), z);\n\n    return vec4(normalize(cross(x1-x2, z1-z2)), 1.0);\n\n}\n\nvec3 getOrthogonal(vec3 nor) {\n\n    int imin = 0;\n    for(int i = 0; i < 3; ++i) {\n        if(abs(nor[i]) < abs(nor[imin])) imin = i;\n    }\n    vec3 orth = vec3(0.0, 0.0, 0.0);\n    float dt = nor[imin];\n    orth[imin] = 1.0;\n    for(int i = 0; i < 3; i++) {\n        orth[i] = dt*nor[i];\n    }\n    return orth;\n\n}\n\nmat4 getNormalTransform(vec3 nor) {\n    mat4 mat;\n    mat[0][0] = nor[0];\n    mat[0][1] = nor[1];\n    mat[0][2] = nor[2];\n    mat[0][3] = 0.0;\n\n    vec3 orth = getOrthogonal(nor);\n    mat[1][0] = orth[0];\n    mat[1][1] = orth[1];\n    mat[1][2] = orth[2];\n    mat[1][3] = 0.0;\n\n    vec3 orth2 = cross(nor, orth);\n    mat[2][0] = orth2[0];\n    mat[2][1] = orth2[1];\n    mat[2][2] = orth2[2];\n    mat[2][3] = 0.0;\n\n    mat[3][0] = 0.0;\n    mat[3][1] = 0.0;\n    mat[3][2] = 0.0;\n    mat[3][3] = 1.0;\n\n    return mat;\n}\n\nvec3 getPlasterNormal() {\n\n    //get the general normal for material\n    vec2 wallPos = getBuildingFloorWallPosition();\n\n    //add a ledge\n    if(wallPos.y > 0.95) {\n        return mix(fs_Nor.xyz, vec3(0.0, 1.0, 0.0), (wallPos.y - 0.95) * 20.0);\n    }\n    else if(wallPos.y > 0.90) {\n        return mix(vec3(0.0, -1.0, 0.0), fs_Nor.xyz, (1.0 - wallPos.y) * 20.0);\n    }\n\n    return fs_Nor.xyz;\n}\n\n\nvec3 getTexturedNormal() {\n    if (\n        fs_BlockInfo[1] == TEXTURE_BUILDING\n        || fs_BlockInfo[1] == TEXTURE_TURRET\n    ) {\n        return  getPlasterNormal();\n    }\n    return fs_Nor.xyz;\n}\n\nvec3 getBuildingColor() {\n    if(fs_BlockInfo[0] == CUBE || fs_BlockInfo[0] == WEDGE) return getBuildingCubeColor();\n\n    return vec3(0.5, 0.5, 0.5);\n}\n\nvec3 getTexturedThemeColor() {\n    vec3 color = vec3(1.0, 1.0, 1.0);\n\n    //highlight the edges\n    float lum = 500.0 * (\n    max(pow(fs_Pos.x -0.5, 4.0) * pow(fs_Pos.z - 0.5, 4.0),\n    max(pow(fs_Pos.x -0.5, 4.0) * pow(fs_Pos.y - 0.5, 4.0),\n    pow(fs_Pos.z -0.5, 4.0) * pow(fs_Pos.y - 0.5, 4.0)))\n    );\n    //lum = smoothstep(0.9999, 1.0, lum);\n    color = (1.0-lum) * color;\n\n    if(fs_BlockInfo[1] == TEXTURE_ROAD) {\n        color = vec3(0.9, 0.4, 0.4);\n    }\n\n    if(fs_BlockInfo[1] == TEXTURE_LEVEL_GROUND) {\n        color = texture(u_PavementSampler, fs_Pos.xz * 3.0).xyz;\n        //buildingColor = mySample.xyz;\n    }\n\n    if(fs_BlockInfo[1] == TEXTURE_WALL) {\n        vec2 uv = vec2(0.0,0.0);\n        if(fs_Face == 0 || fs_Face == 1) uv = fs_Pos.xy; //gate opening\n        if(fs_Face == 2 || fs_Face == 3) uv = fs_Pos.zy; //sides\n        if(fs_Face == 4 || fs_Face == 5) uv = fs_Pos.zx; //tops\n        color = texture(u_WhiteStoneSampler, uv).xyz;\n        //buildingColor = vec3(0.9, 0.9, 0.9);\n    }\n    if(fs_BlockInfo[1] == TEXTURE_ROOF) {\n        color = getRoofColor();\n    }\n    if(fs_BlockInfo[1] == TEXTURE_BUILDING\n       || fs_BlockInfo[1] == TEXTURE_TURRET\n       || fs_BlockInfo[1] == TEXTURE_FOUNDATION) {\n        color = getBuildingColor();\n    }\n    return color;\n}\n\nvec3 getDazzleThemeBackground() {\n    return vec3(0.0, 0.0, 0.0);\n}\nvec3 getMapThemeBackground() {\n    return vec3(164.0 / 255.0, 233.0 / 255.0, 1.0);\n}\nvec3 getTexturedThemeBackground() {\n    return vec3(0.0, 0.0, 0.0);\n}\n\n\nvoid adjustColorForLights(inout vec3 color, vec3 normal, vec3 point) {\n    vec3 direction;\n    vec3 lightColor;\n    vec3 sunDirection = normalize(sunPosition - point);\n    vec3 sunColor = vec3(1.5, 1.25, 1.0);\n    vec3 skyColor = vec3(0.08,0.10,0.14);\n    vec3 indirectColor = vec3(0.04, 0.028, 0.020);\n    vec3 fireFlyColor = vec3(0.698, 0.956, 0.145);\n    float hour = 15.0;\n    float night = 0.0;\n    float dawn = 0.0;\n    float sunset = 0.1;\n\n\n\n    //get the soft shadow and subsurface amounts\n    //float shadow = sunShadow(point, 3.0, sdfIndex);\n    float sunIntensity;\n\n\n    if(dot(normal, sunDirection) >= 0.0) {\n        sunIntensity = clamp(dot(normal, sunDirection), 0.0, 1.0);// * shadow;\n    }\n    else {\n        sunIntensity = 0.0;\n    }\n\n\n    //make sun brighter at noon\n    sunIntensity = sunIntensity * clamp(sunPosition.y/80.0, 0.0, 1.0);\n\n    float skyIntensity = clamp(0.5 + 0.5*normal.y, 0.0, 1.0);\n\n    //decrease skyintesity at night\n    if(hour > 17.0) {\n        skyIntensity = clamp(pow((1.0 - (hour - 17.0)/7.0), 4.0), 0.1, 1.0)  * skyIntensity;\n    }\n    if(hour < 6.0) {\n        skyIntensity = clamp(pow((1.0 - (6.0-hour)/6.0), 4.0), 0.1, 1.0)  * skyIntensity;\n    }\n\n    vec3 indirectDirection = normalize(sunDirection * vec3(-1.0, 0.0, -1.0));\n    //vec3 indirectDirection = normalize(vec3(0.2, 0.0, 1.0));\n    float indirectIntensity = clamp(dot(normal, indirectDirection), 0.0, 1.0);\n\n    //tone down indirect at night\n    //indirectIntensity = indirectIntensity * (1.0 - night);\n\n    //make sun redder at sunrise/sunset\n    sunColor.r = max(sunColor.r * 3.0 * (dawn*0.8 + sunset), sunColor.r);\n    if(hour < 5.0) {\n        sunIntensity = 0.0;\n    }\n\n\n\n    vec3 intensity = sunIntensity*sunColor\n    + skyIntensity * skyColor\n    + indirectIntensity * indirectColor;\n\n\n    color = color * intensity;\n\n}\n\nvoid main()\n{\n    vec3 buildingColor = vec3(0,0,0);\n    vec3 backgroundColor = vec3(0,0,0);\n\n    if(u_DisplayOptions[2] == MAP_THEME) {\n        buildingColor = getMapThemeColor();\n        backgroundColor = getMapThemeBackground();\n    }\n    else if(u_DisplayOptions[2] == DAZZLE_THEME) {\n        buildingColor = getDazzleThemeColor();\n        backgroundColor = getDazzleThemeBackground();\n    }\n    else if(u_DisplayOptions[2] == TEXTURED_THEME) {\n        buildingColor = getTexturedThemeColor();\n        backgroundColor = getTexturedThemeBackground();\n        adjustColorForLights(buildingColor, getTexturedNormal(), fs_Pos.xyz);\n    }\n\n\n\n    float t = clamp(smoothstep(40.0, 50.0, length(fs_Translate.xz)), 0.0, 1.0); // Distance fog\n    out_Col = vec4(mix(buildingColor, backgroundColor, t), 1.0);\n}\n"

/***/ })
/******/ ]);
//# sourceMappingURL=bundle.js.map