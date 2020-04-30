import React from 'react';
import ReactModal from 'react-modal';
import './Content.css';

class Content extends React.Component {
    constructor () {
        super();

        this.state = {
            showModal: false
        };

        this.handleOpenModal    = this.handleOpenModal.bind(this);
        this.handleCloseModal   = this.handleCloseModal.bind(this);
        this.setWrapperRef      = this.setWrapperRef.bind(this);
        this.handleClickOutside = this.handleClickOutside.bind(this);
        this.closeOnEscape      = this.closeOnEscape.bind(this);
    }

    setWrapperRef(node)    { this.wrapperRef = node; }
    handleOpenModal()      { this.setState({ showModal: true }); }
    handleCloseModal()     { this.setState({ showModal: false }); }
    componentDidMount()    { document.addEventListener('mousedown', this.handleClickOutside); document.addEventListener("keydown", this.closeOnEscape); }
    componentWillUnmount() { document.removeEventListener('mousedown', this.handleClickOutside); document.removeEventListener("keydown", this.closeOnEscape); }

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

    render() {
        const renderTiles = this.props.projects.map((project, index) => 
            <div className="Tile" key={index}>
                <img src={this.props.images[index]} alt="img" onClick={this.handleOpenModal}/>
                <ReactModal className="content-modal" ariaHideApp={false} isOpen={this.state.showModal} key={index}>
                    <div ref={this.setWrapperRef} key={index}>
                        <div key={index}><video controls width="1000" key={index}><source src={this.props.webms[index]} type="video/webm"/></video></div>
                        <div key={index}>{project}</div>
                    </div>
                </ReactModal>
            </div>
        );

        return (
            <div className="Content">
                <h3>{this.props.content}</h3>
                <div className="Tiles">{renderTiles}</div>
            </div>
        );
    }
}

export default Content
