import React, { useState } from "react";
import ForgotPassword from "../components/ForgotPassword";
import { ToastContainer, toast, Slide } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../toast.css";
import axios from "axios";

const ForgotPasswordPage = () => {
  const [email, setEmail] = useState("");

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      if (email) {
        const res = await axios.post("/users/forgot-password", {
          email: email,
        });
        const { data } = res;
        toast.success(data.message);
        setEmail("");
      }
    } catch (error) {
      toast.error(
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message
      );
    }
    console.log("submit handler ran");
  };
  return (
    <>
      <ToastContainer
        theme="light"
        autoClose={2000}
        transition={Slide}
        hideProgressBar={true}
      />
      <ForgotPassword
        email={email}
        setEmail={setEmail}
        submitHandler={submitHandler}
      />
    </>
  );
};

export default ForgotPasswordPage;
