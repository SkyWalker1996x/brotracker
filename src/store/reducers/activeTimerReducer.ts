import { INACTIVATE_TIMER, ACTIVATE_TIMER } from '../types';
import { ActiveTimer, Action } from '../../interfaces/Store';

const initialState = false;

export const activeTimerReducer = (
  state: ActiveTimer = initialState,
  action: Action
) => {
  const { type } = action;

  switch (type) {
    case ACTIVATE_TIMER:
      return true;
    case INACTIVATE_TIMER:
      return false;
    default:
      return state;
  }
};
