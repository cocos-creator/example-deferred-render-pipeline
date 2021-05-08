System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _decorator, Component, ModelComponent, _dec, _class, _temp, _crd, ccclass, SSS;

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      ModelComponent = _cc.ModelComponent;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "5d0e06TqCJOgYWfO1jCim+/", "SSS", undefined);

      ({
        ccclass
      } = _decorator);

      _export("SSS", SSS = (_dec = ccclass('SSS'), _dec(_class = (_temp = class SSS extends Component {
        constructor(...args) {
          super(...args);

          _defineProperty(this, "_handle", null);

          _defineProperty(this, "_pass", null);
        }

        start() {
          const mat = this.node.getComponent(ModelComponent).material;
          this._pass = mat.passes[0];
          this._handle = this._pass.getHandle('scattering');
        }

        setSSSIntensity(e) {
          this._pass.setUniform(this._handle, e.progress);
        }

        toggle(e) {
          this.node.active = e.isChecked;
        }

      }, _temp)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=SSS.js.map