import React from "react";
import type {AppProps} from "next/app";
import {ThemeProvider} from "styled-components";
import theme from "../src/style/theme";
import GlobalStyle from "../src/style/GlobalStyle";

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
