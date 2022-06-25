import {createGlobalStyle} from "styled-components";

const Style = createGlobalStyle`
    * {
      box-sizing: border-box;
      padding: 0;
      margin: 0;
    }
    #__next {
        display: grid;
        grid-template-rows: 15% auto min-content;
    }
    a {
      text-decoration: none;
    }
    body {
      font-family: 'Open Sans', sans-serif;
    }
`;

export default Style;
