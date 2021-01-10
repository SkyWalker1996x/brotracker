import { Action, ActiveTab } from '../../interfaces';

const initialState = 'TABLE_LOG';

export const tabsReducer = (
  state: ActiveTab = initialState,
  action: Action
) => {
  const { type, payload } = action;

  switch (type) {
    case 'SET_ACTIVE_TAB':
      return payload;
    default:
      return state;
  }
};
