import axios from "axios";
import React, { useRef, useState } from "react";
import { useParams } from "react-router-dom";
import { Slide, toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import UserDetails from "../components/UserDetails";
import { useUserContext } from "../context/UserContext";
import "../toast.css";

const Profile = () => {
  const { userData, setUserData } = useUserContext();
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [pic, setPic] = useState();
  const ref = useRef();
  const params = useParams();
  const { id } = params;
  console.log(typeof id);

  const uploadPic = async (pics) => {
    setPic(pics);
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
        setPic(data.url.toString());
      } catch (error) {
        toast.error("Image cannot be uploaded");
      }
    } else {
      toast.warn("Please select an image");
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
      const body = {
        firstname: userData.firstname,
        lastname: userData.lastname,
        city: userData.city,
        email: userData.email,
        profilepic: pic,
        phone: userData.phone,
      };
      try {
        const res = await axios.put(`/users/profile`, body, config);
        const { data } = res;
        setUserData(data);
      } catch (error) {
        toast.error(
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message
        );
      }
    }
  };

  let props = {
    pic: pic,
    setPic: setPic,
    uploadPic: uploadPic,
    imageRemove: imageRemove,
    userData: userData,
    setUserData: setUserData,
    password: password,
    setPassword: setPassword,
    confirmPassword: confirmPassword,
    setConfirmPassword: setConfirmPassword,
    handleChange: handleChange,
    submitHandler: submitHandler,
    ref: ref,
  };

  return (
    <div className="bg-darkslategray overflow-y-hidden">
      <ToastContainer
        theme="light"
        autoClose={2000}
        transition={Slide}
        hideProgressBar={true}
      />
      <UserDetails {...props} />
    </div>
  );
};

export default Profile;
