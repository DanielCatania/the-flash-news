import React from "react";
import Subtitle from "../../foundation/Subtitle";
import Text from "../../foundation/Text";
import QueuedList from "../../foundation/QueuedList";
import Centralize from "../../foundation/Centralize";
import climate from "../../../types/climate";
import Style from "./style";
import Card from "../../foundation/Card";
import Forecast from "./Forecast";
import ImageClimate from "./ImageClimate";

export default function Climate(props: climate) {
  const {
    temp,
    date,
    description,
    city,
    sunrise,
    sunset,
    condition_slug,
    forecast,
  } = props;
  return (
    <div>
      <Style>
        <Card>
          <Centralize>
            <ImageClimate status={condition_slug} />
          </Centralize>
          <Centralize>
            <Subtitle>{temp}ºC</Subtitle>
          </Centralize>
          <QueuedList>
            <li>
              <Text>{date}</Text>
            </li>
            <li>
              <Text>{description}</Text>
            </li>
            <li>
              <Text>{city}</Text>
            </li>
          </QueuedList>
          <QueuedList>
            <Text>
              Nascer do Sol:
              <br />
              {sunrise}
            </Text>
            <Text>
              Pôr do sol:
              <br />
              {sunset}
            </Text>
          </QueuedList>
          <QueuedList>
            {forecast.slice(0, 3).map((item) => (
              <Forecast key={item.date} {...item} />
            ))}
          </QueuedList>
        </Card>
      </Style>
    </div>
  );
}
