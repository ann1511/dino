import React from "react";
import {Image } from "react-konva";

export class Dino extends React.Component {

  render() {
    return(
        <Image 
            image={this.props.imageDino} 
            x={this.props.x}
            y={this.props.y}
            width={this.props.width}
            height={this.props.height}
            onClick={this.props.onClick}
        />
        
    );
  } 
}
