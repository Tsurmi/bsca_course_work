import React, { Component } from 'react';
import {Hello, About, WildCard} from './components';
import {SuperButton, superAction} from './components/buttons/action-buttons/ActionButtonOne';
import {SuperDuperButton, superDuperAction} from './components/buttons/action-buttons/ActionButtonTwo';
console.log(superAction)
class App extends Component {
  render() {
    return (
      <div>
        <div>
          <Hello />
        </div>
        <div>
          <About />
          <SuperButton superAction={superAction}/>
          <SuperDuperButton superDuperAction={superDuperAction} />
        </div>
        <div>
          {
            WildCard()
          }
        </div>
      </div>
    );
  }
}

export default App;
