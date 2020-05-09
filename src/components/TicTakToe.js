import React, { Component } from 'react'
import './css/TicTacToe.css'     
import ResetTickTacToe from './ResetTickTacToe';
import Game from './Game'
const player = {
    human : "X",
    blank : undefined,
    machine : "O",
}
class TicTakToe extends Component {
    constructor(){
        super();
        this.state= {
            box :[],
            winnerPlayer :"",
            turn : player.human,
            playWithNBot : false
        }
        this.markTurnHandler = this.markTurnHandler.bind(this);
        this.resetGame = this.resetGame.bind(this);
    }
   
    resetGame(){
        // let turn = player.human;
        // if(Math.random() > 0.5){
        //     turn = player.machine;
        // }
        this.setState({
            box :[],
            winnerPlayer : "",
            turn : player.human
        })
    }
    markTurnHandler(e){
        var boxClickedId = e.target.id - 1;
        if(  this.state.box[boxClickedId] !== player.blank ||
             this.state.winnerPlayer !== ""){
            alert("This Move Is Not Allowed");
            return;
        }
        var updatedBoxValue = this.state.box;
        updatedBoxValue[boxClickedId] = this.state.turn;
        this.setState({
             box : updatedBoxValue
        })
        let result = this.checkWinner();  
        if(result && result !== player.undefined){
            this.setState({
                winnerPlayer : result
            })
            alert("Player " + result +" is the winner");
            return;
        }
        else if(result === player.undefined){
            alert("It is a tie");
            return;
        }
        if(this.state.playWithNBot)
            this.botMove(this.state.box);
        else
            this.changeTurn();
        
    }

    botMove(validateBox){
        let bestScore = -Infinity;
                let finalBotMove ;
                for(let i =0;i<9 ;i++){
                    if(validateBox[i] === player.blank){
                        let newBox = [...validateBox];
                        newBox[i]= player.machine;
                        let answer  = this.miniMax(newBox,false);
                        if(answer > bestScore){
                            bestScore = answer;
                            finalBotMove=i;
                        }
                    }
                }
                let winner = "";
                validateBox[finalBotMove]=player.machine;
                if(this.boxValidation(validateBox,player.machine)){
                    winner = player.machine; 
                }
                this.setState({
                    box:validateBox,
                    winnerPlayer:winner
                })
                if(winner !== "")
                    alert("Bot WIN");
    }
    miniMax(box,isMaximizing){
        if(this.boxValidation(box,player.machine)){
            return 1;
        }
        if(this.boxValidation(box,player.human)){
            return -1;
        }

        if (isMaximizing) {
            let bestScore = -Infinity;
            for (let i = 0; i < 9; i++) {
                let board = [...box];
                if (board[i] === player.blank) {
                  board[i] = player.machine;
                  let score = this.miniMax(board,false);
                  if(score > bestScore){
                      bestScore = score;
                  }
                }
            }
            return bestScore === -Infinity ? 0:bestScore;
          } else {
            let bestScore = Infinity;
            for (let i = 0; i < 9; i++) {
                let board = [...box];
                if (board[i] ===  player.blank) {
                  board[i] = player.human;
                  let score = this.miniMax(board, true);
                  if(bestScore > score){
                      bestScore = score;
                  }
                }
            }
            return bestScore === Infinity ? 0 :bestScore;
          }
        }
        
    checkWinner(){
        let validateBox = [...this.state.box];
        let turn = this.state.turn;
        if(this.boxValidation(validateBox,turn)){
            return turn;
            }
            else if(this.checkDraw(validateBox)){
                return player.blank;
            }
            return null;
    }

    boxValidation(validateBox,turn){
        if((validateBox[0] === validateBox[3] && validateBox[0] === validateBox[6] && turn === validateBox[0]) ||
        (validateBox[1] === validateBox[4] && validateBox[1] === validateBox[7] && validateBox[1] === turn )||
        (validateBox[2] === validateBox[5] && validateBox[2] === validateBox[8] && validateBox[2] === turn) ||
        (validateBox[0] === validateBox[4] && validateBox[0] === validateBox[8] && validateBox[0] === turn) ||
        (validateBox[2] === validateBox[4] && validateBox[2] === validateBox[6] && validateBox[2] === turn) ||
        (validateBox[0] === validateBox[1] && validateBox[0] === validateBox[2] && validateBox[0] === turn) ||
        (validateBox[3] === validateBox[4] && validateBox[3] === validateBox[5] && validateBox[3] === turn) ||
        (validateBox[6] === validateBox[7] && validateBox[6] === validateBox[8] && validateBox[6] === turn))
            return true;
        return false;
    }
    checkDraw(box){
        let isBoxFull = true;
        for(let i = 0 ;i< 9 ;i++){
                if(box[i] === player.blank){
                    isBoxFull = false;
                    break;
                }
        }
        return isBoxFull;
    }
    changeTurn(){
        if(this.state.turn === player.human)
        {
            this.setState({
                turn : player.machine
            })
        }else{
            this.setState({
                turn : player.human
            })
        }
    }
    render() {
        return (
            <div className ="center">
                <h1>Unbeatable Tic Tac Toe B!tch</h1>
                <p>player {this.state.turn} turn </p>
                 <Game box={this.state.box} markTurnHandler={this.markTurnHandler}></Game>
                <ResetTickTacToe resetGame={this.resetGame}></ResetTickTacToe>
            </div>
        )
    }
}

export default TicTakToe
