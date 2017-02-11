import React from 'react';
import { Card } from 'antd';
import { v4 } from 'uuid';

import './Post.css';
// import AddComment from './AddComment';
import Comment from './Comment';
import _ from 'lodash';

const getNestedComments = (flatComments) => {
  let comments = [{ 'id': 'root' }, ...flatComments.map(comment => ({ ...comment, children: [] }))];
  let cMap = {};
  let root = null;
  for (let i = 0; i < comments.length; i++) {
    let comment = comments[i];
    comment.children = [];
    cMap[comment.id] = comments[i];
    if (typeof comment.parentId === 'undefined') {
      root = comment;
    } else {
      const parentId = comment.parentId;
      cMap[parentId].children.push(comments[i]);
    }
  }
  return root.children;
};

class Post extends React.Component {
  constructor() {
    super();
    const comments = [
      {
        'id': 'fc1b21ec-715d-49a9-8a57-8494335ae42b',
        'parentId': 'root',
        'text': 'key',
        'userName': 'Anonymous',
      },
      {
        'id': '87acdd44-1fe5-4b14-84f2-d7eb4cd20272',
        'parentId': 'fc1b21ec-715d-49a9-8a57-8494335ae42b',
        'text': 'value',
        'userName': 'Anonymous',
      },
      {
        'id': '15fc1bcd-6a59-4735-9ff4-544393c9c5ce',
        'parentId': 'root',
        'text': 'value1',
        'userName': 'Anonymous',
      },
      {
        'id': '5ea513c8-a9ef-4978-8d4b-57981d372c89',
        'parentId': 'root',
        'text': 'value2',
        'userName': 'Anonymous',
      },
      {
        'id': '73dd4824-7ba0-4d8b-9016-a86063d5e375',
        'parentId': 'fc1b21ec-715d-49a9-8a57-8494335ae42b',
        'text': 'val',
        'userName': 'Anonymous',
      },
      {
        'id': 'f6d4e30c-b291-4a4a-99cd-b1406b13ba77',
        'parentId': '87acdd44-1fe5-4b14-84f2-d7eb4cd20272',
        'text': 'vall',
        'userName': 'Anonymous',
        'children': [],
      },
    ];

    this.state = {
      comments: comments,
      nestedComments: getNestedComments(comments),
    };
  }

  handleSubmit = (parentId, text) => {
    if (text === '') {
      return;
    }
    const comments = [...this.state.comments, {
      id: v4(),
      parentId,
      text,
      userName: this.props.userName || 'Anonymous',
    }];
    this.setState({
      comments,
      nestedComments: getNestedComments(comments),
    });
  }

  render() {
    return (
      <div className="Post">
        <Card title={this.props.title}>
          <p>{this.props.content}</p>
          <Comment comments={this.state.comments}
            nestedComments={this.state.nestedComments}
            handleSubmit={this.handleSubmit} />
        </Card>
      </div>
    );
  }
}

Post.propTypes = {
  userName: React.PropTypes.string.isRequired,
  title: React.PropTypes.string.isRequired,
  content: React.PropTypes.string.isRequired,
};

export default Post;
