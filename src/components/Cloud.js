import React, { Component } from "react";
import {Image } from "react-konva";

export class Cloud extends React.Component {

  render() {
    const cloud = new window.Image();
    cloud.src = 'https://raw.githubusercontent.com/ann1511/dino/master/src/img/cloud.png';
    return(
        <Image 
            image={cloud} 
            x={this.props.x}
            y={this.props.y}
            width={this.props.width}
            height={this.props.height}
        />
        
    );
  } 
}
