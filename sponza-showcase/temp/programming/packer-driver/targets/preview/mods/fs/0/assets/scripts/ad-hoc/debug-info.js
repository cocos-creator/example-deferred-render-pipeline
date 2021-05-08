System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _decorator, Component, ModelComponent, director, GFXAPI, _dec, _dec2, _class, _class2, _descriptor, _temp, _crd, ccclass, property, gl, DebugInfo;

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
      ModelComponent = _cc.ModelComponent;
      director = _cc.director;
      GFXAPI = _cc.GFXAPI;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "645d28UJBFHjpWnseLAQxX2", "debug-info", undefined);

      ccclass = _decorator.ccclass;
      property = _decorator.property;
      gl = null;

      _export("DebugInfo", DebugInfo = (_dec = ccclass('DebugInfo'), _dec2 = property([ModelComponent]), _dec(_class = (_class2 = (_temp = /*#__PURE__*/function (_Component) {
        _inheritsLoose(DebugInfo, _Component);

        function DebugInfo() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _Component.call.apply(_Component, [this].concat(args)) || this;

          _initializerDefineProperty(_assertThisInitialized(_this), "targets", _descriptor, _assertThisInitialized(_this));

          return _this;
        }

        var _proto = DebugInfo.prototype;

        _proto.printActiveUniforms = function printActiveUniforms() {
          if (director.root.device.gfxAPI === GFXAPI.WEBGL || director.root.device.gfxAPI === GFXAPI.WEBGL2) {
            this.targets.forEach(function (comp) {
              console.log(comp.node.name, '---------------------------------------'); // @ts-ignore

              var psoCI = comp._model._subModels[0]._psoCreateInfos[0];
              gl = director.root.device.gl;
              var shader = psoCI.shader.gpuShader;
              shader.glBlocks.reduce(function (acc, cur) {
                return acc.concat(cur.glActiveUniforms);
              }, []).forEach(function (u) {
                var data = gl.getUniform(shader.glProgram, gl.getUniformLocation(shader.glProgram, u.name));
                console.log(u.name, Array.from(data).reduce(function (acc, cur) {
                  return acc + " " + cur.toFixed(2);
                }, ''));
              });
            });
          }

          console.log('scene', director.root.scenes);
          console.log('window', director.root.windows);
          console.log('view', director.root.views);
        };

        _proto.printJointsTexture = function printJointsTexture() {
          // @ts-ignore
          var info = director.root.dataPoolManager.jointTexturePool._pool._chunks[0].texture;
          var texture = info._gpuTexture.glTexture;
          var pixels = new Float32Array(info.width * info.height * 4);
          var fb = gl.createFramebuffer();
          gl.bindFramebuffer(gl.FRAMEBUFFER, fb);
          gl.framebufferTexture2D(gl.FRAMEBUFFER, gl.COLOR_ATTACHMENT0, gl.TEXTURE_2D, texture, 0);
          gl.readPixels(0, 0, info.width, info.height, gl.RGBA, gl.FLOAT, pixels);
          gl.bindFramebuffer(gl.FRAMEBUFFER, null);
          var str = '';

          for (var i = 0; i < pixels.length; i++) {
            str += pixels[i] + ' ';

            if ((i + 1) % 12 === 0) {
              str += '\n';
            }
          }

          console.log(str);
        };

        return DebugInfo;
      }(Component), _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "targets", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=debug-info.js.map