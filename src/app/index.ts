import Camera from '../app/camera';
import Tools from '../app/tools'
import mouse from '../app/mouse'
import keyboard from './keyboard';
import {drawer} from '../engine/drawer';
import {collision} from '../engine/collision';
// import Renderer from '../app/renderer'

let canvas=document.getElementById("canvas") as HTMLCanvasElement;
let container=document.getElementById("container") as HTMLElement;
let ctx=canvas.getContext("2d") as  CanvasRenderingContext2D;
ctx.imageSmoothingEnabled=true;

//declaration of classes
let camera=new Camera(canvas);
let tools=new Tools(container);
new mouse();
new keyboard();
let drawer1=new drawer(canvas);

//tools testing declaration
// tools.addtextarea(20,30);
// tools.addtextarea(80,50);
// tools.addbutton(20,60);
// tools.addslider(20,200,0,100,50);

requestAnimationFrame(render);

var circle1=drawer1.createcircle(0,0);
var circle2=drawer1.createcircle(0.5,-0.5,0.3);
console.log(circle1.centerx);

function render(){
    ctx.clearRect(0,0,canvas.width,canvas.height);
    camera.begin();
    circle1.update();
    circle2.update();
    collision.check_collision();
    camera.end();
    requestAnimationFrame(render);
}

export default camera; 

