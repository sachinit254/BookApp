import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import Book from "../components/Book";
const SingleBook = () => {
  const [book, setBook] = useState({});

  const { id } = useParams();
  console.log(`bookDetails`, id);

  useEffect(() => {
    const getBook = async () => {
      const { data } = await axios.get(`/books/${id}`);
      setBook(data);
    };
    getBook();
  }, [id]);
  console.log(`book`, book);
  return (
    <div>
      <Book book={book} />
    </div>
  );
};

export default SingleBook;
