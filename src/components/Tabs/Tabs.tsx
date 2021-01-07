import React from 'react';
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
import { muiProps } from '../../utils';

const TimerTabs = () => {
  const classes = useStyles();
  const [value, setValue] = React.useState('TABLE_LOG');

  const handleChange = (event: any, newValue: any) => {
    setValue(newValue);
  };

  return (
    <div>
      <AppBar position="static">
        <Tabs
          className={classes.tabs}
          value={value}
          onChange={handleChange}
          variant="fullWidth"
        >
          <Tab
            label="TABLE LOG"
            fullWidth={true}
            value="TABLE_LOG"
            {...muiProps('TABLE_LOG')}
          />
          <Tab
            label="TASKS CHART"
            fullWidth={true}
            value="TASKS_CHART"
            {...muiProps('TASKS_CHART')}
          />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index="TABLE_LOG">
        <TimerTable />
      </TabPanel>
      <TabPanel value={value} index="TASKS_CHART">
        TASKS CHART
      </TabPanel>
    </div>
  );
};

export default TimerTabs;
