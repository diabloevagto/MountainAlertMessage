import types from '../constants/actionTypes';

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
