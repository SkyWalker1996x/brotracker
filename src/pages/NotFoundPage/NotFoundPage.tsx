import React from 'react';
import { Link } from 'react-router-dom';
// components
import ColumnWrapper from '../../UI/wrappers/ColumnWrapper/ColumnWrapper';
// MUI-components
import Button from '@material-ui/core/Button';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import { useStyles } from '../TaskPage/mui-styles';

const NotFoundPage = () => {
  const classes = useStyles();

  return (
    <ColumnWrapper>
      <h2>404</h2>
      <h3>Oops ... we can't find this page</h3>
      <Link to="/">
        <Button
          size="small"
          variant="outlined"
          className={classes.button}
          endIcon={<ArrowForwardIcon />}
        >
          To Main Page
        </Button>
      </Link>
    </ColumnWrapper>
  );
};

export default NotFoundPage;
