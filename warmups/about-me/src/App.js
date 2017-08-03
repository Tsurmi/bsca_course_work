import React, { Component } from 'react';
import './App.css';
import {NavBar, Header, Content, Contact} from './components';
import './components/styles.css'

const about = "Hello, my name is Travis and I am a student at Big Sky Code Academy and I decided to take the blue pill and enter the Matrix!"
const info = {
  name: "Travis Surmi",
  phone: "503-869-7544",
  email: "tsurmi@gmail.com"
}

class App extends Component {
  render() {
    return (
      <div className="main-app">
        <NavBar className="nav" />
        <Header title={"ALL ABOUT ME!"} headerMsg={"Welcome to my About Me page!"} className="header"/>
        <Content about={about}/>
        <Contact info={info} />
      </div>
    );
  }
}

export default App;
