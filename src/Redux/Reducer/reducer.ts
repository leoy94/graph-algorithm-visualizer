import produce from "immer";
import { actions } from "../Actions/actionTypes"
import { Gameboard } from "../../helpers/Gameboard/Gameboard";
import { IGameboard } from "../../helpers/Gameboard/IGameboard";
import { GameboardAnimator } from "../../helpers/Animator/GameboardAnimator";

function createGameBoard(name?: string, height?: number, width?: number) {
    return new Gameboard(new GameboardAnimator(), name, height, width);
}

export const reducer = (state: Gameboard = createGameBoard(), action: any) => {
    let nextState;

    switch (action.type) {
        case actions.createGraph:
            return createGameBoard("Graph Visualizer", action.payload.height, action.payload.width);
        case actions.generateFrames:
            nextState = produce(state, draftState => {
                draftState.generateFrames();
            })
            return nextState;
        case actions.processNextFrame:
            nextState = produce(state, draftState => {
                draftState.processNextFrame();
            })
            return nextState;
        case actions.play:
            //some issue with immer and maps 
            //extended methods do not appear in the prototype 
            //researching 7/14
            // nextState = produce(state, draftState => {
            state.play();

            //})
            return state;
        case actions.pause:
            nextState = produce(state, draftState => {
                draftState.pause();
            })
            return nextState;
        case actions.resetAnimator:
            nextState = produce(state, draftState => {
                draftState.reset(false, false, false, true);
            })
            return nextState;
        //to do
        case actions.clearFrames:
            nextState = produce(state, draftState => {
                draftState.reset(false, false, false, true);
            })
            return nextState;
        case actions.setAlg:
            nextState = produce(state, draftState => {
                draftState.setAlg(action.payload.alg);
            })
            return nextState;
        case actions.setStart:
            nextState = produce(state, draftState => {
                draftState.changeStart(action.payload.id);
            })
            return nextState;
        case actions.setEnd:
            nextState = produce(state, draftState => {
                draftState.changeEnd(action.payload.id);
            })
            return nextState;
        case actions.blockOrUnblockCell:
            nextState = produce(state, draftState => {
                draftState.blockCell(action.payload.id);
            });
            return nextState;
        default:
            return createGameBoard();
    }
}