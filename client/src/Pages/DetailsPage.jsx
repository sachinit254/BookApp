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

  const userInfoFromStorage = localStorage.getItem("userInfo")
    ? JSON.parse(localStorage.getItem("userInfo"))
    : null;

  // const config = {
  //   headers: {
  //     "Content-Type": "application/json",
  //     Authorization: `Bearer ${userInfoFromStorage?.token}`,
  //   },
  // };

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
        setShowMessage(true);
        setHeading("Error occurred");
        setMessage("Book not found");
      }
    };
    getBook();
  }, [id]);

  // const updateHandler = async () => {
  //   try {
  //     const res = await axios.put(
  //       `/books/${id}`,
  //       { title, author, pic, by, from },
  //       config
  //     );
  //     if (res.status === 200) {
  //       setShowMessage(true);
  //       setHeading("Book updated");
  //       setMessage("Book has been updated successfully");
  //     }
  //   } catch (error) {
  //     setShowMessage(true);
  //     setHeading("Error occurred");
  //     setMessage("You cannot perform this action");
  //   }
  // };

  // const bookDeleteHandler = async (id) => {
  //   try {
  //     const res = await axios.delete(`/books/${id}`, config);
  //     setShowMessage(true);
  //     setHeading("Book Deleted");
  //     setMessage("Book has been deleted successfully");
  //     if (res.status === 200) {
  //       setTimeout(() => {
  //         history.push("/myBooks");
  //       }, [2000]);
  //     }
  //   } catch (error) {
  //     setShowMessage(true);
  //     setHeading("Error occurred");
  //     setMessage("You cannot perform this action");
  //   }
  // };

  // const uploadPic = async (pics) => {
  //   setPic(pics);
  //   if (pics?.type === "image/jpeg" || pics?.type === "image/png") {
  //     const body = new FormData();
  //     body.append("file", pics);
  //     body.append("upload_preset", "BookPic");
  //     body.append("cloud_name", process.env.REACT_APP_CLOUD_NAME);
  //     try {
  //       const res = await axios.post(
  //         process.env.REACT_APP_CLOUDINARY_URL,
  //         body
  //       );
  //       const { data } = res;
  //       console.log(`data`, data);
  //       setPic(data.url.toString());
  //     } catch (error) {
  //       setShowMessage(true);
  //       setHeading("Error occurred");
  //       setMessage("Image cannot be uploaded");
  //     }
  //   } else {
  //     setShowMessage(true);
  //     setHeading("Error occurred");
  //     setMessage("Please select an image");
  //   }
  // };

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
