/*!

=========================================================
* BLK Design System PRO React - v1.2.0
=========================================================

* Product Page: https://www.creative-tim.com/product/blk-design-system-pro-react
* Copyright 2020 Creative Tim (https://www.creative-tim.com)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import {enableMapSet} from "immer";
// styles
import "@fortawesome/fontawesome-free/css/all.min.css";
import "assets/css/nucleo-icons.css";
import "assets/scss/blk-design-system-pro-react.scss?v1.2.0";
import "assets/demo/demo.css";
import "assets/demo/react-demo.css";

// presentation pages
import App from "./App";

enableMapSet();

ReactDOM.render(
    <App></App>,
  document.getElementById("root")
);
