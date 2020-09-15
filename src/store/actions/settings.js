export const SET_STATUS = "[SETTING SET STATUS]";
export const USER_FETCH_REQUESTED = "USER_FETCH_REQUESTED";
export const USER_FETCH_SUCCEEDED = "USER_FETCH_SUCCEEDED";

export function setStatus(status) {
  return (dispatch) => {
    return dispatch({
      type: SET_STATUS,
      payload: status,
    });
  };
}

export const getUsers = (input) => ({
  type: 'USER_FETCH_REQUESTED',
  input: input
});
