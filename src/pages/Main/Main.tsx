import React from 'react';
// components
import ColumnWrapper from '../../UI/wrappers/ColumnWrapper/ColumnWrapper';
import Timer from '../../components/Timer/Timer';
import TimerTabs from '../../components/Tabs/Tabs';
import EmptyTaskWarning from '../../components/EmptyTaskWarning/EmptyTaskWarning';

const Main = () => {
  return (
    <ColumnWrapper>
      <h1>BroTracker task</h1>
      <Timer />
      <TimerTabs />
      <EmptyTaskWarning />
    </ColumnWrapper>
  );
};

export default Main;
