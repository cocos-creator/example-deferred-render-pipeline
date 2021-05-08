System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _decorator, Component, Node, _dec, _dec2, _class, _class2, _descriptor, _descriptor2, _descriptor3, _temp, _crd, ccclass, property, sineLerp, PhysicsGround;

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
      Component = _cc.Component;
      Node = _cc.Node;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "22c90hEyfxHvbY8lQgqlkQ+", "ground", undefined);

      ccclass = _decorator.ccclass;
      property = _decorator.property;

      sineLerp = function sineLerp(b, e, t) {
        return b + (e - b) * (Math.sin((t - 0.5) * Math.PI) + 1) * 0.5;
      };

      _export("PhysicsGround", PhysicsGround = (_dec = ccclass('PhysicsGround'), _dec2 = property(Node), _dec(_class = (_class2 = (_temp = /*#__PURE__*/function (_Component) {
        _inheritsLoose(PhysicsGround, _Component);

        function PhysicsGround() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _Component.call.apply(_Component, [this].concat(args)) || this;

          _initializerDefineProperty(_assertThisInitialized(_this), "spinDuration", _descriptor, _assertThisInitialized(_this));

          _initializerDefineProperty(_assertThisInitialized(_this), "spinInterval", _descriptor2, _assertThisInitialized(_this));

          _initializerDefineProperty(_assertThisInitialized(_this), "manualSpinSliderNode", _descriptor3, _assertThisInitialized(_this));

          _defineProperty(_assertThisInitialized(_this), "_time", 0);

          _defineProperty(_assertThisInitialized(_this), "_angle", 0);

          _defineProperty(_assertThisInitialized(_this), "_autoSpin", true);

          return _this;
        }

        var _proto = PhysicsGround.prototype;

        _proto.update = function update(deltaTime) {
          // spin once in a while
          if (this._autoSpin) {
            this._time += deltaTime;
            var t = Math.min(this.spinInterval - this._time % this.spinInterval, this.spinDuration);
            var back = Math.floor(this._time / this.spinInterval) % 2;
            this._angle = sineLerp(back ? 0 : 180, back ? 180 : 0, t / this.spinDuration);
          }

          this.node.setRotationFromEuler(0, 0, this._angle);
        } // toggle callback
        ;

        _proto.toggleSpin = function toggleSpin(e) {
          this._autoSpin = e.isChecked;
          this.manualSpinSliderNode.active = !e.isChecked;
        } // slider callback
        ;

        _proto.setAngle = function setAngle(e) {
          this._angle = (0.5 - e.progress) * 180;
        };

        return PhysicsGround;
      }(Component), _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "spinDuration", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 5;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "spinInterval", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 20;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "manualSpinSliderNode", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=ground.js.map