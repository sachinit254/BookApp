import React from "react";
const BookDetail = ({ title, author, pic, by, from, phone }) => {
  return (
    <>
      <div className="bg-darkslategray flex items-center justify-center md:h-[89.15vh] md:w-screen">
        <div className="container py-4 lg:w-screen">
          <div className="bg-paleturquoise container mx-auto flex w-[80vw] flex-col items-center justify-center rounded-lg py-12 md:h-[70vh] md:w-4/6 md:flex-row md:py-0">
            <div className="mx-auto mb-8 w-[90%] md:mb-0 md:w-2/5">
              <img
                src={pic}
                alt="bookCover"
                className="mx-auto h-[250px] w-[80%] rounded-lg shadow-xl md:mx-0 md:ml-auto md:h-[330px] md:w-5/6"
              />
            </div>
            <div className="grid w-[100%] place-content-center md:w-3/5">
              <div className="bg-azure flex-column mx-auto h-[330px] w-[70vw] justify-evenly rounded-lg md:w-[30vw]">
                <p className="font-poppins text-darslategray decoration-paleturquoise mx-auto mb-4 mt-10 w-[90%] break-words rounded-lg px-2 py-1 text-justify text-lg underline underline-offset-1 md:w-4/5">
                  Title - {title}
                </p>
                <p className="decoration-paleturquoise font-poppins text-darslategray mx-auto mb-4 w-[90%] break-words rounded-lg px-2 py-1 text-justify text-lg underline underline-offset-1 md:w-4/5">
                  Author - {author}
                </p>
                <p className="decoration-paleturquoise font-poppins text-darslategray mx-auto mb-4 w-[90%] break-words rounded-lg px-2 py-1 text-justify text-lg underline underline-offset-1 md:w-4/5">
                  By - {by}
                </p>
                <p className="decoration-paleturquoise font-poppins text-darslategray mx-auto mb-4 w-[90%]   break-words rounded-lg px-2 py-1 text-justify text-lg underline underline-offset-1 md:w-4/5">
                  From - {from}
                </p>
                <p className="decoration-paleturquoise font-poppins text-darslategray mx-auto mb-4 w-[90%]   break-words rounded-lg px-2 py-1 text-justify text-lg underline underline-offset-1 md:w-4/5">
                  Phone No. - {phone}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

//
export default BookDetail;
