System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _decorator, Component, Quat, Vec3, _dec, _class, _class2, _descriptor, _descriptor2, _descriptor3, _temp, _crd, ccclass, property, _pos, _quat, JellyFish;

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
      Quat = _cc.Quat;
      Vec3 = _cc.Vec3;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "0a93azrzEdN/btLNf6splxl", "jellyfish", undefined);

      ccclass = _decorator.ccclass;
      property = _decorator.property;
      _pos = new Vec3();
      _quat = new Quat();

      _export("JellyFish", JellyFish = (_dec = ccclass('JellyFish'), _dec(_class = (_class2 = (_temp = /*#__PURE__*/function (_Component) {
        _inheritsLoose(JellyFish, _Component);

        function JellyFish() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _Component.call.apply(_Component, [this].concat(args)) || this;

          _initializerDefineProperty(_assertThisInitialized(_this), "speed", _descriptor, _assertThisInitialized(_this));

          _initializerDefineProperty(_assertThisInitialized(_this), "mixDuration", _descriptor2, _assertThisInitialized(_this));

          _initializerDefineProperty(_assertThisInitialized(_this), "range", _descriptor3, _assertThisInitialized(_this));

          _defineProperty(_assertThisInitialized(_this), "_dstPos", new Vec3());

          _defineProperty(_assertThisInitialized(_this), "_dstRot", new Quat());

          _defineProperty(_assertThisInitialized(_this), "_dir", new Vec3());

          _defineProperty(_assertThisInitialized(_this), "_changing", true);

          _defineProperty(_assertThisInitialized(_this), "_time", 0);

          return _this;
        }

        var _proto = JellyFish.prototype;

        _proto.onLoad = function onLoad() {
          var x = Math.random() * this.range - this.range / 2;
          var y = Math.random() * this.range - this.range / 2;
          var z = Math.random() * this.range - this.range / 2;
          this.node.setPosition(x, y, z);
          this.newDst();
        };

        _proto.newDst = function newDst() {
          this._dstPos.x = Math.random() * this.range - this.range / 2;
          this._dstPos.y = Math.random() * this.range - this.range / 2;
          this._dstPos.z = Math.random() * this.range - this.range / 2;
          this.node.getPosition(_pos);
          var temp = new Vec3();
          temp.set(this._dstPos);

          this._dstPos.subtract(_pos);

          this._dir.set(this._dstPos);

          this._dstPos.set(temp);

          var angle = Math.atan2(this._dir.x, this._dir.z);
          this._dstRot.x = 0;
          this._dstRot.y = 1 * Math.sin(angle / 2);
          this._dstRot.z = 0;
          this._dstRot.w = Math.cos(angle / 2);
          Quat.normalize(this._dstRot, this._dstRot); // let angle = cc.Vec3.angle(_pos, this._dstPos);
          // this._dstRot.x = _pos.x * Math.sin(angle/2);
          // this._dstRot.y = _pos.y * Math.sin(angle/2);
          // this._dstRot.z = _pos.z * Math.sin(angle/2);
          // this._dstRot.w = Math.cos(angle/2);
          // cc.Quat.normalize(this._dstRot, this._dstRot);
          // this._dstPos.sub(_pos, this._dir);

          this._dir.normalize();

          this._dir.multiplyScalar(this.speed);

          this._changing = true;
          this._time = 0;
        };

        _proto.update = function update(dt) {
          this._time += dt;

          if (this._changing) {
            if (this._time >= this.mixDuration) {
              this.node.setRotation(this._dstRot);
              this._changing = false;
            } else {
              var ratio = this._time / this.mixDuration;
              this.node.getRotation(_quat);

              _quat.lerp(this._dstRot, ratio);

              this.node.setRotation(_quat);
            }
          }

          this.node.getPosition(_pos);

          _pos.add(this._dir);

          this.node.setPosition(_pos);

          _pos.subtract(this._dstPos);

          if (_pos.length() < 5) {
            this.newDst();
          }
        };

        return JellyFish;
      }(Component), _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "speed", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0.01;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "mixDuration", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 1;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "range", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 50;
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=jellyfish.js.map