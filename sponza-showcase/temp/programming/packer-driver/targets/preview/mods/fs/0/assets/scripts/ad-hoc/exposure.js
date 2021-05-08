System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _decorator, Component, CameraComponent, director, _dec, _class, _temp, _crd, ccclass, property, Exposure;

  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

  function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; _setPrototypeOf(subClass, superClass); }

  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      CameraComponent = _cc.CameraComponent;
      director = _cc.director;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "7c4317ZMDtPHJt4D9cpx/a0", "exposure", undefined);

      ccclass = _decorator.ccclass;
      property = _decorator.property;

      _export("Exposure", Exposure = (_dec = ccclass('Exposure'), _dec(_class = (_temp = /*#__PURE__*/function (_Component) {
        _inheritsLoose(Exposure, _Component);

        function Exposure() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _Component.call.apply(_Component, [this].concat(args)) || this;

          _defineProperty(_assertThisInitialized(_this), "_ambient", void 0);

          _defineProperty(_assertThisInitialized(_this), "_camera", void 0);

          return _this;
        }

        var _proto = Exposure.prototype;

        _proto.start = function start() {
          var scene = this.node.scene;
          var pipeline = director.root.pipeline;
          this._ambient = pipeline.ambient;
          this._camera = scene.getComponentInChildren(CameraComponent).camera;
        };

        _proto.setSkyIllumination = function setSkyIllumination(e) {
          this._ambient.skyIllum = Math.pow(2, e.progress * 30.46); // default illum 38400, at progress 0.5
        };

        _proto.setExposure = function setExposure(e) {
          this._camera.aperture = Math.floor((1 - e.progress) * 22.99); // defaul aperture F16, at progress 0.17
        };

        return Exposure;
      }(Component), _temp)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=exposure.js.map