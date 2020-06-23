import React from 'react';
import Links from './Links';
import Contents from './Contents';
import './App.css';

class App extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div id="div-root">
                <div id="div-left">
                    <Links/>
                </div>
                <div id="div-right">
                    <Contents/>
                </div>
				<div id="div-disclaimer"><p>(Most images and videos are currently placeholders!)</p></div>
            </div>
        );
    }
}

export default App;
