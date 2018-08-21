import React from 'react';
import ReactDOM from 'react-dom';
import { Stage, Layer, Rect, Text, Image } from 'react-konva';

import Dino from './components/Dino';
import Cactus from './components/Cactus';

import * as constants from './constants';
import DinoImage, {dinosaurs} from './components/DinoImage';

class Game extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            positionCactusX: [window.innerWidth, window.innerWidth + 1000],
            positionCactusY: constants.CACTUS_YS,
            positionDinoY: constants.DINO_Y,
            clickOnDino: false,
        }
        this.timer = setInterval(() => this.gameLoop(), 10);
    };


    jumpClick = () => {
        this.setState(prevState => {
            return {
                clickOnDino: true
            }
        });
    }

    upDino() {
        if (this.state.clickOnDino) {
            this.setState(prevState => {
                return {
                    positionDinoY: prevState.positionDinoY - constants.DINO_SPEED
                };
            });
        }
    }

    downDino() {
        this.setState (prevState => {
            if (prevState.positionDinoY == constants.DINO_MAX_JUMP) {
                return {
                    clickOnDino: false
                }
            }
        });

        this.setState (prevState => {
            if (!prevState.clickOnDino && prevState.positionDinoY != constants.DINO_Y) {
                return {
                    positionDinoY: prevState.positionDinoY + constants.DINO_SPEED
                }
            }
        });
    }

    moveCactus() {
        this.setState(prevState => {
            const positions = prevState.positionCactusX.map(x => {
                if (x > - constants.CACTUS_WIDTH) {
                    return x - constants.CACTUS_SPEED;
                } else {
                    return window.innerWidth;
                }
            });
            return { 
                positionCactusX: positions
            };
        });
    }

    gameLoop() {
        this.upDino();
        this.downDino();
        this.moveCactus();
    }

    

    render() {
        const cactuses = this.state.positionCactusX.map(x => 
            <Cactus
                x={x}
                y={constants.CACTUS_Y}
                width={constants.CACTUS_WIDTH}
                height={constants.CACTUS_HEIGHT}
            />
        );
        return (
            <Stage width={window.innerWidth} height={window.innerHeight}>
                <Layer>
                    <Dino
                        x = {constants.DINO_X}
                        y={this.state.positionDinoY} 
                        height = {constants.DINO_HEIGHT}
                        width = {constants.DINO_WIDTH}
                        onClick={this.jumpClick}
                    />
                    {cactuses}
                    <Rect
                        x={constants.LINE_X}
                        y={constants.LINE_Y}
                        width={constants.LINE_WIDTH}
                        height={constants.LINE_HEIGHT}
                        fill='black'
                    />
                </Layer>
            </Stage>
        )
    }
}


ReactDOM.render(<Game />, document.getElementById('root'));

