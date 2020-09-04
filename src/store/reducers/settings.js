import { SET_STATUS } from "../actions/settings";

const initState = {
  status: {},
};

const settings = (state = initState, action) => {
  switch (action.type) {
    case SET_STATUS:
      return {
        ...state,
        status: action.payload,
      };
    default:
      return state;
  }
};

export default settings;
