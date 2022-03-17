import axios from "axios";
import React, { useRef, useState } from "react";
import { ToastContainer, toast, Slide } from "react-toastify";
import { useUserContext } from "../context/UserContext";
import "react-toastify/dist/ReactToastify.css";
import "../toast.css";
const BookForm = ({ show, setShow, fieldRef }) => {
  const { books, setBooks } = useUserContext();
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [pic, setPic] = useState();
  const [from, setFrom] = useState("");
  const [by, setBy] = useState("");
  const { phone: phoneNumber } = JSON.parse(localStorage.getItem("userInfo"));
  const ref = useRef();

  //uploading pic to cloudinary
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

  // This function will remove the selected image from the input
  const imageRemove = (e) => {
    e.preventDefault();
    ref.current.value = "";
    setPic();
  };

  const submitHandler = async (e) => {
    e.preventDefault();

    if (title && author && pic && from && by) {
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
        const res = await axios.post(
          `/books/createBook`,
          { title, author, pic, from, by, phoneNumber },
          config
        );
        const { data } = res;
        setBooks([...books, data]);
        toast.success("Book has been created successfully");
        setTimeout(() => {
          setShow(false);
        }, [2000]);
        setTitle("");
        setAuthor("");
        setPic("");
        setBy("");
        setFrom("");
        ref.current.value = "";
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
    <div
      className="grid h-[100vh] place-content-center overflow-hidden"
      ref={fieldRef}
    >
      <ToastContainer
        theme="light"
        autoClose={2000}
        transition={Slide}
        hideProgressBar={true}
      />
      <div className="bg-darkslategray  h-[100vh] w-screen overflow-hidden filter">
        <div className={`container mx-auto grid h-screen place-items-center`}>
          <div
            className={`bg-paleturquoise relative mx-auto w-3/4 rounded-lg sm:w-2/5 md:w-1/3 lg:w-1/4`}
          >
            <div className="flex justify-end">
              <button
                className="hover:bg-darkslategray m-1 block h-6 w-6 rounded-md hover:text-white"
                onClick={() => setShow(false)}
              >
                X
              </button>
            </div>
            <form onSubmit={submitHandler}>
              <div className="my-4 flex justify-center">
                <input
                  required
                  className="font-poppins bg-darkslategray placeholder:font-poppins text-azure focus:ring-azure h-10 w-4/5 rounded-lg px-2 py-1 focus:border-transparent focus:outline-none focus:ring-2"
                  type="text"
                  placeholder="Title"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />
              </div>
              <div className="mb-4 flex justify-center">
                <input
                  required
                  type="text"
                  className="font-poppins bg-darkslategray placeholder:font-poppins text-azure focus:ring-azure h-10 w-4/5 rounded-lg px-2 py-1 focus:border-transparent focus:outline-none focus:ring-2"
                  placeholder="Author"
                  value={author}
                  onChange={(e) => setAuthor(e.target.value)}
                />
              </div>
              <div className="mb-4 flex justify-center">
                <input
                  required
                  type="text"
                  className="font-poppins bg-darkslategray placeholder:font-poppins text-azure focus:ring-azure h-10 w-4/5 rounded-lg px-2 py-1 focus:border-transparent focus:outline-none focus:ring-2"
                  placeholder="Your Name"
                  value={by}
                  onChange={(e) => setBy(e.target.value)}
                />
              </div>
              <div className="mb-4 flex justify-center">
                <input
                  required
                  type="text"
                  className="font-poppins bg-darkslategray placeholder:font-poppins text-azure focus:ring-azure h-10 w-4/5 rounded-lg px-2 py-1 focus:border-transparent focus:outline-none focus:ring-2"
                  placeholder="Your City"
                  value={from}
                  onChange={(e) => setFrom(e.target.value)}
                />
              </div>
              <div>
                <div className="grid items-center">
                  {/* TODO: create this button like /books/:id */}
                  <input
                    required
                    ref={ref}
                    type="file"
                    accept="image/*"
                    className={`mx-auto w-4/5 ${
                      pic ? "mb-0" : "mb-10"
                    } font-poppins tracking-tighter`}
                    onChange={(e) => uploadPic(e.target.files[0])}
                  />
                </div>
                {pic && (
                  <div className="mb-4 flex h-24 items-center justify-end">
                    <div className={`relative mr-3 h-20 w-1/4 rounded-lg`}>
                      <img
                        src={pic}
                        className="h-full w-full rounded-md"
                        alt=""
                      />
                      <button
                        className="text-darkslategray bg-azure absolute top-1 right-1 rounded-xl px-1 text-xs hover:text-black"
                        onClick={(e) => imageRemove(e)}
                      >
                        X
                      </button>
                    </div>
                  </div>
                )}
              </div>
              <div className="mb-4 grid w-full place-items-center">
                <button
                  className={`font-poppins bg-darkslategray text-md text-azure focus:ring-azure rounded-lg px-6 py-2 focus:border-transparent focus:outline-none focus:ring-2`}
                  type="submit"
                >
                  Save
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookForm;

// TODO: create like functionality so a user can like a book
