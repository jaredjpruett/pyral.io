import React from 'react';
import './Content.css';

class Content extends React.Component {
    render() {
        const renderTiles = this.props.tiles.map((tile, index) => 
            <div className="Tile" key={index}>
                <img src={this.props.images[index]} alt="img"/>
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
