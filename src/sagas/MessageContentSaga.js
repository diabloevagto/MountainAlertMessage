import { delay } from 'redux-saga';
import { put, call } from 'redux-saga/effects';
import types from "../constants/actionTypes";
import { getMessageContent, setMessageContent, updateMessageContent, deleteMessageContent } from "../utility/AsyncStorage"

export function* getMessageContentSaga() {
  const payload = yield call(getMessageContent)

  yield put({
    type: types.GET_MESSAGE_CONTENT_SUCCESS,
    payload
  });
}

export function* setMessageContentSaga({ payload }) {
  const newPayload = yield call(setMessageContent, payload)

  yield put({
    type: types.SET_MESSAGE_CONTENT_SUCCESS,
    payload: newPayload
  });
}

export function* updateMessageContentSaga({ payload }) {
  const newPayload = yield call(updateMessageContent, payload)

  yield put({
    type: types.UPDATE_MESSAGE_CONTENT_SUCCESS,
    payload: newPayload
  });
}

export function* deleteMessageContentSaga({ payload }) {
  const newPayload = yield call(deleteMessageContent, payload)

  yield put({
    type: types.DELETE_MESSAGE_CONTENT_SUCCESS,
    payload: newPayload
  });
}
