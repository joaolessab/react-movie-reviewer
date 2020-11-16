import { createSelector } from 'reselect';

const selectMovies = state => state.movies;

export const selectMoviesItems = createSelector(
    [selectMovies],
    movies => movies.movieItem
);