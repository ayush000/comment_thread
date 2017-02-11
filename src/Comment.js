import React from 'react';
import { Tree } from 'antd';
import AddComment from './AddComment';
const TreeNode = Tree.TreeNode;

const NestedNodes = (comments) => {
  return (
    comments.map(comment =>
      <TreeNode isLeaf title={`${comment.userName} says ${comment.text}`}
        key={comment.id}>
        {NestedNodes(comment.children)}
      </TreeNode>)
  );
};

class Comment extends React.Component {
  constructor() {
    super();
    this.state = {
      parentComment: {},
    };
  }
  handleCommentSelect = (selectedKeys, {selected}) => {
    if (!selected) {
      this.setState({ parentComment: {} });
    } else {
      const parentId = selectedKeys[0];
      const parentComment = this.props.comments.filter(comment =>
        comment.id === parentId)[0];
      this.setState({ parentComment });
    }
  }
  render() {
    return (
      <div>
        <Tree className="myCls" defaultExpandAll
          onSelect={this.handleCommentSelect}
          expandedKeys={this.props.comments.map(comment => comment.id)} >
          {NestedNodes(this.props.nestedComments)}
        </Tree>
        <AddComment parentComment={this.state.parentComment} handleSubmit={this.props.handleSubmit} />
      </div>
    );
  }
}

Comment.propTypes = {
  handleSubmit: React.PropTypes.func.isRequired,
  comments: React.PropTypes.array.isRequired,
  nestedComments: React.PropTypes.array.isRequired,
};

export default Comment;
