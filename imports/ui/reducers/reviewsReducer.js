/** @format */

import {
  GET_LATESTS_GUEST_REVIEWS,
  GET_LATESTS_AUTH_REVIEWS
} from "../actions/reviews";
import { Reviews } from "../../api/schemas";

const reviewsInitState = {
  reviews: []
};

const reviewsReducer = (state = reviewsInitState, action) => {
  let fetchedReviews;
  switch (action.type) {
    case GET_LATESTS_GUEST_REVIEWS:
      fetchedReviews = Reviews.find({}, { limit: 3 }).fetch();
      return { ...state, reviews: fetchedReviews };

    case GET_LATESTS_AUTH_REVIEWS:
      fetchedReviews = Reviews.find({}, { limit: 3 }).fetch();
      return { ...state, reviews: fetchedReviews };

    default:
      return state;
  }
};

export default reviewsReducer;
