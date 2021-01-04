import { v4 as uuidv4 } from 'uuid';
const initialState = {
  id: uuidv4(),
  taskName: '',
  timeStart: 0,
  timeEnd: 0,
  timeSpend: 0,
};

export const currentTaskReducer = (state = initialState, action: any) => {
  const { type, payload } = action;

  switch (type) {
    case 'SET_TASK_NAME':
      return { ...state, taskName: payload };
    case 'START_TASK':
      return { ...state, ...payload };
    case 'FINISH_TASK':
      return {
        ...state,
        timeEnd: payload,
        timeSpend: payload - state.timeStart,
      };
    default:
      return state;
  }
};
