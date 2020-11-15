import { createSelector } from 'reselect';

const selectMovies = state => state.movies;

export const selectCurrentUser = createSelector(
    [selectMovies],
    movies => movies
);