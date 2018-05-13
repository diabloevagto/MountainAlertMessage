import { delay } from 'redux-saga';
import { put, call } from 'redux-saga/effects';
import types from "../constants/actionTypes";
import { setPosition } from "../utility/AsyncStorage"

export function* savePositionSaga({ payload }) {
  yield call(setPosition, payload)

  yield put({
    type: types.SET_POSITION_SUCCESS,
    payload
  });
}
