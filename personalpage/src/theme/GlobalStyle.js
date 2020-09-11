import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Montserrat:300,600');
  ul,
li {
    padding: 0;
    margin: 0;
}

  *, *::before, *::after {
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  
  html {
    font-size: 62.5%; 
  }
  
  body {
    overflow-x: hidden;
    margin:0;
    padding:0;
    font-size: 1.6rem;
    font-family: 'Chakra Petch', sans-serif;
  }
`;

export default GlobalStyle;
