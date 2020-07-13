import React, { Component } from "react";
import MainPage from "../src/pages/MainPage"
import ProjectPage from "../src/pages/ProjectPage"
import AboutPage from "../src/pages/AboutPage"
class App extends Component {

  render() {
    return (
      <div>
        <MainPage />
        <ProjectPage />
        <AboutPage />
      </div>
    );
  }
}

export default App;
