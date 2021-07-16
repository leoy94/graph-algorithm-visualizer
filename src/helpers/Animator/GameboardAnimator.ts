import { AbsAnimator } from "./AbsAnimator";
import { IGameboardAnimator } from "./IGameboardAnimator";
import { IAdjList } from "../AdjList/IAdjList";
import {Algs} from "../Algs/Algs";
import {IFrame} from "./IFrame";

export class GameboardAnimator extends AbsAnimator implements IGameboardAnimator {
    [s: string]: null | any;
    public focusedNode: number | null = null;

    //could have stored this in the vertex payload but with this config we can access O(1) lookup
    //rather than having to search through the adjacency list at 0(n^2) on each vertex
    public visitedNodes = new Map<number, number>();
    public solutionNodes = new Map<number, number>();

    public isLastFrame(frameID: number): boolean {
        let condition = this.frames.size === frameID ? true : false;
        return condition;
    }

    public reset(): number {
        this.focusedNode = null;
        this.currentFrame = 0;
        this.frames.clear();
        this.solutionNodes.clear();
        this.visitedNodes.clear();
        this.isPaused = true;
        return 0;
    }

    public focus(payload: { id: number }):number {
        this.focusedNode = payload.id;
        return 0;
    }

    public processFrame(): number {
        const currentFrame = this.getFrame(this.currentFrame);
        const isLastFrame: boolean = this.isLastFrame(this.currentFrame);
        if (isLastFrame) {
            this.isPaused = true;
            return 0;
        }

        if (currentFrame) {
            currentFrame.processed = true;
            this.visitedNodes.set(currentFrame.payload.id, currentFrame.payload.id);
            this.currentFrame++;
        }
        return 0;
    }

    public generateFrames(graph: IAdjList, alg: string, size: any, start: number, end: number): number | Map<number, IFrame>{
        if (start && end) {

            try {
                let { frames, path } = Algs.prototype[alg](graph, start, end, size);

                if (!frames) {
                    throw new Error("No Frames Generated");
                }
                this.frames = frames;
                if (path) {
                    for (let i of path) {
                        this.solutionNodes.set(i, i);
                    }
                }
                return frames;
            }
            catch (e) {
                console.log(e);
                return -1;
            }

        }
        else{
            return -1;
        }
    }
}