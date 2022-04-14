import { useRef, useState } from "react";
import HeroSection from "../components/HeroSection";
import Cards from "../components/Cards";
import BookForm from "../components/BookForm";
import { useUserContext } from "../context/UserContext";
import ProfileModal from "../components/ProfileModal";
import SearchBar from "../components/SearchBar";
import axios from "axios";
import { Slide, toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../toast.css";
import { axiosInstance } from "../config";

const HomePage = () => {
  const { books } = useUserContext();
  const [show, setShow] = useState(false);
  const [showDetails, setShowDetails] = useState(false);
  const [searchText, setSearchText] = useState("");
  const [filteredBooks, setFilteredBooks] = useState([]);
  const fieldRef = useRef();
  console.log(`books`, books);

  // useEffect(() => {
  //   fieldRef.current.scrollIntoView();
  // }, [show]);

  const searchHandler = async () => {
    try {
      const { data } = await axiosInstance.post(
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
      <div className="relative overflow-auto">
        {!show && <HeroSection />}
        {!show && (
          <SearchBar
            searchText={searchText}
            setSearchText={setSearchText}
            searchHandler={searchHandler}
            setFilteredBooks={setFilteredBooks}
          />
        )}
        {!show && (
          <Cards
            books={books}
            filteredBooks={filteredBooks}
            show={show}
            setShow={setShow}
          />
        )}
      </div>
      {show && <BookForm show={show} setShow={setShow} fieldRef={fieldRef} />}
      {showDetails && (
        <ProfileModal show={showDetails} setShow={setShowDetails} />
      )}
    </>
  );
};

export default HomePage;
