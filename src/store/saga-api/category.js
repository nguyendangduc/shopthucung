import { call, put, takeLatest, takeEvery } from "redux-saga/effects";
import { RequestUtils } from "utils";
import * as Actions from 'store/actions/settings';

export function fetchPostsApi(reddit) {
    return RequestUtils.Get('/api/user/t3h');
}

function* category(data) {
    try {
        const categories = yield call(fetchPostsApi, data);
        yield put({ type: Actions.CATEGORY_FETCH_SUCCEEDED, payload: categories });
    } catch (e) {
        console.log(e);
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
    yield takeEvery(Actions.CATEGORY_FETCH_REQUESTED, category);
}
