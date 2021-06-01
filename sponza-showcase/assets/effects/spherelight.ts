import { randomRange } from 'cc';
import { _decorator, Component, Node, Vec3 } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('spherelight')
export class spherelight extends Component {

   private _initP = new Vec3(0.0, 0.0, 0.0);
   private _nowP = new Vec3(0.0, 0.0, 0.0);
   private _startP = 0.0;
   private _low = 2.0;
   private _height = 3.51;
   private _time = 0;
   private number2 = 0;
   private number3 = 1.0;
   private number4 = 1.0;
   private _num = 0;

   start () {
       // Your initialization goes here.
       this.node.getWorldPosition(this._initP);
   }

   update (deltaTime: number) {
       this._num ++;

       if (this._num % 50 === 0) {
        this.number2 = randomRange(0.1,0.9) / 50;
        this.number3 = this.number2 > 0.8 ? 1.0 : -1.0;
        this.number4 = this.number2 < 0.2 ? 1.0 : -1.0;
       }
       
       this._time += this.number2 * this.number4;
       this._nowP.y = this._initP.y + Math.sin(this._time) * 25 * this.number4;
       this._nowP.x = this._initP.x + Math.sin(this._time) * 30 * this.number3;
       this._nowP.z = this._initP.z + Math.cos(this._time) * 30 * this.number3;
       this.node.setWorldPosition(this._nowP);
       console.debug(this._time);
   }
}
