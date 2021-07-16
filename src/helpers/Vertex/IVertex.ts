import {Payload as IVertexPayload} from "./IVertexPayload";

export interface IVertex {
    id: number;
    payload: IVertexPayload;
    edges: number[];
    addEdge: (edge: number) => number;
    removeEdge: (edge: number) => number;
    toggleBlock: () => number;
    unBlock: () => number;
}

