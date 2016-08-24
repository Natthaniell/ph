/// <reference path="../../typings/index.d.ts" />
import * as Immutable from 'Immutable';

const immutableState = Immutable.Map({
    fetching: false,
    data: Immutable.Map({})
});

export const queryReducer = (state = immutableState, action) => {
    switch (action.type) {
        case "STARTING_REQUEST":
            return state.set("fetching", true);
        case "FINISHED_REQUEST":
            return state.set("fetching", false)
                .set("data", Immutable.Map(action.response.data.Users));
        default:
            return state
    }
}