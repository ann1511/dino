import React from 'react';
import ReactDOM from 'react-dom';
import { Stage, Layer, Rect } from 'react-konva';

import Dino from './components/Dino';
import Cactus from './components/Cactus';
import Ground from './components/Ground'

import * as constants from './constants';


class Game extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            positionCactusX: [window.innerWidth, window.innerWidth + 1000],
            // positionCactusY: constants.CACTUS_YS,
            positionDinoY: constants.DINO_Y,
            clickOnDino: false,
            isGameOver: false,
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
    
    gameOver() {
        let XDino = constants.DINO_WIDTH + constants.DINO_X;
        this.state.positionCactusX.map( x => {
            if (x < constants.DINO_X + constants.DINO_WIDTH &&
                x + constants.CACTUS_WIDTH > constants.DINO_X &&
                constants.CACTUS_Y < this.state.positionDinoY + constants.DINO_HEIGHT &&
                constants.CACTUS_Y + constants.CACTUS_HEIGHT > this.state.positionDinoY) 
                {
                clearInterval(this.timer);
                }
        });
    }

    gameLoop() {
        this.upDino();
        this.downDino();
        this.moveCactus();
        this.gameOver();
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
                    <Ground
                        x={constants.GROUND_X}
                        y={constants.GROUND_Y}
                        width={constants.GROUND_WIDTH}
                        height={constants.GROUND_HEIGHT}
                    />
                    <Dino 
                        x = {constants.DINO_X}
                        y={this.state.positionDinoY} 
                        height = {constants.DINO_HEIGHT}
                        width = {constants.DINO_WIDTH}
                        onClick={this.jumpClick}        
                    />
                    {cactuses}
                </Layer>
            </Stage>
        )
    }
}


ReactDOM.render(<Game />, document.getElementById('root'));

