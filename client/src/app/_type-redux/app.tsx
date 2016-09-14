/// <reference path="../../../typings/index.d.ts" />
// Import external libraries
import * as React from "react";
import {createStore, applyMiddleware, compose, combineReducers } from "redux";
import {queryReducer} from "./reducer";
import thunk from "redux-thunk";

// Import core components
import {CoreComponent} from "../core/component";

// Import modules
import {MovieList} from "./modules/movie-list";
var MovieStore = MovieList.connect();
import {Query} from "./modules/query";
var QueryStore = Query.connect();

/**
 * Redux main,
 * - implements store as redux
 */
export default class ReduxApp extends CoreComponent {

    static store = createStore(
        queryReducer,
        applyMiddleware(thunk)
    )

    render() {
        return (
            <div>
                <hr />
                <h1>App Redux</h1>
                <QueryStore />
                <MovieStore />
            </div>
        );
    }
}