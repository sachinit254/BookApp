import React from "react";
import HeroImage from "../components/HeroImage";
import Cards from "../components/Cards";
import { CssBaseline } from "@mui/material";
import SearchBar from "../components/SearchBar";
const Home = () => {
  return (
    <>
     <CssBaseline />
      <HeroImage />
      <SearchBar />
      <Cards />
    </>
  );
};

export default Home;
