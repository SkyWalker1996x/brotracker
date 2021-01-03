import React from 'react';
import { connect } from 'react-redux';
import { setTaskName } from '../../../store/actions';
import TextField from '@material-ui/core/TextField';
import './mui-styles.css';

const TaskInput: React.FC = (props: any) => {
  console.log(props);
  const { setTaskName, taskName } = props;

  return (
    <TextField
      id="standard-basic"
      label="Name of your task"
      onChange={(e) => setTaskName(e.target.value)}
      value={taskName}
    />
  );
};

const mapStateToProps = (state: any) => {
  return { taskName: state.currentTask.taskName };
};

const mapDispatchToProps = {
  setTaskName,
};

export default connect(mapStateToProps, mapDispatchToProps)(TaskInput);
