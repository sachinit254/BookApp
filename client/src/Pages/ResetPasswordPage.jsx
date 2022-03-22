import React, { useState } from "react";
import ResetPassword from "../components/ResetPassword";
import { useParams } from "react-router-dom";
import { ToastContainer, toast, Slide } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../toast.css";
import axios from "axios";

const ResetPasswordPage = () => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const { id, token } = useParams();
  console.log("id:", id, "token:", token);
  const togglePassword = (e) => {
    e.preventDefault();
    setShowPassword(!showPassword);
  };

  const toggleConfirmPassword = (e) => {
    e.preventDefault();
    setShowConfirmPassword(!showConfirmPassword);
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      if (password === confirmPassword) {
        const { data } = await axios.post(
          `/users/reset-password/${id}/${token}`,
          {
            password: password,
          }
        );
        toast.success(data.message);
        setPassword("");
        setConfirmPassword("");
      } else {
        toast.warn("New Password and Confirm Password should be same");
      }
    } catch (error) {
      toast.error(
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message
      );
    }
  };

  const props = {
    password: password,
    setPassword: setPassword,
    confirmPassword: confirmPassword,
    setConfirmPassword: setConfirmPassword,
    submitHandler: submitHandler,
    showPassword: showPassword,
    showConfirmPassword: showConfirmPassword,
    togglePassword: togglePassword,
    toggleConfirmPassword: toggleConfirmPassword,
  };

  return (
    <>
      <ToastContainer
        theme="light"
        autoClose={2000}
        transition={Slide}
        hideProgressBar={true}
      />
      <ResetPassword {...props} />
    </>
  );
};

export default ResetPasswordPage;
