import React from "react";
import { connect, useSelector } from "react-redux";
import { actions } from "../Redux/Actions/actionTypes";
import {Cell as VCell} from "../views/IndexSections/Cell";

function editCell(blockOrUnBlock: any, setStart: any, setEnd: any, clearFrames: any, clear: boolean) {
    return (e: { button: number, buttons: number, preventDefault: () => void, type: string, ctrlKey: boolean }, id: number) => {
        if (e.type === 'mousedown' || e.type === "mouseenter") {
            if (e.ctrlKey && e.buttons === 1) {
                e.preventDefault();

                blockOrUnBlock(id);
                if (clear) clearFrames();
            }
        }
        else if (e.type === "contextmenu") {
            // console.log("set end", e.type, "rightClick", "id", id);
            e.preventDefault();
            setEnd(id);
            if (clear) clearFrames();
        }
        else if (e.type === 'click') {
            if (e.button === 0 && !e.ctrlKey) {
                // console.log("set start", e.type,"leftClick", "id", id);
                setStart(id);
                if (clear) clearFrames();
            }
        }
    };
}

function Cell(props: { id: number, blockOrUnBlock?: any, setStart?: any, setEnd?: any, clearFrames?: any }): JSX.Element {
    let nbsp = String.fromCharCode(160);
    const { id } = props;

    //use selector hook allows extract of redux store state
    const { blocked, start, end, focusedNode, animationCompleted, visited, inSolution, clearOnEdit } = useSelector(
        (state: { gameboard: any, startVertexid: number, endVertexid: number, animator: any }) => {
            const animationCompleted = state.animator.currentFrame === state.animator.frames.size ? true : false;
            return ({
                blocked: state.gameboard.get(id).payload.blocked,
                start: state.startVertexid,
                end: state.endVertexid,
                focusedNode: state.animator.focusedNode,
                visited: state.animator.visitedNodes.has(id),
                inSolution: state.animator.solutionNodes.has(id),
                animationCompleted,
                clearOnEdit: state.animator.frames.size > 0
            });
        });

    return (
            <VCell
                blockOrUnBlock={props.blockOrUnBlock}
                setStart={props.setStart}
                setEnd={props.setEnd}
                clearFrames={props.clearFrames}
                id={props.id}
                blocked={blocked}
                clearOnEdit={clearOnEdit}
                animationCompleted={animationCompleted}
                inSolution={inSolution}
                focusedNode={focusedNode}
                visited={visited}
                editCell={editCell}
                start={start}
                end={end}
            />
    );
}


function mapStateToProps(state: any, props: { id: number, payload?: { blocked?: boolean } }): any {
    return ({
        ...props,
    });
}

function mapDispatchToProps(dispatch: any) {
    return ({
        blockOrUnBlock: (id: number) => dispatch({ type: actions.blockOrUnblockCell, payload: { id } }),
        setStart: (id: number) => dispatch({ type: actions.setStart, payload: { id } }),
        setEnd: (id: number) => dispatch({ type: actions.setEnd, payload: { id } }),
        clearFrames: () => dispatch({ type: actions.clearFrames })
    });
}

export default connect(mapStateToProps, mapDispatchToProps)(Cell);