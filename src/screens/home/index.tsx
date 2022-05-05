import React from "react";
import Head from "../../patterns/head";
import Header from "../../patterns/header";
import Footer from "../../patterns/footer";

export default function Home() {
  return (
    <>
      <Head
        pageTitle={{
          yes: false,
        }}
      />
      <Header />
      <main style={{backgroundColor: "red"}} />
      <Footer />
    </>
  );
}
