import React from "react";
import attack from "../images/attack.png";
import defend from "../images/defend.png";

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      lastPlay: "",
      gameStatus: "",
    };
  }

  HandleAttack = () => {
    this.setState((previousState) => {
      let newCount = previousState.count + Math.round(Math.random() * 10);
      return {
        count: newCount,
        lastPlay: "attack",
        gameStatus: newCount > 10 ? "WON!" : previousState.gameStatus,
      };
    });
  };

  HandleDefence = () => {
    this.setState((previousState) => {
      let newCount = previousState.count - Math.round(Math.random() * 10);
      return {
        count: newCount,
        lastPlay: "defence",
        gameStatus: newCount < -10 ? "LOST!" : previousState.gameStatus,
      };
    });
  };

  HandleRandom = () => {
    this.setState(() => {
      let playMode = Math.round(Math.random());
      if (playMode == 0) {
        this.HandleAttack();
      } else {
        this.HandleDefence();
      }
    });
  };

  HandleReset = () => {
    this.setState(() => {
      return {
        count: 0,
        gameStatus: "",
        lastPlay: "",
      };
    });
  };

  render() {
    return (
      <div className="row text-white text-center">
        <h1>Game score: {this.state.count}</h1>
        <p>You will win at +10 points and loose at -10 points</p>
        <p>Last play: {this.state.lastPlay}</p>
        <h3>Game status:{this.state.gameStatus}</h3>
        <div className="col-6 col-md-3 offset-md-3">
          <img
            alt="attack"
            style={{
              width: "100%",
              cursor: "pointer",
              order: "1px solid green",
            }}
            className="p-4 rounded"
            src={attack}
            onClick={this.HandleAttack}
          ></img>
        </div>
        <div className="col-6 col-md-3">
          <img
            alt="defend"
            style={{
              width: "100%",
              cursor: "pointer",
              order: "1px solid red",
            }}
            className="p-4 rounded"
            src={defend}
            onClick={this.HandleDefence}
          ></img>
        </div>
        <div className="col-12 col-md-4 offset-md-4">
          <button
            className="btn btn-secondary w-100 mt-2"
            onClick={this.HandleRandom}
          >
            Random Play
          </button>
          <br></br>
          <button
            className="btn btn-warning w-100 mt-2"
            onClick={this.HandleReset}
          >
            Reset
          </button>
        </div>
      </div>
    );
  }
}

export default Counter;
