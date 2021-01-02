import React from 'react';
import TextField from '@material-ui/core/TextField';
import TimerInfo from './TimerInfo/TimerInfo';
import { Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { indigo} from '@material-ui/core/colors';
import ColumnWrapper from "../../UI/wrappers/ColumnWrapper/ColumnWrapper";

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
      <TextField id="standard-basic" label="Name of your task" />
      <TimerInfo />
      <Button variant="contained" className={classes.timerButton}>
        Start
      </Button>
    </ColumnWrapper>
  );
};

export default Timer;
