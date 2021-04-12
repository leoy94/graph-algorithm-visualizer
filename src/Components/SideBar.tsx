import React from 'react';
import {connect} from 'react-redux';
import {useState} from "react";
import {actions} from "../Redux/Actions/actionTypes"


function SideBar(props: any): JSX.Element {
    const [size, setSize] = useState({height: 5, width: 5});

    return (
        <div>
            {/*instructions*/}
            <div style={{display: "flex"}}>
                <ol style={{
                    margin: "0",
                    marginTop: "15px",
                    marginLeft: "50px",
                    padding: "0",
                    textAlign: "left",
                    color: "red"
                }}>
                    <li>Set Start
                        <ul><li><span>Left-click a cell</span></li></ul>
                    </li>
                    <li>Set End
                        <ul><li><span>Right-click a cell</span></li></ul>
                    </li>
                    <li>Block/Unblock Cells
                        <ul><li><span>Left-click + Hold-down CTRL + drag cursor over cells</span></li></ul>
                    </li>
                </ol>
            </div>

            {/*dimensions*/}
            <div style={{display: "flex", padding: "0"}} >
                <form style={{
                    margin: "0",
                    padding: "0",
                    marginTop: "15px",
                    marginLeft: "35px",
                }}
                      onSubmit={ (e) => {
                          console.log("Generated New Graph!");
                          e.preventDefault();
                          props.createGameBoard(size);

                      }}>
                    <input style={{maxWidth: "50px", marginRight: "5px"}} type="text" placeholder={"height"} onChange={(e) => {
                            let newHeight = parseInt(e.target.value);
                            setSize({...size, height: newHeight});
                        }
                    }/>
                    <input style={{maxWidth: "50px", marginRight: "5px"}} type="text" placeholder={"width"} onChange={(e) => {
                            let newWidth = parseInt(e.target.value);
                            setSize({...size, width: newWidth});
                        }
                    }/>
                    <input type="submit" value="Generate"/>
                </form>

            </div>

            {/*algorithm*/}

            <div style={{display: "flex", padding: "0"}}>


            </div>

            {/*animations*/}
            <div style={{display: "flex", padding: "0"}}>
                <div style={{
                    // display: "flex",
                    // flexDirection: "column",
                    // justifyContent: "center",
                    margin: "0",
                    padding: "0",
                    marginTop: "15px",
                    marginLeft: "35px"
                }}
                >
                    <select name="algorithms" onChange={(e) => props.setAlg(e.target.value)}>
                        <option value="bfs">bfs</option>
                        <option value="dfs">dfs</option>
                        <option value="Bi-Dir">Bi-Dir</option>
                    </select>
                </div>
                <div style={{
                    // display: "flex",
                    // flexDirection: "column",
                    // justifyContent: "center",
                    margin: "0",
                    padding: "0",
                    marginTop: "15px",
                    marginLeft: "5px"
                }}>
                    <button onClick={props.play}>Play</button>
                    <button onClick={props.pause}>Pause</button>
                    <button onClick={props.resetAnimator}>Reset</button>
                    {/*<button onClick={props.processNext}>Next</button>*/}
                </div>
            </div>
        </div>
    );
}

function mapStateToProps(state: {size: {height: number, width: number}, animator: {currentFrame: number, isPaused: boolean}}): any {
    return ({
        size: state.size,
        currentFrame: state.animator.currentFrame,
        isPaused: state.animator.isPaused
    });
}

function mapDispatchToProps(dispatch: any){
    return ({
        createGameBoard: (size: {height: number, width: number}) => dispatch({type: actions.createGraph, payload: {...size}}),
        pause: () => dispatch({type: actions.pause}),
        play: () => {dispatch({type: actions.play})},
        // generateFrames: () => dispatch({type: actions.generateFrames})
        resetAnimator: () => dispatch({type: actions.resetAnimator}),
        setAlg: (alg:string) => dispatch({type: actions.setAlg, payload: {alg: alg}})
    });
}


export default connect(mapStateToProps, mapDispatchToProps)(SideBar);

