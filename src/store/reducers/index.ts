import { combineReducers } from 'redux';
import { tasksReducer } from './tasksReducer';
import { currentTaskReducer } from './currentTaskReducer';
import { activeTimerReducer } from './activeTimerReducer';
import { emptyTaskWarningReducer } from './emptyTaskWarningReducer';

export const rootReducer = combineReducers({
  tasks: tasksReducer,
  currentTask: currentTaskReducer,
  activeTimer: activeTimerReducer,
  emptyTask: emptyTaskWarningReducer,
});
