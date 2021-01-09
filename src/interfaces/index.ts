export interface Action {
  type: string;
  payload: any;
}

export interface CurrentTask {
  id: string;
  taskName: string;
  timeStart: number;
  timeEnd: number;
  timeSpend: number;
}

export type ActiveTimer = boolean;
