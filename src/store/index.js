import { createStore, applyMiddleware } from 'redux'
import makeRootReducer from 'store/reducer/rootReducer'
import rootSaga from './saga/rootSaga'
import  createSagaMiddleware from 'redux-saga'
import thunk from 'redux-thunk'

const sagaMiddleware = createSagaMiddleware()
const store = createStore(makeRootReducer(), applyMiddleware(sagaMiddleware,thunk))

sagaMiddleware.run(rootSaga)
export default store
//len trang chu