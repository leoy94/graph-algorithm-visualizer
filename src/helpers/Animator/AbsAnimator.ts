import {IFrame} from "./IFrame";
import {IAnimator} from "./IAnimator";

export abstract class AbsAnimator implements IAnimator {
    animations = new Map<string, string>();
    frames = new Map();
    currentFrame = 0;
    isPaused: boolean = true;

    addFrame(frame: IFrame) {
        this.frames.set(this.frames.size, frame);
    }

    removeFrame(name: number) {
        try {
            const frame = this.getFrame(name);
            this.frames.delete(name);
            return frame;
        } catch (e) {
            console.log(e);
            return null;
        }
    }

    getFrame(name: number): IFrame | null {
        try {
            return this.frames.get(name);
        } catch (e) {
            return null;
        }
    }
}
