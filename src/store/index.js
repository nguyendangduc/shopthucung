import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import createSagaMiddleware from 'redux-saga'
import makeRootReducer from "./reducers";
import mySaga from './sagas';
import io from 'socket.io-client';
import socketMidelware from '../socket';

let socket = io('http://localhost:5000');
const socketMiddelWareStore = (store) => {
  return socketMidelware(store, socket)
}

const sagaMiddleware = createSagaMiddleware()
let middelware = [thunk, sagaMiddleware, socketMiddelWareStore];
const store = createStore(
  makeRootReducer(),
  applyMiddleware(...middelware)
);
sagaMiddleware.run(mySaga);
export default store;
