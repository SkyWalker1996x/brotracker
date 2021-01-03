import React from 'react';
// M-UI
import { Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { indigo } from '@material-ui/core/colors';
// components
import ColumnWrapper from '../../UI/wrappers/ColumnWrapper/ColumnWrapper';
import TaskInput from './TaskInput/TaskInput';
import TimerInfo from './TimerInfo/TimerInfo';

const useStyles = makeStyles({
  timerButton: {
    color: indigo['A400'],
    background: '#ffffff',
    fontWeight: 400,
  },
});

const Timer = () => {
  const classes = useStyles();

  return (
    <ColumnWrapper>
      <TaskInput />
      <TimerInfo />
      <Button variant="contained" className={classes.timerButton}>
        Start
      </Button>
    </ColumnWrapper>
  );
};

export default Timer;
