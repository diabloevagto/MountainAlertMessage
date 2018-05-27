import { delay } from 'redux-saga';
import { put, call, all, select } from 'redux-saga/effects';

import types from "../constants/actionTypes";
import { getContactSaga } from './ContactSaga';
import { getMessageContentSaga } from './MessageContentSaga';

import { getContact, getMessageContent } from "../utility/AsyncStorage"



export function* initAppSaga() {
  yield all([
    call(getContactSaga),
    call(getMessageContentSaga),
  ])
  const { contact, messageContent } = yield select(state => state)

  // 聯絡人未設定完成
  const editContact = Object
    .values(contact)
    .some(el => el.name.length === 0 || el.phone.length === 0)

  // 附註未設定
  const page = (editContact === false && messageContent.length !== 0) ? 1 : 0

  yield put({
    type: types.INIT_APP_SUCCESS,
    payload: { page, editContact }
  });
}
