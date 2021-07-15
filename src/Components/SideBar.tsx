import { connect, useSelector } from 'react-redux';
import { useState } from "react";
import { actions } from "../Redux/Actions/actionTypes"
import VSideBar from "../views/IndexSections/SideBar.js"

function SideBar(props: any): JSX.Element {
    const [size, setSize] = useState({ height: 5, width: 5 });
    const handleSizeChange = (size: { height: number, width: number }) => {
        setSize({ ...size });
    }

    const setAlg = (value: any) => props.setAlg(value);
    const handlePlay = props.play;
    const handlePause = props.pause;
    const handleReset = props.resetAnimator;

    const isPaused = useSelector((state: any) => state.animator.isPaused);

    const submitSizeChange = (e: any) => {
        console.log("Generated New Graph!");
        e.preventDefault();
        props.createGameBoard(size);
    };

    return (
        <VSideBar
            size={size}
            handleSizeChange={handleSizeChange}
            submitSizeChange={submitSizeChange}
            setAlg={setAlg}
            alg={props.currentAlg}
            isPaused={isPaused}
            handlePlay={handlePlay}
            handlePause={handlePause}
            handleReset={handleReset}
        />
    );
}

function mapStateToProps(state: { currentAlg: string, size: { height: number, width: number }, animator: { currentFrame: number, isPaused: boolean } }): any {
    return ({
        size: state.size,
        currentFrame: state.animator.currentFrame,
        isPaused: state.animator.isPaused,
        alg: state.currentAlg
    });
}

function mapDispatchToProps(dispatch: any) {
    return ({
        createGameBoard: (size: { height: number, width: number }) => dispatch({ type: actions.createGraph, payload: { ...size } }),
        pause: () => dispatch({ type: actions.pause }),
        play: () => dispatch({ type: actions.play }),
        resetAnimator: () => dispatch({ type: actions.resetAnimator }),
        setAlg: (alg: string) => dispatch({ type: actions.setAlg, payload: { alg: alg } })
    });
}


export default connect(mapStateToProps, mapDispatchToProps)(SideBar);

