/// <reference path="../../../../typings/index.d.ts" />
import * as React from "react";
import {getGraph} from '../actions';
import {CoreComponent} from "../../core/component";

/**
 * @module
 * Movie list module
 */
export class MovieList extends CoreComponent {

    /**
     * Connect Query Component with a store
     * @static
     * @example:
     * import {Query} from "./modules/query";
     * var QueryStore = Query.connect();
     * @returns React component
     */
    static connect() {
        return super.connect(MovieList);
    }

    protected componentDidMount() {
        this.props.dispatch(getGraph('movies', '{movies(id: 1) {id, title}}'));
    }

    render() {
        var movie: any = {};
        if (this.props.store.get('movies')) {
            movie = this.props.store.get('movies').toObject();
        }
        console.error('-- movies ----');
        console.info(movie);
        return (
            <div>
                <h1>Movie List</h1>
                <p>{movie.title}</p>
            </div>
        );
    }


}