import {IAnimator} from "./IAnimator";
import {IAdjList} from "../AdjList/IAdjList";
import {IFrame} from "./IFrame";

export interface IGameboardAnimator extends IAnimator {
    focusedNode: number | null;
    visitedNodes: Map<number, number>;
    solutionNodes: Map<number, number>;

    //utility
    isLastFrame(frameID: number): boolean;
    reset(): number;
    focus(payload: { id: number }): number;
    processFrame(): number;
    generateFrames(graph: IAdjList, alg: string, size: any, start: number, end: number): number | Map<number, IFrame>;
}
