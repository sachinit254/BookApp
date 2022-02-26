import axios from "axios";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import AlertMessage from "../components/AlertMessage";
import SignIn from "../components/SignIn";
import { useUserContext } from "../context/UserContext";
const SignInPage = () => {
  const { setUserData } = useUserContext();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState();
  const [heading, setHeading] = useState();
  const [showMessage, setShowMessage] = useState(false);
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
      setShowMessage(true);
      setHeading("Login succeed");
      setMessage("User logged in successfully");
      setTimeout(() => {
        history.push("/");
      }, [2000]);
    } catch (error) {
      setShowMessage(true);
      setHeading("Login failed");
      
      setMessage(
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message
      );
    }
  };
  return (
    <>
      {showMessage && (
        <AlertMessage
          message={message}
          heading={heading}
          setShowMessage={setShowMessage}
          deleteHandler={() => {
            setShowMessage(false);
            setHeading("");
            setMessage("");
          }}
        />
      )}
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
