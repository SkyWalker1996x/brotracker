import { v4 as uuidv4 } from 'uuid';
import { GenerateRandomTasks, GetRandomNumber } from '../interfaces/Utils';

export const getRandomNumber: GetRandomNumber = (min, max) => {
  let rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
};

export const generateRandomTasks: GenerateRandomTasks = () => {
  const randomNumbers = getRandomNumber(10, 15);

  const todayInMS = Date.now();
  const todayDate = new Date(todayInMS);

  let timeStart;
  let timeEnd = new Date(
    todayDate.getFullYear(),
    todayDate.getMonth(),
    todayDate.getDate(),
    8,
    0,
    0
  ).getTime();
  let id;

  return Array.from({ length: randomNumbers }, () => {
    timeStart = timeEnd + getRandomNumber(300000, 900000);
    timeEnd = timeStart + getRandomNumber(600000, 5400000);
    id = uuidv4();

    return {
      id,
      taskName: `Task ${id.substr(0, 8)}`,
      timeStart,
      timeEnd,
      timeSpend: timeEnd - timeStart,
    };
  });
};
