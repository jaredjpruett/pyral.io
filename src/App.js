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

        /*
        let contents = [ "", "ur mom", "lol" ];
        contents[0] = (
            <div>
                <div>github.com/jaredjpruett</div>
                <div>linkedin.com/in/jaredjpruett</div>
            </div>
        );
        */

        this.state = {
            tabs : [ "Info", "Projects", "Hosted" ],
            //currentTab : 0,
            //tabContents : contents,
            //icons : [ 'iconLinkedIn', 'iconGitHub', 'iconMail' ],
            icons : [ iconLinkedIn, iconGitHub, iconMail ],
            links : [ "https://linkedin.com/in/jaredjpruett", "https://github.com/jaredjpruett", "/" ],
            projects : [ "1", "2", "3", "4", "5" ],
            projectsImgs : [ "project.png", "project.png", "project.png", "project.png", "project.png" ],
            projectsWebms : [ "project.webm", "project.webm", "project.webm", "project.webm", "project.webm" ],
        };
    }

    /*
    setCurrentTab(newCurrentTab) {
        this.setState((state, props) => { return { tabs : state.tabs, currentTab : newCurrentTab }; });
    }
    */

    render() {
        return (
            //<Tabs tabs={this.state.tabs} onClick={(index)=>this.setCurrentTab(index)}/>
            //<Content content={this.state.tabContents[this.state.currentTab]}/>
            <div className="div-root">
                <div className="div-left">
                    <Tabs tabs={this.state.tabs} icons={this.state.icons} links={this.state.links}/>
                </div>
                <div className="div-right">
                    <Content content="Projects" tiles={this.state.projects} images={this.state.projectsImgs} webms={this.state.projectsWebms}/>
                    <Content content="Hosted Projects" tiles={this.state.projects} images={this.state.projectsImgs} webms={this.state.projectsWebms}/>
                </div>
            </div>
        );
    }
}

export default App;
