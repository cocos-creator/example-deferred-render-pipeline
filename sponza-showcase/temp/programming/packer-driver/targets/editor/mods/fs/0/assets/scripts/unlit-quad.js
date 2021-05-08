System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _decorator, builtinResMgr, gfx, Material, ModelComponent, SpriteFrame, Texture2D, utils, Vec3, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _class, _class2, _descriptor, _descriptor2, _descriptor3, _temp, _crd, ccclass, property, mesh, vbInfo, vbuffer, material, materialInfo, default_uvs, meshInfo, enableBlend, UnlitQuadComponent;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

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

      ({
        ccclass,
        property
      } = _decorator);
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
      }), _dec(_class = (_class2 = (_temp = class UnlitQuadComponent extends ModelComponent {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "_sprite", _descriptor, this);

          _initializerDefineProperty(this, "_texture", _descriptor2, this);

          _initializerDefineProperty(this, "_transparent", _descriptor3, this);
        }

        set sharedMaterials(val) {
          super.sharedMaterials = val;
        }

        get sharedMaterials() {
          return super.sharedMaterials;
        }

        set mesh(val) {
          super.mesh = val;
        }

        get mesh() {
          return super.mesh;
        }

        set texture(val) {
          this._texture = val;
          this.updateTexture();
        }

        get texture() {
          return this._texture;
        }

        set spriteFrame(val) {
          this._sprite = val;
          this.updateTexture();
        }

        get spriteFrame() {
          return this._sprite;
        }

        set transparent(val) {
          this._transparent = val;
          this.material.overridePipelineStates(val ? enableBlend : {});
        }

        get transparent() {
          return this._transparent;
        }

        onLoad() {
          if (!material) {
            material = new Material();
            material.initialize(materialInfo);
            mesh = utils.createMesh(meshInfo);
            vbInfo = mesh.struct.vertexBundles[0].view;
            vbuffer = mesh.data.buffer.slice(vbInfo.offset, vbInfo.offset + vbInfo.length);
          }

          this.material = material;
          this._mesh = mesh;
          super.onLoad();
          this.updateTexture();
          this.transparent = this._transparent;
        }

        updateTexture() {
          // update pass
          const pass = this.material && this.material.passes[0];
          const binding = pass && pass.getBinding('mainTexture');

          if (typeof binding !== 'number') {
            return;
          }

          const target = this._sprite ? this._sprite : this._texture ? this._texture : builtinResMgr.get('grey-texture');
          pass.bindTexture(binding, target.getGFXTexture()); // update UV (handle atlas)

          const model = this.model && this.model.subModels[0];
          const ia = model && model.inputAssembler;

          if (!ia) {
            return;
          }

          let uv = default_uvs;

          if (this._sprite) {
            this._sprite._calculateUV();

            uv = this._sprite.uv;
          }

          let offset = 0;
          let format = gfx.Format.UNKNOWN;

          for (const a of ia.attributes) {
            if (a.name === gfx.AttributeName.ATTR_TEX_COORD) {
              format = a.format;
              break;
            }

            offset += gfx.FormatInfos[a.format].size;
          }

          const vb = ia.vertexBuffers[0];
          utils.writeBuffer(new DataView(vbuffer), uv, format, offset, vb.stride);
          vb.update(vbuffer);
        }

      }, _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "_sprite", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "_texture", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _applyDecoratedDescriptor(_class2.prototype, "sharedMaterials", [_dec4], Object.getOwnPropertyDescriptor(_class2.prototype, "sharedMaterials"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "mesh", [_dec5], Object.getOwnPropertyDescriptor(_class2.prototype, "mesh"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "texture", [_dec6], Object.getOwnPropertyDescriptor(_class2.prototype, "texture"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "spriteFrame", [_dec7], Object.getOwnPropertyDescriptor(_class2.prototype, "spriteFrame"), _class2.prototype), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "_transparent", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return false;
        }
      }), _applyDecoratedDescriptor(_class2.prototype, "transparent", [property], Object.getOwnPropertyDescriptor(_class2.prototype, "transparent"), _class2.prototype)), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=unlit-quad.js.map