import React from 'react';
import { connect } from 'react-redux';
// components
import CircleWrapper from '../../../UI/wrappers/CircleWrapper/CircleWrapper';
// utils
import { extractSpendTime } from '../../../utils/timesManipulationUtils';

const TimerInfo: React.FC = (props: any) => {
  const { timeSpend } = props;
  return <CircleWrapper>{extractSpendTime(timeSpend)}</CircleWrapper>;
};

const mapStateToProps = (state: any) => {
  return { timeSpend: state.currentTask.timeSpend };
};

export default connect(mapStateToProps)(TimerInfo);
