import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import makeRootReducer from "./reducers";

let middelware = [thunk];
const store = createStore(
  makeRootReducer(),
  applyMiddleware(...middelware)
);

export default store;
