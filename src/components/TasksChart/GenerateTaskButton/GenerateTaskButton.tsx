import React from 'react';
import Button from '@material-ui/core/Button';
import { useStyles } from './mui-styles';

const GenerateTaskButton = () => {
  const classes = useStyles();

  return (
    <Button variant="outlined" className={classes.generateButton}>
      Generate
    </Button>
  );
};

export default GenerateTaskButton;
