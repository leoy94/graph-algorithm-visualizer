import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {enableMapSet} from "immer";

// styles
// import "@fortawesome/fontawesome-free/css/all.min.css";
// import "assets/css/nucleo-icons.css";
// import "assets/scss/blk-design-system-pro-react.scss?v1.2.0";
// import "assets/demo/demo.css";
// import "assets/demo/react-demo.css";

enableMapSet();

ReactDOM.render(

  <React.StrictMode>
    <div>Hello World</div>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
