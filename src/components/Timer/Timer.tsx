import React from 'react';
import { useSelector } from 'react-redux';
// components
import TaskInput from './TaskInput/TaskInput';
import TimerButton from './TimerButton/TimerButton';
// utils
import { extractSpendTime } from '../../utils/timesManipulationUtils';
// interfaces
import { State } from '../../interfaces/Store';
// styles
import './styles.css';

const Timer = () => {
  const timeSpend = useSelector((state: State) => state.currentTask.timeSpend);

  return (
    <div className="column-wrapper">
      <TaskInput />
      <div className="circle-wrapper">{extractSpendTime(timeSpend)}</div>
      <TimerButton />
    </div>
  );
};

export default Timer;
