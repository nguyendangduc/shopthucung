import {
    FEATURE_PRODUCT_FETCH_SUCCESS,
    HOT_PRODUCT_FETCH_SUCCESS,
    SET_INFO_PAGINATION_SUCCESS,
    HANDLE_TASK_SUCCESS,
    GET_DETAIL_SUCCESS,
    ADD_CART,
    UPDATE_CART,
    GET_ORDER_LIST_SUCCESS,
} from 'const/actionConst'

const initState = {
    featureProductsInit: [],
    featureProducts: [],
    hotProducts: [],
    infoPage: {
        perPage: 8,
        idPage: 1,
        start: 0,
        end: 8,
        totalPage: 0
    },
    productDetail: {},
    cart: {},
    purchase: [],
    stateWatcher: 0
}

const featureProductsReducer = (state = initState, action) => {
    switch (action.type) {
        case FEATURE_PRODUCT_FETCH_SUCCESS:
            return {
                ...state,
                featureProducts: action.payload,
                featureProductsInit: action.payload
            }
        case HOT_PRODUCT_FETCH_SUCCESS:
            return {
                ...state,
                hotProducts: action.payload
            }
        case SET_INFO_PAGINATION_SUCCESS:
            return {
                ...state,
                infoPage: action.payload
            }
        case HANDLE_TASK_SUCCESS:
            return {
                ...state,
                featureProducts: action.payload
            }
        case GET_DETAIL_SUCCESS:
            return {
                ...state,
                productDetail: action.payload
            }
        case ADD_CART:
            window.localStorage.setItem("cart", JSON.stringify(action.payload))
            return {
                ...state,
                cart: action.payload
            }
        case UPDATE_CART:
            window.localStorage.setItem("cart", JSON.stringify(action.payload))//coi day nhu data.json, set sql trc moi setStore
            return {
                ...state,
                cart: action.payload
            }
        case GET_ORDER_LIST_SUCCESS:
            return {
                ...state,
                purchase: action.payload.orderList,
                stateWatcher: action.payload.state
            }
        default:
            return state
    }
}
export default featureProductsReducer