import React from 'react';
import './App.css';
import TimerTable from './components/Table/Table';
import Timer from './components/Timer/Timer';
import ColumnWrapper from './UI/wrappers/ColumnWrapper/ColumnWrapper';

const App: React.FC = () => {
  return (
    <ColumnWrapper>
      <h1>BroTracker task</h1>
      <Timer />
      <TimerTable />
    </ColumnWrapper>
  );
};

export default App;
