import React from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
// components
import EmptyTable from './EmptyTable/EmptyTable'
// MUI-components
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import TableContainer from '@material-ui/core/TableContainer';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import { Button } from '@material-ui/core';
// utils
import { transformTasksForTable } from '../../utils/taskManipulationUtils';
// actions
import { deleteTask } from '../../store/actions/tasksActions';
// interfaces
import { State } from '../../interfaces/Store';
// styles
import { useStyles } from './styles';


const tableHead = [
  { id: 1, label: '#' },
  { id: 2, label: 'Task' },
  { id: 3, label: 'Time start' },
  { id: 4, label: 'Time end' },
  { id: 5, label: 'Time spend' },
  { id: 6, label: 'Info' },
  { id: 7, label: 'Delete' },
];

const TimerTable: React.FC = () => {
  const classes = useStyles();
  const history = useHistory();
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
    <>
      {tasks.length === 0 ? (
        <EmptyTable />
      ) : (
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
      )}
    </>
  );
};

export default TimerTable;
