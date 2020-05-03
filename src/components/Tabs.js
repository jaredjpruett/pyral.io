import React from 'react';
import Tab from './Tab';
import iconLinkedIn from '../img/linkedin.svg';
import iconGitHub from '../img/github.svg';
import iconMail from '../img/mail.svg';
import './Tabs.css';

class Tabs extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            icons : [ iconLinkedIn, iconGitHub, iconMail ],
            links : [ "https://linkedin.com/in/jaredjpruett", "https://github.com/jaredjpruett", "/" ],
        };
    }

    render() {
        const renderTabs = this.state.icons.map((icon, index) => 
            <div className="Tab" key={index}>
                <a href={this.state.links[index]} target="_blank" rel="noopener noreferrer">
                    <Tab icon={icon}/>
                </a>
            </div>
        );

        return <div className="Tabs">{renderTabs}</div>
    }
}

export default Tabs
