import React, { Component } from 'react'

class ResetTickTacToe extends Component {
    constructor(props){
        super(props);
        this.resetGame = this.resetGame.bind(this);
    }
    resetGame(){
        this.props.resetGame();
    }
    render() {
        return (
            <div>
                <button onClick={this.resetGame}>Reset</button>
            </div>
        )
    }
}

export default ResetTickTacToe
