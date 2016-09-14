/// <reference path="../../../typings/index.d.ts" />
import * as React from "react";
import {CoreComponent} from "../core/component";
import {cashay} from 'cashay';
import * as uuid from 'node-uuid';

console.error('--- start 2 ---');

export default class CreateComment extends CoreComponent {
    constructor(props) {
        super(props);
        this.state = {content: ''};
    }

    render() {
        return (
            <div className="newComment">
                <span>New Comment:</span>
                <input onChange={this.handleChange} type="text" value={this.state.content}/>
                <button onClick={this.handleSubmit}>Post!</button>
            </div>
        )
    }

    handleChange = event => {
        this.setState({content: event.target.value.substr(0, 140)});
    }

    handleSubmit = () => {
        const variables = {
            content: this.state.content,
            postId: this.props.postId,
            _id: uuid.v4()
        };
        this.setState({content: ''});
        cashay.mutate('createComment', {variables, components: {comments: variables.postId}})
    }
}