import { IVisualizerVertex } from "../Vertex/IVisualizerVertex";
import { IAdjList } from "./IAdjList";
import { errors } from "../Errors/AdjListErrors";
import { Frame } from "../Animator/Frame";
import { immerable } from "immer";


export class AdjList extends Map<number, IVisualizerVertex> implements IAdjList {
    [s: string]: any;
    [immerable] = true;

    // constructor() {
    //     super();
    // }

    addVertex(vertex: IVisualizerVertex) {
        const { id } = vertex;
        this.set(id, vertex);
    }

    addEdge(vertexID: number, edgeID: number) {
        try {
            const vertex = this.get(vertexID);
            if (!vertex) {
                throw new Error(errors.vertexNotFound);
            }
            vertex.addEdge(edgeID);
        } catch (e) {
            console.log(e);
        }
    }

    removeEdge(vertexID: number, edgeID: number) {
        try {
            const vertex = this.get(vertexID);
            if (!vertex) {
                throw new Error(errors.vertexNotFound);
            }
            vertex.removeEdge(edgeID);
        } catch (e) {
            console.log(e);
        }
    }

    clearNodes() {
        this.forEach((value: IVisualizerVertex) => {
            value.unBlock();
        });
    }

    public bfs(startID: number, end: number, size?: { height: number, width: number }) {
        let visited = new Map();
        type queueItem = number[];
        let queue: queueItem[] = [];


        let frames = new Map<number, Frame>();

        //push the start vertex
        queue.push([startID, -1]);


        //while the queue has items
        while (queue.length > 0) {
            //dequeue last item
            let queuedItem = queue.pop();

            //get currentIndex and lastIndex if they exist
            let current, last = null;
            if (queuedItem) {
                [current, last] = queuedItem;
            }

            if (current != null) {
                frames.set(frames.size, new Frame("focus", { id: current }));
            }

            //if the desired vertex is found print the path
            if (current === end) {
                let path = [current];

                while (last > -1) {
                    path.unshift(last);
                    last = visited.get(last);
                }
                return { length: path.length, path: path, frames: frames };
            }

            //for each of the edges in this iteration
            let edges;
            if (current) edges = this.get(current);
            if (size && edges) {
                edges = edges.getEdges(size, this);
            }
            for (let edge of edges) {
                //if the edge is not visited and the edge is not queued queue
                if (!visited.has(edge) && !queue.some(item => item[0] === edge)) {
                    queue.unshift([edge, current]);
                }
            }
            //set focus animation
            visited.set(current, last);
        }
        return { length: 0, path: undefined, frames: frames };
    }
    public dfs(startID: number, end: number, size?: { height: number, width: number }) {
        let visited = new Map();
        type stackItem = number[];
        let stack: stackItem[] = [];

        let frames = new Map<number, Frame>();

        //push the start vertex
        stack.push([startID, -1]);

        //while the queue has items
        while (stack.length > 0) {
            //dequeue last item
            let stackedItem = stack.pop();
            // console.log(stackedItem);

            //get currentIndex and lastIndex if they exist
            let current, last;
            if (stackedItem) {
                [current, last] = stackedItem;
            }

            if (current != null) {
                frames.set(frames.size, new Frame("focus", { id: current }));
            }

            //if the desired vertex is found print the path
            if (current === end) {
                let path = [current];
                while (last > -1) {
                    path.unshift(last);
                    last = visited.get(last);
                }
                return { length: path.length, path: path, frames: frames };
            }

            //for each of the edges in this iteration
            let edges;
            if (current) edges = this.get(current);
            if (size && edges) {
                edges = edges.getEdges(size, this);
            }
            for (let edge of edges) {
                //if the edge is not visited and the edge is not queued queue
                if (!visited.has(edge) && !stack.some(item => item[0] === edge)) {
                    stack.push([edge, current]);
                }
            }
            visited.set(current, last);
        }
        return { length: 0, path: undefined, frames: frames };
    }
}