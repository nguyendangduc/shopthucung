import {
  SET_STATUS, USER_FETCH_SUCCEEDED, USER_FETCH_FAILED,
  FETCH_CATEGORY_SUCCESS, DATA_FORM_SOCKET
} from "../actions/settings";

const initState = {
  status: {},
  user: [],
  category: [],
  message: '',
  dataSocket: null
};

const settings = (state = initState, action) => {
  switch (action.type) {
    case SET_STATUS:
      return {
        ...state,
        status: action.payload,
      };
    case USER_FETCH_SUCCEEDED:
      return {
        ...state,
        user: action.payload
      }
    case FETCH_CATEGORY_SUCCESS: 
      return {
        ...state,
        category: action.payload
      }
    case USER_FETCH_FAILED :
      return {
        ...state,
        message: action.payload
      }
    case DATA_FORM_SOCKET : 
      return {
        ...state,
        dataSocket: action.payload
      }
    default:
      return state;
  }
};

export default settings;
