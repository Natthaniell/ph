/// <reference path="../../typings/index.d.ts" />
import * as React from "react";
import {connect} from 'react-redux';
import {getGraph} from './actions';

let Query = React.createClass({
    componentDidMount() {
        this.props.dispatch(getGraph('{user(id:"1"){name}}'));
    },
    render() {
        let dispatch = this.props.dispatch;
        let fetchInProgress = String(this.props.store.get('fetching'));
        let queryText;
        let user = this.props.store.get('data').toObject();
        console.warn(user);
        return (
        <div>
            <p>Fetch in progress: {fetchInProgress}</p>
        <h3>{ user.name }</h3>
            { name }
        <input ref={node => {queryText = node}}></input>
        <button onClick={() => {dispatch(getGraph(queryText.value))}}>
        query
        </button>
        </div>
    )
    }
});

const mapStateToProps = (state) => {
    return {
        store: state
    }
};

export const QueryContainer = connect(
    mapStateToProps
)(Query);