import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import createSagaMiddleware from 'redux-saga'
import makeRootReducer from "./reducers";
import rootSaga from './sagas';

const sagaMiddleware = createSagaMiddleware()
let middelware = [thunk, sagaMiddleware];
// Chúng ta còn một Middleware là Redux-Observable, sử dụng middel này thì khi chúng ta tiếp cận với
// RxSwift và RxJava sẽ dễ dàng hơn vì RxSwift và RxJava đều triển khai bật đồng bộ cho java và Swift của ios.
const store = createStore(
  makeRootReducer(),
  applyMiddleware(...middelware)
);
sagaMiddleware.run(rootSaga);
export default store;
