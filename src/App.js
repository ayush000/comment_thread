import Post from './Post';
import React from 'react';
import User from './User';
import './App.css';

export default class extends React.Component {
  constructor() {
    super();
    this.state = {
      userName: '',
    };
  }
  handleNameChange = (value) => {
    this.setState({ userName: value });
  }
  render() {
    return (
      <div className="App">
        <User name={this.state.userName} handleNameChange={this.handleNameChange} />
        <Post title="AlphaSheets" content="AlphaSheets" userName={this.state.userName} />
      </div>
    );
  }
}
