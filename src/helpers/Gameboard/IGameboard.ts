import {AbsGameboard} from "./AbsGameboard";
import {IAnimator} from "../Animator/IAnimator";

export interface IGameboard extends AbsGameboard {
    [s: string]: null | any;

    startVertexid?: number;
    endVertexid?: number;
    animator?: IAnimator;
}

