import React from 'react';
import {About} from '../../components';

class AboutContainer extends React.Component {
  state = {
    title: undefined
  }

  componentDidMount() {
    this.getTitle();
  }

  getTitle = () => {
    setTimeout(() => {
      this.setState({ title: 'About'});
    }, 0)
  }

  render() {
    return(
      <div>
        {
          this.state.title
          ? <About title={ this.state.title} />
          : <h1>No state yet</h1>
        }
      </div>
    )
  }
}

export default AboutContainer;
