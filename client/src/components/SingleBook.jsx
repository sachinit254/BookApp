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
        <div className="container mx-auto h-[88.6vh] w-4/5 py-4 lg:w-screen">
          <div className="bg-paleturquoise container mx-auto mt-12 flex h-[70vh] flex-col justify-center rounded-lg md:w-4/5 md:flex-row md:justify-evenly  ">
            <div className="mx-auto mt-4 flex w-[80%] items-start justify-center md:mt-16 md:w-2/5">
              <img
                src={pic}
                alt="bookCover"
                className="h-full w-[80%] rounded-lg shadow-xl md:h-4/5 md:w-3/4"
              />
            </div>
            <div className="mx-auto flex w-[100%] flex-col md:w-3/5">
              <p className="font-poppins bg-azure text-darkslategray focus:ring-darkslategray mx-auto mt-4 mb-4 h-10 w-3/5 overflow-x-auto rounded-lg px-2 py-1 text-lg md:mt-16">
                Title - {title}
              </p>
              <p className="font-poppins bg-azure text-darkslategray focus:ring-darkslategray mx-auto mb-4 h-10 w-3/5 overflow-x-scroll rounded-lg px-2 py-1 text-lg">
                Author - {author}
              </p>
              <p className="font-poppins bg-azure text-darkslategray focus:ring-darkslategray mx-auto mb-4 h-10 w-3/5 rounded-lg px-2 py-1 text-lg">
                By - {by}
              </p>
              <p className="font-poppins bg-azure text-darkslategray focus:ring-darkslategray mx-auto mb-4 h-10 w-3/5 rounded-lg px-2 py-1 text-lg">
                From - {from}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

//
export default BookDetail;
