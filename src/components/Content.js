import React from 'react';
import ReactModal from 'react-modal';
import './Content.css';

class Content extends React.Component {
    constructor () {
        super();

        this.handleOpenModal = this.handleOpenModal.bind(this);
        this.handleCloseModal = this.handleCloseModal.bind(this);
        this.state = {
            showModal: false
        };
    }

    handleOpenModal () {
        this.setState({ showModal: true });
    }

    handleCloseModal () {
        this.setState({ showModal: false });
    }

    render() {
        const renderTiles = this.props.tiles.map((tile, index) => 
            <div className="Tile" key={index}>
                <img src={this.props.images[index]} alt="img" onClick={this.handleOpenModal}/>
                <ReactModal className="project-modal" isOpen={this.state.showModal} contentLabel="Minimal Modal Example">
                    <video controls width="1000">
                        <source src={this.props.webms[index]} type="video/webm"/>
                    </video>
                    <button onClick={this.handleCloseModal}>Close Modal</button>
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
