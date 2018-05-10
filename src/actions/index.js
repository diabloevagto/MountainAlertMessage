import types from '../constants/actionTypes';

export const getTodos = () => ({
  type: types.GET_TODOS,
})

export const addTodo = todos => ({
  type: types.ADD_TODO,
  payload: {
    todos
  }
})
