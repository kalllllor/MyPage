import React from "react";
import styled from "styled-components";
import Heading from "components/atoms/Heading/Heading";
import Media from "components/Media/Media";

const Wrapper = styled.div`
  height: 100vh;
  width: 100vw;
  padding: 100px 300px;
  position: relative;
`;

const StyledHeading = styled(Heading)`
  display: inline-block;
  color: ${({ theme }) => theme.white};
  font-weight: ${({ theme }) => theme.light};
  border: 2px solid ${({ theme }) => theme.tertiary};
  padding: 3px 6px;
  border-radius: 4px;
  transition: all 0.5s;
  cursor: pointer;
  &:hover {
    border: 2px solid ${({ theme }) => theme.secondary};
    background-color: ${({ theme }) => theme.tertiary};
  }
`;

const StyledMedia = styled(Media)`
  position: relative;
  bottom: 0;
  left: 0;
`;

function MainPage() {
  return (
    <Wrapper>
      <StyledHeading>Contact me</StyledHeading>
      <StyledMedia />
    </Wrapper>
  );
}

export default MainPage;
