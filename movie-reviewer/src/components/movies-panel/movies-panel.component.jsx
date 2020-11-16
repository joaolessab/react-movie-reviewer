import React from 'react';
import { connect } from 'react-redux';

import { selectMoviesItems } from '../../redux/movies/movies.selector';

import './movies-panel.styles.scss';

// Functional component
const MoviesPanel = ({ movies }) => (
    <div>
        { movies.map(movie => (
            <div key={movie.id}>
                <p>
                    <span>{`${movie.score}%`}</span>&nbsp; 
                    <span>{`${movie.title}`}</span>&nbsp;
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