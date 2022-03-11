import React, { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { Slide, toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const SignUp = () => {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [city, setCity] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState(0);
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmpassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const history = useHistory();
  const togglePassword = (e) => {
    e.preventDefault();
    setShowPassword(!showPassword);
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      toast.warn("Incorrect password");
    } else {
      try {
        const res = await axios.post("/users/register", {
          firstname,
          lastname,
          city,
          email,
          phone,
          password,
        });
        console.log(`res`, res);
        toast.success("Sign Up successfull");
        setTimeout(() => {
          history.push("/signin");
        }, 2000);
      } catch (error) {
        toast.error(
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message
        );
      }
    }
  };

  return (
    <div>
      <ToastContainer
        theme="light"
        autoClose={2000}
        transition={Slide}
        hideProgressBar={true}
      />
      <div className="bg-darkslategray grid h-[89.2vh] place-items-center">
        <div className="bg-paleturquoise w-1/4 rounded-lg py-8">
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
              className="font-poppins placeholder:font-poppins bg-darkslategray text-azure focus:ring-azure w-4/5 rounded-lg px-3 py-2 focus:border-transparent focus:outline-none focus:ring-2"
            />
            <input
              required
              type="text"
              value={lastname}
              onChange={(e) => setLastname(e.target.value)}
              placeholder="Last Name"
              className="font-poppins placeholder:font-poppins bg-darkslategray text-azure focus:ring-azure w-4/5 rounded-lg px-3 py-2 focus:border-transparent focus:outline-none focus:ring-2"
            />
            <input
              required
              type="text"
              value={city}
              onChange={(e) => setCity(e.target.value)}
              placeholder="City"
              className="font-poppins placeholder:font-poppins bg-darkslategray text-azure focus:ring-azure w-4/5 rounded-lg px-3 py-2 focus:border-transparent focus:outline-none focus:ring-2"
            />
            <input
              required
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
              className="font-poppins placeholder:font-poppins bg-darkslategray text-azure focus:ring-azure w-4/5 rounded-lg px-3 py-2 focus:border-transparent focus:outline-none focus:ring-2"
            />
            <input
              required
              type="number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="Phone Number"
              className="font-poppins placeholder:font-poppins bg-darkslategray text-azure focus:ring-azure w-4/5 rounded-lg px-3 py-2 focus:border-transparent focus:outline-none focus:ring-2"
            />
            <div className="relative w-4/5">
              <input
                required
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                className="font-poppins placeholder:font-poppins bg-darkslategray text-azure focus:ring-azure w-full rounded-lg px-3 py-2 focus:border-transparent focus:outline-none focus:ring-2"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                pattern=".{8,}"
                title="Minimum eight characters required."
              />
              <span
                className="text-azure absolute top-1/2 left-60 -translate-y-1/2 transform text-sm"
                onClick={() => setShowPassword(!showPassword)}
              >
                <i
                  className={showPassword ? "fas fa-eye-slash" : "fas fa-eye"}
                ></i>
              </span>
            </div>
            <div className="relative w-4/5">
              <input
                required
                type={showPassword ? "text" : "password"}
                placeholder="Confirm Password"
                className="font-poppins placeholder:font-poppins bg-darkslategray text-azure focus:ring-azure w-full rounded-lg px-3 py-2 focus:border-transparent focus:outline-none focus:ring-2"
                value={confirmPassword}
                onChange={(e) => setConfirmpassword(e.target.value)}
                pattern=".{8,}"
                title="Minimum eight characters required."
              />
              <span className="text-azure absolute top-1/2 left-60 -translate-y-1/2 transform text-sm">
                <button onClick={(e) => togglePassword(e)}>
                  <i
                    class={showPassword ? "fas fa-eye-slash" : "fas fa-eye"}
                  ></i>
                </button>
              </span>
            </div>
            <div className="flex w-4/5 flex-col items-center space-y-4">
              <button
                className="font-poppins bg-azure text-darkslategray hover:text-azure hover:bg-darkslategray w-full rounded-lg px-3 py-2 font-semibold"
                type="submit"
              >
                Sign Up
              </button>
              <a
                href="/signup"
                className="font-poppins text-darkslategray hover:decoration-darkslategray text-xs font-semibold hover:underline"
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
