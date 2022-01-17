import React, { useEffect, useState } from "react";
import HeroSection from "../components/HeroSection";
import Cards from "../components/Cards";
import BookForm from "../components/BookForm";
import axios from "axios";
import AlertMessage from "../components/AlertMessage";
import { useUserContext } from "../context/UserContext";

const HomePage = () => {
  const { books, setBooks } = useUserContext();
  const [show, setShow] = useState(false);
  const [book, setBook] = useState();
  const [showMessage, setShowMessage] = useState(false);
  const [heading, setHeading] = useState();
  const [message, setMessage] = useState();

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
      try {
        const res = await axios.get("/books", config);
        const { data } = res;
        setBook(data);
        setBooks([data]);
      } catch (error) {
        setShowMessage(true);
        setHeading("Error occurred");
        setMessage("Cannot fetch books");
      }
    };
    getBooks();
  }, [setBooks]);

  // TODO Admin Panel shouldn't be accessible from home page

  console.log(`books`, books);

  return (
    <>
      {showMessage && (
        <AlertMessage
          heading={heading}
          message={message}
          deleteHandler={() => {
            setShowMessage(false);
            setHeading("");
            setMessage("");
          }}
        />
      )}
      <div className="relative">
        <HeroSection />
        <Cards books={book} show={show} setShow={setShow} />
      </div>
      {show && <BookForm show={show} setShow={setShow} />}
    </>
  );
};

export default HomePage;
