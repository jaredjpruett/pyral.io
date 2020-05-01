import React from 'react';
import ReactModal from 'react-modal';
import './Content.css';

class Content extends React.Component {
    constructor () {
        super();

        this.state = {
            showModal : false,
            currentProject : {},
        };

        /*
        this.handleOpenModal    = this.handleOpenModal.bind(this);
        this.handleCloseModal   = this.handleCloseModal.bind(this);
        //this.setWrapperRef      = this.setWrapperRef.bind(this);
        this.handleClickOutside = this.handleClickOutside.bind(this);
        this.closeOnEscape      = this.closeOnEscape.bind(this);
        */
    }

    //setWrapperRef(node)    { this.wrapperRef = node; }
    handleOpenModal(project)      { this.setState({ showModal: true, currentProject : project }); }
    handleCloseModal(event)     { console.log(event); this.setState({ showModal: false }); }
    componentDidMount()    { document.addEventListener('mousedown', (event)=>this.handleCloseModal(event)); document.addEventListener("keydown", this.closeOnEscape); }
    componentWillUnmount() { document.removeEventListener('mousedown', (event)=>this.handleCloseModal(event)); document.removeEventListener("keydown", this.closeOnEscape); }

    handleClickOutside(event) {
        if(this.wrapperRef && !this.wrapperRef.contains(event.target) && this.state.showModal && event.button === 0) {
            this.handleCloseModal();
        }
    }

    closeOnEscape(event) {
        if(this.wrapperRef && !this.wrapperRef.contains(event.target)) {
            event = event || window.event;
            if(event.keyCode === 27 && this.state.showModal) {
                this.handleCloseModal();
            }
        }
    };

    renderProject(project) {
        return (
            <ReactModal className="content-modal" ariaHideApp={false} isOpen={this.state.showModal}>
                <div className="foo">
                    <video controls width="1000">
                        <source src={project.webm} type="video/webm"/>
                    </video>
                </div>
                <div>
                    {project.name}
                </div>
            </ReactModal>
        );
    }

    render() {
        const renderTiles = this.props.tiles.map((project, index) => {
            return (
                <div className="Tile" id={project.name} key={index}>
                    <img src={project.image} alt="img" onClick={() => this.handleOpenModal(project)}/>
                </div>
            );
        });

        return (
            <div className="Content">
                <h3>{this.props.content}</h3>
                <div className="Tiles">{renderTiles}</div>
                {this.renderProject(this.state.currentProject)}
            </div>
        );
    }
}

export default Content
