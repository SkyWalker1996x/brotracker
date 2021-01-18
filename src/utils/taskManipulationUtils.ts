import { extractSpendTime, extractTime } from './timesManipulationUtils';
import { Tasks } from '../interfaces/Store';
import { TaskForTable } from '../interfaces/Utils';

export const transformLongTask = (task: string) => {
  return task.length > 13 ? `${task.substr(0, 12)}...` : task;
};

export const transformTasksForTable = (tasks: Tasks) => {
  return tasks.map((task, index: number) => {
    return {
      number: index + 1,
      ...task,
      taskName: transformLongTask(task.taskName),
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

export const toPageInfo = (task: TaskForTable) => {
  const { taskName, timeStart, timeEnd, timeSpend } = task;

  return {
    taskName,
    timeSpend,
    timeStart,
    timeEnd,
  };
};

export const extractTimeChart = (tasks: Tasks) => {
  const timesChartData = Array.from({ length: 24 }, (value, key) => {
    return {
      name: key.toString(),
      spendMinutes: 0,
    };
  });

  tasks.forEach((task) => {
    const { timeStart, timeEnd, timeSpend } = task;
    const taskHourStart = new Date(timeStart).getHours();
    const taskMinutesStart = new Date(timeStart).getMinutes();
    const taskHourEnd = new Date(timeEnd).getHours();
    const taskMinutesEnd = new Date(timeEnd).getMinutes();
    const differenceHours = taskHourEnd - taskHourStart;

    timesChartData.forEach((item) => {
      const { name, spendMinutes } = item;

      switch (differenceHours) {
        case 0:
          if (taskHourStart === +name) {
            timesChartData[+name] = {
              name,
              spendMinutes: spendMinutes + Math.floor(timeSpend / 1000 / 60),
            };
          }
          return;

        case 1:
          if (taskHourStart === +name) {
            timesChartData[+name] = {
              name,
              spendMinutes: spendMinutes + (60 - taskMinutesStart),
            };
          }

          if (taskHourEnd === +name) {
            timesChartData[+name] = {
              name,
              spendMinutes: spendMinutes + taskMinutesEnd,
            };
          }
          return;

        case 2:
          if (taskHourStart === +name) {
            timesChartData[+name] = {
              name,
              spendMinutes: spendMinutes + (60 - taskMinutesStart),
            };
          }

          if (taskHourStart + 1 === +name) {
            timesChartData[+name] = {
              name,
              spendMinutes: 60,
            };
          }

          if (taskHourEnd === +name) {
            timesChartData[+name] = {
              name,
              spendMinutes: spendMinutes + taskMinutesEnd,
            };
          }
          return;
      }
    });
  });

  return timesChartData;
};
