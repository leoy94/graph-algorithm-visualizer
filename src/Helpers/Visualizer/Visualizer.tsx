import {IAdjList, AdjList} from "../AdjList/AdjList";
import {immerable} from "immer";
import {IAnimator, Animator, GraphAnimator} from "../Animations/Animator";

enum defAlgs {
    default
}

export interface IVisualizerCore {
    name: string;
    size: {
        height: number;
        width: number;
    }
    gameboard: IAdjList;

    algs?: any;
    currentAlg: string;

    animator?: GraphAnimator;
}

export abstract class AbsVisualizer implements IVisualizerCore {
    name: string = "default";
    public size = {
        height: 20,
        width: 20
    };
    [immerable] = true;

    createGameboard: () => IAdjList = () => {
        let gameBoard =  new AdjList();
        const {height, width} = this.size;
        const size = height * width;
        for(let i = 1; i <= size; i++){
            gameBoard.addVertex({blocked: false
            },i);
        }
        this.gameboard = gameBoard;
        return gameBoard;
    }

    gameboard: IAdjList = this.createGameboard();
    animations?: IAnimator;
    currentAlg: string = "bfs";
    algs: any = defAlgs;

    constructor(name?: string, height?: number, width?: number, algs?: any){
        // console.log(height, width);

        if(height && width){
            this.size.height = height;
            this.size.width = width;
        }

        if(algs){
            this.algs = algs;
        }

        if(name){
            this.name = name;
        }

        return this;
    }
}

enum algs {
    BFS,
    DFS,
}

interface IVisualizer extends AbsVisualizer {
    startVertexid?: number;
    endVertexid?: number;
}

export class Visualizer extends AbsVisualizer implements IVisualizer{
    startVertexid: number = 1;
    endVertexid:number = this.size.height*this.size.width;
    animator = new GraphAnimator();

    constructor(name?: string, height?: number, width?: number){
        super(name, height, width, algs);

        this.createGameboard();
        // this.animator.generateFrames(this.gameboard, "BFS", this.size, this.startVertexid, this.endVertexid);

        return this;
    }
}



