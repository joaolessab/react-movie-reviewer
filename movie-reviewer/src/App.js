import React from 'react';
import { connect } from 'react-redux'; 

import './App.css';

import HomePage from './pages/homepage/homepage.component';
import { setMovieList } from './redux/movies/movies.actions'; // Action coming from reducer

// App.js converted to a Class Component
class App extends React.Component {

  componentDidMount(){
    const { setMovieList } = this.props;
    this.readMovieListFromAPI();
  }

  // Main Function for reading all movies from API
  readMovieListFromAPI = async () => {
    const moviesAPI = 'https://us-central1-beacon-fe-worksample-api.cloudfunctions.net/app/movies';
    fetch(moviesAPI)
    .then(res => res.json())
    .then(result => {
      setMovieList(result); // Calling Redux Action and Saving results
    });
  }

  render(){
    return (
      <div>
        <HomePage/>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  setMovieList: movies => dispatch(setMovieList(movies)) // Connecting with the action
});

export default connect(
  null,
  mapDispatchToProps
)(App);