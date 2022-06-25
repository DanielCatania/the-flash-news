import React from "react";
import Head from "next/head";
import Reset from "./reset";
import Style from "./style";

export default function GlobalStyle() {
  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,500;0,600;0,700;0,800;1,400;1,800&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Style />
      <Reset />
    </>
  );
}
