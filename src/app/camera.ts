import { Vector2 } from "../math/vector2"

export default class Camera {
	/**maximum percentage zoom */
	public static readonly METER_TO_PIXEL = 100;

	/**maximum percentage zoom */
	protected static readonly MAX_ZOOM = 4000;

	/**minimum percentage zoom*/
	protected static readonly MIN_ZOOM = 1;

	protected static ZOOM_OUT_FACTOR = 1.05;

	protected static ZOOM_IN_FACTOR = 0.96;
	public canvas: HTMLCanvasElement;
	public ctx: CanvasRenderingContext2D;

	/** The zoom factor */
	protected scale = Camera.METER_TO_PIXEL;

	/** The translation from 0,0 */
	protected translation: Vector2 = new Vector2(0, 0);

	/**
	 * Default constructor.
	 * <p>
	 * Defaults to a 100 to scale(pixel per meter) and zero translation.
	 */
	public constructor( canvas:HTMLCanvasElement,scale = Camera.METER_TO_PIXEL, translation = new Vector2()) {
		this.scale = scale;
		this.translation = translation;
		this.canvas=canvas;
		this.ctx=canvas.getContext("2d") as CanvasRenderingContext2D;
	}



	/**
	 * Zooms camera to specified percentage zoom.
	 * @param zoomPercentage Desired Percentage ZOOM
	 */
	public zoomTo(zoomPercentage: number): void {
		if (zoomPercentage < Camera.MIN_ZOOM) zoomPercentage = Camera.MIN_ZOOM;
		if (zoomPercentage > Camera.MAX_ZOOM) zoomPercentage = Camera.MAX_ZOOM;
		this.scale = zoomPercentage;
	}

	/**
	 * Zooms camera to specified percentage zoom about specified point as origin.
	 * @param zoomPercentage Desired Percentage ZOOM
	 * @param pt  Zoom about pt as centre
	 */
	public zoomToAboutPoint(zoomPercentage: number, pt: Vector2): void {
		let prevScale = this.scale;
		this.zoomTo(zoomPercentage);
		this.translation.add(pt.scale((-this.scale + prevScale) / this.scale));
	}


	/**
	 * Zooms out the camera.
	 */
	public zoomOut(): void {
		this.zoomTo(this.scale * Camera.ZOOM_OUT_FACTOR);
	}

	/**
	 * Zooms in the camera.
	 */
	public zoomIn(): void {
		this.zoomTo(this.scale * Camera.ZOOM_IN_FACTOR);
	}

	/**
	 * Zooms out the camera about point (in world coordinates).
	 * @param pt Zoom about pt as centre
	 */
	public zoomOutAboutPoint(pt: Vector2): void {
		this.zoomToAboutPoint(this.scale * Camera.ZOOM_OUT_FACTOR, pt);
	}

	/**
	 * Zooms in the camera about point (in world coordinates).
	 * @param pt  Zoom about pt as centre
	 */
	public zoomInAboutPoint(pt: Vector2): void {
		this.zoomToAboutPoint(this.scale * Camera.ZOOM_IN_FACTOR, pt);
	}

	/**
	 * Moves the camera back to the origin (Now World origin will be rendered at screen center).
	 */
	public toOrigin(): void {
		this.translation.set(0, 0);
	}


	/**
	 * Translates the camera the given amount along the x and y axes.
	 * @param x the x translation
	 * @param y the y translation
	 */
	public translate(x: number, y: number) {
		this.translation.x += x;
		this.translation.y += y;
	}

	// getter/setters

	/**
	 * Returns the scale factor in pixel per meter.
	 * @return double
	 */
	public getScale(): number {
		return this.scale;
	}

	/**
	 * Sets the scale factor in pixels per meter.
	 * @param scale the desired scale factor
	 */
	public setScale(scale: number) {
		this.scale = scale;
	}

	/**
	 * Returns the offset of camera (displacement of screen center from 'world center rendered on screen').
	 * @return Vector2
	 */
	public getTranslation(): Vector2 {
		return this.translation;
	}

	/**
	 * Sets the offset/translation from the origin in world coordinates.
	 * @param translation the translation
	 */
	public setTranslation(translation: Vector2) {
		this.translation.set(translation);

	}

	/**
	 * Converts from world coordinates to screen coordinates, having origin at midpoint and up as positive
	 * to convert to swing coordinates use 
	 * <pre>
	 * p=worldToScreen(Vector2 worldPoint)
	 * p.set(p.x+canvas.getWidth()/2,-p.y+canvas.getHeight()/2); 
	 * </pre>
	 * @param worldPoint
	 * @return Point p in screen Coordinates
	 */
	public worldToScreen(worldPoint: Vector2): Vector2 {
		let offset = this.translation;
		let scale = this.scale;
		worldPoint = worldPoint.copy().add(offset.x, offset.y);
		worldPoint.scale(scale);
		return worldPoint;
	}
	public begin() {
		this.ctx.save();
		this.ctx.translate(this.ctx.canvas.width / 2, this.ctx.canvas.height / 2);
		this.ctx.scale(this.scale, -this.scale);
		this.ctx.translate(this.translation.x, this.translation.y);
	}

	public end() {
		this.ctx.restore();
	}

}
