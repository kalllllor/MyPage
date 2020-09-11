import React, { Component } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import MainTemplate from "templates/MainTemplate";
import MainPage from "views/MainPage";
import ProjectPage from "views/ProjectPage";
import CutscenePage from "views/CutscenePage";
import ContactPage from "views/ContactPage";

const Wrapper = styled.div`
  margin: 0 auto;
  position: relative;
`;

class Root extends Component {
  constructor() {
    super();
    this.state = {
      x: 0,
      y: 0,
      width: window.innerWidth,
    };
  }

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  componentDidUpdate() {
    window.addEventListener("resize", this.handleWindowSizeChange);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.handleWindowSizeChange);
  }

  updateMousePosition = (ev) => {
    this.setState({
      x: (ev.clientX / window.innerWidth) * 2 - 1,
      y: -(ev.clientY / window.innerHeight) * 2 + 1,
    });
  };

  handleWindowSizeChange = () => {
    this.setState({ width: window.innerWidth });
  };

  render() {
    const { x, y } = this.state;
    const styles = {
      transform: `translate(${x * 20}px, ${y * 20}px)`,
    };

    return (
      <Wrapper onMouseMove={this.updateMousePosition.bind(this)}>
        <MainTemplate>
          <div style={styles}>
            <MainPage />
            <CutscenePage />
            <ProjectPage />
            <ContactPage />
          </div>
        </MainTemplate>
      </Wrapper>
    );
  }
}

export default Root;
