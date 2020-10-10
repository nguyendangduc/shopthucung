import {combineReducers} from "redux";
import settings from "./settings";
import auth from "auth/store/reducers";
import {reducer as reduxFormReducer} from 'redux-form';
import {GET_MESSAGE, SET_LAYOUT, SET_DATA_FOR_HOME} from "../actions";

const initState = {
    message: {
        type: "suscess",
        data: null,
    },
    layout: "Guests",
    dataForHome: {
        home: [],
        sibar: [],
    },
};

const configs = (state = initState, action) => {
    switch (action.type) {
        case GET_MESSAGE:
            return {
                ...state,
                message: action.payload,
            };
        case SET_LAYOUT:
            /*
            const newLayout = _.merge({}, {layout: action.payload});
            return _.merge(state, newLayout);
            */
            return {...state, layout: action.payload};
        case SET_DATA_FOR_HOME:
            return {
                ...state,
                dataForHome: action.payload,
            };
        default:
            return state;
    }
};

export const makeRootReducer = (asyncReducers) => {
    return combineReducers({
        configs,
        settings,
        auth,
        form: reduxFormReducer,
        ...asyncReducers
    });
};

export default makeRootReducer;
