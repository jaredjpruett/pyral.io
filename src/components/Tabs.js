import React from 'react';
import Tab from './Tab';
import './Tabs.css';

class Tabs extends React.Component {
    render() {
        const renderTabs = this.props.icons.map((icon, index) => 
            <div className="Tab" key={index}>
                <a href={this.props.links[index]} target="_blank" rel="noopener noreferrer">
                    <Tab icon={icon}/>
                </a>
            </div>
        );

        return <div className="Tabs" onClick={this.props.onClick}>{renderTabs}</div>
    }
}

export default Tabs
