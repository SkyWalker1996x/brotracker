import {
  CLEAR_CURRENT_TASK,
  FINISH_TASK,
  SET_TASK_NAME,
  START_TASK,
  UPDATE_TIME_SPEND,
} from './types';
import { CurrentTask, CurrentTaskAction } from '../interfaces';

const initialState: CurrentTask = {
  id: '',
  taskName: '',
  timeStart: 0,
  timeEnd: 0,
  timeSpend: 0,
};

export const currentTaskReducer = (state = initialState, action: CurrentTaskAction) => {
  const { type, payload } = action;

  switch (type) {
    case SET_TASK_NAME:
      return { ...state, taskName: payload };
    case START_TASK:
      return { ...state, ...payload };
    case FINISH_TASK:
      return {
        ...state,
        timeEnd: payload,
        timeSpend: payload - state.timeStart,
      };
    case CLEAR_CURRENT_TASK:
      return {
        id: '',
        taskName: '',
        timeStart: 0,
        timeEnd: 0,
        timeSpend: 0,
      };
    case UPDATE_TIME_SPEND:
      return {
        ...state,
        timeSpend: payload - state.timeStart,
      };
    default:
      return state;
  }
};
