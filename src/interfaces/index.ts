export type ActionType = string;

export interface Action {
  type: ActionType;
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

export type UpdateTimeSpend = () => { type: ActionType, payload: number };

export type ClearCurrentTask = () => { type: ActionType };

export type InactivateTimer = () => { type: ActionType };

export type ActivateTimer = () => { type: ActionType };

export interface State {
  tasks: Tasks,
  currentTask: Task,
  activeTimer: ActiveTimer,
  activeTab: ActiveTab,
}

export type StartTask = () => {
  type: ActionType,
  payload: { id: string, timeStart: number },
};

export type FinishTask = () => {
  type: ActionType,
  payload: number,
};

export type SetActiveTab = (tab: string) => {
  type: ActionType,
  payload: string,
};

export type SetTaskName = (name: string) => {
  type: ActionType,
  payload: string,
};

export type AddTask = (task: Task) => {
  type: ActionType,
  payload: Task,
};

export type DeleteTask = (id: string) => {
  type: ActionType,
  payload: string,
};
