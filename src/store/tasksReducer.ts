import { ADD_TASK, DELETE_TASK } from './types';
import { Action, Tasks } from '../interfaces';

const initialState = [
  {
    id: '769aad45-9df7-4de6-955a-925e3952f08b',
    taskName: 'TaskName 769aad45',
    timeStart: 1609772667188,
    timeEnd: 1609772670922,
    timeSpend: 3734,
  },
];

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
