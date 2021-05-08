System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _decorator, CameraComponent, Color, Component, director, _dec, _class, _class2, _descriptor, _descriptor2, _temp, _crd, ccclass, property, Sponza;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

  function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; _setPrototypeOf(subClass, superClass); }

  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

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

      ccclass = _decorator.ccclass;
      property = _decorator.property;

      _export("Sponza", Sponza = (_dec = ccclass('Sponza'), _dec(_class = (_class2 = (_temp = /*#__PURE__*/function (_Component) {
        _inheritsLoose(Sponza, _Component);

        function Sponza() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _Component.call.apply(_Component, [this].concat(args)) || this;

          _initializerDefineProperty(_assertThisInitialized(_this), "loopTime", _descriptor, _assertThisInitialized(_this));

          _initializerDefineProperty(_assertThisInitialized(_this), "maxIllum", _descriptor2, _assertThisInitialized(_this));

          _defineProperty(_assertThisInitialized(_this), "ambient", void 0);

          _defineProperty(_assertThisInitialized(_this), "halfLoopTime", 0);

          _defineProperty(_assertThisInitialized(_this), "camera", void 0);

          _defineProperty(_assertThisInitialized(_this), "color", new Color());

          return _this;
        }

        var _proto = Sponza.prototype;

        _proto.start = function start() {
          this.ambient = director.root.pipeline.ambient;
          this.halfLoopTime = this.loopTime * 0.5;
          this.camera = this.node.getComponent(CameraComponent);
        };

        _proto.update = function update(deltaTime) {
          var illum = 0;
          var t = director.getTotalFrames() % this.loopTime;

          if (t > this.halfLoopTime) {
            illum = Math.sin((t - this.halfLoopTime) / this.halfLoopTime * Math.PI);
          }

          this.ambient.skyIllum = illum * this.maxIllum;
          this.color.r = this.color.g = this.color.b = illum * 255;
          this.camera.clearColor = this.color;
        };

        return Sponza;
      }(Component), _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "loopTime", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 3600;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "maxIllum", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 20000;
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=sponza.js.map