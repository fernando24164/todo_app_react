import React from "react";
import {render} from "react-dom";
import {createStore} from "redux"
import {Provider} from "react-redux"
import "bootstrap/dist/css/bootstrap.min.css"
import App from "./components/App.jsx"
import todos from "./reducers/todos"

const store = createStore(todos)

render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);
