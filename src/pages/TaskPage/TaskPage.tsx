import React from 'react';
import { connect } from 'react-redux';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import ColumnWrapper from '../../UI/wrappers/ColumnWrapper/ColumnWrapper';
import { transformTasks } from '../../utils';

const TaskPage = (props: any) => {
  const { number, tasks } = props;

  const pageTask = transformTasks(tasks).find(
    (item: any) => item.number === +number
  );

  return (
    <ColumnWrapper>
      <List>
        {Object.keys(pageTask).map((field, index) => {
          return (
            <div key={index}>
              <ListItem>
                <ListItemText primary={field} secondary={pageTask[field]} />
              </ListItem>
              <Divider/>
            </div>
          );
        })}
      </List>
      {/*<h1>{number}</h1>*/}
    </ColumnWrapper>
  );
};

const mapStateToProps = (state: any) => {
  return { tasks: state.tasks };
};

export default connect(mapStateToProps)(TaskPage);
