import React, { Component } from 'react';
import './App.css';
import {NavBar, Header, Content} from './components';
import './components/styles.css'

const about = "Hello, my name is Travis and I am a student at Big Sky Code Academy that decided to take the blue pill and enter the Matrix!"

class App extends Component {
  render() {
    return (
      <div className="main-app">
        <NavBar className="nav" />
        <Header title={"ALL ABOUT ME!"} headerMsg={"Welcome to my About Me page!"} className="header"/>
        <Content about={about}/>
      </div>
    );
  }
}

export default App;
