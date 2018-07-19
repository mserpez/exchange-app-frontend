// DEPENDENCIES
import React from 'react';
import PropTypes from 'prop-types';
import { Typography } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles/index';

const styles = {
  title: {
    color: '#2abb9b',
  },
};

const Title = (props) => {
  const { classes, value } = props;

  return (
    <Typography variant="display3" align="center" className={classes.title}>
      {value}
    </Typography>
  );
};

Title.propTypes = {
  value: PropTypes.string.isRequired,
};

export default withStyles(styles)(Title);
