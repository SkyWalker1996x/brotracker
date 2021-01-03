import { ADD_TASK, DELETE_TASK } from './types';

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
