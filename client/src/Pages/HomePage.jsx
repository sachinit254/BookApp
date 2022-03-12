import React, { useState } from "react";
import HeroSection from "../components/HeroSection";
import Cards from "../components/Cards";
import BookForm from "../components/BookForm";
import { useUserContext } from "../context/UserContext";
import ProfileModal from "../components/ProfileModal";
import SearchBar from "../components/SearchBar";

const HomePage = () => {
  const { books } = useUserContext();
  const [show, setShow] = useState(false);
  const [showDetails, setShowDetails] = useState(false);

  console.log(`books`, books);

  return (
    <>
      <div className="relative">
        <HeroSection />
        <SearchBar />
        <Cards books={books} show={show} setShow={setShow} />
      </div>
      {show && <BookForm show={show} setShow={setShow} />}
      {showDetails && (
        <ProfileModal show={showDetails} setShow={setShowDetails} />
      )}
    </>
  );
};

export default HomePage;
