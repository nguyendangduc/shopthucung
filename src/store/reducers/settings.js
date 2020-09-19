import { USER_FETCH_SUCCEEDED, CATEGORY_FETCH_SUCCEEDED } from "../actions/settings";

const initState = {
  status: {},
  userSaga: {},
  category: {}
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
    default:
      return state;
  }
};

export default settings;
