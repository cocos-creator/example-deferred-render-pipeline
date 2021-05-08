System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _decorator, Component, _dec, _class, _crd, ccclass, Toggler;

  function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; _setPrototypeOf(subClass, superClass); }

  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Component = _cc.Component;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "32abfv2Y8dPZK9pOrJO0y5M", "toggler", undefined);

      ccclass = _decorator.ccclass;

      _export("Toggler", Toggler = (_dec = ccclass('Toggler'), _dec(_class = /*#__PURE__*/function (_Component) {
        _inheritsLoose(Toggler, _Component);

        function Toggler() {
          return _Component.apply(this, arguments) || this;
        }

        var _proto = Toggler.prototype;

        _proto.toggleActive = function toggleActive() {
          this.node.active = !this.node.active;
        };

        return Toggler;
      }(Component)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=toggler.js.map