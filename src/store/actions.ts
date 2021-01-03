import {ADD_TASK, DELETE_TASK, SET_TASK_NAME, ACTIVE_TIMER, INACTIVE_TIMER} from './types';

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

export const activeTimer = (payload: any) => {
  return {
    type: ACTIVE_TIMER,
    payload,
  };
};

export const inactiveTimer = (payload: any) => {
  return {
    type: INACTIVE_TIMER,
    payload,
  };
};
