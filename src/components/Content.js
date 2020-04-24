import React from 'react';
import './Content.css';

class Content extends React.Component {
    render() {
        return <div className="Content"><h3>{this.props.content}</h3></div>;
    }
}

export default Content
