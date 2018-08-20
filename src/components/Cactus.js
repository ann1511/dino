import React from 'react';
import {Rect} from 'react-konva';

class Cactus extends React.Component {
    render() {
        return (           
            <Rect
                x={this.props.x}
                y={this.props.y}
                width={this.props.width}
                height={this.props.height}
                fill='red'
                shadowBlur={5}
            />
        )
    }
}

export default Cactus