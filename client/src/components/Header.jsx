import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { useUserContext } from "../context/UserContext";
import noProfile from "../images/user.png";
export default function Header({ setShowDetails }) {
  const { userData, setUserData } = useUserContext();
  const [show, setShow] = useState(false);
  const history = useHistory();

  const logoutHandler = () => {
    localStorage.removeItem("userInfo");
    setUserData();
    history.push("/");
  };

  return (
    <>
      <div className="w-full bg-paleturquoise flex justify-between items-center mx-auto px-6 md:px-8 py-4 shadow-md">
        <div className="text-4xl text-darkslategray font-light font-poppins md:pl-8">
          Bookstore
        </div>
        <div className="hidden md:flex justify-center items-center space-x-8">
          <Link to="/" className="nounderline">
            <button className="font-poppins font-normal text-darkslategray rounded-lg hover:shadow-md hover:text-paleturquoise hover:bg-darkslategray px-4 py-2 text-md">
              Home
            </button>
          </Link>
          {userData && (
            <Link to="/myBooks" className="nounderline">
              <button className="font-poppins font-normal text-darkslategray rounded-lg hover:shadow-md hover:text-paleturquoise hover:bg-darkslategray px-4 py-2 text-md">
                My Books
              </button>
            </Link>
          )}
          {!userData && (
            <Link to="/signin" className="nounderline">
              <button className="font-poppins font-normal text-darkslategray rounded-lg hover:shadow-md hover:text-paleturquoise hover:bg-darkslategray px-4 py-2 text-md">
                Sign In
              </button>
            </Link>
          )}
          {!userData && (
            <Link to="/signup" className="nounderline">
              <button className="font-poppins font-normal text-darkslategray rounded-lg hover:shadow-md hover:text-paleturquoise hover:bg-darkslategray px-4 py-2 text-md">
                Sign Up
              </button>
            </Link>
          )}
          {userData && (
            <button
              className="font-poppins font-normal text-darkslategray rounded-lg hover:text-paleturquoise hover:shadow-md hover:bg-darkslategray px-4 py-2 text-md"
              onClick={logoutHandler}
            >
              Logout
            </button>
          )}
          {userData && (
            <button
              className="rounded-full border-[1px] border-darkslategray p-1"
              onClick={() => setShowDetails(true)}
            >
              <img src={noProfile} alt="" className="w-6 h-6 object-cover" />
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
                fill="darkslategray"
              />
            </svg>
          </button>
        </div>
      </div>
      <div className={show ? "md:hidden menu shadow-md" : "hidden"}>
        <Link to="/">
          <div className="block text-md text-darkslategray bg-azure font-normal font-poppins px-8 sm:px-16 md:px-24 py-4  hover:bg-darkslategray hover:text-azure">
            Home
          </div>
        </Link>
        {userData && (
          <Link to="/profile">
            <div className="block text-md  bg-azure font-normal font-poppins px-8 sm:px-16 md:px-24 py-4 text-darkslategray hover:bg-darkslategray hover:text-azure">
              Profile
            </div>
          </Link>
        )}
        {!userData && (
          <Link to="/signin">
            <div className="block text-md  bg-azure font-normal font-poppins px-8 sm:px-16 md:px-24 py-4 text-darkslategray hover:bg-darkslategray hover:text-azure">
              Sign In
            </div>
          </Link>
        )}
        {!userData && (
          <Link to="/signup">
            <div className="block text-md bg-azure font-normal font-poppins px-8 sm:px-16 md:px-24 py-4 text-darkslategray hover:bg-darkslategray hover:text-azure">
              Sign Up
            </div>
          </Link>
        )}
        {userData && (
          <div
            className="block text-md  bg-azure font-normal font-poppins px-8 sm:px-16 md:px-24 py-4 text-darkslategray hover:bg-darkslategray hover:text-azure"
            onClick={logoutHandler}
          >
            Logout
          </div>
        )}
      </div>
    </>
  );
}
