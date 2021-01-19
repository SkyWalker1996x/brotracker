import React, { useEffect, useRef, useState } from 'react';
import { connect } from 'react-redux';
// components
import ColumnWrapper from '../Wrappers/ColumnWrapper/ColumnWrapper';
import CircleWrapper from '../Wrappers/CircleWrapper/CircleWrapper';
import EmptyTaskWarning from './EmptyTaskWarning/EmptyTaskWarning';
// MUI-components
import TextField from '@material-ui/core/TextField';
import { Button } from '@material-ui/core';
// actions
import {
  setTaskName,
  updateTimeSpend,
} from '../../store/actions/currentTaskActions';
import {
  activateTimer,
  inactivateTimer,
} from '../../store/actions/activeTimerActions';
// utils
import { extractSpendTime } from '../../utils/timesManipulationUtils';
// interfaces
import { State } from '../../interfaces/Store';
import { TimerProps } from '../../interfaces/Props';
// styles
import './styles.css';
import { useStyles } from './mui-styles';

const Timer = ({
  setTaskName,
  updateTimeSpend,
  activateTimer,
  inactivateTimer,
  currentTask,
}: TimerProps) => {
  const classes = useStyles();
  let taskTimer: any = useRef();
  const [isOpenModal, setIsOpenModal] = useState(false);

  const onOpenModal = () => {
    setIsOpenModal(true);
  };
  const onCloseModal = () => {
    setIsOpenModal(false);
  };

  const { taskName, timeSpend, timeStart: activeTimer } = currentTask;

  useEffect(() => {
    if (activeTimer !== 0) {
      taskTimer.current = setInterval(() => {
        updateTimeSpend();
      }, 1000);
    }

    if (activeTimer === 0) {
      clearInterval(taskTimer.current);
    }

    return () => clearInterval(taskTimer.current);
  }, [activeTimer]);

  const inactivateListener =
    taskName.trim() === '' ? onOpenModal : inactivateTimer;

  const listener = activeTimer !== 0 ? inactivateListener : activateTimer;

  return (
    <ColumnWrapper>
      <TextField
        id="standard-basic"
        label="Name of your task"
        onChange={(e) => setTaskName(e.target.value)}
        value={taskName}
      />
      <CircleWrapper>{extractSpendTime(timeSpend)}</CircleWrapper>
      <Button
        variant="contained"
        className={classes.timerButton}
        onClick={() => listener()}
      >
        {activeTimer ? 'Stop' : 'Start'}
      </Button>
      <EmptyTaskWarning isOpen={isOpenModal} onClose={onCloseModal} />
    </ColumnWrapper>
  );
};

const mapStateToProps = (state: State) => {
  return {
    currentTask: state.currentTask,
  };
};
const mapDispatchToProps = {
  setTaskName,
  updateTimeSpend,
  activateTimer,
  inactivateTimer,
};

export default connect(mapStateToProps, mapDispatchToProps)(Timer);
