import React from 'react';
import { connect } from 'react-redux';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from 'recharts';
import { State } from '../../interfaces';
import GenerateTaskButton from './GenerateTaskButton/GenerateTaskButton';
import GenerateTaskButtonWrapper from '../../UI/wrappers/GenerateTaskButtonWrapper/GenerateTaskButtonWrapper';

const TasksChart = (props: any) => {
  const { tasks } = props;

  const tasksToChart = tasks.map((item: any) => {
    const { taskName, timeSpend } = item;
    return {
      taskName,
      timeSpend: Math.floor(timeSpend / 1000 / 60),
    };
  });

  return (
    <>
      <BarChart
        width={900}
        height={500}
        data={tasksToChart}
        margin={{
          top: 25,
          right: 10,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3"/>
        <XAxis dataKey="taskName" />
        <YAxis domain={[0, 90]} />
        <Tooltip />
        <Legend />
        <Bar dataKey="timeSpend" fill="#3d5afe" />
      </BarChart>
      <GenerateTaskButtonWrapper>
        <GenerateTaskButton />
      </GenerateTaskButtonWrapper>
    </>
  );
};

const mapStateToProps = (state: State) => {
  return { tasks: state.tasks };
};

export default connect(mapStateToProps)(TasksChart);
