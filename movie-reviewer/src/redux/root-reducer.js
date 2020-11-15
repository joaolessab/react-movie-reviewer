import { combineReducers } from 'redux';

import moviesReducer from './movies/movies.reducer';

// Calling and saying what are the reducers
export default combineReducers({
    movies: moviesReducer
});