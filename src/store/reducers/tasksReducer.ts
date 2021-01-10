import { ADD_TASK, DELETE_TASK, GENERATE_TASKS } from '../types';
import { Action, Tasks } from '../../interfaces';

const initialState: Tasks = [];

export const tasksReducer = (state: Tasks = initialState, action: Action) => {
  const { type, payload } = action;

  switch (type) {
    case ADD_TASK:
      return [...state, payload];
    case DELETE_TASK:
      return [...state.filter((item) => item.id !== payload)];
    case GENERATE_TASKS:
      return [...payload];
    default:
      return state;
  }
};
