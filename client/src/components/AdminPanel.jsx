import React from "react";
const AdminPanel = ({
  bookId,
  title,
  setTitle,
  author,
  setAuthor,
  pic,
  by,
  setBy,
  from,
  setFrom,
  updateHandler,
  bookDeleteHandler,
  uploadPic,
}) => {
  return (
    <>
      <div className="bg-darkslategray flex items-center justify-center md:h-[89.15vh]">
        <div className="container w-[80%] py-4 md:w-screen">
          <div className="bg-paleturquoise container mx-auto my-[55px] justify-evenly rounded-lg py-8 md:mt-0 md:flex md:w-4/6 md:my-0">
            <div className="mx-auto flex w-[60%] items-start justify-center md:mx-0 md:mt-16 md:w-2/5">
              <img
                src={pic}
                alt="bookCover"
                className="h-[220px] w-[100%] rounded-lg shadow-xl md:h-[300px] md:w-3/4"
              />
            </div>
            <div className="flex flex-col md:w-3/5">
              <div className="mx-auto mt-12 flex w-4/5 space-x-2 md:mt-16">
                <label
                  htmlFor="title"
                  className="font-poppins  text-darkslategray flex h-10 w-[80px] items-center text-lg md:w-[17%]"
                >
                  Title -
                </label>
                <input
                  id="title"
                  type="text"
                  placeholder="Title"
                  value={title}
                  className="font-poppins ring-azure bg-paleturquoise text-darkslategray focus:ring-darkslategray disabled:bg-paleturquoise mb-4 h-10 w-[70%] rounded-lg p-2 px-2 py-1 text-lg placeholder-gray-200 ring-2 focus:border-transparent focus:outline-none focus:ring-1 md:w-3/5"
                  onChange={(e) => setTitle(e.target.value)}
                />
              </div>
              <div className="mx-auto flex w-4/5 space-x-2">
                <label
                  htmlFor="title"
                  className="font-poppins text-darkslategray flex h-10 w-[80px] items-center text-lg md:w-[17%]"
                >
                  Author -
                </label>
                <input
                  type="text"
                  placeholder="Author"
                  value={author}
                  onChange={(e) => setAuthor(e.target.value)}
                  className="font-poppins ring-azure bg-paleturquoise text-darkslategray focus:ring-darkslategray disabled:bg-paleturquoise mx-auto mb-4 h-10 w-[70%] rounded-lg p-2 px-2 py-1 text-lg placeholder-gray-200 ring-2 focus:border-transparent focus:outline-none focus:ring-1 md:w-3/5"
                />
              </div>
              <div className="mx-auto flex w-4/5 space-x-2">
                <label
                  htmlFor="title"
                  className="font-poppins text-darkslategray flex h-10 w-[80px] items-center text-lg md:w-[17%]"
                >
                  By -
                </label>
                <input
                  type="text"
                  placeholder="Name"
                  value={by}
                  onChange={(e) => setBy(e.target.value)}
                  className="font-poppins ring-azure bg-paleturquoise text-darkslategray focus:ring-darkslategray disabled:bg-paleturquoise mx-auto mb-4 h-10 w-[70%] rounded-lg p-2 px-2 py-1 text-lg placeholder-gray-200 ring-2 focus:border-transparent focus:outline-none focus:ring-1 md:w-3/5"
                />
              </div>
              <div className="mx-auto flex w-4/5 space-x-2">
                <label
                  htmlFor="title"
                  className="font-poppins text-darkslategray flex h-10 w-[80px] items-center text-lg md:w-[17%]"
                >
                  From -
                </label>
                <input
                  type="text"
                  placeholder="State"
                  value={from}
                  onChange={(e) => setFrom(e.target.value)}
                  className="font-poppins ring-azure bg-paleturquoise text-darkslategray focus:ring-darkslategray disabled:bg-paleturquoise mx-auto mb-4 h-10 w-[70%] rounded-lg p-2 px-2 py-1 text-lg placeholder-gray-200 ring-2 focus:border-transparent focus:outline-none focus:ring-1 md:w-3/5"
                />
              </div>
              <div className="mx-auto flex w-4/5 space-x-2">
                <label
                  htmlFor="title"
                  className="font-poppins text-darkslategray flex h-10 w-[80px] items-center text-lg md:w-[17%]"
                >
                  Image -
                </label>
                <div className="mx-auto mb-12 w-3/5">
                  <input
                    type="file"
                    className="font-poppins ring-azure bg-paleturquoise text-darkslategray focus:ring-darkslategray file:bg-paleturquoise file:hover:bg-darkslategray file:hover:text-azure file:font-poppins mx-auto w-[100%] cursor-pointer rounded-md p-2 text-sm ring-2 file:mr-2 file:cursor-pointer file:rounded-lg file:border-none file:px-2 file:py-0.5 file:text-sm focus:border-transparent focus:outline-none focus:ring-1 md:w-3/5"
                    onChange={(e) => uploadPic(e.target.files[0])}
                  />
                </div>
              </div>
              <div className="mx-auto flex h-10 w-3/5 justify-center gap-8 md:mb-16">
                <button
                  className="bg-darkslategray text-azure hover:bg-azure hover:text-darkslategray focus:ring-darkslategray rounded-lg px-5 py-2 focus:border-transparent focus:outline-none focus:ring-2"
                  onClick={() => updateHandler()}
                >
                  Update
                </button>
                <button
                  className="bg-azure text-darkslategray hover:bg-darkslategray hover:text-azure focus:ring-azure rounded-lg px-5 py-2 focus:border-transparent focus:outline-none focus:ring-2"
                  onClick={() => bookDeleteHandler(bookId)}
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

export default AdminPanel;
