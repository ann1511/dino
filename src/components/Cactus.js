import React, { Component } from "react";
import {Image } from "react-konva";

export class Cactus extends React.Component {
    render() {
        const cactus = new window.Image();
        cactus.src = 'https://raw.githubusercontent.com/ann1511/dino/master/src/img/cactus.png';
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

