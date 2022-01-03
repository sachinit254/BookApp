// import { useSelector } from "react-redux";
import { useHistory, useLocation } from "react-router-dom";

const Cards = ({ books, setShow }) => {
  const history = useHistory();
  const uploadHandler = () => {
    setShow(true);
  };

  const url = useLocation();
  const path = url?.pathname;
  console.log(`path`, path);

  return (
    <>
      <div className="bg-darkslategray py-4 h-full min-h-screen">
        <button
          className="fixed bottom-14 right-2 md:bottom-4 md:right-8 px-6 py-2 rounded-xl bg-azure text-lg text-darkslategray hover:bg-paleturquoise"
          onClick={() => uploadHandler()}
        >
          Upload
        </button>
        <div className="py-16 container mx-auto w-full grid justify-center grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-y-8 sm:gap-y-16 md:gap-y-6 lg:gap-y-14">
          {books?.map((book) => {
            return (
              <div
                className="py-8 mx-auto px-4 rounded-md bg-paleturquoise w-4/6 sm:w-4/5 md:w-11/12 lg:w-4/5 h-80 cursor-pointer"
                key={book?._id}
                onClick={() => history.push(`/books/${book?._id}`)}
              >
                <div className="w-4/5 h-3/4 mx-auto rounded-md mb-4">
                  <img
                    className="rounded-md w-full h-full object-fill"
                    src={book?.pic}
                    alt=""
                  />
                </div>
                <p className="mx-auto text-center text-lg text-darkslategray font-poppins w-11/12 h-16 overflow-hidden">
                  {book.title}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Cards;
