import React from "react";
import styled from "styled-components";
import logo from "assets/icons/circle.png";
import Paragraph from "components/atoms/Paragraph/Paragraph";

const Wrapper = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100px;
  display: grid;
  justify-content: center;
  align-content: center;

  gap: 4px;
  grid-template-columns: 1fr 1fr 1fr;
`;

const Socials = styled.div`
  justify-content: center;
  align-content: center;
  a {
    padding: 0 10px;
    font-size: ${({ theme }) => theme.s};
    font-weight: ${({ theme }) => theme.regular};
    color: ${({ theme }) => theme.secondary};
    letter-spacing: 2px;
  }
`;

function Footer() {
  return (
    <Wrapper>
      <div>1</div>
      <div>2</div>
      <div>3</div>
    </Wrapper>
  );
}

export default Footer;
