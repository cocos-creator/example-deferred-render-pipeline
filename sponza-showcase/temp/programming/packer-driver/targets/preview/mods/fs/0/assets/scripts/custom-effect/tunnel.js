System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _decorator, Component, ModelComponent, Vec2, Vec4, director, eventManager, _dec, _class, _temp, _crd, ccclass, Tunnel;

  function _createForOfIteratorHelperLoose(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; return function () { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } it = o[Symbol.iterator](); return it.next.bind(it); }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

  function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; _setPrototypeOf(subClass, superClass); }

  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      ModelComponent = _cc.ModelComponent;
      Vec2 = _cc.Vec2;
      Vec4 = _cc.Vec4;
      director = _cc.director;
      eventManager = _cc.eventManager;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "a6060IJdhFH6q3eEI9KzE5Q", "tunnel", undefined);

      ccclass = _decorator.ccclass;

      _export("Tunnel", Tunnel = (_dec = ccclass('Tunnel'), _dec(_class = (_temp = /*#__PURE__*/function (_Component) {
        _inheritsLoose(Tunnel, _Component);

        function Tunnel() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _Component.call.apply(_Component, [this].concat(args)) || this;

          _defineProperty(_assertThisInitialized(_this), "_passes", []);

          _defineProperty(_assertThisInitialized(_this), "_colorHandles", []);

          _defineProperty(_assertThisInitialized(_this), "_borderHandles", []);

          _defineProperty(_assertThisInitialized(_this), "_color", new Vec4(1, 0, 0, 1));

          _defineProperty(_assertThisInitialized(_this), "_border", new Vec2(0, 0));

          return _this;
        }

        var _proto = Tunnel.prototype;

        _proto.start = function start() {
          var comps = this.getComponentsInChildren(ModelComponent);

          for (var _iterator = _createForOfIteratorHelperLoose(comps), _step; !(_step = _iterator()).done;) {
            var comp = _step.value;
            var mat = comp.material;
            var pass = mat.passes[0];

            this._colorHandles.push(pass.getHandle('color'));

            this._borderHandles.push(pass.getHandle('border'));

            this._passes.push(pass);
          }
        };

        _proto.update = function update() {
          var time = director.getTotalFrames() * 0.1;
          var margin = time % (Math.PI * 4) > Math.PI ? 0.1 : Math.abs(Math.cos(time)) * 0.1;
          this._color.y = this._color.z = margin * 10;
          this._border.x = this._border.y = margin;
          var len = this._passes.length;

          for (var i = 0; i < len; i++) {
            this._passes[i].setUniform(this._colorHandles[i], this._color);

            this._passes[i].setUniform(this._borderHandles[i], this._border);
          }
        };

        _proto.onDisable = function onDisable() {
          eventManager.removeAllListeners();
        };

        return Tunnel;
      }(Component), _temp)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=tunnel.js.map