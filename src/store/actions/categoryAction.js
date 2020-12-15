import {
    CATEGORY_FETCH_REQUEST,
    CATEGORY_FETCH_SUCCESS
} from 'const'

export const get_category_success = (data) => ({
    type: CATEGORY_FETCH_SUCCESS,
    payload: data
})
export const get_category_request = () => ({
    type: CATEGORY_FETCH_REQUEST
})