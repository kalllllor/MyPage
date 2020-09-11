import styled from "styled-components";

const Paragraph = styled.p`
  font-size: ${({ theme, big }) => (big ? theme.l : theme.m)};
  font-weight: ${({ theme }) => theme.regular};
  color: ${({ theme }) => theme.secondary};
  letter-spacing: 2px;
`;

export default Paragraph;
