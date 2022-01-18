import axios from "axios";
import React, { useEffect, useState } from "react";
import AlertMessage from "../components/AlertMessage";
import BookForm from "../components/BookForm";
import Cards from "../components/Cards";
import { useUserContext } from "../context/UserContext";

const MyBooks = () => {
  const [show, setShow] = useState(false);
  const { userData, books } = useUserContext();
  const [heading, setHeading] = useState();
  const [message, setMessage] = useState();
  const [showMessage, setShowMessage] = useState(false);
  // useEffect(() => {
  //   const config = {
  //     headers: {
  //       Authorization: `Bearer ${userData.token}`,
  //     },
  //   };
  //   const getUserBooks = async () => {
  //     try {
  //       const res = await axios("/books", config);
  //       const { data } = res;
  //       setBooks(data);
  //     } catch (error) {
  //       setShowMessage(true);
  //       setHeading("Error occurred");
  //       setMessage("Cannot get books");
  //     }
  //   };
  //   getUserBooks();
  // }, [userData.token]);

  return (
    <>
      <div className="h-full min-h-screen">
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
        <Cards
          books={books?.filter((book) => book.user === userData?._id)}
          show={show}
          setShow={setShow}
        />
      </div>
      {show && <BookForm show={show} setShow={setShow} />}
    </>
  );
};

export default MyBooks;
