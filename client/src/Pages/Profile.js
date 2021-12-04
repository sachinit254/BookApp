import { colors } from "@material-ui/core";
import { CssBaseline } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import { listBooks, listUserBooks } from "../actions/bookAction";
import { logout } from "../actions/userActions";
import Cards from "../components/Cards";
import UserDetails from "../components/UserDetails";
const Profile = () => {
  const [user, setUser] = useState({});

  const dispatch = useDispatch();
  const history = useHistory();
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;
  const bookList = useSelector((state) => state.bookList);
  const { loading, error, books } = bookList;
  const [counter, setCounter] = useState(0);
  useEffect(() => {
    if (!userInfo) {
      history.push("/");
    } else {
      setUser(userInfo);
    }
    dispatch(listBooks());
  }, [dispatch, history, userInfo, counter]);

  console.log(`books`, books);
  const logoutHandler = () => {
    dispatch(logout());
    history.push("/");
  };
  console.log(`user`, user);
  return (
    <div className="relative">
      <CssBaseline />
      <UserDetails user={user} logoutHandler={logoutHandler} />
      <Cards
        books={books?.filter((book) => book.user === userInfo?._id)}
        loading={loading}
        error={error}
        userInfo={userInfo}
        counter={counter}
        setCounter={setCounter}
      />
    </div>
  );
};

export default Profile;
