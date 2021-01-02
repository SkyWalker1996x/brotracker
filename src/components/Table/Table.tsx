import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import { Button } from '@material-ui/core';
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

const rows = [
  {
    id: 1,
    number: '1',
    task: 'lorem ipsum',
    timeStart: '11:28:14',
    timeEnd: '11:31:23',
    timeSpend: '00:03:08',
  },
  {
    id: 2,
    number: '2',
    task: 'lorem ipsum',
    timeStart: '11:28:14',
    timeEnd: '11:31:23',
    timeSpend: '00:03:08',
  },
  {
    id: 3,
    number: '3',
    task: 'lorem ipsum',
    timeStart: '11:28:14',
    timeEnd: '11:31:23',
    timeSpend: '00:03:08',
  },
  {
    id: 4,
    number: '4',
    task: 'lorem ipsum',
    timeStart: '11:28:14',
    timeEnd: '11:31:23',
    timeSpend: '00:03:08',
  },
];

const TimerTable = () => {
  const classes = useStyles();

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
          {rows.map((row) => {
            const { id } = row;

            return (
              <TableRow className={classes.tableRow} key={id}>
                {Object.keys(row)
                  .filter((item) => item !== 'id')
                  .map((item: string) => {
                    return (
                      <TableCell align="center" className={classes.tableCell}>
                        {
                          // @ts-ignore
                          row[item]
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
                  <Button variant="contained" className={classes.tableButton}>
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

export default TimerTable;
