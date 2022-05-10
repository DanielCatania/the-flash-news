import React from "react";
import type news from "../../../types/news";
import Subtitle from "../../foundation/Subtitle";
import Centralize from "../../foundation/Centralize";
import QueuedList from "../../foundation/QueuedList";
import Link from "../../foundation/Link";
import Contents from "./ContentsNews";

export default function News(props: news) {
  const {author, description, publishedAt, source, title, url, urlToImage} =
    props;
  return (
    <div>
      <Link href={url}>
        <Contents>
          <img src={urlToImage} alt={title} />
          <Centralize>
            <div>
              <Subtitle>{title}</Subtitle>
              <p>{description}</p>
              <QueuedList>
                <li>{publishedAt}</li>
                <li>{author}</li>
                <li>{source.name}</li>
              </QueuedList>
            </div>
          </Centralize>
        </Contents>
      </Link>
    </div>
  );
}
