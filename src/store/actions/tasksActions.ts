import { AddTask, ClearTasks, DeleteTask, InsertTasks } from '../../interfaces';
import { ADD_TASK, CLEAR_TASKS, DELETE_TASK, INSERT_TASKS } from '../types';

export const addTask: AddTask = (task) => {
  return {
    type: ADD_TASK,
    payload: task,
  };
};

export const deleteTask: DeleteTask = (id) => {
  return {
    type: DELETE_TASK,
    payload: id,
  };
};

export const clearTasks: ClearTasks = () => {
  return {
    type: CLEAR_TASKS,
  };
};

export const insertTasks: InsertTasks = (tasks) => {
  return {
    type: INSERT_TASKS,
    payload: tasks,
  };
};
