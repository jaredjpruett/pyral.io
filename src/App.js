import React from 'react';
import Tabs from './components/Tabs'
import Content from './components/Content'
import iconLinkedIn from './linkedin.svg'
import iconGitHub from './github.svg'
import iconMail from './mail.svg'
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
                    <Content content="Projects"/>
                    <Content content="Hosted Projects"/>
                </div>
            </div>
        );
    }
}

export default App;
