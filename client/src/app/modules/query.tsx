/// <reference path="../../../typings/index.d.ts" />
import * as React from "react";
import {getGraph} from '../actions';
import {CoreComponent} from "../core/component";

/**
 * @module
 * Query module
 */
export class Query extends CoreComponent {

    /**
     * Connect Query Component with a store
     * @static
     * @example:
     * import {Query} from "./modules/query";
     * var QueryStore = Query.connect();
     * @returns React component
     */
    static connect() {
        return super.connect(Query);
    }

    /**
     * On component mount
     * @protected
     */
    protected componentDidMount() {
        this.props.dispatch(getGraph("{goldberg(id: 2) {id, character, actor, role, traits}}"));
    }

    /**
     * Render
     * @public
     */
    render() {
        let dispatch = this.props.dispatch;
        let fetchInProgress = String(this.props.store.get('fetching'));
        let queryText;
        let goldberg = this.props.store.get('data').toObject();
        console.warn(goldberg);
        return (
            <div>
                <p>Fetch in progress: {fetchInProgress}</p>
                <h3>{ goldberg.character }</h3>
                <p>{ goldberg.actor }</p>
                <p>{ goldberg.role }</p>
                <p>{ goldberg.traits }</p>
                <input ref={node => {queryText = node}}></input>
                <button onClick={() => {dispatch(getGraph(queryText.value))}}>
                    query
                </button>
            </div>
        )
    }
}
