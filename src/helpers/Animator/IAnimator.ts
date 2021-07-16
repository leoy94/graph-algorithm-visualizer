import { IFrame } from "./IFrame"

export interface IAnimator {
    //frames
    frames: Map<number, IFrame>;
    currentFrame: number; //maybe create a getter?

    addFrame: (frame: IFrame) => void;
    removeFrame: (name: number) => IFrame | null;
    getFrame: (name: number) => IFrame | null;

    isPaused: boolean;
}
