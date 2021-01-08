import { makeStyles } from '@material-ui/core/styles';
import { indigo } from '@material-ui/core/colors';

export const useStyles = makeStyles({
  card: {
    marginTop: '5px',
    minWidth: '320px',
    color: indigo['A400'],
    textAlign: 'center',
  },
  button: {
    color: indigo['A400'],
    borderColor: indigo['A400'],
  },
});
