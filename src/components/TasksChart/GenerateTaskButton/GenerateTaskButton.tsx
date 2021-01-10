import React from 'react';
import { useDispatch } from 'react-redux';
import Button from '@material-ui/core/Button';
// actions
import { generateTasks } from '../../../store/actions/tasksActions';
// styles
import { useStyles } from './mui-styles';
// utils
import { generateRandomTasks } from '../../../utils/generateTaskUtils';

const GenerateTaskButton = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const randomTasks = generateRandomTasks();

  return (
    <Button
      variant="outlined"
      className={classes.generateButton}
      onClick={() => {
        dispatch(generateTasks(randomTasks));
      }}
    >
      Generate
    </Button>
  );
};

export default GenerateTaskButton;
