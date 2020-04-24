import React from 'react';
import PropTypes from 'prop-types';
import './Tab.css';

function Tab(props) {
    return <div className="Tab">{props.tabName}</div>;
}

Tab.propTypes = {
    tabName : PropTypes.string.isRequired,
    //onClick : PropTypes.func.isRequired
};

export default Tab
