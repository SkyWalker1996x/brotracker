import {
  ADD_TASK,
  DELETE_TASK,
  SET_TASK_NAME,
  ACTIVATE_TIMER,
  INACTIVATE_TIMER,
  START_TASK,
  FINISH_TASK,
  CLEAR_CURRENT_TASK,
  UPDATE_TIME_SPEND,
  SET_ACTIVE_TAB,
  SHOW_WARNING,
  CLOSE_WARNING,
} from './types';
import { v4 as uuidv4 } from 'uuid';
import {
  ActivateTimer,
  AddTask,
  ClearCurrentTask, CloseWarning,
  DeleteTask,
  FinishTask,
  InactivateTimer,
  SetActiveTab,
  SetTaskName, ShowWarning,
  StartTask,
  UpdateTimeSpend,
} from '../interfaces';

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

export const setTaskName: SetTaskName = (name) => {
  return {
    type: SET_TASK_NAME,
    payload: name,
  };
};

export const activateTimer: ActivateTimer = () => {
  return {
    type: ACTIVATE_TIMER,
  };
};

export const inactivateTimer: InactivateTimer = () => {
  return {
    type: INACTIVATE_TIMER,
  };
};

export const startTask: StartTask = () => {
  return {
    type: START_TASK,
    payload: {
      id: uuidv4(),
      timeStart: Date.now(),
    },
  };
};

export const finishTask: FinishTask = () => {
  return {
    type: FINISH_TASK,
    payload: Date.now(),
  };
};

export const clearCurrentTask: ClearCurrentTask = () => {
  return {
    type: CLEAR_CURRENT_TASK,
  };
};

export const updateTimeSpend: UpdateTimeSpend = () => {
  return {
    type: UPDATE_TIME_SPEND,
    payload: Date.now(),
  };
};

export const setActiveTab: SetActiveTab = (tab) => {
  return {
    type: SET_ACTIVE_TAB,
    payload: tab,
  };
};

export const showWarning:ShowWarning = () => {
  return {
    type: SHOW_WARNING,
  };
};

export const closeWarning:CloseWarning = () => {
  return {
    type: CLOSE_WARNING,
  };
};
