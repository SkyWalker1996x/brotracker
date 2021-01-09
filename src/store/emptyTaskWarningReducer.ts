import {Action, EmptyTask} from '../interfaces';
import { CLOSE_WARNING, SHOW_WARNING } from './types';

const initialState = false;

export const emptyTaskWarningReducer = (state:EmptyTask = initialState, action: Action) => {
  const { type } = action;

  switch (type) {
    case SHOW_WARNING:
      return true;
    case CLOSE_WARNING:
      return false;
    default:
      return state;
  }
};
