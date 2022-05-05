import React from "react";
import BoxHeader from "./Header";
import Title from "../../components/foundation/Title";
import Centralize from "../../components/foundation/Centralize";

export default function Header() {
  return (
    <BoxHeader>
      <Centralize>
        <img src="/img/flash.svg" alt="Logo do The Flash News" />
        <Title>The Flash News</Title>
      </Centralize>
    </BoxHeader>
  );
}
