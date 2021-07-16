import {IFrame} from "./IFrame";
import {IAnimator} from "./IAnimator";

export abstract class AbsAnimator implements IAnimator {
    public frames = new Map();
    public currentFrame = 0;
    public isPaused: boolean = true;

    public addFrame(frame: IFrame) {
        this.frames.set(this.frames.size, frame);
    }

    public removeFrame(name: number) {
        try {
            const frame = this.getFrame(name);
            this.frames.delete(name);
            return frame;
        } catch (e) {
            console.log(e);
            return null;
        }
    }

    public getFrame(name: number): IFrame | null {
        try {
            return this.frames.get(name);
        } catch (e) {
            return null;
        }
    }
}
