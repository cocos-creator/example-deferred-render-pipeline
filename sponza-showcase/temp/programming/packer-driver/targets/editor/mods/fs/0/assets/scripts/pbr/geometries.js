System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _decorator, Component, Color, Node, utils, primitives, ModelComponent, Material, math, _dec, _class, _crd, ccclass, Geometries;

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

      ({
        ccclass
      } = _decorator);

      _export("Geometries", Geometries = (_dec = ccclass('Geometries'), _dec(_class = class Geometries extends Component {
        start() {
          this.node.removeAllChildren();
          const models = [];
          const rows = 7;
          const cols = 7;
          const stride = 2.5;
          const albedo = new Color(128, 0, 0);
          const meshSphere = utils.createMesh(primitives.sphere(1, {
            segments: 64
          }));

          for (let i = 0; i < rows; i++) {
            for (let j = 0; j < cols; j++) {
              const node = new Node();
              node.parent = this.node;
              node.setPosition((j - Math.floor(cols / 2)) * stride, (i - Math.floor(rows / 2)) * stride, 0);
              const comp = node.addComponent(ModelComponent);
              comp.mesh = meshSphere;
              const m = new Material();
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
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=geometries.js.map