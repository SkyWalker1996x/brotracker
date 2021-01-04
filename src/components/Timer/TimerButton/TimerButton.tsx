import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { indigo } from '@material-ui/core/colors';
import {
  activateTimer,
  inactivateTimer,
  addTask,
  startTask,
  finishTask,
  clearCurrentTask,
} from '../../../store/actions';

const useStyles = makeStyles({
  timerButton: {
    color: indigo['A400'],
    background: '#ffffff',
    fontWeight: 400,
  },
});

const TimerButton: React.FC = (props: any) => {
  const classes = useStyles();
  const {
    activeTimer,
    activateTimer,
    inactivateTimer,
    addTask,
    startTask,
    finishTask,
    clearCurrentTask,
    currentTask,
  } = props;

  useEffect(() => {
    if (!activeTimer && currentTask.timeEnd !== 0) {
      addTask(currentTask);
      clearCurrentTask();
    }
  }, [activeTimer]);

  const listener = activeTimer
    ? () => {
        finishTask();
        inactivateTimer();
      }
    : () => {
        activateTimer();
        startTask();
      };

  return (
    <Button
      variant="contained"
      className={classes.timerButton}
      onClick={listener}
    >
      {activeTimer ? 'Stop' : 'Start'}
    </Button>
  );
};

const mapStateToProps = (state: any) => {
  return { activeTimer: state.activeTimer, currentTask: state.currentTask };
};

const mapDispatchToProps = {
  activateTimer,
  inactivateTimer,
  addTask,
  startTask,
  finishTask,
  clearCurrentTask,
};

export default connect(mapStateToProps, mapDispatchToProps)(TimerButton);
