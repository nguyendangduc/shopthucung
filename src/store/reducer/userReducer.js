import { SET_USER_DATA, LOGOUT } from 'const'
const initState = {
    user: {},
    listUserRules: [],
}
const userReducer = (state = initState, action) => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                user: action.payload.user,
                listUserRules: action.payload.listUserRules
            }
        case LOGOUT:
            return {
                ...initState
            }
        default:
            return state
    }
}
export default userReducer