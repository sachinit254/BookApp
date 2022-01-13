import axios from "axios";
import React, { useEffect, useState } from "react";
import AlertMessage from "../components/AlertMessage";
import Cards from "../components/Cards";
import { useUserContext } from "../context/LoggedInContext";

const MyBooks = () => {
  const { data } = useUserContext();
  const { userData } = data;
  const [books, setBooks] = useState();
  const [heading, setHeading] = useState();
  const [message, setMessage] = useState();
  const [showMessage, setShowMessage] = useState(false);
  useEffect(() => {
    const config = {
      headers: {
        Authorization: `Bearer ${userData.token}`,
      },
    };
    const getUserBooks = async () => {
      try {
        const res = await axios("/books", config);
        const { data } = res;
        setBooks(data);
      } catch (error) {
        setShowMessage(true);
        setHeading("Error occurred");
        setMessage("Something went wrong !!!");
      }
    };
    getUserBooks();
  }, [userData.token]);

  return (
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
      />
    </div>
  );
};

export default MyBooks;
