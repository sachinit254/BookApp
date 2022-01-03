import axios from "axios";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import AlertMessage from "../components/AlertMessage";
import LogIn from "../components/SignIn";
import { useUserContext } from "../context/LoggedInContext";
const SignInPage = () => {
  const { setData } = useUserContext();
  const { setUserData } = setData;
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
    const res = await axios.post("/users/login", { email, password }, config);
    const { data } = res;
    localStorage.setItem("userInfo", JSON.stringify(data));
    setUserData(data);
    if (res.status === 200) {
      setShowMessage(true);
      setHeading("Login succeed");
      setMessage("User logged in successfully");
      setTimeout(() => {
        history.push("/");
      }, [2000]);
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
      <LogIn
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
