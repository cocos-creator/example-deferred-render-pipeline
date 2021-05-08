System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _decorator, Component, instantiate, Node, Vec3, math, _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _temp, _crd, ccclass, property, v3_1, ColliderManager;

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
      Vec3 = _cc.Vec3;
      math = _cc.math;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "95b4fpK+A9Cmbfc9vOmsGsJ", "collider-manager", undefined);

      ({
        ccclass,
        property
      } = _decorator);
      v3_1 = new Vec3();

      _export("ColliderManager", ColliderManager = (_dec = ccclass('ColliderManager'), _dec2 = property([Node]), _dec3 = property({
        type: Node
      }), _dec(_class = (_class2 = (_temp = class ColliderManager extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "count", _descriptor, this);

          _initializerDefineProperty(this, "boundHalfLength", _descriptor2, this);

          _initializerDefineProperty(this, "prefabs", _descriptor3, this);

          _initializerDefineProperty(this, "tipsNode", _descriptor4, this);
        }

        start() {
          this.tipsNode.active = window.CC_PHYSICS_BUILTIN;
          this.node.removeAllChildren();

          for (let i = 0; i < this.count; i++) {
            const node = instantiate(this.prefabs[Math.round(Math.random())]);
            node.parent = this.node;
            node.setPosition(math.randomRange(-2, 2), 3 + i * 2, math.randomRange(-2, 2));
            node.setRotationFromEuler(math.randomRange(0, 180), math.randomRange(0, 180), math.randomRange(0, 180));
          }
        }

        update() {
          // handle bounds
          for (const node of this.node.children) {
            node.getPosition(v3_1);

            if (v3_1.y < -10) {
              v3_1.y = 30;
            } else if (v3_1.x > this.boundHalfLength + 3) {
              v3_1.x = -(this.boundHalfLength - 3);
            } else if (v3_1.x < -(this.boundHalfLength + 3)) {
              v3_1.x = this.boundHalfLength - 3;
            } else if (v3_1.z > this.boundHalfLength + 3) {
              v3_1.z = -(this.boundHalfLength - 3);
            } else if (v3_1.z < -(this.boundHalfLength + 3)) {
              v3_1.z = this.boundHalfLength - 3;
            }

            node.setPosition(v3_1);
          }
        }

      }, _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "count", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return 200;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "boundHalfLength", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return 12.5;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "prefabs", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return [];
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "tipsNode", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=collider-manager.js.map