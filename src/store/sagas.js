import { call, put, takeLatest, all } from "redux-saga/effects";
import {fetchCategory} from './saga-api/category';
import {RequestUtils} from "utils";

export function fetchPostsApi(reddit) {
  return RequestUtils.Get('/user');
}

// worker Saga: will be fired on USER_FETCH_REQUESTED actions
function* fetchUser(data) {
  try {
    console.log("data", data);
    const user = yield call(fetchPostsApi, "hanoi");
    yield put({ type: "USER_FETCH_SUCCEEDED", payload: user });
  } catch (e) {
    yield put({ type: "USER_FETCH_FAILED", message: e.message });
  }
}

function* actionFetchUser() {
  yield takeLatest("USER_FETCH_REQUESTED", fetchUser);
}
/*
  Ý tưởng của Saga.
  - Quản lý effect dựa vào các hellper: Fork, Call, Take....
  - Saga trả về logic ở dạng đối tượng hay còn gọi là effect. Saga sử dụng các method hellper để trả về các effect.
    sau đó gửi cho saga middelware để xử lý các effect.

  Các khái niệm chính.
  function* là khái niệm Generator function trong es6.
  Fork(): sử dụng cơ chế non - blocking call trên function (Có thế kích hoạt nhiều bộ theo dõi một lúc
    hoặc dispatch nhiều action cùng lúc),
  Call(): Gọi function. Nếu nó return về một promise, tạm dừng saga cho đến khi promise được giải quyết
  Take(): tạm dừng cho đến khi nhận được action
  Put(): Dùng để dispatch một action
  takeEvery(): Theo dõi một action nào đó thay đổi thì gọi một saga nào đó
  takeLastest(): Thay vì sử dụng takeEvery chúng ta có thể sử dụng takeLatest.
  takeLatest không cho phép gọi nhiều lần cuẩ một action nào đó.
  VD: khi dispatch một action "USER_FETCH_REQUESTED" nhiều lần, các action sẽ nằm chờ để được xử lý,
  khi đó các action chờ xử lý sẽ bị hủy hết và chỉ action cuối cùng được chạy.
  yield(): Có nghĩa là chạy tuần tự khi nào trả ra kết quả mới thực thi tiếp
  Select(): Chạy một selector function để lấy data từ state
  all(): Cho phép combi nhiều saga
*/
export default function* rootSaga() {
  yield all([
    actionFetchUser(),
    fetchCategory()
  ]);
}
