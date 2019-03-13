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
        <h3>Set Break</h3>
        <p>{this.state.timer}</p>
        <button className=" button1" onClick={this.increment}>
          Increment
        </button>
        <button className=" button2" onClick={this.decrement}>
          Decrement
        </button>
      </div>
    );
  }
}
