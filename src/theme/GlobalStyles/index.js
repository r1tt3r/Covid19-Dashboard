import { createGlobalStyle } from 'styled-components';
import normalize from 'styled-normalize';

const GlobalStyle = createGlobalStyle`
* {
    box-sizing: border-box;
  }
  ${normalize}
  html,
  body {
    margin: 0;
    padding: 0;
    background: #f1f1f1;
    font-family: 'Open Sans', sans-serif;
    border-top: 2px solid #ACE010;
  }
`;
export default GlobalStyle;
