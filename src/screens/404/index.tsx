import React from "react";
import Style from "./style";
import Link from "../../components/foundation/Link";
import Head from "../../patterns/head";
import Header from "../../patterns/header";
import Footer from "../../patterns/footer";
import Title from "../../components/foundation/Title";
import Subtitle from "../../components/foundation/Subtitle";
import Centralize from "../../components/foundation/Centralize";

export default function page404() {
  return (
    <>
      <Head
        pageTitle={{
          yes: true,
          title: "404",
        }}
      />
      <Header />
      <main>
        <Centralize>
          <Style>
            <Title>404</Title>
            <Subtitle>
              Ops!! Parece que você foi rápido demais e acabou se perdendo!
            </Subtitle>
            <Link href="/">Voltar ao início</Link>
          </Style>
        </Centralize>
      </main>
      <Footer />
    </>
  );
}
