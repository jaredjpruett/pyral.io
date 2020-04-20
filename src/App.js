import React from 'react';
import Tabs from './components/Tabs'
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tabs : [ "Info", "Projects", "Hosted" ],
      currentTab : 0,
    };
  }

  setCurrentTab(newCurrentTab) {
    //debugger;
    this.setState((state, props) => {
        //debugger;
        //return {currentTab : newCurrentTab};
        return { tabs: state.tabs, currentTab: newCurrentTab };
        // return {state, props};
      }
    );
  }

  render() {
    //debugger;
    return (
      <div>
        <Tabs
          tabs={this.state.tabs}
          onClick={(index) => this.setCurrentTab(index)}
        />
        <div>state: {this.state.currentTab}</div>
      </div>
    );
  }
}

export default App;
