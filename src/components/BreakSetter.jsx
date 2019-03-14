import React, { Component } from "react";
import "../css/setter.css";
import "bootstrap/dist/css/bootstrap.min.css";

export default class BreakSetter extends Component {
  constructor(props) {
    super(props);
    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
  }

  state = {
    timer: 0
  };

  increment() {
    this.setState({ timer: this.state.timer + 1 });
  }

  decrement() {
    this.setState({ timer: this.state.timer - 1 });
  }

  render() {
    return (
      <div>
        <h3 id="break">Break</h3>
        <p id="breakTime">{this.state.timer}</p>
        <button id="breakInc" onClick={this.increment}>
          +
        </button>
        <button id="breakDec" onClick={this.decrement}>
          -
        </button>
      </div>
    );
  }
}
