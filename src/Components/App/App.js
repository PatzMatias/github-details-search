import React, {Component} from 'react';
import {Switch, Route, BrowserRouter as Router} from 'react-router-dom';
import Dashboard from '../Dashboard';
// import './App.css';

class App extends Component {
  render() {
    return (
      <div className="h-100">
        <Router>
          <Switch>
            <Route path="/" component={Dashboard} />
          </Switch>
        </Router>
      </div>
    );
  }
};

export default App;
