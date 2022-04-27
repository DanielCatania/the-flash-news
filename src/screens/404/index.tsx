import React from "react";
import Link from "next/link";
import Head from "../../patterns/head";
import Header from "../../patterns/header";
import Footer from "../../patterns/footer";
import Main from "./Main404";
import Title from "../../components/Title";
import Subtitle from "../../components/Subtitle";

export default function page404() {
  return (
    <>
      <Head pageTitle="404" />
      <Header />
      <Main>
        <div>
          <Title>404</Title>
          <Subtitle>
            Ops!! Parece que você foi rápido demais e acabou se perdendo!
          </Subtitle>
          <Link href="/">
            <a href="/">Voltar ao início</a>
          </Link>
        </div>
      </Main>
      <Footer />
    </>
  );
}
