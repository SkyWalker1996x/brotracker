import React from 'react';
import { connect } from 'react-redux';
import { Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { indigo } from '@material-ui/core/colors';
import {
  activateTimer,
  inactivateTimer,
  addTask,
  startTask,
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
    currentTask,
    activeTimer,
    activateTimer,
    inactivateTimer,
    addTask,
    startTask,
  } = props;

  const dateNow = Date.now();

  console.log(new Date(dateNow).getMinutes());

  const listener = activeTimer
    ? () => {
        inactivateTimer();
        addTask(currentTask);
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
  console.log(state);
  return { activeTimer: state.activeTimer, currentTask: state.currentTask };
};

const mapDispatchToProps = {
  activateTimer,
  inactivateTimer,
  addTask,
  startTask,
};

export default connect(mapStateToProps, mapDispatchToProps)(TimerButton);
