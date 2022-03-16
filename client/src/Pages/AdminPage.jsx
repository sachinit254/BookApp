import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams, useHistory, useLocation } from "react-router";
import AdminPanel from "../components/AdminPanel";
import { ToastContainer, toast, Slide } from "react-toastify";
import { useUserContext } from "../context/UserContext";
import "react-toastify/dist/ReactToastify.css";
import "../toast.css";

const SingleBook = () => {
  const { books, setBooks } = useUserContext();
  const [bookId, setBookId] = useState();
  const [title, setTitle] = useState();
  const [author, setAuthor] = useState();
  const [pic, setPic] = useState();
  const [by, setBy] = useState();
  const [from, setFrom] = useState();

  const { id } = useParams();

  const history = useHistory();
  const location = useLocation();

  console.log(location);

  const userInfoFromStorage = localStorage.getItem("userInfo")
    ? JSON.parse(localStorage.getItem("userInfo"))
    : null;

  const config = {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${userInfoFromStorage?.token}`,
    },
  };

  useEffect(() => {
    if (!userInfoFromStorage) {
      history.push("/signin");
    }
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
        toast.error("Cannot get book details");
      }
    };
    getBook();
  }, [id]);

  const updateHandler = async () => {
    try {
      const res = await axios.put(
        `/books/${id}`,
        { title, author, pic, by, from },
        config
      );
      console.log(`res.data`, res.data);
      let updatedBookList = books.filter((book) => book?._id !== id);
      let book = books.filter((book) => book?._id === id);
      book = res.data;
      let finalBooks = [...updatedBookList, book];
      setBooks(finalBooks);
      console.log(`book`, book);
      toast.success("Book has been updated successfully");
    } catch (error) {
      toast.error("Book details update failed");
    }
  };

  const bookDeleteHandler = async (id) => {
    try {
      const res = await axios.delete(`/books/${id}`, config);
      console.log(`res`, res.data);
      console.log(`res.data.message`, res.data.message);
      if (res.data.message === "Book Removed") {
        let book = books.filter((book) => book?._id !== id);
        console.log(`book`, book);
        setBooks(book);
      }
      toast.success("Book has been deleted successfully");
      setTimeout(() => {
        history.push("/myBooks");
      }, [2000]);
    } catch (error) {
      toast.error("Book delete failed");
    }
  };

  const uploadPic = async (pics) => {
    setPic(pics);
    if (pics?.type === "image/jpeg" || pics?.type === "image/png") {
      const body = new FormData();
      body.append("file", pics);
      body.append("upload_preset", "BookPic");
      body.append("cloud_name", process.env.REACT_APP_CLOUD_NAME);
      try {
        const res = await axios.post(
          process.env.REACT_APP_CLOUDINARY_URL,
          body
        );
        const { data } = res;
        console.log(`data`, data);
        setPic(data.url.toString());
      } catch (error) {
        toast.error("Image cannot be uploaded");
      }
    } else {
      toast.warn("Please select an image");
    }
  };

  const historyPush = () => {
    history.push("/singleBook");
  };
  return (
    <>
      <div>
        <ToastContainer
          theme="light"
          autoClose={2000}
          transition={Slide}
          hideProgressBar={true}
        />
        <AdminPanel
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
          updateHandler={updateHandler}
          bookDeleteHandler={bookDeleteHandler}
          uploadPic={uploadPic}
          historyPush={historyPush}
        />
      </div>
    </>
  );
};

export default SingleBook;
