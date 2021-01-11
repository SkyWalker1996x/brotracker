import { State, Tasks } from './Store';

export interface TaskForTable {
    number: number;
    id: string;
    taskName: string;
    timeStart: string;
    timeEnd: string;
    timeSpend: string;
}

export type TasksForTable = Array<TaskForTable>;

export type GetRandomNumber = (min: number, max: number) => number;
export type GenerateRandomTasks = () => Tasks;

export type LoadFromLocalStorage = () => State;
export type SaveToLocalStorage = (state: State) => void;

export type MuiTabProps = (index: number | string) => ({
    id: string;
    'aria-controls': string;
})




