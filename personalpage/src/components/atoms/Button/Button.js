import styled, { css } from "styled-components";

const Button = styled.button`
  font-family: "Chakra Petch", sans-serif;
  color: ${({ theme }) => theme.white};
  font-weight: ${({ theme }) => theme.light};
  font-size: ${({ theme }) => theme.l};
  border: 2px solid ${({ theme }) => theme.tertiary};
  padding: 3px 6px;
  border-radius: 4px;
  transition: all 0.5s;
  background-color: transparent;
  cursor: pointer;
  &:hover {
    border: 2px solid ${({ theme }) => theme.primary};
    background-color: ${({ theme }) => theme.tertiary};
  }

  ${({ wide }) =>
    wide &&
    css`
      padding: 10px 30px;
    `}
`;

export default Button;
