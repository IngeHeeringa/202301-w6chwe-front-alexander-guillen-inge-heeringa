import { createGlobalStyle } from "styled-components";
import "@fontsource/quicksand";
import "@fontsource/fredoka-one";

const GlobalStyle = createGlobalStyle`
  :root {
    --primaryColor: #2b2d42;
    --secondaryColor: #4e5156;
    --accentColor: #edf2f4;
    --primaryFont: "Quicksand", sans-serif;
    --displayFont: "Fredoka One", sans-serif;
  }

  *, ::before, ::after {
    box-sizing: border-box
  }

  body {
    margin: 0;
    font-family: var(--primaryFont);
    background-color: var(--primaryColor);
    font-size: 1.4rem;
  }

  ul, ol {
    margin: 0;
    list-style: none;
    padding: 0;
  }

  button, input {
    font-family: inherit;
    font-size: inherit;
    background-color: transparent;
    border: none;
  }

  a, a:active, a:visited {
    color: inherit;
    text-decoration: none;
  }

`;

export default GlobalStyle;
