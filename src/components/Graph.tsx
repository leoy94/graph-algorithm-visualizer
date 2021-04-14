import React from 'react';
import {connect} from "react-redux";
import Cell from "../components/Cell";
import VGraph from "../views/IndexSections/Graph.js";

//need to figure out a way to do this in nlogn or n
function createRows(size: any){
    let current = 0;
    let rows = [];
    let count:number = 1;

    while(current < size.height){
       let currentRow = [];
       while(count <= (current + 1) * size.width){
           let newCell: JSX.Element | null = <Cell id={count} key={count}></Cell>;
           currentRow.push(newCell);
           count++;
           newCell = null;
       }
       rows.unshift(currentRow);
       currentRow = [];
       current++;
    }

    return rows.map((row,index) => {
        return (
            <div className={"row"} key={"Row " + index}>
                {row}
            </div>
        );
    });

}

function Graph (props: any): JSX.Element{

        return (
            <VGraph createRows={createRows} size={props.size}></VGraph>
        );
}

function mapStateToProps(state: {size?: {height: number, width: number}, gameboard?: any}): any {
    // console.log(state);
    return ({
        size: state.size,
    });
}

function mapDispatchToProps(dispatch: any){
    return ({});
}

export default connect(mapStateToProps, mapDispatchToProps)(Graph);