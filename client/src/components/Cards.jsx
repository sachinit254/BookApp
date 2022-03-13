// import { useSelector } from "react-redux";
import { useHistory, useLocation } from "react-router-dom";

const Cards = ({ books, setShow, filteredBooks }) => {
  const uploadHandler = () => {
    setShow(true);
  };
  const history = useHistory();
  const url = useLocation();
  const path = url?.pathname;
  console.log(`path`, path);

  const pathName = path === "/myBooks" ? "books" : "singleBook";

  return (
    <>
      <div className="bg-darkslategray h-full min-h-screen py-4">
        <button
          className="bg-azure text-darkslategray hover:bg-paleturquoise fixed bottom-14 right-2 rounded-xl px-6 py-2 text-lg md:bottom-4 md:right-8"
          onClick={() => uploadHandler()}
        >
          Upload
        </button>
        <div className="container mx-auto grid w-full grid-cols-1 justify-center gap-y-8 py-16 sm:grid-cols-2 sm:gap-y-16 md:grid-cols-3 md:gap-y-6 lg:grid-cols-4 lg:gap-y-14">
          {/* {books.length > 0 ? (
            books.map((book) => {
              return (
                <div
                  className="bg-paleturquoise mx-auto h-80 w-4/6 cursor-pointer rounded-md py-8 px-4 sm:w-4/5 md:w-11/12 lg:w-4/5"
                  key={book?._id}
                  onClick={() => history.push(`${pathName}/${book?._id}`)}
                >
                  <div className="mx-auto mb-4 h-3/4 w-4/5 rounded-md">
                    <img
                      className="h-full w-full rounded-md object-fill"
                      src={book?.pic}
                      alt=""
                    />
                  </div>
                  <p className="text-darkslategray font-poppins mx-auto h-16 w-11/12 overflow-hidden text-center text-lg">
                    {book.title}
                  </p>
                </div>
              );
            })
          ) : (
            <div className="grid h-[70vh] w-[100vw] place-content-center">
              <h1 className="text-paleturquoise text-2xl">
                No books available !!!
              </h1>
            </div>
          )} */}
          {(filteredBooks.length > 0 ? filteredBooks : books).map((book) => {
            return (
              <div
                className="bg-paleturquoise mx-auto h-80 w-4/6 cursor-pointer rounded-md py-8 px-4 sm:w-4/5 md:w-11/12 lg:w-4/5"
                key={book?._id}
                onClick={() => history.push(`${pathName}/${book?._id}`)}
              >
                <div className="mx-auto mb-4 h-3/4 w-4/5 rounded-md">
                  <img
                    className="h-full w-full rounded-md object-fill"
                    src={book?.pic}
                    alt=""
                  />
                </div>
                <p className="text-darkslategray font-poppins mx-auto h-16 w-11/12 overflow-hidden text-center text-lg">
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
