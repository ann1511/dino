import React from 'react';
import ReactDOM from 'react-dom';
import { Stage, Layer, Rect, Text } from 'react-konva';

class Dino extends React.Component {
    render() {
        return (           
            <Rect
                x={this.props.x}
                y={this.props.y}
                width={40}
                height={100}
                fill='green'
                shadowBlur={5}
                onClick={this.props.onClick}
            />
        )
    }
}

class Cactus extends React.Component {
    render() {
        return (           
            <Rect
                x={this.props.x}
                y={this.props.y}
                width={this.props.width}
                height={this.props.height}
                fill='red'
                shadowBlur={5}
            />
        )
    }
}



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
                positionDinoY: prevState.positionDinoY - 200
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
                    <Text text = 'Hi!'/>
                    <Dino
                        x = {50}
                        y={this.state.positionDinoY} 
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

