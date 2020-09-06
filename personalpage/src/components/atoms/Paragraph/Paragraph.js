import styled from "styled-components";

const Paragraph = styled.p`
  font-size: ${({ theme, big }) => (big ? theme.fontSize.l : theme.fontSize.m)};
  font-weight: ${({ theme }) => theme.regular};
  letter-spacing: 2px;
`;

export default Paragraph;
