import React from 'react';
import Tabs from './components/Tabs'
import Content from './components/Content'
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);

    let contents = [ "", "ur mom", "lol" ];
    contents[0] = (
      <div>
        <div>github.com/jaredjpruett</div>
        <div>linkedin.com/in/jaredjpruett</div>
      </div>
    );

    this.state = {
      tabs : [ "Info", "Projects", "Hosted" ],
      currentTab : 0,
      tabContents : contents,
    };
  }

  setCurrentTab(newCurrentTab) {
    this.setState((state, props) => { return { tabs : state.tabs, currentTab : newCurrentTab }; });
  }

  render() {
    return (
      <div>
        <Tabs tabs={this.state.tabs} onClick={(index)=>this.setCurrentTab(index)}/>
        <Content content={this.state.tabContents[this.state.currentTab]}/>
      </div>
    );
  }
}

export default App;
