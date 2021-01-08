import {SET_MODAL} from 'const'
export const set_modal = (modalName, modalData) => ({
    type: SET_MODAL,
    payload: {
        modalName,
        modalData
    }
})