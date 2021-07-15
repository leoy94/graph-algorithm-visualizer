import { AbsAnimator } from "./AbsAnimator";
import { IGameboardAnimator } from "./IGameboardAnimator";
import { IAdjList } from "../AdjList/IAdjList";

export class GameboardAnimator extends AbsAnimator implements IGameboardAnimator {
    [s: string]: null | any;
    focusedNode: number | null = null;
    visitedNodes = new Map<number, number>();
    solutionNodes = new Map<number, number>();

    reset() {
        this.focusedNode = null;
        this.currentFrame = 0;
        this.frames.clear();
        this.solutionNodes.clear();
        this.visitedNodes.clear();
        this.isPaused = true;
    }

    focus(payload: { id: number }) {
        this.focusedNode = payload.id;
    }

    isLastFrame(frameID: number): boolean {
        let condition = this.frames.size === frameID ? true : false;
        return condition;
    }

    processFrame() {
        const currentFrame = this.getFrame(this.currentFrame);
        const isLastFrame: boolean = this.isLastFrame(this.currentFrame);
        if (isLastFrame) {
            this.isPaused = true;
            return;
        }

        if (currentFrame) {
            currentFrame.processed = true;
            this.visitedNodes.set(currentFrame.payload.id, currentFrame.payload.id);
            this.currentFrame++;
        }

    }

    public generateFrames(graph: IAdjList, alg: string, size: any, start: number, end: number) {
        if (start && end) {
            try {
                let { frames, path } = graph[alg](start, end, size);

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
            }
            return;
        }
    }
}