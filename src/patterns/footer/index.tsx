import React from "react";
import BoxFooter from "./Footer";
import Centralize from "../../components/Centralize";
import QueuedList from "../../components/QueuedList";

export default function Footer() {
  return (
    <BoxFooter>
      <Centralize>
        <QueuedList>
          <li>
            <a
              href="https://github.com/DanielCatania"
              target="_blank"
              rel="noreferrer"
            >
              By Daniel Catania
            </a>
          </li>
          <li>
            <a
              href="https://github.com/DanielCatania/the-flash-news"
              target="_blank"
              rel="noreferrer"
            >
              Repositório no Github
            </a>
          </li>
          <li>
            <a href="https://newsapi.org" target="_blank" rel="noreferrer">
              Notícias by NewsApi
            </a>
          </li>
        </QueuedList>
      </Centralize>
    </BoxFooter>
  );
}
