import types from '../constants/actionTypes';

const initialState = []

const messageContent = (state = initialState, { type, payload }) => {
  switch (type) {
    case types.GET_MESSAGE_CONTENT_SUCCESS:
      return payload || initialState
    case types.SET_MESSAGE_CONTENT_SUCCESS:
    case types.UPDATE_MESSAGE_CONTENT_SUCCESS:
    case types.DELETE_MESSAGE_CONTENT_SUCCESS:
      return payload
    default:
      return state
  }
}

export default messageContent
