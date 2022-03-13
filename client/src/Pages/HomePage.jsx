import React, { useState } from "react";
import HeroSection from "../components/HeroSection";
import Cards from "../components/Cards";
import BookForm from "../components/BookForm";
import { useUserContext } from "../context/UserContext";
import ProfileModal from "../components/ProfileModal";
import SearchBar from "../components/SearchBar";
import axios from "axios";
import { Slide, toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const HomePage = () => {
  const { books } = useUserContext();
  const [show, setShow] = useState(false);
  const [showDetails, setShowDetails] = useState(false);
  const [searchText, setSearchText] = useState("");
  const [filteredBooks, setFilteredBooks] = useState([]);
  console.log(`books`, books);

  const searchHandler = async () => {
    try {
      const { data } = await axios.post(
        `/books/filterBooks?search=${searchText}`
      );
      console.log(data);
      setFilteredBooks(data);
    } catch (error) {
      toast.error(
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message
      );
    }
  };

  return (
    <>
      <ToastContainer
        theme="light"
        autoClose={2000}
        transition={Slide}
        hideProgressBar={true}
      />
      <div className="relative">
        <HeroSection />
        <SearchBar
          searchText={searchText}
          setSearchText={setSearchText}
          searchHandler={searchHandler}
          setFilteredBooks={setFilteredBooks}
        />
        <Cards
          books={books}
          filteredBooks={filteredBooks}
          show={show}
          setShow={setShow}
        />
      </div>
      {show && <BookForm show={show} setShow={setShow} />}
      {showDetails && (
        <ProfileModal show={showDetails} setShow={setShowDetails} />
      )}
    </>
  );
};

export default HomePage;
