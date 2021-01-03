import React from 'react';
import TextField from '@material-ui/core/TextField';
import './mui-styles.css';

const TaskInput: React.FC = () => {
  return (
    <TextField
      id="standard-basic"
      label="Name of your task"
    />
  );
};

export default TaskInput;
