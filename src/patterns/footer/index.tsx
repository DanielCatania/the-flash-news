import React from "react";
import Style from "./style";
import Centralize from "../../components/foundation/Centralize";
import QueuedList from "../../components/foundation/QueuedList";

export default function Footer() {
  return (
    <Style>
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
          <li>
            <a href="https://hgbrasil.com/" target="_blank" rel="noreferrer">
              Clima by HG Brasil
            </a>
          </li>
        </QueuedList>
      </Centralize>
    </Style>
  );
}
