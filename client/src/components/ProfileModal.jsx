import axios from "axios";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useUserContext } from "../context/UserContext";
const ProfileModal = ({ setShowDetails }) => {
  const { userData } = useUserContext();
  const [userInfo, setUserInfo] = useState({});
  const history = useHistory();
  const { _id: id } = JSON.parse(localStorage.getItem("userInfo"));
  console.log(id);

  console.log(`userData`, userData);

  useEffect(() => {
    const getUserData = async () => {
      const userInfoFromStorage = localStorage.getItem("userInfo")
        ? JSON.parse(localStorage.getItem("userInfo"))
        : null;
      const { _id: id } = JSON.parse(localStorage.getItem("userInfo"));
      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${userInfoFromStorage.token}`,
        },
      };
      const { data } = await axios.get(`/users/${id}`, config);
      setUserInfo(data);
    };
    getUserData();
  }, []);

  return (
    <div className="bg-paleturquoise border-paleturquoise absolute top-20 right-6 z-[100000] h-60 w-1/6 rounded-lg border-[1px]">
      <div className="relative h-6">
        <button
          className="hover:bg-darkslategray absolute top-[2px] right-[2px] block h-6 w-6 rounded-md hover:text-white"
          onClick={() => setShowDetails(false)}
        >
          X
        </button>
      </div>
      <div className="grid place-items-center">
        <img
          src={userInfo?.profilepic}
          alt="profilePic"
          className="border-darkslategray mb-2 h-16 w-16 rounded-full border-[1px]"
        />
        <h1>{userInfo?.firstname + " " + userInfo?.lastname}</h1>
        <h3 className="mb-4">{userInfo?.city}</h3>
        <button
          className="bg-darkslategray text-paleturquoise rounded-lg px-3 py-1"
          onClick={() => history.push(`/profile/${id}`)}
        >
          Edit Profile
        </button>
      </div>
    </div>
  );
};

export default ProfileModal;
