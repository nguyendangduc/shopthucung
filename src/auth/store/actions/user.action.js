export const SET_USE_DATA = "[USER] SET DATA";
export const USE_LOGOUT = "[USER] USE_LOGOUT";

export function setUserData(data) {
  return (dispatch) => {
    Promise.all([
      dispatch({ type: SET_USE_DATA, payload: data }),
    ]);
  };
}