System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _decorator, Component, instantiate, Node, Prefab, _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2, _temp, _crd, ccclass, property, HealSpell;

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

      _cclegacy._RF.push({}, "407b91FraxBopu0dt4vtVYA", "healspell", undefined);

      ({
        ccclass,
        property
      } = _decorator);

      _export("HealSpell", HealSpell = (_dec = ccclass('HealSpell'), _dec2 = property([Prefab]), _dec3 = property([Node]), _dec(_class = (_class2 = (_temp = class HealSpell extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "effect", _descriptor, this);

          _initializerDefineProperty(this, "Point", _descriptor2, this);
        }

        heal() {
          if (!this.enabled) {
            return;
          }

          const point0 = instantiate(this.effect[0]);
          point0.setParent(this.node);
          point0.setPosition(0, 0, 0);
          const point1 = instantiate(this.effect[1]);
          point1.setParent(this.Point[0]);
          point1.setWorldPosition(this.Point[0].getWorldPosition());
          const point2 = instantiate(this.effect[2]);
          point2.setParent(this.Point[1]);
          point2.setWorldPosition(this.Point[1].getWorldPosition());
          const point3 = instantiate(this.effect[1]);
          point3.setParent(this.Point[2]);
          point3.setWorldPosition(this.Point[2].getWorldPosition());
        }

      }, _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "effect", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return [];
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "Point", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return [];
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=healspell.js.map