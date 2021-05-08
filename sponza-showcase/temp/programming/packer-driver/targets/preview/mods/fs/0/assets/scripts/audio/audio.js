System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _decorator, AudioSourceComponent, Component, Director, director, Node, _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2, _temp, _crd, ccclass, property, Audio;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

  function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; _setPrototypeOf(subClass, superClass); }

  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

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

      ccclass = _decorator.ccclass;
      property = _decorator.property;

      _export("Audio", Audio = (_dec = ccclass('audio'), _dec2 = property(Node), _dec3 = property(Node), _dec(_class = (_class2 = (_temp = /*#__PURE__*/function (_Component) {
        _inheritsLoose(Audio, _Component);

        function Audio() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _Component.call.apply(_Component, [this].concat(args)) || this;

          _initializerDefineProperty(_assertThisInitialized(_this), "node1", _descriptor, _assertThisInitialized(_this));

          _initializerDefineProperty(_assertThisInitialized(_this), "node2", _descriptor2, _assertThisInitialized(_this));

          return _this;
        }

        var _proto = Audio.prototype;

        _proto.onLoad = function onLoad() {
          var source = this.node1.getComponent(AudioSourceComponent);
          var source2 = this.node2.getComponent(AudioSourceComponent);
          var t1 = 17;
          var off2 = 5;
          var t2 = 15;
          /* discrete callbacks *
          source.clip.once('started', () => {
              setTimeout(function(){ source.volume = 0.55; }, t1 * 500);
              setTimeout(function(){ source.volume = 0.1; }, t1 * 1000);
                setTimeout(function(){ source2.play(); }, off2 * 1000);
              setTimeout(function(){ source2.volume = 0.75; }, (off2 + t2 * 0.5) * 1000);
              setTimeout(function(){ source2.volume = 1; }, (off2 + t2) * 1000);
          });
          /* smooth transition */

          var startTime1;
          var startTime2;

          var sineLerp = function sineLerp(b, e, t) {
            return b + (e - b) * (Math.sin((t - 0.5) * Math.PI) + 1) * 0.5;
          };

          var animation1 = function animation1() {
            source.volume = sineLerp(1, 0.1, (performance.now() - startTime1) / (t1 * 1000));
          };

          var animation2 = function animation2() {
            source2.volume = sineLerp(0.5, 1, (performance.now() - startTime2) / (t2 * 1000));
          };

          source.clip.once('started', function () {
            // animate audio 1
            var s2 = source2;
            startTime1 = performance.now();
            director.on(Director.EVENT_BEFORE_UPDATE, animation1);
            setTimeout(function () {
              director.off(Director.EVENT_BEFORE_UPDATE, animation1);
            }, t1 * 1000); // animate audio 2

            setTimeout(function () {
              s2.play();
              startTime2 = performance.now();
              director.on(Director.EVENT_BEFORE_UPDATE, animation2);
            }, off2 * 1000);
            setTimeout(function () {
              director.off(Director.EVENT_BEFORE_UPDATE, animation2);
            }, (off2 + t2) * 1000);
          });
          /**/
        };

        _proto.onDisable = function onDisable() {
          this.node1.getComponent(AudioSourceComponent).stop();
          this.node2.getComponent(AudioSourceComponent).stop();
        };

        return Audio;
      }(Component), _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "node1", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "node2", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=audio.js.map