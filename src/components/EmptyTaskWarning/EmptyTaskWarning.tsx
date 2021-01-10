import React from 'react';
import { connect } from 'react-redux';
// actions
import { closeWarning } from '../../store/actions/emptyWarningActions';
// types
import { State } from '../../interfaces';
// MUI-components
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
// styles
import { useStyles } from './mui-styles';

const EmptyTaskWarning = (props: any) => {
  const classes = useStyles();
  const { emptyTask, closeWarning } = props;

  return (
    <Dialog open={emptyTask} onClose={closeWarning} aria-labelledby="dialog-title">
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
        <Button onClick={closeWarning} className={classes.button}>
          Close
        </Button>
      </DialogActions>
    </Dialog>
  );
};

const mapStateToProps = (state: State) => {
  return { emptyTask: state.emptyTask };
};

const mapDispatchToProps = {
  closeWarning,
};

export default connect(mapStateToProps, mapDispatchToProps)(EmptyTaskWarning);
