import React, { Component } from "react";
import MainPage from "../src/pages/MainPage"
import ProjectPage from "../src/pages/ProjectPage"
import AboutPage from "../src/pages/AboutPage"
import ContactPage from "../src/pages/ContactPage"

import MobilePage from "../src/pages/mobilePage/MobilePage"

import Menu from "../src/components/Menu"

class App extends Component {
  constructor() {
    super();
    this.state = {
      width: window.innerWidth,
    }
  }

  componentDidMount() {
    window.scrollTo(0, 0)
  }

  componentWillMount() {
    window.addEventListener('resize', this.handleWindowSizeChange);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleWindowSizeChange);
  }

  handleWindowSizeChange = () => {
    this.setState({ width: window.innerWidth });
  };
  render() {
    const { width } = this.state;
    const isMobile = width <= 1060;

    if (isMobile) {
      return (<div><Menu /><MobilePage /></div>)
    }
    else {
      return (
        <div>
          <Menu />
          <MainPage id="main" />
          <ProjectPage id="project" />
          <AboutPage id="about" />
          <ContactPage id="contact" />
        </div>
      )
    }
  }
}

export default App;
