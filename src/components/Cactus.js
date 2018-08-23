import React, { Component } from "react";
import {Image } from "react-konva";

export class Cactus extends React.Component {
    render() {
        const cactus = new window.Image();
        cactus.src = this.props.URL;
        return (           
            <Image 
                image={cactus}
                x={this.props.x}
                y={this.props.y}
                width={this.props.width}
                height={this.props.height}
              
            />
        )
    }
}

