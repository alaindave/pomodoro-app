import React, { Component } from "react";
import "../css/setter.css";
import "bootstrap/dist/css/bootstrap.min.css";

class Session extends Component {
  //variable that will hold setInterval ID
  x;
  constructor(props) {
    super(props);
    this.startTimer = this.startTimer.bind(this);
    this.handleInc = this.handleInc.bind(this);
    this.handleDec = this.handleDec.bind(this);
    this.handleStop = this.handleStop.bind(this);
    this.handleReset = this.handleReset.bind(this);
  }

  state = {
    sessionMinute: 0,
    sessionSecond: 0
  };

  handleInc() {
    this.setState({ sessionMinute: this.state.sessionMinute + 1 });
  }

  handleDec() {
    this.setState({ sessionMinute: this.state.sessionMinute - 1 });
  }

  startTimer() {
    this.setState({ sessionSecond: 59 });
    this.x = setInterval(() => {
      this.setState({
        sessionSecond: this.state.sessionSecond - 1
      });

      if (this.state.sessionSecond == 0) {
        this.setState({ sessionMinute: this.state.sessionMinute - 1 });
        this.setState({ sessionSecond: 59 });
      }

      if (this.state.sessionMinute == 0) {
        clearInterval(this.x);
      }
    }, 1000);
  }

  handleStop() {
    clearInterval(this.x);
  }

  handleReset() {
    this.setState({ sessionMinute: 0, sessionSecond: 0 });
  }

  render() {
    return (
      <div>
        <h3>Timer</h3>
        <div id="timer">
          <span id="min">{this.state.sessionMinute}:</span>
          <span id="sec">{this.state.sessionSecond}</span>
        </div>
        <button className="btn btn-danger btn-md" onClick={this.startTimer}>
          Start timer
        </button>
        <button onClick={this.handleInc}>inc</button>
        <button onClick={this.handleDec}>Dec</button>
        <button onClick={this.handleStop}>Stop</button>
        <button onClick={this.handleReset}>Reset</button>
      </div>
    );
  }
}

export default Session;
