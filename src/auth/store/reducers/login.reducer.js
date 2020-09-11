import * as Actions from "../actions/login.action";

const initState = {
  success: false,
  error: {
    usename: null,
    password: null,
  },
};

const login = function (state = initState, action) {
  switch (action.type) {
    case Actions.LOGIN_SUCCESS:
      return {
        ...state,
        success: true,
      };
    case Actions.LOGIN_FAIL:
      return {
        success: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default login;
