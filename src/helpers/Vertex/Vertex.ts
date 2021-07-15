import { IVertex } from "./IVertex";

export class Vertex implements IVertex {
    id: number = -1;
    payload = { blocked: false };
    edges: number[] = [];

    constructor(payload: any, id: number) {
        this.payload = payload;
        this.id = id;
    }

    addEdge(edge: number) {
        try {
            if (this.edges) {
                this.edges.push(edge);
            }
        }
        catch (e) {
            console.log(e);
        }
    }

    removeEdge(edge: number) {
        try {
            if (this.edges) {
                this.edges = this.edges.filter(vEdge => vEdge !== edge);
            }
        }
        catch (e) {
            console.log(e);
        }

    }

    toggleBlock() {
        let { blocked } = this.payload;
        if (blocked === true) {
            this.payload.blocked = false
        }
        else {
            this.payload.blocked = true;
        }
        return blocked;
    }

    unBlock() {
        let { blocked } = this.payload;
        blocked = false;
        return blocked;
    }

}