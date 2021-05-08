System.register(["cce:/internal/code-quality/cr.mjs", "cc", "../unlit-quad"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, Component, instantiate, Node, Prefab, SkeletalAnimationComponent, Texture2D, director, gfx, UnlitQuadComponent, _dec, _dec2, _dec3, _dec4, _dec5, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _temp, _crd, ccclass, property, InstancedSkinning;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

  function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; _setPrototypeOf(subClass, superClass); }

  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

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

      ccclass = _decorator.ccclass;
      property = _decorator.property;

      _export("InstancedSkinning", InstancedSkinning = (_dec = ccclass('InstancedSkinning'), _dec2 = property(Prefab), _dec3 = property(Prefab), _dec4 = property([Texture2D]), _dec5 = property(Node), _dec(_class = (_class2 = (_temp = /*#__PURE__*/function (_Component) {
        _inheritsLoose(InstancedSkinning, _Component);

        function InstancedSkinning() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _Component.call.apply(_Component, [this].concat(args)) || this;

          _initializerDefineProperty(_assertThisInitialized(_this), "baseline", _descriptor, _assertThisInitialized(_this));

          _initializerDefineProperty(_assertThisInitialized(_this), "testgroup", _descriptor2, _assertThisInitialized(_this));

          _initializerDefineProperty(_assertThisInitialized(_this), "labelImages", _descriptor3, _assertThisInitialized(_this));

          _initializerDefineProperty(_assertThisInitialized(_this), "maxGroupCount", _descriptor4, _assertThisInitialized(_this));

          _initializerDefineProperty(_assertThisInitialized(_this), "baselineVisible", _descriptor5, _assertThisInitialized(_this));

          _initializerDefineProperty(_assertThisInitialized(_this), "_groupCount", _descriptor6, _assertThisInitialized(_this));

          _initializerDefineProperty(_assertThisInitialized(_this), "groupPerColumn", _descriptor7, _assertThisInitialized(_this));

          _initializerDefineProperty(_assertThisInitialized(_this), "warningSign", _descriptor8, _assertThisInitialized(_this));

          _defineProperty(_assertThisInitialized(_this), "_baselineNode", null);

          _defineProperty(_assertThisInitialized(_this), "_testNodes", []);

          _defineProperty(_assertThisInitialized(_this), "_nameLabels", []);

          return _this;
        }

        var _proto = InstancedSkinning.prototype;

        _proto.start = function start() {
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
        };

        _proto.toggleBaselineGroup = function toggleBaselineGroup(e) {
          this._baselineNode.active = e.isChecked;
        };

        _proto.toggleAnimNames = function toggleAnimNames(e) {
          for (var i = 0; i < this._nameLabels.length; i++) {
            this._nameLabels[i].active = e.isChecked;
          }
        };

        _proto.setGroups = function setGroups(e) {
          this.groupCount = Math.floor(e.progress * this.maxGroupCount);
        };

        _proto._updateGroups = function _updateGroups() {
          for (var i = 0; i < this._groupCount; i++) {
            if (this._testNodes[i]) {
              this._testNodes[i].active = true;
            } else {
              this._testNodes.push(this._initGroup('TestGroup', this.testgroup, 5 * (i + 1)));
            }
          }

          for (var _i = this._groupCount; _i < this._testNodes.length; _i++) {
            this._testNodes[_i].active = false;
          }
        };

        _proto._initGroup = function _initGroup(name, prefab, posZ) {
          var len = this.labelImages.length;
          var group = new Node(name);
          group.parent = this.node.scene;

          for (var i = 0; i < len; i++) {
            var posX = Math.floor(posZ / this.groupPerColumn) * 30 + i * 3;
            var inst = instantiate(prefab);
            inst.setPosition(posX, 0, posZ % this.groupPerColumn);
            inst.parent = group;
            var label = inst.getChildByName('Label').getComponent(_crd && UnlitQuadComponent === void 0 ? (_reportPossibleCrUseOfUnlitQuadComponent({
              error: Error()
            }), UnlitQuadComponent) : UnlitQuadComponent);
            label.texture = this.labelImages[i];

            this._nameLabels.push(label.node);

            var animComp = inst.getChildByName('Model').getComponent(SkeletalAnimationComponent);
            var clipName = inst.name = animComp.clips[i].name;
            animComp.play(clipName);
          }

          return group;
        };

        _createClass(InstancedSkinning, [{
          key: "groupCount",
          get: function get() {
            return this._groupCount;
          },
          set: function set(val) {
            this._groupCount = val;

            this._updateGroups();
          }
        }]);

        return InstancedSkinning;
      }(Component), _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "baseline", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "testgroup", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "labelImages", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "maxGroupCount", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 10;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "baselineVisible", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return true;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "_groupCount", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 1;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "groupPerColumn", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 100;
        }
      }), _applyDecoratedDescriptor(_class2.prototype, "groupCount", [property], Object.getOwnPropertyDescriptor(_class2.prototype, "groupCount"), _class2.prototype), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "warningSign", [_dec5], {
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
//# sourceMappingURL=instanced-skinning.js.map