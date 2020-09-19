import {
  USER_FETCH_SUCCEEDED, CATEGORY_FETCH_SUCCEEDED,
  DATA_FORM_SOCKET
} from "../actions/settings";

const initState = {
  status: {},
  userSaga: {},
  category: {},
  socketId: null
};

const settings = (state = initState, action) => {
  switch (action.type) {
    case USER_FETCH_SUCCEEDED:
      return {
        ...state,
        userSaga: action.payload,
      };
    case CATEGORY_FETCH_SUCCEEDED:
      return {
        ...state,
        category: action.payload,
      };
    case DATA_FORM_SOCKET :
      return {
        ...state,
        socketId: action.payload,
      };
    default:
      return state;
  }
};

export default settings;
