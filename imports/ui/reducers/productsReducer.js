import {
  GET_LATESTS_GUEST_PRODUCTS,
  GET_LATESTS_AUTH_PRODUCTS,
} from '../actions/products';
import { Products } from '../../api/schemas';

const productsInitState = {
  products: {
    reviewsNew: [],
    reviewsPopular: [],
    reviewsTop: [],
  },
};

const productsReducer = (state = productsInitState, action) => {

  let fetchedProducts;
  switch (action.type) {
    case GET_LATESTS_GUEST_PRODUCTS:
      fetchedProducts = {
        reviewsNew: Products.find({}, { limit: 8 }).fetch(),
        reviewsPopular: Products.find({}, { limit: 8 }).fetch(),
        reviewsTop: Products.find({}, { limit: 8 }).fetch(),
      };
      return { ...state, products: fetchedProducts };

    case GET_LATESTS_AUTH_PRODUCTS:
      fetchedProducts = {
        reviewsNew: Products.find({}, { limit: 8 }).fetch(),
        reviewsPopular: Products.find({}, { limit: 8 }).fetch(),
        reviewsTop: Products.find({}, { limit: 8 }).fetch(),
      };
      return { ...state, products: fetchedProducts };

    default:
      return state;
  }
};

export default productsReducer;
