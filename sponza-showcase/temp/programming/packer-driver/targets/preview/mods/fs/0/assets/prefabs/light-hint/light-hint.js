System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _decorator, Component, CameraComponent, ModelComponent, SpotLightComponent, SphereLightComponent, Vec2, _dec, _class, _temp, _crd, ccclass, LightHint;

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
      ModelComponent = _cc.ModelComponent;
      SpotLightComponent = _cc.SpotLightComponent;
      SphereLightComponent = _cc.SphereLightComponent;
      Vec2 = _cc.Vec2;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "bd5838x//xGMYENw1vAlfIM", "light-hint", undefined);

      ccclass = _decorator.ccclass;

      _export("LightHint", LightHint = (_dec = ccclass("LightHint"), _dec(_class = (_temp = /*#__PURE__*/function (_Component) {
        _inheritsLoose(LightHint, _Component);

        function LightHint() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _Component.call.apply(_Component, [this].concat(args)) || this;

          _defineProperty(_assertThisInitialized(_this), "_material", null);

          _defineProperty(_assertThisInitialized(_this), "_camera", null);

          return _this;
        }

        var _proto = LightHint.prototype;

        _proto.start = function start() {
          var light = this.node.parent.getComponent(SphereLightComponent);
          if (!light) light = this.node.parent.getComponent(SpotLightComponent);
          this._material = this.node.getComponent(ModelComponent).material;
          this._camera = this.node.scene.getComponentInChildren(CameraComponent);
          var size = light.size * 4;
          this.node.setWorldScale(size, size, size);

          this._material.setProperty('color', light.color);

          this._material.setProperty('intensitySize', new Vec2(light.luminance, 0.4));
        };

        _proto.update = function update() {
          this.node.setWorldRotation(this._camera.node.worldRotation);
        };

        return LightHint;
      }(Component), _temp)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=light-hint.js.map