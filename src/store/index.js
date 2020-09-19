import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import createSagaMiddleware from 'redux-saga'
import makeRootReducer from "./reducers";
import rootSaga from './sagas';

import io from 'socket.io-client';
import socketMidelware from 'socket';
let socket = io('http://localhost:5000');
const socketMiddelWareStore = (store) => {
    return socketMidelware(store, socket)
}

const sagaMiddleware = createSagaMiddleware()
let middelware = [thunk, sagaMiddleware, socketMiddelWareStore];
// Chúng ta còn một Middleware là Redux-Observable, sử dụng middel này thì khi chúng ta tiếp cận với
// RxSwift và RxJava sẽ dễ dàng hơn vì RxSwift và RxJava đều triển khai bật đồng bộ cho java và Swift của ios.
const store = createStore(
  makeRootReducer(),
  applyMiddleware(...middelware)
);
sagaMiddleware.run(rootSaga);
export default store;
