System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _decorator, Component, CameraComponent, director, _dec, _class, _temp, _crd, ccclass, property, Exposure;

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

      ({
        ccclass,
        property
      } = _decorator);

      _export("Exposure", Exposure = (_dec = ccclass('Exposure'), _dec(_class = (_temp = class Exposure extends Component {
        constructor(...args) {
          super(...args);

          _defineProperty(this, "_ambient", void 0);

          _defineProperty(this, "_camera", void 0);
        }

        start() {
          const scene = this.node.scene;
          const pipeline = director.root.pipeline;
          this._ambient = pipeline.ambient;
          this._camera = scene.getComponentInChildren(CameraComponent).camera;
        }

        setSkyIllumination(e) {
          this._ambient.skyIllum = Math.pow(2, e.progress * 30.46); // default illum 38400, at progress 0.5
        }

        setExposure(e) {
          this._camera.aperture = Math.floor((1 - e.progress) * 22.99); // defaul aperture F16, at progress 0.17
        }

      }, _temp)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=exposure.js.map