import camera from "../app";
import Camera from "../app/camera";
import {collision} from "./collision";
var objects:any=[];
class drawer extends Camera{

    public objects:any=[];
    // public circle:circle;
    public createcircle(centerx:number,centery:number,radius:number=0.2,color:string='red'){
        objects.push(new circle(this.canvas));
        var len=objects.length-1;
        objects[len].drawcircle(centerx,centery,radius,color);

        return objects[len];
    }
}

class circle extends Camera{

    public name:string='';
    public centerx:number=0;
    public centery:number=0;
    public velocityx:number=0;
    public velocityy:number=0;
    public radius:number=0;

    public drawcircle(centerx:number,centery:number,radius:number=0.2,color:string='red'):circle{
        // console.log("circle ");
        this.centerx=centerx;
        this.centery=centery;
        this.radius=radius; 
        this.ctx.beginPath();
        this.ctx.arc(centerx, centery, radius, 0, 2 * Math.PI, false);
        this.ctx.fillStyle = color;
        this.ctx.fill();
        this.ctx.imageSmoothingEnabled=true;
        this.ctx.imageSmoothingQuality='high';
        this.ctx.closePath();
        
        return this;
        // this.ctx.lineWidth = 5;
        // this.ctx.strokeStyle = '#003300';
        // this.ctx.stroke();
    }

    public update(centerx:number=this.centerx,centery:number=this.centery){
        // console.log(centerx);
        this.drawcircle(centerx,centery);

    }

}

class rectangle extends Camera{

}


export {objects,drawer};