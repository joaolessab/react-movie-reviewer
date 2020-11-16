import { MoviesActionTypes } from './movies.types';

const INITIAL_STATE = {
    movieItem: []
};

const moviesReducer = (state = INITIAL_STATE, action) => {
    switch (action.type){
        case MoviesActionTypes.SET_MOVIES_LIST: // Same string of the movies.action.js
            return {
                ...state,
                movieItem: action.payload
            }
        default:
            return state;
    }
}

export default moviesReducer;