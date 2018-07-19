// DEPENDENCIES
import React from 'react';
import PropTypes from 'prop-types';
import { Typography } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles/index';

const styles = theme => ({
  title: {
    color: theme.palette.secondary.main,
  },
});

const Subtitle = (props) => {
  const { classes, value } = props;

  return (
    <Typography variant="display2" align="center" className={classes.title}>
      {value}
    </Typography>
  );
};

Subtitle.propTypes = {
  value: PropTypes.string.isRequired,
};

export default withStyles(styles)(Subtitle);
