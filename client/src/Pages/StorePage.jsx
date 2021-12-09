import { CssBaseline } from "@mui/material";
import React from "react";
import BookForm from "../components/BookForm";
import Cards from "../components/Cards";
import SearchBar from "../components/UploadButton";
const StorePage = () => {
  return (
    <>
      <CssBaseline />
      <SearchBar />
      <BookForm />
      <Cards />
    </>
  );
};

export default StorePage;
