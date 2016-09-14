/// <reference path="../../typings/index.d.ts" />
import * as React from "react";
import * as ReactDOM from "react-dom";
import {createStore, applyMiddleware, compose, combineReducers } from "redux";
import {Provider} from "react-redux";
import {queryReducer} from "./reducer";
import thunk from "redux-thunk";

// modules
import {CoreComponent} from "./core/component";
import {MovieList} from "./modules/movie-list";
var MovieStore = MovieList.connect();
import {Query} from "./modules/query";
var QueryStore = Query.connect();


/**
 * Cashay main,
 * - implements store as cashay
 */
import {cashayReducer} from 'cashay';
const rootReducer = combineReducers({cashay: cashayReducer});

class MainCashay extends CoreComponent {

    static store = createStore(rootReducer, {});

    render() {
        return (
            <div>
                <h1>Phoenix Cashay</h1>
            </div>
        );
    }
}

/**
 * Redux main,
 * - implements store as redux
 */
class Main extends CoreComponent {

    static store = createStore(
        queryReducer,
        applyMiddleware(thunk)
    )

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



ReactDOM.render(
    <div>
        <Provider store={Main.store}>
            <Main />
        </Provider>
        <Provider store={MainCashay.store}>
            <MainCashay />
        </Provider>,
    </div>,
    document.getElementById('app')
);
