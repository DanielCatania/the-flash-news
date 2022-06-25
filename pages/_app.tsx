import React from "react";
import {ThemeProvider} from "styled-components";
import theme from "../src/style/theme";
import GlobalStyle from "../src/style/GlobalStyle";

export default function App({Component, pageProps}: any) {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}
