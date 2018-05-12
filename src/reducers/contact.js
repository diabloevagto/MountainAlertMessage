import types from '../constants/actionTypes';
import contactType from '../constants/contactType';

const initialState = {
  [contactType.MYSELF]: {
    name: '',
    phone: ''
  },
  [contactType.FIRST]: {
    name: '',
    phone: ''
  },
}

const contact = (state = initialState, { type, payload }) => {
  switch (type) {
    case types.GET_CONTACT_SUCCESS:
      return payload || initialState
    case types.SET_CONTACT_SUCCESS:
      return payload
    default:
      return state
  }
}

export default contact
