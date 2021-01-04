import {ADD_TASK, DELETE_TASK} from "./types";

const initialState = [
  {
    id: 1,
    task: 'Smt 1',
    timeStart: '11:28:14',
    timeEnd: '11:31:23',
    timeSpend: '00:03:08',
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
