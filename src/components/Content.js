import React from "react";
import ReactModal from "react-modal";
import iconGitHub from "../img/github.svg";
import "./Content.css";

class Content extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            showModal: false,
            currentProject: {},
        };
    }

    handleOpenModal(project) { this.setState({ showModal: true, currentProject: project }); }
    handleCloseModal(event)  { this.setState({ showModal: false }); }
    //componentDidMount()    { document.addEventListener('mousedown', (event)=>this.handleCloseModal(event)); document.addEventListener("keydown", this.handlePressEscape); }
    //componentWillUnmount() { document.removeEventListener('mousedown', (event)=>this.handleCloseModal(event)); document.removeEventListener("keydown", this.handlePressEscape); }
    componentDidMount()      { document.addEventListener("keydown", (event)=>this.handlePressEscape(event)); }
    componentWillUnmount()   { document.removeEventListener("keydown", (event)=>this.handlePressEscape(event)); }

    handleClickOutside(event) {
        if(this.wrapperRef && !this.wrapperRef.contains(event.target) && this.state.showModal && event.button === 0) {
            this.handleCloseModal();
        }
    }

    handlePressEscape(event) {
        if(this.state.showModal) {
            event = event || window.event;
            if(event.keyCode === 27 && this.state.showModal) {
                this.handleCloseModal();
            }
        }
    }

    renderProject(project) {
        let links = [
            <li>
                <a href={`https://github.com/jaredjpruett/${project.repo}`} target="_blank" rel="noopener noreferrer">
                    <img className="project-icon" src={iconGitHub} alt="icon"/>
                </a>
                {project.name}
            </li>
        ];

        if(project.url) {
            links.push(<a href={project.url} target="_blank" rel="noopener noreferrer">Hosted</a>);
        }

        return (
            <ReactModal className="content-modal" ariaHideApp={false} isOpen={this.state.showModal}>
                <div className="foo">
                    <video controls width="1000">
                        <source src={`vid/${project.webm}`} type="video/webm"/>
                    </video>
                </div>
                <div className="repo-link">
                    <ul>{links}</ul>
                </div>
            </ReactModal>
        );
    }

    render() {
        const renderTiles = this.props.tiles.map((project, index) => {
            return (
                <div className="Tile image-container" id={project.name} key={index}>
                    <img className="content-image" src={`img/${project.image}`} alt="img" onClick={()=>this.handleOpenModal(project)}/>
                    <div className="after" onClick={()=>this.handleOpenModal(project)}>{project.name}</div>
                </div>
            );
        });

        return (
            <div className="Content">
                <div className="Tiles">{renderTiles}</div>
                {this.renderProject(this.state.currentProject)}
            </div>
        );
    }
}

export default Content;
