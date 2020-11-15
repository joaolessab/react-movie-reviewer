import React from 'react';

import './App.css';

import HomePage from './pages/homepage/homepage.component';

// App.js converted to a Class Component
class App extends React.Component {

  componentDidMount(){
    console.log("Testing homepage component")
  }

  render(){
    return (
      <div>
        <HomePage/>
      </div>
    );
  }
}

export default App;