const contactType = {
  MYSELF: 'MYSELF',
  FIRST: 'FIRST',
}

export const initialState = {
  [contactType.MYSELF]: {
    name: '',
    phone: ''
  },
  [contactType.FIRST]: {
    name: '',
    phone: ''
  },
}

export default contactType
