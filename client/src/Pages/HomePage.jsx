import React, { useEffect, useState } from "react";
import HeroSection from "../components/HeroSection";
import Cards from "../components/Cards";
import BookForm from "../components/BookForm";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import { listBooks } from "../actions/bookAction";

const Home = () => {
  const [show, setShow] = useState(false);
  const dispatch = useDispatch();
  const history = useHistory();
  const bookList = useSelector((state) => state.bookList);
  const { loading, error, books } = bookList;
  console.log(`books`, books);
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  useEffect(() => {
    dispatch(listBooks());
    if (!userInfo) {
      history.push("/");
    }
  }, [dispatch, userInfo, history]);

  console.log(`books`, books);
  return (
    <>
      <div className="relative">
        <HeroSection />
        <Cards
          books={books}
          loading={loading}
          error={error}
          show={show}
          setShow={setShow}
        />
      </div>
      {show && <BookForm show={show} setShow={setShow} />}
    </>
  );
};

export default Home;
