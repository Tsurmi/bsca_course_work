import React, { Component } from 'react';
import './App.css';
import DATA from './DATA';
import Menu from './components/Menu';
import Filters from './components/Filters';
import './styles.css';

class App extends Component {
  state = {
    items: [],
    category: '',
    spiceThresh: 0
  }
  componentDidMount = () => this.setState({items: DATA.items})
  setSpiceThresh = (event) => this.setState({spiceThresh: event.target.value})
  setCategory = (event) => this.setState ({category: event.target.value})
  render() {
    return (
      <div>
      <Filters setSpiceThresh={this.setSpiceThresh} setCategory={this.setCategory}/>
      {this.state.items !== [] ? <Menu items={this.state.items} spiceThresh={this.state.spiceThresh} category={this.state.category}/> : 'Loading...'}
      </div>
    );
  }
}

export default App;
