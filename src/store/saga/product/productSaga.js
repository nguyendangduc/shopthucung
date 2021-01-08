import { call, put, select, take, takeEvery } from 'redux-saga/effects'
import { GATEWAY, API } from 'const/api'
import axios from 'axios'
import RequestUtils from 'utils/RequestUtils'
import {
    FEATURE_PRODUCT_FETCH_REQUEST,
    HOT_PRODUCT_FETCH_REQUEST,
    SET_INFO_PAGINATION_REQUEST,
    HANDLE_TASK_REQUEST,
    GET_DETAIL_REQUEST,
    CHANGE_QUANTITY_REQUEST,
    DELETE_CART_ITEM_REQUEST,
    GET_ORDER_LIST_REQUEST,
    CANCEL_ORDER_REQUEST,
    DELETE_ORDER_REQUEST,
    ORDER_REQUEST
} from 'const/actionConst'
import {
    get_feature_product_success,
    get_hot_product_success,
    set_info_pagination_success,
    handle_task_success,
    get_detail_success,
    update_cart,
    get_order_list_success,
    get_order_list_request,
    add_cart

} from '../../actions/product/productAction'
import Axios from 'axios'
import swal from 'sweetalert'
export function* getFeatureProductSaga(action) {
    let featureData = yield Axios.get(GATEWAY + API.PRODUCT_ALL)
    yield put(get_feature_product_success(featureData.data))
}
export function* getFeatureProductRequest() {
    yield takeEvery(FEATURE_PRODUCT_FETCH_REQUEST, getFeatureProductSaga)
}
function* infoPagination(action) {
    let infoPage = action.payload
    let { idPage, perPage, quantity } = infoPage
    let totalPage =Math.ceil(quantity / perPage)
    let start = (idPage - 1) * perPage 
    let end = idPage * perPage 
    return {
        perPage: perPage,
        idPage: idPage,
        start: start,
        end: end,
        totalPage: totalPage
    }
}
function* setInfoPaginationSaga(action) {
    const newInfoPage = yield call(infoPagination, action)
    yield put(set_info_pagination_success(newInfoPage))
}
export function* setInfoPaginationRequest() {
    yield takeEvery(SET_INFO_PAGINATION_REQUEST, setInfoPaginationSaga)
}

function* handleTask(reddit) {
    let { featureProducts } = yield select(({ featureProductsReducer }) => featureProductsReducer)
    if (reddit.handingType === "filter") {
        const filter = reddit.handingPayload
        if (filter) {
            if (filter.filterBy === "category") {
                if (filter.val === 'all') {
                    featureProducts = yield RequestUtils.Get(API.PRODUCT_ALL)
                } else {
                    featureProducts = yield RequestUtils.Get(API.PRODUCT_ALL,{category: filter.val})
                }
            }
        }
    } else if (reddit.handingType === "search") {
        const productAll = yield RequestUtils.Get(API.PRODUCT_ALL)
        if (reddit.handingPayload && reddit.handingPayload.trim()) {
            //gui request kem key ở url , be getAll xong lọc , với java là for xong check rồi add vào arr   
            featureProducts = productAll.filter(p => p.name.toLowerCase().includes(reddit.handingPayload.toLowerCase()))
        } else {
            featureProducts = productAll
        }

    } else if (reddit.handingType === 'sort') {
        const sort = reddit.handingPayload
        if (sort.sortBy === "price") {
            if (sort.val === 1) {
                featureProducts = featureProducts.sort((a, b) =>
                    Number(a.price) - Number(b.price)
                )
            } else if (sort.val === -1) {
                featureProducts = featureProducts.sort((a, b) =>
                    Number(b.price) - Number(a.price)
                )
            }
        } else if (sort.sortBy === "name") {
            if (sort.val === 1) {
                featureProducts = featureProducts.sort((a, b) =>
                    a.name > b.name ? 1 : a.name < b.name ? -1 : 0
                )
            } else if (sort.val === -1) {
                featureProducts = featureProducts.sort((a, b) =>
                    a.name > b.name ? -1 : a.name < b.name ? 1 : 0
                )
            }
        } else if(sort.sortBy === "createAt") {
            featureProducts = featureProducts.sort((a, b) => 
              new Date(b.createAt).getTime() - new Date(a.createAt).getTime())
            
            
        }
    }
    console.log(reddit,featureProducts)
    return featureProducts
}
function* handleTaskSaga(action) {
    const products = yield call(handleTask, action.payload)
    yield put(handle_task_success(products))
}
export function* handleTaskRequest() {
    yield takeEvery(HANDLE_TASK_REQUEST, handleTaskSaga)
}
//HotProduct
function fetchHotProducts(param) {// 3 cach async * then, * co yield
    // const data = yield Axios.get(GATEWAY+API.HOT_PRODUCT)
    // return data.data
    return RequestUtils.Get(API.HOT_PRODUCT)
    //uu diem: ngan gon khong co gateway, khong phai .data, da co xl loi, khi promiseAll tra ve 1 mang data thay vi 1 mang response lai phai map sang data
}
export function* getHotProductSaga(action) {
    const hotProducts = yield call(fetchHotProducts, "1999")
    // const hotProducts = yield fetchHotProducts()
    if(hotProducts) {
        yield put(get_hot_product_success(hotProducts)) 
    }
}
export function* getHotProductRequest() {
    yield takeEvery(HOT_PRODUCT_FETCH_REQUEST, getHotProductSaga)
}
//Detail
function* getDetail(id) {
    let productDetail = yield RequestUtils.Get(API.PRODUCT_ALL,{id:id, code:'dfd'})
    const cate = yield RequestUtils.Get(`${API.CATEGORY}?id=${productDetail.category}`)
    productDetail = {...productDetail, category: cate[0].name}
    return productDetail
}
function* getDetailSaga(action) {
    const productDetail = yield call(getDetail,action.payload)
    if(productDetail)
    yield put(get_detail_success(productDetail))
}
export function* getDetailProductRequest() {
    yield takeEvery(GET_DETAIL_REQUEST, getDetailSaga)
}
//cart

function* changeQuantity(data) {
    const {cart} = yield select(({featureProductsReducer}) => featureProductsReducer)
    if(data.param === 1) {
        cart[data.id].quantity += 1
    } else {
        cart[data.id].quantity -= 1
        if(cart[data.id].quantity === 0) {
            const confirm = yield swal("Are you sure?", {
                dangerMode: true,
                buttons: true,
              });
            if(confirm) {
                delete cart[data.id]
            } else {
            cart[data.id].quantity = 1
            }
        }
    }
    return cart
}
function* changeQuantitySaga(action) {
    const cart = yield call(changeQuantity, action.payload)
    if(cart)
    yield put(update_cart(cart))
}
export function* changeQuantityRequest() {
    yield takeEvery(CHANGE_QUANTITY_REQUEST, changeQuantitySaga)
}
function* deleteCartItem(id) {
    const {cart} = yield select(({featureProductsReducer}) => featureProductsReducer)
    delete cart[id]
    return cart
}
function* deleteCartItemSaga(action) {
    const cart = yield call(deleteCartItem, action.payload)
    if(cart)
    yield put(update_cart(cart))
}
export function* deleteCartItemRequest() {
    yield takeEvery(DELETE_CART_ITEM_REQUEST, deleteCartItemSaga)
}
function postOrder(order) {
    return RequestUtils.Post(API.PURCHASE, order)
}
function* orderSaga(action) {
    const order = yield call(postOrder, action.payload)
}
export function* orderRequest() {
    yield takeEvery(ORDER_REQUEST, orderSaga)
}
//purchase
function* fetchOrderList(state) {
    const {user} = yield select(({ userReducer }) => userReducer)
    if(state === 0) {
        return yield RequestUtils.Get(API.PURCHASE,{idUser:user.id})
    }
    return yield RequestUtils.Get(API.PURCHASE,{idUser:user.id, state: state})
}
function* getOrderListSaga(action) {
    const orderList = yield call(fetchOrderList,action.payload)
    if(orderList)
    yield put(get_order_list_success({state: action.payload, orderList: orderList}))
}
export function* getOrderListRequest() {
    yield takeEvery(GET_ORDER_LIST_REQUEST, getOrderListSaga)
}
function* methodPutOrder(idOrder) {
    let order = yield RequestUtils.Get(API.PURCHASE,{id:idOrder})
    order = {...order, state: 5}
    delete order.id
    // yield axios.put(`${GATEWAY+API.PURCHASE}/${idOrder}`, order)
    return yield RequestUtils.Put(API.PURCHASE,{id: idOrder}, order)
    // console.log(`${GATEWAY+API.PURCHASE}/${idOrder}`)
}
function* cancelOrderSaga(action) {
    const response = yield call(methodPutOrder, action.payload)
    if(response)
    yield put(get_order_list_request(5))
}
export function* cancelOrderRequest() {
    yield takeEvery(CANCEL_ORDER_REQUEST, cancelOrderSaga)
}
function methodDeleteOrder(idOrder) {
    return RequestUtils.Delete(API.PURCHASE,{id:idOrder})
}
function* deleteOrderSaga(action) {
    const res = yield call(methodDeleteOrder, action.payload)
    if(res)
    yield put(get_order_list_request(5))
}
export function* deleteOrderRequest() {
    yield takeEvery(DELETE_ORDER_REQUEST, deleteOrderSaga)
}


// sd function* yield khi bat dong bo/ su dung cac method saga/effect
// * + yield