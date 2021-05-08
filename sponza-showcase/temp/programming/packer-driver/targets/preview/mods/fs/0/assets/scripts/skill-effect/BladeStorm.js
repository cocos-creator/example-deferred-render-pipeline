System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _decorator, Component, instantiate, Node, Prefab, _dec, _class, _descriptor, _descriptor2, _temp, _dec2, _dec3, _dec4, _class3, _class4, _descriptor3, _descriptor4, _temp2, _crd, ccclass, property, SkilType, Fight, BladeStorm;

  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

  function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; _setPrototypeOf(subClass, superClass); }

  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      instantiate = _cc.instantiate;
      Node = _cc.Node;
      Prefab = _cc.Prefab;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "19951pxMERHsK5hIrDxX1BZ", "BladeStorm", undefined);

      ccclass = _decorator.ccclass;
      property = _decorator.property;

      (function (SkilType) {
        SkilType[SkilType["SELF"] = 0] = "SELF";
        SkilType[SkilType["ENEMY"] = 1] = "ENEMY";
      })(SkilType || (SkilType = {}));

      Fight = (_dec = property(Prefab), (_class = (_temp = /*#__PURE__*/function () {
        function Fight() {
          _initializerDefineProperty(this, "type", _descriptor, this);

          _initializerDefineProperty(this, "effect", _descriptor2, this);
        }

        var _proto = Fight.prototype;

        _proto.explo = function explo() {
          var effect = instantiate(this.effect);
          effect.setWorldPosition(0, 0, 0);
        };

        return Fight;
      }(), _temp), (_descriptor = _applyDecoratedDescriptor(_class.prototype, "type", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return SkilType.SELF;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class.prototype, "effect", [_dec], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class));

      _export("BladeStorm", BladeStorm = (_dec2 = ccclass('BladeStorm'), _dec3 = property([Prefab]), _dec4 = property([Node]), _dec2(_class3 = (_class4 = (_temp2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(BladeStorm, _Component);

        function BladeStorm() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _Component.call.apply(_Component, [this].concat(args)) || this;

          _initializerDefineProperty(_assertThisInitialized(_this), "effect", _descriptor3, _assertThisInitialized(_this));

          _initializerDefineProperty(_assertThisInitialized(_this), "Point", _descriptor4, _assertThisInitialized(_this));

          return _this;
        }

        var _proto2 = BladeStorm.prototype;

        // @property(Prefab)
        // new_one: Prefab = null;
        // @property(fight)
        // fight1: fight=null;

        /*get bbb(){
            return this._aaa;
        }
          set bbb (value){
            this._aaa = value;
          }
          _aaa = '';*/
        _proto2.fire = function fire() {
          // console.log('comming');
          if (!this.enabled) {
            return;
          }

          var new_one = instantiate(this.effect[0]);
          new_one.setParent(this.node.parent);
          new_one.setWorldPosition(1, 7, 20); // const self_blade = instantiate(this.effect[6]) as Node;
          // self_blade.setParent(this.node.parent);
          // self_blade.setWorldPosition(1,2,3);

          var point1 = instantiate(this.effect[2]);
          point1.setParent(this.Point[0]);
          point1.setWorldPosition(this.Point[0].getWorldPosition());
          var point2 = instantiate(this.effect[1]);
          point2.setParent(this.Point[1]);
          point2.setWorldPosition(this.Point[1].getWorldPosition());
          var point3 = instantiate(this.effect[2]);
          point3.setParent(this.Point[2]);
          point3.setWorldPosition(this.Point[2].getWorldPosition()); // const CFD = instantiate(this.effect[3]) as Node;
          // CFD.setParent(this.node.parent);
          // CFD.setWorldPosition(CFD.getPosition(this.Point[0]));
        };

        _proto2.ring = function ring() {
          if (!this.enabled) {
            return;
          }

          var point4 = instantiate(this.effect[3]);
          point4.setParent(this.node.parent);
          point4.setWorldPosition(1, 2, 4.5);
          var point5 = instantiate(this.effect[4]);
          point5.setParent(this.node.parent);
          point5.setWorldPosition(1, 2, 4.5);
          /*setTimeout(() => {
              this.node
          }, 1000);  */
        }
        /*heal(){
            //console.log('comming');
            const new_one = instantiate(this.effect[2]) as Node;
            new_one.setParent(this.node.parent);
            new_one.setWorldPosition(1,2,3);
        }*/
        // update (deltaTime: number) {
        //     // Your update function goes here.
        // }
        ;

        return BladeStorm;
      }(Component), _temp2), (_descriptor3 = _applyDecoratedDescriptor(_class4.prototype, "effect", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class4.prototype, "Point", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      })), _class4)) || _class3));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=BladeStorm.js.map