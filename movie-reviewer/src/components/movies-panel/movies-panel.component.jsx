import React from 'react';
import { connect } from 'react-redux';

import { selectMoviesItems } from '../../redux/movies/movies.selector';

import './movies-panel.styles.scss';

// Functional component
const MoviesPanel = ({ movies }) => (
    <div>
        { movies.map(movie => (
            /* MovieItem: It could break into a component, but it didn't see what is it, right now */
            <div key={movie.id}>
                <p>
                    <span>{`${movie.score * 100}%`}</span>&nbsp;
                    <span onClick={()=> window.open(`${movie.url}`, "_blank")}>{`${movie.title}`}</span>&nbsp;
                    <span>{`${movie.year}`}</span>
                </p>
            </div>
        ))}
    </div>
)

const mapStateToProps = state => ({
    movies: selectMoviesItems(state)
});

export default connect(
    mapStateToProps,
    null
)(MoviesPanel);