import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { ParallaxProvider, Parallax } from "react-scroll-parallax";
import Heading from "components/atoms/Heading/Heading";

const Wrapper = styled.div`
  margin: 0 auto;
  position: relative;
  padding: 10vh 0;
  overflow-x: hidden;
`;

const StyledHeading = styled(Heading)`
  width: 90%;
  top: 0;
  left: 10px;
  margin: 0;
  position: relative;
  color: ${({ theme }) => theme.tertiary};
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  transform-style: preserve-3d;
  @media (min-width: 1281px) {
    font-size: 28rem;

    ::after {
      font-size: 10rem;
    }
  }

  @media (max-width: 1280px) and (min-width: 1000px) {
    font-size: 23rem;

    ::after {
      font-size: 10rem;
    }
  }

  @media (max-width: 1000px) and (min-width: 800px) {
    font-size: 20rem;

    ::after {
      font-size: 10rem;
    }
  }

  @media (max-width: 799px) and (min-width: 500px) {
    font-size: 10rem;

    ::after {
      font-size: 5rem;
    }
  }
  /* transform: translate(${({ x }) => x}px, ${({ y }) => y}px); */
  ::after {
    position: absolute;
    left: 0;
    padding: 0 30px;
    bottom: 50%;
    transform: translateY(50%);
    content: ${({ title }) => title};
    color: ${({ theme }) => theme.secondary};
    /* transform: translate(${({ x }) => x * 10}px, ${({ y }) => y * 10}px); */
  }
`;

const HeadingWrapper = styled.div`
  position: relative;
`;

function SectionTemplate({ children, title, x, y }) {
  return (
    <Wrapper>
      <HeadingWrapper>
        <StyledHeading x={x} y={y} title={`"${title}"`}>
          {title}
        </StyledHeading>
      </HeadingWrapper>
      <div>{children}</div>
    </Wrapper>
  );
}

export default SectionTemplate;

SectionTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.arrayOf(PropTypes.object).isRequired,
  x: PropTypes.number.isRequired,
  y: PropTypes.number.isRequired,
};
