import {
    SLIDER_FETCH_REQUEST
} from 'const'
import { call, put, takeEvery } from 'redux-saga/effects'
import {
    get_slider_success
} from '../actions/sliderAction'
import RequestUtils from 'utils/RequestUtils'
import {GATEWAY, API} from 'const'
import Axios from 'axios'
function fetchSlider() {
    return RequestUtils.Get(API.SLIDE)
}
export function* getSliderSaga(action) {
    const sliderData = yield call(fetchSlider)
    yield put(get_slider_success(sliderData))
}
export function* getSliderRequest() {
    yield takeEvery(SLIDER_FETCH_REQUEST,getSliderSaga)
}