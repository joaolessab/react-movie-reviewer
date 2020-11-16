import React from 'react';
import { connect } from 'react-redux';

import { selectMoviesItems } from '../../redux/movies/movies.selector';

import './movies-panel.styles.scss';

// Functional component
const MoviesPanel = ({ movies }) => (
    <div className='movies-panel'>
        <input type="text" placeholder='Filter the movie' />

        <select>
            { movies.map(movie => (
                <option key={movie.id} value={movie.year}>{movie.year}</option>
            ))}
        </select>
        
        { movies.map(movie => (
            
            <div key={movie.id}>
                <p>
                    <span>{`${movie.score * 100}%`}</span>&nbsp;
                    <span onClick={()=> window.open(`${movie.url}`, "_blank")}>{`${movie.title}`}</span>&nbsp;
                    <span>{`- (${movie.year})`}</span>
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