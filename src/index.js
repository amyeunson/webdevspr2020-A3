import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/styles.css";
import { Provider } from "react-redux";
import { createStore } from "redux"
import App from "./views/App";
import indexReducer from "./redux/reducers/index"

const store = createStore(indexReducer)
const rootElement = document.getElementById("root");
ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    rootElement
);
