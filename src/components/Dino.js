import React, { Component } from "react";
import {Image } from "react-konva";

export class Dino extends React.Component {

  render() {
    const dinoStand = new window.Image();
    dinoStand.src = 'https://raw.githubusercontent.com/ann1511/dino/master/src/img/dinosaur.png';
    return(
        <Image 
            image={dinoStand} 
            x={this.props.x}
            y={this.props.y}
            width={this.props.width}
            height={this.props.height}
            onClick={this.props.onClick}
        />
        
    );
  } 
}


export default Dino