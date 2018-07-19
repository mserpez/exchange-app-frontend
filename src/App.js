// DEPENDENCIES
import React, { Component } from 'react';
import { Provider } from 'react-redux';
import withStyles from '@material-ui/core/styles/withStyles';
// COMPONENTS
import Paper from '@material-ui/core/Paper';
import { store } from './store';
// CUSTOM COMPONENTS
import { Title } from './Components';
// CONTAINERS
import { ProductContainer } from './Containers/Products';

const styles = {
  root: {
    margin: 10,
    padding: 20,
    borderRadius: 0,
    minHeight: 300,
  },
};

class App extends Component {
  render() {
    const { classes } = this.props;

    return (
      <Provider store={store}>
        <div>
          <Title value="Welcome Guest to our app!" />
          <Paper className={classes.root} elevation={2}>
            <ProductContainer />
          </Paper>
        </div>
      </Provider>
    );
  }
}


export default withStyles(styles)(App);
