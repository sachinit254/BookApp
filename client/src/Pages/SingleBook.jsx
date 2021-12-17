import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useHistory } from "react-router";
import { deleteBook, updateBook } from "../actions/bookAction";
import AdminPanel from "../components/AdminPanel";
const SingleBook = () => {
  const [bookId, setBookId] = useState();
  const [title, setTitle] = useState();
  const [author, setAuthor] = useState();
  const [pic, setPic] = useState();
  const [by, setBy] = useState();
  const [from, setFrom] = useState();
  const { id } = useParams();

  const dispatch = useDispatch();

  const bookUpdate = useSelector((state) => state.bookUpdate);
  const { loading: updating, success: updated, error: updateFail } = bookUpdate;

  const bookDelete = useSelector((state) => state.bookDelete);
  const { loading: deleting, success: deleted, error: deleteFail } = bookDelete;
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

  const updateHandler = () => {
    dispatch(updateBook(bookId, title, author, pic, by, from));
    console.log(`updated`, updated);
    if (updated) {
      alert("Book updated successfully  ");
    }
  };

  const bookDeleteHandler = (id) => {
    dispatch(deleteBook(id));
    console.log(`deleted`, deleted);
    if (deleted) {
      history.push("/");
    }
    console.log(`deleteFail`, deleteFail);
    deleteFail && alert(deleteFail);
  };

  useEffect(() => {
    if (deleted) {
      history.push("/");
    }
  }, [deleted,history]);

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
