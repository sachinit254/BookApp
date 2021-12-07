import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../actions/userActions";

export default function ButtonAppBar() {
  const [show, setShow] = useState(false);
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;
  const dispatch = useDispatch();
  const history = useHistory();
  const logoutHandler = () => {
    dispatch(logout());
    history.push("/");
  };
  return (
    <>
      {/* New Navbar */}
      <div className="w-full flex justify-between items-center mx-auto px-6 md:px-8 py-4 shadow-md">
        <div className="text-2xl font-bold font-poppins md:pl-8">
          BookStore
        </div>
        <div className="hidden md:flex justify-center items-center space-x-8 ">
          <Link to="/" className="nounderline">
            <button className="font-poppins text-gray-500 rounded-xl hover:shadow-md hover:text-black hover:bg-gray-100 p-2 font-semibold text-md">
              Home
            </button>
          </Link>
          <Link to="/about" className="nounderline">
            <button className="font-poppins text-gray-500 rounded-xl hover:shadow-md hover:text-black hover:bg-gray-100 p-2 font-semibold text-md">
              About
            </button>
          </Link>
          {userInfo && (
            <Link to="/profile" className="nounderline">
              <button className="font-poppins text-gray-500 rounded-xl hover:shadow-md hover:text-black hover:bg-gray-100 p-2 font-semibold text-md">
                Profile
              </button>
            </Link>
          )}
          {!userInfo && (
            <Link to="/login" className="nounderline">
              <button className="font-poppins text-gray-500 rounded-xl hover:shadow-md hover:text-black hover:bg-gray-100 p-2 font-semibold text-md">
                Login
              </button>
            </Link>
          )}
          {!userInfo && (
            <Link to="/signup" className="nounderline">
              <button className="font-poppins text-gray-500 rounded-xl hover:shadow-md hover:text-black hover:bg-gray-100 p-2 font-semibold text-md">
                Sign Up
              </button>
            </Link>
          )}
          {userInfo && (
            <button
              className="font-poppins text-gray-500 rounded-xl hover:shadow-md hover:text-black hover:bg-gray-100 p-2 font-semibold text-md"
              onClick={logoutHandler}
            >
              Logout
            </button>
          )}
        </div>
        <div className="md:hidden">
          <button className="navToggler" onClick={() => setShow(!show)}>
            <svg
              width="26"
              height="18"
              viewBox="0 0 26 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M13 17.5H0.25V14.6667H13V17.5ZM25.75 10.4167H0.25V7.58333H25.75V10.4167ZM25.75 3.33333H13V0.5H25.75V3.33333Z"
                fill="black"
              />
            </svg>
          </button>
        </div>
      </div>
      <div className={show ? "md:hidden menu shadow-md pb-2" : "hidden"}>
        <Link to="/">
          <div className="block text-md font-semibold font-poppins px-8 sm:px-16 md:px-24 py-4 text-gray-500 hover:text-black hover:bg-gray-100">
            Home
          </div>
        </Link>
        <Link to="/about">
          <div className="block text-md font-semibold font-poppins px-8 sm:px-16 md:px-24 py-4 text-gray-500 hover:text-black hover:bg-gray-100">
            About
          </div>
        </Link>
        {userInfo && (
          <Link to="/profile">
            <div className="block text-md font-semibold font-poppins px-8 sm:px-16 md:px-24 py-4 text-gray-500 hover:text-black hover:bg-gray-100">
              Profile
            </div>
          </Link>
        )}
        {!userInfo && (
          <Link to="/login">
            <div className="block text-md font-semibold font-poppins px-8 sm:px-16 md:px-24 py-4 text-gray-500 hover:text-black hover:bg-gray-100">
              Login
            </div>
          </Link>
        )}
        {!userInfo && (
          <Link to="/signup">
            <div className="block text-md font-semibold font-poppins px-8 sm:px-16 md:px-24 py-4 text-gray-500 hover:text-black hover:bg-gray-100">
              Sign Up
            </div>
          </Link>
        )}
        {userInfo && (
          <div
            className="block text-md font-semibold font-poppins px-8 sm:px-16 md:px-24 py-4 text-gray-500 hover:text-black hover:bg-gray-100"
            onClick={logoutHandler}
          >
            Logout
          </div>
        )}
      </div>
    </>
  );
}
