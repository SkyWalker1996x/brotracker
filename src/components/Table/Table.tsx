import React from 'react';
import { connect } from 'react-redux';
// components
import FilledTable from './FilledTable/FilledTable';
import EmptyTable from './EmptyTable/EmptyTable';

const TimerTable: React.FC = (props: any) => {
  const { tasks } = props;

  return <>{tasks.length === 0 ? <EmptyTable /> : <FilledTable />}</>;
};

const mapStateToProps = (state: any) => {
  return { tasks: state.tasks };
};

export default connect(mapStateToProps)(TimerTable);
