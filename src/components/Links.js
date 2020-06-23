import React from 'react';
import Link from './Link';
import iconLinkedIn from '../img/linkedin.svg';
import iconGitHub from '../img/github.svg';
import iconMail from '../img/mail.svg';
import './Links.css';

class Links extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            icons : [ iconLinkedIn, iconGitHub, iconMail ],
            links : [ "https://linkedin.com/in/jaredjpruett", "https://github.com/shanktank", "/" ],
        };
    }

    render() {
        const renderLinks = this.state.icons.map((icon, index) => 
            <div className="Link" key={index}>
                <a href={this.state.links[index]} target="_blank" rel="noopener noreferrer">
                    <Link icon={icon}/>
                </a>
            </div>
        );

        return <div className="Links">{renderLinks}</div>
    }
}

export default Links
