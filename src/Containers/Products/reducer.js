import dotProp from 'dot-prop-immutable';
import {
  FETCH, GET_PRICE,
} from './actionsTypes';

const initialState = {
  data: null,
  list: [],
  prices: null,
};

export default (state = initialState, action) => {
  const { type } = action;

  switch (type) {
    case FETCH:
      state = dotProp.set(state, 'data', action.data);
      state = dotProp.set(state, 'list', action.list);
      return state;

    case GET_PRICE:
      return dotProp.set(state, 'prices', action.data);

    default:
      return state;
  }
};
