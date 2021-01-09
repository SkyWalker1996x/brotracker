import React from 'react';
// MUI-components
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
// styles
import { useStyles } from './mui-styles';

const ModalWarning = () => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(true);

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Dialog open={open} onClose={handleClose} aria-labelledby="dialog-title">
      <DialogTitle
        id="dialog-title"
        color="primary"
        className={classes.dialogTitle}
      >
        Empty task name
      </DialogTitle>
      <DialogContent>
        <DialogContentText>
          You are trying close your task without name, enter the title and try
          again!
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} className={classes.button}>
          Close
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default ModalWarning;
