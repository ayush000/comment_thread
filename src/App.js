import Post from './Post';
import React from 'react';
import './App.css';

export default class extends React.Component {
  render() {
    return (
      <div className="App">
        <Post title="AlphaSheets" content="AlphaSheets" />
      </div>
    );
  }
}
