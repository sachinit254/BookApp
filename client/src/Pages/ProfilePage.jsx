import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import AlertMessage from "../components/AlertMessage";

import UserDetails from "../components/UserDetails";
const Profile = () => {
  const [userData, setUserData] = useState({});
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [pic, setPic] = useState();
  const [from, setFrom] = useState("");
  const [by, setBy] = useState("");

  const [profilePic, setProfilePic] = useState();

  const [heading, setHeading] = useState();
  const [message, setMessage] = useState();
  const [showMessage, setShowMessage] = useState(false);
  const ref = useRef();
  const params = useParams();
  const { id } = params;

  useEffect(() => {
    const getUserData = async () => {
      const userInfoFromStorage = localStorage.getItem("userInfo")
        ? JSON.parse(localStorage.getItem("userInfo"))
        : null;
      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${userInfoFromStorage.token}`,
        },
      };
      const { data } = await axios.get(`/users/${id}`, config);
      console.log(data);
      setUserData(data);
    };
    getUserData();
  }, [id]);

  const uploadPic = async (pics) => {
    setProfilePic(pics);
    if (pics?.type === "image/jpeg" || pics?.type === "image/png") {
      const body = new FormData();
      body.append("file", pics);
      body.append("upload_preset", "BookPic");
      body.append("cloud_name", process.env.REACT_APP_CLOUD_NAME);
      try {
        const res = await axios.post(
          process.env.REACT_APP_CLOUDINARY_URL,
          body
        );
        const { data } = res;
        console.log(`data`, data);
        setUserData({ ...userData, profilepic: data.url.toString() });
      } catch (error) {
        setShowMessage(true);
        setHeading("Error occurred");
        setMessage("Image cannot be uploaded");
      }
    } else {
      setShowMessage(true);
      setHeading("Error occurred");
      setMessage("Please select an image");
    }
  };
  const imageRemove = (e) => {
    e.preventDefault();
    ref.current.value = "";
    setPic();
  };

  const handleChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };
  console.log(userData);

  const submitHandler = async (e) => {
    e.preventDefault();

    if (
      userData.firstname &&
      userData.lastname &&
      userData.city &&
      userData.email &&
      userData.phone
    ) {
      const userInfoFromStorage = localStorage.getItem("userInfo")
        ? JSON.parse(localStorage.getItem("userInfo"))
        : null;
      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${userInfoFromStorage.token}`,
        },
      };
      try {
        const res = await axios.put(`/users/profile`, userData, config);
        const { data } = res;
        setUserData(data);
      } catch (error) {
        console.log(
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message
        );
      }
    }
  };

  let props = {
    title: title,
    setTitle: setTitle,
    author: author,
    setAuthor: setAuthor,
    pic: pic,
    setPic: setPic,
    from: from,
    setFrom: setFrom,
    by: by,
    setBy: setBy,
    profilePic: profilePic,
    setProfilePic: setProfilePic,
    uploadPic: uploadPic,
    imageRemove: imageRemove,
    ref: ref,
    userData: userData,
    setUserData: setUserData,
    password: password,
    setPassword: setPassword,
    confirmPassword: confirmPassword,
    setConfirmPassword: setConfirmPassword,
    handleChange: handleChange,
    submitHandler,
  };

  return (
    <div className="bg-darkslategray relative h-screen w-screen overflow-y-hidden">
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
      <UserDetails {...props} />
    </div>
  );
};

export default Profile;
