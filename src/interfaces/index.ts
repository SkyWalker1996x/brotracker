export interface Action {
  type: string;
  payload: any;
}

export interface Task {
  id: string;
  taskName: string;
  timeStart: number;
  timeEnd: number;
  timeSpend: number;
}

export type ActiveTimer = boolean;
export type ActiveTab = string;

export type Tasks = Array<Task>;
