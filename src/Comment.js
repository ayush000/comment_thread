import React from 'react';
import AddComment from './AddComment';
import { Input } from 'antd';

export default class extends React.Component {
  render() {
    return (
      <div style={{ paddingLeft: '1%' }}>
        {this.props.userName}: {this.props.text}
        <br />
        <Input type="textarea" rows={2} style={{ width: '50%' }} />
        <AddComment />
      </div>
    );
  }
}
