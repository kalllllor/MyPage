import React from "react";
import styled from "styled-components";
import { Config } from "components/Contact/Config";

const Wrapper = styled.div`
  height: 500px;
  padding: 30px;
  border: 2px solid rgba(255, 255, 255, 0.2);
  border-radius: 10px;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  text-align: center;
  margin: 0 20px;
  transition: all 0.2s ease-in-out;

  :hover {
    border: 2px solid rgba(255, 255, 255, 0.4);
  }

  @media (min-width: 1281px) {
    width: 350px;
  }

  @media (max-width: 1280px) and (min-width: 1000px) {
    width: 300px;
  }

  @media (max-width: 1000px) and (min-width: 800px) {
    width: 250px;
  }

  @media (max-width: 800px) {
    width: 100%;
    margin: 20px 0;
  }

  h2 {
    color: ${({ theme }) => theme.white};
    font-weight: ${({ theme }) => theme.lightSecond};
    margin: 0;
  }

  h3 {
    color: ${({ theme }) => theme.primary};
    font-weight: ${({ theme }) => theme.bold};
    margin: 0;
  }
`;

function Contact() {
  return (
    <Wrapper>
      {Config.map(({ title, content }) => (
        <>
          <h2>{title}</h2>
          <h3>{content}</h3>
        </>
      ))}
    </Wrapper>
  );
}

export default Contact;
