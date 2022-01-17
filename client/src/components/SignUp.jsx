import React, { useState } from "react";

import axios from "axios";
import AlertMessage from "./AlertMessage";
import { useHistory } from "react-router-dom";
const SignUp = () => {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [city, setCity] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmpassword] = useState("");
  const [heading, setHeading] = useState();
  const [message, setMessage] = useState();
  const [showMessage, setShowMessage] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const history = useHistory();
  const togglePassword = (e) => {
    e.preventDefault();
    setShowPassword(!showPassword);
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setShowMessage(true);
      setHeading("Incorrect password");
      setMessage("Confirm password does not match");
    } else {
      try {
        const res = await axios.post("/users/register", {
          firstname,
          lastname,
          city,
          email,
          password,
        });
        console.log(`res`, res);
        setShowMessage(true);
        setHeading("Sign Up successful");
        setMessage("User signed up successfully");
        setTimeout(() => {
          history.push("/signin");
        }, 2000);
      } catch (error) {
        setShowMessage(true);
        setHeading("Sign Up failed");
        setMessage(
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message
        );
      }
    }
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
      <div className="bg-darkslategray h-[89.2vh] grid place-items-center">
        <div className="w-1/4 bg-paleturquoise py-8 rounded-lg">
          <form
            className="flex flex-col items-center space-y-4"
            onSubmit={submitHandler}
          >
            <input
              required
              type="text"
              value={firstname}
              onChange={(e) => setFirstname(e.target.value)}
              placeholder="First Name"
              className="w-4/5 font-poppins placeholder:font-poppins bg-darkslategray text-azure rounded-lg py-2 px-3 focus:outline-none focus:ring-2 focus:ring-azure focus:border-transparent"
            />
            <input
              required
              type="text"
              value={lastname}
              onChange={(e) => setLastname(e.target.value)}
              placeholder="Last Name"
              className="w-4/5 font-poppins placeholder:font-poppins bg-darkslategray text-azure rounded-lg py-2 px-3 focus:outline-none focus:ring-2 focus:ring-azure focus:border-transparent"
            />
            <input
              required
              type="text"
              value={city}
              onChange={(e) => setCity(e.target.value)}
              placeholder="City"
              className="w-4/5 font-poppins placeholder:font-poppins bg-darkslategray text-azure rounded-lg py-2 px-3 focus:outline-none focus:ring-2 focus:ring-azure focus:border-transparent"
            />
            <input
              required
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
              className="w-4/5 font-poppins placeholder:font-poppins bg-darkslategray text-azure rounded-lg py-2 px-3 focus:outline-none focus:ring-2 focus:ring-azure focus:border-transparent"
            />
            <div className="relative w-4/5">
              <input
                required
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                className="w-full font-poppins placeholder:font-poppins bg-darkslategray text-azure rounded-lg py-2 px-3 focus:outline-none focus:ring-2 focus:ring-azure focus:border-transparent"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                pattern=".{8,}"
                title="Minimum eight characters required."
              />
              <span
                className="absolute top-1/2 transform -translate-y-1/2 left-60 text-sm text-azure"
                onClick={() => setShowPassword(!showPassword)}
              >
                <i
                  className={showPassword ? "fas fa-eye" : "fas fa-eye-slash"}
                ></i>
              </span>
            </div>
            <div className="relative w-4/5">
              <input
                required
                type={showPassword ? "text" : "password"}
                placeholder="Confirm Password"
                className="w-full font-poppins placeholder:font-poppins bg-darkslategray text-azure rounded-lg py-2 px-3 focus:outline-none focus:ring-2 focus:ring-azure focus:border-transparent"
                value={confirmPassword}
                onChange={(e) => setConfirmpassword(e.target.value)}
                pattern=".{8,}"
                title="Minimum eight characters required."
              />
              <span className="absolute top-1/2 transform -translate-y-1/2 left-60 text-sm text-azure">
                <button onClick={(e) => togglePassword(e)}>
                  <i
                    class={showPassword ? "fas fa-eye" : "fas fa-eye-slash"}
                  ></i>
                </button>
              </span>
            </div>
            <div className="w-4/5 flex flex-col items-center space-y-4">
              <button
                className="w-full font-poppins bg-azure py-2 px-3 rounded-lg font-semibold text-darkslategray hover:text-azure hover:bg-darkslategray"
                type="submit"
              >
                Sign Up
              </button>
              <a
                href="/signup"
                className="text-xs font-poppins text-darkslategray hover:underline hover:decoration-darkslategray font-semibold"
              >
                Already have an account ?<br /> Sign In
              </a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
