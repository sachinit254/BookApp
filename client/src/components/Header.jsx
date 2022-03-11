import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { useUserContext } from "../context/UserContext";
import noProfile from "../images/user.png";
export default function Header({ setShowDetails }) {
  const { userData, setUserData, isLoggedIn, setIsLoggedIn } = useUserContext();
  const [show, setShow] = useState(false);
  const history = useHistory();
  const logoutHandler = () => {
    localStorage.removeItem("userInfo");
    setUserData();
    setIsLoggedIn(false);
    history.push("/");
  };

  return (
    <>
      <div className="bg-paleturquoise mx-auto flex w-full items-center justify-between px-6 py-4 shadow-md md:px-8">
        <div className="text-darkslategray font-poppins text-4xl font-light md:pl-8">
          Bookstore
        </div>
        <div className="hidden items-center justify-center space-x-8 md:flex">
          <Link to="/" className="nounderline">
            <button className="font-poppins text-darkslategray hover:text-paleturquoise hover:bg-darkslategray text-md rounded-lg px-4 py-2 font-normal hover:shadow-md">
              Home
            </button>
          </Link>
          {isLoggedIn && (
            <Link to="/myBooks" className="nounderline">
              <button className="font-poppins text-darkslategray hover:text-paleturquoise hover:bg-darkslategray text-md rounded-lg px-4 py-2 font-normal hover:shadow-md">
                My Books
              </button>
            </Link>
          )}
          {!isLoggedIn && (
            <Link to="/signin" className="nounderline">
              <button className="font-poppins text-darkslategray hover:text-paleturquoise hover:bg-darkslategray text-md rounded-lg px-4 py-2 font-normal hover:shadow-md">
                Sign In
              </button>
            </Link>
          )}
          {!isLoggedIn && (
            <Link to="/signup" className="nounderline">
              <button className="font-poppins text-darkslategray hover:text-paleturquoise hover:bg-darkslategray text-md rounded-lg px-4 py-2 font-normal hover:shadow-md">
                Sign Up
              </button>
            </Link>
          )}
          {isLoggedIn && (
            <button
              className="font-poppins text-darkslategray hover:text-paleturquoise hover:bg-darkslategray text-md rounded-lg px-4 py-2 font-normal hover:shadow-md"
              onClick={logoutHandler}
            >
              Logout
            </button>
          )}
          {isLoggedIn && (
            <button
              className="border-darkslategray"
              onClick={() => setShowDetails(true)}
            >
              <img
                src={userData?.profilepic ? userData.profilepic : noProfile}
                alt=""
                className="h-10 w-10 rounded-full object-cover"
              />
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
      <div className={show ? "menu shadow-md md:hidden" : "hidden"}>
        <Link to="/">
          <div className="text-md text-darkslategray bg-azure font-poppins hover:bg-darkslategray hover:text-azure block px-8 py-4 font-normal  sm:px-16 md:px-24">
            Home
          </div>
        </Link>
        {isLoggedIn && (
          <Link to="/profile">
            <div className="text-md bg-azure  font-poppins text-darkslategray hover:bg-darkslategray hover:text-azure block px-8 py-4 font-normal sm:px-16 md:px-24">
              Profile
            </div>
          </Link>
        )}
        {!isLoggedIn && (
          <Link to="/signin">
            <div className="text-md bg-azure  font-poppins text-darkslategray hover:bg-darkslategray hover:text-azure block px-8 py-4 font-normal sm:px-16 md:px-24">
              Sign In
            </div>
          </Link>
        )}
        {!isLoggedIn && (
          <Link to="/signup">
            <div className="text-md bg-azure font-poppins text-darkslategray hover:bg-darkslategray hover:text-azure block px-8 py-4 font-normal sm:px-16 md:px-24">
              Sign Up
            </div>
          </Link>
        )}
        {isLoggedIn && (
          <div
            className="text-md bg-azure  font-poppins text-darkslategray hover:bg-darkslategray hover:text-azure block px-8 py-4 font-normal sm:px-16 md:px-24"
            onClick={logoutHandler}
          >
            Logout
          </div>
        )}
      </div>
    </>
  );
}
