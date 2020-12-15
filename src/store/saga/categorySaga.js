import { takeEvery, put, call } from 'redux-saga/effects'
import {GATEWAY,API} from 'const'
import RequestUtils from 'utils/RequestUtils'
import {
    CATEGORY_FETCH_REQUEST
} from 'const'
import {
    get_category_success
} from '../actions/categoryAction'

function fetchCategory() {
    return RequestUtils.Get(API.CATEGORY)
}
function* getCategorySaga(action) {
    const cateData = yield call(fetchCategory)
    yield put(get_category_success(cateData))
}
export function* getCategoryRequest() {
    yield takeEvery(CATEGORY_FETCH_REQUEST, getCategorySaga)
}