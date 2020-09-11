import React from "react";
import styled from "styled-components";
import Button from "components/atoms/Button/Button";
import Media from "components/Media/Media";
import Menu from "components/Menu/Menu";

const Wrapper = styled.div`
  height: 100vh;
  width: 90%;
  margin: 0 auto;
  position: relative;
  overflow: hidden;
`;

const StyledButton = styled(Button)`
  position: absolute;
  bottom: 100px;
  right: 0;
`;

const MediaWrapper = styled.div`
  display: block;
  position: absolute;
  bottom: 100px;
`;

function MainPage() {
  return (
    <Wrapper>
      <Menu />
      <StyledButton>Contact me</StyledButton>
      <MediaWrapper>
        <Media />
      </MediaWrapper>
    </Wrapper>
  );
}

export default MainPage;
