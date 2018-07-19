import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const styles = {
  card: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    marginBottom: 16,
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
};


const ProductCard = (props) => {
  const { classes, values, color } = props;

  return (
    <div>
      <Card className={classes.card}>
        <CardContent>
          <Typography variant="headline" component="h2" style={{ color }}>
            {values.name}
            :
            {values.price.toFixed(8)}
          </Typography>
          <Typography component="p">
            Bid:
            {values.bid}
          </Typography>
          <Typography component="p">
            Ask:
            {values.ask}
          </Typography>
          <Typography component="p">
            Volume:
            {values.volume}
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
};

ProductCard.propTypes = {
  classes: PropTypes.object.isRequired,
  values: PropTypes.object.isRequired,
  color: PropTypes.string.isRequired,
};

export default withStyles(styles)(ProductCard);
