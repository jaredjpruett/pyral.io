import React from 'react';
import './Content.css';

class Content extends React.Component {
    render() {
        const renderTiles = this.props.tiles.map((tile, index) => 
            <div className="Tile" key={index}>
                {tile}
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
