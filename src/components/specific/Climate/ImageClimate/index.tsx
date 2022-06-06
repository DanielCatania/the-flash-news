import React from "react";

export default function ImageClimate(props: {status: string}) {
  const {status} = props;
  return <img src={`/img/icons/${status}.png`} alt={status} />;
}
