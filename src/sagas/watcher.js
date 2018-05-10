import types from "../constants/actionTypes";
import { takeLatest } from 'redux-saga/effects';
import { getTodosSaga } from "./getTodosSaga";

export function* watchGetTasksSaga() {
  yield takeLatest(types.GET_TODOS, getTodosSaga);
}
