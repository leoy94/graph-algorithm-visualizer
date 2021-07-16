import { immerable } from "immer";
import { IGameboard } from "./IGameboard";
import { AbsGameboard } from "./AbsGameboard";
import { IGameboardAnimator } from "../Animator/IGameboardAnimator";
import {ISize} from "./ISize";

enum algs {
    bfs,
    dfs,
}

export class Gameboard extends AbsGameboard implements IGameboard {
    [s: string]: any;

    [immerable] = true;

    public startVertexid: number = 1;
    public endVertexid: number = this.size.height * this.size.width;
    animator: IGameboardAnimator;

    public constructor(animator: IGameboardAnimator, name?: string, height?: number, width?: number) {
        super(name, height, width, algs);
        this.animator = animator;
        this.algs = algs;
        this.currentAlg = algs[algs.bfs];
        return this;
    }

    private reset(start: boolean, end: boolean, clearNodes: boolean, clearAnimations: boolean) {
        if (start) {
            this.startVertexid = 1;
            const node = this.gameboard.get(this.startVertexid);
            if (node) {
                node.unBlock();
            }
        }
        if (end) {
            this.endVertexid = this.size.height * this.size.width;
            const node = this.gameboard.get(this.endVertexid);
            if (node) {
                node.unBlock();
            }
        }
        if (clearNodes) this.gameboard.clearNodes();

        if (clearAnimations) this.animator.reset();
    }

    public changeSize(size: ISize): number {
        this.size = size;
        this.reset(true, true, true, true);
        return 0;
    }

    //action 1
    //generate frames is failing for some reason (prototype is working odd)
    public generateFrames(): number {
        this.reset(false, false, false, true);
        this.animator.generateFrames(this.gameboard, this.currentAlg, this.size, this.startVertexid, this.endVertexid);
        return 0;
    }

    //action 2
    public processNextFrame(): number {
        this.animator.processFrame();
        return 0;
    }

    //action 3
    public play(): number {
        this.animator.isPaused = false;
        if (this.animator.frames.size === 0) {
            this.animator.generateFrames(this.gameboard, this.currentAlg, this.size, this.startVertexid, this.endVertexid);
        }
        return 0;
    }

    //action 4
    public pause(): number{
        this.animator.isPaused = true;
        return 0;
    }

    //action 5
    public setAlg(alg: string): number {
        if (this.algs[alg]) {
            this.currentAlg = alg;
            this.reset(false, false, false, true);
        }
        else {
            return -1;
        }
        return 0;
    }

    private changeStartOrEnd(type: string = "start", newStartID: number) {
        let internalType = "startVertexid";
        if (type === "end") {
            internalType = "endVertexid";
        }

        try {
            let node = this.gameboard.get(newStartID);

            if (node) {
                this[internalType] = newStartID;
                node.unBlock();
                this.reset(false, false, false, true)
            } else {
                throw new Error("Vertex not found")
            }

        } catch (e) {
            console.log(e);
        }
    }

    public changeStart(newStartID: number): number {
        this.changeStartOrEnd("start", newStartID);
        return -1;
    }

    public changeEnd(newStartID: number): number {
        this.changeStartOrEnd("end", newStartID);
        return 0;
    }

    public blockCell(nodeID: number): number {
        if (nodeID === this.startVertexid) {
            this.reset(true, false, false, true);
        }
        if (nodeID === this.endVertexid) {
            this.reset(false, true, false, true);
        }
        const node = this.gameboard.get(nodeID);
        if (node) {
            node.toggleBlock();
        }
        else {
            return -1;
        }
        return 0;
    }
}