System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _decorator, Component, _dec, _class, _crd, ccclass, property, SelfDestory;

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

      _cclegacy._RF.push({}, "d1bc3dAYZ9DrYgEUAHLfjj3", "self-destory", undefined);

      ccclass = _decorator.ccclass;
      property = _decorator.property;

      _export("SelfDestory", SelfDestory = (_dec = ccclass('SelfDestory'), _dec(_class = /*#__PURE__*/function (_Component) {
        _inheritsLoose(SelfDestory, _Component);

        function SelfDestory() {
          return _Component.apply(this, arguments) || this;
        }

        var _proto = SelfDestory.prototype;

        /* class member could be defined like this */
        // dummy = '';

        /* use `property` decorator if your want the member to be serializable */
        // @property
        // serializableDummy = 0;
        _proto.start = function start() {
          var _this = this;

          setTimeout(function () {
            if (_this.node && _this.node.destroy()) {
              console.log('destroy complete');
            }
          }, 5000);
        } // update (deltaTime: number) {
        //     // Your update function goes here.
        // }
        ;

        return SelfDestory;
      }(Component)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=self-destory.js.map