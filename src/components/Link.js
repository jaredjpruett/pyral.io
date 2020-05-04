import React from 'react';
import './Link.css';

function Link(props) {
    return <img className="tab-image" src={props.icon} alt="icon"/>;
}

export default Link
