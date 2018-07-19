import { NAME } from './constants';

export const getProductsList = state => state[NAME].list;
export const getProductsData = state => state[NAME].data;
export const getProductDataPrices = state => state[NAME].prices;
