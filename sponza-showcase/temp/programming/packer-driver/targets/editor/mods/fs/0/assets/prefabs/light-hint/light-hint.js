System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _decorator, Component, CameraComponent, ModelComponent, SpotLightComponent, SphereLightComponent, Vec2, _dec, _class, _temp, _crd, ccclass, LightHint;

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      CameraComponent = _cc.CameraComponent;
      ModelComponent = _cc.ModelComponent;
      SpotLightComponent = _cc.SpotLightComponent;
      SphereLightComponent = _cc.SphereLightComponent;
      Vec2 = _cc.Vec2;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "bd5838x//xGMYENw1vAlfIM", "light-hint", undefined);

      ({
        ccclass
      } = _decorator);

      _export("LightHint", LightHint = (_dec = ccclass("LightHint"), _dec(_class = (_temp = class LightHint extends Component {
        constructor(...args) {
          super(...args);

          _defineProperty(this, "_material", null);

          _defineProperty(this, "_camera", null);
        }

        start() {
          let light = this.node.parent.getComponent(SphereLightComponent);
          if (!light) light = this.node.parent.getComponent(SpotLightComponent);
          this._material = this.node.getComponent(ModelComponent).material;
          this._camera = this.node.scene.getComponentInChildren(CameraComponent);
          const size = light.size * 4;
          this.node.setWorldScale(size, size, size);

          this._material.setProperty('color', light.color);

          this._material.setProperty('intensitySize', new Vec2(light.luminance, 0.4));
        }

        update() {
          this.node.setWorldRotation(this._camera.node.worldRotation);
        }

      }, _temp)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=light-hint.js.map