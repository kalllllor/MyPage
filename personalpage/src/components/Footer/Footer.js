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
  display: flex;
  align-items: center;
  justify-content: space-around;
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
      <img src={logo} alt="logo" />
      <Socials>
        <a href="">facebook</a>
        <a href="">instagram</a>
        <a href="">linkedin</a>
      </Socials>
      <Paragraph>Karol Greń 2020</Paragraph>
    </Wrapper>
  );
}

export default Footer;
