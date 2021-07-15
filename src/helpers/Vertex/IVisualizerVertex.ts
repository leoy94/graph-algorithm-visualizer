import { IVertex } from "./IVertex";
import { IAdjList } from "../AdjList/IAdjList";

export interface IVisualizerVertex extends IVertex {
    getCoordinates(vertexId: number, height: number, width: number): { x: number, y: number };
    getEdges(size: { height: number, width: number }, adjList: IAdjList): any;
}