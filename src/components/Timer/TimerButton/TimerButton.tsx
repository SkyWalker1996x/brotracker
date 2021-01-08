import React from 'react';
import { connect } from 'react-redux';
// MUI-components
import { Button } from '@material-ui/core';
// actions
import { activateTimer, inactivateTimer } from '../../../store/actions';
// styles
import { useStyles } from './mui-styles';

const TimerButton: React.FC = (props: any) => {
  const classes = useStyles();
  const { activeTimer, activateTimer, inactivateTimer } = props;

  const listener = activeTimer
    ? () => {
        inactivateTimer();
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

const mapStateToProps = (state: any) => {
  return { activeTimer: state.activeTimer };
};

const mapDispatchToProps = {
  activateTimer,
  inactivateTimer,
};

export default connect(mapStateToProps, mapDispatchToProps)(TimerButton);
