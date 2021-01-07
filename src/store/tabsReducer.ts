const initialState = 'TABLE_LOG';

export const tabsReducer = (state = initialState, action: any) => {
  const { type, payload } = action;

  switch (type) {
    case 'SET_ACTIVE_TAB':
      return payload;
    default:
      return state;
  }
};
