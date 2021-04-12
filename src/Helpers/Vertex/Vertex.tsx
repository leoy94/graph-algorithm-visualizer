import {IAdjList} from "../AdjList/AdjList";

export interface IVertex{
    id: number;
    payload: {blocked?: boolean};
    edges?: number[];
    addEdge: (edge: number) => void;
    removeEdge: (edge: number) => void;
}

export class Vertex implements IVertex {
    payload = {blocked: false};
    id: number = -1;
    edges?: number[] = [];

    constructor(payload: any, id: number) {
            this.payload = payload;
            this.id = id;
        }

    addEdge(edge: number){
        try{
            if(this.edges){
                this.edges.push(edge);
            }
        }
        catch (e) {
            console.log(e);
        }
    }

    removeEdge(edge: number){
        try{
            if(this.edges){
                this.edges = this.edges.filter(vEdge => vEdge !== edge);
            }
        }
        catch (e) {
            console.log(e);
        }

    }

    public get Edges(){
        return this.edges;
    }

    public static getCoordinates(vertexId: number, height: number, width: number){
        let y: number = Math.ceil(vertexId/width);
        let x: number = width - (y*width - vertexId);
        return {x, y};
    }
}

export interface IVisualizerVertex extends IVertex{
    getEdges(size: {height: number, width: number},adjList: IAdjList): any[];
}

export class VisualizerVertex extends Vertex implements IVisualizerVertex {
    public getEdges(size: {height: number, width: number}, adjList: IAdjList){
       const {height, width} = size;
       let gameEdges: number[] = [];
        // let edgeCoordinates: {x: number, y: number}[] = [];
        //possible edges
        //possibly need to exclude diags
        /*
           1. (x+1,y)
           2. (x-1,y)
           3. (x,y+1)
           4. (x-1,y+1) --excluded
           5. (x+1,y+1) --excluded
           6. (x, y-1)
           7. (x-1,y-1) --excluded
           8. (x+1,y-1) --excluded
        */

        let curr_coordinates = VisualizerVertex.getCoordinates(this.id, height, width);
        let {x,y} = curr_coordinates;
        let {blocked} = this.payload;

        //right
        // edgeCoordinates.push({x: x + 1, y: y});
        let right = (x+1)+((y-1)*width);

        if(!blocked){
                if(right < height*width+1 && right <= y*width){
                    let rightBlocked = adjList.get(right);
                    if(rightBlocked && !rightBlocked.payload.blocked){
                        gameEdges.push(right);
                    }

                }
        }

        //left
        // edgeCoordinates.push({x:  x - 1, y: y});
        let left = (x-1)+((y-1)*width);
        if(!blocked){
            let leftBlocked = adjList.get(left);
            if(left > 0 && left > (y-1)*width){
                if(leftBlocked && !leftBlocked.payload.blocked){
                    gameEdges.push(left);
                }

            }
        }

        //top
        // edgeCoordinates.push({x:  x, y:  y + 1});
        let top = x+((y)*width);
        if(!blocked){
            let topBlocked = adjList.get(top);
            if(top < height*width+1){
                if(topBlocked && !topBlocked.payload.blocked){
                    gameEdges.push(top);
                }

            }
        }

        //bottom
        // edgeCoordinates.push({x:  x, y: y - 1});
        let bottom = x+((y-2)*width);
        if(!blocked){
            let bottomBlocked = adjList.get(bottom);
            if(bottom > 0){
                if(bottomBlocked && !bottomBlocked.payload.blocked){
                    gameEdges.push(bottom);
                }
            }
        }

        // const {x, y} = VisVertex.getCoordinates(this.id, )
        return gameEdges;
    }
}