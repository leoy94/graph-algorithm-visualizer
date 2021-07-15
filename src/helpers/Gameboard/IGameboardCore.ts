import { IAdjList } from "../AdjList/IAdjList";

export interface IGameboardCore {
    name: string;
    size: {
        height: number;
        width: number;
    }
    gameboard: IAdjList;

    algs?: any;
    currentAlg: string;
    // animator?: GraphAnimator;
}