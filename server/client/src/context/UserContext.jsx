import axios from "axios";
import React, { createContext, useContext, useEffect, useState } from "react";
import { axiosInstance } from "../config";

const UserContext = createContext();

const useUserContext = () => {
  const context = useContext(UserContext);
  if (context === undefined) {
    throw new Error("useUserContext must be used within a CountProvider");
  }
  return context;
};

const ContextProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userData, setUserData] = useState({});
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const userInfoFromStorage = localStorage.getItem("userInfo")
      ? JSON.parse(localStorage.getItem("userInfo"))
      : null;

    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${userInfoFromStorage?.token}`,
      },
    };
    const getBooks = async () => {
      try {
        const res = await axiosInstance.get("/books", config);
        const { data } = res;
        setBooks(data);
      } catch (error) {
        console.log(`error`, error);
      }
    };

    getBooks();
  }, []);

  useEffect(() => {
    const userInfoFromStorage = localStorage.getItem("userInfo")
      ? JSON.parse(localStorage.getItem("userInfo"))
      : null;

    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${userInfoFromStorage?.token}`,
      },
    };
    const getUserData = async () => {
      try {
        if (userInfoFromStorage) {
          const { _id: id } = userInfoFromStorage;
          const { data } = await axiosInstance.get(`/users/${id}`, config);
          setUserData(data);
        }
      } catch (err) {
        console.log(`error`, err);
      }
    };

    getUserData();
  }, []);

  useEffect(() => {
    const userInfoFromStorage = localStorage.getItem("userInfo");
    if (userInfoFromStorage) {
      setIsLoggedIn(true);
    }
  }, []);

  console.log("Context");
  console.log(`books`, books);

  return (
    <UserContext.Provider
      value={{
        userData,
        setUserData,
        books,
        setBooks,
        isLoggedIn,
        setIsLoggedIn,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export { ContextProvider, useUserContext };
