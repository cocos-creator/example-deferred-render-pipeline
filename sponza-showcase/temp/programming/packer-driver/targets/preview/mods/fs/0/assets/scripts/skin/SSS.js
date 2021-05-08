System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _decorator, Component, ModelComponent, _dec, _class, _temp, _crd, ccclass, SSS;

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
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "5d0e06TqCJOgYWfO1jCim+/", "SSS", undefined);

      ccclass = _decorator.ccclass;

      _export("SSS", SSS = (_dec = ccclass('SSS'), _dec(_class = (_temp = /*#__PURE__*/function (_Component) {
        _inheritsLoose(SSS, _Component);

        function SSS() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _Component.call.apply(_Component, [this].concat(args)) || this;

          _defineProperty(_assertThisInitialized(_this), "_handle", null);

          _defineProperty(_assertThisInitialized(_this), "_pass", null);

          return _this;
        }

        var _proto = SSS.prototype;

        _proto.start = function start() {
          var mat = this.node.getComponent(ModelComponent).material;
          this._pass = mat.passes[0];
          this._handle = this._pass.getHandle('scattering');
        };

        _proto.setSSSIntensity = function setSSSIntensity(e) {
          this._pass.setUniform(this._handle, e.progress);
        };

        _proto.toggle = function toggle(e) {
          this.node.active = e.isChecked;
        };

        return SSS;
      }(Component), _temp)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=SSS.js.map