System.register(["cce:/internal/code-quality/cr.mjs", "cc", "./backbutton", "./scenelist"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, ButtonComponent, Component, director, LabelComponent, BackButton, sceneArray, _dec, _class, _temp, _crd, ccclass, property, ListItem;

  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

  function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; _setPrototypeOf(subClass, superClass); }

  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _reportPossibleCrUseOfBackButton(extras) {
    _reporterNs.report("BackButton", "./backbutton", _context.meta, extras);
  }

  function _reportPossibleCrUseOfsceneArray(extras) {
    _reporterNs.report("sceneArray", "./scenelist", _context.meta, extras);
  }

  return {
    setters: [function (_cceInternalCodeQualityCrMjs) {
      _reporterNs = _cceInternalCodeQualityCrMjs;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      ButtonComponent = _cc.ButtonComponent;
      Component = _cc.Component;
      director = _cc.director;
      LabelComponent = _cc.LabelComponent;
    }, function (_backbutton) {
      BackButton = _backbutton.BackButton;
    }, function (_scenelist) {
      sceneArray = _scenelist.sceneArray;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "dfb240gUk5FzLJW2+GbHJRv", "listitem", undefined);

      ccclass = _decorator.ccclass;
      property = _decorator.property;

      _export("ListItem", ListItem = (_dec = ccclass('ListItem'), _dec(_class = (_temp = /*#__PURE__*/function (_Component) {
        _inheritsLoose(ListItem, _Component);

        function ListItem() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _Component.call.apply(_Component, [this].concat(args)) || this;

          _defineProperty(_assertThisInitialized(_this), "index", -1);

          _defineProperty(_assertThisInitialized(_this), "_name", '');

          _defineProperty(_assertThisInitialized(_this), "label", null);

          _defineProperty(_assertThisInitialized(_this), "button", null);

          return _this;
        }

        var _proto = ListItem.prototype;

        _proto.onload = function onload() {};

        _proto.start = function start() {
          // Your initialization goes here.
          this.index = this.node.getSiblingIndex();
          this._name = '';

          if (this.node) {
            this.label = this.node.getComponentInChildren(LabelComponent);
            this.button = this.node.getComponent(ButtonComponent);
          }

          this.updateItem(this.index, (_crd && sceneArray === void 0 ? (_reportPossibleCrUseOfsceneArray({
            error: Error()
          }), sceneArray) : sceneArray)[this.index]);
        };

        _proto.loadScene = function loadScene() {
          (_crd && BackButton === void 0 ? (_reportPossibleCrUseOfBackButton({
            error: Error()
          }), BackButton) : BackButton).saveOffset();
          (_crd && BackButton === void 0 ? (_reportPossibleCrUseOfBackButton({
            error: Error()
          }), BackButton) : BackButton).saveIndex(this.index);
          this.button.interactable = false;
          director.loadScene(this._name, (_crd && BackButton === void 0 ? (_reportPossibleCrUseOfBackButton({
            error: Error()
          }), BackButton) : BackButton).refreshButton);
        };

        _proto.updateItem = function updateItem(idx, name) {
          this.index = idx;
          this._name = name;
          this.label.string = name;
        };

        return ListItem;
      }(Component), _temp)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=listitem.js.map