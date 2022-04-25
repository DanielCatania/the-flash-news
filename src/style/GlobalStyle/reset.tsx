import {createGlobalStyle} from "styled-components";

const Reset = createGlobalStyle`
        img, video {
          max-width: 100%;
          height: auto;
        }
        audio, canvas, embed, iframe, img, object, svg, video {
          display: block;
        }
        .sr-only {
          position: absolute;
          width: 1px;
          height: 1px;
          padding: 0;
          margin: -1px;
          overflow: hidden;
          clip: rect(0,0,0,0);
          border: 0;
        }
        /* ================== */
        /* NextJS */
        /* ================== */
        html {
          height: 100%;
        }
        body,
        #__next {
          height: 100%;
        }
        #__next {
          display: grid;
          grid-template-rows: 15% auto 10%;
        }
`;

export default Reset;
