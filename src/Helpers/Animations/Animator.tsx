import {IFrame} from "./Frame";
import {IAdjList} from "../AdjList/AdjList";

export interface IAnimator {
    //animations
    animations?: Map<string, string>
    getAnimation?: (name: string) => string | null;

    //nn
        addAnimation?: (animation: string) => void;
        removeAnimation?: (name: string) => string | null;

    //frames
    currentFrame?: number; //maybe create a getter?
    frames?: Map<number, IFrame>;
    addFrame?: (frame: IFrame) => void;
    removeFrame?: (name: number) => IFrame | null;
    getFrame?: (name: number) => IFrame | null;

    isPaused: boolean;
}

export abstract class AbsAnimator implements IAnimator {
    animations = new Map<string,string>();
    frames = new Map();
    currentFrame = 0;
    isPaused: boolean = true;

    addAnimation(animation: string){
        this.animations.set(animation, animation);
    }

    removeAnimation(name: string){
        try{
            const animation = this.getAnimation(name);
            this.animations.delete(name);
            return animation;
        } catch (e) {
            console.log(e);
            return null;
        }
    }

    getAnimation(name: string): string | null {
        try {
            let animation = this.animations.get(name);
            if(!animation){
                throw new Error("animation doesnt exist");
            }
            return animation;
        } catch(e) {
            return null;
        }

    }

    addFrame(frame: IFrame){
        this.frames.set(this.frames.size,frame);

    }

    removeFrame(name: number){
        try{
            const frame = this.getFrame(name);
            this.frames.delete(name);
            return frame;
        } catch (e) {
            console.log(e);
            return null;
        }
    }

    getFrame(name: number): IFrame | null {
        try {
            return this.frames.get(name);
        } catch(e) {
            return null;
        }
    }
}

export class Animator extends AbsAnimator {
    //implementation goes here
    constructor(){
        super();
    }
}

export interface IGraphAnimator extends IAnimator {
    processFrame: (name: number) => void;
    focusedNode: number | null;

    //unimplemented
    visitedNodes?: Map<number, number>;
    solutionNodes?: Map<number, number>;

    //animations
    //focus (and set visit)
    //solve (i.e., set solution)


    //utility
    //sets current frame to 0, clears visited, clears solution, regenerates frames
    reset?: () => void;
    generateFrames?: (graph: IAdjList, searchAlg: string,size: any, start: number, end: number) => void;
}

export class GraphAnimator extends Animator implements IGraphAnimator{
    [s: string]: null | any;
    focusedNode: number | null = null;
    visitedNodes = new Map<number, number>();
    solutionNodes = new Map<number, number>();

    constructor(){
        super();
        this.addAnimation("focus");
    }

    focus(payload: {id: number}){
        this.focusedNode = payload.id;
    }

    processFrame(){
        const currentFrame = this.getFrame(this.currentFrame);
        if(currentFrame){
            const animation = this.getAnimation(currentFrame.animation);
            if(animation){
                this[animation](currentFrame.payload);
                currentFrame.processed = true;
                this.visitedNodes.set(currentFrame.payload.id, currentFrame.payload.id);
                this.currentFrame++;
            }
        }
    }

    generateFrames(graph: any, alg:string, size: any, start: number, end: number){
        if(start && end){
            // if(alg = "bfs"){
            //
            // }
            try{
                // if(typeof graph[alg]);
                // console.log(graph[alg](start, end, size));
                let {frames, path} = graph[alg](start, end, size);
                this.frames = frames;
                this.solutionNodes.clear();
                if(path){
                    for (let i of path){
                        this.solutionNodes.set(i, i);
                    }
                }
                return frames;
            }
            catch(e){
                console.log(e);
            }
            return;
        }
    }
}

// bfs(startID: number, findID:number, size?: {height: number, width: number}){
//     animations?animations.push(new Animation("test", ()=>{})):"";
//
//     let visited = new Map();
//     type queueItem = number[];
//     let queue: queueItem[] = [];
//
//     //push the start vertex
//     queue.push([startID, -1]);
//
//     //while the queue has items
//     while(queue.length > 0){
//         //dequeue last item
//         let queuedItem = queue.pop();
//
//         //get currentIndex and lastIndex if they exist
//         let current, last;
//         if(queuedItem){
//             [current, last] = queuedItem;
//         }
//
//         //if the desired vertex is found print the path
//         if(current == findID){
//             let path = [current];
//             while(last > -1){
//                 path.unshift(last);
//                 last = visited.get(last);
//             }
//             return {length: path.length, path: path};
//         }
//
//         //for each of the edges in this iteration
//         let edges = this.get(current).getEdges(size, blockedids);
//         for(let edge of edges){
//             //if the edge is not visited and the edge is not queued queue
//             if(!visited.has(edge) && !queue.some(item => item[0]===edge)){
//                 queue.unshift([edge,current]);
//             }
//         }
//         visited.set(current, last);
//     }
//     return {length: 0};
// }