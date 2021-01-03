import React from 'react';
import { connect } from 'react-redux';
import { Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { indigo } from '@material-ui/core/colors';
import { activateTimer, inactivateTimer } from '../../../store/actions';

const useStyles = makeStyles({
  timerButton: {
    color: indigo['A400'],
    background: '#ffffff',
    fontWeight: 400,
  },
});

const TimerButton: React.FC = (props: any) => {
  const classes = useStyles();
  console.log(props);
  const { activeTimer, activateTimer, inactivateTimer } = props;

  return (
    <Button
      variant="contained"
      className={classes.timerButton}
      onClick={() => {
        activeTimer ? inactivateTimer() : activateTimer();
      }}
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
