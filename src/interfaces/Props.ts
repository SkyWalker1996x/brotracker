import {
  ActivateTimer,
  InactivateTimer,
  SetTaskName,
  Task,
  UpdateTimeSpend,
} from './Store';

export interface TimerProps {
  setTaskName: SetTaskName;
  updateTimeSpend: UpdateTimeSpend;
  activateTimer: ActivateTimer;
  inactivateTimer: InactivateTimer;
  currentTask: Task;
}

export interface EmptyTaskWarningProps {
  isEmptyTask: boolean;
  closeEmptyWarning: () => void;
}
