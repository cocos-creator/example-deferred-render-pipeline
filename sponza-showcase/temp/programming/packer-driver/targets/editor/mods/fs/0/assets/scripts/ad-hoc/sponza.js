System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _decorator, CameraComponent, Color, Component, director, _dec, _class, _class2, _descriptor, _descriptor2, _temp, _crd, ccclass, property, Sponza;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      CameraComponent = _cc.CameraComponent;
      Color = _cc.Color;
      Component = _cc.Component;
      director = _cc.director;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "1888cpVdmdHxJvW19Vw6mV2", "sponza", undefined);

      ({
        ccclass,
        property
      } = _decorator);

      _export("Sponza", Sponza = (_dec = ccclass('Sponza'), _dec(_class = (_class2 = (_temp = class Sponza extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "loopTime", _descriptor, this);

          _initializerDefineProperty(this, "maxIllum", _descriptor2, this);

          _defineProperty(this, "ambient", void 0);

          _defineProperty(this, "halfLoopTime", 0);

          _defineProperty(this, "camera", void 0);

          _defineProperty(this, "color", new Color());
        }

        start() {
          this.ambient = director.root.pipeline.ambient;
          this.halfLoopTime = this.loopTime * 0.5;
          this.camera = this.node.getComponent(CameraComponent);
        }

        update(deltaTime) {
          let illum = 0;
          const t = director.getTotalFrames() % this.loopTime;

          if (t > this.halfLoopTime) {
            illum = Math.sin((t - this.halfLoopTime) / this.halfLoopTime * Math.PI);
          }

          this.ambient.skyIllum = illum * this.maxIllum;
          this.color.r = this.color.g = this.color.b = illum * 255;
          this.camera.clearColor = this.color;
        }

      }, _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "loopTime", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return 3600;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "maxIllum", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return 20000;
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=sponza.js.map