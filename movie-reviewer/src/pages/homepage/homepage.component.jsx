import React from 'react';

import './homepage.styles.scss';

import MoviesPanel from '../../components/movies-panel/movies-panel.component';

const HomePage = () => (
    <div className='homepage'>
        <h1>Movies Jwow likes!</h1>
        <MoviesPanel />
    </div>
);

export default HomePage;