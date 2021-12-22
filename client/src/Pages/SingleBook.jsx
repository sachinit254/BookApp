import axios from "axios";
import React, { useEffect, useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
import { useParams, useHistory } from "react-router";
import AdminPanel from "../components/AdminPanel";
import AlertMessage from "../components/AlertMessage";
const SingleBook = () => {
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

  useEffect(() => {
    const getBook = async () => {
      // TODO make a component to that we can show when no data is found
      const res = await axios.get(`/boks/${id}`);
      const { data } = res;
      if (res.status !== 200) {
        setShowMessage(true);
        setHeading("Error occurred");
        setMessage("Can't fetch books from database");
      }
      setBookId(data?._id);
      setTitle(data?.title);
      setAuthor(data?.author);
      setPic(data?.pic);
      setBy(data?.by);
      setFrom(data?.from);
    };
    getBook();
  }, [id]);

  const userInfoFromStorage = localStorage.getItem("userInfo")
    ? JSON.parse(localStorage.getItem("userInfo"))
    : null;

  const config = {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${userInfoFromStorage.token}`,
    },
  };

  const updateHandler = async () => {
    const res = await axios.put(
      `/books/${id}`,
      { title, author, pic, by, from },
      config
    );
    const { data } = res;
    if (res.status === 200) {
      setShowMessage(true);
      setHeading("Book updated");
      setMessage("Book has been updated successfully");
    } else {
      setShowMessage(true);
      setHeading("Error occurred");
      setMessage("Book cannot be updated");
    }
    console.log(`data`, data);
  };

  const bookDeleteHandler = async (id) => {
    const res = await axios.delete(`/books/${id}`, config);
    const { data } = res;
    if (res.status === 200) {
      history.push("/");
    }
    console.log(data);
  };

  const uploadPic = (pics) => {
    setPic(pics);
    if (pics?.type === "image/jpeg" || pics?.type === "image/png") {
      const data = new FormData();
      data.append("file", pics);
      data.append("upload_preset", "BookPic");
      data.append("cloud_name", process.env.REACT_APP_CLOUD_NAME);
      fetch(process.env.REACT_APP_CLOUDINARY_URL, {
        method: "post",
        body: data,
      })
        .then((res) => res.json())
        .then((data) => {
          setPic(data.url.toString());
          console.log(`data`, data);
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      return alert("Please Select an Image");
    }
  };
  return (
    <div>
      {showMessage && (
        <AlertMessage
          heading={heading}
          message={message}
          setShowMessage={setShowMessage}
        />
      )}
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
      />
    </div>
  );
};

export default SingleBook;
