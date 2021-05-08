System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _decorator, AudioSourceComponent, Component, Director, director, Node, _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2, _temp, _crd, ccclass, property, Audio;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      AudioSourceComponent = _cc.AudioSourceComponent;
      Component = _cc.Component;
      Director = _cc.Director;
      director = _cc.director;
      Node = _cc.Node;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "fe26e4Vsn5EyLu1/LeX+J90", "audio", undefined);

      ({
        ccclass,
        property
      } = _decorator);

      _export("Audio", Audio = (_dec = ccclass('audio'), _dec2 = property(Node), _dec3 = property(Node), _dec(_class = (_class2 = (_temp = class Audio extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "node1", _descriptor, this);

          _initializerDefineProperty(this, "node2", _descriptor2, this);
        }

        onLoad() {
          const source = this.node1.getComponent(AudioSourceComponent);
          const source2 = this.node2.getComponent(AudioSourceComponent);
          const t1 = 17;
          const off2 = 5;
          const t2 = 15;
          /* discrete callbacks *
          source.clip.once('started', () => {
              setTimeout(function(){ source.volume = 0.55; }, t1 * 500);
              setTimeout(function(){ source.volume = 0.1; }, t1 * 1000);
                setTimeout(function(){ source2.play(); }, off2 * 1000);
              setTimeout(function(){ source2.volume = 0.75; }, (off2 + t2 * 0.5) * 1000);
              setTimeout(function(){ source2.volume = 1; }, (off2 + t2) * 1000);
          });
          /* smooth transition */

          let startTime1;
          let startTime2;

          const sineLerp = (b, e, t) => {
            return b + (e - b) * (Math.sin((t - 0.5) * Math.PI) + 1) * 0.5;
          };

          const animation1 = () => {
            source.volume = sineLerp(1, 0.1, (performance.now() - startTime1) / (t1 * 1000));
          };

          const animation2 = () => {
            source2.volume = sineLerp(0.5, 1, (performance.now() - startTime2) / (t2 * 1000));
          };

          source.clip.once('started', () => {
            // animate audio 1
            const s2 = source2;
            startTime1 = performance.now();
            director.on(Director.EVENT_BEFORE_UPDATE, animation1);
            setTimeout(() => {
              director.off(Director.EVENT_BEFORE_UPDATE, animation1);
            }, t1 * 1000); // animate audio 2

            setTimeout(() => {
              s2.play();
              startTime2 = performance.now();
              director.on(Director.EVENT_BEFORE_UPDATE, animation2);
            }, off2 * 1000);
            setTimeout(() => {
              director.off(Director.EVENT_BEFORE_UPDATE, animation2);
            }, (off2 + t2) * 1000);
          });
          /**/
        }

        onDisable() {
          this.node1.getComponent(AudioSourceComponent).stop();
          this.node2.getComponent(AudioSourceComponent).stop();
        }

      }, _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "node1", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "node2", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=audio.js.map