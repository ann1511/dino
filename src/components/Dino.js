import React, { Component } from "react";
import {Image } from "react-konva";

export class Dino extends React.Component {

  render() {
    const dino = new window.Image();
    dino.src = this.props.URL;
    return(
        <Image 
            image={dino} 
            x={this.props.x}
            y={this.props.y}
            width={this.props.width}
            height={this.props.height}
            onClick={this.props.onClick}
        />
        
    );
  } 
}
