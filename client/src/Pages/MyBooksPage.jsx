import React, { useState } from "react";
import BookForm from "../components/BookForm";
import Cards from "../components/Cards";
import { useUserContext } from "../context/UserContext";

const MyBooks = () => {
  const [show, setShow] = useState(false);
  const { userData, books } = useUserContext();

  return (
    <>
      <div className="h-full min-h-screen">
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
