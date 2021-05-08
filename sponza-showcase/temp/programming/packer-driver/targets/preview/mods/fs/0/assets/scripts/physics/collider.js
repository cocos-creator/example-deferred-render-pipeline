System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _decorator, Component, ModelComponent, RigidBodyComponent, Vec3, Vec4, _dec, _class, _temp, _crd, ccclass, v3_1, static_color, Collider;

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
      RigidBodyComponent = _cc.RigidBodyComponent;
      Vec3 = _cc.Vec3;
      Vec4 = _cc.Vec4;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "9734djZWa9MEbCNBh1ENuMW", "collider", undefined);

      ccclass = _decorator.ccclass;
      v3_1 = new Vec3();
      static_color = new Vec4(0.3, 0.3, 0.3, 1.0);

      _export("Collider", Collider = (_dec = ccclass('Collider'), _dec(_class = (_temp = /*#__PURE__*/function (_Component) {
        _inheritsLoose(Collider, _Component);

        function Collider() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _Component.call.apply(_Component, [this].concat(args)) || this;

          _defineProperty(_assertThisInitialized(_this), "_body", null);

          _defineProperty(_assertThisInitialized(_this), "_initialColor", null);

          _defineProperty(_assertThisInitialized(_this), "_pass", null);

          _defineProperty(_assertThisInitialized(_this), "_handle", 0);

          _defineProperty(_assertThisInitialized(_this), "_color", new Vec4());

          return _this;
        }

        var _proto = Collider.prototype;

        _proto.start = function start() {
          this._body = this.node.getComponent(RigidBodyComponent);
          var mat = this.node.getComponent(ModelComponent).material; // Vec4 and Color are compatible with each other, but Vec4 is more efficient when updated frequently

          this._initialColor = new Vec4(mat.getProperty('mainColor'));
          this._pass = mat.passes[0];
          this._handle = this._pass.getHandle('mainColor');
        };

        _proto.update = function update() {
          // visualize speed
          this._body.getLinearVelocity(v3_1);

          var speed = v3_1.length();
          speed /= speed + 1;
          Vec4.lerp(this._color, static_color, this._initialColor, speed);

          this._pass.setUniform(this._handle, this._color);
        };

        return Collider;
      }(Component), _temp)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=collider.js.map