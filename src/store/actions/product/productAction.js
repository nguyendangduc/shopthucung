import {
    FEATURE_PRODUCT_FETCH_REQUEST,
    FEATURE_PRODUCT_FETCH_SUCCESS,
    HOT_PRODUCT_FETCH_REQUEST,
    HOT_PRODUCT_FETCH_SUCCESS,
    SET_INFO_PAGINATION_REQUEST,
    SET_INFO_PAGINATION_SUCCESS,
    HANDLE_TASK_REQUEST,
    HANDLE_TASK_SUCCESS,
    GET_DETAIL_REQUEST,
    GET_DETAIL_SUCCESS,
    ADD_CART,
    CHANGE_QUANTITY_REQUEST,
    UPDATE_CART,
    DELETE_CART_ITEM_REQUEST,
    GET_ORDER_LIST_REQUEST,
    GET_ORDER_LIST_SUCCESS,
    CANCEL_ORDER_REQUEST,
    DELETE_ORDER_REQUEST,
    ORDER_REQUEST,

} from 'const/actionConst'
import RequestUtils from 'utils/RequestUtils'
import {API} from 'const'
export const get_feature_product_request = () => ({
    type: FEATURE_PRODUCT_FETCH_REQUEST
})
export const get_feature_product_success = (data) => ({
    type: FEATURE_PRODUCT_FETCH_SUCCESS,
    payload: data
})
export const get_hot_product_success = (data) => ({
    type: HOT_PRODUCT_FETCH_SUCCESS,
    payload: data
})
export const get_hot_product_request = () => {
    return dispatch => {
        return RequestUtils.Get(API.HOT_PRODUCT).then(data => dispatch(get_hot_product_success(data)))
    }
}
export const set_info_pagination_request = (idPage, quantity, perPage) => ({
    type: SET_INFO_PAGINATION_REQUEST,
    payload: {
        idPage: idPage,
        quantity: quantity,
        perPage: perPage
    }
})
export const set_info_pagination_success = (data) => ({
    type: SET_INFO_PAGINATION_SUCCESS,
    payload: data

})
export const handle_task_request = (dataHading) => ({
    type: HANDLE_TASK_REQUEST,
    payload: dataHading
})
export const handle_task_success = (listProduct) => ({
    type: HANDLE_TASK_SUCCESS,
    payload: listProduct
})

export const get_detail_request = (id) => {
    return dispatch => {
        return RequestUtils.Get(API.PRODUCT_ALL,{id:id}).then(data => dispatch(get_detail_success(data)))
    }
}
export const get_detail_success = (data) => ({
    type: GET_DETAIL_SUCCESS,
    payload: data
})
export const add_cart = (id,quantity) => ({
    type: ADD_CART,
    payload: {
        id,
        quantity
    }
})
export const change_quantity_request = (id, param) => ({
    type: CHANGE_QUANTITY_REQUEST,
    payload: {
        id: id,
        param: param
    }
})
export const update_cart = (cart) => ({
    type: UPDATE_CART,
    payload: cart
})
export const delete_cart_item_request = (id) => ({
    type: DELETE_CART_ITEM_REQUEST,
    payload: id
}) 
export const get_order_list_request = (state) => ({
    type: GET_ORDER_LIST_REQUEST,
    payload: state
})
export const get_order_list_success = (data) => ({
    type: GET_ORDER_LIST_SUCCESS,
    payload: data
})
export const cancel_order_request = (id) => {
    return async (dispatch) => {
        let order = await RequestUtils.Get(API.PURCHASE,{id:id})
        order = {...order, state: 5}
        delete order.id
        // yield axios.put(`${GATEWAY+API.PURCHASE}/${idOrder}`, order)
        RequestUtils.Put(API.PURCHASE,{id: id}, order).then(data => dispatch(get_order_list_request(5)))
    }
}
   
export const delete_order_request = (id) => ({
    type: DELETE_ORDER_REQUEST,
    payload: id
})
export const order_request = (order) => ({
    type: ORDER_REQUEST,
    payload: order
})