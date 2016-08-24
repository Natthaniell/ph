/// <reference path="../../typings/index.d.ts" />
import * as React from "react";
import * as ReactDOM from "react-dom";
import {createStore, applyMiddleware } from "redux";
import {Provider} from "react-redux";
import {queryReducer} from "./reducer";
import thunkMiddleware from "redux-thunk";
import {QueryContainer} from "./query";


class Main extends React.Component {

    private number : number;

    render() {
        return (
            <div>
                <h1>Phoenix</h1>
                <QueryContainer />
            </div>
        );
    }
}

const createStoreWithMiddleware = applyMiddleware(thunkMiddleware)(createStore);

ReactDOM.render(
    <Provider store={createStoreWithMiddleware(queryReducer)}>
        <Main />
    </Provider>,
    document.getElementById('app')
);

// $(document).ready(() => {
//
//     var query = '{user(id:"1"){name}}';
//     query = encodeURI(query);
//
//     $.ajax({
//         method : 'GET',
//         url : '/graphql?query=' + query,
//         dataType: 'json',
//         success: (data) => {
//             console.warn('success');
//             console.info(data);
//         }
//     });
//
//
// });