import React, { useEffect, useState } from "react";
import { updateBook } from "../actions/bookAction";
const Book = ({ book }) => {
  const [enabled, setEnabled] = useState(false);
  const [title, setTitle] = useState();
  const [author, setAuthor] = useState();
  const [pic, setPic] = useState();
  const [by, setBy] = useState();
  const [from, setFrom] = useState();

  useEffect(() => {
    setTitle(book?.title);
    setAuthor(book?.author);
    setPic(book?.pic);
    setBy(book?.by);
    setFrom(book?.from);
  }, []);

  const updateHandler = () => {
    setEnabled(true);
    dispatchEvent(updateBook(title, author, pic, by, from));
  };
  return (
    <>
      <div className="bg-darkslategray">
        <div className="container mx-auto w-screen h-screen border-2 border-gray-500">
          <div className="container bg-paleturquoise mx-auto w-4/5 h-3/4 mt-8 rounded-lg flex">
            <div className="w-2/5 grid place-items-center">
              <img
                src={book?.pic}
                alt="bookCover"
                className="w-3/5 h-3/5 shadow-xl rounded-lg"
              />
            </div>
            <div className="w-3/5 flex flex-col">
              <input
                type="text"
                placeholder="Title"
                value={book?.title}
                className="font-poppins w-3/5 h-10 px-2 py-1 bg-azure placeholder-gray-200 text-darkslategray focus:outline-none focus:ring-1 focus:ring-darkslategray focus:border-transparent mt-16 p-2 mb-4 rounded-lg text-lg mx-auto disabled:bg-paleturquoise"
                onChange
                disabled={enabled}
              />
              <input
                type="text"
                placeholder="Author"
                value={book?.author}
                className="font-poppins w-3/5 h-10 px-2 py-1 bg-azure placeholder-gray-200 text-darkslategray focus:outline-none focus:ring-1 focus:ring-darkslategray focus:border-transparent p-2 mb-4 rounded-lg text-lg mx-auto disabled:bg-paleturquoise"
                disabled={enabled}
              />
              <input
                type="text"
                placeholder="Name"
                value={book?.by}
                className="font-poppins w-3/5 h-10 px-2 py-1 bg-azure placeholder-gray-200 text-darkslategray focus:outline-none focus:ring-1 focus:ring-darkslategray focus:border-transparent p-2 mb-4 rounded-lg text-lg mx-auto disabled:bg-paleturquoise"
                disabled={enabled}
              />
              <input
                type="text"
                placeholder="State"
                value={book?.from}
                className="font-poppins w-3/5 h-10 px-2 py-1 bg-azure placeholder-gray-200 text-darkslategray focus:outline-none focus:ring-1 focus:ring-darkslategray focus:border-transparent p-2 mb-4 rounded-lg text-lg mx-auto disabled:bg-paleturquoise"
                disabled={enabled}
              />
              <div className="w-3/5 mx-auto mb-12">
                <input
                  type="file"
                  className="cursor-pointer bg-azure text-darkslategray p-2 w-3/5 rounded-md mx-auto focus:outline-none focus:ring-1 focus:ring-darkslategray focus:border-transparent"
                  disabled={enabled}
                />
              </div>
              <div className="w-3/5 mx-auto h-10 flex justify-center gap-8">
                <button className="bg-darkslategray text-azure px-5 py-2 rounded-lg focus:outline-none focus:ring-2 hover:bg-azure hover:text-darkslategray focus:ring-darkslategray focus:border-transparent">
                  Update
                </button>
                <button
                  className="bg-azure text-darkslategray px-5 py-2 rounded-lg focus:outline-none focus:ring-2 hover:bg-darkslategray hover:text-azure focus:ring-azure focus:border-transparent"
                  onClick={() => updateHandler()}
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Book;
