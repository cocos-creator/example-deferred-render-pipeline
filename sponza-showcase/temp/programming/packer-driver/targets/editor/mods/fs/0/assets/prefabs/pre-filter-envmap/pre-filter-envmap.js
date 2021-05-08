System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _decorator, CameraComponent, Component, director, EffectAsset, gfx, Material, ModelComponent, Node, primitives, Quat, TextureCube, utils, _dec, _dec2, _class, _class2, _descriptor, _descriptor2, _temp, _crd, ccclass, property, rotations, readRegions, writeRegions, enableDebug, PreFilterEnvmap;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  // 6 faces
  function getMipLevel(size) {
    let level = 0;

    while (size) {
      size >>= 1;
      level++;
    }

    return level;
  }

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      CameraComponent = _cc.CameraComponent;
      Component = _cc.Component;
      director = _cc.director;
      EffectAsset = _cc.EffectAsset;
      gfx = _cc.gfx;
      Material = _cc.Material;
      ModelComponent = _cc.ModelComponent;
      Node = _cc.Node;
      primitives = _cc.primitives;
      Quat = _cc.Quat;
      TextureCube = _cc.TextureCube;
      utils = _cc.utils;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "41074J7W0lCe40VLTiO+Uxi", "pre-filter-envmap", undefined);

      ({
        ccclass,
        property
      } = _decorator);
      rotations = [Quat.fromEuler(new Quat(), 0, 90, 0), // +X
      Quat.fromEuler(new Quat(), 0, -90, 0), // -X
      Quat.fromEuler(new Quat(), 90, 180, 0), // +Y
      Quat.fromEuler(new Quat(), -90, 180, 0), // -Y
      Quat.fromEuler(new Quat(), 0, 180, 0), // +Z
      Quat.fromEuler(new Quat(), 0, 0, 0) // -Z
      ];
      readRegions = [new gfx.BufferTextureCopy()];
      readRegions[0].texExtent.depth = 1;
      writeRegions = [new gfx.BufferTextureCopy()];
      writeRegions[0].texExtent.depth = 1;
      writeRegions[0].texSubres.layerCount = 6;
      enableDebug = false;

      _export("PreFilterEnvmap", PreFilterEnvmap = (_dec = ccclass('PreFilterEnvmap'), _dec2 = property(EffectAsset), _dec(_class = (_class2 = (_temp = class PreFilterEnvmap extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "effect", _descriptor, this);

          _initializerDefineProperty(this, "blurriness", _descriptor2, this);

          _defineProperty(this, "_camera", null);

          _defineProperty(this, "_material", null);

          _defineProperty(this, "_renderTarget", null);
        }

        onLoad() {
          this._camera = this.node.getComponentInChildren(CameraComponent);
          this._renderTarget = this._camera.targetTexture;
          this._material = new Material();

          this._material.initialize({
            effectAsset: this.effect,
            states: {
              rasterizerState: {
                cullMode: gfx.CullMode.FRONT
              },
              depthStencilState: {
                depthTest: false,
                depthWrite: false
              }
            }
          });

          const modelComp = this.node.addComponent(ModelComponent);
          modelComp.mesh = utils.createMesh(primitives.box({
            width: 2,
            height: 2,
            length: 2
          }));
          modelComp.material = this._material;

          if (enableDebug) {
            const testNode = new Node();
            const testMat = new Material();
            testMat.initialize({
              effectName: 'builtin-standard',
              defines: {
                USE_ALBEDO_MAP: true
              }
            });
            testMat.setProperty('albedoMap', this._renderTarget.getGFXTexture());
            const testModelComp = testNode.addComponent(ModelComponent);
            testModelComp.mesh = utils.createMesh(primitives.quad());
            testModelComp.material = testMat;
            testNode.parent = this.node.scene;
          }
        }

        start() {
          if (!enableDebug) {
            const skybox = director.root.pipeline.pipelineSceneData.skybox;
            skybox.envmap = this.filter(skybox.envmap); // skybox.isRGBE = false;
          }
        } // WebGL doesn't support using custom mipmap level in framebuffer attachments,
        // so we'll have to do this the hard way (read back and upload again)


        filter(envmap) {
          this.node.active = true;
          envmap.setMipFilter(TextureCube.Filter.LINEAR);
          let size = envmap.width; // has to be square

          const camera = this._camera.camera;
          const readRegion = readRegions[0];
          const writeRegion = writeRegions[0];
          const mipLevel = getMipLevel(size);
          const newEnvMap = new TextureCube();
          const pass = this._material.passes[0];
          const handle = pass.getHandle('roughness');
          this.node.setScale(1, director.root.device.capabilities.UVSpaceSignY, 1); // GL-specific: flip both model and camera so front face stays the same

          camera.scene.update(0); // should update scene after flipping

          newEnvMap.reset({
            width: size,
            height: size,
            mipmapLevel: mipLevel
          });

          for (let m = 0; m < mipLevel; m++) {
            // need to resize both window and camera
            camera.window.resize(size, size);
            camera.resize(size, size);
            readRegion.texExtent.width = readRegion.texExtent.height = size;
            writeRegion.texExtent.width = writeRegion.texExtent.height = size;
            writeRegion.texSubres.mipLevel = m;
            pass.setUniform(handle, this.blurriness + m / (mipLevel - 1) * (1 - this.blurriness));
            pass.update();
            const length = size * size * 4;
            const buffers = [];

            for (let i = 0; i < 6; i++) {
              buffers[i] = new Uint8Array(length);

              this._camera.node.setRotation(rotations[i]);

              this._camera.camera.update();

              director.root.pipeline.render([camera]);
              director.root.device.copyFramebufferToBuffer(camera.window.framebuffer, buffers[i].buffer, readRegions);
            }

            director.root.device.copyBuffersToTexture(buffers, newEnvMap.getGFXTexture(), writeRegions);
            size >>= 1;
          }

          this.node.active = false;
          newEnvMap.setMipFilter(TextureCube.Filter.LINEAR);
          return newEnvMap;
        }

      }, _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "effect", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "blurriness", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return 0;
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=pre-filter-envmap.js.map