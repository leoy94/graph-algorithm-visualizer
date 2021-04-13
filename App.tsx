import React from 'react';
import './App.css';
import Graph from "./Components/Graph";
import SideBar from "./Components/SideBar";
import {store} from "./Redux/Store/store";
import {Provider} from "react-redux";
import {actions} from "./Redux/Actions/actionTypes";


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
  let nbsp = String.fromCharCode(160);
    const wrapper = React.useRef(null);
    React.useEffect(() => {
        document.documentElement.scrollTop = 0;
        document.scrollingElement.scrollTop = 0;
        wrapper.current.scrollTop = 0;
        document.body.classList.add("index-page");
        return function cleanup() {
            document.body.classList.remove("index-page");
        };
    }, []);

  return (
    <div>
        <Provider store={store}>
        <SideBar></SideBar>
        <Graph></Graph>
        </Provider>
    </div>

  );
}

export default App;
