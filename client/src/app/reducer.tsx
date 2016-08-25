/// <reference path="../../typings/index.d.ts" />
import {Map} from 'Immutable';

const immutableState = Map({
    fetching: false,
    data: Map({}),
    movies: Map({})
});

export const queryReducer = (state = immutableState, action) => {
    switch (action.type) {
        case "START_goldberg":
            return state.set("fetching", true);
        case "DONE_goldberg":
            return state
                    .set("fetching", false)
                    .set("goldberg", Map(action.response.data.goldberg));
        case "START_movies":
            return state.set("fetching", true);
        case "DONE_movies":
            return state
                    .set("fetching", false)
                    .set("movies", Map(action.response.data.movies));
        default:
            return state
    }
}