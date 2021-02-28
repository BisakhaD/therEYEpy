import React, { Component } from "react";

import Game from "./TicTacToe/Game";
import '../style/tictactoe.css';

class BreakGame extends Component {
    constructor(props) {
        super(props);
        this.state = {
            refresh: false
        };
        this.changeGame = this.changeGame.bind(this);
        this.renderGame = this.renderGame.bind(this);
    }

    renderGame(){
        return(<Game r = {this.state.refresh}/>)

    }

    changeGame(){
        this.setState({
            refresh : true
        })
    }

    render() {
        return (
            <div>
                <div className="row" style={{ paddingLeft: "10rem", paddingTop: '2rem' }}>
                    {this.renderGame()}
                </ div>
                <button className="btn btn-primary" onClick = {()=>this.changeGame }>Reset</button>
            </div>

        );
    }
}
export default BreakGame;