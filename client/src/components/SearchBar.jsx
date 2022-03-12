import React, { useState } from "react";

const SearchBar = () => {
  const [searchText, setSearchText] = useState("");
  return (
    <div className="mt-12 grid place-content-center">
      <div className="flex justify-around space-x-4 py-4">
        <input
          className="font-poppins bg-azure placeholder:font-poppins text-darkslategray focus:ring-paleturquoise h-12 w-[30vw] rounded-lg px-4 focus:border-transparent focus:outline-none focus:ring-2"
          placeholder="Search books"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
        <button className="font-poppins bg-paleturquoise hover:text-paleturquoise hover:ring-azure hover:bg-darkslategray rounded-lg px-4 py-2 hover:ring-2">
          Search
        </button>
      </div>
    </div>
  );
};

export default SearchBar;
