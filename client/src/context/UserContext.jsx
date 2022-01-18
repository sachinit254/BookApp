import axios from "axios";
import React, { createContext, useContext, useEffect, useState } from "react";

const UserContext = createContext();

const useUserContext = () => {
  const context = useContext(UserContext);
  if (context === undefined) {
    throw new Error("useUserContext must be used within a CountProvider");
  }
  return context;
};

const ContextProvider = ({ children }) => {
  const [userData, setUserData] = useState(() =>
    localStorage.getItem("userInfo")
      ? JSON.parse(localStorage.getItem("userInfo"))
      : null
  );
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
        const res = await axios.get("/books", config);
        const { data } = res;
        setBooks(data);
      } catch (error) {
        console.log(`error`, error);
      }
    };
    getBooks();
  }, [setBooks]);

  console.log("Context");
  console.log(`books`, books);

  return (
    <UserContext.Provider
      value={{
        userData,
        setUserData,
        books,
        setBooks,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export { ContextProvider, useUserContext };
