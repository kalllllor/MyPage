import React from "react";
import PropTypes from "prop-types";
import Background from "components/Background/Background";
import Menu from "components/Menu/Menu";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "theme/GlobalStyle";
import { theme } from "theme/mainTheme";

const MainTemplate = ({ children }) => (
  <div>
    <GlobalStyle />
    <Menu />
    <Background />
    <ThemeProvider theme={theme}>{children}</ThemeProvider>
  </div>
);

MainTemplate.propTypes = {
  children: PropTypes.element.isRequired,
};

export default MainTemplate;
