import React, { Component } from 'react';
import {HomeContainer, AboutContainer, ShopContainer}from './containers';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <HomeContainer />
        <AboutContainer />
        <ShopContainer />
      </div>
    );
  }
}

export default App;
