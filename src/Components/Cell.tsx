import React from "react";
import {connect, useSelector} from "react-redux";
import {actions} from "../Redux/Actions/actionTypes"

function editCell (blockOrUnBlock: any, setStart: any, setEnd: any, clearFrames: any, clear: boolean) {
    return (e: {button: number, buttons: number, preventDefault: () => void, type: string, ctrlKey: boolean },id: number) => {
        if(e.type === 'mousedown' || e.type === "mouseenter"){
            if(e.ctrlKey && e.buttons===1){
                e.preventDefault();

                blockOrUnBlock(id);
                if(clear) clearFrames();
            }
        }
        else if(e.type === "contextmenu"){
            // console.log("set end", e.type, "rightClick", "id", id);
            e.preventDefault();
            setEnd(id);
            if(clear) clearFrames();
        }
        else if (e.type === 'click') {
            if(e.button === 0 && !e.ctrlKey){
                // console.log("set start", e.type,"leftClick", "id", id);
                setStart(id);
                if(clear) clearFrames();
            }
        }
    };
}

function Cell(props: {id: number, blockOrUnBlock?: any, setStart?: any, setEnd?: any, clearFrames?: any}): JSX.Element {
    let nbsp = String.fromCharCode(160);
    const {id} = props;

    const {blocked, start, end, focusedNode, visited, inSolution, clearOnEdit} = useSelector(
        (state: {gameboard: any, startVertexid: number, endVertexid: number, animator: any }) => {
            return ({
                blocked:  state.gameboard.get(id).payload.blocked,
                start: state.startVertexid,
                end: state.endVertexid,
                focusedNode: state.animator.focusedNode,
                visited: state.animator.visitedNodes.has(id),
                inSolution: state.animator.solutionNodes.has(id),
                clearOnEdit: state.animator.frames.size > 0
            });
        });

    let getBackgroundColor = (blocked: boolean, start: number, end: number) => {
        let backgroundColor = "#32325d";

        if(end === focusedNode && inSolution && id!=start && id!=end){
            backgroundColor = "#2dce89";
        }
        else if(id === focusedNode && end !==focusedNode){
            backgroundColor = "#ffd600"
        }
        // else if(start === id){
        //     backgroundColor = "#e14eca"
        // }
        else if(end === id || start === id) {
            backgroundColor = "lightcoral"
        }
        else if (visited) {
            backgroundColor = "#11cdef"
        }
        else if (blocked) {
            backgroundColor = "#e14eca"
        }
        return backgroundColor;
    }

    return (
        <div className={"cell"}
             onContextMenu={(e) => editCell(props.blockOrUnBlock, props.setStart, props.setEnd, props.clearFrames, clearOnEdit)(e, id)}
             onClick={(e) =>  editCell(props.blockOrUnBlock, props.setStart, props.setEnd, props.clearFrames, clearOnEdit)(e, id)}
             onMouseDown={(e) =>  editCell(props.blockOrUnBlock, props.setStart, props.setEnd, props.clearFrames, clearOnEdit)(e, id)}
             onMouseEnter={(e) =>  editCell(props.blockOrUnBlock, props.setStart, props.setEnd,props.clearFrames, clearOnEdit)(e, id)}
             >
            <div style={{
                backgroundColor: getBackgroundColor(blocked, start, end),
                width:  "1vw",
                height: "1vw",
                minHeight: "15px",
                minWidth:"15px",
                fontSize: "10px",
                padding: "0",
                margin: "0",
                textAlign: "center"
            }}>
                {start===id ? "s": ""}{end===id ? "e": ""}
            </div>
        </div>
    );
}


function mapStateToProps(state: any, props: {id: number, payload?: {blocked?: boolean} }): any {
    return ({
        ...props,
    });
}

function mapDispatchToProps(dispatch: any){
    return ({
        blockOrUnBlock: (id:number) => dispatch({type: actions.blockOrUnblockCell,payload: {id}}),
        setStart: (id: number) => dispatch({type: actions.setStart, payload: {id}}),
        setEnd: (id: number) => dispatch({type: actions.setEnd, payload: {id}}),
        clearFrames: () => dispatch({type: actions.clearFrames})
    });
}

export default connect(mapStateToProps, mapDispatchToProps)(Cell);