import { delay } from 'redux-saga';
import { put, call } from 'redux-saga/effects';
import types from "../constants/actionTypes";
import * as contact from "../utility/contact"

export function* getContactSaga() {
  const payload = yield call(contact.getContact)

  yield put({
    type: types.GET_CONTACT_SUCCESS,
    payload
  });
}

export function* saveContactSaga({ payload }) {
  yield call(contact.setContact, payload)

  yield put({
    type: types.SET_CONTACT_SUCCESS,
    payload
  });
}
