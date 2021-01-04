import React from 'react';

import ColumnWrapper from '../../UI/wrappers/ColumnWrapper/ColumnWrapper';
import Timer from '../../components/Timer/Timer';
import TimerTable from '../../components/Table/Table';

const Main = () => {
  return (
    <ColumnWrapper>
      <h1>BroTracker task</h1>
      <Timer />
      <TimerTable />
    </ColumnWrapper>
  );
};

export default Main;
