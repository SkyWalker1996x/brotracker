import { combineReducers } from 'redux';
import { tasksReducer } from './tasksReducer';
import { currentTaskReducer } from './currentTaskReducer';
import { activeTimerReducer } from './activeTimerReducer';
import { tabsReducer } from './tabsReducer';

export const rootReducer = combineReducers({
  tasks: tasksReducer,
  currentTask: currentTaskReducer,
  activeTimer: activeTimerReducer,
  activeTab: tabsReducer,
});
