import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams, useHistory, useLocation } from "react-router";
import AlertMessage from "../components/AlertMessage";
import SingleBook from "../components/SingleBook";
const DetailsPage = () => {
  const [bookId, setBookId] = useState();
  const [title, setTitle] = useState();
  const [author, setAuthor] = useState();
  const [pic, setPic] = useState();
  const [by, setBy] = useState();
  const [from, setFrom] = useState();
  const [heading, setHeading] = useState();
  const [message, setMessage] = useState();
  const [showMessage, setShowMessage] = useState(false);
  const { id } = useParams();

  const history = useHistory();
  const location = useLocation();

  console.log(location);

  useEffect(() => {
    const getBook = async () => {
      try {
        const res = await axios.get(`/books/${id}`);
        const { data } = res;
        setBookId(data?._id);
        setTitle(data?.title);
        setAuthor(data?.author);
        setPic(data?.pic);
        setBy(data?.by);
        setFrom(data?.from);
      } catch (error) {
        setShowMessage(true);
        setHeading("Error occurred");
        setMessage("Cannot get book details");
      }
    };
    getBook();
  }, [id]);

  const historyPush = () => {
    history.push("/singleBook");
  };

  return (
    <div>
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
      <SingleBook
        bookId={bookId}
        title={title}
        setTitle={setTitle}
        author={author}
        setAuthor={setAuthor}
        pic={pic}
        by={by}
        setBy={setBy}
        from={from}
        setFrom={setFrom}
        historyPush={historyPush}
      />
    </div>
  );
};

export default DetailsPage;
