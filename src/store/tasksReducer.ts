const initialState = [
  {
    id: 1,
    number: '1',
    task: 'lorem ipsum',
    timeStart: '11:28:14',
    timeEnd: '11:31:23',
    timeSpend: '00:03:08',
  },
  {
    id: 2,
    number: '2',
    task: 'lorem ipsum',
    timeStart: '11:28:14',
    timeEnd: '11:31:23',
    timeSpend: '00:03:08',
  },
  {
    id: 3,
    number: '3',
    task: 'lorem ipsum',
    timeStart: '11:28:14',
    timeEnd: '11:31:23',
    timeSpend: '00:03:08',
  },
  {
    id: 4,
    number: '4',
    task: 'lorem ipsum',
    timeStart: '11:28:14',
    timeEnd: '11:31:23',
    timeSpend: '00:03:08',
  },
];

export const tasksReducer = (state = initialState, action: any) => {
  const { type, payload } = action;

  switch (type) {
    case 'ADD_TASK':
      return [...state, payload];
    default:
      return state;
  }
};
