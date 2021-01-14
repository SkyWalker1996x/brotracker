import React from 'react';
// components
import ColumnWrapper from "../../components/Wrappers/ColumnWrapper/ColumnWrapper";
import Timer from '../../components/Timer/Timer';
import TimerTabs from '../../components/Tabs/Tabs';

const Main = () => {
  return (
    <ColumnWrapper>
      <Timer />
      <TimerTabs />
    </ColumnWrapper>
  );
};

export default Main;
