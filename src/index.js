import React from 'react';
import ReactDOM from 'react-dom';
import { Stage, Layer, Rect, Text } from 'react-konva';


class Dino extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            position: 300,
            count: 0,
        }
        this.timer = setInterval(() => this.gameLoop(), 10);
    }

    jumpClick = () => {
        this.setState(prevState => {
            return {
                position: prevState.position - 200
            }
        });
    };

    gameLoop() {
        this.setState( prevState => {
            if (prevState.position === 100) {
                return {
                    count: prevState.count + 1
                }
            }
        });

        this.setState(prevState => {
            if (prevState.count === 100) {
                
                return {
                    position: prevState.position + 200,
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
                    <Rect
                        x={50}
                        y={this.state.position}
                        width={40}
                        height={100}
                        fill='green'
                        shadowBlur={5}
                        onClick={this.jumpClick}
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

ReactDOM.render(<Dino />, document.getElementById('root'));

