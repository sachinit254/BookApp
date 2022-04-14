import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams, useLocation } from "react-router";
import { Slide, toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import SingleBook from "../components/SingleBook";
import { axiosInstance } from "../config";
import "../toast.css";

const DetailsPage = () => {
  const [bookId, setBookId] = useState();
  const [title, setTitle] = useState();
  const [author, setAuthor] = useState();
  const [pic, setPic] = useState();
  const [by, setBy] = useState();
  const [from, setFrom] = useState();
  const [phone, setPhone] = useState();
  const { id } = useParams();

  const location = useLocation();

  console.log(location);

  useEffect(() => {
    const getBook = async () => {
      try {
        const res = await axiosInstance.get(`/books/${id}`);
        const { data } = res;
        setBookId(data?._id);
        setTitle(data?.title);
        setAuthor(data?.author);
        setPic(data?.pic);
        setBy(data?.by);
        setFrom(data?.from);
        setPhone(data?.phoneNumber);
      } catch (error) {
        toast.error("Cannot get book details");
      }
    };
    getBook();
  }, [id]);

  return (
    <div>
      <ToastContainer
        theme="light"
        autoClose={2000}
        transition={Slide}
        hideProgressBar={true}
      />
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
        phone={phone}
      />
    </div>
  );
};

export default DetailsPage;
