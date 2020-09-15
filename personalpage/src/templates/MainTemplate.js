import React from "react";
import styled, { ThemeProvider } from "styled-components";
import PropTypes from "prop-types";
import Background from "components/Background/Background";
import GlobalStyle from "theme/GlobalStyle";
import { theme } from "theme/mainTheme";

const Wrapper = styled.div`
  position: relative;
  margin: 0 auto;
  padding: 0 15px;
  @media (min-width: 1201px) {
    width: 1140px;
    max-width: 100%;
  }
  @media (max-width: 1200px) and (min-width: 993px) {
    width: 1000px;
    max-width: 100%;
  }
  @media (max-width: 992px) and (min-width: 769px) {
    width: 700px;
    max-width: 100%;
  }
  @media (max-width: 768px) and (min-width: 500px) {
    width: 90%;
  }

  @media (max-width: 500px) {
    width: 100vw;
  }

  @media (min-width: 1200px) {
    padding-right: 15px;
    padding-left: 15px;
  }
  @media (min-width: 992px) {
    padding-right: 15px;
    padding-left: 15px;
  }
  @media (min-width: 768px) {
    padding-right: 15px;
    padding-left: 15px;
  }
  @media (min-width: 576px) {
    padding: 0;
  }
`;

const MainTemplate = ({ children }) => (
  <Wrapper>
    <GlobalStyle />
    <Background />
    <ThemeProvider theme={theme}>{children}</ThemeProvider>
  </Wrapper>
);

MainTemplate.propTypes = {
  children: PropTypes.element.isRequired,
};

export default MainTemplate;
