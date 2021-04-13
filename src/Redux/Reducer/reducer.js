import produce from "immer";
import {actions} from "../Actions/actionTypes"
import {Visualizer} from "../../Helpers/Visualizer/Visualizer";

export const reducer = (state = {}, action) => {
    let nextState;
    // console.log(state);
    switch(action.type) {
        case actions.createGraph:
            return new Visualizer("Graph Visualizer", action.payload.height, action.payload.width);
        case actions.generateFrames:
            nextState  = produce(state, draftState => {
                draftState.animator.generateFrames(state.gameboard,draftState.currentAlg, draftState.size, draftState.startVertexid, draftState.endVertexid);
                draftState.animator.currentFrame = 0;
                draftState.animator.visitedNodes.clear();
                draftState.animator.isPaused = true;
                draftState.animator.focusedNode = null;
            })
            return nextState;
        case actions.processNextFrame:
            //removed immer wrapper to try to address slowness to no avail.
            state.animator.processFrame();
            return state;
        case actions.play:
            nextState  = produce(state, draftState => {
                draftState.animator.isPaused = false
                if(draftState.animator.frames.size === 0){
                    draftState.animator.generateFrames(state.gameboard,draftState.currentAlg, draftState.size, draftState.startVertexid, draftState.endVertexid);
                }
            })

            return nextState;
        case actions.pause:
            // nextState  = produce(state, draftState => {
            //     draftState.animator.isPaused = true;
            // })
            state.animator.isPaused = true;
            return state;
        case actions.resetAnimator:
            nextState = produce(state, draftState => {
                draftState.animator.currentFrame = 0;
                draftState.animator.focusedNode = null;
                draftState.animator.visitedNodes.clear();
                draftState.animator.isPaused = true;
            })
            return nextState;
        case actions.clearFrames:
            nextState = produce(state, draftState => {
                draftState.animator.currentFrame = 0;
                draftState.animator.focusedNode = null;
                draftState.animator.frames.clear();
                draftState.animator.solutionNodes.clear()
                draftState.animator.visitedNodes.clear();
                draftState.animator.isPaused = true;
            })

            return nextState;
        case actions.setAlg:
            nextState = produce(state, draftState => {
                draftState.currentAlg = action.payload.alg;
                draftState.animator.currentFrame = 0;
                draftState.animator.focusedNode = null;
                draftState.animator.frames.clear();
                draftState.animator.solutionNodes.clear()
                draftState.animator.visitedNodes.clear();
                draftState.animator.isPaused = true;
            })
            // console.log(nextState);
            return nextState;
        case actions.setStart:
            nextState  = produce(state, draftState => {
                draftState.startVertexid = action.payload.id;
                let blocked = draftState.gameboard.get(action.payload.id).payload.blocked;
                if(blocked === true){
                    blocked = false;

                    //need to reset as bool is immutable
                    draftState.gameboard.get(action.payload.id).payload.blocked = blocked;
                }
                if(draftState.start === draftState.end){
                    draftState.end = null;
                }

            })
            // console.log(nextState);
            return nextState;
        case actions.setEnd:
            nextState = produce(state, draftState => {
                draftState.endVertexid = action.payload.id;
                let blocked = draftState.gameboard.get(action.payload.id).payload.blocked;
                if(blocked === true){
                    blocked = false;
                    draftState.gameboard.get(action.payload.id).payload.blocked = blocked;
                }

                if(draftState.start === draftState.end){
                    draftState.start = null;
                }
            })
            return nextState;
        case actions.blockOrUnblockCell:
            nextState = produce(state, draftState => {
                let node = draftState.gameboard.get(action.payload.id);
                node.payload.blocked = node.payload.blocked? false: true;
                // console.log("reducer", node.payload.blocked);
                if(action.payload.id === draftState.start){
                    draftState.start = null;
                }
                else if(action.payload.id === draftState.end){
                    draftState.end = null;
                }
            });
            // console.log(nextState);
            return nextState;
        default:
            return new Visualizer("Graph Visualizer");
    }
}