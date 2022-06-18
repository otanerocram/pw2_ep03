import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import App from "./App";
import TodoState from "./context/TodoContext";

ReactDOM.render(
    <React.StrictMode>
        <TodoState>
            <App />
        </TodoState>
    </React.StrictMode>,
    document.getElementById("root")
);
