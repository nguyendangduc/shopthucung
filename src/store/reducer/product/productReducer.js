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
    featureProductsIsFetching: true,
    hotProducts: [],
    hotProductsIsFetching: true,
    infoPage: {
        perPage: 16,
        idPage: 1,
        start: 0,
        end: 16,
        totalPage: 0
    },
    productDetail: {},
    cart: {...JSON.parse(localStorage.getItem('cart'))},
    purchase: [],
    purchaseIsFetching: true,
    stateWatcher: 0
}

const featureProductsReducer = (state = initState, action) => {
    switch (action.type) {
        case FEATURE_PRODUCT_FETCH_SUCCESS:
            return {
                ...state,
                featureProductsIsFetching: false,
                featureProducts: action.payload,
                featureProductsInit: action.payload
            }
        case HOT_PRODUCT_FETCH_SUCCESS:
            return {
                ...state,
                featureProductsIsFetching: false,
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
                featureProductsIsFetching:false,
                featureProducts: action.payload
            }
        case GET_DETAIL_SUCCESS:
            return {
                ...state,
                productDetail: action.payload
            }
        case ADD_CART:
            const quantity = action.payload.quantity
            const id = action.payload.id
            let total = quantity * state.productDetail.price * (1 - state.productDetail.sale / 100)
            total = Math.round(total *100)/100 
            const cartItem = {
              ...state.productDetail,
              quantity: quantity,
              total: total
            }
            const cart = {...JSON.parse(window.localStorage.getItem("cart"))}
            if(cart[id]) {
              cart[id].quantity += quantity
              cart[id].total += total 
            } else {
              cart[id] = cartItem
            }
            window.localStorage.setItem("cart", JSON.stringify(cart))
            return {
                ...state,
                cart: cart
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
                stateWatcher: action.payload.state,
                purchaseIsFetching:false
            }
        default:
            return state
    }
}
export default featureProductsReducer