import React from 'react';
import {Rect, Image} from 'react-konva';
// import dinosaur from '../img/dinosaur'


class Dino extends React.Component {
    render() {
        return (           
            <Rect
                x={this.props.x}
                y={this.props.y}
                width={this.props.width}
                height={this.props.height}
                onClick={this.props.onClick}
                fill='green'
            />
        )
    }
}




export default Dino