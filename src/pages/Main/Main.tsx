import React from 'react';
// components
import ColumnWrapper from "../../components/Wrappers/ColumnWrapper/ColumnWrapper";
import Timer from '../../components/Timer/Timer';
import TimerTabs from '../../components/Tabs/Tabs';
import EmptyTaskWarning from '../../components/EmptyTaskWarning/EmptyTaskWarning';

const Main = () => {
  return (
    <ColumnWrapper>
      <Timer />
      <TimerTabs />
      <EmptyTaskWarning />
    </ColumnWrapper>
  );
};

export default Main;
