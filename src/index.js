import React from 'react';
import ReactDOM from 'react-dom';
import { Stage, Layer } from 'react-konva';

import {Dino} from './components/Dino';
import {Cactus} from './components/Cactus';
import {Ground} from './components/Ground'
import {Cloud} from './components/Cloud'

import * as constants from './constants';

const checkImage = path =>
    new Promise(resolve => {
        const img = new Image()
        img.onload = () => resolve(path)
        img.src = path
    });


class Game extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            cactusesInfo: [
                {
                    x: window.innerWidth,
                    y: constants.CACTUS_BIG_Y,
                    URL: constants.CACTUS_BIG,
                    height: constants.CACTUS_BIG_HEIGHT,
                }, 
                {
                    x: window.innerWidth + 1000,
                    y: constants.CACTUS_SMALL_Y, 
                    URL: constants.CACTUS_SMALL,
                    height: constants.CACTUS_SMALL_HEIGHT,
                }
            ],
            // positionCactusY: constants.CACTUS_YS,
            positionDinoY: constants.DINO_Y,
            dinoURL: constants.DINO_STAND,
            clickOnDino: false,
            dinoRight: true,
            cloudX: constants.CLOUD_X,
            count: 0,
        }
        this.timer = setInterval(() => this.gameLoop(), 10);
    };

    // const checkImage = path =>
    // new Promise(resolve => {
    //     const img = new Image()
    //     img.onload = () => resolve(path)
    //     img.onerror = () => reject()

    //     img.src = path
    // });
    
    componentDidMount() {
        checkImage(constants.DINO_DIE);
    }

    jumpClick = () => {
        this.setState(prevState => {
            return {
                clickOnDino: true
            }
        });
    }

    moveDino() {
        this.setState(prevState => {
            if (prevState.dinoRight) {
               return {
                   dinoURL: constants.DINO_RIGHT,
                   dinoRight: false,
               }
            }
            if (!prevState.dinoRight) {
                return {
                    dinoURL: constants.DINO_LEFT,
                    dinoRight: true,  
                }
            }
        });
    }
    
    upDino() {
        if (this.state.clickOnDino) {
            this.setState(prevState => {
                return {
                    positionDinoY: prevState.positionDinoY - constants.DINO_SPEED,
                    dinoURL: constants.DINO_STAND,
                };
            });
        }
    }

    downDino() {
        this.setState (prevState => {
            if (prevState.positionDinoY < constants.DINO_MAX_JUMP) {
                return {
                    clickOnDino: false
                };
            }
        });

        this.setState (prevState => {
            if (!prevState.clickOnDino && prevState.positionDinoY < constants.DINO_Y) {
                return {
                    positionDinoY: prevState.positionDinoY + constants.DINO_SPEED,
                    dinoURL: constants.DINO_STAND,
                    
                };
            }
        });
    }

    moveCactus() {
        this.setState(prevState => {
            const positions = prevState.cactusesInfo.map(dict => {
                if (dict.x > - constants.CACTUS_WIDTH) {
                    return {
                        x: dict.x - constants.CACTUS_SPEED,
                        y: dict.y,
                        URL: dict.URL,
                        height: dict.height,
                    }
                } else {
                    return {
                        x: window.innerWidth,
                        y: dict.y,
                        URL: dict.URL,
                        height: dict.height,
                    }
                }
            });
            return { 
                cactusesInfo: positions
            };
        });
    }

    gameOver() {
        this.state.cactusesInfo.map( dict => {
            if (
                dict.x < constants.DINO_X + constants.DINO_WIDTH &&
                dict.x + constants.CACTUS_WIDTH > constants.DINO_X &&
                dict.y < this.state.positionDinoY + constants.DINO_HEIGHT &&
                dict.y + dict.height > this.state.positionDinoY
            )
            {
                this.dinoDie ();
            }
        });
    }

    dinoDie() {
        this.setState ( prevState => {
            if (prevState.count < 5) {
                return {
                    dinoURL: constants.DINO_DIE,
                    count: prevState.count + 1,
                }
            }
            else {
                clearInterval(this.timer);
                return {
                    dinoURL: constants.DINO_DIE,
                }
            }
            
        });
    }

    // moveCloud() {
    //     this.setState ( prevState => {
    //         if (prevState.cloudX == window.innerWidth) {
    //             return {
    //                 cloudX: constants.CLOUD_X
    //             };
    //         }
    //         else {
    //             return {
    //                 cloudX: prevState.cloudX - constants.CLOUD_SPEED
    //             };
    //         }
    //     });
    // }

    gameLoop() {
        this.moveDino();
        this.upDino();
        this.downDino();
        this.moveCactus();
        this.gameOver();
        // this.moveCloud();
        
    }

    render() {
        const cactuses = this.state.cactusesInfo.map(dict => 
            <Cactus
                URL={dict.URL}
                x={dict.x}
                y={dict.y}
                width={constants.CACTUS_WIDTH}
                height={dict.height}
                
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
                    <Cloud
                        x={this.state.cloudX}
                        y={constants.CLOUD_Y}
                        width={constants.CLOUD_WIDTH}
                        height={constants.CLOUD_HEIGHT}
                    />
                    <Dino 
                        URL = {this.state.dinoURL}
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

