import {IAdjList} from "../AdjList/IAdjList";
import {ISize} from "../Gameboard/ISize";
import {Frame} from "../Animator/Frame";

export interface IAlgReturn {
    length: number;
    path: number[] | undefined;
    frames: Map<number, Frame>;
}

export interface IAlgs{
    [s: string]: any;

    bfs(adjList: IAdjList, startID: number, end: number, size?: ISize): IAlgReturn;
    dfs(adjList: IAdjList, startID: number, end: number, size?: ISize): IAlgReturn;
}
