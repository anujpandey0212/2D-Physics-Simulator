import camera from ".";
import { drawer, objects } from "../engine/drawer";
export default class mouse{ 
    constructor(){
        document.onwheel = e => {
			if (e.deltaY > 0) {
				camera.zoomIn();
			} else {
				camera.zoomOut();
			}
		};
        var isfirstmousemove=0;
        var valuex=0;
        var valuey=0;
        var ismousedown=0;
        var factor=500;

        document.onmousedown=e=>{
            globalThis.x=e.x;
            globalThis.y=e.y;
            isfirstmousemove=0;
            ismousedown=1;
        }
        document.onmousemove=e=>{
            objects[0].centerx=(((e.x*camera.ctx.canvas.width)/window.innerWidth)-(camera.ctx.canvas.width/2))*0.01;
            objects[0].centery=-(((e.y*camera.ctx.canvas.height)/window.innerHeight)-(camera.ctx.canvas.height/2))*0.01;
           
            if(objects[0].centerx===objects[1].centerx){
                console.log("yay");
            }
            if(ismousedown==1){
                if(isfirstmousemove==0){
                    camera.translate((e.x-globalThis.x)/factor,-(e.y-globalThis.y)/factor);
                    isfirstmousemove=1;
                    valuex=e.x;
                    valuey=e.y;
                }
                else{
                    camera.translate((e.x-valuex)/factor,-(e.y-valuey)/factor);
                    valuex=e.x;
                    valuey=e.y;
                }
            }
        }
        document.onmouseup=e=>{
            ismousedown=0;
        }
    }
}