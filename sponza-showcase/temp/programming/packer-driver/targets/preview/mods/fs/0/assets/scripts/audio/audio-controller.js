System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _decorator, AudioSourceComponent, Component, LabelComponent, SliderComponent, ToggleComponent, _dec, _dec2, _class, _class2, _descriptor, _temp, _crd, ccclass, property, AudioController;

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
      LabelComponent = _cc.LabelComponent;
      SliderComponent = _cc.SliderComponent;
      ToggleComponent = _cc.ToggleComponent;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "f0467l4fZlMk6vmKrPCPkaW", "audio-controller", undefined);

      ccclass = _decorator.ccclass;
      property = _decorator.property;

      _export("AudioController", AudioController = (_dec = ccclass('AudioController'), _dec2 = property(AudioSourceComponent), _dec(_class = (_class2 = (_temp = /*#__PURE__*/function (_Component) {
        _inheritsLoose(AudioController, _Component);

        function AudioController() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _Component.call.apply(_Component, [this].concat(args)) || this;

          _initializerDefineProperty(_assertThisInitialized(_this), "source", _descriptor, _assertThisInitialized(_this));

          _defineProperty(_assertThisInitialized(_this), "volume", null);

          _defineProperty(_assertThisInitialized(_this), "currentTime", null);

          _defineProperty(_assertThisInitialized(_this), "volumeLabel", null);

          _defineProperty(_assertThisInitialized(_this), "currentTimeLabel", null);

          _defineProperty(_assertThisInitialized(_this), "loop", null);

          _defineProperty(_assertThisInitialized(_this), "playOnAwake", null);

          _defineProperty(_assertThisInitialized(_this), "playing", null);

          return _this;
        }

        var _proto = AudioController.prototype;

        _proto.start = function start() {
          this.volume = this.node.getChildByName('volume').getComponent(SliderComponent);
          this.currentTime = this.node.getChildByName('currentTime').getComponent(SliderComponent);
          this.volumeLabel = this.volume.node.getChildByName('Numbers').getComponent(LabelComponent);
          this.currentTimeLabel = this.currentTime.node.getChildByName('Numbers').getComponent(LabelComponent);
          this.loop = this.node.getChildByName('loop').getComponent(ToggleComponent);
          this.playOnAwake = this.node.getChildByName('playOnAwake').getComponent(ToggleComponent);
          this.playing = this.node.getChildByName('playing').getComponent(ToggleComponent);
          this.node.getChildByName('name').getComponent(LabelComponent).string = this.source.node.name;
          var loadMode = 'Unknown Load Mode';

          switch (this.source.clip.loadMode) {
            case cc.AudioClip.AudioType.WEB_AUDIO:
              loadMode = 'Web Audio API Mode';
              break;

            case cc.AudioClip.AudioType.DOM_AUDIO:
              loadMode = 'DOM Audio Mode';
              break;

            case cc.AudioClip.AudioType.JSB_AUDIO:
              loadMode = 'JSB Audio Mode';
              break;
          }

          this.node.getChildByName('loadMode').getComponent(LabelComponent).string = loadMode;
        };

        _proto.update = function update() {
          this.volume.progress = this.source.volume;
          this.currentTime.progress = this.source.currentTime / this.source.duration;
          this.volumeLabel.string = this.source.volume.toFixed(2) + " / 1";
          this.currentTimeLabel.string = this.source.currentTime.toFixed(1) + " / " + this.source.duration.toFixed(1);
          this.loop.isChecked = this.source.loop;
          this.playOnAwake.isChecked = this.source.playOnAwake;
          this.playing.isChecked = this.source.playing;
        };

        _proto.play = function play() {
          this.source.play();
        };

        _proto.pause = function pause() {
          this.source.pause();
        };

        _proto.stop = function stop() {
          this.source.stop();
        } // slider callback
        ;

        _proto.setVolume = function setVolume(e) {
          this.source.volume = e.progress;
        } // slider callback
        ;

        _proto.setCurrentTime = function setCurrentTime(e) {
          this.source.currentTime = e.progress * this.source.duration;
        } // toggle callback
        ;

        _proto.setLoop = function setLoop(e) {
          this.source.loop = e.isChecked;
        } // toggle callback
        ;

        _proto.setPlayOnAwake = function setPlayOnAwake(e) {
          this.source.playOnAwake = e.isChecked;
        };

        return AudioController;
      }(Component), _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "source", [_dec2], {
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
//# sourceMappingURL=audio-controller.js.map