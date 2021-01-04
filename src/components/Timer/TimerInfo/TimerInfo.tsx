import React from 'react';
import { connect } from 'react-redux';
import CircleWrapper from '../../../UI/wrappers/CircleWrapper/CircleWrapper';
import { extractSpendTime } from '../../../utils';

const TimerInfo: React.FC = (props: any) => {
  const { timeSpend } = props;
  return <CircleWrapper>{extractSpendTime(timeSpend)}</CircleWrapper>;
};

const mapStateToProps = (state: any) => {
  return { timeSpend: state.currentTask.timeSpend };
};

export default connect(mapStateToProps)(TimerInfo);
