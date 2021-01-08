import React from 'react';
import { connect } from 'react-redux';
// components
import ColumnWrapper from '../../UI/wrappers/ColumnWrapper/ColumnWrapper';
// MUI-components
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
// utils
import { toPageInfo, toSentenceText, transformTasks } from '../../utils';
// styles
import { useStyles } from './mui-styles';

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
