import jwtService from "utils/jwtService";
import { SET_USE_DATA } from "../actions/user.action";
import { SUCCESS_CODE } from "const";

export const LOGIN_SUCCESS = "[Login Success]";
export const LOGIN_FAIL = "[Login Fail]";

export function submitLogin({ username, password }) {
  return (dispatch) => {
    jwtService.siginWithUsernameAndPassword(username, password)
    .then((res) => {
      if (res.errorCode === SUCCESS_CODE) {
        dispatch({ type: SET_USE_DATA, payload: res.data });
        jwtService.setSession(res.data.token);
        return dispatch({ type: LOGIN_SUCCESS })
      } else {
        return dispatch({
          type: LOGIN_FAIL,
          payload: res.data,
        });
      }
    }).catch((error) => {
      console.log("Loi login roi: ", error);
    });
  };
}
