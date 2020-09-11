import { RequestUtils } from "utils";
import { API } from "const";

export const GET_MESSAGE = "[MESSAGE] GET MESSAGE";
export const SET_LAYOUT = "[SET LAYOUT]";
export const SET_DATA_FOR_HOME = "[SET DATA FOR HOME]";

// type = ['success', 'error', 'warning']
// message: text thong bao
export function setMessage(type, message) {
  return {
    type: GET_MESSAGE,
    payload: {
      type: type,
      data: message,
    },
  };
}

export function setLayout(strLayout) {
  return {
    type: SET_LAYOUT,
    payload: strLayout,
  };
}

export function setDataForHome() {
  return (dispatch, getState) => {
    Promise.all([
      RequestUtils.Get(API.DATA_SIBAR, { id: 10, cate: 20 }),
      RequestUtils.Get(API.DATA_HOME),
    ]).then((results) => {
      return {sibar: results[0], home: results[1]};
    }).then(({ sibar, home }) => {
      return dispatch({
        type: SET_DATA_FOR_HOME,
        payload: {
          sibar: sibar,
          home: home,
        },
      });
    });
  };
}
