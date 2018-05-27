import types from '../constants/actionTypes';

export const initApp = () => ({
  type: types.INIT_APP,
})

export const getContact = () => ({
  type: types.GET_CONTACT,
})

export const setContact = payload => ({
  type: types.SET_CONTACT,
  payload
})

export const setPosition = payload => ({
  type: types.SET_POSITION,
  payload
})

export const getMessageContent = () => ({
  type: types.GET_MESSAGE_CONTENT,
})

export const setMessageContent = payload => ({
  type: types.SET_MESSAGE_CONTENT,
  payload
})

export const updateMessageContent = payload => ({
  type: types.UPDATE_MESSAGE_CONTENT,
  payload
})

export const deleteMessageContent = payload => ({
  type: types.DELETE_MESSAGE_CONTENT,
  payload
})
