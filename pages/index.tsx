import {GetServerSideProps} from "next";
import Home from "../src/screens/home";

export const getServerSideProps: GetServerSideProps = async () => {
  const apiKeyClimate = process.env.API_KEY_CLIMATE;
  const apiKeyNews = process.env.API_KEY_NEWS;

  const climate = await (
    await fetch(`https://api.hgbrasil.com/weather?key=${apiKeyClimate}`)
  ).json();
  const news = await (
    await fetch(`https://newsapi.org/v2/everything?q=keyword&apiKey=${apiKeyNews}
    `)
  ).json();

  return {
    props: {
      climate: climate.results,
      news: news.articles,
    },
  };
};

export default Home;
