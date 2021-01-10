import {extractSpendTime, extractTime} from "./timesManipulationUtils";

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


