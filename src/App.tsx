import React from 'react';
import './App.css';
import Graph from "./components/Graph";
import SideBar from "./components/SideBar";
import {store} from "./Redux/Store/store";
import {Provider} from "react-redux";
import {actions} from "./Redux/Actions/actionTypes";
import VApp from "./views/App.js";


//this is used to play and pause without having to rely on the useEffect Hook
//request animation frame is used instead of setTimeout as it fails around 10ms.
//when the condition is satisfied an action is dispatched that calls
// the reducer that processes the next frame
let animatorEventTrigger = async () => {
    const unsubscribe = store.subscribe(() => {
        const {isPaused} = store.getState().animator;
        if (isPaused === false) {
            requestAnimationFrame(() => store.dispatch({type: actions.processNextFrame}))
        }
    });
    return unsubscribe;
}

//used to envoke Trigger
//returns a lamda that unsuscribes from the reduxStore
let unsuscribe = animatorEventTrigger();

function App(): JSX.Element {
  return (
    <div className="index-page" style={{
      // backgroundColor: "#282c34",
      height: "100vh",
      color: "white",
      display: "flex"
    }}>
        <Provider store={store}>
        <VApp SideBar={SideBar} Graph={Graph}></VApp>
        </Provider>
    </div>

  );
}

export default App;
