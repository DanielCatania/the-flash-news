import React from "react";
import BoxHeader from "./Header";
import Title from "../../components/Title";

export default function Header() {
  return (
    <BoxHeader>
      <img src="/img/flash.svg" alt="Logo do The Flash News" />
      <Title>The Flash News</Title>
    </BoxHeader>
  );
}
