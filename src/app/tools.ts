export default class Tools{

    public container:HTMLElement;

    constructor(container:HTMLElement){
        this.container=container;
    }

    /**
     * 
     * @param x x position in canvas
     * @param y y position in canvas
     */
    public addtextarea(x:number,y:number){
        var textarea=document.createElement("input");
        textarea.type="text";
        textarea.className="form-control"
        textarea.style.left=x+'px';
        textarea.style.bottom=(400-y)+'px';
        textarea.style.position='absolute';
        textarea.style.width='10%';
        this.container?.appendChild(textarea);
        console.log("textarea function triggered");
    }

    /**
     * 
     * @param x x position in canvas
     * @param y y position in canvas
     */
    public addbutton(x:number,y:number){
        var button=document.createElement("input");
        button.type="button";
        button.className="btn btn-primary";
        button.style.left=x+'px';
        button.style.bottom=(400-y)+'px';
        button.style.position='absolute';
        button.value="button";
        this.container?.appendChild(button);
    }

    //label
    public addlabel(x:number,y:number){

    }


    /**
     * 
     * @param x x position in canvas
     * @param y y position in canvas
     * @param min starting number of range
     * @param max last number of range
     * @param initial_value initial number given from the range
     */
    public addslider(x:number,y:number,min:number,max:number,initial_value:number){
        var slider=document.createElement("input");
        slider.type="range";
        slider.min=min.toString();
        slider.max=max.toString();
        slider.className="form-range"
        slider.style.left=x+'px';
        slider.style.bottom=(400-y)+'px';
        slider.style.width='10%';
        slider.style.position='absolute';
        slider.value=initial_value.toString();
        this.container?.appendChild(slider);
    }

}