import React, { Component } from 'react'
import './css/TicTacToe.css'
class Game extends Component {
    constructor(props){
        super(props);
        this.state={
            box : this.props.box,
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
        // debugger;
        return (
            <div className="tic-toe-box">
                {/* <table border = "1px" className ="Center"> 
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
                </table> */}

                <div className= {`box1 ${this.state.box[0]==='X'? 'Xcolor': this.state.box[0]==='O'? 'Ocolor': ''}`} id ="1" onClick={this.markTurnHandler}>{this.state.box[0]}</div>
                <div className= {`box2 ${this.state.box[1]==='X'? 'Xcolor': this.state.box[1]==='O'? 'Ocolor':''}`} id ="2" onClick={this.markTurnHandler}>{this.state.box[1]}</div>
                <div className= {`box3 ${this.state.box[2]==='X'? 'Xcolor': this.state.box[2]==='O'? 'Ocolor':''} `} id ="3"  onClick={this.markTurnHandler}>{this.state.box[2]}</div>
                <div className= {`box4 ${this.state.box[3]==='X'? 'Xcolor': this.state.box[3]==='O'? 'Ocolor':''}`} id ="4" onClick={this.markTurnHandler}> {this.state.box[3]}</div>
                <div className= {`box5 ${this.state.box[4]==='X'? 'Xcolor': this.state.box[4]==='O'? 'Ocolor':''}`} id ="5" onClick={this.markTurnHandler}>{this.state.box[4]}</div>
                <div className= {`box6 ${this.state.box[5]==='X'? 'Xcolor': this.state.box[5]==='O'? 'Ocolor':''}`} id ="6" onClick={this.markTurnHandler}>{this.state.box[5]}</div>
                <div className= {`box7 ${this.state.box[6]==='X'? 'Xcolor': this.state.box[6]==='O'? 'Ocolor':''}`} id ="7" onClick={this.markTurnHandler}> {this.state.box[6]}</div>
                <div className= {`box8 ${this.state.box[7]==='X'? 'Xcolor': this.state.box[7]==='O'? 'Ocolor':''}`} id ="8" onClick={this.markTurnHandler}>{this.state.box[7]}</div>
                <div className= {`box9 ${this.state.box[8]==='X'? 'Xcolor': this.state.box[8]==='O'? 'Ocolor':''}`} id ="9" onClick={this.markTurnHandler}>{this.state.box[8]}</div>
            </div>
        )
    }
}

export default Game
