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
        this.props.dispatch(getGraph('goldberg', '{goldberg(id: 2) {id, character, actor, role, traits}}'));
    }

    /**
     * Render
     * @public
     */
    render() {
        let dispatch = this.props.dispatch;
        let fetchInProgress = String(this.props.store.get('fetching'));
        var goldberg : any = {};
        if(this.props.store.get('goldberg')){
            goldberg = this.props.store.get('goldberg').toObject();
        }
        // let goldberg = this.props.store.get('goldberg').toObject();
        return (
            <div>
                <p>Fetch in progress: {fetchInProgress}</p>
                <h3>{ goldberg.character }</h3>
                <p>{ goldberg.actor }</p>
                <p>{ goldberg.role }</p>
                <p>{ goldberg.traits }</p>
            </div>
        )
    }
}
