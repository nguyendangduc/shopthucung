import { call, put, takeEvery, takeLatest, all } from "redux-saga/effects";

export function fetchPostsApi(reddit) {
  return fetch(`https://www.reddit.com/r/${reddit}.json`)
    .then((response) => response.json())
    .then((json) => json.data.children.map((child) => child.data));
}

// worker Saga: will be fired on USER_FETCH_REQUESTED actions
// async - await
// Promise: post.then(res => {});
// const data = await callApi();
// console.log(data);
function* fetchUser() {
  try {
    const user = yield call(fetchPostsApi, "hanoi");
    console.log("user in sags", user);
    yield put({ type: "USER_FETCH_SUCCEEDED", payload: user });
  } catch (e) {
    yield put({ type: "USER_FETCH_FAILED", payload: e.message });
  }
}

function* fetchCategory() {
  try {
    const categore = yield call(fetchPostsApi, "category");
    yield put({ type: "FETCH_CATEGORY_SUCCESS", payload: categore });
  } catch (e) {
    console.log("Fecth category faile", e);
  }
}

function* takeUser() {
  yield takeEvery("USER_FETCH_INIT", fetchUser);
}

function* takeCategory() {
  yield takeEvery("FETCH_CATEGORY_INIT", fetchCategory);
}

/*
  Starts fetchUser on each dispatched `USER_FETCH_REQUESTED` action.
  Allows concurrent fetches of user.
*/
function* mySaga() {
  yield all ([
    takeUser(),
    takeCategory()
  ])
}

/*
  Alternatively you may use takeLatest.
  Does not allow concurrent fetches of user. If "USER_FETCH_REQUESTED" gets
  dispatched while a fetch is already pending, that pending fetch is cancelled
  and only the latest one will be run.
*/
/*
function* mySaga() {
  yield takeLatest("USER_FETCH_REQUESTED", fetchUser);
}
*/
export default mySaga;
