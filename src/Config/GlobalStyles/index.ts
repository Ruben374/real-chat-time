import { createGlobalStyle } from "styled-components";
export default createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  body,
  input,
  textarea,
  button {
    font: 400 16px Nunito, sans-serif;
  }
  button {
    cursor: pointer;
  }
  
  a {
    color: inherit;
    text-decoration: none;
  }
  @media (max-width: 1080px) {
    html {
      font-size: 93.75%;
    }
  }
  @media (max-width: 1080px) {
    html {
      font-size: 87.5%;
    }
  }
`;
