/** @format */

import {
  GET_LATESTS_GUEST_POSTS,
  GET_LATESTS_AUTH_POSTS
} from "../actions/posts";
import { Posts } from "../../api/schemas";

const postsInitState = {
  posts: []
};

const postsReducer = (state = postsInitState, action) => {
  let fetchedPosts;
  switch (action.type) {
    case GET_LATESTS_GUEST_POSTS:
      fetchedPosts = Posts.find({}, { limit: 4 }).fetch();
      return { ...state, posts: fetchedPosts };

    case GET_LATESTS_AUTH_POSTS:
      fetchedPosts = Posts.find({}, { limit: 4 }).fetch();
      return { ...state, posts: fetchedPosts };

    default:
      return state;
  }
};

export default postsReducer;
