import { IVisualizerVertex } from "../Vertex/IVisualizerVertex";
import { IAdjList } from "./IAdjList";
import { errors } from "../Errors/AdjListErrors";
import { immerable } from "immer";

export class AdjList extends Map<number, IVisualizerVertex> implements IAdjList {
    [s: string]: any;
    [immerable] = true;

    public addVertex(vertex: IVisualizerVertex): number {
        const { id } = vertex;
        this.set(id, vertex);
        return 0;
    }

    public addEdge(vertexID: number, edgeID: number): number {
        try {
            const vertex = this.get(vertexID);
            if (!vertex) {
                throw new Error(errors.vertexNotFound);
            }
            vertex.addEdge(edgeID);

        } catch (e) {
            console.log(e);
            return -1;

        }
        return 0;
    }

    public removeEdge(vertexID: number, edgeID: number): number {
        try {
            const vertex = this.get(vertexID);
            if (!vertex) {
                throw new Error(errors.vertexNotFound);
            }
            vertex.removeEdge(edgeID);
        } catch (e) {
            console.log(e);
            return -1;
        }

        return 0;
    }

    public clearNodes(): number {
        this.forEach((value: IVisualizerVertex) => {
            value.unBlock();
        });
        return 0;
    }
}