import {AbsGameboard} from "./AbsGameboard";
import {IAnimator} from "../Animator/IAnimator";
import {ISize} from "./ISize";


export interface IGameboard extends AbsGameboard {
    [s: string]: null | any;

    startVertexid?: number;
    endVertexid?: number;
    animator?: IAnimator;

    changeSize(size: ISize): number;
    generateFrames(): number;
    processNextFrame(): number;
    play(): number;
    pause(): number;
    setAlg(alg: string): number;
    changeStart(newStartID: number): number;
    changeEnd(newStartID: number): number;
    blockCell(nodeID: number): number;


}

