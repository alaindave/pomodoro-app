import React, { Component } from "react";
import "../css/setter.css";
import "bootstrap/dist/css/bootstrap.min.css";

class Session extends Component {
  //variable that will hold setInterval ID for "start timer"
  x;
  //variable that will hold setInterval ID for "resume"
  y;
  constructor(props) {
    super(props);
    this.startTimer = this.startTimer.bind(this);
    this.handleInc = this.handleInc.bind(this);
    this.handleDec = this.handleDec.bind(this);
    this.handleStop = this.handleStop.bind(this);
    this.handleReset = this.handleReset.bind(this);
    this.handleResume = this.handleResume.bind(this);
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

      if (this.state.sessionMinute == 0 && this.state.sessionSecond == 1) {
        clearInterval(this.x);
        this.setState({ sessionMinute: 0, sessionSecond: 0 });
      }
    }, 1000);
  }

  handleStop() {
    clearInterval(this.x);
  }

  handleResume() {
    this.y = setInterval(() => {
      this.setState({ sessionSecond: this.state.sessionSecond - 1 });

      if (this.state.sessionSecond == 0) {
        this.setState({ sessionMinute: this.state.sessionMinute - 1 });
        this.setState({ sessionSecond: 59 });
      }

      if (this.state.sessionMinute == 0 && this.state.sessionSecond == 1) {
        clearInterval(this.y);
        this.setState({ sessionMinute: 0, sessionSecond: 0 });
      }
    }, 1000);
  }

  handleReset() {
    this.setState({ sessionMinute: 0, sessionSecond: 0 });
  }

  render() {
    return (
      <div className="d-flex flex-column ">
        <div id="timer">
          <span id="min">{this.state.sessionMinute}:</span>
          <span id="sec">{this.state.sessionSecond}</span>

          <button
            id="inc"
            className="btn btn-warning btn-sm"
            onClick={this.handleInc}
          >
            +
          </button>

          <button
            id="dec"
            className="btn btn-warning btn-sm"
            onClick={this.handleDec}
          >
            -
          </button>
        </div>

        <div id="start">
          <button className="btn btn-success btn-md" onClick={this.startTimer}>
            Start timer
          </button>
        </div>

        <div id="stopReset">
          <button className="btn btn-danger btn-md" onClick={this.handleStop}>
            Stop
          </button>

          <button
            id="resume"
            className="btn btn-secondary btn-md"
            onClick={this.handleResume}
          >
            Resume
          </button>
          <button
            id="reset"
            className="btn btn-info btn-md"
            onClick={this.handleReset}
          >
            Reset
          </button>
        </div>
      </div>
    );
  }
}

export default Session;
