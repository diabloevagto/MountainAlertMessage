import { delay } from 'redux-saga';
import { put, call } from 'redux-saga/effects';
import types from "../constants/actionTypes";
import { getContact, setContact } from "../utility/AsyncStorage"

export function* getContactSaga() {
  const payload = yield call(getContact)

  yield put({
    type: types.GET_CONTACT_SUCCESS,
    payload
  });
}

export function* saveContactSaga({ payload }) {
  yield call(setContact, payload)

  yield put({
    type: types.SET_CONTACT_SUCCESS,
    payload
  });
}
