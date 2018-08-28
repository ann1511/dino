import React from "react";
import {Image } from "react-konva";

export class Ground extends React.Component {

  render() {
    const ground = new window.Image();
    ground.src = 'https://raw.githubusercontent.com/ann1511/dino/master/src/img/ground.png';
    return(
        <Image 
            image={ground} 
            x={this.props.x}
            y={this.props.y}
            width={this.props.width}
            height={this.props.height}
        />
        
    );
  } 
}
