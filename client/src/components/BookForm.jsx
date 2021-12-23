import axios from "axios";
import React, { useRef, useState } from "react";
import AlertMessage from "./AlertMessage";

const BookForm = ({ show, setShow }) => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [pic, setPic] = useState();
  const [from, setFrom] = useState("");
  const [by, setBy] = useState("");
  const [heading, setHeading] = useState();
  const [message, setMessage] = useState();
  const [showMessage, setShowMessage] = useState(false);
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
          { title, author, pic, from, by },
          config
        );
        if (res.status === 200) {
          setShowMessage(true);
          setHeading("Book created");
          setMessage("Book has been created successfully");
          setTimeout(() => {
            setShow(false);
          }, [2000]);
        }
        setTitle("");
        setAuthor("");
        setPic("");
        setBy("");
        setFrom("");
        ref.current.value = "";
      } catch (error) {
        setShowMessage(true);
        setHeading("Error occurred");
        setMessage(error.message);
      }
    }
  };

  if (!show) {
    return;
  }
  return (
    <>
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
      <div className="bg-darkslategray filter absolute top-0 left-0 w-screen h-screen">
        <div className={`container h-screen mx-auto grid place-items-center`}>
          <div
            className={`w-3/4 sm:w-2/5 md:w-1/3 lg:w-1/4 bg-paleturquoise mx-auto rounded-lg relative`}
          >
            <div className="flex justify-end">
              <button
                className="block w-6 h-6 m-1 rounded-md hover:bg-darkslategray hover:text-white"
                onClick={() => setShow(false)}
              >
                X
              </button>
            </div>
            <form onSubmit={submitHandler}>
              <div className="flex justify-center my-4">
                <input
                  required
                  className="font-poppins w-4/5 h-10 px-2 py-1 rounded-lg bg-darkslategray placeholder-gray-200 text-azure focus:outline-none focus:ring-2 focus:ring-azure focus:border-transparent"
                  type="text"
                  placeholder="Title"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />
              </div>
              <div className="flex justify-center mb-4">
                <input
                  required
                  type="text"
                  className="font-poppins w-4/5 h-10 px-2 py-1 rounded-lg bg-darkslategray placeholder-gray-200 text-azure focus:outline-none focus:ring-2 focus:ring-azure focus:border-transparent"
                  placeholder="Author"
                  value={author}
                  onChange={(e) => setAuthor(e.target.value)}
                />
              </div>
              <div className="flex justify-center mb-4">
                <input
                  required
                  type="text"
                  className="font-poppins w-4/5 h-10 px-2 py-1 rounded-lg bg-darkslategray placeholder-gray-200 text-azure focus:outline-none focus:ring-2 focus:ring-azure focus:border-transparent"
                  placeholder="Your Name"
                  value={by}
                  onChange={(e) => setBy(e.target.value)}
                />
              </div>
              <div className="flex justify-center mb-4">
                <input
                  required
                  type="text"
                  className="font-poppins w-4/5 h-10 px-2 py-1 rounded-lg bg-darkslategray placeholder-gray-200 text-azure focus:outline-none focus:ring-2 focus:ring-azure focus:border-transparent"
                  placeholder="Your City"
                  value={from}
                  onChange={(e) => setFrom(e.target.value)}
                />
              </div>
              <div>
                <div className="grid items-center">
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
                  <div className="mb-4 h-24 flex justify-end items-center">
                    <div className={`w-1/4 rounded-lg h-20 mr-3 relative`}>
                      <img
                        src={pic}
                        className="w-full h-full rounded-md"
                        alt=""
                      />
                      <button
                        className="absolute top-1 text-azure bg-darkslategray rounded-xl hover:bg-azure hover:text-darkslategray px-0.5 right-1 text-xs"
                        onClick={(e) => imageRemove(e)}
                      >
                        X
                      </button>
                    </div>
                  </div>
                )}
              </div>
              <div className="w-full grid place-items-center mb-4">
                <button
                  className={`font-poppins bg-darkslategray px-6 py-2 rounded-lg text-md text-azure focus:outline-none focus:ring-2 focus:ring-azure focus:border-transparent`}
                  type="submit"
                >
                  Save
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default BookForm;
