/// <reference path="../../typings/index.d.ts" />
import * as React from "react";
import * as ReactDOM from "react-dom";
import {createStore, applyMiddleware } from "redux";
import {Provider} from "react-redux";
import {queryReducer} from "./reducer";
import thunk from "redux-thunk";

// modules
import {CoreComponent} from "./core/component";
import {MovieList} from "./modules/movie-list";
var MovieStore = MovieList.connect();
import {Query} from "./modules/query";
var QueryStore = Query.connect();


class Main extends CoreComponent {
    render() {
        return (
            <div>
                <h1>Phoenix</h1>
                <QueryStore />
                <MovieStore />
            </div>
        );
    }
}

const store = createStore(
    queryReducer,
    applyMiddleware(thunk)
)

ReactDOM.render(
    <Provider store={store}>
        <Main />
    </Provider>,
    document.getElementById('app')
);
