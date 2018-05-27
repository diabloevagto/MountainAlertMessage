import types from '../constants/actionTypes';
import contactType from '../constants/contactType';

const pages = (state = { page: 1, editContact: false }, { type, payload }) => {
  switch (type) {
    case types.INIT_APP_SUCCESS:
      return payload
    default:
      return state
  }
}

export default pages
