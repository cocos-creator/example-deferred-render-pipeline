System.register(["cce:/internal/code-quality/cr.mjs", "cc", "./scenelist"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, Component, director, game, ScrollViewComponent, Vec3, LayoutComponent, Canvas, Layers, sceneArray, _dec, _class, _class2, _temp, _crd, ccclass, property, BackButton;

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; _setPrototypeOf(subClass, superClass); }

  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _reportPossibleCrUseOfsceneArray(extras) {
    _reporterNs.report("sceneArray", "./scenelist", _context.meta, extras);
  }

  return {
    setters: [function (_cceInternalCodeQualityCrMjs) {
      _reporterNs = _cceInternalCodeQualityCrMjs;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      director = _cc.director;
      game = _cc.game;
      ScrollViewComponent = _cc.ScrollViewComponent;
      Vec3 = _cc.Vec3;
      LayoutComponent = _cc.LayoutComponent;
      Canvas = _cc.Canvas;
      Layers = _cc.Layers;
    }, function (_scenelist) {
      sceneArray = _scenelist.sceneArray;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "b20edYWY5pMo6v9nvpXwDsb", "backbutton", undefined);

      ccclass = _decorator.ccclass;
      property = _decorator.property;

      _export("BackButton", BackButton = (_dec = ccclass('BackButton'), _dec(_class = (_temp = _class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(BackButton, _Component);

        function BackButton() {
          return _Component.apply(this, arguments) || this;
        }

        BackButton.saveOffset = function saveOffset() {
          if (BackButton._scrollNode) {
            BackButton._offset = new Vec3(0, BackButton._scrollCom.getScrollOffset().y, 0);
          }
        };

        BackButton.saveIndex = function saveIndex(index) {
          BackButton._sceneIndex = index;
          BackButton.refreshButton();
        };

        BackButton.refreshButton = function refreshButton() {
          if (BackButton._sceneIndex === -1) {
            BackButton._prevNode.active = false;
            BackButton._nextNode.active = false;
          } else {
            BackButton._prevNode.active = true;
            BackButton._nextNode.active = true;
          }
        };

        var _proto = BackButton.prototype;

        _proto.__preload = function __preload() {
          var sceneInfo = game._sceneInfos;
          var firstIndex = 0;
          var lastIndex = 0;
          var sceneString = '';

          for (var i = 0; i < sceneInfo.length; i++) {
            sceneString = sceneInfo[i].url;
            firstIndex = sceneString.lastIndexOf('/') + 1;
            lastIndex = sceneString.lastIndexOf('.scene');
            sceneString = sceneString.substring(firstIndex, lastIndex);

            if (sceneString === 'testlist') {
              continue;
            }

            (_crd && sceneArray === void 0 ? (_reportPossibleCrUseOfsceneArray({
              error: Error()
            }), sceneArray) : sceneArray).push(sceneString);
          }
        };

        _proto.start = function start() {
          var camera = this.node.getComponent(Canvas).cameraComponent;
          if (camera.visibility & Layers.Enum.UI_2D) camera.visibility &= ~Layers.Enum.UI_2D;
          game.addPersistRootNode(this.node);
          BackButton._scrollNode = this.node.getParent().getChildByPath('Canvas/ScrollView');

          if (BackButton._scrollNode) {
            BackButton._scrollCom = BackButton._scrollNode.getComponent(ScrollViewComponent);
          }

          BackButton._blockInput = this.node.getChildByName('BlockInput');
          BackButton._blockInput.active = false;
          BackButton._prevNode = this.node.getChildByName('PrevButton');
          BackButton._nextNode = this.node.getChildByName('NextButton');

          if (BackButton._prevNode && BackButton._nextNode) {
            BackButton.refreshButton();
          }
        };

        _proto.backToList = function backToList() {
          var _this = this;

          BackButton._blockInput.active = true;
          director.loadScene('testlist', function () {
            BackButton._sceneIndex = -1;
            BackButton.refreshButton();
            BackButton._scrollNode = _this.node.getParent().getChildByPath('Canvas/ScrollView');

            if (BackButton._scrollNode) {
              BackButton._scrollCom = BackButton._scrollNode.getComponent(ScrollViewComponent); // @ts-ignore

              BackButton._scrollCom._content.getComponent(LayoutComponent).updateLayout();

              BackButton._scrollCom.scrollToOffset(BackButton.offset, 0.1, true);
            }

            BackButton._blockInput.active = false;
          });
        };

        _proto.nextscene = function nextscene() {
          BackButton._blockInput.active = true;
          this.updateSceneIndex(true);
          director.loadScene(this.getSceneName(), function () {
            BackButton._blockInput.active = false;
          });
        };

        _proto.prescene = function prescene() {
          BackButton._blockInput.active = true;
          this.updateSceneIndex(false);
          director.loadScene(this.getSceneName(), function () {
            BackButton._blockInput.active = false;
          });
        };

        _proto.updateSceneIndex = function updateSceneIndex(next) {
          if (next) {
            BackButton._sceneIndex + 1 >= (_crd && sceneArray === void 0 ? (_reportPossibleCrUseOfsceneArray({
              error: Error()
            }), sceneArray) : sceneArray).length ? BackButton._sceneIndex = 0 : BackButton._sceneIndex += 1;
          } else {
            BackButton._sceneIndex - 1 < 0 ? BackButton._sceneIndex = (_crd && sceneArray === void 0 ? (_reportPossibleCrUseOfsceneArray({
              error: Error()
            }), sceneArray) : sceneArray).length - 1 : BackButton._sceneIndex -= 1;
          }
        };

        _proto.getSceneName = function getSceneName() {
          return (_crd && sceneArray === void 0 ? (_reportPossibleCrUseOfsceneArray({
            error: Error()
          }), sceneArray) : sceneArray)[BackButton._sceneIndex];
        };

        _createClass(BackButton, null, [{
          key: "offset",
          get: function get() {
            return BackButton._offset;
          },
          set: function set(value) {
            BackButton._offset = value;
          }
        }]);

        return BackButton;
      }(Component), _defineProperty(_class2, "_scrollNode", null), _defineProperty(_class2, "_offset", new Vec3()), _defineProperty(_class2, "_scrollCom", null), _defineProperty(_class2, "_sceneIndex", -1), _defineProperty(_class2, "_blockInput", void 0), _defineProperty(_class2, "_prevNode", void 0), _defineProperty(_class2, "_nextNode", void 0), _temp)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=backbutton.js.map