import { call, put, takeLatest } from "redux-saga/effects";
import { RequestUtils } from "utils";

export function fetchPostsApi(reddit) {
    return RequestUtils.Get('/user/t3h');
}

function* category(data) {
    try {
        console.log("data", data);
        const user = yield call(fetchPostsApi, "category");
        yield put({ type: "USER_FETCH_SUCCEEDED", payload: user });
    } catch (e) {
        yield put({ type: "USER_FETCH_FAILED", message: e.message });
    }
}

/*
// root
  export default function* root() {
      yield [
         fork(page1),
         fork(page2),
         //and more pages
      ]
  }
  // page1
  yield [
    takeLatest(SOME_ACTION1, actionHandler1),
    takeLatest(SOME_ACTION2, actionHandler2),
    //and more actions
  ]
*/
export function* fetchCategory() {
    yield takeLatest("USER_FETCH_REQUESTED", category);
}
