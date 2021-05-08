System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _decorator, Component, ModelComponent, Vec2, Vec4, director, eventManager, _dec, _class, _temp, _crd, ccclass, Tunnel;

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

      ({
        ccclass
      } = _decorator);

      _export("Tunnel", Tunnel = (_dec = ccclass('Tunnel'), _dec(_class = (_temp = class Tunnel extends Component {
        constructor(...args) {
          super(...args);

          _defineProperty(this, "_passes", []);

          _defineProperty(this, "_colorHandles", []);

          _defineProperty(this, "_borderHandles", []);

          _defineProperty(this, "_color", new Vec4(1, 0, 0, 1));

          _defineProperty(this, "_border", new Vec2(0, 0));
        }

        start() {
          const comps = this.getComponentsInChildren(ModelComponent);

          for (const comp of comps) {
            const mat = comp.material;
            const pass = mat.passes[0];

            this._colorHandles.push(pass.getHandle('color'));

            this._borderHandles.push(pass.getHandle('border'));

            this._passes.push(pass);
          }
        }

        update() {
          const time = director.getTotalFrames() * 0.1;
          const margin = time % (Math.PI * 4) > Math.PI ? 0.1 : Math.abs(Math.cos(time)) * 0.1;
          this._color.y = this._color.z = margin * 10;
          this._border.x = this._border.y = margin;
          const len = this._passes.length;

          for (let i = 0; i < len; i++) {
            this._passes[i].setUniform(this._colorHandles[i], this._color);

            this._passes[i].setUniform(this._borderHandles[i], this._border);
          }
        }

        onDisable() {
          eventManager.removeAllListeners();
        }

      }, _temp)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=tunnel.js.map