import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const styles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  formControl: {
    margin: theme.spacing.unit,
    width: '100%',
  },
  selectEmpty: {
    marginTop: theme.spacing.unit * 2,
  },
});

class SimpleSelect extends React.Component {

  handleChange = event => {
    this.props.input.onChange(event.target.value);
  };

  renderMenuItems = (item) => {
    return <MenuItem key={item} value={item}>{item}</MenuItem>;
  }

  render() {
    const { classes, input: {name, value}, label, items } = this.props;

    return (
        <FormControl className={classes.formControl}>
          <InputLabel htmlFor={name}>{label}</InputLabel>
          <Select
            value={value}
            onChange={this.handleChange}
            inputProps={{
              id: name,
            }}
          >
            {(items) ? items.map(this.renderMenuItems) : null}
          </Select>
        </FormControl>
    );
  }
}

SimpleSelect.propTypes = {
  classes: PropTypes.object.isRequired,
  label: PropTypes.string.isRequired,
};

export default withStyles(styles)(SimpleSelect);