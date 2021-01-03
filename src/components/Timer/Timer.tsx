import React from 'react';
// components
import ColumnWrapper from '../../UI/wrappers/ColumnWrapper/ColumnWrapper';
import TaskInput from './TaskInput/TaskInput';
import TimerInfo from './TimerInfo/TimerInfo';
import TimerButton from './TimerButton/TimerButton';

const Timer = () => {
  return (
    <ColumnWrapper>
      <TaskInput />
      <TimerInfo />
      <TimerButton />
    </ColumnWrapper>
  );
};

export default Timer;
