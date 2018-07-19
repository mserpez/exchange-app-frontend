import { makeRequest, normalizers } from '@yuniku/make-request';
import { FETCH, GET_PRICE } from './actionsTypes';
import { fetchProducts as fetchProductsAPI, getProductPrices as getProductPricesAPI } from './api';

// ACTIONS
function init(data, list) {
  return {
    type: FETCH,
    data,
    list,
  };
}

function getProductList(data) {
  return {
    type: GET_PRICE,
    data,
  };
}

// API
export function fetchProducts() {
  return (dispatch) => {
    makeRequest(fetchProductsAPI, { params: {} }, dispatch)
      .then((res) => {
        const normalizeData = normalizers.arrayNormalize(res);
        dispatch(init(normalizeData.entities.data, normalizeData.result));
      });
  };
}

export function getProductPrices(productName, callback) {
  return (dispatch) => {
    makeRequest(getProductPricesAPI, { params: [productName, 'prices'] }, dispatch)
      .then((res) => {
        dispatch(getProductList(res));
        if (callback) callback();
      });
  };
}
