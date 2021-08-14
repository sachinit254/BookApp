import { CssBaseline } from "@material-ui/core";
import React from "react";
import Cards from "../components/Cards";
import SearchBar from "../components/SearchBar";
const StorePage = () => {
  return (
    <>
      <CssBaseline />
      <SearchBar />
      <Cards />
    </>
  );
};

export default StorePage;
