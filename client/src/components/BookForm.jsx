import React, { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import { createBook } from "../actions/bookAction";

const BookForm = ({ show, setShow }) => {
  // const classes = useStyles();
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [pic, setPic] = useState();
  const [from, setFrom] = useState("");
  const [by, setBy] = useState("");
  const ref = useRef();
  const dispatch = useDispatch();
  const history = useHistory();
  const bookCreate = useSelector((state) => state.bookCreate);
  const { loading, error, book } = bookCreate;

  console.log(`from`, from);
  console.log(`by`, by);

  const uploadPic = (pics) => {
    setPic(pics);
    if (pics?.type === "image/jpeg" || pics?.type === "image/png") {
      const data = new FormData();
      data.append("file", pics);
      data.append("upload_preset", "BookPic");
      data.append("cloud_name", "dbckqtgmv");
      fetch("https://api.cloudinary.com/v1_1/dbckqtgmv/image/upload", {
        method: "post",
        body: data,
      })
        .then((res) => res.json())
        .then((data) => {
          setPic(data.url.toString());
          console.log(`data`, data);
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      return alert("Please Select an Image");
    }
  };

  // This function will remove the selected image from the input
  const imageRemove = (e) => {
    e.preventDefault();
    ref.current.value = "";
    setPic();
  };

  const submitHandler = (e) => {
    e.preventDefault();
    // window.location.reload();
    if (!title || !author || !pic) {
      alert("Please fill all the required fields");
      return;
    }
    dispatch(createBook(title, author, pic, from, by));
    history.push("/");
    setTitle("");
    setAuthor("");
    ref.current.value = "";
    setPic("");
    setBy("");
    setFrom("");
  };

  console.log(`pic`, pic);

  if (!show) {
    return;
  }
  return (
    <>
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
                placeholder="Your State"
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
                onClick={(e) => submitHandler(e)}
              >
                Save
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BookForm;