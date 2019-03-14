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
          <h1>Pomodoros Clock</h1>
        </div>

        <div
          id="breakAndSession"
          className="d-flex flex-row justify-content-center"
        >
          <div id="breakSetter">
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
