import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
// actions
import { closeWarning } from '../../../store/actions/emptyWarningActions';
// types
import { State } from '../../../interfaces/Store';
// MUI-components
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
// styles
import { useStyles } from './mui-styles';

const EmptyTaskWarning = () => {
  const classes = useStyles();
  const emptyTask = useSelector((state: State) => state.emptyTask);
  const dispatch = useDispatch();

  return (
    <Dialog
      open={emptyTask}
      onClose={() => dispatch(closeWarning())}
      aria-labelledby="dialog-title"
    >
      <DialogTitle id="dialog-title" className={classes.dialogTitle}>
        Empty task name
      </DialogTitle>
      <DialogContent>
        <DialogContentText>
          You are trying close your task without name, enter the title and try
          again!
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button
          onClick={() => dispatch(closeWarning())}
          className={classes.button}
        >
          Close
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default EmptyTaskWarning;
