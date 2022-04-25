import React from "react";
import Header from "../src/patterns/header";

export default function Home() {
  return (
    <>
      <Header />
      <main style={{backgroundColor: "red"}} />
      <footer style={{backgroundColor: "blue"}} />
    </>
  );
}
