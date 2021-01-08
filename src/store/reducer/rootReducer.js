import { combineReducers } from 'redux'
import featureProductsReducer  from './product/productReducer'
import sliderReducer from './sliderReducer'
import categoryReducer from './categoryReducer'
import userReducer from './userReducer'
import authReducer from './authReducer'
import modalReducer from './modalReducer'
export default function makeRootReducer() {
    return combineReducers({
        featureProductsReducer,
        sliderReducer,
        categoryReducer,
        userReducer,
        authReducer,
        modalReducer   
    })
}
