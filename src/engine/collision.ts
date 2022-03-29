import {drawer} from "./drawer";
import { objects } from "./drawer";
import physics from "./physics";

class collision{
 public static check_collision(){
   for(var i=0;i<objects.length;i++){
     for(var j=0;j<objects.length;j++){
       if(i!=j){
           var colliding =physics.iscolliding(objects[i],objects[j]);
           if(colliding==true){
             console.log("colliding");
           }
       }
     }
   }
 }
}
export {collision}