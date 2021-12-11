import camera from ".";
import { Vector2 } from "../math/vector2";
export default class keyboard{
    constructor(){
        window.addEventListener('keydown', e => {
			switch (e.key) {
				case "ArrowLeft":
					camera.translate(-0.05, 0);
					break;
				case "ArrowRight":
					camera.translate(0.05, 0);
					break;
				case "ArrowDown":
					camera.translate(0, -0.05);
					break;
				case "ArrowUp":
					camera.translate(0, 0.05);
					break;
				case 'r':
					camera.zoomToAboutPoint(1000, new Vector2(0, 0));
					break;

			};

		});
    }
}