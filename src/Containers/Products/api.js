import { apiService } from '../../config/api-service';

export const fetchProducts = apiService.get('/products');
export const getProductPrices = apiService.getWithRouteParams('/products');
