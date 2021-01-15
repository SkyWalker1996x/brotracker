import React, { useEffect } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
// MUI-components
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
// components
import TimerTable from '../Table/Table';
import TabPanel from './TabPanel/TabPanel';
import TasksChart from '../TasksChart/TasksChart';
// styles
import { useStyles } from './styles';
// utils
import { muiTabProps } from '../../utils/muiUtils';
import { extractActiveTab } from '../../utils/routingUtils';

const TimerTabs: React.FC = () => {
  const classes = useStyles();
  const history = useHistory();
  const { pathname } = useLocation();

  useEffect(() => {

  }, [pathname]);

  return (
    <div>
      <AppBar position="static">
        <Tabs
          className={classes.tabs}
          value={extractActiveTab(pathname)}
          variant="fullWidth"
        >
          <Tab
            label="TABLE LOG"
            fullWidth={true}
            value="TABLE_LOG"
            {...muiTabProps('TABLE_LOG')}
            onClick={() => {
              history.push('/');
            }}
          />
          <Tab
            label="TASKS CHART"
            fullWidth={true}
            value="TASKS_CHART"
            {...muiTabProps('TASKS_CHART')}
            onClick={() => {
              history.push('/tasks_chart');
            }}
          />
        </Tabs>
      </AppBar>
      <TabPanel value={extractActiveTab(pathname)} index="TABLE_LOG">
        <TimerTable />
      </TabPanel>
      <TabPanel value={extractActiveTab(pathname)} index="TASKS_CHART">
        <TasksChart />
      </TabPanel>
    </div>
  );
};

export default TimerTabs;
