import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { withRouter } from 'react-router-dom';
// M-UI components
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import { Button } from '@material-ui/core';
import { useStyles } from '../styles';
// actions
import { deleteTask } from '../../../store/actions/tasksActions';
// utils
import { transformTasksForTable } from '../../../utils/taskManipulationUtils';
// interfaces
import { State } from '../../../interfaces/Store';

const tableHead = [
  { id: 1, label: '#' },
  { id: 2, label: 'Task' },
  { id: 3, label: 'Time start' },
  { id: 4, label: 'Time end' },
  { id: 5, label: 'Time spend' },
  { id: 6, label: 'Info' },
  { id: 7, label: 'Delete' },
];

const FilledTable: React.FC = (props: any) => {
  const classes = useStyles();
  const { history } = props;

  const tasks = useSelector((state: State) => state.tasks);
  const dispatch = useDispatch();

  const filledTable = transformTasksForTable(tasks).map((task) => {
    const { id, number } = task;

    return (
      <TableRow className={classes.tableRow} key={id}>
        {Object.keys(task)
          .filter((item) => item !== 'id')
          .map((item, index) => {
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
            onClick={() => dispatch(deleteTask(id))}
          >
            Delete
          </Button>
        </TableCell>
      </TableRow>
    );
  });

  return (
    <TableContainer className={classes.table}>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            {tableHead.map((item) => {
              const { id, label } = item;

              return (
                <TableCell
                  align="center"
                  key={id}
                  className={classes.tableHeadCell}
                >
                  {label}
                </TableCell>
              );
            })}
          </TableRow>
        </TableHead>
        <TableBody>{filledTable}</TableBody>
      </Table>
    </TableContainer>
  );
};

export default withRouter(FilledTable);
