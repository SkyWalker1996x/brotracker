import { ADD_TASK, CLEAR_TASKS, DELETE_TASK, INSERT_TASKS } from '../types';
import { Action, Tasks } from '../../interfaces';

const initialState: Tasks = [];

export const tasksReducer = (state: Tasks = initialState, action: Action) => {
  const { type, payload } = action;

  switch (type) {
    case ADD_TASK:
      return [...state, payload];
    case DELETE_TASK:
      return [...state.filter((item) => item.id !== payload)];
    case CLEAR_TASKS:
      return [];
    case INSERT_TASKS:
      return [...state, ...payload];
    default:
      return state;
  }
};
