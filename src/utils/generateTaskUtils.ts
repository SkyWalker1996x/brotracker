import { v4 as uuidv4 } from 'uuid';

export const getRandomNumber = (min: number, max: number) => {
    let rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
};

export const generateRandomTasks = () => {
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
