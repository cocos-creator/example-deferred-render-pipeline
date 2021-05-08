System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _decorator, Component, Color, Node, utils, primitives, ModelComponent, Material, math, _dec, _class, _crd, ccclass, Geometries;

  function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; _setPrototypeOf(subClass, superClass); }

  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      Color = _cc.Color;
      Node = _cc.Node;
      utils = _cc.utils;
      primitives = _cc.primitives;
      ModelComponent = _cc.ModelComponent;
      Material = _cc.Material;
      math = _cc.math;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "6bb243zHfFJi4MLeBdak3WZ", "geometries", undefined);

      ccclass = _decorator.ccclass;

      _export("Geometries", Geometries = (_dec = ccclass('Geometries'), _dec(_class = /*#__PURE__*/function (_Component) {
        _inheritsLoose(Geometries, _Component);

        function Geometries() {
          return _Component.apply(this, arguments) || this;
        }

        var _proto = Geometries.prototype;

        _proto.start = function start() {
          this.node.removeAllChildren();
          var models = [];
          var rows = 7;
          var cols = 7;
          var stride = 2.5;
          var albedo = new Color(128, 0, 0);
          var meshSphere = utils.createMesh(primitives.sphere(1, {
            segments: 64
          }));

          for (var i = 0; i < rows; i++) {
            for (var j = 0; j < cols; j++) {
              var node = new Node();
              node.parent = this.node;
              node.setPosition((j - Math.floor(cols / 2)) * stride, (i - Math.floor(rows / 2)) * stride, 0);
              var comp = node.addComponent(ModelComponent);
              comp.mesh = meshSphere;
              var m = new Material();
              m.initialize({
                effectName: 'builtin-standard'
              });
              m.setProperty('roughness', math.clamp(j / cols, 0.05, 1));
              m.setProperty('metallic', i / rows);
              m.setProperty('albedo', albedo);
              comp.material = m;
              models.push(comp);
            }
          }
        };

        return Geometries;
      }(Component)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=geometries.js.map