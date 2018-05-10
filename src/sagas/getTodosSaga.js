import { delay } from 'redux-saga';
import { put, call } from 'redux-saga/effects';
import types from "../constants/actionTypes";

const testPost = () => new Promise((resolve) => {
  setTimeout(() => resolve(['a1', 'b1', 'c1']), 1000)
})

export function* getTodosSaga() {

  // 模擬非同步事件
  const todos = yield call(testPost)

  yield put({
    type: types.GET_TODO_SUCCESS,
    payload: {
      todos
    }
  });

}
