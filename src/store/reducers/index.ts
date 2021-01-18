import { combineReducers } from 'redux';
import { tasksReducer } from './tasksReducer';
import { currentTaskReducer } from './currentTaskReducer';

export const rootReducer = combineReducers({
  tasks: tasksReducer,
  currentTask: currentTaskReducer,
});
