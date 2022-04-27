import React from "react";
import NextHead from "next/head";

interface PropsHead {
  pageTitle: string;
}

export default function Head(props: PropsHead) {
  const {pageTitle} = props;
  return (
    <NextHead>
      <link rel="shortcut icon" href="/img/flash.svg" type="image/x-icon" />
      <title>The Flash News - {pageTitle}</title>
    </NextHead>
  );
}
