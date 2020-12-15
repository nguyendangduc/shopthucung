import { 
    SLIDER_FETCH_REQUEST ,
    SLIDER_FETCH_SUCCESS
} from 'const'
export const get_slider_success = (data) => ({
    type: SLIDER_FETCH_SUCCESS,
    payload: data
})
export const get_slider_request = () => ({
    type: SLIDER_FETCH_REQUEST
})
