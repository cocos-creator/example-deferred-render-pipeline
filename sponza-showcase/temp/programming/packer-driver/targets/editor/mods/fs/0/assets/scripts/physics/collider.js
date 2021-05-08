System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _decorator, Component, ModelComponent, RigidBodyComponent, Vec3, Vec4, _dec, _class, _temp, _crd, ccclass, v3_1, static_color, Collider;

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      ModelComponent = _cc.ModelComponent;
      RigidBodyComponent = _cc.RigidBodyComponent;
      Vec3 = _cc.Vec3;
      Vec4 = _cc.Vec4;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "9734djZWa9MEbCNBh1ENuMW", "collider", undefined);

      ({
        ccclass
      } = _decorator);
      v3_1 = new Vec3();
      static_color = new Vec4(0.3, 0.3, 0.3, 1.0);

      _export("Collider", Collider = (_dec = ccclass('Collider'), _dec(_class = (_temp = class Collider extends Component {
        constructor(...args) {
          super(...args);

          _defineProperty(this, "_body", null);

          _defineProperty(this, "_initialColor", null);

          _defineProperty(this, "_pass", null);

          _defineProperty(this, "_handle", 0);

          _defineProperty(this, "_color", new Vec4());
        }

        start() {
          this._body = this.node.getComponent(RigidBodyComponent);
          const mat = this.node.getComponent(ModelComponent).material; // Vec4 and Color are compatible with each other, but Vec4 is more efficient when updated frequently

          this._initialColor = new Vec4(mat.getProperty('mainColor'));
          this._pass = mat.passes[0];
          this._handle = this._pass.getHandle('mainColor');
        }

        update() {
          // visualize speed
          this._body.getLinearVelocity(v3_1);

          let speed = v3_1.length();
          speed /= speed + 1;
          Vec4.lerp(this._color, static_color, this._initialColor, speed);

          this._pass.setUniform(this._handle, this._color);
        }

      }, _temp)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=collider.js.map