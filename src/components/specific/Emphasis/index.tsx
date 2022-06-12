import React from "react";
import Style from "./style";
import News from "../News";
import Climate from "../Climate";
import typeNews from "../../../types/news";
import typeClimate from "../../../types/climate";

interface propsEmphasis {
  news: typeNews;
  climate: typeClimate;
}

export default function Emphasis(props: propsEmphasis) {
  const {news, climate} = props;
  return (
    <Style>
      <News {...news} />
      <Climate {...climate} />
    </Style>
  );
}
