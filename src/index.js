import React from 'react';
import ReactDOM from 'react-dom';
import { Stage, Layer, Rect, Text } from 'react-konva';

import Dino from './components/Dino';
import Cactus from './components/Cactus';

class Game extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            positionCactusX: window.innerWidth,
            positionCactusY: 260,
            positionDinoY: 300,
            count: 0,
        }
        this.timer = setInterval(() => this.gameLoop(), 10);
    }

    jumpClick = () => {
        this.setState(prevState => {
            return {
                positionDinoY: prevState.positionDinoY - 200,
                clickOnDino: false
            }
        });
    };

    gameLoop() {

        this.setState( prevState => {
            if (prevState.positionCactusX > - 30) {
                return {
                    positionCactusX: prevState.positionCactusX - 1
                }
            }

            else return{

                positionCactusX: window.innerWidth
            }
        }

        );

        this.setState( prevState => {
            
                if (prevState.positionDinoY === 100) {
                    return {
                        count: prevState.count + 1
                    }
                }
            
        });

        this.setState(prevState => {
            if (prevState.count === 100) {
                 return {
                    positionDinoY: prevState.positionDinoY + 200,
                    count: 0
                };
            }
        });
    }

    render() {
        return (
            <Stage width={window.innerWidth} height={window.innerHeight}>
                <Layer>
                    <Dino
                        x = {50}
                        y={this.state.positionDinoY} 
                        height = {100}
                        width = {40}
                        onClick={this.jumpClick}
                    />
                    <Cactus 
                        x={this.state.positionCactusX}
                        y={this.state.positionCactusY}
                        width={30}
                        height={140}
                    />
                    <Rect
                        x={0}
                        y={400}
                        width={window.innerWidth}
                        height={2}
                        fill='black'
                        shadowBlur={5}
                       
                    />
                </Layer>
            </Stage>
        )
    }
}


ReactDOM.render(<Game />, document.getElementById('root'));

