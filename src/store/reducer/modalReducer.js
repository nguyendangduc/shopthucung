import {SET_MODAL} from 'const'
const initState = {
    modal: '',
    modalData: null
}
export default function modalReducer(state = initState, action) {
    switch (action.type) {
        case SET_MODAL:
            return {
                ...state,
                modal: action.payload.modalName,
                modalData: action.payload.modalData

            }
        default:
            return state
    }
}