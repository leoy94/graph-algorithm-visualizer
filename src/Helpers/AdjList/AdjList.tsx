import {IVisualizerVertex, VisualizerVertex} from "../Vertex/Vertex";
import {Frame} from "../Animations/Frame";

export interface IAdjList extends Map<number,IVisualizerVertex>{
    addVertex: (payload: any, id: number) => void;
    addEdge: (vertexID: number, edgeID: number) => void;
    removeEdge: (vertexID: number, edgeID: number) => void;

    bfs(startID: number, end:number, size?: {height: number, width: number}): any;
    dfs(startID: number, end:number, size?: {height: number, width: number}): any;
    // dfs?: (startID: number, findID:number, blockedids?:  Map<number,number>, size?: {height: number, width: number}) => {length: number, path?: number[]};

    // biDir?: (startID: number, findID:number) => {length: number, path?: number[]};
    
}

export class AdjList extends Map implements IAdjList{
    [s: string]: any;

    addVertex(payload: any, id: number){
        this.set(id, new VisualizerVertex(payload, id));
    }

    addEdge(vertexID: number, edgeID: number){
        this.get(vertexID).addEdge(edgeID);
    }

    removeEdge(vertexID: number, edgeID: number){
        this.get(vertexID).removeEdge(edgeID);
    }

    static vertexFactory(list: IAdjList, vertices: any[]){
        for(let vertex of vertices){
            list.addVertex(vertex.payload,vertex.id);
        }
    };

    static edgeFactory(list: IAdjList, edges: any[]){
        for(let edge of edges){
            let [vertexID, edgeID] = edge;
            list.addEdge(vertexID, edgeID);
        }
    };

    public bfs(startID: number, end:number, size?: {height: number, width: number}){
        // console.log(this);
        let visited = new Map();
        type queueItem = number[];
        let queue: queueItem[] = [];


        let frames = new Map<number, Frame>();

        //push the start vertex
        queue.push([startID, -1]);


        //while the queue has items
        while(queue.length > 0){
            //dequeue last item
            let queuedItem = queue.pop();

            //get currentIndex and lastIndex if they exist
            let current, last = null;
            if(queuedItem){
                [current, last] = queuedItem;
            }

            if(current != null){
                frames.set(frames.size, new Frame("focus", {id: current}));
            }

            //if the desired vertex is found print the path
            if(current === end){
                let path = [current];

                while(last > -1){
                    path.unshift(last);
                    last = visited.get(last);
                }
                return {length: path.length, path: path, frames: frames};
            }

            //for each of the edges in this iteration
            let edges;
            if(size){
                edges = this.get(current).getEdges(size, this);
            }
            for(let edge of edges){
                //if the edge is not visited and the edge is not queued queue
                if(!visited.has(edge) && !queue.some(item => item[0]===edge)){
                        queue.unshift([edge,current]);
                }
            }
            //set focus animation
            visited.set(current, last);
        }
        return {length: 0, path: undefined, frames: frames};
    }


    dfs(startID: number, end:number, size?: {height: number, width: number}){
        let visited = new Map();
        type stackItem = number[];
        let stack: stackItem[] = [];

        let frames = new Map<number, Frame>();

        //push the start vertex
        stack.push([startID, -1]);

        //while the queue has items
        while(stack.length > 0){
            //dequeue last item
            let stackedItem = stack.pop();
            // console.log(stackedItem);

            //get currentIndex and lastIndex if they exist
            let current, last;
            if(stackedItem){
                [current, last] = stackedItem;
            }

            if(current != null){
                frames.set(frames.size, new Frame("focus", {id: current}));
            }

            //if the desired vertex is found print the path
            if(current === end){
                let path = [current];
                while(last > -1){
                    path.unshift(last);
                    last = visited.get(last);
                }
                return {length: path.length, path: path, frames: frames};
            }

            //for each of the edges in this iteration
            let edges = this.get(current).getEdges(size, this);
            for(let edge of edges){
                //if the edge is not visited and the edge is not queued queue
                if(!visited.has(edge) && !stack.some(item => item[0]===edge)){
                    stack.push([edge,current]);
                }
            }
            visited.set(current, last);
        }
        return {length: 0, path: undefined, frames: frames};
    }


}
