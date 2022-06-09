import React from "react";
import type news from "../../../types/news";
import Subtitle from "../../foundation/Subtitle";
import Centralize from "../../foundation/Centralize";
import QueuedList from "../../foundation/QueuedList";
import Link from "../../foundation/Link";
import Text from "../../foundation/Text";
import Contents from "./ContentsNews";
import Card from "../../foundation/Card";
import Date from "../../foundation/Date";

export default function News(props: news) {
  const {author, description, publishedAt, source, title, url, urlToImage} =
    props;
  return (
    <div>
      <Link href={url}>
        <Contents>
          <Card>
            <img src={urlToImage} alt={title} />
            <Centralize>
              <div>
                <Subtitle>{title}</Subtitle>
                <Text>{description}</Text>
                <QueuedList>
                  <li>
                    <Date date={publishedAt} />
                  </li>
                  <li>
                    <Text>{author}</Text>
                  </li>
                  <li>
                    <Text>{source.name}</Text>
                  </li>
                </QueuedList>
              </div>
            </Centralize>
          </Card>
        </Contents>
      </Link>
    </div>
  );
}
