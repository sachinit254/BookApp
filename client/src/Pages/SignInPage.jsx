import axios from "axios";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { Slide, toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import SignIn from "../components/SignIn";
import { useUserContext } from "../context/UserContext";
const SignInPage = () => {
  const { setUserData, setIsLoggedIn } = useUserContext();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();
  const config = {
    headers: {
      "Content-type": "application/json",
    },
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("/users/login", { email, password }, config);
      const { data } = res;
      localStorage.setItem("userInfo", JSON.stringify(data));
      setUserData(data);
      setIsLoggedIn(true);
      toast.success("User logged in successfully");
      setTimeout(() => {
        history.push("/");
      }, [2000]);
    } catch (error) {
      toast.error(
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message
      );
    }
  };
  return (
    <>
      <ToastContainer
        theme="light"
        autoClose={2000}
        transition={Slide}
        hideProgressBar={true}
      />
      <SignIn
        email={email}
        setEmail={setEmail}
        password={password}
        setPassword={setPassword}
        submitHandler={submitHandler}
      />
    </>
  );
};

export default SignInPage;
