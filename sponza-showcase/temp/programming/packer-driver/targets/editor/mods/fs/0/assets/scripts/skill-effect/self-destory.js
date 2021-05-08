System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _decorator, Component, _dec, _class, _crd, ccclass, property, SelfDestory;

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Component = _cc.Component;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "d1bc3dAYZ9DrYgEUAHLfjj3", "self-destory", undefined);

      ({
        ccclass,
        property
      } = _decorator);

      _export("SelfDestory", SelfDestory = (_dec = ccclass('SelfDestory'), _dec(_class = class SelfDestory extends Component {
        /* class member could be defined like this */
        // dummy = '';

        /* use `property` decorator if your want the member to be serializable */
        // @property
        // serializableDummy = 0;
        start() {
          setTimeout(() => {
            if (this.node && this.node.destroy()) {
              console.log('destroy complete');
            }
          }, 5000);
        } // update (deltaTime: number) {
        //     // Your update function goes here.
        // }


      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=self-destory.js.map