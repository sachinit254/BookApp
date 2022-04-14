import React from "react";

const SearchBar = ({
  searchText,
  setSearchText,
  searchHandler,
  setFilteredBooks,
}) => {
  return (
    <div className="md:mt-12 grid place-content-center">
      <div className="flex justify-around space-x-4 py-4">
        <div className="relative flex h-12 w-[60vw] md:w-[30vw] justify-center">
          <input
            className="font-poppins bg-azure placeholder:font-poppins text-darkslategray focus:ring-paleturquoise h-12 w-[100%] md:w-[30vw] rounded-lg px-4 focus:border-transparent focus:outline-none focus:ring-2"
            placeholder="Search books..."
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          {searchText && (
            <i
              onClick={() => {
                setFilteredBooks([]);
                setSearchText("");
              }}
              className="fas fa-times text-darkslategray absolute right-2 top-1/2 -translate-y-1/2 transform cursor-pointer text-lg"
            ></i>
          )}
        </div>
        <button
          className="font-poppins bg-paleturquoise hover:text-paleturquoise hover:ring-azure hover:bg-darkslategray rounded-lg px-4 py-2 hover:ring-2"
          onClick={searchHandler}
        >
          Search
        </button>
      </div>
    </div>
  );
};

export default SearchBar;
