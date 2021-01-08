import React from 'react';
import { connect } from 'react-redux';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import ColumnWrapper from '../../UI/wrappers/ColumnWrapper/ColumnWrapper';
import { transformTasks } from '../../utils';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import { indigo } from '@material-ui/core/colors';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';

const toSentenceText = (camelCase: string) => {
  const result = camelCase.replace(/([A-Z])/g, ' $1');
  return result.charAt(0).toUpperCase() + result.slice(1);
};

const toPageInfo = (task: any) => {
  const { taskName, timeStart, timeEnd, timeSpend } = task;

  return {
    taskName,
    timeSpend,
    timeStart,
    timeEnd,
  };
};

const useStyles = makeStyles({
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

const TaskPage = (props: any) => {
  const classes = useStyles();
  const { number, tasks } = props;

  const pageTask = transformTasks(tasks).find(
    (item: any) => item.number === +number
  );

  return (
    <ColumnWrapper>
      <Card className={classes.card} variant="outlined">
        <CardContent>
          <h1>Task Info:</h1>

          <List>
            {Object.keys(toPageInfo(pageTask)).map((field, index) => {
              return (
                <div key={index}>
                  <ListItem>
                    <ListItemText
                      primary={toSentenceText(field)}
                      secondary={!pageTask[field] ? 'No Info' : pageTask[field]}
                    />
                  </ListItem>
                  <Divider />
                </div>
              );
            })}
          </List>
        </CardContent>
        <CardActions>
          <Button
            size="small"
            variant="outlined"
            className={classes.button}
            endIcon={<ArrowForwardIcon />}
          >
            To Main Page
          </Button>
        </CardActions>
      </Card>
    </ColumnWrapper>
  );
};

const mapStateToProps = (state: any) => {
  return { tasks: state.tasks };
};

export default connect(mapStateToProps)(TaskPage);
