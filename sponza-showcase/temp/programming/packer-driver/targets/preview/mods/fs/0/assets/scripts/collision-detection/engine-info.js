System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _decorator, Component, LabelComponent, _dec, _class, _crd, ccclass, EngineInfo;

  function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; _setPrototypeOf(subClass, superClass); }

  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      LabelComponent = _cc.LabelComponent;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "080d5NntnNJyrm5bWmi6fAY", "engine-info", undefined);

      ccclass = _decorator.ccclass;

      _export("EngineInfo", EngineInfo = (_dec = ccclass('EngineInfo'), _dec(_class = /*#__PURE__*/function (_Component) {
        _inheritsLoose(EngineInfo, _Component);

        function EngineInfo() {
          return _Component.apply(this, arguments) || this;
        }

        var _proto = EngineInfo.prototype;

        _proto.start = function start() {
          var engine = 'Unknown Physics Engine';

          if (window.CC_PHYSICS_BUILTIN) {
            engine = 'Built-in Collision Detection Engine';
          } else if (window.CC_PHYSICS_CANNON) {
            engine = 'Cannon.js Physics Engine';
          } else if (window.CC_PHYSICS_AMMO) {
            engine = 'Ammo.js Physics Engine';
          }

          this.node.getChildByName('EngineInfo').getComponent(LabelComponent).string = engine + "\nYou can change this in the project settings menu";
        };

        return EngineInfo;
      }(Component)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=engine-info.js.map