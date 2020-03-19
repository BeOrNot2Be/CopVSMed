/** @format */
/* eslint-disable prefer-const */

// eslint-disable-next-line import/no-unresolved
import { Meteor } from "meteor/meteor";
// eslint-disable-next-line import/no-unresolved
import { Tracker } from "meteor/tracker";

export const GET_LATESTS_GUEST_POSTS = "GET_LATESTS_GUEST_POSTS";

export const GET_LATESTS_AUTH_POSTS = "GET_LATESTS_AUTH_POSTS";

export const getPosts = () => {
  return dispatch => {
    Tracker.autorun(() => {
      // unmount func
      let user = Meteor.user(); // test with const
      if (user === null) {
        dispatch({
          type: GET_LATESTS_GUEST_POSTS,
          subscribe: Meteor.subscribe("postsGuest")
        });
      } else {
        dispatch({
          type: GET_LATESTS_AUTH_POSTS,
          subscribe: Meteor.subscribe("postsAuth", user)
        });
      }
    });
  };
};
