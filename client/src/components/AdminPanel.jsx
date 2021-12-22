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
      <div className="bg-darkslategray">
        <div className="container mx-auto w-screen h-screen border-2 border-gray-500">
          <div className="container bg-paleturquoise md:flex mx-auto md:w-4/5 h-3/4 mt-8 rounded-lg">
            <div className="w-2/5 grid place-items-center">
              <img
                src={pic}
                alt="bookCover"
                className="w-3/5 h-3/5 shadow-xl rounded-lg"
              />
            </div>
            <div className="w-3/5 flex flex-col">
              <input
                type="text"
                placeholder="Title"
                value={title}
                className="font-poppins w-3/5 h-10 px-2 py-1 bg-azure placeholder-gray-200 text-darkslategray focus:outline-none focus:ring-1 focus:ring-darkslategray focus:border-transparent mt-16 p-2 mb-4 rounded-lg text-lg mx-auto disabled:bg-paleturquoise"
                onChange={(e) => setTitle(e.target.value)}
              />
              <input
                type="text"
                placeholder="Author"
                value={author}
                onChange={(e) => setAuthor(e.target.value)}
                className="font-poppins w-3/5 h-10 px-2 py-1 bg-azure placeholder-gray-200 text-darkslategray focus:outline-none focus:ring-1 focus:ring-darkslategray focus:border-transparent p-2 mb-4 rounded-lg text-lg mx-auto disabled:bg-paleturquoise"
              />
              <input
                type="text"
                placeholder="Name"
                value={by}
                onChange={(e) => setBy(e.target.value)}
                className="font-poppins w-3/5 h-10 px-2 py-1 bg-azure placeholder-gray-200 text-darkslategray focus:outline-none focus:ring-1 focus:ring-darkslategray focus:border-transparent p-2 mb-4 rounded-lg text-lg mx-auto disabled:bg-paleturquoise"
              />
              <input
                type="text"
                placeholder="State"
                value={from}
                onChange={(e) => setFrom(e.target.value)}
                className="font-poppins w-3/5 h-10 px-2 py-1 bg-azure placeholder-gray-200 text-darkslategray focus:outline-none focus:ring-1 focus:ring-darkslategray focus:border-transparent p-2 mb-4 rounded-lg text-lg mx-auto disabled:bg-paleturquoise"
              />
              <div className="w-3/5 mx-auto mb-12">
                <input
                  type="file"
                  className="cursor-pointer font-poppins bg-azure text-darkslategray text-sm p-2 w-3/5 rounded-md mx-auto focus:outline-none focus:ring-1 focus:ring-darkslategray focus:border-transparent file:rounded-lg file:text-sm file:border-none file:px-2 file:py-0.5 file:cursor-pointer file:bg-paleturquoise file:hover:bg-darkslategray file:hover:text-azure file:mr-2 file:font-poppins"
                  onChange={(e) => uploadPic(e.target.files[0])}
                />
              </div>
              <div className="w-3/5 mx-auto h-10 flex justify-center gap-8">
                <button
                  className="bg-darkslategray text-azure px-5 py-2 rounded-lg focus:outline-none focus:ring-2 hover:bg-azure hover:text-darkslategray focus:ring-darkslategray focus:border-transparent"
                  onClick={() => updateHandler()}
                >
                  Update
                </button>
                <button
                  className="bg-azure text-darkslategray px-5 py-2 rounded-lg focus:outline-none focus:ring-2 hover:bg-darkslategray hover:text-azure focus:ring-azure focus:border-transparent"
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
