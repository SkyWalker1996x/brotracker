export const toDecimal = (number: number) => {
  const strNumber = number.toString();
  if (strNumber.length > 1) {
    return strNumber;
  } else {
    return `0${strNumber}`;
  }
};

export const extractTime = (dateInMS: number) => {
  const date = new Date(dateInMS);
  const hours = toDecimal(date.getHours());
  const minutes = toDecimal(date.getMinutes());
  const seconds = toDecimal(date.getSeconds());

  return `${hours}:${minutes}:${seconds}`;
};

export const extractSpendTime = (timeInMS: number) => {
  const hours = toDecimal(Math.floor(timeInMS / 3600000));
  const minutes = toDecimal(Math.floor(timeInMS / 60000) % 60);
  const seconds = toDecimal(Math.floor(timeInMS / 1000) % 60);

  return `${hours}:${minutes}:${seconds}`;
};

export const transformTasks = (tasks: any) => {
  return tasks.map((task: any, index: number) => {
    return {
      number: index + 1,
      ...task,
      timeStart: extractTime(task.timeStart),
      timeEnd: extractTime(task.timeEnd),
      timeSpend: extractSpendTime(task.timeSpend),
    };
  });
};

export const muiTabProps = (index: any) => {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
};

export const toSentenceText = (camelCase: string) => {
  const result = camelCase.replace(/([A-Z])/g, ' $1');
  const capitalLetters = result.charAt(0).toUpperCase() + result.slice(1);

  return capitalLetters;
};

export const toPageInfo = (task: any) => {
  const { taskName, timeStart, timeEnd, timeSpend } = task;

  return {
    taskName,
    timeSpend,
    timeStart,
    timeEnd,
  };
};

export const loadFromLocalStorage = () => {
  try {
    const serializedStore = localStorage.getItem('state');
    if (serializedStore === null) return undefined;
    return JSON.parse(serializedStore);
  } catch (e) {
    console.log(e);
    return undefined;
  }
};

export const saveToLocalStorage = (state: any) => {
  try {
    const serializedStore = JSON.stringify(state);
    localStorage.setItem('state', serializedStore);
  } catch (e) {
    console.log(e);
  }
};
