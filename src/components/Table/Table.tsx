import React from 'react';
import { connect } from 'react-redux';
//M-UI
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
// styles
import { useStyles } from './styles';

import FilledTable from './FilledTable/FilledTable';

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
  const { tasks } = props;

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
        {tasks.length === 0 ? <TableBody>'empty'</TableBody> : <FilledTable />}
      </Table>
    </TableContainer>
  );
};

const mapStateToProps = (state: any) => {
  return { tasks: state.tasks };
};

export default connect(mapStateToProps)(TimerTable);
