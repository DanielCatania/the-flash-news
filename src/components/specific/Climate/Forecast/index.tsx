import React from "react";
import QueuedList from "../../../foundation/QueuedList";
import Centralize from "../../../foundation/Centralize";
import Text from "../../../foundation/Text";
import forecast from "../../../../types/climate/forecast";
import Style from "./style";
import ImageClimate from "../ImageClimate";

export default function Forecast(props: forecast) {
  const {date, weekday, max, min, description, condition} = props;
  return (
    <Style>
      <Centralize>
        <ImageClimate status={condition} />
      </Centralize>
      <Centralize>
        <Text>{description}</Text>
      </Centralize>
      <QueuedList>
        <li>
          <Text>Max: {max}</Text>
        </li>
        <li>
          <Text>Min: {min}</Text>
        </li>
      </QueuedList>
      <QueuedList>
        <li>
          <Text>{weekday}</Text>
        </li>
        <li>
          <Text>{date}</Text>
        </li>
      </QueuedList>
    </Style>
  );
}
