import { combineReducers } from 'redux'
import featureProductsReducer  from './product/productReducer'
import sliderReducer from './sliderReducer'
import categoryReducer from './categoryReducer'
import userReducer from './userReducer'
import authReducer from './authReducer'
const makeRootReducer = () => {
    return combineReducers({
        featureProductsReducer,
        sliderReducer,
        categoryReducer,
        userReducer,
        authReducer        
    })
}
export default makeRootReducer