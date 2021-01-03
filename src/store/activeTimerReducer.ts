import { INACTIVE_TIMER, ACTIVE_TIMER } from './types';

const initialState = {
  active: false,
};

export const activeTimerReducer = (state = initialState, action: any) => {
  const { type, payload } = action;

  switch (type) {
    case ACTIVE_TIMER:
      return { ...state, active: payload };
    case INACTIVE_TIMER:
      return { ...state, active: payload };
    default:
      return state;
  }
};
