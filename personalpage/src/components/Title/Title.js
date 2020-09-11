import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Heading from "components/atoms/Heading/Heading";
import { ParallaxProvider, Parallax } from "react-scroll-parallax";

const TitleWrapper = styled(Heading)``;

const BackgroundTitle = styled(Heading)``;

const Background = styled(Parallax)`
  position: absolute;
  top: 0;
  z-index: 0;
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
`;

function Title({ title }) {
  return (
    <ParallaxProvider>
      <Background>
        <BackgroundTitle>{title}</BackgroundTitle>
      </Background>
      <TitleWrapper>{title}</TitleWrapper>
    </ParallaxProvider>
  );
}

export default Title;

Title.propTypes = {
  title: PropTypes.string.isRequired,
};
