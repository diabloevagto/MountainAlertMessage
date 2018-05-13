import types from "../constants/actionTypes";
import { takeLatest } from 'redux-saga/effects';
import { getContactSaga, saveContactSaga } from "./ContactSaga";
import { savePositionSaga } from "./PositionSaga";

export function* watchGetTasksSaga() {
  yield takeLatest(types.GET_CONTACT, getContactSaga);
  yield takeLatest(types.SET_CONTACT, saveContactSaga);
  yield takeLatest(types.SET_POSITION, savePositionSaga);
}
