/** @format */

import { GET_LATESTS_GUEST_NEWS, GET_LATESTS_AUTH_NEWS } from "../actions/news";
import { News } from "../../api/schemas";

const newsInitState = {
  news: []
};

const newsReducer = (state = newsInitState, action) => {
  let fetchedNews;
  switch (action.type) {
    case GET_LATESTS_GUEST_NEWS:
      fetchedNews = News.find({}, { limit: 3 }).fetch();
      return { ...state, news: fetchedNews };

    case GET_LATESTS_AUTH_NEWS:
      fetchedNews = News.find({}, { limit: 3 }).fetch();
      return { ...state, news: fetchedNews };

    default:
      return state;
  }
};

export default newsReducer;
