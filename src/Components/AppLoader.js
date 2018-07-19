// DEPENDENCIES
import React from 'react';
import Loader from 'react-loader-spinner';
import { withStyles } from '@material-ui/core/styles';

const styles = {
  loaderContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
};

const AppLoader = (props) => {
  const { classes } = props;

  return (
    <div className={classes.loaderContainer}>
      <Loader type="Ball-Triangle" color="#ffc244" height={80} width={80} />
    </div>
  );
};

export default withStyles(styles)(AppLoader);
