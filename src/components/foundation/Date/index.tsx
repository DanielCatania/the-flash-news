import React from "react";
import moment from "moment";
import Text from "../Text";

interface propsDate {
  date: string;
}

export default function Date(props: propsDate) {
  let {date} = props;
  date = moment(date).format("DD/MM/YYYY");
  return <Text>{date}</Text>;
}
