import * as Actions from "../actions/user.action";

const initState = {
  listUserRules: [],
  user: {},
};

const user = function (state = initState, action) {
  switch (action.type) {
    case Actions.SET_USE_DATA:
      return {
        ...state,
        ...action.payload,
      };
    case Actions.USE_LOGOUT:
      return {
        initState,
      };
    default:
      return state;
  }
};

export default user;
