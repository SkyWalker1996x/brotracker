import React, { useEffect, useRef, useState } from 'react';
import { connect } from 'react-redux';
import { store } from '../../store';
// components
import ColumnWrapper from '../Wrappers/ColumnWrapper/ColumnWrapper';
import CircleWrapper from '../Wrappers/CircleWrapper/CircleWrapper';
import EmptyTaskWarning from './EmptyTaskWarning/EmptyTaskWarning';
// MUI-components
import TextField from '@material-ui/core/TextField';
import { Button } from '@material-ui/core';
// actions
import {
  setTaskName,
  updateTimeSpend,
} from '../../store/actions/currentTaskActions';
import {
  activateTimer,
  inactivateTimer,
} from '../../store/actions/activeTimerActions';
// utils
import { extractSpendTime } from '../../utils/timesManipulationUtils';
import { saveToLocalStorage } from '../../utils/localStorageUtils';
// interfaces
import { State } from '../../interfaces/Store';
import { TimerProps } from '../../interfaces/Props';
// styles
import './styles.css';
import { useStyles } from './mui-styles';

const Timer = ({
  setTaskName,
  updateTimeSpend,
  activateTimer,
  inactivateTimer,
  activeTimer,
  currentTask,
}: TimerProps) => {
  const classes = useStyles();
  let taskTimer: any = useRef();
  const [isEmptyTask, setEmptyTask] = useState(false);

  const openEmptyWarning = () => {
    setEmptyTask(true);
  };
  const closeEmptyWarning = () => {
    setEmptyTask(false);
  };

  const { taskName, timeSpend } = currentTask;

  useEffect(() => {
    if (activeTimer) {
      taskTimer.current = setInterval(() => {
        saveToLocalStorage(store.getState());
        updateTimeSpend();
      }, 1000);
    }

    if (!activeTimer) {
      clearInterval(taskTimer.current);
    }
  }, [activeTimer]);

  const inactivateListener =
    taskName.trim() === '' ? openEmptyWarning : inactivateTimer;

  const listener = activeTimer ? inactivateListener : activateTimer;

  return (
    <ColumnWrapper>
      <TextField
        id="standard-basic"
        label="Name of your task"
        onChange={(e) => setTaskName(e.target.value)}
        value={taskName}
      />
      <CircleWrapper>{extractSpendTime(timeSpend)}</CircleWrapper>
      <Button
        variant="contained"
        className={classes.timerButton}
        onClick={() => listener()}
      >
        {activeTimer ? 'Stop' : 'Start'}
      </Button>
      <EmptyTaskWarning
        isEmptyTask={isEmptyTask}
        closeEmptyWarning={closeEmptyWarning}
      />
    </ColumnWrapper>
  );
};

const mapStateToProps = (state: State) => {
  return {
    currentTask: state.currentTask,
    activeTimer: state.activeTimer,
  };
};
const mapDispatchToProps = {
  setTaskName,
  updateTimeSpend,
  activateTimer,
  inactivateTimer,
};

export default connect(mapStateToProps, mapDispatchToProps)(Timer);
