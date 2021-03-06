import {Vertex} from "./Vertex";
import {IVisualizerVertex} from "./IVisualizerVertex";
import {IAdjList} from "../AdjList/IAdjList";
import {ISize} from "../Gameboard/ISize";
import {IVertex} from "./IVertex";

export class VisualizerVertex extends Vertex implements IVisualizerVertex {
    public getCoordinates(vertexId: number, height: number, width: number) {
        let y: number = Math.ceil(vertexId / width);
        let x: number = width - (y * width - vertexId);
        return { x,  y };
    }

    public getEdges(size: ISize, adjList: IAdjList): any{
        const { height, width } = size;
        let gameEdges: number[] = [];

        //possible edges
        //need to exclude diags
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

        let curr_coordinates = this.getCoordinates(this.id, height, width);
        let { x, y } = curr_coordinates;
        let { blocked } = this.payload;

        //right
        // edgeCoordinates.push({x: x + 1, y: y});
        let right = (x + 1) + ((y - 1) * width);

        if (!blocked) {
            if (right < height * width + 1 && right <= y * width) {
                let rightBlocked = adjList.get(right);
                if (rightBlocked && !rightBlocked.payload.blocked) {
                    gameEdges.push(right);
                }

            }
        }

        //left
        // edgeCoordinates.push({x:  x - 1, y: y});
        let left = (x - 1) + ((y - 1) * width);
        if (!blocked) {
            let leftBlocked = adjList.get(left);
            if (left > 0 && left > (y - 1) * width) {
                if (leftBlocked && !leftBlocked.payload.blocked) {
                    gameEdges.push(left);
                }

            }
        }

        //top
        // edgeCoordinates.push({x:  x, y:  y + 1});
        let top = x + ((y) * width);
        if (!blocked) {
            let topBlocked = adjList.get(top);
            if (top < height * width + 1) {
                if (topBlocked && !topBlocked.payload.blocked) {
                    gameEdges.push(top);
                }

            }
        }

        //bottom
        // edgeCoordinates.push({x:  x, y: y - 1});
        let bottom = x + ((y - 2) * width);
        if (!blocked) {
            let bottomBlocked = adjList.get(bottom);
            if (bottom > 0) {
                if (bottomBlocked && !bottomBlocked.payload.blocked) {
                    gameEdges.push(bottom);
                }
            }
        }

        this.edges = gameEdges;

        return gameEdges;
    }
}