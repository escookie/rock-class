import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import AppClass from "./AppClass";

ReactDOM.render(
  <React.StrictMode>
    <AppClass />
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();