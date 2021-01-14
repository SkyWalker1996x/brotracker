import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import TimerButton from './TimerButton/TimerButton';
// MUI-components
import TextField from '@material-ui/core/TextField';
// actions
import { setTaskName } from '../../store/actions/currentTaskActions';
// utils
import { extractSpendTime } from '../../utils/timesManipulationUtils';
// interfaces
import { State } from '../../interfaces/Store';
// styles
import './mui-styles.css';
import './styles.css';

const Timer = () => {
  const currentTask = useSelector((state: State) => state.currentTask);
  const dispatch = useDispatch();

  const { taskName, timeSpend } = currentTask;

  return (
    <div className="column-wrapper">
      <TextField
        id="standard-basic"
        label="Name of your task"
        onChange={(e) => dispatch(setTaskName(e.target.value))}
        value={taskName}
      />
      <div className="circle-wrapper">{extractSpendTime(timeSpend)}</div>
      <TimerButton />
    </div>
  );
};

export default Timer;
