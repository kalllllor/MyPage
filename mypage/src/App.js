import React, { Component } from "react";
import MainPage from "../src/pages/MainPage"
import ProjectPage from "../src/pages/ProjectPage"

class App extends Component {
  constructor() {
    super();
    this.state = {
      x: 0,
      y: 0
    }
  }

  updateMousePosition = (ev) => {
    this.setState({ x: (ev.clientX / window.innerWidth) * 2 - 1, y: - (ev.clientY / window.innerHeight) * 2 + 1 })
  }

  render() {
    const { x, y } = this.state;
    return (
      <div onMouseMove={this.updateMousePosition.bind(this)}>
        <MainPage />
        <ProjectPage coordinates={this.state} />
      </div>
    );
  }
}

export default App;
