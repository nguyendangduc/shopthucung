import {
    SLIDER_FETCH_SUCCESS
} from 'const'

const initState = {
    listSlide: []
}

const sliderReducer = (state = initState, action) => {
    switch (action.type) {
        case SLIDER_FETCH_SUCCESS:
            return {
                ...state,
                listSlide: action.payload
            }
        default:
            return state
    }
}
export default sliderReducer
