import {
    getFeatureProductRequest,
    getHotProductRequest,
    setInfoPaginationRequest,
    handleTaskRequest,
    getDetailProductRequest,
    changeQuantityRequest,
    deleteCartItemRequest,
    getOrderListRequest,
    cancelOrderRequest,
    deleteOrderRequest,
    orderRequest,

} from './product/productSaga'

import {
    getSliderRequest
} from './sliderSaga'

import {
    getCategoryRequest
} from './categorySaga'
import {
    loginRequest,
    checkAuthByToken,
    signupRequest


} from './authSaga'
import { all } from 'redux-saga/effects'

export default function* rootSaga() {
    yield all([
        getFeatureProductRequest(),
        getHotProductRequest(),
        getSliderRequest(),
        getCategoryRequest(),
        setInfoPaginationRequest(),
        handleTaskRequest(),
        getDetailProductRequest(),
        changeQuantityRequest(),
        deleteCartItemRequest(),
        getOrderListRequest(),
        cancelOrderRequest(),
        deleteOrderRequest(),
        orderRequest(),
        loginRequest(),
        signupRequest(),
        checkAuthByToken()
    ])
}