import {
  BOOK_CREATE_REQUEST,
  BOOK_CREATE_SUCCESS,
  BOOK_CREATE_FAIL,
  BOOK_UPDATE_REQUEST,
  BOOK_UPDATE_SUCCESS,
  BOOK_UPDATE_FAIL,
  BOOK_DELETE_REQUEST,
  BOOK_DELETE_SUCCESS,
  BOOK_DELETE_FAIL,
  BOOK_LIST_REQUEST,
  BOOK_LIST_SUCCESS,
  BOOK_LIST_FAIL,
} from "../constants/bookConstants";

export const bookListReducer = (state = { books: [] }, action) => {
  switch (action.type) {
    case BOOK_LIST_REQUEST:
      return { loading: true };
    case BOOK_LIST_SUCCESS:
      return { loading: false, books: action.payload };
    case BOOK_LIST_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const bookCreateReducer = (state = { books: [] }, action) => {
  switch (action.type) {
    case BOOK_CREATE_REQUEST:
      return { loading: true };
    case BOOK_CREATE_SUCCESS:
      return { loading: false, books: action.payload };
    case BOOK_CREATE_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const bookDeleteReducer = (state = {}, action) => {
  switch (action.type) {
    case BOOK_DELETE_REQUEST:
      return { loading: true };
    case BOOK_DELETE_SUCCESS:
      return { loading: false, success: true };
    case BOOK_DELETE_FAIL:
      return { loading: false, error: action.payload, success: false };
    default:
      return state;
  }
};

export const bookUpdateReducer = (state = {}, action) => {
  switch (action.type) {
    case BOOK_UPDATE_REQUEST:
      return { loading: true };
    case BOOK_UPDATE_SUCCESS:
      return { loading: false, success: true };
    case BOOK_UPDATE_FAIL:
      return { loading: false, error: action.payload, success: false };
    default:
      return state;
  }
};
