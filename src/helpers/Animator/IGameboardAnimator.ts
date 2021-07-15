import {IAnimator} from "./IAnimator";
import {IAdjList} from "../AdjList/IAdjList";

export interface IGameboardAnimator extends IAnimator {
    processFrame: () => void;
    focusedNode: number | null;

    visitedNodes: Map<number, number>;
    solutionNodes: Map<number, number>;

    //utility
    //sets current frame to 0, clears visited, clears solution, regenerates frames
    reset: () => void;
    generateFrames: (graph: IAdjList, searchAlg: string, size: any, start: number, end: number) => void;
}
