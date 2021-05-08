System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _decorator, Color, Component, Material, ModelComponent, utils, Vec3, GFXPrimitiveMode, GFXAttributeName, _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2, _temp, _crd, ccclass, property, executeInEditMode, requireComponent, v3_1, v3_2, TangentVisualizer;

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
      Color = _cc.Color;
      Component = _cc.Component;
      Material = _cc.Material;
      ModelComponent = _cc.ModelComponent;
      utils = _cc.utils;
      Vec3 = _cc.Vec3;
      GFXPrimitiveMode = _cc.GFXPrimitiveMode;
      GFXAttributeName = _cc.GFXAttributeName;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "e318flB6JhFT5zHRmxMuBHD", "tangent-visualizer", undefined);

      ccclass = _decorator.ccclass;
      property = _decorator.property;
      executeInEditMode = _decorator.executeInEditMode;
      requireComponent = _decorator.requireComponent;
      v3_1 = new Vec3();
      v3_2 = new Vec3();

      _export("TangentVisualizer", TangentVisualizer = (_dec = ccclass('TangentVisualizer'), _dec2 = requireComponent(ModelComponent), _dec3 = property(ModelComponent), _dec(_class = _dec2(_class = executeInEditMode(_class = (_class2 = (_temp = /*#__PURE__*/function (_Component) {
        _inheritsLoose(TangentVisualizer, _Component);

        function TangentVisualizer() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _Component.call.apply(_Component, [this].concat(args)) || this;

          _initializerDefineProperty(_assertThisInitialized(_this), "target", _descriptor, _assertThisInitialized(_this));

          _initializerDefineProperty(_assertThisInitialized(_this), "scale", _descriptor2, _assertThisInitialized(_this));

          _defineProperty(_assertThisInitialized(_this), "_material", new Material());

          return _this;
        }

        var _proto = TangentVisualizer.prototype;

        _proto.start = function start() {
          this._material.initialize({
            effectName: 'builtin-unlit',
            defines: {
              USE_VERTEX_COLOR: true
            },
            states: {
              primitive: GFXPrimitiveMode.LINE_LIST
            }
          });

          this.refresh();
        };

        _proto.refresh = function refresh() {
          if (!this.target) {
            return;
          }

          var comps = this.node.getComponents(ModelComponent);

          if (comps.length < 3) {
            console.warn('three model component on this node is needed');
            return;
          }

          var position = this.target.mesh.readAttribute(0, GFXAttributeName.ATTR_POSITION);
          var normal = this.target.mesh.readAttribute(0, GFXAttributeName.ATTR_NORMAL);
          var tangent = this.target.mesh.readAttribute(0, GFXAttributeName.ATTR_TANGENT);

          var bitangent = this._generateBitangent(normal, tangent);

          this._updateModel(comps[0], position, normal, Color.MAGENTA);

          this._updateModel(comps[1], position, tangent, Color.CYAN, 4);

          this._updateModel(comps[2], position, bitangent, Color.YELLOW);
        };

        _proto._updateModel = function _updateModel(comp, pos, data, color, stride) {
          var _this2 = this;

          if (stride === void 0) {
            stride = 3;
          }

          comp.material = this._material;
          comp.mesh = utils.createMesh({
            positions: Array(pos.length / 3 * 2).fill(0).map(function (_, i) {
              var ofs = Math.floor(i / 2);
              Vec3.fromArray(v3_1, pos, ofs * 3);

              if (i % 2) {
                Vec3.scaleAndAdd(v3_1, v3_1, Vec3.fromArray(v3_2, data, ofs * stride), _this2.scale);
              }

              return Vec3.toArray([], v3_1);
            }).reduce(function (acc, cur) {
              return cur.forEach(function (c) {
                return acc.push(c);
              }), acc;
            }, []),
            colors: Array(pos.length / 3 * 2).fill(0).map(function (_, i) {
              return Color.toArray([], i % 2 ? color : Color.WHITE);
            }).reduce(function (acc, cur) {
              return cur.forEach(function (c) {
                return acc.push(c);
              }), acc;
            }, []),
            primitiveMode: GFXPrimitiveMode.LINE_LIST,
            minPos: new Vec3(-Infinity, -Infinity, -Infinity),
            maxPos: new Vec3(Infinity, Infinity, Infinity)
          });
        };

        _proto._generateBitangent = function _generateBitangent(normal, tangent) {
          var bitangent = normal.slice();
          var vCount = normal.length / 3;

          for (var i = 0; i < vCount; i++) {
            Vec3.fromArray(v3_1, normal, i * 3);
            Vec3.fromArray(v3_2, tangent, i * 4);
            Vec3.multiplyScalar(v3_1, Vec3.cross(v3_1, v3_1, v3_2), tangent[i * 4 + 3]);
            Vec3.toArray(bitangent, v3_1, i * 3);
          }

          return bitangent;
        };

        _createClass(TangentVisualizer, [{
          key: "apply",
          get: function get() {
            return false;
          },
          set: function set(val) {
            this.refresh();
          }
        }]);

        return TangentVisualizer;
      }(Component), _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "target", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "scale", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0.1;
        }
      }), _applyDecoratedDescriptor(_class2.prototype, "apply", [property], Object.getOwnPropertyDescriptor(_class2.prototype, "apply"), _class2.prototype)), _class2)) || _class) || _class) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=tangent-visualizer.js.map