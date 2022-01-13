import React from "react";
const BookDetail = ({
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
}) => {
  return (
    <>
      <div className="bg-darkslategray">
        <div className="container mx-auto w-screen h-[88.6vh] py-4">
          <div className="container bg-paleturquoise h-[70vh] md:flex justify-evenly mx-auto md:w-4/5 mt-12 rounded-lg">
            <div className="w-2/5 flex justify-center items-start mt-16">
              <img
                src={pic}
                alt="bookCover"
                className="w-3/4 h-4/5 shadow-xl rounded-lg"
              />
            </div>
            <div className="w-3/5 flex flex-col">
              <p className="flex items-center font-poppins w-3/5 h-10 px-2 py-1 bg-azure placeholder-gray-200 text-darkslategray focus:outline-none focus:ring-1 focus:ring-darkslategray focus:border-transparent mt-16 p-2 mb-4 rounded-lg text-lg mx-auto disabled:bg-paleturquoise">
                {title}
              </p>
              <p className="font-poppins w-3/5 h-10 px-2 py-1 bg-azure placeholder-gray-200 text-darkslategray focus:outline-none focus:ring-1 focus:ring-darkslategray focus:border-transparent p-2 mb-4 rounded-lg text-lg mx-auto disabled:bg-paleturquoise">
                {author}
              </p>
              <p className="font-poppins w-3/5 h-10 px-2 py-1 bg-azure placeholder-gray-200 text-darkslategray focus:outline-none focus:ring-1 focus:ring-darkslategray focus:border-transparent p-2 mb-4 rounded-lg text-lg mx-auto disabled:bg-paleturquoise">
                {by}
              </p>
              <p className="font-poppins w-3/5 h-10 px-2 py-1 bg-azure placeholder-gray-200 text-darkslategray focus:outline-none focus:ring-1 focus:ring-darkslategray focus:border-transparent p-2 mb-4 rounded-lg text-lg mx-auto disabled:bg-paleturquoise">
                {from}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BookDetail;
