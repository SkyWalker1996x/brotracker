import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
// MUI-components
import TextField from '@material-ui/core/TextField';
import { Button } from '@material-ui/core';
// actions
import { setTaskName } from '../../store/actions/currentTaskActions';
import { showWarning } from '../../store/actions/emptyWarningActions';
import {
  activateTimer,
  inactivateTimer,
} from '../../store/actions/activeTimerActions';
// utils
import { extractSpendTime } from '../../utils/timesManipulationUtils';
// interfaces
import { State } from '../../interfaces/Store';
// styles
import './mui-styles.css';
import './styles.css';
import { useStyles } from './mui-styles';

const Timer = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const currentTask = useSelector((state: State) => state.currentTask);
  const activeTimer = useSelector((state: State) => state.activeTimer);

  const { taskName, timeSpend } = currentTask;

  const inactivateListener =
    taskName.trim() === '' ? showWarning : inactivateTimer;

  const listener = activeTimer ? inactivateListener : activateTimer;

  return (
    <div className="column-wrapper">
      <TextField
        id="standard-basic"
        label="Name of your task"
        onChange={(e) => dispatch(setTaskName(e.target.value))}
        value={taskName}
      />
      <div className="circle-wrapper">{extractSpendTime(timeSpend)}</div>
      <Button
        variant="contained"
        className={classes.timerButton}
        onClick={() => dispatch(listener())}
      >
        {activeTimer ? 'Stop' : 'Start'}
      </Button>
    </div>
  );
};

export default Timer;
