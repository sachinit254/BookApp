import React, { useEffect, useState } from "react";
import HeroSection from "../components/HeroSection";
import Cards from "../components/Cards";
import BookForm from "../components/BookForm";
import axios from "axios";

const HomePage = () => {
  const [show, setShow] = useState(false);
  const [books, setBooks] = useState();

  // TODO we need to refresh the page after uploading book

  useEffect(() => {
    const userInfoFromStorage = localStorage.getItem("userInfo")
      ? JSON.parse(localStorage.getItem("userInfo"))
      : null;

    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${userInfoFromStorage?.token}`,
      },
    };
    const getBooks = async () => {
      const res = await axios.get("/books", config);
      const { data } = res;
      setBooks(data);
    };
    getBooks();
  }, []);

  // TODO Admin Panel shouldn't be accessible from home page

  console.log(`books`, books);

  return (
    <>
      <div className="relative">
        <HeroSection />
        <Cards books={books} show={show} setShow={setShow} />
      </div>
      {show && <BookForm show={show} setShow={setShow} />}
    </>
  );
};

export default HomePage;
