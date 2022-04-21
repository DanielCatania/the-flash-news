import React from "react";
import type {AppProps} from "next/app";
import {createGlobalStyle, ThemeProvider} from "styled-components";
import theme from "../src/style/theme";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`;

export default function App({Component, pageProps}: AppProps) {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}
