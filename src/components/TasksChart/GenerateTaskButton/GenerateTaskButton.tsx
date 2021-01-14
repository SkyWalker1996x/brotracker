import React from 'react';
import { useDispatch } from 'react-redux';
import Button from '@material-ui/core/Button';
// actions
import { generateTasks } from '../../../store/actions/tasksActions';
// utils
import { generateRandomTasks } from '../../../utils/generateTaskUtils';
// styles
import { useStyles } from './mui-styles';
import './styles.css';

const GenerateTaskButton = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const randomTasks = generateRandomTasks();

  return (
    <div className="button-wrapper">
      <Button
        variant="outlined"
        className={classes.generateButton}
        onClick={() => {
          dispatch(generateTasks(randomTasks));
        }}
      >
        Generate
      </Button>
    </div>
  );
};

export default GenerateTaskButton;
