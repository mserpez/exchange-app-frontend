// DEPENDENCIES
import React from 'react';
import Loader from 'react-loader-spinner';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  loaderContainer: {
    marginTop: 50,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const AppLoader = (props) => {
  const { classes } = props;

  return (
    <div className={classes.loaderContainer}>
      <Loader type="Ball-Triangle" color="#ffc244" height={50} width={50} />
    </div>
  );
};

export default withStyles(styles)(AppLoader);
