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
  const timesChartData = [
    { name: '0', spendMinutes: 0 },
    { name: '1', spendMinutes: 0 },
    { name: '2', spendMinutes: 0 },
    { name: '3', spendMinutes: 0 },
    { name: '4', spendMinutes: 0 },
    { name: '5', spendMinutes: 0 },
    { name: '6', spendMinutes: 0 },
    { name: '7', spendMinutes: 0 },
    { name: '8', spendMinutes: 0 },
    { name: '9', spendMinutes: 0 },
    { name: '10', spendMinutes: 0 },
    { name: '11', spendMinutes: 0 },
    { name: '12', spendMinutes: 0 },
    { name: '13', spendMinutes: 0 },
    { name: '14', spendMinutes: 0 },
    { name: '15', spendMinutes: 0 },
    { name: '16', spendMinutes: 0 },
    { name: '17', spendMinutes: 0 },
    { name: '18', spendMinutes: 0 },
    { name: '19', spendMinutes: 0 },
    { name: '20', spendMinutes: 0 },
    { name: '21', spendMinutes: 0 },
    { name: '22', spendMinutes: 0 },
    { name: '23', spendMinutes: 0 },
  ];

  tasks.forEach((task) => {
    const { timeStart, timeEnd, timeSpend } = task;
    const taskHourStart = new Date(timeStart).getHours();
    const taskMinutesStart = new Date(timeStart).getMinutes();
    const taskHourEnd = new Date(timeEnd).getHours();
    const taskMinutesEnd = new Date(timeEnd).getMinutes();

    if (taskHourStart === taskHourEnd) {
      timesChartData.forEach((item) => {
        const { name, spendMinutes } = item;

        if (taskHourStart === +name) {
          timesChartData[+name] = {
            name,
            spendMinutes: spendMinutes + Math.floor(timeSpend / 1000 / 60),
          };
        }
      });
    }

    if (taskHourEnd - taskHourStart === 1) {
      timesChartData.forEach((item) => {
        const { name, spendMinutes } = item;

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
      });
    }

    if (taskHourEnd - taskHourStart === 2) {
      timesChartData.forEach((item) => {
        const { name, spendMinutes } = item;

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
      });
    }
  });

  return timesChartData;
};
