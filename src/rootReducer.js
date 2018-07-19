import { reducer as serviceReducer, constants as serviceConstants } from '@yuniku/make-request';
import { reducer as formReducer } from 'redux-form';
import { combineReducers } from 'redux';

// MODULES
import { constants as productConstants, reducer as productReducer } from './Containers/Products';

const appReducer = combineReducers({
  form: formReducer,
  [serviceConstants.NAME]: serviceReducer,
  [productConstants.NAME]: productReducer,
});

export default appReducer;
