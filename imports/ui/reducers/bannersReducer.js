/** @format */

import {
  GET_LATESTS_GUEST_BANNERS,
  GET_LATESTS_AUTH_BANNERS
} from "../actions/banners";
import { Banners } from "../../api/schemas";

const bannersInitState = {
  banners: [],
  parallaxMainBanner: []
};

const bannersReducer = (state = bannersInitState, action) => {
  let fetchedBanner;
  switch (action.type) {
    case GET_LATESTS_GUEST_BANNERS:
      fetchedBanner = Banners.find({}, { limit: 1 }).fetch();
      return { ...state, parallaxMainBanner: fetchedBanner };

    case GET_LATESTS_AUTH_BANNERS:
      fetchedBanner = Banners.find({}, { limit: 1 }).fetch();
      return { ...state, parallaxMainBanner: fetchedBanner };

    default:
      return state;
  }
};

export default bannersReducer;
