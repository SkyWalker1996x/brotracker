import React from 'react';
import { useSelector } from 'react-redux';
// components
import FilledTable from './FilledTable/FilledTable';
import EmptyTable from './EmptyTable/EmptyTable';
// interfaces
import { State } from '../../interfaces/Store';

const TimerTable: React.FC = () => {
  const tasks = useSelector((state: State) => state.tasks);

  return <>{tasks.length === 0 ? <EmptyTable /> : <FilledTable />}</>;
};

export default TimerTable;
