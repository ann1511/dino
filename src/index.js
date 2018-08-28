import React from 'react';
import ReactDOM from 'react-dom';
import { Stage, Layer, Text } from 'react-konva';

import { Dino } from './components/Dino';
import { Cactus } from './components/Cactus';
import { Ground } from './components/Ground';
import { Cloud } from './components/Cloud';
import { GameOver } from './components/GameOver';

import * as constants from './constants';

// const checkImage = path =>
//     new Promise(resolve => {
//         const img = new Image()
//         img.onload = () => resolve(path)
//         img.src = path
//     });

const imageGameOverText = new window.Image();
imageGameOverText.src = constants.GAME_OVER_TEXT_URL;
const imageGameOverButton = new window.Image();
imageGameOverButton.src = constants.GAME_OVER_BUTTON_URL;
const imageDinoStand = new window.Image();
imageDinoStand.src = constants.DINO_STAND;
const imageDinoRight = new window.Image();
imageDinoRight.src = constants.DINO_RIGHT;
const imageDinoLeft = new window.Image();
imageDinoLeft.src = constants.DINO_LEFT;
const imageDinoDie = new window.Image();
imageDinoDie.src = constants.DINO_DIE;

const newGame = {
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
    clickOnDino: false,
    cloud1X: constants.CLOUD1_X,
    cloud2X: constants.CLOUD2_X,
    cloudURL: constants.CLOUD_URL,
    count: 0,
    gameOver: false,
    imageGameOverText: imageGameOverText,
    imageGameOverButton: imageGameOverButton,
    imageDino: imageDinoRight,
    dinoRight: true,
    score: 0,
    scoreCount: 0,
};


class Game extends React.Component {
    constructor(props) {
        super(props);
        this.state = newGame;
        this.timer = setInterval(() => this.gameLoop(), 5);
    };

    jumpClick = () => {
        this.setState(prevState => {
            return {
                clickOnDino: true
            }
        });
    }

    gameOverClick = () => {
        this.setState(newGame);
        this.timer = setInterval(() => this.gameLoop(), 5);
    }

    moveDino() {
        this.setState(prevState => {
            if (prevState.dinoRight && !this.state.clickOnDino && this.state.count === 10) {
               return {
                   imageDino: imageDinoLeft,
                   dinoRight: false,
                   count: 0,
               }
            }
            if (!prevState.dinoRight && !this.state.clickOnDino && this.state.count === 10) {
                return {
                    imageDino: imageDinoRight,
                    dinoRight: true,
                    count: 0,
                }
            }
            else {
                return{
                    count : prevState.count + 1,
                }
            }
        });
    }

    upDino() {
        if (this.state.clickOnDino) {
            this.setState(prevState => {
                return {
                    positionDinoY: prevState.positionDinoY - constants.DINO_SPEED,
                    imageDino: imageDinoStand,
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
                    imageDino: imageDinoStand,
                    count: 5
                    
                };
            }
        });
    }

    moveCactus() {
        this.setState(prevState => {
            const positions = prevState.cactusesInfo.map((dict, index, array) => {
                if (dict.x > - constants.CACTUS_WIDTH) {
                    return {
                        x: dict.x - constants.CACTUS_SPEED,
                        y: dict.y,
                        URL: dict.URL,
                        height: dict.height,
                    }
                } else {
                    let newPosition = window.innerWidth + Math.random() * window.innerWidth;
                    if ((index === 0 && (Math.abs(array[1].x - newPosition) < window.innerWidth / 4)) ||
                        (index === 1 && (Math.abs(array[0].x - newPosition) < window.innerWidth / 4))
                    ) {
                        newPosition += window.innerWidth / 2;
                    }
                    return {
                        x: newPosition,
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
        this.state.cactusesInfo.forEach( dict => {
            if (
                dict.x < constants.DINO_X + constants.DINO_WIDTH - 30 &&
                dict.x + constants.CACTUS_WIDTH - 20 > constants.DINO_X &&
                dict.y < this.state.positionDinoY + constants.DINO_HEIGHT - 50 &&
                dict.y + dict.height - 30 > this.state.positionDinoY
            )
            {
                this.dinoDie ();
            }
        });
    }

    dinoDie() {
        this.setState ( prevState => {
            if (prevState.count === 0) {
                return {
                    imageDino: imageDinoDie,
                    count: prevState.count + 1,
                }
            }
            else {
                clearInterval(this.timer);
                return {
                    imageDino: imageDinoDie,
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

    calcScore() {
        this.setState( prevState =>{
            if (prevState.scoreCount === 50){
                return {
                    scoreCount: 0,
                    score: prevState.score + 1
                }
            }
            else {
                return {
                    scoreCount: prevState.scoreCount + 1,
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
        this.calcScore();
        
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
                        imageDino = {this.state.imageDino}
                        x = {constants.DINO_X}
                        y={this.state.positionDinoY} 
                        height = {constants.DINO_HEIGHT}
                        width = {constants.DINO_WIDTH}
                        onClick={this.jumpClick}        
                    />
                    {this.state.gameOver && 
                        <GameOver 
                            imageText={this.state.imageGameOverText}
                            imageButton={this.state.imageGameOverButton}
                            onClick={this.gameOverClick}  

                        />
                    }
                    <Text text={'Score: ' + this.state.score.toString()}
                            y={100}
                            x={window.innerWidth - 300}
                            fontSize={36}
                    />
                    {cactuses}
                </Layer>
            </Stage>
        )
    }
}


ReactDOM.render(<Game />, document.getElementById('root'));