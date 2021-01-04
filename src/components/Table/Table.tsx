import React from 'react';
import { connect } from 'react-redux';
// actions
import { addTask, deleteTask } from '../../store/actions';
//M-UI
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import { Button } from '@material-ui/core';
import { useStyles } from './styles';
import { transformTasks } from '../../utils';

const tableHead = [
  { id: 1, label: '#' },
  { id: 2, label: 'Task' },
  { id: 3, label: 'Time start' },
  { id: 4, label: 'Time end' },
  { id: 5, label: 'Time spend' },
  { id: 6, label: 'Info' },
  { id: 7, label: 'Delete' },
];

const TimerTable: React.FC = (props: any) => {
  const classes = useStyles();
  const { tasks, deleteTask } = props;

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
        <TableBody>
          {transformTasks(tasks).map((task: any) => {
            const { id } = task;

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
                  <Button variant="contained" className={classes.tableButton}>
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
          })}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

const mapStateToProps = (state: any) => {
  return state;
};

const mapDispatchToProps = {
  addTask,
  deleteTask,
};

export default connect(mapStateToProps, mapDispatchToProps)(TimerTable);
