import React, {Component} from 'react';
import {Switch, Route} from 'react-router-dom';
import Dashboard from '../Dashboard';
// import './App.css';

class App extends Component {
  render() {
    return (
      <div className="h-100">
        <Switch>
          <Route path="/" component={Dashboard} />
        </Switch>
      </div>
    );
  }
};

export default App;
