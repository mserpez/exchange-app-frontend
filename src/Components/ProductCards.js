import React from 'react';
import _ from 'lodash';
import { Grid } from '@material-ui/core/index';
import ProductCard from './ProductCard';

const ProductCards = ({ items }) => {
  const max = _.maxBy(_.map(items, item => item), 'price');
  const min = _.minBy(_.map(items, item => item), 'price');
  return (
    <Grid container spacing={16}>
      {_.map(items, (item, index) => renderCards(item, index, max, min))}
    </Grid>
  );
};

function renderCards(item, index, max, min) {
  const color = (item.price === max.price) ? 'green' : (item.price === min.price) ? 'red' : 'grey';
  return (
    <Grid item xs={12} md={4} key={index}>
      <ProductCard values={item} color={color} />
    </Grid>
  );
}

export default ProductCards;
