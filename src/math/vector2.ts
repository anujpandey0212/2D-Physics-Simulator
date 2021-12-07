/**
 * This class represents a vector or point in 2D space.
*/
 export class Vector2 {
    public x: number;
    public y: number;
    public static readonly EPSILON=1e-9;

 
    constructor(x: number = 0, y: number = 0) {
        this.x = x;
        this.y = y;
    }

    public set(x:number|Vector2,y:number=0):Vector2{
        if(x instanceof Vector2){
            this.x=x.x;
            this.y=x.y;
            return this;
        }
        this.x = x;
        this.y = y;
        return this;
    }

     /**
     * Returns a copy of this {@link Vector2}.
     * @return {Vector2} {@link Vector2}
     */
    public copy(): Vector2 {
        return new Vector2(this.x, this.y);
    }

     /**
     * Returns true if Vector is exactly equal to specified coordinates
     * @param {number|Vector2} x
     * @param {number} y
     * @return
     * @return {boolean}
     */
    public equals(x: number|Vector2, y: number): boolean {
        if(x instanceof Vector2){
            if (this==x) return true;
            return (this.x==x.x && this.y==x.y);
        }
        return this.x==x && this.y==y;
    }


    /**
     * Returns true if Vector is very Close to specified coordinates
     * @param {number|Vector2} x 
     * @param {number} y
     * @return
     * @return {boolean}
     */
     public approxEquals(x: number|Vector2, y: number): boolean {
        if(x instanceof Vector2){
            if (this==x) return true;
            return Math.abs(this.x - x.x) < Vector2.EPSILON && Math.abs(this.y - x.y) < Vector2.EPSILON;
        }
        return Math.abs(this.x - x) < Vector2.EPSILON && Math.abs(this.y - y) < Vector2.EPSILON;
    }


    public add(x:number|Vector2,y:number=0):Vector2{
           if(x instanceof Vector2){
               this.x += x.x;
               this.y += x.y;
           }else{
               this.x += x;
               this.y += y;
           }
           return this;
    }


    public subtract(x:number|Vector2,y:number=0):Vector2{
        if(x instanceof Vector2){
            this.x -= x.x;
            this.y -= x.y;
        }else{
            this.x -= x;
            this.y -= y;
        }
        return this;
    }

    public multiply(x:number|Vector2,y:number=0):Vector2{
        if(x instanceof Vector2){
            this.x *= x.x;
            this.y *= x.y;
        }else{
            this.x *= x;
            this.y *= y;
        }
        return this;
    }

    public scale(s:number){
        this.x*=s;
        this.y*=s;
        return this;
    }

    public negate():Vector2 {
        this.x = -this.x;
        this.y = -this.y;
        return this;
    }

   
    /**
	 * Sets this vector to the right-handed normal of this vector.
	 * @return {@link Vector2} this vector
	 */
     public right():Vector2 {
		let temp = this.x;
		this.x = -this.y;
		this.y = temp;
		return this;
	}
    /**
	 * Sets this vector to the right-handed normal of this vector.
	 * @return {@link Vector2} this vector
	 */
     public left():Vector2 {
		let temp = this.x;
		this.x = this.y;
		this.y = -temp;
		return this;
	}

    /**
     * Rotates this vector about specified point (x0,y0) 
     * @param theta Angle in radians
     * @param x0 
     * @param y0 
     * @returns 
     */
     public rotate(theta: number, x0: number=0, y0: number=0): Vector2 {
        this.x -= x0;
        this.y -= y0;
        const cos: number = Math.cos(theta);
        const sin: number = Math.sin(theta);
        const x: number = this.x;
        const y: number = this.y;
        this.x = x * cos - y * sin;
        this.y = x * sin + y * cos;
        this.x += x0;
        this.y += y0;
        return this;
    }


    public  getMagnitude(): number {
        return Math.sqrt(this.getMagnitudeSqrd());
    }

    public setMagnitude(newLen:number)  {
        const len = newLen/this.getMagnitude();
        this.x *= len;
        this.y *= len;
    }
   

    public getMagnitudeSqrd(): number {
        return this.x * this.x + this.y * this.y;
    }

      /**
     * Normalises this vector and returns its length
     * @returns 
     */
       public normalize() {
        const len = this.getMagnitude();
        if (len > 0) {
            this.x /= len;
            this.y /= len;
        }
        return len;
    }

    /**
     * 
     * @returns Returns unit vector
     */
    public getNormalized(): Vector2 {
        const v = new Vector2(this.x, this.y);
        const len = this.getMagnitude();
        if (len > 0) {
            v.x /= len;
            v.y /= len;
        }
        return v;
    }


     /**
     * Returns the angle of this {@link Vector2} with +ve x axis
     * as an angle in radians.
     * @return {number} double angle in radians [0, 2*&pi;]
     */
      public getAngleWithPositiveXAxis(): number {
        let theta: number = Math.atan2(this.y, this.x);
        if (theta < 0)theta += Math.PI * 2;
        return theta;
    }

    public getAngleWith(vector: Vector2): number {
        const a: number = Math.atan2(vector.y, vector.x) - Math.atan2(this.y, this.x);
        if (a > Math.PI)return a - 2 * Math.PI;
        if (a < -Math.PI)return a + 2 * Math.PI;
        return a;
    }

  
   
    

    ////STATIC METHODS

    /**
     * Adds two vector and returns their sum
     * @param a 
     * @param b 
     * @returns  new vector
     */
    public static sum(a: Vector2, b: Vector2): Vector2 {
        return new Vector2(a.x + b.x, a.y + b.y);
    }

    /**
     * Subtracts b from a a and returns result
     * @param a 
     * @param b 
     * @param t 
     * @returns 
     */
    public static difference(a: Vector2, b: Vector2): Vector2 {
        return new Vector2(a.x -b.x, a.y - b.y);
    }

    public static product(a: Vector2, b: Vector2): Vector2 {
        return new Vector2(a.x * b.x, a.y * b.y);
    }

    public static dot(a: Vector2, b: Vector2): number {
        return a.x * b.x + a.y * b.y;
    }

    public static cross(a: Vector2, b: Vector2): number {
        return a.x * b.y - a.y * b.x;
    }

    /**
     * returns a+t.b
     * @param a 
     * @param b 
     * @param t parameter between 0 and 1
     * @returns new Vector2
     */
    public static lerp(a: Vector2, b: Vector2,t:number): Vector2 {
        return new Vector2(a.x*(1-t) + b.x*t, a.y*(1-t) + b.y*t);
    }


    /**
     * Tests if the three points are colinear.
     * 
     * @return {boolean} true if three points lie on the same line.
     * @param {Vector2} p1
     * @param {Vector2} p2
     * @param {Vector2} p3
     */
     public static isCollinear(p1: Vector2, p2: Vector2, p3: Vector2): boolean {
        let dx1: number;
        let dx2: number;
        let dy1: number;
        let dy2: number;
        dx1 = p2.x - p1.x;
        dy1 = p2.y - p1.y;
        dx2 = p3.x - p1.x;
        dy2 = p3.y - p1.y;
        return Math.abs(dx1 * dy2 - dy1 * dx2) < Vector2.EPSILON;
    }


 }