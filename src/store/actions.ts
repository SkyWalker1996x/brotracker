import {
  ADD_TASK,
  DELETE_TASK,
  SET_TASK_NAME,
  ACTIVATE_TIMER,
  INACTIVATE_TIMER,
} from './types';

export const addTask = (task: any) => {
  return {
    type: ADD_TASK,
    payload: task,
  };
};

export const deleteTask = (id: any) => {
  return {
    type: DELETE_TASK,
    payload: id,
  };
};

export const setTaskName = (payload: any) => {
  return {
    type: SET_TASK_NAME,
    payload,
  };
};

export const activateTimer = () => {
  return {
    type: ACTIVATE_TIMER,
  };
};

export const inactivateTimer = () => {
  return {
    type: INACTIVATE_TIMER,
  };
};
