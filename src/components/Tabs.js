import React from 'react';
import Tab from './Tab';
import './Tabs.css';

class Tabs extends React.Component {
    render() {
        const renderTabs = this.props.tabs.map((tab, index) => 
            <div className="Tab" key={index} onClick={()=>this.props.onClick(index)}>
                <Tab tabName={tab}/>
            </div>
        );

        return (
            //<div className="Tabs" onClick={this.props.onClick}>
            <div className="Tabs">{renderTabs}</div>
        );
    }
}

export default Tabs
