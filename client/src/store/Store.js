import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import {
  bookCreateReducer,
  bookDeleteReducer,
  bookListReducer,
  bookUpdateReducer,
  userBookListReducer,
} from "../reducers/bookReducers";
import {
  userLoginReducer,
  userRegisterReducer,
  userUpdateReducer,
} from "../reducers/userReducers";

const reducer = combineReducers({
  userRegister: userRegisterReducer,
  userLogin: userLoginReducer,
  userUpdate: userUpdateReducer,
  bookList: bookListReducer,
  userBookList: userBookListReducer,
  bookCreate: bookCreateReducer,
  bookUpdate: bookUpdateReducer,
  bookDelete: bookDeleteReducer,
});

const userInfoFromStorage = localStorage.getItem("userInfo")
  ? JSON.parse(localStorage.getItem("userInfo"))
  : null;

const initialState = {
  userLogin: { userInfo: userInfoFromStorage },
};

const middleware = [thunk];

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
