import { IVisualizerVertex } from "../Vertex/IVisualizerVertex";

export interface IAdjList extends Map<number, IVisualizerVertex> {
    [s: string]: any;

    addVertex: (vertex: IVisualizerVertex) => void;
    addEdge: (vertexID: number, edgeID: number) => void;
    removeEdge: (vertexID: number, edgeID: number) => void;
    clearNodes: () => void;

    bfs(startID: number, end: number, size?: { height: number, width: number }): any;
    dfs(startID: number, end: number, size?: { height: number, width: number }): any;
}
