import React, { Component } from 'react'
import styles from './css/TicTacToe.css'     
import ResetTickTacToe from './ResetTickTacToe';
import Game from './Game'
class TicTakToe extends Component {
    constructor(){
        super();
        this.state= {
            box :[],
            winnerPlayer :"",
            turn : "X"
        }
        this.markTurnHandler = this.markTurnHandler.bind(this);
        this.resetGame = this.resetGame.bind(this);
    }
    resetGame(){
        let turn = "X";
        if(Math.random() > 0.5){
            turn = "O"
        }
        this.setState({
            box :[],
            winnerPlayer : "",
            turn : turn
        })
    }
    markTurnHandler(e){
        var boxClickedId = e.target.id - 1;
        if(  this.state.box[boxClickedId] !== undefined ||
             this.state.winnerPlayer !== ""){
            alert("This Move Is Not Allowed");
            return;
        }
        var updatedBoxValue = this.state.box;
        updatedBoxValue[boxClickedId] = this.state.turn;
        this.setState({
             box : updatedBoxValue
        },() => this.checkWinner())  
    }
    checkWinner(){
        let validateBox = this.state.box;
        let turn = this.state.turn;
        if(validateBox[0] === validateBox[3] && validateBox[0] === validateBox[6] && turn === validateBox[0] ||
            validateBox[1] === validateBox[4] && validateBox[1] === validateBox[7] && validateBox[1] === turn||
            validateBox[2] === validateBox[5] && validateBox[2] === validateBox[8] && validateBox[2] === turn ||
            validateBox[0] === validateBox[4] && validateBox[0] === validateBox[8] && validateBox[0] === turn ||
            validateBox[2] === validateBox[4] && validateBox[2] === validateBox[6] && validateBox[2] === turn ||
            validateBox[0] === validateBox[1] && validateBox[0] === validateBox[2] && validateBox[0] === turn ||
            validateBox[3] === validateBox[4] && validateBox[3] === validateBox[5] && validateBox[3] === turn ||
            validateBox[6] === validateBox[7] && validateBox[6] === validateBox[8] && validateBox[6] === turn){
                this.setState({
                    winnerPlayer : turn
                })
                alert("Player " + turn +" is the winner");
            }
            else{
                this.changeTurn();
            }

    }
    changeTurn(){
        if(this.state.turn === "X")
        {
            this.setState({
                turn : "O"
            })
        }else{
            this.setState({
                turn : "X"
            })
        }
    }
    render() {
        return (
            <div class ="center">
                <h1>Tic Tac Toe</h1>
                <p>player {this.state.turn} turn </p>
                 <Game box={this.state.box} markTurnHandler={this.markTurnHandler}></Game>
                <ResetTickTacToe resetGame={this.resetGame}></ResetTickTacToe>
            </div>
        )
    }
}

export default TicTakToe
