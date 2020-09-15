import React from "react";
import styled from "styled-components";
import logo from "assets/icons/circle.png";
import Paragraph from "components/atoms/Paragraph/Paragraph";

const Wrapper = styled.div`
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 90%;
  height: 100px;
  display: grid;
  grid-template-columns: 15vw 25vw 15vw;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 800px) {
    display: flex;
    height: auto;
    flex-direction: column;
  }
`;

const Socials = styled.div`
  justify-content: center;
  align-content: center;
  padding: 20px 0;
  display: block;
  a {
    display: inline-block;
    padding: 0 10px;
    font-size: ${({ theme }) => theme.s};
    font-weight: ${({ theme }) => theme.regular};
    color: ${({ theme }) => theme.secondary};
    letter-spacing: 2px;
  }
`;

const ParagraphWrapper = styled.div``;

function Footer() {
  return (
    <Wrapper>
      <img src={logo} alt="logo" />
      <Socials>
        <a href="">facebook</a>
        <a href="">facebook</a>
        <a href="">facebook</a>
      </Socials>
      <ParagraphWrapper>
        <Paragraph>Karol Greń 2020</Paragraph>
      </ParagraphWrapper>
    </Wrapper>
  );
}

export default Footer;
