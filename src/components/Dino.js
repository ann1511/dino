import React from 'react';
import {Rect} from 'react-konva';

class Dino extends React.Component {
    render() {
        return (           
            <Rect
                x={this.props.x}
                y={this.props.y}
                width={this.props.width}
                height={this.props.height}
                fill='green'
                onClick={this.props.onClick}
            />
        )
    }
}

export default Dino