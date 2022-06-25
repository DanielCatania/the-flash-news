import React from "react";
import Style from "./style";
import Title from "../../components/foundation/Title";
import Centralize from "../../components/foundation/Centralize";

export default function Header() {
  return (
    <Style>
      <Centralize>
        <img src="/img/flash.svg" alt="Logo do The Flash News" />
        <Title>The Flash News</Title>
      </Centralize>
    </Style>
  );
}
