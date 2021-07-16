import React from "react";

export function Cell(props: any){
    const {blockOrUnBlock, setStart, setEnd, clearFrames, animationCompleted, inSolution, focusedNode, visited, id, blocked, clearOnEdit, editCell, start, end} = props;

    let getBackgroundColor = (blocked: boolean, start: number, end: number) => {
        let backgroundColor = "#32325d";

        if (animationCompleted && inSolution && id !== start && id !== end) {
            backgroundColor = "yellow";
        }
        else if (id === focusedNode) {
            backgroundColor = "#ffd600"
        }

        else if (end === id || start === id) {
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
             onContextMenu={(e) => editCell(blockOrUnBlock, setStart, setEnd, clearFrames, clearOnEdit)(e, id)}
             onClick={(e) => editCell(blockOrUnBlock, setStart, setEnd, clearFrames, clearOnEdit)(e, id)}
             onMouseDown={(e) => editCell(blockOrUnBlock, setStart, setEnd, clearFrames, clearOnEdit)(e, id)}
             onMouseEnter={(e) => editCell(blockOrUnBlock, setStart, setEnd, clearFrames, clearOnEdit)(e, id)}
        >
            <div style={{
                backgroundColor: getBackgroundColor(blocked, start, end),
                width: "1vw",
                height: "1vw",
                minHeight: "15px",
                minWidth: "15px",
                fontSize: "10px",
                padding: "0",
                margin: "0",
                textAlign: "center"
            }}>
                {start === id ? "s" : ""}{end === id ? "e" : ""}
            </div>
        </div>

    );
}