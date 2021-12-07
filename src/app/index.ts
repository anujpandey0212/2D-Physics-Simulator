import Camera from '../app/camera';
import Tools from '../app/tools'
import mouse from '../app/mouse'
import keyboard from './keyboard';
// import Renderer from '../app/renderer'

let canvas=document.getElementById("canvas") as HTMLCanvasElement;
let container=document.getElementById("container") as HTMLElement;
let ctx=canvas.getContext("2d") as  CanvasRenderingContext2D;

// let renderer=new Renderer(canvas);
let camera=new Camera(canvas);
let tools=new Tools(container);
new mouse();
new keyboard();
tools.addtextarea(20,30);
tools.addbutton(20,60);
tools.addslider(20,200,0,100,50);
ctx.fillStyle="blue";
ctx.fillRect(0,0,1,1);
requestAnimationFrame(draw);

function draw(){
    ctx.clearRect(0,0,canvas.width,canvas.height);
    camera.begin();
    ctx.fillStyle="red";
    ctx.fillRect(0,0,1,1);
    camera.end();
    requestAnimationFrame(draw);
}

export default camera; 
