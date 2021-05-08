System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _decorator, Component, Enum, LabelComponent, SpriteComponent, _dec, _dec2, _class, _temp, _crd, ccclass, property, menu, EPhysicsItem, PhysicsEnvCheck;

  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

  function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; _setPrototypeOf(subClass, superClass); }

  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

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

      ccclass = _decorator.ccclass;
      property = _decorator.property;
      menu = _decorator.menu;

      (function (EPhysicsItem) {
        EPhysicsItem[EPhysicsItem["BUILTIN"] = 1] = "BUILTIN";
        EPhysicsItem[EPhysicsItem["CANNON"] = 2] = "CANNON";
        EPhysicsItem[EPhysicsItem["AMMO"] = 4] = "AMMO";
        EPhysicsItem[EPhysicsItem["CANNON_AMMO"] = EPhysicsItem.CANNON + EPhysicsItem.AMMO] = "CANNON_AMMO";
        EPhysicsItem[EPhysicsItem["ALL"] = -1] = "ALL";
      })(EPhysicsItem || (EPhysicsItem = {}));

      Enum(EPhysicsItem);

      _export("PhysicsEnvCheck", PhysicsEnvCheck = (_dec = ccclass('PhysicsEnvCheck'), _dec2 = menu('physics/PhysicsEnvCheck'), _dec(_class = _dec2(_class = (_temp = /*#__PURE__*/function (_Component) {
        _inheritsLoose(PhysicsEnvCheck, _Component);

        function PhysicsEnvCheck() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _Component.call.apply(_Component, [this].concat(args)) || this;

          _defineProperty(_assertThisInitialized(_this), "physics", EPhysicsItem.CANNON_AMMO);

          return _this;
        }

        var _proto = PhysicsEnvCheck.prototype;

        _proto.onLoad = function onLoad() {
          var lbCom;
          var sprCom;

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

          var name = this.node.name;

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
        };

        return PhysicsEnvCheck;
      }(Component), _temp)) || _class) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=PhysicsEnvCheck.js.map