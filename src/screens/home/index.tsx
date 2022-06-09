import React from "react";
import Head from "../../patterns/head";
import Header from "../../patterns/header";
import Footer from "../../patterns/footer";
import Emphasis from "../../components/specific/Emphasis";
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
        <Centralize>
          <Emphasis news={news[0]} climate={climate} />
        </Centralize>
      </main>
      <Footer />
    </>
  );
}
