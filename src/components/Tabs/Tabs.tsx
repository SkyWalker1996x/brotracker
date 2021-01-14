import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useLocation } from 'react-router-dom';
// MUI-components
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
// components
import TimerTable from '../Table/Table';
import TabPanel from './TabPanel/TabPanel';
// styles
import { useStyles } from './styles';
// utils
import { muiTabProps } from '../../utils/muiUtils';
import { extractActiveTab } from '../../utils/routingUtils';
// actions
import { setActiveTab } from '../../store/actions/tabsActions';
import TasksChart from '../TasksChart/TasksChart';
import { State } from '../../interfaces/Store';

const TimerTabs: React.FC = () => {
  const classes = useStyles();
  const activeTab = useSelector((state: State) => state.activeTab);
  const dispatch = useDispatch();
  const history = useHistory();
  const { pathname } = useLocation();

  useEffect(() => {
    dispatch(setActiveTab(extractActiveTab(pathname)));
  }, [pathname]);

  const handleSetTab = (event: any, value: any) => {
    dispatch(setActiveTab(value));
  };

  return (
    <div>
      <AppBar position="static">
        <Tabs
          className={classes.tabs}
          value={activeTab}
          onChange={handleSetTab}
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
      <TabPanel value={activeTab} index="TABLE_LOG">
        <TimerTable />
      </TabPanel>
      <TabPanel value={activeTab} index="TASKS_CHART">
        <TasksChart />
      </TabPanel>
    </div>
  );
};

export default TimerTabs;
