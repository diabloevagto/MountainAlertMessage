import types from '../constants/actionTypes';

const initialState = {
  accuracy: 100,
  speed: 0,
  latitude: 23.4693299,
  longitude: 120.9566917,
  latitudeDelta: 0.002,
  longitudeDelta: 0.002,
}

const position = (state = initialState, { type, payload }) => {
  switch (type) {
    case types.SET_POSITION_SUCCESS:
      return { ...state, ...payload }
    default:
      return state
  }
}

export default position
