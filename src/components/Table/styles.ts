import { makeStyles } from '@material-ui/core/styles';
import { grey, indigo, lightBlue } from '@material-ui/core/colors';

export const useStyles = makeStyles({
  table: {
    maxWidth: 900,
    marginBottom: '25px',
  },
  tableHeadCell: {
    color: grey['400'],
    fontWeight: 400,
  },
  tableRow: {
    background: lightBlue['50'],
  },
  tableCell: {
    color: indigo['A400'],
  },
  tableButton: {
    color: indigo['A400'],
    background: '#ffffff',
    fontWeight: 400,
  },
});
