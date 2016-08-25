/// <reference path="../../../typings/index.d.ts" />
import * as React from "react";
import {connect} from 'react-redux';

export abstract class CoreComponent extends React.Component<any, any> {

    /**
     * Connect Query Component with a store
     * @static
     * @example:
     * import {Query} from "./modules/query";
     * var QueryStore = Query.connect();
     * @returns React component
     */
    static connect(ChildClass) {
        return connect(
            (state) => {
                return {
                    store: state
                }
            }
        )(ChildClass);
    }

    /**
     * Implement render() method
     */
    abstract render();

}
