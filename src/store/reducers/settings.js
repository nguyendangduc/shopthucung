import { SET_STATUS, USER_FETCH_SUCCEEDED } from "../actions/settings";

const initState = {
  status: {},
  userSaga: []
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
        userSaga: action.payload,
      };
    default:
      return state;
  }
};

export default settings;
