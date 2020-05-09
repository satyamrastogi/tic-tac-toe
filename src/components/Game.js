import React, { Component } from 'react'
import './css/TicTacToe.css'
class Game extends Component {
    constructor(props){
        super(props);
        this.state={
            box : this.props.box
        }
        this.markTurnHandler = this.markTurnHandler.bind(this);
    }
    markTurnHandler(e){
        this.props.markTurnHandler(e);
    }
    componentWillReceiveProps(nextProps){
        this.setState({ box: nextProps.box });  
    }
    render() {
        return (
            <div>
                <table border = "1px" className ="Center"> 
                    <tr>
                        <td id ="1" className = "Square" onClick={this.markTurnHandler}>{this.state.box[0]}</td>
                        <td id ="2" className = "Square" onClick={this.markTurnHandler}>{this.state.box[1]}</td>
                        <td id ="3" className = "Square" onClick={this.markTurnHandler} >{this.state.box[2]}</td>
                    </tr>
                    <tr>
                        <td id ="4" className = "Square" onClick={this.markTurnHandler} >{this.state.box[3]}</td>
                        <td id ="5" className = "Square" onClick={this.markTurnHandler} >{this.state.box[4]}</td>
                        <td id ="6" className = "Square" onClick={this.markTurnHandler} >{this.state.box[5]}</td>
                    </tr>
                    <tr>
                        <td id ="7" className = "Square" onClick={this.markTurnHandler} >{this.state.box[6]}</td>
                        <td id ="8" className = "Square" onClick={this.markTurnHandler} >{this.state.box[7]}</td>
                        <td id ="9" className = "Square" onClick={this.markTurnHandler} >{this.state.box[8]}</td>
                    </tr>
                </table>
            </div>
        )
    }
}

export default Game
