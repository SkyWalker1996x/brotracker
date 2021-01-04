import {ADD_TASK, DELETE_TASK} from "./types";

const initialState = [
  {
    id: '769aad45-9df7-4de6-955a-925e3952f08b',
    task: 'TaskName 769aad45',
    timeStart: 1609772667188,
    timeEnd: 1609772670922,
    timeSpend: 3734,
  }
];

export const tasksReducer = (state = initialState, action: any) => {
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
