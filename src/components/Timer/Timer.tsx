import React, { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { store } from '../../store';
// components
import ColumnWrapper from '../Wrappers/ColumnWrapper/ColumnWrapper';
import CircleWrapper from '../Wrappers/CircleWrapper/CircleWrapper';
// MUI-components
import TextField from '@material-ui/core/TextField';
import { Button } from '@material-ui/core';
// actions
import {
  setTaskName,
  updateTimeSpend,
} from '../../store/actions/currentTaskActions';
import { showWarning } from '../../store/actions/emptyWarningActions';
import {
  activateTimer,
  inactivateTimer,
} from '../../store/actions/activeTimerActions';
// utils
import { extractSpendTime } from '../../utils/timesManipulationUtils';
import { saveToLocalStorage } from '../../utils/localStorageUtils';
// interfaces
import { State } from '../../interfaces/Store';
// styles
import './styles.css';
import { useStyles } from './mui-styles';
import EmptyTaskWarning from '../EmptyTaskWarning/EmptyTaskWarning';

const Timer = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const currentTask = useSelector((state: State) => state.currentTask);
  const activeTimer = useSelector((state: State) => state.activeTimer);
  let taskTimer: any = useRef();

  const { taskName, timeSpend } = currentTask;

  useEffect(() => {
    if (activeTimer) {
      taskTimer.current = setInterval(() => {
        saveToLocalStorage(store.getState());
        dispatch(updateTimeSpend());
      }, 1000);
    }

    if (!activeTimer) {
      clearInterval(taskTimer.current);
    }
  }, [activeTimer]);

  const inactivateListener =
    taskName.trim() === '' ? showWarning : inactivateTimer;

  const listener = activeTimer ? inactivateListener : activateTimer;

  return (
    <ColumnWrapper>
      <TextField
        id="standard-basic"
        label="Name of your task"
        onChange={(e) => dispatch(setTaskName(e.target.value))}
        value={taskName}
      />
      <CircleWrapper>{extractSpendTime(timeSpend)}</CircleWrapper>
      <Button
        variant="contained"
        className={classes.timerButton}
        onClick={() => dispatch(listener())}
      >
        {activeTimer ? 'Stop' : 'Start'}
      </Button>
      <EmptyTaskWarning />
    </ColumnWrapper>
  );
};

export default Timer;
