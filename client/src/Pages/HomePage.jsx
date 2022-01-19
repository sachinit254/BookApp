import React, { useState } from "react";
import HeroSection from "../components/HeroSection";
import Cards from "../components/Cards";
import BookForm from "../components/BookForm";
// import axios from "axios";
import AlertMessage from "../components/AlertMessage";
import { useUserContext } from "../context/UserContext";
import ProfileModal from "../components/ProfileModal";

const HomePage = () => {
  const { books } = useUserContext();
  const [show, setShow] = useState(false);
  const [showDetails, setShowDetails] = useState(false);
  const [showMessage, setShowMessage] = useState(false);
  const [heading, setHeading] = useState();
  const [message, setMessage] = useState();

  console.log(`books`, books);

  return (
    <>
      {showMessage && (
        <AlertMessage
          heading={heading}
          message={message}
          deleteHandler={() => {
            setShowMessage(false);
            setHeading("");
            setMessage("");
          }}
        />
      )}
      <div className="relative">
        <HeroSection />
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
