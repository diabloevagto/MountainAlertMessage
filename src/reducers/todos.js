import types from '../constants/actionTypes';

const initialState = []

const todos = (state = initialState, { type, payload }) => {
  switch (type) {
    case types.GET_TODO_SUCCESS:
      return payload.todos
    case types.ADD_TODO:
      return [
        ...state,
        payload.todos,
      ]
    default:
      return state
  }
}

export default todos
