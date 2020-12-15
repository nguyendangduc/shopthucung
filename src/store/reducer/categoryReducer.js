import { CATEGORY_FETCH_SUCCESS } from 'const'

const initState = {
    categories: []
}

export default function categoryReducer(state = initState, action) {
    switch (action.type) {
        case CATEGORY_FETCH_SUCCESS:
            return {
                ...state,
                categories: action.payload
            }
        default: 
            return state
    }

}