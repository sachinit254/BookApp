import React, { createContext, useContext, useState } from "react";

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
  console.log(`userData`, userData);
  return (
    <UserContext.Provider
      value={{ data: { userData }, setData: { setUserData } }}
    >
      {children}
    </UserContext.Provider>
  );
};

export { ContextProvider, useUserContext };
