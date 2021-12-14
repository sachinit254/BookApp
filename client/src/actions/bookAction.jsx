import axios from "axios";
import {
  BOOK_CREATE_FAIL,
  BOOK_CREATE_REQUEST,
  BOOK_CREATE_SUCCESS,
  BOOK_DELETE_FAIL,
  BOOK_DELETE_REQUEST,
  BOOK_DELETE_SUCCESS,
  BOOK_LIST_FAIL,
  BOOK_LIST_REQUEST,
  BOOK_LIST_SUCCESS,
  BOOK_UPDATE_FAIL,
  BOOK_UPDATE_REQUEST,
  BOOK_UPDATE_SUCCESS,
  USER_BOOKS_FAIL,
  USER_BOOKS_REQUEST,
  USER_BOOKS_SUCCESS,
} from "../constants/bookConstants";

export const listBooks = () => async (dispatch, getState) => {
  try {
    dispatch({ type: BOOK_LIST_REQUEST });

    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    const { data } = await axios.get("/books", config);

    dispatch({
      type: BOOK_LIST_SUCCESS,
      payload: data,
    });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({ type: BOOK_LIST_FAIL, payload: message });
  }
};

export const listUserBooks = () => async (dispatch, getState) => {
  try {
    dispatch({ type: USER_BOOKS_REQUEST });
    const {
      userLogin: { userInfo },
    } = getState();
    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    };
    const { data } = await axios.get("/books/userBooks", config);

    dispatch({
      type: USER_BOOKS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({ type: USER_BOOKS_FAIL, payload: message });
  }
};

export const createBook =
  (title, author, pic, from, by) => async (dispatch, getState) => {
    try {
      dispatch({
        type: BOOK_CREATE_REQUEST,
      });

      const {
        userLogin: { userInfo },
      } = getState();

      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${userInfo.token}`,
        },
      };

      const { data } = await axios.post(
        `/books/createBook`,
        { title, author, pic, from, by },
        config
      );

      dispatch({
        type: BOOK_CREATE_SUCCESS,
        payload: data,
      });
    } catch (error) {
      const message =
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message;
      dispatch({
        type: BOOK_CREATE_FAIL,
        payload: message,
      });
    }
  };

export const deleteBook = (id) => async (dispatch, getState) => {
  try {
    dispatch({ type: BOOK_DELETE_REQUEST });

    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    const { data } = await axios.delete(`/books/${id}`, config);
    dispatch({
      type: BOOK_DELETE_SUCCESS,
      payload: data,
    });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({
      type: BOOK_DELETE_FAIL,
      payload: message,
    });
  }
};

export const updateBook =
  (id, title, author, pic, by, from) => async (dispatch, getState) => {
    try {
      dispatch({
        type: BOOK_UPDATE_REQUEST,
      });
      console.log(`from`, from);
      const {
        userLogin: { userInfo },
      } = getState();

      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${userInfo.token}`,
        },
      };

      const { data } = await axios.put(
        `/books/${id}`,
        { title, author, pic, by, from },
        config
      );
      console.log(`data`, data);
      dispatch({
        type: BOOK_UPDATE_SUCCESS,
        payload: data,
      });
    } catch (error) {
      const message =
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message;
      dispatch({
        type: BOOK_UPDATE_FAIL,
        payload: message,
      });
    }
  };
