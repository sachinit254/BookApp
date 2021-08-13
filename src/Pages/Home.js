import React from "react";
import HeroImage from "../components/HeroImage";
import Cards from "../components/Cards";
import { CssBaseline } from "@material-ui/core";
const Home = () => {
  return (
    <>
     <CssBaseline />
      <HeroImage />
      <Cards />
    </>
  );
};

export default Home;
