import React from "react";
import styled from "styled-components";
import Button from "components/atoms/Button/Button";
import Media from "components/Media/Media";

const Wrapper = styled.div`
  height: 100vh;
  margin: 0 auto;
  position: relative;
  overflow: hidden;

  @media (min-width: 1281px) {
    width: 90%;
  }

  @media (max-width: 1280px) and (min-width: 1000px) {
    width: 90%;
  }

  @media (max-width: 1000px) and (min-width: 800px) {
    width: 90%;
  }

  @media (max-width: 799px) and (min-width: 500px) {
    width: 90%;
  }

  @media (max-width: 500px) {
    width: 100%;
  }
`;

const StyledButton = styled(Button)`
  position: absolute;
  bottom: 100px;
  right: 0;

  @media (min-width: 1281px) {
    bottom: 100px;
  }

  @media (max-width: 1280px) and (min-width: 1000px) {
    bottom: 100px;
  }

  @media (max-width: 1000px) and (min-width: 800px) {
    bottom: 100px;
  }

  @media (max-width: 799px) and (min-width: 500px) {
    bottom: 100px;
  }

  @media (max-width: 500px) {
    bottom: 25px;
  }
`;

const MediaWrapper = styled.div`
  display: block;
  position: absolute;
  @media (min-width: 1281px) {
    bottom: 100px;
  }

  @media (max-width: 1280px) and (min-width: 1000px) {
    bottom: 100px;
  }

  @media (max-width: 1000px) and (min-width: 800px) {
    bottom: 100px;
  }

  @media (max-width: 799px) and (min-width: 500px) {
    bottom: 100px;
  }

  @media (max-width: 500px) {
    bottom: 25px;
  }
`;

function MainPage() {
  return (
    <Wrapper>
      <StyledButton>Contact me</StyledButton>
      <MediaWrapper>
        <Media />
      </MediaWrapper>
    </Wrapper>
  );
}

export default MainPage;
