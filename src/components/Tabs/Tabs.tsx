import React from 'react';
import { connect } from 'react-redux';
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
import { muiTabProps } from '../../utils';
// actions
import { setActiveTab } from '../../store/actions';

const TimerTabs: React.FC = (props: any) => {
  const classes = useStyles();
  const { activeTab, setActiveTab } = props;

  const handleSetTab = (event: any, value: any) => {
    setActiveTab(value);
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
          />
          <Tab
            label="TASKS CHART"
            fullWidth={true}
            value="TASKS_CHART"
            {...muiTabProps('TASKS_CHART')}
          />
        </Tabs>
      </AppBar>
      <TabPanel value={activeTab} index="TABLE_LOG">
        <TimerTable />
      </TabPanel>
      <TabPanel value={activeTab} index="TASKS_CHART">
        TASKS CHART
      </TabPanel>
    </div>
  );
};

const mapStateToProps = (state: any) => {
  return { activeTab: state.activeTab };
};

const mapDispatchToProps = {
  setActiveTab,
};

export default connect(mapStateToProps, mapDispatchToProps)(TimerTabs);
