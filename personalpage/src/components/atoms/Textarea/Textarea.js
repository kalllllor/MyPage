import styled from "styled-components";

const Textarea = styled.textarea`
  width: 100%;
  margin-bottom: 3rem;
  display: block;
  border: none;
  border-bottom: solid 3px rgba(238, 238, 238, 0.2);

  background-color: transparent;
  resize: vertical;
  font-size: 1rem;
  transition: 0.5s ease-in-out;
  font-family: "Chakra Petch", sans-serif;
  height: 7rem;
`;

export default Textarea;