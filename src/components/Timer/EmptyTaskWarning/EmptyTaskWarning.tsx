import React from 'react';
// MUI-components
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
// interfaces
import { EmptyTaskWarningProps } from '../../../interfaces/Props';
// styles
import { useStyles } from './mui-styles';

const EmptyTaskWarning = ({ isOpen, onClose }: EmptyTaskWarningProps) => {
  const classes = useStyles();

  return (
    <Dialog
      open={isOpen}
      onClose={() => onClose()}
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
        <Button onClick={() => onClose()} className={classes.button}>
          Close
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default EmptyTaskWarning;
