import React from 'react';
import { connect } from 'react-redux';
// MUI-components
import { Button } from '@material-ui/core';
// actions
import {
  activateTimer,
  inactivateTimer,
  showWarning,
} from '../../../store/actions';
// styles
import { useStyles } from './mui-styles';
import { State } from '../../../interfaces';

const TimerButton: React.FC = (props: any) => {
  const classes = useStyles();
  const {
    activeTimer,
    taskName,
    activateTimer,
    inactivateTimer,
    showWarning,
  } = props;

  const listener = activeTimer
    ? () => {
        taskName.trim() === '' ? showWarning() : inactivateTimer();
      }
    : () => {
        activateTimer();
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

const mapStateToProps = (state: State) => {
  return {
    activeTimer: state.activeTimer,
    taskName: state.currentTask.taskName,
  };
};

const mapDispatchToProps = {
  activateTimer,
  inactivateTimer,
  showWarning,
};

export default connect(mapStateToProps, mapDispatchToProps)(TimerButton);
