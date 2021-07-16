import { IVisualizerVertex } from "../Vertex/IVisualizerVertex";

export interface IAdjList extends Map<number, IVisualizerVertex> {
    [s: string]: any;

    addVertex: (vertex: IVisualizerVertex) => number;
    addEdge: (vertexID: number, edgeID: number) => number;
    removeEdge: (vertexID: number, edgeID: number) => number;
    clearNodes: () => number;
}
