import React from 'react';
import ReactDOM from 'react-dom';
import { Stage, Layer } from 'react-konva';

import { Dino } from './components/Dino';
import { Cactus } from './components/Cactus';
import { Ground } from './components/Ground';
import { Cloud } from './components/Cloud';
import { GameOver } from './components/GameOver';

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
            positionDinoY: constants.DINO_Y,
            dinoURL: constants.DINO_STAND,
            clickOnDino: false,
            dinoRight: true,
            cloud1X: constants.CLOUD1_X,
            cloud2X: constants.CLOUD2_X,
            cloudURL: constants.CLOUD_URL,
            count: 0,
            gameOver: false,
        }
        this.timer = setInterval(() => this.gameLoop(), 10);
    };
    
    componentDidMount() {
        checkImage(constants.DINO_DIE);
        checkImage(constants.GAME_OVER_TEXT_URL);
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
            if (prevState.dinoRight && !this.state.clickOnDino) {
               return {
                   dinoURL: constants.DINO_RIGHT,
                   dinoRight: false,
               }
            }
            if (!prevState.dinoRight && !this.state.clickOnDino) {
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
            if (prevState.count < 1) {
                return {
                    dinoURL: constants.DINO_DIE,
                    count: prevState.count + 1,
                }
            }
            else {
                clearInterval(this.timer);
                return {
                    dinoURL: constants.DINO_DIE,
                    gameOver: true,
                }
            }
            
        });
    }

    moveCloud() {
        this.setState ( prevState => {
            if (prevState.cloud1X + constants.CLOUD_WIDTH > 0){
                return {
                    cloud1X: prevState.cloud1X - constants.CLOUD_SPEED,
                    cloud2X: prevState.cloud2X - constants.CLOUD_SPEED,
                };
            } else {
                return {
                    cloud1X: constants.CLOUD1_X,
                    cloud2X: constants.CLOUD2_X,
                }
            }
        });
    }

    gameLoop() {
        this.moveDino();
        this.upDino();
        this.downDino();
        this.moveCactus();
        this.gameOver();
        this.moveCloud();
        
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
                        URL = {this.state.cloudURL}
                        x={this.state.cloud1X}
                        y={constants.CLOUD_Y}
                        width={constants.CLOUD_WIDTH}
                        height={constants.CLOUD_HEIGHT}
                    />
                    <Cloud
                        URL = {this.state.cloudURL}
                        x={this.state.cloud2X}
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
                    {this.state.gameOver && 
                        <GameOver 
                            URL = {constants.GAME_OVER_TEXT_URL}
                            x = {constants.GAME_OVER_TEXT_X}
                            y={constants.GAME_OVER_TEXT_Y} 
                            height = {constants.GAME_OVER_TEXT_HEIGHT}
                            width = {constants.GAME_OVER_TEXT_WIDTH}
                            // onClick={this.jumpClick}        
                        />
                    }
                    {cactuses}
                </Layer>
            </Stage>
        )
    }
}


ReactDOM.render(<Game />, document.getElementById('root'));