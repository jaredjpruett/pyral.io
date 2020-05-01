import React from 'react';
import Tabs from './components/Tabs';
import Content from './components/Content';
import iconLinkedIn from './img/linkedin.svg';
import iconGitHub from './img/github.svg';
import iconMail from './img/mail.svg';
import './App.css';

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            icons : [ iconLinkedIn, iconGitHub, iconMail ],
            links : [ "https://linkedin.com/in/jaredjpruett", "https://github.com/jaredjpruett", "/" ],

            showModal : false,
            modalRef : null, 

            projects : [
                { name : "Clocker", image : "clocker.png", webm : "clocker.webm" },
                { name : "Project2", image : "project2.png", webm : "project2.webm" },
                { name : "Project3", image : "project3.png", webm : "project3.webm" },
                { name : "Project4", image : "project4.png", webm : "project4.webm" },
                { name : "Project5", image : "project5.png", webm : "project5.webm" },
            ],

            hostedsURLs : [ "pyral.io/stuff/projects/clocker/index.html" ],
            hosteds : [
                { name : "Clocker", image : "clocker.png", webm : "clocker.webm" },
            ],
        };
    }

    handleFoo(node) {
        this.setState({ modalRef : node });
    }

    render() {
        return (
            <div id="div-root">
                <div id="div-left">
                    <Tabs icons={this.state.icons} links={this.state.links}/>
                </div>
                <div id="div-right">
                    <Content content="Projects" tiles={this.state.projects} onTileClick={(node) => this.handleFoo(node)}/>
                    <Content content="Hosted Projects" tiles={this.state.hosteds}/>
                </div>
            </div>
        );
    }
}

export default App;
