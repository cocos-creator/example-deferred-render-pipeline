System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _decorator, Component, Enum, LabelComponent, SpriteComponent, _dec, _dec2, _class, _temp, _crd, ccclass, property, menu, EPhysicsItem, PhysicsEnvCheck;

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      Enum = _cc.Enum;
      LabelComponent = _cc.LabelComponent;
      SpriteComponent = _cc.SpriteComponent;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "ac794yPoAdBvZzv5/e8WT2m", "PhysicsEnvCheck", undefined);

      ({
        ccclass,
        property,
        menu
      } = _decorator);

      (function (EPhysicsItem) {
        EPhysicsItem[EPhysicsItem["BUILTIN"] = 1] = "BUILTIN";
        EPhysicsItem[EPhysicsItem["CANNON"] = 2] = "CANNON";
        EPhysicsItem[EPhysicsItem["AMMO"] = 4] = "AMMO";
        EPhysicsItem[EPhysicsItem["CANNON_AMMO"] = EPhysicsItem.CANNON + EPhysicsItem.AMMO] = "CANNON_AMMO";
        EPhysicsItem[EPhysicsItem["ALL"] = -1] = "ALL";
      })(EPhysicsItem || (EPhysicsItem = {}));

      Enum(EPhysicsItem);

      _export("PhysicsEnvCheck", PhysicsEnvCheck = (_dec = ccclass('PhysicsEnvCheck'), _dec2 = menu('physics/PhysicsEnvCheck'), _dec(_class = _dec2(_class = (_temp = class PhysicsEnvCheck extends Component {
        constructor(...args) {
          super(...args);

          _defineProperty(this, "physics", EPhysicsItem.CANNON_AMMO);
        }

        onLoad() {
          let lbCom;
          let sprCom;

          if (window.CC_PHYSICS_BUILTIN) {
            lbCom = this.node.getChildByName('desc').getComponent(LabelComponent);
            lbCom.string = '当前物理：builtin';
          } else if (window.CC_PHYSICS_CANNON) {
            lbCom = this.node.getChildByName('desc').getComponent(LabelComponent);
            lbCom.string = '当前物理：cannon.js';
          } else if (window.CC_PHYSICS_AMMO) {
            lbCom = this.node.getChildByName('desc').getComponent(LabelComponent);
            lbCom.string = '当前物理：ammo.js';
          } else {
            lbCom = this.node.getChildByName('desc').getComponent(LabelComponent);
            lbCom.string = '当前物理：none';
          }

          const name = this.node.name;

          if (name === 'cannon-ammo') {
            this.physics = EPhysicsItem.CANNON_AMMO;
          } else if (name === 'builtin') {
            this.physics = EPhysicsItem.BUILTIN;
          } else if (name === 'cannon') {
            this.physics = EPhysicsItem.CANNON;
          } else if (name === 'ammo') {
            this.physics = EPhysicsItem.AMMO;
          } else if (name === 'builtin-cannon-ammo') {
            this.physics = EPhysicsItem.ALL;
          }

          switch (this.physics) {
            case EPhysicsItem.ALL:
              break;

            case EPhysicsItem.CANNON_AMMO:
              if (window.CC_PHYSICS_CANNON || window.CC_PHYSICS_AMMO) {
                break;
              }

              lbCom = this.node.getChildByName('lb').getComponent(LabelComponent);
              lbCom.enabled = true;
              lbCom.string = '测试此场景需要将物理模块设置为 cannon.js 或 ammo.js';
              sprCom = this.getComponentInChildren(SpriteComponent);
              sprCom.enabled = true;
              break;

            case EPhysicsItem.CANNON:
              if (!window.CC_PHYSICS_CANNON) {
                lbCom = this.node.getChildByName('lb').getComponent(LabelComponent);
                lbCom.enabled = true;
                lbCom.string = '测试此场景需要将物理模块设置为 cannon.js';
                sprCom = this.getComponentInChildren(SpriteComponent);
                sprCom.enabled = true;
              }

              break;

            case EPhysicsItem.AMMO:
              if (!window.CC_PHYSICS_AMMO) {
                lbCom = this.node.getChildByName('lb').getComponent(LabelComponent);
                lbCom.enabled = true;
                lbCom.string = '测试此场景需要将物理模块设置为 ammo.js';
                sprCom = this.getComponentInChildren(SpriteComponent);
                sprCom.enabled = true;
              }

              break;

            case EPhysicsItem.BUILTIN:
              if (!window.CC_PHYSICS_BUILTIN) {
                lbCom = this.node.getChildByName('lb').getComponent(LabelComponent);
                lbCom.enabled = true;
                lbCom.string = '测试此场景需要将物理模块设置为 builtin';
                sprCom = this.getComponentInChildren(SpriteComponent);
                sprCom.enabled = true;
              }

              break;
          }
        }

      }, _temp)) || _class) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=PhysicsEnvCheck.js.map