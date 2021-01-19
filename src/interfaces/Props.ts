import {
  ActivateTimer,
  InactivateTimer,
  SetTaskName,
  Task,
  UpdateTimeSpend,
} from './Store';
import React from 'react';

export interface TimerProps {
  setTaskName: SetTaskName;
  updateTimeSpend: UpdateTimeSpend;
  activateTimer: ActivateTimer;
  inactivateTimer: InactivateTimer;
  currentTask: Task;
}

export interface EmptyTaskWarningProps {
  isOpen: boolean;
  onClose: () => void;
}

export interface TabPanelProps {
  value: string;
  index: string;
  children: React.ReactNode;
}
