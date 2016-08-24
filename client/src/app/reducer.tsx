/// <reference path="../../typings/index.d.ts" />
import {Map} from 'Immutable';

const immutableState = Map({
    fetching: false,
    data: Map({})
});

export const queryReducer = (state = immutableState, action) => {
    switch (action.type) {
        case "STARTING_REQUEST":
            console.error('--- start request ---');
            return state.set("fetching", true);
        case "FINISHED_REQUEST":
            console.error('--- finish request ---');
            console.warn(action);
            return state.set("fetching", false)
                .set("data", Map(action.response.data.goldberg));
        default:
            return state
    }
}