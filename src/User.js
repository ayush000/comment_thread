import React from 'react';
import { Input } from 'antd';
import './User.css';

class User extends React.Component {
  render() {
    return (
      <div style={{ textAlign: 'left', width: '40%', paddingBottom: '2em' }}>
        <Input onChange={e => this.props.handleNameChange(e.target.value)}
          value={this.props.name} placeholder="Enter your name" />
      </div>
    );
  }
}

export default User;
