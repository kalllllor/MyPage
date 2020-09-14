import React from "react";
import styled, { keyframes } from "styled-components";
import Heading from "components/atoms/Heading/Heading";

const Wrapper = styled.div`
  height: 100vh;
  margin: 0 auto;
  width: 90%;
  display: flex;
  align-items: center;
  justify-content: center;
  h1 {
    text-align: center;
  }
  @media (max-width: 500px) {
    width: 70%;
  }
`;

const StyledHeading = styled(Heading)`
  @media (min-width: 1281px) {
    font-size: 10rem;
  }

  @media (max-width: 1280px) and (min-width: 1000px) {
    font-size: 8rem;
  }

  @media (max-width: 1000px) and (min-width: 800px) {
    font-size: 6rem;
  }

  @media (max-width: 800px) {
    font-size: 4rem;
  }
  color: ${({ theme }) => theme.primary};
`;

const Blinking = keyframes`
  0% { color:hsl(237, 61.7%, 35.9%) }
  100% {color: transparent}}
`;

const StyledAnimation = styled(StyledHeading)`
  margin: 0;
  display: inline-block;
  animation: ${Blinking};
  animation-duration: 1s;
  animation-iteration-count: infinite;
`;

function CutscenePage() {
  return (
    <Wrapper>
      <StyledHeading>
        Hi, My name is Karol Greń and Im a novice frontend developer{" "}
        <StyledAnimation>|</StyledAnimation>
      </StyledHeading>
    </Wrapper>
  );
}

export default CutscenePage;
