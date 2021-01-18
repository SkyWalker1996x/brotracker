import React from 'react';
import { useSelector } from 'react-redux';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from 'recharts';
import { State } from '../../interfaces/Store';
// components
import GenerateTaskButton from './GenerateTaskButton/GenerateTaskButton';
// utils
import { extractTimeChart } from '../../utils/taskManipulationUtils';

const TasksChart = () => {
  const tasks = useSelector((state: State) => state.tasks);
  const tasksToChart = extractTimeChart(tasks);

  return (
    <>
      <BarChart
        width={900}
        height={230}
        data={tasksToChart}
        margin={{
          top: 25,
          right: 10,
          left: 10,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis domain={[0, 60]} />
        <Tooltip labelFormatter={(name) => 'The Current Hour: ' + name} />
        <Legend />
        <Bar
          dataKey="spendMinutes"
          name="Minutes in this hour"
          fill="#3d5afe"
        />
      </BarChart>

      <GenerateTaskButton />
    </>
  );
};

export default TasksChart;
