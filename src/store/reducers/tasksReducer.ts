import { ADD_TASK, DELETE_TASK } from '../types';
import { Action, Tasks } from '../../interfaces';

const initialState: Tasks = [];

export const tasksReducer = (state: Tasks = initialState, action: Action) => {
  const { type, payload } = action;

  switch (type) {
    case ADD_TASK:
      return [...state, payload];
    case DELETE_TASK:
      return [...state.filter((item) => item.id !== payload)];
    default:
      return state;
  }
};
