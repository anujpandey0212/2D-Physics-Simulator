import {drawer} from "./drawer";
import { objects } from "./drawer";
export default class physics{
    public  gravity:number=9;
    public gravity_enabled:boolean=true;

    public static iscolliding(object1,object2):boolean{
        var center_dis=object1.radius+object2.radius;
        var real_dis=Math.pow((Math.pow(object1.centerx-object2.centerx,2))+(Math.pow(object1.centery-object2.centery,2)),1/2);
        
        if(real_dis<=center_dis){
            return true
        }
        else{
            return false
        }
    }

    // public gravitational_force(){
    //     if(this.gravity_enabled){
    //         for(var i=0;i<objects.length;i++){
    //             objects[i]=objects[i].velocityy+this.gravity*
    //         }
    //     }
    // }

}

