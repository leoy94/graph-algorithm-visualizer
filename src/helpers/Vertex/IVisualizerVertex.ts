import { IVertex } from "./IVertex";
import { IAdjList } from "../AdjList/IAdjList";
import {ISize} from "../Gameboard/ISize";

export interface IVisualizerVertex extends IVertex {
    getCoordinates(vertexId: number, height: number, width: number): { x: number, y: number };
    getEdges(size: ISize, adjList: IAdjList): any;
}