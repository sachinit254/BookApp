import React, { useEffect, useState } from "react";
import HeroSection from "../components/HeroSection";
import Cards from "../components/Cards";
import BookForm from "../components/BookForm";
import axios from "axios";
import { useHistory } from "react-router-dom";

const HomePage = () => {
  const [show, setShow] = useState(false);
  const [books, setBooks] = useState();
  const history = useHistory();
  const userInfoFromStorage = localStorage.getItem("userInfo")
    ? JSON.parse(localStorage.getItem("userInfo"))
    : null;

  // TODO we need to refresh the page after uploading book

  useEffect(() => {
    if (!userInfoFromStorage) {
      history.push("/login");
    }
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
