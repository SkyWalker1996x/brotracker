const initialState = {
  id: 'dadas',
  taskName: '',
  timeStart: null,
  timeEnd: null,
  timeSpend: null,
};

export const currentTaskReducer = (state = initialState, action: any) => {
  const { type, payload } = action;

  switch (type) {
    case 'SET_TASK_NAME':
      return { ...state, taskName: payload };
    case 'START_TASK':
      return { ...state, ...payload };
    /*case 'SET_TIME_END':
      return { ...state, timeEnd: payload };*/
    default:
      return state;
  }
};
