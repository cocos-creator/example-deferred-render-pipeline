System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _decorator, Color, Component, EffectAsset, Material, ModelComponent, Node, SphereColliderComponent, Vec3, utils, primitives, math, Element, _dec, _dec2, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _temp, _crd, ccclass, property, hintMesh, sphereMesh, outOfBounds, v3_1, Emitter;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Color = _cc.Color;
      Component = _cc.Component;
      EffectAsset = _cc.EffectAsset;
      Material = _cc.Material;
      ModelComponent = _cc.ModelComponent;
      Node = _cc.Node;
      SphereColliderComponent = _cc.SphereColliderComponent;
      Vec3 = _cc.Vec3;
      utils = _cc.utils;
      primitives = _cc.primitives;
      math = _cc.math;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "0be61hmDlxF0LIemE0HrRrM", "emitter", undefined);

      ({
        ccclass,
        property
      } = _decorator);

      outOfBounds = (v, border = 20) => Math.abs(v.x) > border || Math.abs(v.y) > border || Math.abs(v.z) > border;

      v3_1 = new Vec3();
      Element = class Element extends Component {
        constructor(...args) {
          super(...args);

          _defineProperty(this, "velocity", new Vec3());

          _defineProperty(this, "color", new Color());

          _defineProperty(this, "collided", false);

          _defineProperty(this, "framesRemaining", 0);

          _defineProperty(this, "pass", null);

          _defineProperty(this, "hColor", 0);
        }

      }; // encapsulate an interesting emitter, emitted particles will
      // annihilate after collision, if satisfying filter condition

      _export("Emitter", Emitter = (_dec = ccclass('Emitter'), _dec2 = property(EffectAsset), _dec(_class = (_class2 = (_temp = class Emitter extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "poolSize", _descriptor, this);

          _initializerDefineProperty(this, "group", _descriptor2, this);

          _initializerDefineProperty(this, "mask", _descriptor3, this);

          _initializerDefineProperty(this, "leftAngle", _descriptor4, this);

          _initializerDefineProperty(this, "rightAngle", _descriptor5, this);

          _initializerDefineProperty(this, "color", _descriptor6, this);

          _initializerDefineProperty(this, "effectAsset", _descriptor7, this);

          _defineProperty(this, "_deadpool", []);

          _defineProperty(this, "_livepool", []);
        }

        // generate everything procedurally
        start() {
          if (!hintMesh) {
            hintMesh = utils.createMesh(primitives.capsule(1));
            sphereMesh = utils.createMesh(primitives.sphere(1));
          } // emitter hint


          const hint = new Node();
          const hintModel = hint.addComponent(ModelComponent);
          const hintMat = new Material();
          hintMat.initialize({
            effectName: 'builtin-standard'
          });
          hintMat.setProperty('albedo', this.color);
          hintMat.setProperty('metallic', 0.1);
          hintModel.material = hintMat;
          hintModel.mesh = hintMesh;
          hint.parent = this.node; // elements

          for (let i = 0; i < this.poolSize; i++) {
            const node = new Node();
            node.parent = this.node; // element info

            const info = node.addComponent(Element);
            info.color.set(this.color); // model

            const model = node.addComponent(ModelComponent);
            const mat = new Material();
            mat.initialize({
              effectName: 'builtin-standard',
              technique: 1 // transparent

            });
            mat.setProperty('metallic', 0.1);
            info.pass = mat.passes[0];
            info.hColor = info.pass.getHandle('albedo');
            info.pass.setUniform(info.hColor, info.color);
            model.material = mat;
            model.mesh = sphereMesh; // collider

            const col = node.addComponent(SphereColliderComponent);
            col.radius = 1;
            col.isTrigger = true;
            col.setGroup(this.group);
            col.setMask(this.mask);
            col.on('onTriggerEnter', e => {
              const collider = e.selfCollider;
              const ele = collider.node.getComponent(Element);

              if (ele.collided) {
                return;
              }

              ele.color.a = 255;
              ele.pass.setUniform(ele.hColor, ele.color);
              ele.collided = true;
              ele.framesRemaining = 5;
              Vec3.set(ele.velocity, 0, 0, 0);
              collider.setGroup(0);
              collider.setMask(0);
            }); // store

            node.active = false;

            this._deadpool.push(info);
          }
        }

        update() {
          for (let i = 0; i < this._livepool.length; i++) {
            const ele = this._livepool[i];

            if (ele.collided) {
              if (ele.framesRemaining-- <= 0) {
                this.reap(ele);
              }
            } else {
              Vec3.add(v3_1, ele.node.position, ele.velocity);
              ele.node.setPosition(v3_1);

              if (outOfBounds(v3_1)) {
                this.reap(ele);
              }
            }
          }

          if (this._deadpool.length > 0) {
            this.resurrect();
          } // for (let i = 0; i < this._deadpool.length; i++) this.resurrect();

        }

        reap(ele) {
          ele.node.active = false;

          this._livepool.splice(this._livepool.indexOf(ele), 1);

          this._deadpool.push(ele);
        }

        reapAll() {
          for (let i = 0; i < this._livepool.length; i++) {
            const ele = this._livepool[i];
            ele.node.active = false;

            this._deadpool.push(ele);
          }

          this._livepool.length = 0;
        }

        resurrect() {
          const ele = this._deadpool.pop();

          const theta = math.toRadian(math.randomRange(this.leftAngle, this.rightAngle));
          const phi = math.randomRange(1, 2);
          const speed = math.randomRange(0.1, 0.3);
          Vec3.set(ele.velocity, Math.cos(theta) * Math.sin(phi) * speed, Math.cos(phi) * speed, Math.sin(theta) * Math.sin(phi) * speed);
          ele.color.a = this.color.a;
          ele.collided = false;
          ele.pass.setUniform(ele.hColor, ele.color);
          const col = ele.node.getComponent(SphereColliderComponent);
          col.setGroup(this.group);
          col.setMask(this.mask);
          ele.node.setPosition(0, 0, 0);

          this._livepool.push(ele);

          ele.node.active = true;
        }

      }, _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "poolSize", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return 50;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "group", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return 0;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "mask", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return 0;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "leftAngle", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return 0;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "rightAngle", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return 0;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "color", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return new Color();
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "effectAsset", [_dec2], {
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
//# sourceMappingURL=emitter.js.map