import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

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
        <Switch> {/* Switch matches only one and nothing more after it. Unique router */}
          <Route exact path='/' component={HomePage} />
        </Switch>
      </div>
    );
  }
}

export default App;