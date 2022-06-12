import React from "react";
import Style from "./style";
import Head from "../../patterns/head";
import Header from "../../patterns/header";
import Footer from "../../patterns/footer";
import Emphasis from "../../components/specific/Emphasis";
import GridNews from "../../components/specific/GridNews";
import Centralize from "../../components/foundation/Centralize";
import typeClimate from "../../types/climate";
import typeNews from "../../types/news";

interface propsHome {
  climate: typeClimate;
  news: Array<typeNews>;
}

export default function Home(props: propsHome) {
  const {climate, news} = props;
  return (
    <>
      <Head
        pageTitle={{
          yes: false,
        }}
      />
      <Header />
      <main>
        <Style>
          <Centralize>
            <Emphasis news={news[0]} climate={climate} />
          </Centralize>
          <Centralize>
            <GridNews news={news.slice(1, news.length)} />
          </Centralize>
        </Style>
      </main>
      <Footer />
    </>
  );
}
