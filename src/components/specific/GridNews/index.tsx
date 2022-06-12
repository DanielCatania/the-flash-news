import React from "react";
import Centralize from "../../foundation/Centralize";
import Subtitle from "../../foundation/Subtitle";
import Button from "../../foundation/Button";
import News from "../News";
import typeNews from "../../../types/news";
import Style from "./style";

interface propsGridNews {
  news: Array<typeNews>;
}

export default function GridNews(props: propsGridNews) {
  const {news} = props;
  const [viewMore, setViewMore] = React.useState(false);
  return (
    <Style>
      <main>
        {viewMore
          ? news.map((item) => <News key={item.title} {...item} />)
          : news.slice(0, 9).map((item) => <News key={item.title} {...item} />)}
      </main>
      {viewMore ? undefined : (
        <Centralize>
          <Button type="button" onClick={() => setViewMore(true)}>
            <Subtitle>Ver Mais</Subtitle>
          </Button>
        </Centralize>
      )}
    </Style>
  );
}
