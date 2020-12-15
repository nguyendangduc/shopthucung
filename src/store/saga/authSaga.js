import {LOGIN_REQUEST,SET_AUTH_TIMEOUT,CHECK_AUTH_BY_TOKEN,SIGNUP_REQUEST} from 'const';
import {set_user_data,auth_success,auth_false,logout,set_auth_timeout} from '../actions/authAction'
import {takeEvery, put,call,delay,all   } from 'redux-saga/effects'
import {GATEWAY2, API} from 'const'
import axios from 'axios'
function* fetchLogin(dataLogin) {
    const res = yield axios.post(GATEWAY2 + API.AUTH, dataLogin)
     return res.data//dataAxios
}
function* loginSaga(action) {
    const data = yield call(fetchLogin, action.payload)
    if(data.errorCode === 200) {
        const expirationDate = new Date(new Date().getTime() + 3600*12*1000) //ms
        yield put(set_user_data(data.data))
        yield put(auth_success(data.data.token))
        localStorage.setItem('expirationDate', expirationDate)
        localStorage.setItem("token", JSON.stringify(data.data.token))
        // yield delay(3600*12*1000)
        // yield put(logout())
        
    } else {
        yield put(auth_false(data.error))
    }
}
export function* loginRequest() {
    yield takeEvery(LOGIN_REQUEST, loginSaga);
}

async function fetchSignup(dataSignup) {
    const res = await axios.post(GATEWAY2 + API.AUTH, dataSignup)
     return res.data//dataAxios
}
function* signupSaga(action) {
    const data = yield call(fetchSignup, action.payload)
    if(data.errorCode === 200) {
        const expirationDate = new Date(new Date().getTime() + 3600*12*1000) 
        yield put(set_user_data(data.data))
        yield put(auth_success(data.data.token))
        localStorage.setItem('expirationDate', expirationDate)
        localStorage.setItem("token", JSON.stringify(data.data.token))
        yield delay(3600*12*1000)
        yield put(logout())
    } else {
        yield put(auth_false(data.error))
    }
}
export function* signupRequest() {
    yield takeEvery(SIGNUP_REQUEST, signupSaga);
}

function postToken() {
    const token = localStorage.getItem('token')
    return axios.post(GATEWAY2 + API.TOKEN, { token: token })
    .then(res => {
        return res.data
    }).catch(err => console.log(err))
   //return 1 promise, dung async cung return promise, RequestUtils cung retrun 1promise 
}
function* checkAuthByTokenSaga() {
    const token = window.localStorage.getItem('token')
    if(token) {
        const expirationDate = new Date(localStorage.getItem('expirationDate'))
        if(expirationDate <= new Date()) {
            yield put(logout())
        } else {
            const res = yield call(postToken)
            if(res.errorCode === 200) {
                yield put(set_user_data(res.data))
                yield put(auth_success(res.data.token))
                console.log(expirationDate.getTime() - new Date().getTime())
                yield delay((expirationDate.getTime() - new Date().getTime()))//ms
                yield put(logout())
            }
        }
    }
}
export function* checkAuthByToken() {
    yield takeEvery(CHECK_AUTH_BY_TOKEN, checkAuthByTokenSaga);
}