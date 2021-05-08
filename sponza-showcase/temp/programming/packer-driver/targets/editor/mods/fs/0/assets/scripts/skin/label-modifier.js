System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _decorator, Component, LabelComponent, _dec, _class, _class2, _descriptor, _temp, _crd, ccclass, property, LabelModifier;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      LabelComponent = _cc.LabelComponent;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "b083fbk5OpHE6avlzMP8i4O", "label-modifier", undefined);

      ({
        ccclass,
        property
      } = _decorator);

      _export("LabelModifier", LabelModifier = (_dec = ccclass('LabelModifier'), _dec(_class = (_class2 = (_temp = class LabelModifier extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "prefix", _descriptor, this);

          _defineProperty(this, "_label", null);
        }

        start() {
          this._label = this.node.getComponent(LabelComponent);
        }

        setStringBySliderValue(e) {
          if (this._label) {
            this._label.string = this.prefix + e.progress.toFixed(2);
          }
        }

      }, _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "prefix", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return '';
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=label-modifier.js.map