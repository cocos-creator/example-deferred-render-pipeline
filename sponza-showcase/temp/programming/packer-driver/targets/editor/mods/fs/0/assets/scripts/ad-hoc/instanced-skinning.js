System.register(["cce:/internal/code-quality/cr.mjs", "cc", "../unlit-quad"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, Component, instantiate, Node, Prefab, SkeletalAnimationComponent, Texture2D, director, gfx, UnlitQuadComponent, _dec, _dec2, _dec3, _dec4, _dec5, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _temp, _crd, ccclass, property, InstancedSkinning;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfUnlitQuadComponent(extras) {
    _reporterNs.report("UnlitQuadComponent", "../unlit-quad", _context.meta, extras);
  }

  return {
    setters: [function (_cceInternalCodeQualityCrMjs) {
      _reporterNs = _cceInternalCodeQualityCrMjs;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      instantiate = _cc.instantiate;
      Node = _cc.Node;
      Prefab = _cc.Prefab;
      SkeletalAnimationComponent = _cc.SkeletalAnimationComponent;
      Texture2D = _cc.Texture2D;
      director = _cc.director;
      gfx = _cc.gfx;
    }, function (_unlitQuad) {
      UnlitQuadComponent = _unlitQuad.UnlitQuadComponent;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "68c59n+01ZPy5jl1xY5mn38", "instanced-skinning", undefined);

      ({
        ccclass,
        property
      } = _decorator);

      _export("InstancedSkinning", InstancedSkinning = (_dec = ccclass('InstancedSkinning'), _dec2 = property(Prefab), _dec3 = property(Prefab), _dec4 = property([Texture2D]), _dec5 = property(Node), _dec(_class = (_class2 = (_temp = class InstancedSkinning extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "baseline", _descriptor, this);

          _initializerDefineProperty(this, "testgroup", _descriptor2, this);

          _initializerDefineProperty(this, "labelImages", _descriptor3, this);

          _initializerDefineProperty(this, "maxGroupCount", _descriptor4, this);

          _initializerDefineProperty(this, "baselineVisible", _descriptor5, this);

          _initializerDefineProperty(this, "_groupCount", _descriptor6, this);

          _initializerDefineProperty(this, "groupPerColumn", _descriptor7, this);

          _initializerDefineProperty(this, "warningSign", _descriptor8, this);

          _defineProperty(this, "_baselineNode", null);

          _defineProperty(this, "_testNodes", []);

          _defineProperty(this, "_nameLabels", []);
        }

        set groupCount(val) {
          this._groupCount = val;

          this._updateGroups();
        }

        get groupCount() {
          return this._groupCount;
        }

        start() {
          // clamp the initial count if instancing is not supported
          if (!director.root.device.hasFeature(gfx.Feature.INSTANCED_ARRAYS)) {
            this._groupCount = Math.min(this._groupCount, 1);

            if (this.warningSign) {
              this.warningSign.active = true;
            }
          }

          this._baselineNode = this._initGroup('Baseline', this.baseline, 0);

          this._updateGroups();

          this._baselineNode.active = this.baselineVisible;
        }

        toggleBaselineGroup(e) {
          this._baselineNode.active = e.isChecked;
        }

        toggleAnimNames(e) {
          for (let i = 0; i < this._nameLabels.length; i++) {
            this._nameLabels[i].active = e.isChecked;
          }
        }

        setGroups(e) {
          this.groupCount = Math.floor(e.progress * this.maxGroupCount);
        }

        _updateGroups() {
          for (let i = 0; i < this._groupCount; i++) {
            if (this._testNodes[i]) {
              this._testNodes[i].active = true;
            } else {
              this._testNodes.push(this._initGroup('TestGroup', this.testgroup, 5 * (i + 1)));
            }
          }

          for (let i = this._groupCount; i < this._testNodes.length; i++) {
            this._testNodes[i].active = false;
          }
        }

        _initGroup(name, prefab, posZ) {
          const len = this.labelImages.length;
          const group = new Node(name);
          group.parent = this.node.scene;

          for (let i = 0; i < len; i++) {
            const posX = Math.floor(posZ / this.groupPerColumn) * 30 + i * 3;
            const inst = instantiate(prefab);
            inst.setPosition(posX, 0, posZ % this.groupPerColumn);
            inst.parent = group;
            const label = inst.getChildByName('Label').getComponent(_crd && UnlitQuadComponent === void 0 ? (_reportPossibleCrUseOfUnlitQuadComponent({
              error: Error()
            }), UnlitQuadComponent) : UnlitQuadComponent);
            label.texture = this.labelImages[i];

            this._nameLabels.push(label.node);

            const animComp = inst.getChildByName('Model').getComponent(SkeletalAnimationComponent);
            const clipName = inst.name = animComp.clips[i].name;
            animComp.play(clipName);
          }

          return group;
        }

      }, _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "baseline", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "testgroup", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "labelImages", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return [];
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "maxGroupCount", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return 10;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "baselineVisible", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return true;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "_groupCount", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return 1;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "groupPerColumn", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return 100;
        }
      }), _applyDecoratedDescriptor(_class2.prototype, "groupCount", [property], Object.getOwnPropertyDescriptor(_class2.prototype, "groupCount"), _class2.prototype), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "warningSign", [_dec5], {
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
//# sourceMappingURL=instanced-skinning.js.map