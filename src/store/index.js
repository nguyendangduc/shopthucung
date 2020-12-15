import { createStore, applyMiddleware } from 'redux'
import makeRootReducer from 'store/reducer/rootReducer'
import rootSaga from './saga/rootSaga'
import  createSagaMiddleware from 'redux-saga'

const sagaMiddleware = createSagaMiddleware()
let middlewareList = [sagaMiddleware]
const store = createStore(makeRootReducer(), applyMiddleware(...middlewareList))
sagaMiddleware.run(rootSaga)
export default store