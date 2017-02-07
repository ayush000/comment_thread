import React from 'react';
import { Card } from 'antd';
import './Post.css';
import Comment from './Comment';
import AddComment from './AddComment';
class Post extends React.Component {
  render() {
    return (
      <div className="Post">
        <Card title={this.props.title}>
          <p>{this.props.content}</p>
          <Comment userName="Ayush" text="Do I seem fit for the job role?" />
          <AddComment />
        </Card>
      </div>
    );
  }
}

export default Post;
