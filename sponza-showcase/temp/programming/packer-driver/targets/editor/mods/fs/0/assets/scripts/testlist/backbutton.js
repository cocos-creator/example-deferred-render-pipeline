System.register(["cce:/internal/code-quality/cr.mjs", "cc", "./scenelist"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, Component, director, game, ScrollViewComponent, Vec3, LayoutComponent, Canvas, Layers, sceneArray, _dec, _class, _class2, _temp, _crd, ccclass, property, BackButton;

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

      ({
        ccclass,
        property
      } = _decorator);

      _export("BackButton", BackButton = (_dec = ccclass('BackButton'), _dec(_class = (_temp = _class2 = class BackButton extends Component {
        static get offset() {
          return BackButton._offset;
        }

        static set offset(value) {
          BackButton._offset = value;
        }

        static saveOffset() {
          if (BackButton._scrollNode) {
            BackButton._offset = new Vec3(0, BackButton._scrollCom.getScrollOffset().y, 0);
          }
        }

        static saveIndex(index) {
          BackButton._sceneIndex = index;
          BackButton.refreshButton();
        }

        static refreshButton() {
          if (BackButton._sceneIndex === -1) {
            BackButton._prevNode.active = false;
            BackButton._nextNode.active = false;
          } else {
            BackButton._prevNode.active = true;
            BackButton._nextNode.active = true;
          }
        }

        __preload() {
          const sceneInfo = game._sceneInfos;
          let firstIndex = 0;
          let lastIndex = 0;
          let sceneString = '';

          for (let i = 0; i < sceneInfo.length; i++) {
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
        }

        start() {
          let camera = this.node.getComponent(Canvas).cameraComponent;
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
        }

        backToList() {
          BackButton._blockInput.active = true;
          director.loadScene('testlist', () => {
            BackButton._sceneIndex = -1;
            BackButton.refreshButton();
            BackButton._scrollNode = this.node.getParent().getChildByPath('Canvas/ScrollView');

            if (BackButton._scrollNode) {
              BackButton._scrollCom = BackButton._scrollNode.getComponent(ScrollViewComponent); // @ts-ignore

              BackButton._scrollCom._content.getComponent(LayoutComponent).updateLayout();

              BackButton._scrollCom.scrollToOffset(BackButton.offset, 0.1, true);
            }

            BackButton._blockInput.active = false;
          });
        }

        nextscene() {
          BackButton._blockInput.active = true;
          this.updateSceneIndex(true);
          director.loadScene(this.getSceneName(), () => {
            BackButton._blockInput.active = false;
          });
        }

        prescene() {
          BackButton._blockInput.active = true;
          this.updateSceneIndex(false);
          director.loadScene(this.getSceneName(), () => {
            BackButton._blockInput.active = false;
          });
        }

        updateSceneIndex(next) {
          if (next) {
            BackButton._sceneIndex + 1 >= (_crd && sceneArray === void 0 ? (_reportPossibleCrUseOfsceneArray({
              error: Error()
            }), sceneArray) : sceneArray).length ? BackButton._sceneIndex = 0 : BackButton._sceneIndex += 1;
          } else {
            BackButton._sceneIndex - 1 < 0 ? BackButton._sceneIndex = (_crd && sceneArray === void 0 ? (_reportPossibleCrUseOfsceneArray({
              error: Error()
            }), sceneArray) : sceneArray).length - 1 : BackButton._sceneIndex -= 1;
          }
        }

        getSceneName() {
          return (_crd && sceneArray === void 0 ? (_reportPossibleCrUseOfsceneArray({
            error: Error()
          }), sceneArray) : sceneArray)[BackButton._sceneIndex];
        }

      }, _defineProperty(_class2, "_scrollNode", null), _defineProperty(_class2, "_offset", new Vec3()), _defineProperty(_class2, "_scrollCom", null), _defineProperty(_class2, "_sceneIndex", -1), _defineProperty(_class2, "_blockInput", void 0), _defineProperty(_class2, "_prevNode", void 0), _defineProperty(_class2, "_nextNode", void 0), _temp)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=backbutton.js.map