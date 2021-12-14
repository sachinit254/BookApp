import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useHistory } from "react-router";
import { deleteBook } from "../actions/bookAction";
import Book from "../components/Book";
const SingleBook = () => {
  const [bookId, setBookId] = useState();
  const [title, setTitle] = useState();
  const [author, setAuthor] = useState();
  const [pic, setPic] = useState();
  const [by, setBy] = useState();
  const [from, setFrom] = useState();

  const { id } = useParams();

  const dispatch = useDispatch();

  const bookDelete = useSelector((state) => state.bookDelete);
  const { loading, success, error } = bookDelete;
  console.log(`bookDelete`, bookDelete);
  const history = useHistory();

  useEffect(() => {
    const getBook = async () => {
      const { data } = await axios.get(`/books/${id}`);
      setBookId(data?._id);
      setTitle(data?.title);
      setAuthor(data?.author);
      setPic(data?.pic);
      setBy(data?.by);
      setFrom(data?.from);
    };
    getBook();
  }, [id]);

  const bookDeleteHandler = (id) => {
    dispatch(deleteBook(id));
    if (success === true) {
      history.push("/");
    }
  };
  return (
    <div>
      <Book
        bookId={bookId}
        title={title}
        setTitle={setTitle}
        author={author}
        setAuthor={setAuthor}
        pic={pic}
        setPic={setPic}
        by={by}
        setBy={setBy}
        from={from}
        setFrom={setFrom}
        bookDeleteHandler={bookDeleteHandler}
      />
    </div>
  );
};

export default SingleBook;
