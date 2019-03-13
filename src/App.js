import React, { Component } from "react";
import BreakSetter from "./components/BreakSetter.jsx";
import Session from "./components/Session";
import "./css/setter.css";

class App extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="d-flex flex-column">
        <div id="title">
          <h1>Pomodoro Clock</h1>
        </div>

        <div
          id="BreakAndSession"
          className="d-flex flex-row justify-content-center"
        >
          <div id="BreakSetter">
            <BreakSetter />
          </div>
          <div id="session">
            <Session />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
