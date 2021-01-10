import { AddTask, DeleteTask, GenerateTasks } from '../../interfaces';
import { ADD_TASK, DELETE_TASK, GENERATE_TASKS } from '../types';

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

export const generateTasks: GenerateTasks = (tasks) => {
  return {
    type: GENERATE_TASKS,
    payload: tasks,
  };
};
