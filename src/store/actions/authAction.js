import { SET_USER_DATA, LOGIN_REQUEST, AUTH_SUCCESS, AUTH_FALSE, LOGOUT, SET_AUTH_TIMEOUT,CHECK_AUTH_BY_TOKEN,SIGNUP_REQUEST } from 'const';

export const set_user_data = (userData) => ({
    type: SET_USER_DATA,
    payload: userData
})
export const login_request = (dataLogin) => ({
    type: LOGIN_REQUEST,
    payload: dataLogin
})
export const signup_request = (dataSignup) => ({
    type: SIGNUP_REQUEST,
    payload: dataSignup
})
export const auth_success = (token) => ({
    type: AUTH_SUCCESS,
    payload: token
})
export const auth_false = (err) => ({
    type: AUTH_FALSE,
    payload: err
})
export const logout = () => ({
    type: LOGOUT
})
export const set_auth_timeout = (expirationTime) => ({
    type: SET_AUTH_TIMEOUT,
    payload: expirationTime
})
export const check_auth_by_token = () => ({
    type: CHECK_AUTH_BY_TOKEN
})
