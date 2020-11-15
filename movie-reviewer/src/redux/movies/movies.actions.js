import { MoviesActionTypes } from './movies.types';

export const setMovieList = movies => ({
    type: MoviesActionTypes.SET_MOVIES_LIST, // Same string declared on our movies.reducer.js
    payload: movies
});