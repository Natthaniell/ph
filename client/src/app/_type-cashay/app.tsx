/// <reference path="../../../typings/index.d.ts" />
// Import external libraries
import * as React from "react";
import {render} from 'react-dom';
import App from './App';
// import CashayBook from './CashayBook';
import {createStore, compose, combineReducers} from 'redux'
import {Provider} from 'react-redux';
import {cashay, cashayReducer, HTTPTransport} from 'cashay';
// import gqlSchema from './schema.js';
// const clientSchema = require('cashay!./getSchema.js');
// import {graphql} from 'graphql';
import {CoreComponent} from "../core/component";

/********************************
 * **
 * **
 *
 * UNDER DEVELOPMENT:
 * - store is fu*** up :)
 *
 * **
 * **
 */


const rootReducer = combineReducers({
    cashay: cashayReducer
});

const transport = new HTTPTransport('/graphql');

// const store = createStore(rootReducer, {}, compose(
//     devtoolsExt || (f => f)
// ));

const store = createStore(rootReducer, {});

console.error('-store-');
console.warn(store);

cashay.create({
    store,
    schema: {},
    idFieldName: '_id',
    paginationWords: {before: 'beforeCursor', after: 'afterCursor'},
    transport
});


export default class CashayApp extends CoreComponent{

    static store = store;

    render() {
        return (
            <div>
                <hr />
                <h1>App Cashay</h1>
            </div>
        );
    }
}