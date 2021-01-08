import React from 'react';
import { Typography } from '@material-ui/core';
import { useStyles } from './mui-styles';

const EmptyTable = () => {
  const classes = useStyles();

  return (
    <>
      <Typography variant="h6" className={classes.message}>
        No recent entries to show
      </Typography>
      <Typography variant="h6" className={classes.message}>
        It's been a long time since you've tracked your tasks!
      </Typography>
    </>
  );
};

export default EmptyTable;
