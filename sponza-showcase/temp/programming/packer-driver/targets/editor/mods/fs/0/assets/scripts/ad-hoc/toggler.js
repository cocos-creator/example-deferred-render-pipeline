System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _decorator, Component, _dec, _class, _crd, ccclass, Toggler;

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Component = _cc.Component;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "32abfv2Y8dPZK9pOrJO0y5M", "toggler", undefined);

      ({
        ccclass
      } = _decorator);

      _export("Toggler", Toggler = (_dec = ccclass('Toggler'), _dec(_class = class Toggler extends Component {
        toggleActive() {
          this.node.active = !this.node.active;
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=toggler.js.map