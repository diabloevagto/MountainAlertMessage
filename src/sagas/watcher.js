import types from "../constants/actionTypes";
import { takeLatest } from 'redux-saga/effects';

import { initAppSaga } from "./initSaga";
import { getContactSaga, saveContactSaga } from "./ContactSaga";
import { savePositionSaga } from "./PositionSaga";
import { getMessageContentSaga, setMessageContentSaga, updateMessageContentSaga, deleteMessageContentSaga } from './MessageContentSaga'

export function* watchGetTasksSaga() {
  yield takeLatest(types.INIT_APP, initAppSaga);
  yield takeLatest(types.GET_CONTACT, getContactSaga);
  yield takeLatest(types.SET_CONTACT, saveContactSaga);
  yield takeLatest(types.SET_POSITION, savePositionSaga);
  yield takeLatest(types.GET_MESSAGE_CONTENT, getMessageContentSaga);
  yield takeLatest(types.SET_MESSAGE_CONTENT, setMessageContentSaga);
  yield takeLatest(types.UPDATE_MESSAGE_CONTENT, updateMessageContentSaga);
  yield takeLatest(types.DELETE_MESSAGE_CONTENT, deleteMessageContentSaga);
}
