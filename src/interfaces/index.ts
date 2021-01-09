export interface CurrentTask {
  id: string;
  taskName: string;
  timeStart: number;
  timeEnd: number;
  timeSpend: number;
}

export interface CurrentTaskAction {
  type: string;
  payload: any;
}
