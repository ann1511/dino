import React from "react";
import {Image } from "react-konva";

export class GameOver extends React.Component {

  render() {
    const gameOver = new window.Image();
    gameOver.src = this.props.URL;
    return(
        <Image 
            image={gameOver} 
            x={this.props.x}
            y={this.props.y}
            width={this.props.width}
            height={this.props.height}
            // onClick={this.props.onClick}
        />
        
    );
  } 
}