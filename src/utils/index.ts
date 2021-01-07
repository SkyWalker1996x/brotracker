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
}
