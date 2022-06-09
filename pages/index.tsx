import {GetServerSideProps} from "next";
import Home from "../src/screens/home";

export const getServerSideProps: GetServerSideProps = async () => {
  const apiKeyClimate = process.env.API_KEY_CLIMATE;

  const climate = await (
    await fetch(`https://api.hgbrasil.com/weather?key=${{apiKeyClimate}}`)
  ).json();

  return {
    props: {
      climate: climate.results,
    },
  };
};

export default Home;
