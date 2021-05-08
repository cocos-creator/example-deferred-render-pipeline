System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _decorator, builtinResMgr, gfx, Material, ModelComponent, SpriteFrame, Texture2D, utils, Vec3, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _class, _class2, _descriptor, _descriptor2, _descriptor3, _temp, _crd, ccclass, property, mesh, vbInfo, vbuffer, material, materialInfo, default_uvs, meshInfo, enableBlend, UnlitQuadComponent;

  function _createForOfIteratorHelperLoose(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; return function () { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } it = o[Symbol.iterator](); return it.next.bind(it); }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

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
      builtinResMgr = _cc.builtinResMgr;
      gfx = _cc.gfx;
      Material = _cc.Material;
      ModelComponent = _cc.ModelComponent;
      SpriteFrame = _cc.SpriteFrame;
      Texture2D = _cc.Texture2D;
      utils = _cc.utils;
      Vec3 = _cc.Vec3;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "39202sHQERK85gaOXtKVrbH", "unlit-quad", undefined);

      ccclass = _decorator.ccclass;
      property = _decorator.property;
      mesh = null;
      vbInfo = null;
      vbuffer = null;
      material = null;
      materialInfo = {
        effectName: 'unlit',
        technique: 0,
        defines: {
          USE_TEXTURE: true
        },
        states: {
          rasterizerState: {
            cullMode: gfx.CullMode.NONE
          }
        }
      };
      default_uvs = [0, 1, 1, 1, 0, 0, 1, 0];
      meshInfo = {
        positions: [-0.5, -0.5, 0, // bottom-left
        0.5, -0.5, 0, // bottom-right
        -0.5, 0.5, 0, // top-left
        0.5, 0.5, 0 // top-right
        ],
        uvs: default_uvs,
        indices: [0, 1, 2, 2, 1, 3],
        minPos: new Vec3(-0.5, -0.5, 0),
        maxPos: new Vec3(0.5, 0.5, 0)
      };
      enableBlend = {
        blendState: {
          targets: [{
            blend: true,
            blendSrc: gfx.BlendFactor.SRC_ALPHA,
            blendDst: gfx.BlendFactor.ONE_MINUS_SRC_ALPHA,
            blendDstAlpha: gfx.BlendFactor.ONE_MINUS_SRC_ALPHA
          }]
        }
      };

      _export("UnlitQuadComponent", UnlitQuadComponent = (_dec = ccclass('UnlitQuadComponent'), _dec2 = property(SpriteFrame), _dec3 = property(Texture2D), _dec4 = property({
        override: true,
        visible: false
      }), _dec5 = property({
        override: true,
        visible: false
      }), _dec6 = property({
        type: Texture2D
      }), _dec7 = property({
        type: SpriteFrame
      }), _dec(_class = (_class2 = (_temp = /*#__PURE__*/function (_ModelComponent) {
        _inheritsLoose(UnlitQuadComponent, _ModelComponent);

        function UnlitQuadComponent() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _ModelComponent.call.apply(_ModelComponent, [this].concat(args)) || this;

          _initializerDefineProperty(_assertThisInitialized(_this), "_sprite", _descriptor, _assertThisInitialized(_this));

          _initializerDefineProperty(_assertThisInitialized(_this), "_texture", _descriptor2, _assertThisInitialized(_this));

          _initializerDefineProperty(_assertThisInitialized(_this), "_transparent", _descriptor3, _assertThisInitialized(_this));

          return _this;
        }

        var _proto = UnlitQuadComponent.prototype;

        _proto.onLoad = function onLoad() {
          if (!material) {
            material = new Material();
            material.initialize(materialInfo);
            mesh = utils.createMesh(meshInfo);
            vbInfo = mesh.struct.vertexBundles[0].view;
            vbuffer = mesh.data.buffer.slice(vbInfo.offset, vbInfo.offset + vbInfo.length);
          }

          this.material = material;
          this._mesh = mesh;

          _ModelComponent.prototype.onLoad.call(this);

          this.updateTexture();
          this.transparent = this._transparent;
        };

        _proto.updateTexture = function updateTexture() {
          // update pass
          var pass = this.material && this.material.passes[0];
          var binding = pass && pass.getBinding('mainTexture');

          if (typeof binding !== 'number') {
            return;
          }

          var target = this._sprite ? this._sprite : this._texture ? this._texture : builtinResMgr.get('grey-texture');
          pass.bindTexture(binding, target.getGFXTexture()); // update UV (handle atlas)

          var model = this.model && this.model.subModels[0];
          var ia = model && model.inputAssembler;

          if (!ia) {
            return;
          }

          var uv = default_uvs;

          if (this._sprite) {
            this._sprite._calculateUV();

            uv = this._sprite.uv;
          }

          var offset = 0;
          var format = gfx.Format.UNKNOWN;

          for (var _iterator = _createForOfIteratorHelperLoose(ia.attributes), _step; !(_step = _iterator()).done;) {
            var a = _step.value;

            if (a.name === gfx.AttributeName.ATTR_TEX_COORD) {
              format = a.format;
              break;
            }

            offset += gfx.FormatInfos[a.format].size;
          }

          var vb = ia.vertexBuffers[0];
          utils.writeBuffer(new DataView(vbuffer), uv, format, offset, vb.stride);
          vb.update(vbuffer);
        };

        _createClass(UnlitQuadComponent, [{
          key: "sharedMaterials",
          get: function get() {
            return _ModelComponent.prototype.sharedMaterials;
          },
          set: function set(val) {
            this.sharedMaterials = val;
          }
        }, {
          key: "mesh",
          get: function get() {
            return _ModelComponent.prototype.mesh;
          },
          set: function set(val) {
            this.mesh = val;
          }
        }, {
          key: "texture",
          get: function get() {
            return this._texture;
          },
          set: function set(val) {
            this._texture = val;
            this.updateTexture();
          }
        }, {
          key: "spriteFrame",
          get: function get() {
            return this._sprite;
          },
          set: function set(val) {
            this._sprite = val;
            this.updateTexture();
          }
        }, {
          key: "transparent",
          get: function get() {
            return this._transparent;
          },
          set: function set(val) {
            this._transparent = val;
            this.material.overridePipelineStates(val ? enableBlend : {});
          }
        }]);

        return UnlitQuadComponent;
      }(ModelComponent), _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "_sprite", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "_texture", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _applyDecoratedDescriptor(_class2.prototype, "sharedMaterials", [_dec4], Object.getOwnPropertyDescriptor(_class2.prototype, "sharedMaterials"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "mesh", [_dec5], Object.getOwnPropertyDescriptor(_class2.prototype, "mesh"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "texture", [_dec6], Object.getOwnPropertyDescriptor(_class2.prototype, "texture"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "spriteFrame", [_dec7], Object.getOwnPropertyDescriptor(_class2.prototype, "spriteFrame"), _class2.prototype), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "_transparent", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return false;
        }
      }), _applyDecoratedDescriptor(_class2.prototype, "transparent", [property], Object.getOwnPropertyDescriptor(_class2.prototype, "transparent"), _class2.prototype)), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=unlit-quad.js.map