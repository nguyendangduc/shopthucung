export const SET_STATUS = "[SETTING SET STATUS]";

export const USER_FETCH_SUCCEEDED = "USER_FETCH_SUCCEEDED";
export const USER_FETCH_INIT = "USER_FETCH_INIT";

export const FETCH_CATEGORY_INIT = "FETCH_CATEGORY_INIT";
export const FETCH_CATEGORY_SUCCESS = "FETCH_CATEGORY_SUCCESS";
export const USER_FETCH_FAILED = "USER_FETCH_FAILED";
export const DATA_FORM_SOCKET = "DATA_FORM_SOCKET";

export function setStatus(status) {
  return (dispatch) => {
    return dispatch({
      type: SET_STATUS,
      payload: status,
    });
  };
}

export const getUsers = (input) => ({
  type: USER_FETCH_INIT,
  input: input
})

export const getCategory = (input) => ({
  type: FETCH_CATEGORY_INIT,
  input: input
})