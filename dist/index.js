// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"../math/vector2.ts":[function(require,module,exports) {
"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Vector2 = void 0;
/**
 * This class represents a vector or point in 2D space.
*/

var Vector2 = /*#__PURE__*/function () {
  function Vector2() {
    var x = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
    var y = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

    _classCallCheck(this, Vector2);

    this.x = x;
    this.y = y;
  }

  _createClass(Vector2, [{
    key: "set",
    value: function set(x) {
      var y = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

      if (x instanceof Vector2) {
        this.x = x.x;
        this.y = x.y;
        return this;
      }

      this.x = x;
      this.y = y;
      return this;
    }
    /**
    * Returns a copy of this {@link Vector2}.
    * @return {Vector2} {@link Vector2}
    */

  }, {
    key: "copy",
    value: function copy() {
      return new Vector2(this.x, this.y);
    }
    /**
    * Returns true if Vector is exactly equal to specified coordinates
    * @param {number|Vector2} x
    * @param {number} y
    * @return
    * @return {boolean}
    */

  }, {
    key: "equals",
    value: function equals(x, y) {
      if (x instanceof Vector2) {
        if (this == x) return true;
        return this.x == x.x && this.y == x.y;
      }

      return this.x == x && this.y == y;
    }
    /**
     * Returns true if Vector is very Close to specified coordinates
     * @param {number|Vector2} x
     * @param {number} y
     * @return
     * @return {boolean}
     */

  }, {
    key: "approxEquals",
    value: function approxEquals(x, y) {
      if (x instanceof Vector2) {
        if (this == x) return true;
        return Math.abs(this.x - x.x) < Vector2.EPSILON && Math.abs(this.y - x.y) < Vector2.EPSILON;
      }

      return Math.abs(this.x - x) < Vector2.EPSILON && Math.abs(this.y - y) < Vector2.EPSILON;
    }
  }, {
    key: "add",
    value: function add(x) {
      var y = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

      if (x instanceof Vector2) {
        this.x += x.x;
        this.y += x.y;
      } else {
        this.x += x;
        this.y += y;
      }

      return this;
    }
  }, {
    key: "subtract",
    value: function subtract(x) {
      var y = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

      if (x instanceof Vector2) {
        this.x -= x.x;
        this.y -= x.y;
      } else {
        this.x -= x;
        this.y -= y;
      }

      return this;
    }
  }, {
    key: "multiply",
    value: function multiply(x) {
      var y = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

      if (x instanceof Vector2) {
        this.x *= x.x;
        this.y *= x.y;
      } else {
        this.x *= x;
        this.y *= y;
      }

      return this;
    }
  }, {
    key: "scale",
    value: function scale(s) {
      this.x *= s;
      this.y *= s;
      return this;
    }
  }, {
    key: "negate",
    value: function negate() {
      this.x = -this.x;
      this.y = -this.y;
      return this;
    }
    /**
     * Sets this vector to the right-handed normal of this vector.
     * @return {@link Vector2} this vector
     */

  }, {
    key: "right",
    value: function right() {
      var temp = this.x;
      this.x = -this.y;
      this.y = temp;
      return this;
    }
    /**
     * Sets this vector to the right-handed normal of this vector.
     * @return {@link Vector2} this vector
     */

  }, {
    key: "left",
    value: function left() {
      var temp = this.x;
      this.x = this.y;
      this.y = -temp;
      return this;
    }
    /**
     * Rotates this vector about specified point (x0,y0)
     * @param theta Angle in radians
     * @param x0
     * @param y0
     * @returns
     */

  }, {
    key: "rotate",
    value: function rotate(theta) {
      var x0 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
      var y0 = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
      this.x -= x0;
      this.y -= y0;
      var cos = Math.cos(theta);
      var sin = Math.sin(theta);
      var x = this.x;
      var y = this.y;
      this.x = x * cos - y * sin;
      this.y = x * sin + y * cos;
      this.x += x0;
      this.y += y0;
      return this;
    }
  }, {
    key: "getMagnitude",
    value: function getMagnitude() {
      return Math.sqrt(this.getMagnitudeSqrd());
    }
  }, {
    key: "setMagnitude",
    value: function setMagnitude(newLen) {
      var len = newLen / this.getMagnitude();
      this.x *= len;
      this.y *= len;
    }
  }, {
    key: "getMagnitudeSqrd",
    value: function getMagnitudeSqrd() {
      return this.x * this.x + this.y * this.y;
    }
    /**
    * Normalises this vector and returns its length
    * @returns
    */

  }, {
    key: "normalize",
    value: function normalize() {
      var len = this.getMagnitude();

      if (len > 0) {
        this.x /= len;
        this.y /= len;
      }

      return len;
    }
    /**
     *
     * @returns Returns unit vector
     */

  }, {
    key: "getNormalized",
    value: function getNormalized() {
      var v = new Vector2(this.x, this.y);
      var len = this.getMagnitude();

      if (len > 0) {
        v.x /= len;
        v.y /= len;
      }

      return v;
    }
    /**
    * Returns the angle of this {@link Vector2} with +ve x axis
    * as an angle in radians.
    * @return {number} double angle in radians [0, 2*&pi;]
    */

  }, {
    key: "getAngleWithPositiveXAxis",
    value: function getAngleWithPositiveXAxis() {
      var theta = Math.atan2(this.y, this.x);
      if (theta < 0) theta += Math.PI * 2;
      return theta;
    }
  }, {
    key: "getAngleWith",
    value: function getAngleWith(vector) {
      var a = Math.atan2(vector.y, vector.x) - Math.atan2(this.y, this.x);
      if (a > Math.PI) return a - 2 * Math.PI;
      if (a < -Math.PI) return a + 2 * Math.PI;
      return a;
    } ////STATIC METHODS

    /**
     * Adds two vector and returns their sum
     * @param a
     * @param b
     * @returns  new vector
     */

  }], [{
    key: "sum",
    value: function sum(a, b) {
      return new Vector2(a.x + b.x, a.y + b.y);
    }
    /**
     * Subtracts b from a a and returns result
     * @param a
     * @param b
     * @param t
     * @returns
     */

  }, {
    key: "difference",
    value: function difference(a, b) {
      return new Vector2(a.x - b.x, a.y - b.y);
    }
  }, {
    key: "product",
    value: function product(a, b) {
      return new Vector2(a.x * b.x, a.y * b.y);
    }
  }, {
    key: "dot",
    value: function dot(a, b) {
      return a.x * b.x + a.y * b.y;
    }
  }, {
    key: "cross",
    value: function cross(a, b) {
      return a.x * b.y - a.y * b.x;
    }
    /**
     * returns a+t.b
     * @param a
     * @param b
     * @param t parameter between 0 and 1
     * @returns new Vector2
     */

  }, {
    key: "lerp",
    value: function lerp(a, b, t) {
      return new Vector2(a.x * (1 - t) + b.x * t, a.y * (1 - t) + b.y * t);
    }
    /**
     * Tests if the three points are colinear.
     *
     * @return {boolean} true if three points lie on the same line.
     * @param {Vector2} p1
     * @param {Vector2} p2
     * @param {Vector2} p3
     */

  }, {
    key: "isCollinear",
    value: function isCollinear(p1, p2, p3) {
      var dx1;
      var dx2;
      var dy1;
      var dy2;
      dx1 = p2.x - p1.x;
      dy1 = p2.y - p1.y;
      dx2 = p3.x - p1.x;
      dy2 = p3.y - p1.y;
      return Math.abs(dx1 * dy2 - dy1 * dx2) < Vector2.EPSILON;
    }
  }]);

  return Vector2;
}();

exports.Vector2 = Vector2;
Vector2.EPSILON = 1e-9;
},{}],"camera.ts":[function(require,module,exports) {
"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

Object.defineProperty(exports, "__esModule", {
  value: true
});

var vector2_1 = require("../math/vector2");

var Camera = /*#__PURE__*/function () {
  /**
   * Default constructor.
   * <p>
   * Defaults to a 100 to scale(pixel per meter) and zero translation.
   */
  function Camera(canvas) {
    var scale = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : Camera.METER_TO_PIXEL;
    var translation = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : new vector2_1.Vector2();

    _classCallCheck(this, Camera);

    /** The zoom factor */
    this.scale = Camera.METER_TO_PIXEL;
    /** The translation from 0,0 */

    this.translation = new vector2_1.Vector2(0, 0);
    this.scale = scale;
    this.translation = translation;
    this.canvas = canvas;
    this.ctx = canvas.getContext("2d");
  }
  /**
   * Zooms camera to specified percentage zoom.
   * @param zoomPercentage Desired Percentage ZOOM
   */


  _createClass(Camera, [{
    key: "zoomTo",
    value: function zoomTo(zoomPercentage) {
      if (zoomPercentage < Camera.MIN_ZOOM) zoomPercentage = Camera.MIN_ZOOM;
      if (zoomPercentage > Camera.MAX_ZOOM) zoomPercentage = Camera.MAX_ZOOM;
      this.scale = zoomPercentage;
    }
    /**
     * Zooms camera to specified percentage zoom about specified point as origin.
     * @param zoomPercentage Desired Percentage ZOOM
     * @param pt  Zoom about pt as centre
     */

  }, {
    key: "zoomToAboutPoint",
    value: function zoomToAboutPoint(zoomPercentage, pt) {
      var prevScale = this.scale;
      this.zoomTo(zoomPercentage);
      this.translation.add(pt.scale((-this.scale + prevScale) / this.scale));
    }
    /**
     * Zooms out the camera.
     */

  }, {
    key: "zoomOut",
    value: function zoomOut() {
      this.zoomTo(this.scale * Camera.ZOOM_OUT_FACTOR);
    }
    /**
     * Zooms in the camera.
     */

  }, {
    key: "zoomIn",
    value: function zoomIn() {
      this.zoomTo(this.scale * Camera.ZOOM_IN_FACTOR);
    }
    /**
     * Zooms out the camera about point (in world coordinates).
     * @param pt Zoom about pt as centre
     */

  }, {
    key: "zoomOutAboutPoint",
    value: function zoomOutAboutPoint(pt) {
      this.zoomToAboutPoint(this.scale * Camera.ZOOM_OUT_FACTOR, pt);
    }
    /**
     * Zooms in the camera about point (in world coordinates).
     * @param pt  Zoom about pt as centre
     */

  }, {
    key: "zoomInAboutPoint",
    value: function zoomInAboutPoint(pt) {
      this.zoomToAboutPoint(this.scale * Camera.ZOOM_IN_FACTOR, pt);
    }
    /**
     * Moves the camera back to the origin (Now World origin will be rendered at screen center).
     */

  }, {
    key: "toOrigin",
    value: function toOrigin() {
      this.translation.set(0, 0);
    }
    /**
     * Translates the camera the given amount along the x and y axes.
     * @param x the x translation
     * @param y the y translation
     */

  }, {
    key: "translate",
    value: function translate(x, y) {
      this.translation.x += x;
      this.translation.y += y;
    } // getter/setters

    /**
     * Returns the scale factor in pixel per meter.
     * @return double
     */

  }, {
    key: "getScale",
    value: function getScale() {
      return this.scale;
    }
    /**
     * Sets the scale factor in pixels per meter.
     * @param scale the desired scale factor
     */

  }, {
    key: "setScale",
    value: function setScale(scale) {
      this.scale = scale;
    }
    /**
     * Returns the offset of camera (displacement of screen center from 'world center rendered on screen').
     * @return Vector2
     */

  }, {
    key: "getTranslation",
    value: function getTranslation() {
      return this.translation;
    }
    /**
     * Sets the offset/translation from the origin in world coordinates.
     * @param translation the translation
     */

  }, {
    key: "setTranslation",
    value: function setTranslation(translation) {
      this.translation.set(translation);
    }
    /**
     * Converts from world coordinates to screen coordinates, having origin at midpoint and up as positive
     * to convert to swing coordinates use
     * <pre>
     * p=worldToScreen(Vector2 worldPoint)
     * p.set(p.x+canvas.getWidth()/2,-p.y+canvas.getHeight()/2);
     * </pre>
     * @param worldPoint
     * @return Point p in screen Coordinates
     */

  }, {
    key: "worldToScreen",
    value: function worldToScreen(worldPoint) {
      var offset = this.translation;
      var scale = this.scale;
      worldPoint = worldPoint.copy().add(offset.x, offset.y);
      worldPoint.scale(scale);
      return worldPoint;
    }
  }, {
    key: "begin",
    value: function begin() {
      this.ctx.save();
      this.ctx.translate(this.ctx.canvas.width / 2, this.ctx.canvas.height / 2);
      this.ctx.scale(this.scale, -this.scale);
      this.ctx.translate(this.translation.x, this.translation.y);
    }
  }, {
    key: "end",
    value: function end() {
      this.ctx.restore();
    }
  }]);

  return Camera;
}();

exports.default = Camera;
/**maximum percentage zoom */

Camera.METER_TO_PIXEL = 100;
/**maximum percentage zoom */

Camera.MAX_ZOOM = 4000;
/**minimum percentage zoom*/

Camera.MIN_ZOOM = 1;
Camera.ZOOM_OUT_FACTOR = 1.05;
Camera.ZOOM_IN_FACTOR = 0.96;
},{"../math/vector2":"../math/vector2.ts"}],"tools.ts":[function(require,module,exports) {
"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

Object.defineProperty(exports, "__esModule", {
  value: true
});

var Tools = /*#__PURE__*/function () {
  function Tools(container) {
    _classCallCheck(this, Tools);

    this.container = container;
  }
  /**
   *
   * @param x x position in canvas
   * @param y y position in canvas
   */


  _createClass(Tools, [{
    key: "addtextarea",
    value: function addtextarea(x, y) {
      var _a;

      var textarea = document.createElement("input");
      textarea.type = "text";
      textarea.className = "form-control";
      textarea.style.left = x + 'px';
      textarea.style.bottom = 600 - y + 'px';
      textarea.style.position = 'absolute';
      textarea.style.width = '10%';
      (_a = this.container) === null || _a === void 0 ? void 0 : _a.appendChild(textarea);
      console.log("textarea function triggered");
      return textarea;
    }
    /**
     *
     * @param x x position in canvas
     * @param y y position in canvas
     */

  }, {
    key: "addbutton",
    value: function addbutton(x, y) {
      var _a;

      var button = document.createElement("input");
      button.type = "button";
      button.className = "btn btn-primary";
      button.style.left = x + 'px';
      button.style.bottom = 600 - y + 'px';
      button.style.position = 'absolute';
      button.value = "button";
      (_a = this.container) === null || _a === void 0 ? void 0 : _a.appendChild(button);
      return button;
    } //label

  }, {
    key: "addlabel",
    value: function addlabel(x, y) {
      var _a;

      var label = document.createElement('p');
      label.className = 'text-justify';
      label.style.left = x + "px";
      label.style.right = 600 - y + "px";
      label.style.position = 'absolute';
      label.innerHTML = 'Label';
      (_a = this.container) === null || _a === void 0 ? void 0 : _a.appendChild(label);
      return label;
    }
    /**
     *
     * @param x x position in canvas
     * @param y y position in canvas
     * @param min starting number of range
     * @param max last number of range
     * @param initial_value initial number given from the range
     */

  }, {
    key: "addslider",
    value: function addslider(x, y, min, max, initial_value) {
      var _a;

      var slider = document.createElement("input");
      slider.type = "range";
      slider.min = min.toString();
      slider.max = max.toString();
      slider.className = "form-range";
      slider.style.left = x + 'px';
      slider.style.bottom = 600 - y + 'px';
      slider.style.width = '10%';
      slider.style.position = 'absolute';
      slider.value = initial_value.toString();
      (_a = this.container) === null || _a === void 0 ? void 0 : _a.appendChild(slider);
      return slider;
    }
  }]);

  return Tools;
}();

exports.default = Tools;
},{}],"../engine/drawer.ts":[function(require,module,exports) {
"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.drawer = exports.objects = void 0;

var camera_1 = __importDefault(require("../app/camera"));

var objects = [];
exports.objects = objects;

var drawer = /*#__PURE__*/function (_camera_1$default) {
  _inherits(drawer, _camera_1$default);

  var _super = _createSuper(drawer);

  function drawer() {
    var _this;

    _classCallCheck(this, drawer);

    _this = _super.apply(this, arguments);
    _this.objects = [];
    return _this;
  } // public circle:circle;


  _createClass(drawer, [{
    key: "createcircle",
    value: function createcircle(centerx, centery) {
      var radius = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0.2;
      var color = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 'red';
      objects.push(new circle(this.canvas));
      var len = objects.length - 1;
      objects[len].drawcircle(centerx, centery, radius, color);
      return objects[len];
    }
  }]);

  return drawer;
}(camera_1.default);

exports.drawer = drawer;

var circle = /*#__PURE__*/function (_camera_1$default2) {
  _inherits(circle, _camera_1$default2);

  var _super2 = _createSuper(circle);

  function circle() {
    var _this2;

    _classCallCheck(this, circle);

    _this2 = _super2.apply(this, arguments);
    _this2.name = '';
    _this2.centerx = 0;
    _this2.centery = 0;
    _this2.velocityx = 0;
    _this2.velocityy = 0;
    _this2.radius = 0;
    return _this2;
  }

  _createClass(circle, [{
    key: "drawcircle",
    value: function drawcircle(centerx, centery) {
      var radius = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0.2;
      var color = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 'red';
      // console.log("circle ");
      this.centerx = centerx;
      this.centery = centery;
      this.radius = radius;
      this.ctx.beginPath();
      this.ctx.arc(centerx, centery, radius, 0, 2 * Math.PI, false);
      this.ctx.fillStyle = color;
      this.ctx.fill();
      this.ctx.imageSmoothingEnabled = true;
      this.ctx.imageSmoothingQuality = 'high';
      this.ctx.closePath();
      return this; // this.ctx.lineWidth = 5;
      // this.ctx.strokeStyle = '#003300';
      // this.ctx.stroke();
    }
  }, {
    key: "update",
    value: function update() {
      var centerx = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.centerx;
      var centery = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.centery;
      // console.log(centerx);
      this.drawcircle(centerx, centery);
    }
  }]);

  return circle;
}(camera_1.default);

var rectangle = /*#__PURE__*/function (_camera_1$default3) {
  _inherits(rectangle, _camera_1$default3);

  var _super3 = _createSuper(rectangle);

  function rectangle() {
    _classCallCheck(this, rectangle);

    return _super3.apply(this, arguments);
  }

  return rectangle;
}(camera_1.default);
},{"../app/camera":"camera.ts"}],"mouse.ts":[function(require,module,exports) {
"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _1 = __importDefault(require("."));

var drawer_1 = require("../engine/drawer");

var mouse = function mouse() {
  _classCallCheck(this, mouse);

  document.onwheel = function (e) {
    if (e.deltaY > 0) {
      _1.default.zoomIn();
    } else {
      _1.default.zoomOut();
    }
  };

  var isfirstmousemove = 0;
  var valuex = 0;
  var valuey = 0;
  var ismousedown = 0;
  var factor = 500;

  document.onmousedown = function (e) {
    globalThis.x = e.x;
    globalThis.y = e.y;
    isfirstmousemove = 0;
    ismousedown = 1;
  };

  document.onmousemove = function (e) {
    drawer_1.objects[0].centerx = (e.x * _1.default.ctx.canvas.width / window.innerWidth - _1.default.ctx.canvas.width / 2) * 0.01;
    drawer_1.objects[0].centery = -(e.y * _1.default.ctx.canvas.height / window.innerHeight - _1.default.ctx.canvas.height / 2) * 0.01;

    if (drawer_1.objects[0].centerx === drawer_1.objects[1].centerx) {
      console.log("yay");
    }

    if (ismousedown == 1) {
      if (isfirstmousemove == 0) {
        _1.default.translate((e.x - globalThis.x) / factor, -(e.y - globalThis.y) / factor);

        isfirstmousemove = 1;
        valuex = e.x;
        valuey = e.y;
      } else {
        _1.default.translate((e.x - valuex) / factor, -(e.y - valuey) / factor);

        valuex = e.x;
        valuey = e.y;
      }
    }
  };

  document.onmouseup = function (e) {
    ismousedown = 0;
  };
};

exports.default = mouse;
},{".":"index.ts","../engine/drawer":"../engine/drawer.ts"}],"keyboard.ts":[function(require,module,exports) {
"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _1 = __importDefault(require("."));

var vector2_1 = require("../math/vector2");

var keyboard = function keyboard() {
  _classCallCheck(this, keyboard);

  window.addEventListener('keydown', function (e) {
    switch (e.key) {
      case "ArrowLeft":
        _1.default.translate(-0.05, 0);

        break;

      case "ArrowRight":
        _1.default.translate(0.05, 0);

        break;

      case "ArrowDown":
        _1.default.translate(0, -0.05);

        break;

      case "ArrowUp":
        _1.default.translate(0, 0.05);

        break;

      case 'r':
        _1.default.zoomToAboutPoint(1000, new vector2_1.Vector2(0, 0));

        break;
    }

    ;
  });
};

exports.default = keyboard;
},{".":"index.ts","../math/vector2":"../math/vector2.ts"}],"../engine/physics.ts":[function(require,module,exports) {
"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

Object.defineProperty(exports, "__esModule", {
  value: true
});

var physics = /*#__PURE__*/function () {
  function physics() {
    _classCallCheck(this, physics);

    this.gravity = 9;
  }

  _createClass(physics, [{
    key: "gravitational_force",
    value: function gravitational_force() {}
  }], [{
    key: "iscolliding",
    value: function iscolliding(object1, object2) {
      var center_dis = object1.radius + object2.radius;
      var real_dis = Math.pow(Math.pow(object1.centerx - object2.centerx, 2) + Math.pow(object1.centery - object2.centery, 2), 1 / 2);

      if (real_dis <= center_dis) {
        return true;
      } else {
        return false;
      }
    }
  }]);

  return physics;
}();

exports.default = physics;
},{}],"../engine/collision.ts":[function(require,module,exports) {
"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.collision = void 0;

var drawer_1 = require("./drawer");

var physics_1 = __importDefault(require("./physics"));

var collision = /*#__PURE__*/function () {
  function collision() {
    _classCallCheck(this, collision);
  }

  _createClass(collision, null, [{
    key: "check_collision",
    value: function check_collision() {
      for (var i = 0; i < drawer_1.objects.length; i++) {
        for (var j = 0; j < drawer_1.objects.length; j++) {
          if (i != j) {
            var colliding = physics_1.default.iscolliding(drawer_1.objects[i], drawer_1.objects[j]);

            if (colliding == true) {
              console.log("colliding");
            }
          }
        }
      }
    }
  }]);

  return collision;
}();

exports.collision = collision;
},{"./drawer":"../engine/drawer.ts","./physics":"../engine/physics.ts"}],"index.ts":[function(require,module,exports) {
"use strict";

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var camera_1 = __importDefault(require("../app/camera"));

var tools_1 = __importDefault(require("../app/tools"));

var mouse_1 = __importDefault(require("../app/mouse"));

var keyboard_1 = __importDefault(require("./keyboard"));

var drawer_1 = require("../engine/drawer");

var collision_1 = require("../engine/collision"); // import Renderer from '../app/renderer'


var canvas = document.getElementById("canvas");
var container = document.getElementById("container");
var ctx = canvas.getContext("2d");
ctx.imageSmoothingEnabled = true; //declaration of classes

var camera = new camera_1.default(canvas);
var tools = new tools_1.default(container);
new mouse_1.default();
new keyboard_1.default();
var drawer1 = new drawer_1.drawer(canvas); //tools testing declaration
// tools.addtextarea(20,30);
// tools.addtextarea(80,50);
// tools.addbutton(20,60);
// tools.addslider(20,200,0,100,50);

requestAnimationFrame(render);
var circle1 = drawer1.createcircle(0, 0);
var circle2 = drawer1.createcircle(0.5, -0.5, 0.3);
console.log(circle1.centerx);

function render() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  camera.begin();
  circle1.update();
  circle2.update();
  collision_1.collision.check_collision();
  camera.end();
  requestAnimationFrame(render);
}

exports.default = camera;
},{"../app/camera":"camera.ts","../app/tools":"tools.ts","../app/mouse":"mouse.ts","./keyboard":"keyboard.ts","../engine/drawer":"../engine/drawer.ts","../engine/collision":"../engine/collision.ts"}],"../../node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "54103" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["../../node_modules/parcel-bundler/src/builtins/hmr-runtime.js","index.ts"], null)
//# sourceMappingURL=/index.js.map