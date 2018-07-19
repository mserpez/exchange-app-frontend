// DEPENDENCIES
import React from 'react';
import PropTypes from 'prop-types';
import { Typography } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles/index';

const styles = theme => ({
  title: {
    marginTop: 25,
    fontSize: 20,
  },
});

const NoProducts = (props) => {
  const { classes, value } = props;

  return (
    <Typography variant="display1" align="center" className={classes.title}>
      Please, select a product to view the price of exchange, currently we have available BNB, BTX and BFX!
    </Typography>
  );
};

NoProducts.propTypes = {
  value: PropTypes.string.isRequired,
};

export default withStyles(styles)(NoProducts);
