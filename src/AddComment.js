import React from 'react';
import { Input } from 'antd';
import './AddComment.css';

const DEFAULT_PLACEHOLDER = 'Reply to main post',
  DEFAULT_PARENT = 'root';

class AddComment extends React.Component {

  handleSubmit = (e) => {
    e.preventDefault();
    const text = e.target.value;
    e.target.value = '';
    this.props.handleSubmit(this.props.parentComment.id || DEFAULT_PARENT, text);
  }
  render() {
    const { parentComment } = this.props;
    let placeholder;
    if (parentComment.userName) {
      placeholder = `Reply to ${parentComment.userName} says ${parentComment.text}`;
    } else {
      placeholder = DEFAULT_PLACEHOLDER;
    }
    return (
      <Input type="textarea" placeholder={placeholder}
        rows={2} style={{ width: '60%' }}
        onPressEnter={this.handleSubmit} />
    );
  }
}

AddComment.propTypes = {
  handleSubmit: React.PropTypes.func,
  parentComment: React.PropTypes.object.isRequired,
};

export default AddComment;
