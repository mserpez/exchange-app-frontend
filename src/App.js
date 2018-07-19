// DEPENDENCIES
import React, { Component } from 'react';
import { Provider } from 'react-redux';
import withStyles from '@material-ui/core/styles/withStyles';
import { MuiThemeProvider } from '@material-ui/core/styles/index';
import { store } from './store';
import theme from './appTheme';
// COMPONENTS
import Paper from '@material-ui/core/Paper';
// CUSTOM COMPONENTS
import { Title, Subtitle } from './Components';
// CONTAINERS
import { ProductContainer } from './Containers/Products';


const styles = {
  root: {
    margin: 10,
    padding: 20,
    borderRadius: 0,
    minHeight: 400,
  },
};

class App extends Component {
  render() {
    const { classes } = this.props;

    return (
      <Provider store={store}>
        <MuiThemeProvider theme={theme}>
          <div>
            <Paper className={classes.root} elevation={2}>
              <Title value="Exchange App" />
              <Subtitle value="Welcome Guest to our App!" />
              <ProductContainer />
            </Paper>
          </div>
        </MuiThemeProvider>
      </Provider>
    );
  }
}


export default withStyles(styles)(App);
