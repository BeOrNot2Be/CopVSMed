/** @format */
/* eslint-disable prefer-const */

// eslint-disable-next-line import/no-unresolved
import { Meteor } from "meteor/meteor";
// eslint-disable-next-line import/no-unresolved
import { Tracker } from "meteor/tracker";

export const GET_LATESTS_GUEST_REVIEWS = "GET_LATESTS_GUEST_REVIEWS";

export const GET_LATESTS_AUTH_REVIEWS = "GET_LATESTS_AUTH_REVIEWS";

export const getReviews = () => {
  return dispatch => {
    Tracker.autorun(() => {
      // unmount func
      let user = Meteor.user(); // test with const
      if (user === null) {
        dispatch({
          type: GET_LATESTS_GUEST_REVIEWS,
          subscribe: Meteor.subscribe("reviewsGuest")
        });
      } else {
        dispatch({
          type: GET_LATESTS_AUTH_REVIEWS,
          subscribe: Meteor.subscribe("reviewsAuth", user)
        });
      }
    });
  };
};
