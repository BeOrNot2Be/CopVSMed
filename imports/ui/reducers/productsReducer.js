/** @format */

import {
  GET_LATESTS_GUEST_PRODUCTS,
  GET_LATESTS_AUTH_PRODUCTS
} from "../actions/products";
import { Products } from "../../api/schemas";

const productsInitState = {
  products: {
    reviewsNew: [],
    reviewsPopular: [],
    reviewsTop: []
  }
};

function shuffle(a) {
  // simulate sort actvity for tabs
  // eslint-disable-next-line no-plusplus
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

const productsReducer = (state = productsInitState, action) => {
  let fetchedProducts;
  switch (action.type) {
    case GET_LATESTS_GUEST_PRODUCTS:
      fetchedProducts = {
        reviewsNew: shuffle(Products.find({}, { limit: 8 }).fetch()),
        reviewsPopular: shuffle(Products.find({}, { limit: 8 }).fetch()),
        reviewsTop: shuffle(Products.find({}, { limit: 8 }).fetch())
      };
      return { ...state, products: fetchedProducts };

    case GET_LATESTS_AUTH_PRODUCTS:
      fetchedProducts = {
        reviewsNew: shuffle(Products.find({}, { limit: 8 }).fetch()),
        reviewsPopular: shuffle(Products.find({}, { limit: 8 }).fetch()),
        reviewsTop: shuffle(Products.find({}, { limit: 8 }).fetch())
      };
      return { ...state, products: fetchedProducts };

    default:
      return state;
  }
};

export default productsReducer;
