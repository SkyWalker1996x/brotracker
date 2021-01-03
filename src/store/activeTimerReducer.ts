import { INACTIVATE_TIMER, ACTIVATE_TIMER } from './types';

const initialState = false;

export const activeTimerReducer = (state = initialState, action: any) => {
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
