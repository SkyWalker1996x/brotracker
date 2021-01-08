import React from 'react';
import { transformTasks } from '../../../utils';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import { Button } from '@material-ui/core';
import { useStyles } from '../styles';
import { withRouter } from 'react-router-dom';
import TableBody from '@material-ui/core/TableBody';
import { addTask, deleteTask } from '../../../store/actions';
import { connect } from 'react-redux';

const FilledTable = (props: any) => {
  const classes = useStyles();
  const { tasks, deleteTask, history } = props;

  const filledTable = transformTasks(tasks).map((task: any) => {
    const { id, number } = task;

    return (
      <TableRow className={classes.tableRow} key={id}>
        {Object.keys(task)
          .filter((item) => item !== 'id')
          .map((item: string, index) => {
            return (
              <TableCell
                key={id + index}
                align="center"
                className={classes.tableCell}
              >
                {
                  // @ts-ignore
                  task[item]
                }
              </TableCell>
            );
          })}

        <TableCell align="center" className={classes.tableCell}>
          <Button
            variant="contained"
            className={classes.tableButton}
            onClick={() => {
              history.push(`/task/${number}`);
            }}
          >
            Info
          </Button>
        </TableCell>
        <TableCell align="center">
          <Button
            variant="contained"
            className={classes.tableButton}
            onClick={() => deleteTask(id)}
          >
            Delete
          </Button>
        </TableCell>
      </TableRow>
    );
  });

  return <TableBody>{filledTable}</TableBody>;
};

const mapStateToProps = (state: any) => {
  return { tasks: state.tasks };
};

const mapDispatchToProps = {
  addTask,
  deleteTask,
};

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(FilledTable)
);
