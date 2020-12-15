import {AUTH_SUCCESS, AUTH_FALSE, LOGOUT} from 'const'

const initState = {
    stateAuth: false,
    token: null,
    errInfo: null
}

const authReducer = (state = initState, action) => {
    switch (action.type) {
        case AUTH_SUCCESS:
            return {
                ...state,
                stateAuth: true,
                errInfo: null,
                token: action.payload,
            }
        case AUTH_FALSE: 
            return {
                ...state,
                stateAuth: false,
                errInfo: action.payload,
                token: null
            }
        case LOGOUT: 
            localStorage.removeItem('token')
            localStorage.removeItem('expirationDate')
            return {
                ...initState
            }
        default: return state
    }
}
export default authReducer;