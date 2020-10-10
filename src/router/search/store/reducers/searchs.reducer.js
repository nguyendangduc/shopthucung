import * as Actions from '../actions';

const searchsReducer = function (state = {
    page: 0,
    listPosts: []
}, action) {
    switch ( action.type ) {
        case Actions.GET_SEARCH:
            return { page: action.page, listPosts: action.payload }
        default: return state;
    }
};

export default searchsReducer;
