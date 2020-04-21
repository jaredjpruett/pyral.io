import React from 'react';
import './Content.css';

class Content extends React.Component {
  render() {
    return <div className="Content">{this.props.content}</div>;
  }
}

export default Content
