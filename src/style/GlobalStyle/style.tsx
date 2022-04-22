import {createGlobalStyle} from "styled-components";

const Style = createGlobalStyle`
    * {
      box-sizing: border-box;
      padding: 0;
      margin: 0;
    }
    a {
      text-decoration: none;
    }
    body {
      font-family: 'Open Sans', sans-serif;
    }
`;

export default Style;
