import camera from ".";
export default class mouse{
    constructor(){
        document.onwheel = e => {
			console.log(e);
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
            console.log('mousedown');
            globalThis.x=e.x;
            globalThis.y=e.y;
            isfirstmousemove=0;
            ismousedown=1;
        }
        document.onmousemove=e=>{
            if(ismousedown==1){
                console.log('mousedrag');
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