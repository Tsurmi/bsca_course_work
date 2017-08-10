import React, { Component } from 'react';
import {DataProvider} from './containers';
import {BrowserRouter as Router} from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <Router>
        <DataProvider />
      </Router>

    );
  }
}

export default App;
