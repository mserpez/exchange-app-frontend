// DEPENDENCIES
import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { reduxForm, formValueSelector } from 'redux-form';
import PropTypes from 'prop-types';
import { compose, lifecycle } from 'recompose';
import { withStyles } from '@material-ui/core/es/styles';
// CONSTANTS
import { NAME } from './constants';
// COMPONENTS
import { Field, Form } from 'redux-form';
import { Grid, Divider } from '@material-ui/core/index';
// ACTIONS
import { fetchProducts, getProductPrices } from './actions';
// SELECTORS
import { getProductDataPrices, getProductsData, getProductsList } from './selectors';
import { selectors as serviceSelectors } from '@yuniku/make-request';
// CUSTOM COMPONENTS
import { Select, AppLoader, ProductCards, NoProducts } from '../../Components';

// Create Styles.
const styles = theme => ({
  container: {
    marginTop: 40,
  },
  productSection: {
    flex: 1,
    alignItems: 'center',
    height: 260,
  },
});

// Create enhancer to handle lifecycle, to avoid use react component for a better performance.
const enhancer = compose(
  lifecycle({
    componentDidMount() {
      this.props.fetchProducts();
    },
    componentDidUpdate(nextProps) {
      const { productSelectValue } = this.props;

      if (productSelectValue && productSelectValue !== nextProps.productSelectValue) {
        handleProductChange(this.props);
      }
    },
  }),
);

const ProductContainer = (props) => {
  const { productPrices, isLoading, classes } = props;

  return (!isLoading) ? (
    <div className={classes.container}>
      <Divider />
      <Grid container spacing={40} className={classes.productSection}>
        <Grid item xs={12} md={4} lg={3}>
          {renderForm(props)}
        </Grid>
        <Grid item xs={12} md={8} lg={9} >
          {(!productPrices) ? <NoProducts /> : null}
          <ProductCards items={productPrices} />
        </Grid>
      </Grid>
    </div>
  ) : <AppLoader />;
};

// Form selector to get values.
const productFormSelector = formValueSelector(NAME);

// Form with field.
const renderForm = (props) => {
  const { handleSubmit, productsList } = props;

  return (
    <Form onSubmit={handleSubmit}>
      <Field name="product" label="Product" items={productsList} component={Select} />
    </Form>
  );
};

// Handle product change function.
const handleProductChange = (props) => {
  const { getProductPrices, productSelectValue } = props;

  getProductPrices(productSelectValue);
};

const mapStateToProps = state => ({
  productsData: getProductsData(state),
  productsList: getProductsList(state),
  productPrices: getProductDataPrices(state),
  productSelectValue: productFormSelector(state, 'product'),
  isLoading: serviceSelectors.serviceIsLoading(state),
});

const mapDispatchToProps = dispatch => bindActionCreators({
  fetchProducts,
  getProductPrices,
}, dispatch);

ProductContainer.propTypes = {
  fetchProducts: PropTypes.func,
  getProductPrices: PropTypes.func,
  productsData: PropTypes.object,
  productsList: PropTypes.arrayOf(PropTypes.string),
  productPrices: PropTypes.object,
  productSelectValue: PropTypes.string,
  isLoading: PropTypes.bool,
};

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  enhancer,
  reduxForm({
    form: NAME,
  }),
  withStyles(styles),
)(ProductContainer);
