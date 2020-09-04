export const SET_STATUS = "[SETTING SET STATUS]";

export function setStatus(status) {
  return (dispatch) => {
    return dispatch({
      type: SET_STATUS,
      payload: status,
    });
  };
}
