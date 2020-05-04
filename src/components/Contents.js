import React from 'react';
import Content from './Content';
import "./Contents.css";

class Contents extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            modalRef : null,
            projects : [
                { name : "Clocker",                    image : "clocker.png",  webm : "clocker.webm",  repo : "cs-clocker",                    url : "/stuff/projects/clocker/index.html" },
                { name : "Cygwin + Eclipse Installer", image : "project2.png", webm : "project2.webm", repo : "cygwin-plus-eclipse-installer", url : "" },
                { name : "Neoplayer",                  image : "project3.png", webm : "project3.webm", repo : "neoplayer2",                    url : "" },
                { name : "ICU+",                       image : "project4.png", webm : "project4.webm", repo : "icu",                           url : "" },
                { name : "OpenOSRS Plugins",           image : "project5.png", webm : "project5.webm", repo : "openosrs-plugins",              url : "" },
            ],
        };
    }

    handleModal(node) {
        this.setState({ modalRef : node });
    }

    render() {
        return (
            <Content className="Contents" tiles={this.state.projects} onTileClick={(node) => this.handleModal(node)}/>
        );
    }
}

export default Contents
