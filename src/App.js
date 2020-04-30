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
            projects : [ "Clocker", "Project2", "Project3", "Project4", "Project5" ],
            projectsImgs : [ "clocker.png", "project2.png", "project3.png", "project4.png", "project5.png" ],
            projectsWebms : [ "clocker.webm", "project2.webm", "project3.webm", "project4.webm", "project5.webm" ],
            hosteds : [ "Clocker" ],
            hostedsImgs : [ "clocker.png" ],
            hostedsWebms : [ "clocker.webm" ],
            hostedsURLs : [ "pyral.io/stuff/projects/clocker/index.html" ],
        };
    }

    render() {
        return (
            <div id="div-root">
                <div id="div-left">
                    <Tabs icons={this.state.icons} links={this.state.links}/>
                </div>
                <div id="div-right">
                    <Content content="Projects" projects={this.state.projects} images={this.state.projectsImgs} webms={this.state.projectsWebms}/>
                    <Content content="Hosted Projects" projects={this.state.hosteds} images={this.state.hostedsImgs} webms={this.state.hostedsWebms}/>
                </div>
            </div>
        );
    }
}

export default App;
